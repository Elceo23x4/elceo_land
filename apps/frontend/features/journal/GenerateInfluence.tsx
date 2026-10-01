'use client';
import {useEffect,useRef,useState} from 'react';
import {useRouter} from 'next/navigation';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import {envelope} from '../workspace/projection';
import {journalInfluenceProjection} from './analysis-projection';
import styles from '../../components/app/Operational.module.css';
export function GenerateInfluence() {
 const request=useRef<{controller:AbortController;timer:ReturnType<typeof setTimeout>}|null>(null),mounted=useRef(true),[state,setState]=useState<'idle'|'pending'|'settled'>('idle'),[message,setMessage]=useState('');const router=useRouter();
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;if(request.current){clearTimeout(request.current.timer);request.current.controller.abort();}};},[]);
 async function generate(){
  if(request.current||state!=='idle')return;const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),30000);request.current={controller,timer};setState('pending');
  try{
   const key=crypto.randomUUID();
   const operation='POST /api/journal/influence/generate';
   // No query overrides: pinned handlers own the default scope and lookback.
   const result=await createSessionBoundBrowserApiClient().mutate(operation,{idempotency:{key},context:{signal:controller.signal}});
   if(!mounted.current)return;
   if(result.kind==='success'&&journalInfluenceProjection(envelope(result.value)?.snapshot)) {setMessage('A new snapshot was returned. The latest recorded view is being read.');router.refresh();}
   else if(result.kind==='forbidden')setMessage('Your account is not authorized to generate this review.');
   else if(result.kind==='unauthenticated')setMessage('Sign in again before generating a review.');
   else if(result.kind==='rate_limited')setMessage('Requests are temporarily limited. Wait before trying again.');
   else if(result.kind==='conflict')setMessage('The service reported a conflict. Read the latest snapshot before another action.');
   else setMessage('The outcome is unconfirmed. No automatic retry was made. The service may still finish the operation. Read the latest snapshot before another request.');
  }catch{if(mounted.current)setMessage('The outcome is unconfirmed. No automatic retry was made. The service may still finish the operation. Read the latest snapshot before another request.');}
  finally{clearTimeout(timer);request.current=null;if(mounted.current)setState('settled');}
 }
 return <details className={`${styles.panel} ${styles.details}`}><summary>Generate case influence</summary><p>This explicitly requests a new influence snapshot from your canonical case history. Access and generation remain controlled by the service; simply viewing this page does not generate anything.</p><button className={styles.button} onClick={generate} disabled={state!=='idle'}>{state==='pending'?'Generation requested…':'Request case influence'}</button><p role="status">{message}</p>{state==='settled'&&<button className={styles.button} onClick={()=>router.refresh()}>Read latest snapshot</button>}</details>;
}
