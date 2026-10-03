import {readOwnedOperation} from '../../lib/api/owned-read';
import {ReadState} from '../../components/app/ReadState';
import {envelope,record} from './projection';
import {GlobalRefresh} from './GlobalRefresh';
import styles from '../../components/app/Operational.module.css';
// Display subset of packages/types/src/refresh-runtime.ts at the frozen SHA.
export async function GlobalFreshness({subjectId}:{subjectId:string}){
 const results=await Promise.all([readOwnedOperation('GET /api/refresh/freshness',{}),readOwnedOperation('GET /api/refresh/latest',{}),readOwnedOperation('GET /api/refresh/history',{})]);
 const labels=['Domain freshness','Latest refresh','Refresh history'];
 return <GlobalRefresh subjectId={subjectId}>{results.map((result,index)=>{
  if(result.kind!=='success')return <section key={labels[index]} aria-label={labels[index]}><h3>{labels[index]}</h3><ReadState kind={result.kind}/></section>;
  const data=envelope(result.value),raw=index===0?data?.freshness:index===1?data?.latestRun:data?.runs;
  const rows=index===1?(raw===null?[]:[raw]):raw;
  const parsed=Array.isArray(rows)?rows.map(record):null;
  const fields=index===0?['freshnessId','domain','freshnessState','dependencyState','evaluatedAt']:['refreshRunId','overallStatus','generatedAt'];
  if(!parsed||parsed.some(r=>!r||r.subjectId!==subjectId||r.subjectKind!=='user'||fields.some(k=>typeof r[k]!=='string')))return <section key={labels[index]}><h3>{labels[index]}</h3><ReadState kind="invalid_payload"/></section>;
  return <section key={labels[index]} aria-label={labels[index]}><h3>{labels[index]}</h3>{parsed.length?<ol className={styles.timeline}>{parsed.map(r=><li key={String(r![fields[0]])}>{index===0?<><strong>{String(r!.domain)}</strong><p>{String(r!.freshnessState)} · dependency {String(r!.dependencyState)}</p><time>{String(r!.evaluatedAt)}</time></>:<><strong>{String(r!.overallStatus)}</strong><p>{String(r!.refreshRunId)}</p><time>{String(r!.generatedAt)}</time></>}</li>)}</ol>:<p>{index===0?'No domain freshness records returned.':index===1?'No refresh run recorded.':'No refresh history recorded.'}</p>}</section>;
 })}</GlobalRefresh>;
}
