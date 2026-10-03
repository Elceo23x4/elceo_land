'use client';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import {Modal} from '../../components/primitives/Modal';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import {envelope,record} from './projection';
import styles from '../../components/app/Operational.module.css';
export function GlobalRefresh({children,subjectId}:{children:ReactNode;subjectId:string}){
 const request=useRef<{controller:AbortController;timer:ReturnType<typeof setTimeout>}|null>(null),mounted=useRef(true),started=useRef(false),closed=useRef(false);
 const [message,setMessage]=useState(''),[locked,setLocked]=useState(false);
 function stop(){if(request.current){clearTimeout(request.current.timer);request.current.controller.abort();}}
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;stop();};},[]);
 async function run(){if(started.current)return;started.current=true;setLocked(true);const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);request.current={controller,timer};setMessage('Waiting for the service to finish the explicit refresh.');
  try{const result=await createSessionBoundBrowserApiClient().mutate('POST /api/refresh/run',{body:{triggerKind:'manual'},idempotency:{key:crypto.randomUUID()},context:{signal:controller.signal}});if(!mounted.current||closed.current)return;
   const r=result.kind==='success'?record(envelope(result.value)?.run):null;
   if(r&&r.subjectId===subjectId&&r.subjectKind==='user'&&typeof r.refreshRunId==='string'&&['success','partial_success','failed'].includes(String(r.overallStatus)))setMessage(`The service reported ${String(r.overallStatus).replaceAll('_',' ')}. Read current context before another request.`);
   else if(result.kind==='forbidden')setMessage('The service did not authorize this refresh. Review access and usage.');
   else if(result.kind==='unauthenticated')setMessage('Your session needs attention. Sign in again before continuing.');
   else if(result.kind==='conflict')setMessage('The service reported a conflict. Read authoritative state before another action.');
   else if(result.kind==='rate_limited')setMessage('The service is limiting requests. Wait before an explicit read.');
   else setMessage('The outcome is unconfirmed. The service may still finish. No automatic retry was made.');
  }catch{if(mounted.current&&!closed.current)setMessage('The outcome is unconfirmed. The service may still finish. No automatic retry was made.');}
  finally{clearTimeout(timer);request.current=null;}
 }
 return <Modal label="Data freshness" title="Freshness and refresh" onDismiss={()=>{if(started.current){closed.current=true;stop();setMessage('Browser waiting ended. Server cancellation is not proven. Read current context before another request.');}}}><p>Freshness and timestamps come from the service. Opening this view does not regenerate snapshots.</p>{children}<h3>Explicit refresh</h3><p>This requests a refresh across the supported snapshot domains. The service determines permission and the result.</p><button className={styles.button} disabled={locked} onClick={run}>Request snapshot refresh</button><p role="status">{message}</p><p><a className={styles.button} href="/workspace">Read current context</a></p><p><a href="/settings/access">Review access and usage</a></p>{message.includes('session')&&<a href="/login">Sign in again</a>}</Modal>;
}
