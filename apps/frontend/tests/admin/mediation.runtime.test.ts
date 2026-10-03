import test from 'node:test';
import assert from 'node:assert/strict';
import {commandDefinitions,type Field} from '../../features/admin/commands.ts';
import {mediateAdminCommand} from '../../lib/admin/mediation.ts';
const config={backendOrigin:'https://backend.invalid',publicOrigin:'https://app.invalid'};
const credential='ADMIN_PRIVATE_TEST_SENTINEL';
const session={user:{id:'operator',name:'Operator',email:'operator@example.test',role:'super_admin',planTier:'free',onboardingCompletedAt:null},expires:'2099-01-01T00:00:00Z'};
const request=(command='entitlementState',body:unknown={subjectId:'target',accountState:'active'},headers:Record<string,string>={})=>new Request(config.publicOrigin+'/api/admin-command',{method:'POST',headers:{origin:config.publicOrigin,'content-type':'application/json','idempotency-key':'logical-key',cookie:'opaque=session',...headers},body:JSON.stringify({command,body})});
function backend(options:{role?:string;signedOut?:boolean;denied?:boolean;status?:number;payload?:unknown;network?:boolean}={}){
 const calls:{url:string;headers:Headers;body:unknown}[]=[];
 const fetcher:typeof fetch=async(input,init)=>{const url=String(input),headers=new Headers(init?.headers),body=init?.body?JSON.parse(String(init.body)):null;calls.push({url,headers,body});
 if(url.endsWith('/api/auth/session'))return Response.json(options.signedOut?{}:{...session,user:{...session.user,role:options.role??session.user.role}});
 if(url.endsWith('/api/account/access-check'))return Response.json({ok:true,data:{decision:{feature:body.feature,subjectId:'operator',accessLevel:options.denied?'blocked':'allowed'}}});
 assert.equal(headers.get('x-elceo-internal-token'),credential);assert.equal(headers.get('cookie'),'opaque=session');assert.equal(init?.redirect,'manual');
 if(options.network)throw new Error('controlled disconnect');
 return Response.json(options.payload??{ok:true,data:{accountState:{subjectId:'target',planKind:'free',accountState:'active',updatedAt:'now',planStartedAt:null,planEndsAt:null,trialEndsAt:null,internalOverride:false,private:credential}}},{status:options.status??200});
 };return {calls,fetcher};
}
test('same-origin, explicit command and body policy reject spoofed authority without a privileged request',async()=>{
 for(const r of [request('arbitrary'),request('entitlementState',{subjectId:'target',accountState:'active',actorUserId:'spoof'}),request(undefined,undefined,{origin:'https://evil.invalid'}),request(undefined,undefined,{'x-elceo-internal-token':'spoof'}),request(undefined,undefined,{'authorization':'spoof'}),request(undefined,undefined,{'idempotency-key':''}),request('price',{})]){
 const b=backend();assert((await mediateAdminCommand(r,config,credential,b.fetcher)).status>=400);assert.equal(b.calls.filter(c=>c.url.includes('/api/admin/')).length,0);
 }
});
test('signed-out, non-admin, missing credential and backend-denied permission fail closed',async()=>{
 for(const [options,secret,status]of [[{signedOut:true},credential,401],[{role:'user'},credential,403],[{},undefined,503],[{denied:true},credential,403]] as const){const b=backend(options);assert.equal((await mediateAdminCommand(request(),config,secret,b.fetcher)).status,status);assert.equal(b.calls.filter(c=>c.url.includes('/api/admin/')).length,0);}
});
test('canonical permission is checked and privileged response is whitelisted; credential echo is withheld',async()=>{
 const record={subjectId:'target',planKind:'free',accountState:'active',updatedAt:'now',planStartedAt:null,planEndsAt:null,trialEndsAt:null,internalOverride:false,private:'not-for-browser'};
 const b=backend({payload:{ok:true,data:{accountState:record}}});const response=await mediateAdminCommand(request(),config,credential,b.fetcher);assert.equal(response.status,200);const text=await response.text();assert(!text.includes('not-for-browser'));assert(!text.includes(credential));assert.equal(b.calls.at(-1)?.headers.get('idempotency-key'),'logical-key');
 const echo=backend();const denied=await mediateAdminCommand(request(),config,credential,echo.fetcher);assert(denied.status>=400);assert(!(await denied.text()).includes(credential));
});
test('wrong admin role cannot invoke a super-admin commercial operation',async()=>{
 const b=backend({role:'support_admin'});const r=await mediateAdminCommand(request('gift',{userId:'target',duration:'two_weeks',stepUpChallengeId:'challenge'}),config,credential,b.fetcher);assert.equal(r.status,403);assert.equal(b.calls.filter(c=>c.url.includes('/api/admin/')).length,0);
});
test('missing step-up is rejected; expired/replayed challenges remain denied by backend, never retried',async()=>{
 for(const challenge of [undefined,'expired','replayed']){const b=backend({status:403,payload:{ok:false,error:{code:'forbidden',message:'step_up_verification_failed'}}});const r=await mediateAdminCommand(request('gift',{userId:'target',duration:'two_weeks',...(challenge?{stepUpChallengeId:challenge}:{})}),config,credential,b.fetcher);assert.equal(r.status,challenge?403:400);assert.equal(b.calls.filter(c=>c.url.includes('/api/admin/')).length,challenge?1:0);}
});
test('controlled verification success is only a backend receipt; commercial call remains independently authorized',async()=>{
 const b=backend({payload:{ok:true,data:{status:'verified',verified:true,failureReason:null,challengeId:'challenge',providerKind:'totp',verifiedAt:'now',freshUntil:'later',persistenceStatus:'durable',proofAccepted:'private'}}});const r=await mediateAdminCommand(request('verify',{challengeId:'challenge',providerKind:'totp',proof:'sensitive-proof'}),config,credential,b.fetcher);assert.equal(r.status,200);const text=await r.text();assert(!text.includes('sensitive-proof'));assert(!text.includes('proofAccepted'));assert.equal(b.calls.filter(c=>c.url.includes('/api/admin/')).length,1);
});
test('401/403/429/503 and ambiguous network outcomes do not retry or invent success',async()=>{
 for(const status of [401,403,429,503]){const b=backend({status,payload:{ok:false,error:{code:status===503?'dependency_failed':'forbidden',message:'Controlled rejection'}}});const r=await mediateAdminCommand(request(),config,credential,b.fetcher);assert.equal(r.status,status);assert(!(await r.text()).includes(credential));assert.equal(b.calls.filter(c=>c.url.includes('/api/admin/')).length,1);}
 const b=backend({network:true});const r=await mediateAdminCommand(request(),config,credential,b.fetcher);assert.equal((await r.json()).kind,'unknown_error');assert.equal(b.calls.filter(c=>c.url.includes('/api/admin/')).length,1);
});

