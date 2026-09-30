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
