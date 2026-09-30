// Display subset of frozen CanonicalJournalCase; never calculate outcomes, P&L or cognition.
import {record} from '../workspace/projection.ts';
import {strings} from '../review/projection.ts';
const nullableStrings=(r:Record<string,unknown>,keys:string[])=>keys.every(k=>r[k]===null||typeof r[k]==='string');
const nullableNumbers=(r:Record<string,unknown>,keys:string[])=>keys.every(k=>r[k]===null||(typeof r[k]==='number'&&Number.isFinite(r[k])));
export function journalCaseProjection(value:unknown){
 const r=record(value),identity=record(r?.identity),plan=record(r?.plan),execution=record(r?.execution),closure=record(r?.closure),review=record(r?.review);
 if(!r||!identity||!plan||!execution||!closure||!review)return null;
 if(['caseId','asset','timeframe','title'].some(k=>typeof identity[k]!=='string')||['status','createdAt','updatedAt'].some(k=>typeof r[k]!=='string')||['direction','thesis','setupType','conviction'].some(k=>typeof plan[k]!=='string'))return null;
 if(!nullableNumbers(plan,['entryPricePlanned','stopLossPlanned','riskAmountPlanned','riskPercentPlanned'])||!nullableStrings(plan,['invalidationNote'])||!Array.isArray(plan.takeProfitPlanned)||!plan.takeProfitPlanned.every(v=>typeof v==='number'&&Number.isFinite(v)))return null;
 if(!nullableNumbers(execution,['entryPriceExecuted','positionSize'])||!nullableStrings(execution,['openedAt','lastAdjustedAt','executionQuality'])||!nullableNumbers(closure,['exitPrice','pnlAmount','pnlPercent','rMultiple'])||!nullableStrings(closure,['closedAt','closureReason'])||typeof closure.outcome!=='string'||!nullableStrings(review,['reviewedAt']))return null;
 const checklist=strings(plan.executionChecklist),notes=strings(execution.notes),wentWell=strings(review.whatWentWell),wentWrong=strings(review.whatWentWrong),lessons=strings(review.lessons),behaviorTags=strings(review.behaviorTags),followUp=strings(review.followUpActions),tags=strings(r.tags);
 if(!checklist||!notes||!wentWell||!wentWrong||!lessons||!behaviorTags||!followUp||!tags)return null;
 return {caseId:identity.caseId as string,asset:identity.asset as string,timeframe:identity.timeframe as string,title:identity.title as string,status:r.status as string,createdAt:r.createdAt as string,updatedAt:r.updatedAt as string,plan,execution,closure,review,checklist,notes,wentWell,wentWrong,lessons,behaviorTags,followUp,tags};
}
