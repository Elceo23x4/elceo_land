import 'server-only';
import {evidenceAssets,evidenceHorizons,type EvidenceAsset,type EvidenceHorizon} from '../../lib/contracts/refinements/admin';
import type {TrustedServerOperationKey,ReadOperationKey} from '../../lib/contracts/policy';
import type {ReadInput} from '../../lib/api/transport';
import {getAdminClient} from '../../lib/admin/server';
import {AdminAccessFailure} from '../../lib/admin/access';
import {project,fields,list,nullable,matchesContext,type DisplayValue,type Schema} from './projection';
import * as s from './schemas';
import type {AdminPath} from './routes';
export type AdminSection={title:string;kind:string;value?:DisplayValue};
export type AdminQuery={subjectId?:string;asset?:string;horizon?:string;payloadId?:string;requestId?:string;runId?:string};
export async function adminSections(path:AdminPath,q:AdminQuery):Promise<AdminSection[]>{
 try{
 const client=await getAdminClient();
 const read=async<K extends ReadOperationKey<TrustedServerOperationKey>>(title:string,key:K,input:ReadInput<K>,root:string,schema:Schema):Promise<AdminSection>=>{
  const result=await client.read(key,input);if(result.kind!=='success')return {title,kind:result.kind};
  const raw:unknown=result.value;const data=raw&&typeof raw==='object'&&'data'in raw?raw.data:null;
  const value=project(data&&typeof data==='object'?Reflect.get(data,root):undefined,schema);
  return value===undefined||!matchesContext(value,{subjectId:q.subjectId,targetUserId:q.subjectId,asset:q.asset,horizon:q.horizon})?{title,kind:'invalid_payload'}:{title,kind:'success',value};
 };
 const subject=q.subjectId?{subjectId:q.subjectId}:null;
 const needsSubject:AdminSection={title:'Choose a subject',kind:'selection_required'};
 const asset=q.asset??'xau_usd',horizon=q.horizon??'intraday';
 if(!evidenceAssets.includes(asset as EvidenceAsset)||!evidenceHorizons.includes(horizon as EvidenceHorizon))return [{title:'Market selection',kind:'validation_failure'}];
 const market={asset:asset as EvidenceAsset,horizon:horizon as EvidenceHorizon};
 switch(path){
 case '/admin':return [await read('System summary','GET /api/admin/system-summary',{},'summary',s.system)];
 case '/admin/freshness':return [await read('Domain freshness','GET /api/admin/freshness',{},'freshness',s.freshness)];
 case '/admin/operations':return [await read('Recent runtime','GET /api/admin/ops',{},'ops',s.ops)];
 case '/admin/providers':return [await read('Capability and readiness','GET /api/admin/providers',{},'providers',s.providers)];
 case '/admin/audit':return [await read('Recorded events','GET /api/admin/audit',{},'audit',s.audit)];
 case '/admin/billing':return [await read('Payment operations summary','GET /api/admin/billing/operations/summary',{},'summary',s.billingSummary)];
 case '/admin/billing/operations':return Promise.all([read('Recent failures','GET /api/admin/billing/operations/failures',{},'failures',s.failures),read('Retry candidates','GET /api/admin/billing/operations/retry-candidates',{},'candidates',s.candidates),subject?read('Subject snapshot','GET /api/admin/billing/operations/subject',{query:subject},'snapshot',s.billingSubject):Promise.resolve(needsSubject)]);
 case '/admin/billing/orchestration':return subject?Promise.all([read('Latest run','GET /api/admin/billing/orchestration/latest',{query:subject},'run',nullable(s.orchestrationRun)),read('Stored runs','GET /api/admin/billing/orchestration/runs',{query:subject},'runs',list(s.orchestrationRun)),read('Subject orchestration','GET /api/admin/billing/orchestration/subject',{query:subject},'snapshot',s.orchestrationSubject)]):[needsSubject];
 case '/admin/billing/policy':case '/admin/entitlements':return subject?Promise.all([read('Subject policy','GET /api/admin/billing/policy',{query:subject},'snapshot',s.policy),read('Recorded transitions','GET /api/admin/billing/policy/transitions',{query:subject},'transitions',list(s.transition))]):[needsSubject];
 case '/admin/billing/provider-events':return [await read('Provider events','GET /api/admin/billing/provider-events',{query:subject??{}},'events',s.events)];
 case '/admin/billing/provider-mappings':return [await read('Recorded mappings','GET /api/admin/billing/provider-plan-mappings',{},'mappings',s.mappings)];
 case '/admin/commercial':return [await read('Fixture-only commercial snapshot','GET /api/admin/commercial/metrics',{},'snapshot',s.metrics)];
 case '/admin/commercial/users':return [{title:'Known user lookup',kind:'lookup'}];
 case '/admin/commercial/users/[userId]':return subject?[await read('Commercial control snapshot','GET /api/admin/commercial/users/{userId}/control-snapshot',{path:{userId:subject.subjectId}},'snapshot',s.control),await read('Step-up readiness','GET /api/admin/security/step-up/readiness',{},'providerReadiness',list(fields({providerKind:'string',readiness:'string',activated:'boolean',notes:'string'})))]:[needsSubject];
 case '/admin/commercial/prices':return [await read('Step-up readiness','GET /api/admin/security/step-up/readiness',{},'providerReadiness',list(fields({providerKind:'string',readiness:'string',activated:'boolean',notes:'string'})))];
 case '/admin/market-evidence':case '/admin/market-evidence/inspection':return [await read('Operator coverage','GET /api/admin/market-evidence/inspection',{},'snapshot',s.inspection)];
 case '/admin/market-evidence/payloads':{
 const results=[await read('Normalized evidence','GET /api/admin/market-evidence/payloads',{query:{asset:market.asset}},'payloads',list(s.payload))];
 if(q.payloadId)results.push(await read('Stored payload replay','GET /api/admin/market-evidence/payload-replay',{query:{payloadId:q.payloadId}},'replay',nullable(s.payload)));
 if(q.requestId)results.push(...await Promise.all([read('Provider request','GET /api/admin/market-evidence/provider-request',{query:{requestId:q.requestId}},'request',s.providerRequest),read('Provider response','GET /api/admin/market-evidence/provider-response',{query:{requestId:q.requestId}},'response',s.providerResponse)]));return results;}
 case '/admin/market-evidence/quality':return Promise.all([read('Quality assessments','GET /api/admin/market-evidence/quality',{query:{asset:market.asset}},'pairs',list(fields({payload:s.payload,score:s.quality}))),read('Weighted evidence','GET /api/admin/market-evidence/weighted',{query:market},'snapshot',s.weighted)]);
 case '/admin/market-evidence/cognition':return Promise.all([read('Cognition snapshot','GET /api/admin/market-evidence/cognition',{query:market},'snapshot',s.cognition),read('Reasoning input','GET /api/admin/market-evidence/reasoning-input',{query:{asset:market.asset}},'snapshot',s.reasoning)]);
 case '/admin/market-evidence/scheduled-ingestion':return Promise.all([read('Operator ingestion state','GET /api/admin/market-evidence/scheduled-ingestion/inspection',{},'snapshot',s.scheduledInspection),read('Job policies','GET /api/admin/market-evidence/scheduled-ingestion/policies',{},'snapshot',s.policies),read('Stored runs','GET /api/admin/market-evidence/scheduled-ingestion/runs',{query:q.runId?{runId:q.runId}:{status:'failed'}},q.runId?'run':'runs',q.runId?nullable(s.scheduledRun):list(s.scheduledRun))]);
 case '/admin/seo':return Promise.all([read('Content feed','GET /api/admin/seo/feed',{},'snapshot',s.seo),read('Sitemap records','GET /api/admin/seo/sitemap',{},'sitemapRecords',s.sitemap)]);
 }
 }catch(error){return [{title:'Administrative access',kind:error instanceof AdminAccessFailure?error.kind:'unavailable_degraded'}];}
}
