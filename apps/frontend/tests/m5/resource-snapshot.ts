import type { CDPSession } from '@playwright/test';
/** Controlled public-page heap diagnostics. Logs only aggregate types, not strings/content. */
export async function heapCensus(session: CDPSession) {
  const chunks: string[] = [];
  const collect = ({ chunk }: { chunk: string }) => chunks.push(chunk);
  session.on('HeapProfiler.addHeapSnapshotChunk', collect);
  try { await session.send('HeapProfiler.takeHeapSnapshot', { reportProgress: false }); }
  finally { session.off('HeapProfiler.addHeapSnapshotChunk', collect); }
  const snapshot = JSON.parse(chunks.join(''));
  const fields: string[] = snapshot.snapshot.meta.node_fields;
  const types: string[] = snapshot.snapshot.meta.node_types[fields.indexOf('type')];
  const n = snapshot.nodes as number[];
  const byType: Record<string, {count:number;bytes:number}> = {};
  const byClass: Record<string, {count:number;bytes:number}> = {};
  for(let i=0;i<n.length;i+=fields.length) {
    const type=types[n[i+fields.indexOf('type')]];
    const size=n[i+fields.indexOf('self_size')];
    const bucket=byType[type] ??= {count:0,bytes:0};bucket.count++;bucket.bytes+=size;
    if(type==='object'||type==='closure') {
      const name=String(snapshot.strings[n[i+fields.indexOf('name')]]).slice(0,80);
      const item=byClass[`${type}:${name}`] ??= {count:0,bytes:0};item.count++;item.bytes+=size;
    }
  }
  return {byType,byClass};
}