test('every command dispatches exactly once with its original idempotency key',async()=>{
 const paths={trial:'billing/trial',activate:'billing/activate',renew:'billing/renew',changePlan:'billing/change-plan',pastDue:'billing/past-due',cancelPeriod:'billing/cancel-at-period-end',expire:'billing/expire',pause:'billing/pause',resume:'billing/resume',entitlementPlan:'entitlements/plan',entitlementState:'entitlements/state',entitlementOverride:'entitlements/override',mapping:'billing/provider-plan-mapping',dryRun:'market-evidence/scheduled-ingestion/dry-run',replay:'market-evidence/scheduled-ingestion/replay',gift:'commercial/users/target/gift-focus-plan',retract:'commercial/users/target/retract-focus-gift',restrict:'commercial/users/target/restrict',challenge:'security/step-up/challenge',verify:'security/step-up/verify'};
 for(const [command,definition]of Object.entries(commandDefinitions)){const body:Record<string,unknown>={};for(const [key,spec]of Object.entries(definition.fields)as [string,Field][]){if(spec.kind==='optional')continue;body[key]=spec.kind==='choice'?spec.values![0]:spec.kind==='boolean'?false:spec.kind==='timestamp'?'2026-10-03T00:00:00Z':['userId','subjectId','targetUserId'].includes(key)?'target':'controlled';}const b=backend({status:403,payload:{ok:false,error:{code:'forbidden',message:'Controlled backend denial'}}});assert.equal((await mediateAdminCommand(request(command,body),config,credential,b.fetcher)).status,403,command);const calls=b.calls.filter(c=>c.url.includes('/api/admin/'));assert.equal(calls.length,1,command);assert.equal(calls[0].url,config.backendOrigin+'/api/admin/'+paths[command as keyof typeof paths]);assert.equal(calls[0].headers.get('idempotency-key'),'logical-key');}
});
test('wrong selected subject cannot be presented as successful',async()=>{const b=backend({payload:{ok:true,data:{accountState:{subjectId:'other',planKind:'free',accountState:'active',updatedAt:'now',planStartedAt:null,planEndsAt:null,trialEndsAt:null,internalOverride:false}}}});assert.equal((await(await mediateAdminCommand(request(),config,credential,b.fetcher)).json()).kind,'unknown_error');});
test('oversized request rejected before privileged access',async()=>{const b=backend();assert.equal((await mediateAdminCommand(request('verify',{challengeId:'c',providerKind:'totp',proof:'x'.repeat(65536)}),config,credential,b.fetcher)).status,413);assert.equal(b.calls.length,0);});
