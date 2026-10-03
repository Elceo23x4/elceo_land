import 'server-only';
import type {PolicyClient} from '../api/transport.ts';
import type {TrustedServerOperationKey} from '../contracts/policy.ts';
import {parseCommandBody,type AdminCommand} from '../../features/admin/commands.ts';
import {project,fields,type Schema,type DisplayValue} from '../../features/admin/projection.ts';
import * as s from '../../features/admin/schemas.ts';
export class InvalidAdminCommand extends Error{}
export type AdminCommandResult={kind:string;status:number|null;value?:DisplayValue};
export async function executeAdminCommand(command:AdminCommand,input:unknown,key:string,client:PolicyClient<TrustedServerOperationKey>):Promise<AdminCommandResult>{
 const body=<K extends AdminCommand>(k:K)=>{const parsed=parseCommandBody(k,input);if(!parsed)throw new InvalidAdminCommand();return parsed;};
 const idempotency={key};
 const finish=async(result:Promise<{kind:string;status:number|null;value?:unknown}>,root:string|null,schema:Schema):Promise<AdminCommandResult>=>{
  const r=await result;if(r.kind!=='success')return {kind:r.kind,status:r.status};
  const envelope=r.value;const data=envelope&&typeof envelope==='object'&&'data'in envelope?envelope.data:null;
  const value=project(root&&data&&typeof data==='object'?Reflect.get(data,root):data,schema);
  if(value===undefined)return {kind:'unknown_error',status:r.status};
  const original=input&&typeof input==='object'?input:null;
  const record=value&&typeof value==='object'&&!Array.isArray(value)?value:null;
  if(original&&record){for(const [source,target]of [['subjectId','subjectId'],['userId','targetUserId'],['challengeId','challengeId'],['targetUserId','targetUserId']] as const){if(source in original&&target in record&&Reflect.get(original,source)!==Reflect.get(record,target))return {kind:'unknown_error',status:r.status};}}
  return {kind:'success',status:r.status,value};
 };
 switch(command){
 case 'trial':return finish(client.mutate('POST /api/admin/billing/trial',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'activate':return finish(client.mutate('POST /api/admin/billing/activate',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'renew':return finish(client.mutate('POST /api/admin/billing/renew',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'changePlan':return finish(client.mutate('POST /api/admin/billing/change-plan',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'pastDue':return finish(client.mutate('POST /api/admin/billing/past-due',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'cancelPeriod':return finish(client.mutate('POST /api/admin/billing/cancel-at-period-end',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'expire':return finish(client.mutate('POST /api/admin/billing/expire',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'pause':return finish(client.mutate('POST /api/admin/billing/pause',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'resume':return finish(client.mutate('POST /api/admin/billing/resume',{body:body(command),idempotency}),'subscription',s.subscription);
 case 'entitlementPlan':return finish(client.mutate('POST /api/admin/entitlements/plan',{body:body(command),idempotency}),'accountState',s.entitlement);
 case 'entitlementState':return finish(client.mutate('POST /api/admin/entitlements/state',{body:body(command),idempotency}),'accountState',s.entitlement);
 case 'entitlementOverride':return finish(client.mutate('POST /api/admin/entitlements/override',{body:body(command),idempotency}),'accountState',s.entitlement);
 case 'mapping':return finish(client.mutate('POST /api/admin/billing/provider-plan-mapping',{body:body(command),idempotency}),'mapping',fields({providerKind:'string',externalPriceId:'string',mappedPlanKind:'string',interval:'string'}));
 case 'dryRun':return finish(client.mutate('POST /api/admin/market-evidence/scheduled-ingestion/dry-run',{body:body(command),idempotency}),'report',fields({generatedAt:'string',pass:'boolean',run:s.scheduledRun}));
 case 'replay':return finish(client.mutate('POST /api/admin/market-evidence/scheduled-ingestion/replay',{body:{...body(command),replayMode:'dry_run_fixture'},idempotency}),'report',fields({generatedAt:'string',pass:'boolean',run:s.scheduledRun}));
 case 'gift':{const {userId,...b}=body(command);return finish(client.mutate('POST /api/admin/commercial/users/{userId}/gift-focus-plan',{path:{userId},body:b,idempotency}),null,fields({action:'string',targetUserId:'string',giftStatus:'string',startsAt:'string',endsAt:'string',entitlementResult:'string',persistenceStatus:'string'}));}
 case 'retract':{const {userId,...b}=body(command);return finish(client.mutate('POST /api/admin/commercial/users/{userId}/retract-focus-gift',{path:{userId},body:b,idempotency}),null,fields({action:'string',targetUserId:'string',giftStatus:'string',entitlementResult:'string',persistenceStatus:'string'}));}
 case 'restrict':{const {userId,...b}=body(command);return finish(client.mutate('POST /api/admin/commercial/users/{userId}/restrict',{path:{userId},body:b,idempotency}),null,fields({action:'string',targetUserId:'string',restrictionKind:'string',restrictionStatus:'string',entitlementResult:'string',persistenceStatus:'string'}));}
 case 'challenge':return finish(client.mutate('POST /api/admin/security/step-up/challenge',{body:body(command),idempotency}),null,s.challenge);
 case 'verify':return finish(client.mutate('POST /api/admin/security/step-up/verify',{body:body(command),idempotency}),null,s.verification);
 }
}
