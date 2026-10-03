// Display-only whitelist: no balances, prices, P&L, risk or intelligence are computed.
import {record} from '../workspace/projection.ts';
import {priorities,healthValues,timeframes,actionKinds} from './values.ts';
import type {WatchlistEntry,PositionRecord,PortfolioActionItem} from '../../lib/contracts/refinements/portfolio';
const text=(v:unknown):v is string=>typeof v==='string'&&v.trim().length>0;
const nullableText=(v:unknown):v is string|null=>v===null||typeof v==='string';
const number=(v:unknown):v is number=>typeof v==='number'&&Number.isFinite(v);
const oneOf=<T extends string>(v:unknown,values:readonly T[]):v is T=>typeof v==='string'&&values.includes(v as T);
const timestamp=(v:unknown):v is string=>text(v)&&Number.isFinite(Date.parse(v));
const nullableTime=(v:unknown):v is string|null=>v===null||timestamp(v);
const links=['linkedJournalCaseId','linkedReasoningRunId','linkedSnapshotId','linkedDriftId'] as const;
function safeLinks(r:Record<string,unknown>){if(!links.every(k=>nullableText(r[k])))return null;return Object.fromEntries(links.map(k=>[k,r[k]])) as Pick<WatchlistEntry,typeof links[number]>;}
export function watchProjection(value:unknown){
 const r=record(value);if(!r||!text(r.entryId)||!text(r.asset)||!oneOf(r.timeframe,timeframes)||!oneOf(r.priority,priorities)||!oneOf(r.status,['watching','thesis_active','readiness_pending','archived'] as const)||!oneOf(r.thesisHealth,healthValues)||!nullableText(r.note)||!timestamp(r.createdAt)||!timestamp(r.updatedAt))return null;
 const linkage=safeLinks(r);if(!linkage)return null;
 return {entryId:r.entryId,asset:r.asset,timeframe:r.timeframe,priority:r.priority,status:r.status,thesisHealth:r.thesisHealth,note:r.note,createdAt:r.createdAt,updatedAt:r.updatedAt,...linkage} satisfies Omit<WatchlistEntry,'subjectKind'|'subjectId'>;
}
export function positionProjection(value:unknown){
 const r=record(value);if(!r||!text(r.positionId)||!text(r.asset)||!oneOf(r.timeframe,timeframes)||!oneOf(r.status,['proposed','open','reducing','closed','canceled'] as const)||!oneOf(r.direction,['long','short'] as const)||!oneOf(r.thesisHealth,healthValues)||!nullableText(r.note)||!timestamp(r.updatedAt)||!nullableTime(r.openedAt)||!nullableTime(r.closedAt))return null;
 if(!['entryPrice','stopLoss','size'].every(k=>r[k]===null||number(r[k]))||!Array.isArray(r.takeProfitLevels)||!r.takeProfitLevels.every(number))return null;
 const linkage=safeLinks(r);if(!linkage)return null;
 return {positionId:r.positionId,asset:r.asset,timeframe:r.timeframe,status:r.status,direction:r.direction,thesisHealth:r.thesisHealth,note:r.note,updatedAt:r.updatedAt,openedAt:r.openedAt,closedAt:r.closedAt,entryPrice:r.entryPrice as number|null,stopLoss:r.stopLoss as number|null,size:r.size as number|null,takeProfitLevels:r.takeProfitLevels as number[],...linkage} satisfies Omit<PositionRecord,'subjectKind'|'subjectId'>;
}
export function actionProjection(value:unknown){
 const r=record(value);if(!r||!text(r.actionId)||!text(r.headline)||!text(r.rationale)||!oneOf(r.kind,actionKinds)||!oneOf(r.priority,priorities)||!oneOf(r.status,['open','completed','dismissed'] as const)||!nullableText(r.asset)||!(r.timeframe===null||oneOf(r.timeframe,timeframes))||!timestamp(r.createdAt)||!timestamp(r.updatedAt)||!nullableTime(r.completedAt)||!nullableTime(r.dismissedAt))return null;
 const keys=['linkedEntryId','linkedPositionId','linkedJournalCaseId','linkedReasoningRunId','linkedNotificationDecisionId'] as const;if(!keys.every(k=>nullableText(r[k])))return null;
 const linkage=Object.fromEntries(keys.map(k=>[k,r[k]])) as Pick<PortfolioActionItem,typeof keys[number]>;
 return {actionId:r.actionId,headline:r.headline,rationale:r.rationale,kind:r.kind,priority:r.priority,status:r.status,asset:r.asset,timeframe:r.timeframe,createdAt:r.createdAt,updatedAt:r.updatedAt,completedAt:r.completedAt,dismissedAt:r.dismissedAt,...linkage} satisfies Omit<PortfolioActionItem,'subjectKind'|'subjectId'>;
}
export function projectList<T>(raw:unknown,project:(v:unknown)=>T|null):T[]|null{if(!Array.isArray(raw))return null;const result=raw.map(project);return result.some(v=>v===null)?null:result as T[];}
export function snapshotProjection(value:unknown){
 const r=record(value);if(!r||!text(r.snapshotId)||!timestamp(r.generatedAt)||!timestamp(r.createdAt))return null;
 const counters=['activeWatchlistCount','activePositionCount','weakeningThesisCount','invalidatedThesisCount','openActionCount','criticalActionCount'] as const;
 if(!counters.every(k=>number(r[k])&&Number.isInteger(r[k])&&Number(r[k])>=0))return null;
 const entries=projectList(r.watchlistEntries,watchProjection),positions=projectList(r.positions,positionProjection),actions=projectList(r.actionQueue,actionProjection);if(!entries||!positions||!actions)return null;
 return {snapshotId:r.snapshotId,generatedAt:r.generatedAt,createdAt:r.createdAt,counts:Object.fromEntries(counters.map(k=>[k,r[k]])) as Record<typeof counters[number],number>,entries,positions,actions};
}
export function replayProjection(value:unknown,kind:'watchlist_entry'|'position'|'action_item',id:string){
 const r=record(value);if(!r||r.entityKind!==kind||r.entityId!==id||!Array.isArray(r.revisions))return null;
 const current=kind==='watchlist_entry'?watchProjection(r.current):kind==='position'?positionProjection(r.current):actionProjection(r.current);if(!current)return null;
 const currentId='entryId' in current?current.entryId:'positionId' in current?current.positionId:current.actionId;if(currentId!==id)return null;
 const revisions=r.revisions.map(item=>{const v=record(item);return v&&text(v.revisionId)&&text(v.revisionType)&&timestamp(v.changedAt)&&text(v.summary)?{revisionId:v.revisionId,revisionType:v.revisionType,changedAt:v.changedAt,summary:v.summary}:null;});
 return revisions.some(v=>!v)?null:revisions as NonNullable<typeof revisions[number]>[];
}
