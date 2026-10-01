// Display subsets of the frozen browser-safe billing DTO, entitlement types and
// specialized billing-intention handler. Never derive access from payment state.
import {record} from '../workspace/projection.ts';
import {rows,strings} from '../review/projection.ts';
const nullableStrings=(r:Record<string,unknown>,keys:string[])=>keys.every(k=>r[k]===null||typeof r[k]==='string');
export function billingProjection(value:unknown){
 const s=record(value),plan=record(s?.plan),subscription=s?.subscription===null?null:record(s?.subscription);
 if(!s||typeof s.generatedAt!=='string'||!plan||typeof plan.kind!=='string'||typeof plan.accountState!=='string'||!nullableStrings(plan,['startedAt','endsAt','trialEndsAt']))return null;
 if(s.subscription!==null&&(!subscription||typeof subscription.state!=='string'||typeof subscription.willCancelAtPeriodEnd!=='boolean'||!nullableStrings(subscription,['currentPeriodStart','currentPeriodEnd','trialEndsAt','canceledAt'])))return null;
 return {generatedAt:s.generatedAt,plan,subscription};
}
export function safeCommercialUrl(value:unknown):string|null {
 if(typeof value!=='string')return null;
 try{const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password?url.href:null;}catch{return null;}
}
export function intentionProjection(value:unknown){
 const d=record(value);if(!d)return null;
 if(d.intention===null&&typeof d.newIntentionAllowed==='boolean')return {kind:'none' as const,newIntentionAllowed:d.newIntentionAllowed};
 const i=record(d.intention);if(!i||typeof i.operationId!=='string'||typeof i.paymentState!=='string'||!nullableStrings(i,['subscriptionState','checkoutUrl'])||['commercialAccessActive','checkoutContinuationAvailable','reconciliationRequired','newIntentionAllowed','billingManagementRequired'].some(k=>typeof i[k]!=='boolean'))return null;
 return {kind:'recorded' as const,operationId:i.operationId,paymentState:i.paymentState,subscriptionState:i.subscriptionState as string|null,commercialAccessActive:i.commercialAccessActive as boolean,reconciliationRequired:i.reconciliationRequired as boolean,newIntentionAllowed:i.newIntentionAllowed as boolean,billingManagementRequired:i.billingManagementRequired as boolean,checkoutUrl:i.checkoutContinuationAvailable?safeCommercialUrl(i.checkoutUrl):null};
}
export function entitlementProjection(value:unknown){
 const p=record(record(value)?.profile);if(!p||['planKind','accountState','generatedAt'].some(k=>typeof p[k]!=='string'))return null;
 const allowed=strings(p.allowedFeatures),blocked=strings(p.blockedFeatures),limited=rows(p.limitedFeatures,['feature']),limits=rows(p.usageLimits,['counterKey','period'],['maxCount']);
 if(!allowed||!blocked||!limited||!limits||limited.some(v=>v.limitCounterKey!==null&&typeof v.limitCounterKey!=='string'))return null;
 return {plan:p.planKind as string,state:p.accountState as string,generatedAt:p.generatedAt as string,allowed,blocked,limited,limits};
}
export const usageProjection=(value:unknown)=>rows(value,['counterId','counterKey','period','periodStart','periodEnd','updatedAt'],['count']);
export function accessDecisionsProjection(value:unknown){const d=rows(value,['decisionId','feature','accessLevel','reasonCode','decidedAt']);return d&&d.every(r=>['currentUsage','limitMax'].every(k=>r[k]===null||(typeof r[k]==='number'&&Number.isFinite(r[k]))))?d:null;}
