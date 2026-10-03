import { readOwnedOperation } from '../../lib/api/owned-read';
import { ReadState } from '../../components/app/ReadState';
import { envelope, record } from './projection';
import styles from '../../components/app/Operational.module.css';
export async function Freshness() {
  const result=await readOwnedOperation('GET /api/workspace/freshness',{});
  if(result.kind!=='success')return <ReadState kind={result.kind}/>;
  const data=envelope(result.value),rows=data?.freshnessRecords;
  if(!Array.isArray(rows)||rows.some(item=>{const r=record(item);return !r||!['freshnessId','domain','freshnessState','dependencyState','evaluatedAt'].every(k=>typeof r[k]==='string');}))return <ReadState kind="invalid_payload"/>;
  return <details className={`${styles.panel} ${styles.details}`}><summary>Workspace freshness</summary><p>Evaluation times and states come from the service. They are not recalculated from your device clock.</p>{rows.length?<ul className={styles.timeline}>{rows.map(item=>{const r=record(item)!;return <li key={String(r.freshnessId)}><h3>{String(r.domain).replaceAll('_',' ')}</h3><p>{String(r.freshnessState)} · dependency {String(r.dependencyState)}</p><time dateTime={String(r.evaluatedAt)}>{String(r.evaluatedAt)}</time></li>;})}</ul>:<p>No freshness records are available.</p>}</details>;
}
