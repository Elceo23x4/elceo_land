// Controlled test service only. The two canonical mocks are consumed unchanged.
import {readFileSync} from 'node:fs';
const fixture=name=>JSON.parse(readFileSync(new URL(`../contracts/backend/mocks/${name}.json`,import.meta.url),'utf8'));
export async function adminFixture(request,json){
 const url=new URL(request.url,'http://fixture.invalid'),mode=/(?:^|; )m5-admin-state=([^;]+)/.exec(request.headers.cookie??'')?.[1];
 if(url.pathname==='/api/account/access-check'){
  let raw='';for await(const chunk of request)raw+=chunk;const body=JSON.parse(raw);json(200,{ok:true,data:{decision:{subjectId:'m4-parity-user',feature:body.feature,accessLevel:mode==='denied'?'blocked':'allowed'}}});return true;
 }
 if(!url.pathname.startsWith('/api/admin/'))return false;
 if(request.headers['x-elceo-internal-token']!=='controlled-admin-credential'){json(403,{ok:false,error:{code:'forbidden',message:'Controlled missing server credential'}});return true;}
 if(mode==='unavailable'||mode==='denied'){json(mode==='denied'?403:503,{ok:false,error:{code:mode==='denied'?'forbidden':'dependency_failed',message:'Controlled rejection'}});return true;}
 if(mode==='malformed'){json(200,{ok:true,data:{}});return true;}
 if(url.pathname==='/api/admin/system-summary'){const f=fixture('admin-system-summary');f.data.summary.privateMetadata='private-admin-sentinel';json(200,f);return true;}
 if(url.pathname.endsWith('/control-snapshot')){const f=fixture('super-admin-control-snapshot');f.data.snapshot.targetUserId=decodeURIComponent(url.pathname.split('/')[5]);json(200,f);return true;}
 if(url.pathname.endsWith('/readiness')){json(200,{ok:true,data:{providerReadiness:[{providerKind:'totp',readiness:'provider_pending',activated:false,notes:'Controlled provider not activated.'}]}});return true;}
 if(request.method==='POST'){
  let raw='';for await(const chunk of request)raw+=chunk;const body=JSON.parse(raw);
  if(!request.headers['idempotency-key']){json(400,{ok:false,error:{code:'validation_error',message:'Controlled missing key'}});return true;}
  if(url.pathname.endsWith('/challenge'))json(200,{ok:true,data:{challengeId:'controlled-challenge',providerKind:body.providerKind,status:'pending',routeScope:'/api/admin/commercial/users/{userId}/gift-focus-plan',targetUserId:body.targetUserId,expiresAt:'2099-01-01T00:00:00Z',providerStatus:'provider_pending',persistenceStatus:'durable'}});
  else if(url.pathname.endsWith('/verify'))json(200,{ok:true,data:{challengeId:body.challengeId,providerKind:body.providerKind,status:mode==='verified'?'verified':'rejected',verified:mode==='verified',failureReason:mode==='verified'?null:'provider_pending',verifiedAt:mode==='verified'?'2026-10-03T00:00:00Z':null,freshUntil:mode==='verified'?'2099-01-01T00:00:00Z':null,persistenceStatus:'durable',proofAccepted:'private-proof-sentinel'}});
  else if(url.pathname.endsWith('/gift-focus-plan'))json(200,{ok:true,data:{action:'gift_focus_plan',targetUserId:decodeURIComponent(url.pathname.split('/')[5]),giftStatus:'active',startsAt:'2026-10-03T00:00:00Z',endsAt:'2026-10-17T00:00:00Z',entitlementResult:'active',persistenceStatus:'durable'}});
  else json(503,{ok:false,error:{code:'dependency_failed',message:'No controlled mutation result supplied'}});return true;
 }
 json(503,{ok:false,error:{code:'dependency_failed',message:'No controlled read fixture supplied'}});return true;
}
