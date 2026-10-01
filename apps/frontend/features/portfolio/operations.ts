// Presentation metadata for exact frozen operations, not an alternate operation registry.
import type {EvidencedPortfolioBodies} from '../../lib/contracts/refinements/portfolio';
import {priorities,healthValues,timeframes,actionKinds,watchTransitions,healthTransitions,positionTransitions} from './values.ts';
export const operationDetails={
 'watch-create':{operation:'POST /api/portfolio/watchlist',label:'Add watchlist entry',response:'entry',pathKey:null},
 'watch-edit':{operation:'PATCH /api/portfolio/watchlist/{entryId}',label:'Edit watchlist entry',response:'entry',pathKey:'entryId'},
 'watch-status':{operation:'POST /api/portfolio/watchlist/{entryId}/status',label:'Change watchlist status',response:'entry',pathKey:'entryId'},
 'watch-health':{operation:'POST /api/portfolio/watchlist/{entryId}/thesis-health',label:'Record thesis health',response:'entry',pathKey:'entryId'},
 'watch-archive':{operation:'POST /api/portfolio/watchlist/{entryId}/archive',label:'Archive entry',response:'entry',pathKey:'entryId'},
 'position-create':{operation:'POST /api/portfolio/positions',label:'Add proposed position',response:'position',pathKey:null},
 'position-edit':{operation:'PATCH /api/portfolio/positions/{positionId}',label:'Edit position record',response:'position',pathKey:'positionId'},
 'position-open':{operation:'POST /api/portfolio/positions/{positionId}/open',label:'Record position opening',response:'position',pathKey:'positionId'},
 'position-reduce':{operation:'POST /api/portfolio/positions/{positionId}/reduce',label:'Record position reduction',response:'position',pathKey:'positionId'},
 'position-close':{operation:'POST /api/portfolio/positions/{positionId}/close',label:'Record position closure',response:'position',pathKey:'positionId'},
 'position-cancel':{operation:'POST /api/portfolio/positions/{positionId}/cancel',label:'Cancel proposed record',response:'position',pathKey:'positionId'},
 'position-health':{operation:'POST /api/portfolio/positions/{positionId}/thesis-health',label:'Record thesis health',response:'position',pathKey:'positionId'},
 'action-create':{operation:'POST /api/portfolio/actions',label:'Add action item',response:'action',pathKey:null},
 'action-edit':{operation:'PATCH /api/portfolio/actions/{actionId}',label:'Edit action item',response:'action',pathKey:'actionId'},
 'action-complete':{operation:'POST /api/portfolio/actions/{actionId}/complete',label:'Mark action completed',response:'action',pathKey:'actionId'},
 'action-dismiss':{operation:'POST /api/portfolio/actions/{actionId}/dismiss',label:'Dismiss action',response:'action',pathKey:'actionId'},
 'snapshot':{operation:'POST /api/portfolio/snapshot/generate',label:'Generate portfolio snapshot',response:'snapshot',pathKey:null},
} as const;
export type PortfolioAction=keyof typeof operationDetails;
type Operation<A extends PortfolioAction>=typeof operationDetails[A]['operation'];
export type PortfolioBody<A extends PortfolioAction>=Operation<A> extends keyof EvidencedPortfolioBodies?EvidencedPortfolioBodies[Operation<A>]:Record<string,never>;
type Field={key:string;label:string;kind:'text'|'number'|'numbers'|'time'|'select';required?:boolean;options?:readonly string[]};
const f=(key:string,label:string,kind:Field['kind']='text',required=false,options?:readonly string[]):Field=>({key,label,kind,required,options});
const market=[f('asset','Market identifier','text',true),f('timeframe','Timeframe','select',true,timeframes)];
const priority=(required=false)=>f('priority','Priority','select',required,priorities);
const health=(required=false)=>f('thesisHealth','Recorded thesis health','select',required,healthValues);
const note=f('note','Recorded note');
const positionFields=[f('entryPrice','Recorded entry price','number'),f('stopLoss','Recorded stop','number'),f('takeProfitLevels','Recorded targets · one per line','numbers'),f('size','Recorded size','number'),note];
const links=[f('linkedJournalCaseId','Linked journal case ID'),f('linkedReasoningRunId','Linked reasoning run ID'),f('linkedSnapshotId','Linked snapshot ID'),f('linkedDriftId','Linked drift ID')];
export const fields:Record<PortfolioAction,readonly Field[]>={
 'watch-create':[...market,priority(true),f('status','Initial recorded status','select',false,['watching','thesis_active','readiness_pending','archived']),health(),note,...links],
 'watch-edit':[priority(),note], 'watch-status':[f('status','Next recorded status','select',true,['watching','thesis_active','readiness_pending','archived'])], 'watch-health':[health(true)], 'watch-archive':[],
 'position-create':[...market,f('direction','Recorded direction','select',true,['long','short']),...positionFields,health(),...links],
 'position-edit':positionFields,'position-open':[f('openedAt','Opened at · UTC','time',true),...positionFields], 'position-reduce':[f('size','Recorded remaining size','number'),note,f('updatedAt','Recorded update time · UTC','time')], 'position-close':[f('closedAt','Closed at · UTC','time',true),note], 'position-cancel':[], 'position-health':[health(true)],
 'action-create':[f('kind','Action kind','select',true,actionKinds),priority(true),f('headline','Action headline','text',true),f('rationale','Recorded rationale','text',true),f('asset','Market identifier'),f('timeframe','Timeframe','select',false,timeframes),f('linkedEntryId','Linked watchlist entry ID'),f('linkedPositionId','Linked position ID'),f('linkedJournalCaseId','Linked journal case ID'),f('linkedReasoningRunId','Linked reasoning run ID'),f('linkedNotificationDecisionId','Linked notification decision ID')],
 'action-edit':[priority(),f('headline','Action headline'),f('rationale','Recorded rationale')], 'action-complete':[], 'action-dismiss':[],snapshot:[]
};
export function parsePortfolioBody<A extends PortfolioAction>(action:A,data:FormData):PortfolioBody<A>{
 const body:Record<string,unknown>={};
 for(const field of fields[action]){const value=String(data.get(field.key)??'').trim();if(!value){if(field.required)throw new Error(`${field.label} is required.`);continue;}
  if(field.kind==='select'){if(!field.options?.includes(value))throw new Error(`${field.label} is invalid.`);body[field.key]=value;}
  else if(field.kind==='number'){if(!Number.isFinite(Number(value)))throw new Error(`${field.label} must be a finite number.`);body[field.key]=Number(value);}
  else if(field.kind==='numbers'){const values=value.split(/\r?\n/).map(v=>v.trim()).filter(Boolean);if(values.some(v=>!Number.isFinite(Number(v))))throw new Error('Recorded targets must be finite numbers.');body[field.key]=values.map(Number);}
  else if(field.kind==='time'){if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/.test(value)||!Number.isFinite(Date.parse(value+'Z')))throw new Error(`${field.label} must be a valid UTC time.`);body[field.key]=value+'Z';}
  else body[field.key]=value;
 }
 return body as PortfolioBody<A>;
}
// These lists offer only evidenced transitions; authorization and all outcomes remain backend decisions.
export function entityActions(kind:'entry'|'position'|'action',status:string,health?:string):PortfolioAction[]{
 if(kind==='entry')return ['watch-edit',...(watchTransitions[status]?.length?['watch-status','watch-archive'] as const:[]),...(health&&healthTransitions[health]?.length?['watch-health'] as const:[])];
 if(kind==='position'){const result:PortfolioAction[]=['position-edit'];for(const next of positionTransitions[status]??[]){result.push(next==='open'?'position-open':next==='reducing'?'position-reduce':next==='closed'?'position-close':'position-cancel');}if(health&&healthTransitions[health]?.length)result.push('position-health');return result;}
 return status==='open'?['action-edit','action-complete','action-dismiss']:['action-edit'];
}
export function allowedOptions(action:PortfolioAction,key:string,status?:string,health?:string){
 if(action==='watch-status'&&key==='status'&&status)return watchTransitions[status]??[];
 if(key==='thesisHealth'&&action.endsWith('-health')&&health)return healthTransitions[health]??[];
 return fields[action].find(f=>f.key===key)?.options??[];
}
