'use client';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSessionBoundBrowserApiClient } from '../../lib/api/authenticated-browser';
import { envelope, record } from './projection';
import styles from '../../components/app/Operational.module.css';

export function RefreshWorkspace() {
  const [message,setMessage]=useState('');
  const [pending,setPending]=useState(false);
  const [settled,setSettled]=useState(false);
  const inFlight=useRef(false);
  const router=useRouter();
  async function refresh() {
    if(inFlight.current||settled)return;
    inFlight.current=true;setPending(true);setMessage('Waiting for the service to finish the requested refresh.');
    const key=crypto.randomUUID();
    try {
      const result=await createSessionBoundBrowserApiClient().mutate('POST /api/workspace/refresh',{body:{triggerKind:'manual'},idempotency:{key}});
      if(result.kind==='success') {
        const report=record(envelope(result.value)?.report);
        if(report&&typeof report.refreshRunId==='string'&&['success','partial_success','failed'].includes(String(report.overallStatus))) {
          setMessage(`Refresh reported ${String(report.overallStatus).replaceAll('_',' ')}. Review the latest snapshot and source status below.`);
          router.refresh();
        } else setMessage('The refresh outcome could not be confirmed. Read the current workspace before another request.');
      } else if(result.kind==='forbidden')setMessage('The service did not authorize this refresh. No access decision was inferred from your plan label.');
      else if(result.kind==='unauthenticated')setMessage('Your session is no longer confirmed. Return to sign in before continuing.');
      else if(result.kind==='conflict')setMessage('The service reported a conflict. Read the current workspace before another action.');
      else if(result.kind==='rate_limited')setMessage('The service is limiting requests. Wait before making another request.');
      else setMessage('The outcome is uncertain. No automatic retry was made. Read the current workspace before another action.');
    } catch {setMessage('The outcome is uncertain. No automatic retry was made. Read the current workspace before another action.');}
    finally {setPending(false);setSettled(true);inFlight.current=false;}
  }
  return <details className={`${styles.panel} ${styles.details}`}><summary>Refresh workspace</summary><p>Ask the service to regenerate your workspace. This is an explicit action; opening a workspace view never starts it. The service checks permission and records the result.</p><button className={styles.button} disabled={pending||settled} onClick={refresh}>{pending?'Refresh requested…':'Request workspace refresh'}</button><p role="status">{message}</p>{settled&&<button className={styles.button} onClick={()=>router.refresh()}>Read current workspace</button>}</details>;
}
