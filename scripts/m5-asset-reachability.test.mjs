import test from 'node:test';
import assert from 'node:assert/strict';
import { assetReachability } from './m5-asset-reachability.mjs';
const root='apps/frontend/page.tsx';
const asset = {file:'active.webp',classification:'production-consumed'};
test('actual imported JSX/CSS references count; dead strings and disconnected modules do not',()=>{
 const source=new Map([[root,'import "./scene";'],['apps/frontend/scene.tsx','import "./scene.css"; export const View=()=> <img src="/m5-assets/active.webp"/>;'],['apps/frontend/scene.css','a{background:url("/m5-assets/texture.webp")}']]);
 const manifest=[asset,{file:'texture.webp',classification:'production-consumed'}];
 assert.equal(assetReachability(source,manifest,[root]).reachable.length,2);
 source.set(root,'const unused = "/m5-assets/active.webp";');
 assert.throws(()=>assetReachability(source,manifest,[root]),/disagreement/);
});
test('missing provenance and inactive-but-consumed classifications fail closed',()=>{
 const sources=new Map([[root,'export const View=()=> <img src="/m5-assets/active.webp"/>;']]);
 assert.throws(()=>assetReachability(sources,[],[root]),/absent from provenance/);
 assert.throws(()=>assetReachability(sources,[{...asset,classification:'unused-candidate'}],[root]),/disagreement/);
});
test('responsive map requires reachable selection and correct derivative identities',()=>{
 const adapter='apps/frontend/features/landing/SceneMedia.tsx';
 const map='apps/frontend/features/landing/scene-media.json';
 const pair={desktop:{src:'/m5-assets/world-desktop.webp',width:100,height:100},mobile:{src:'/m5-assets/world-mobile.webp',width:50,height:50}};
 const manifest=Object.entries(pair).map(([,v])=>({file:v.src.split('/').at(-1),width:v.width,height:v.height,classification:'production-consumed'}));
 const sources=new Map([[root,'import { SceneMedia as Media } from "./features/landing/SceneMedia"; export const View=()=> <Media asset="world"/>;'],[adapter,'import media from "./scene-media.json";'],[map,JSON.stringify({world:pair})]]);
 assert.equal(assetReachability(sources,manifest,[root]).reachable.length,2);
 sources.set(map,JSON.stringify({world:pair,orphan:pair}));assert.throws(()=>assetReachability(sources,manifest,[root]),/Unused/);
 sources.set(map,JSON.stringify({world:{...pair,mobile:pair.desktop}}));assert.throws(()=>assetReachability(sources,manifest,[root]),/Derivative mismatch/);
 sources.delete(map);assert.throws(()=>assetReachability(sources,manifest,[root]),/Unresolved/);
});
test('lazy imported runtime references are traced without crediting disconnected files',()=>{
 const sources=new Map([[root,'void import("./lazy");'],['apps/frontend/lazy.tsx','export const View=()=> <img src="/m5-assets/active.webp"/>;']]);
 assert.deepEqual(assetReachability(sources,[asset],[root]).reachable,['active.webp']);
});
