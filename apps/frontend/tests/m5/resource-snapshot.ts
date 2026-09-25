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
    if(type==='object'||type==='closure'||type==='code') {
      const name=String(snapshot.strings[n[i+fields.indexOf('name')]]).slice(0,80);
      const item=byClass[`${type}:${name}`] ??= {count:0,bytes:0};item.count++;item.bytes+=size;
    }
  }
  const edgeFields: string[] = snapshot.snapshot.meta.edge_fields;
  const edges: number[] = snapshot.edges;
  const incoming = new Map<number, number[]>();
  const typeAt = (index:number) => types[n[index+fields.indexOf('type')]];
  const nameAt = (index:number) => String(snapshot.strings[n[index+fields.indexOf('name')]]).slice(0,80);
  let edge = 0;
  for (let index=0; index<n.length; index+=fields.length) {
    const count=n[index+fields.indexOf('edge_count')];
    for (let k=0;k<count;k++,edge+=edgeFields.length) {
      const target=edges[edge+edgeFields.indexOf('to_node')];
      if(typeAt(target)==='code') {
        const parents=incoming.get(target)??[];parents.push(index);incoming.set(target,parents);
      }
    }
  }
  const byOwner: Record<string,{count:number;bytes:number}> = {};
  for(let index=0;index<n.length;index+=fields.length) {
    if(nameAt(index)!=='system / InstructionStream') continue;
    let frontier=[index];const seen=new Set<number>();const owners=new Set<string>();
    for(let depth=0;depth<5 && frontier.length;depth++) {
      const next:number[]=[];
      for(const item of frontier) for(const parent of incoming.get(item)??[]) {
        if(seen.has(parent))continue;seen.add(parent);
        const type=typeAt(parent),name=nameAt(parent);
        if(type==='closure') owners.add('closure:'+name);
        else if(type==='code') {
          if(name && !name.startsWith('system /') && !name.startsWith('(')) owners.add('code:'+name);
          else next.push(parent);
        }
      }
      frontier=next;
    }
    const key=[...owners].sort().join('|').slice(0,200)||'(unresolved owner)';
    const bucket=byOwner[key]??={count:0,bytes:0};bucket.count++;bucket.bytes+=n[index+fields.indexOf('self_size')];
  }
  return {byType,byClass,byOwner};
}
