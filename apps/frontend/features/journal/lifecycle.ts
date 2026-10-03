// Frozen request mappers and transitions; display eligibility is not authorization.
// Evidence: M5_JOURNAL_SOURCE_EVIDENCE.md. No case identity or outcome is computed.
import type {JournalActionBodies} from '../../lib/contracts/refinements/journal';
export type JournalAction=keyof JournalActionBodies;
export const actionsByStatus:Readonly<Record<string,readonly JournalAction[]>>={draft:['plan','cancel'],planned:['execute','cancel'],executed:['adjust','partial-close','close'],partially_closed:['adjust','close'],closed:['review'],canceled:['review'],reviewed:[]};
export const actionLabels:Record<JournalAction,string>={plan:'Record plan',execute:'Record execution',adjust:'Adjust record','partial-close':'Record partial closure',close:'Close case',cancel:'Cancel case',review:'Record review'};
type Field={key:string;label:string;kind:'text'|'number'|'lines'|'numbers'|'time'|'select';required?:boolean;options?:readonly string[]};
const f=(key:string,label:string,kind:Field['kind']='text',extra:Partial<Field>={}):Field=>({key,label,kind,...extra});
const quality=f('executionQuality','Execution quality','select',{options:['disciplined','acceptable','weak','impulsive']});
const closure=[f('exitPrice','Recorded exit price','number'),f('pnlAmount','Recorded P&L amount','number'),f('pnlPercent','Recorded P&L percent','number'),f('rMultiple','Recorded R multiple','number'),f('closureReason','Closure reason')];
export const actionFields:Record<JournalAction,readonly Field[]>={
 plan:[f('title','Case title'),f('direction','Direction','select',{options:['long','short']}),f('thesis','Thesis'),f('setupType','Setup'),f('conviction','Conviction','select',{options:['exploratory','standard','high_conviction']}),f('entryPricePlanned','Planned entry','number'),f('stopLossPlanned','Planned stop','number'),f('takeProfitPlanned','Planned targets · one per line','numbers'),f('riskAmountPlanned','Planned risk amount','number'),f('riskPercentPlanned','Planned risk percent','number'),f('invalidationNote','Invalidation note'),f('executionChecklist','Execution checklist · one per line','lines')],
 execute:[f('openedAt','Opened at · UTC','time',{required:true}),f('entryPriceExecuted','Recorded entry price','number'),f('positionSize','Recorded position size','number'),quality,f('notes','Execution notes · one per line','lines')],
 adjust:[f('entryPriceExecuted','Recorded entry price','number'),f('positionSize','Recorded position size','number'),f('stopLossPlanned','Planned stop','number'),f('takeProfitPlanned','Planned targets · one per line','numbers'),quality,f('lastAdjustedAt','Adjusted at · UTC','time'),f('notes','Replacement execution notes · one per line','lines')],
 'partial-close':[...closure,f('outcome','Recorded outcome','select',{options:['win','loss','breakeven','mixed','open']})],
 close:[f('closedAt','Closed at · UTC','time',{required:true}),f('outcome','Recorded outcome','select',{required:true,options:['win','loss','breakeven','mixed']}),...closure],
 cancel:[f('closureReason','Cancellation reason')],
 review:[f('reviewedAt','Reviewed at · UTC','time',{required:true}),f('whatWentWell','What went well · one per line','lines'),f('whatWentWrong','What went wrong · one per line','lines'),f('lessons','Lessons · one per line','lines'),f('behaviorTags','Behaviour tags · one per line','lines'),f('followUpActions','Follow-up actions · one per line','lines')]
};
export function parseAction<A extends JournalAction>(action:A,data:FormData):JournalActionBodies[A]{
 const body:Record<string,unknown>={};
 for(const field of actionFields[action]){
  const value=String(data.get(field.key)??'').trim();
  if(!value){if(field.required)throw new Error(`${field.label} is required.`);continue;}
  if(field.kind==='select'){if(!field.options?.includes(value))throw new Error(`${field.label} is invalid.`);body[field.key]=value;}
  else if(field.kind==='number'){if(!Number.isFinite(Number(value)))throw new Error(`${field.label} must be a finite number.`);body[field.key]=Number(value);}
  else if(field.kind==='time'){
   // datetime-local is explicitly labelled UTC, never silently converted from device timezone.
   if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/.test(value)||!Number.isFinite(Date.parse(value+'Z')))throw new Error(`${field.label} must be a valid UTC time.`);
   body[field.key]=value+'Z';
  }else if(field.kind==='lines'||field.kind==='numbers'){
   const lines=value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
   if(field.kind==='numbers'&&lines.some(v=>!Number.isFinite(Number(v))))throw new Error(`${field.label} must contain finite numbers.`);
   body[field.key]=field.kind==='numbers'?lines.map(Number):lines;
  }else body[field.key]=value;
 }
 // All required members and field enums checked above; no unknown submitted keys are copied.
 return body as JournalActionBodies[A];
}
export const expectedStatus:Record<Exclude<JournalAction,'adjust'>,string>={plan:'planned',execute:'executed','partial-close':'partially_closed',close:'closed',cancel:'canceled',review:'reviewed'};
