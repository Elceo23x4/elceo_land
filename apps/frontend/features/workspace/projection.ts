/** Display-only refinements from frozen packages/types/src/workspace.ts.
 * Source 771487b46874afc28a21f260a2c12f92bfe8f736. No generated type is edited.
 * Unknown or malformed projections fail closed; no intelligence is calculated.
 */
export const record = (value:unknown):Record<string,unknown>|null => value!==null&&typeof value==='object'&&!Array.isArray(value)?value as Record<string,unknown>:null;
export function envelope(value:unknown) {const root=record(value);return root?.ok===true?record(root.data):null;}
export type AgendaItem={agendaId:string;sourceKind:string;priority:string;headline:string;rationale:string};
export function agenda(value:unknown):AgendaItem[]|null {
  if(!Array.isArray(value))return null;
  const rows:AgendaItem[]=[];
  for(const item of value){const r=record(item);if(!r||!['agendaId','sourceKind','priority','headline','rationale'].every(k=>typeof r[k]==='string'))return null;
    rows.push({agendaId:r.agendaId as string,sourceKind:r.sourceKind as string,priority:r.priority as string,headline:r.headline as string,rationale:r.rationale as string});}
  return rows;
}
export type WorkspaceView={snapshotId:string;generatedAt:string;healthState:string;attentionLevel:string;dependencies:Record<string,string>;portfolio:{activeWatchlistCount:number;activePositionCount:number;openActionCount:number;criticalActionCount:number};focus:string|null;strength:string|null;agenda:AgendaItem[]};
export function workspace(value:unknown):WorkspaceView|null {
  const root=record(value),s=record(root?.summary),p=record(s?.portfolio),c=record(s?.coaching),d=record(s?.dependencyStatus);
  if(!root||!s||!p||!c||!d||typeof root.snapshotId!=='string'||typeof s.generatedAt!=='string'||typeof s.healthState!=='string'||typeof s.attentionLevel!=='string')return null;
  if(!['activeWatchlistCount','activePositionCount','openActionCount','criticalActionCount'].every(k=>typeof p[k]==='number'&&Number.isFinite(p[k])))return null;
  if(![c.topFocusHeadline,c.topStrengthHeadline].every(v=>v===null||typeof v==='string'))return null;
  const dependencies:Record<string,string>={};for(const k of ['portfolio','coaching','analytics','reasoning','notifications']) {if(typeof d[k]!=='string')return null;dependencies[k]=d[k];}
  const items=agenda(s.agenda);if(!items)return null;
  return {snapshotId:root.snapshotId,generatedAt:s.generatedAt,healthState:s.healthState,attentionLevel:s.attentionLevel,dependencies,portfolio:{activeWatchlistCount:p.activeWatchlistCount as number,activePositionCount:p.activePositionCount as number,openActionCount:p.openActionCount as number,criticalActionCount:p.criticalActionCount as number},focus:c.topFocusHeadline as string|null,strength:c.topStrengthHeadline as string|null,agenda:items};
}
