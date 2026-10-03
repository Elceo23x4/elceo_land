'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {useRouter} from 'next/navigation';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import type {JournalDraftInput} from '../../lib/contracts/refinements/journal';
import {envelope} from '../workspace/projection';
import {journalCaseProjection} from './projection';
import styles from './JournalForm.module.css';
import ui from '../../components/app/Operational.module.css';
const timeframes=['M5','M15','H1','H4','D1'] as const;
export function CreateDraft(){
 const request=useRef<AbortController|null>(null),mounted=useRef(true);const [pending,setPending]=useState(false),[settled,setSettled]=useState(false),[message,setMessage]=useState('');const router=useRouter();
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;request.current?.abort();};},[]);
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(request.current||settled)return;
  const data=new FormData(event.currentTarget),text=(key:string)=>String(data.get(key)??'').trim(),timeframe=text('timeframe');
  if(!timeframes.some(t=>t===timeframe)||!text('asset')||!text('title')){setMessage('Provide a market, a supported timeframe and a case title.');return;}
  const body:JournalDraftInput={asset:text('asset'),timeframe:timeframe as JournalDraftInput['timeframe'],title:text('title')};
  if(text('thesis'))body.thesis=text('thesis');if(text('setupType'))body.setupType=text('setupType');
  const direction=text('direction');if(direction==='long'||direction==='short')body.direction=direction;
  const conviction=text('conviction');if(conviction==='exploratory'||conviction==='standard'||conviction==='high_conviction')body.conviction=conviction;
  const controller=new AbortController();request.current=controller;setPending(true);setMessage('Saving your draft…');const timer=setTimeout(()=>controller.abort(),30000);
  try{const result=await createSessionBoundBrowserApiClient().mutate('POST /api/journal/cases',{body,idempotency:{key:crypto.randomUUID()},context:{signal:controller.signal}});if(!mounted.current)return;
   if(result.kind==='success'){const v=journalCaseProjection(envelope(result.value)?.case);if(v){setMessage('Your case was recorded. Opening its saved record.');router.push(`/journal/${encodeURIComponent(v.caseId)}`);}else setMessage('The save outcome could not be confirmed. Read your case record before creating another draft.');}
   else if(result.kind==='validation_failure')setMessage('The service rejected one or more fields. Review the saved case list before starting a corrected draft.');
   else if(result.kind==='forbidden')setMessage('Your account is not authorized to create this case.');
   else if(result.kind==='unauthenticated')setMessage('Sign in again before creating a case.');
   else if(result.kind==='conflict')setMessage('The service reported a conflict. Check your case record before another submission.');
   else setMessage('The save outcome is unconfirmed. No automatic retry was made. Read your case record before another submission.');
  }catch{if(mounted.current)setMessage('The save outcome is unconfirmed. No automatic retry was made. Read your case record before another submission.');}
  finally{clearTimeout(timer);request.current=null;if(mounted.current){setPending(false);setSettled(true);}}
 }
 return <form className={styles.form} onSubmit={submit} aria-busy={pending}><fieldset disabled={pending||settled}><legend>Define the context</legend><div className={styles.fields}><div className={styles.field}><label htmlFor="case-market">Market</label><input id="case-market" name="asset" required autoComplete="off"/><span>Use the market identifier from your records.</span></div><div className={styles.field}><label htmlFor="case-timeframe">Timeframe</label><select id="case-timeframe" name="timeframe" required defaultValue=""><option value="" disabled>Select timeframe</option>{timeframes.map(t=><option key={t}>{t}</option>)}</select></div><div className={`${styles.field} ${styles.wide}`}><label htmlFor="case-title">Case title</label><input id="case-title" name="title" required autoComplete="off"/></div><div className={`${styles.field} ${styles.wide}`}><label htmlFor="case-thesis">Your thesis · optional</label><textarea id="case-thesis" name="thesis"/></div><div className={styles.field}><label htmlFor="case-direction">Direction · optional</label><select id="case-direction" name="direction" defaultValue=""><option value="">Leave to the draft default</option><option value="long">Long</option><option value="short">Short</option></select></div><div className={styles.field}><label htmlFor="case-conviction">Conviction · optional</label><select id="case-conviction" name="conviction" defaultValue=""><option value="">Leave to the draft default</option><option value="exploratory">Exploratory</option><option value="standard">Standard</option><option value="high_conviction">High conviction</option></select></div><div className={`${styles.field} ${styles.wide}`}><label htmlFor="case-setup">Setup description · optional</label><input id="case-setup" name="setupType" autoComplete="off"/></div></div><p>Creating a draft records your reasoning. It does not execute a trade or change your portfolio.</p><button className={ui.button} disabled={pending||settled}>{pending?'Recording draft…':'Record this draft ↗'}</button></fieldset><p role="status">{message}</p></form>;
}
