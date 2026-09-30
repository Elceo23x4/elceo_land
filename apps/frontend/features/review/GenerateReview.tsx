'use client';
import {useRef,useState} from 'react';
import {useRouter} from 'next/navigation';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import {envelope,record} from '../workspace/projection';
import styles from '../../components/app/Operational.module.css';
export function GenerateReview({family}:{family:'analytics'|'coaching'}) {
 const busy=useRef(false),[state,setState]=useState<'idle'|'pending'|'settled'>('idle'),[message,setMessage]=useState('');const router=useRouter();
 async function generate(){
  if(busy.current||state!=='idle')return;busy.current=true;setState('pending');
  try{
   const key=crypto.randomUUID();
   const operation=family==='analytics'?'POST /api/analytics/generate':'POST /api/coaching/generate';
   // No query overrides: pinned handlers own the default scope and lookback.
   const result=await createSessionBoundBrowserApiClient().mutate(operation,{idempotency:{key}});
   if(result.kind==='success'&&typeof record(envelope(result.value)?.snapshot)?.snapshotId==='string') {setMessage('A new snapshot was returned. The latest recorded view is being read.');router.refresh();}
   else if(result.kind==='forbidden')setMessage('Your account is not authorized to generate this review.');
   else if(result.kind==='unauthenticated')setMessage('Sign in again before generating a review.');
   else if(result.kind==='rate_limited')setMessage('Requests are temporarily limited. Wait before trying again.');
   else if(result.kind==='conflict')setMessage('The service reported a conflict. Read the latest snapshot before another action.');
   else setMessage('The outcome is unconfirmed. No automatic retry was made. Read the latest snapshot before another request.');
  }catch{setMessage('The outcome is unconfirmed. No automatic retry was made. Read the latest snapshot before another request.');}
  finally{busy.current=false;setState('settled');}
 }
 return <details className={`${styles.panel} ${styles.details}`}><summary>Generate a new {family} review</summary><p>This explicitly requests a new review of your recorded activity. Access and generation remain controlled by the service; simply viewing this page does not generate anything.</p><button className={styles.button} onClick={generate} disabled={state!=='idle'}>{state==='pending'?'Generation requested…':'Request new review'}</button><p role="status">{message}</p>{state==='settled'&&<button className={styles.button} onClick={()=>router.refresh()}>Read latest snapshot</button>}</details>;
}
