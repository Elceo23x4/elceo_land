'use client';
import {useEffect,useRef,useState} from 'react';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import {record} from '../workspace/projection';
import {safeCommercialUrl} from './commercial-projection';
import styles from '../../components/app/Operational.module.css';
export function BillingPortal(){
 const request=useRef<AbortController|null>(null),mounted=useRef(true);const [state,setState]=useState<'idle'|'pending'|'settled'>('idle'),[url,setUrl]=useState<string|null>(null),[message,setMessage]=useState('');
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;request.current?.abort();};},[]);
 async function open(){if(request.current||state!=='idle')return;const controller=new AbortController();request.current=controller;setState('pending');const timer=setTimeout(()=>controller.abort(),30000);
  try{const result=await createSessionBoundBrowserApiClient().mutate('POST /api/billing/portal',{idempotency:{key:crypto.randomUUID()},context:{signal:controller.signal}});if(!mounted.current)return;const target=result.kind==='success'?safeCommercialUrl(record(result.value)?.portalUrl):null;
   if(target){setUrl(target);setMessage('A billing-management link was returned. Review the destination before continuing.');}
   else setMessage(result.kind==='unauthenticated'?'Sign in again to request billing management.':'Billing management is not available from this request. No automatic retry was made; your subscription state has not been changed by this screen.');
  }catch{if(mounted.current)setMessage('Billing management could not be confirmed. No automatic retry was made.');}
  finally{clearTimeout(timer);request.current=null;if(mounted.current)setState('settled');}
 }
 return <section className={styles.panel}><h2>Billing management</h2><p>Ask for your provider’s management page. Availability depends on your recorded billing identity and provider readiness.</p><button className={styles.button} onClick={open} disabled={state!=='idle'}>{state==='pending'?'Requesting management link…':'Request billing management'}</button><p role="status">{message}</p>{url&&<a className={styles.button} href={url} rel="noreferrer">Continue to {new URL(url).hostname} ↗</a>}</section>;
}
