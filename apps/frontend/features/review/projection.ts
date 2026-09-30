// Display refinements: frozen packages/types/src/{analytics,coaching}.ts at
// 771487b46874afc28a21f260a2c12f92bfe8f736. No browser intelligence calculation.
import {record} from '../workspace/projection.ts';
export const strings=(value:unknown):string[]|null=>Array.isArray(value)&&value.every(v=>typeof v==='string')?value:null;
export function rows(value:unknown,requiredStrings:readonly string[],requiredNumbers:readonly string[]=[]):Record<string,unknown>[]|null {
 if(!Array.isArray(value))return null;
 const result:Record<string,unknown>[]=[];
 for(const item of value){const row=record(item);if(!row||requiredStrings.some(k=>typeof row[k]!=='string')||requiredNumbers.some(k=>typeof row[k]!=='number'||!Number.isFinite(row[k])))return null;result.push(row);}return result;
}
export function analyticsProjection(value:unknown){
 const s=record(record(value)?.summary),window=record(s?.window),totals=record(s?.totals),insights=record(s?.reviewInsights);
 if(!s||!window||!totals||!insights||typeof window.generatedAt!=='string'||typeof window.lookbackDays!=='number'||['closedCaseCount','reviewedCaseCount','openCount'].some(k=>typeof totals[k]!=='number'))return null;
 const setups=rows(s.setupPatterns,['setupType'],['sampleCount','disciplineScore','performanceScore']),behaviors=rows(s.behaviorPatterns,['behaviorTag'],['sampleCount','importanceScore']);
 const cautions=strings(insights.cautionNotes),confidence=strings(insights.confidenceNotes),mistakes=strings(insights.repeatedMistakes),strengths=strings(insights.repeatedStrengths);
 if(!setups||!behaviors||!cautions||!confidence||!mistakes||!strengths)return null;
 return {generatedAt:window.generatedAt,lookbackDays:window.lookbackDays,closed:totals.closedCaseCount as number,reviewed:totals.reviewedCaseCount as number,open:totals.openCount as number,setups,behaviors,cautions,confidence,mistakes,strengths};
}
export function coachingProjection(value:unknown){
 const s=record(record(value)?.summary);if(!s||typeof s.generatedAt!=='string')return null;
 const focus=rows(s.focusAreas,['focusId','priority','headline','explanation']),strengths=rows(s.strengths,['strengthId','headline','explanation']),actions=rows(s.actionPlan,['actionId','priority','instruction','successMetric']),notes=strings(s.summaryNotes);
 if(!focus||!strengths||!actions||!notes)return null;
 return {generatedAt:s.generatedAt,focus,strengths,actions,notes};
}
