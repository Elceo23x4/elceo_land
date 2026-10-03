// Display-only refinements from frozen services/analytics/src/types.ts and
// packages/types/src/journal-influence.ts. Source pin: 771487b46874afc28a21f260a2c12f92bfe8f736.
// No aggregation, ranking, score normalization or business calculations here.
import {record} from '../workspace/projection.ts';
import {strings} from '../review/projection.ts';
const finite=(x:unknown):x is number=>typeof x==='number'&&Number.isFinite(x);
const text=(x:unknown):x is string=>typeof x==='string';
function row(value:unknown,textKeys:readonly string[],numberKeys:readonly string[],nullable:readonly string[]=[]){
 const r=record(value);if(!r||textKeys.some(k=>!text(r[k]))||numberKeys.some(k=>!finite(r[k]))||nullable.some(k=>r[k]!==null&&!finite(r[k])))return null;
 // Project only reviewed display fields; raw records can contain private identifiers.
 return Object.fromEntries([...textKeys,...numberKeys,...nullable].map(k=>[k,r[k]])) as Record<string,string|number|null>;
}
function list(value:unknown,textKeys:readonly string[],numberKeys:readonly string[],nullable:readonly string[]=[]){
 if(!Array.isArray(value))return null;const result=value.map(v=>row(v,textKeys,numberKeys,nullable));return result.some(v=>!v)?null:result as NonNullable<ReturnType<typeof row>>[];
}
export function journalAnalyticsProjection(value:unknown){
 const r=record(value),p=record(r?.performance),b=record(r?.behavior),c=record(r?.coaching),summary=record(c?.summary);
 if(!p||!b||!c||!summary)return null;
 const totals=row(p,[],['totalTrades','winRate','expectancy','averageGain','averageLoss','averageRiskReward']);
 if(!totals||!text(summary.diagnosis)||(!text(summary.confidenceLevel)||!['low','medium','high'].includes(summary.confidenceLevel))||!finite(b.biasViolationRate))return null;
 const month=(v:unknown)=>v===null?null:row(v,['month'],['tradeCount','netPnl','winRate']);
 const bestMonth=month(p.bestMonth),worstMonth=month(p.worstMonth);
 if((p.bestMonth!==null&&!bestMonth)||(p.worstMonth!==null&&!worstMonth))return null;
 const bestAssets=list(p.bestTradedAssets,['asset'],['tradeCount','netPnl','winRate']),worstAssets=list(p.worstTradedAssets,['asset'],['tradeCount','netPnl','winRate']);
 const gains=list(p.highestGains,['entryId','asset','direction','closedAtUtc'],['pnlAmount','resultRMultiple']),losses=list(p.highestLosses,['entryId','asset','direction','closedAtUtc'],['pnlAmount','resultRMultiple']);
 const windows=list(p.effectiveTradingTimeWindows,['session'],['tradeCount','netPnl','expectancy']),poorWindows=list(b.poorTimeWindowPatterns,['session'],['tradeCount','netPnl','expectancy']);
 const mistakes=list(b.repeatedMistakeCategories,['category'],['count']),signals=strings(b.overtradingSignals),mismatches=strings(b.confidenceMismatchPatterns);
 const evidence=list(c.evidence,['metric','value','interpretation'],[]),interventions=list(c.interventions,['action','targetMetric','successCriteria'],[]),monitoring=strings(c.monitoringPlan);
 if(!bestAssets||!worstAssets||!gains||!losses||!windows||!poorWindows||!mistakes||!signals||!mismatches||!evidence||!interventions||!monitoring)return null;
 return {totals,bestMonth,worstMonth,bestAssets,worstAssets,gains,losses,windows,poorWindows,mistakes,signals,mismatches,evidence,interventions,monitoring,diagnosis:summary.diagnosis,confidence:summary.confidenceLevel as string,biasViolationRate:b.biasViolationRate};
}
export function journalInfluenceProjection(value:unknown){
 const r=record(value),s=record(r?.summary);if(!r||!s||!text(r.snapshotId)||!text(r.createdAt))return null;
 const context=row(s,['asset','timeframe','generatedAt'],['reviewedCaseCount','closedCaseCount','recentCaseCount']);if(!context)return null;
 const setups=list(s.setupPatterns,['setupType'],['sampleCount','winCount','lossCount','breakevenCount','mixedCount','influenceScore'],['avgRMultiple','avgPnlPercent']);
 const behaviors=list(s.behaviorPatterns,['behaviorTag'],['sampleCount','negativeAssociationScore','positiveAssociationScore','influenceScore']);
 const directions=list(s.directionPatterns,['direction'],['sampleCount','influenceScore'],['avgRMultiple','avgPnlPercent','winRate']);
 const mistakes=strings(s.repeatedMistakes),strengths=strings(s.repeatedStrengths),cautions=strings(s.cautionNotes),confidence=strings(s.confidenceBoostNotes),caseIds=strings(s.supportingCaseIds);
 if(!setups||!behaviors||!directions||!mistakes||!strengths||!cautions||!confidence||!caseIds)return null;
 const quality=(s.setupPatterns as unknown[]).map(value=>record(record(value)?.executionQualityBreakdown));
 if(quality.some(q=>!q||Object.values(q).some(v=>!finite(v))))return null;
 return {snapshotId:r.snapshotId,createdAt:r.createdAt,context,setups:setups.map((item,i):Record<string,unknown>&{quality:Record<string,number>}=>({...item,quality:quality[i] as Record<string,number>})),behaviors,directions,mistakes,strengths,cautions,confidence,caseIds};
}
