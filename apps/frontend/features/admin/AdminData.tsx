import {type DisplayValue,words} from './projection';
import styles from './Admin.module.css';
const scalar=(value:DisplayValue)=>value===null?'Not supplied':typeof value==='boolean'?value?'Yes':'No':String(value);
const isScalar=(v:DisplayValue)=>v===null||typeof v!=='object';
export function AdminData({value}:{value:DisplayValue}){
 if(value===null)return <p className={styles.readonly}>No record returned. Absence does not establish a healthy state.</p>;
 if(Array.isArray(value)){
  if(!value.length)return <p className={styles.readonly}>No records returned in this view.</p>;
  if(value.every(isScalar))return <ul className={styles.values}>{value.map((v,i)=><li key={i}>{scalar(v)}</li>)}</ul>;
  if(value.every(v=>v&&typeof v==='object'&&!Array.isArray(v)&&Object.values(v).every(isScalar))){
   const rows=value as {[key:string]:DisplayValue}[];const keys=Object.keys(rows[0]);
   return <div className={styles.tableWrap}><table className={styles.table}><thead><tr>{keys.map(k=><th key={k} scope="col">{words(k)}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={i}>{keys.map(k=><td key={k} data-label={words(k)}>{scalar(row[k])}</td>)}</tr>)}</tbody></table></div>;
  }
  return <ol className={styles.records}>{value.map((item,i)=><li key={i}><AdminData value={item}/></li>)}</ol>;
 }
 if(typeof value!=='object')return <p>{scalar(value)}</p>;
 const entries=Object.entries(value);
 const primary=['narrative','confidence','signals','contradictions'];
 const leading=entries.filter(([key])=>primary.includes(key));
 return <>{leading.map(([key,v])=><section className={styles.nested} key={key}><h3>{words(key)}</h3><AdminData value={v}/></section>)}<dl className={styles.facts}>{entries.filter(([,v])=>isScalar(v)).map(([key,v])=><div key={key}><dt>{words(key)}</dt><dd>{scalar(v)}</dd></div>)}</dl>{entries.filter(([key,v])=>!isScalar(v)&&!primary.includes(key)).map(([key,v])=><section className={styles.nested} key={key}><h3>{words(key)}</h3><AdminData value={v}/></section>)}</>;
}
const states:Record<string,[string,string]>={
 unauthenticated:['Session expired','Sign in again. This request did not establish administrative authority.'],
 role_denied:['Administrative role required','Your canonical sign-in identity does not permit this administrative surface.'],
 permission_denied:['Administrative permission denied','The backend did not authorize this capability. A role or plan label does not override its decision.'],
 forbidden:['Administrative permission denied','The backend denied this operation. Entitlement and administrative permission remain server-owned.'],
 unavailable_degraded:['Administrative service unavailable','Current state cannot be confirmed. No empty or healthy state has been inferred.'],
 rate_limited:['Requests temporarily limited','Wait before an explicit read. No automatic retry has been made.'],
 invalid_payload:['Response cannot be displayed safely','The received data did not match the selected display contract.'],
 validation_failure:['Selection could not be accepted','Choose a supported market, horizon or identifier and read again.'],
 selection_required:['Select a known subject','Enter the authoritative subject ID. This view does not enumerate or search accounts.'],
 lookup:['Known user ID required','The backend has no user-search or user-list endpoint. A known ID opens only its protected control snapshot.'],
 not_found:['Record not found','The service did not return the selected record.'],
};
export function AdminState({kind}:{kind:string}){const [title,copy]=states[kind]??['Outcome not confirmed','The request did not return an authoritative result. No automatic retry was made.'];return <div className={styles.state} role="status"><h3>{title}</h3><p>{copy}</p>{kind==='unauthenticated'&&<a href="/login?callbackUrl=%2Fadmin">Return to sign in</a>}</div>;}
