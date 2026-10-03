import 'server-only';
import { createTrustedServerApiClient } from '../api/server.ts';
import { createBrowserApiClient } from '../api/browser.ts';
import { isCanonicalAdminRole, resolveCanonicalSession, type AuthTopologyConfig } from '../auth/core.ts';
import { trustedOperationRegistry } from '../contracts/generated/trusted-operation-registry.generated.ts';

export class AdminAccessFailure extends Error {
 readonly kind:'unauthenticated'|'role_denied'|'permission_denied'|'unavailable_degraded'|'unknown_error';readonly status:number;
 constructor(kind:AdminAccessFailure['kind'],status:number){super(kind);this.kind=kind;this.status=status;}
}
/** Injected transport is server-only. No caller-controlled headers or credential forwarding. */
export async function adminClient(config:AuthTopologyConfig,cookie:string,credential:string|undefined,fetcher:typeof fetch=fetch){
 const session=await resolveCanonicalSession(cookie,config,fetcher);
 if(session.kind==='signed_out')throw new AdminAccessFailure('unauthenticated',401);
 if(session.kind!=='authenticated')throw new AdminAccessFailure('unavailable_degraded',503);
 if(!isCanonicalAdminRole(session.session.user.role))throw new AdminAccessFailure('role_denied',403);
 if(!credential)throw new AdminAccessFailure('unavailable_degraded',503);
 const owner=createBrowserApiClient({baseOrigin:config.backendOrigin,fetchImplementation:(url,init)=>{
  const headers=new Headers(init?.headers);headers.set('cookie',cookie);
  return fetcher(url,{...init,headers,redirect:'manual',cache:'no-store'});
 }});
 return createTrustedServerApiClient({baseOrigin:config.backendOrigin,fetchImplementation:async(url,init)=>{
  const u=new URL(String(url));
  const policy=Object.values(trustedOperationRegistry).find(p=>p.method===init?.method&&new RegExp('^'+p.routePath.replace(/\{[^}]+\}/g,'[^/]+')+'$').test(u.pathname));
  if(!policy||u.origin!==config.backendOrigin)throw new AdminAccessFailure('role_denied',403);
  if(policy.adminPermission==='super_admin'&&session.session.user.role!=='super_admin')return Response.json({ok:false,error:{code:'forbidden',message:'Administrative role denied'}},{status:403});
  const feature=policy.adminPermission==='admin.read'?'admin.read':'admin.ops';
  const access=await owner.mutate('POST /api/account/access-check',{body:{feature},idempotency:{key:crypto.randomUUID()}});
  if(access.kind!=='success')return Response.json({ok:false,error:{code:access.kind==='forbidden'?'forbidden':access.kind==='unauthenticated'?'unauthorized':'dependency_failed',message:'Administrative access could not be confirmed'}},{status:access.kind==='forbidden'?403:access.kind==='unauthenticated'?401:503});
  const envelope=access.value as unknown;const data=envelope&&typeof envelope==='object'&&'data'in envelope?envelope.data:null;
  const decision=data&&typeof data==='object'&&'decision'in data?data.decision:null;
  if(!decision||typeof decision!=='object'||!('feature'in decision)||decision.feature!==feature||!('subjectId'in decision)||decision.subjectId!==session.session.user.id||!('accessLevel'in decision)||!['allowed','limited'].includes(String(decision.accessLevel)))return Response.json({ok:false,error:{code:'forbidden',message:'Administrative permission denied'}},{status:403});
  const headers=new Headers(init?.headers);headers.set('cookie',cookie);headers.set('x-elceo-internal-token',credential);
  const response=await fetcher(url,{...init,headers,cache:'no-store',redirect:'manual'});
  const payload=await response.text();
  let credentialEcho=payload.includes(credential);
  try{JSON.parse(payload,(key,value)=>{if(key.includes(credential)||typeof value==='string'&&value.includes(credential))credentialEcho=true;return value;});}catch{/* Transport rejects malformed JSON; no raw exception is forwarded. */}
  if(credentialEcho)return Response.json({ok:false,error:{code:'dependency_failed',message:'Administrative response withheld'}},{status:502});
  return new Response(payload,{status:response.status,headers:{'content-type':response.headers.get('content-type')??'application/json'}});
 }});
}
