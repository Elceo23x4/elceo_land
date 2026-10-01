import test from 'node:test';
import assert from 'node:assert/strict';
import { relayRecovery } from '../../lib/auth/recovery-core.ts';
const config={backendOrigin:'https://backend.invalid',publicOrigin:'https://app.invalid'};
const make=(path='/api/auth/password-reset/request',headers:Record<string,string>={},body='{"email":"test@example.test"}')=>new Request('https://app.invalid'+path,{method:'POST',headers:{origin:config.publicOrigin,'content-type':'application/json','idempotency-key':'logical-key',...headers},body});
test('recovery only exposes exact routes, origins and bounded JSON without authority',async()=>{
 let calls=0;
 const transport:typeof fetch=async(_url,init)=>{calls++;const h=new Headers(init?.headers);assert.equal(h.get('cookie'),null);assert.equal(h.get('authorization'),null);assert.equal(h.get('idempotency-key'),'logical-key');assert.equal(init?.redirect,'manual');return Response.json({accepted:true},{status:202,headers:{'set-cookie':'forbidden=value'}});};
 for(const request of [make('/api/auth/other'),make('/api/auth/password-reset/request?target=x'),make(undefined,{origin:'https://evil.invalid'}),make(undefined,{'authorization':'Bearer spoof'}),make(undefined,{'x-elceo-internal-token':'spoof'}),make(undefined,{'idempotency-key':''}),make(undefined,{},'x'.repeat(8193))]) assert((await relayRecovery(request,config,transport)).status>=400);
 assert.equal(calls,0);
 const response=await relayRecovery(make(undefined,{cookie:'opaque=value'}),config,transport);
 assert.equal(response.status,202);assert.equal(response.headers.get('set-cookie'),null);assert.deepEqual(await response.json(),{accepted:true});assert.equal(calls,1);
});
test('no retry or invented success for malformed, redirected, or failed responses',async()=>{
 for(const factory of [()=>new Response('not json'),()=>Response.json({accepted:false}),()=>new Response(null,{status:302,headers:{location:'https://elsewhere.invalid'}}),()=>{throw new Error('network');}]){
  let calls=0;const response=await relayRecovery(make(),config,async()=>{calls++;return factory();});assert(response.status>=400);assert.equal(calls,1);assert.equal(response.headers.get('location'),null);
 }
});
test('confirm preserves only the two pinned dedicated error outcomes',async()=>{
 for(const error of ['invalid_or_expired_token','password_policy_rejected']){
 const response=await relayRecovery(make('/api/auth/password-reset/confirm'),config,async()=>Response.json({error},{status:400}));assert.equal(response.status,400);assert.deepEqual(await response.json(),{error});
 }
});
test('recovery response streaming bound rejects declared, chunked and dishonest sizes without retry',async()=>{
 for(const declared of [undefined,'0','999999']){
  let canceled=false,calls=0,pulls=0;
  const stream=new ReadableStream<Uint8Array>({pull(controller){pulls++;controller.enqueue(new TextEncoder().encode(' '.repeat(2048)));},cancel(){canceled=true;}});
  const response=await relayRecovery(make(),config,async()=>{calls++;return new Response(stream,{status:202,headers:declared?{'content-length':declared}:{}});});
  assert.equal(response.status,502);assert.deepEqual(await response.json(),{error:'recovery_unavailable'});assert.equal(calls,1);assert.equal(canceled,true);assert(pulls<=4);
 }
});
test('recovery bound counts UTF-8 bytes and preserves fixed outcomes with serialization headroom',async()=>{
 const literal=JSON.stringify({accepted:true});
 const accepted=await relayRecovery(make(),config,async()=>new Response(literal+' '.repeat(4096-literal.length),{status:202}));assert.equal(accepted.status,202);
 for(const body of [literal+' '.repeat(4097-literal.length),JSON.stringify({accepted:true,extra:'é'.repeat(2048)}),new Uint8Array([0xff])]){
  const result=await relayRecovery(make(),config,async()=>new Response(body,{status:202}));assert.equal(result.status,502);
 }
});
