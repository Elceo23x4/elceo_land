'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import type {MotionIntensity,AccountPreferencesInput} from '../../lib/contracts/refinements/account-settings';
import {envelope} from '../workspace/projection';
import {accountPreferences,launchMarkets,trackedAssets} from './account-projection';
import styles from './AccountPreferenceForm.module.css';
import ui from '../../components/app/Operational.module.css';
type Props={mode:'assets';assets:string[]}|{mode:'preferences';motion:MotionIntensity}|{mode:'notifications';preferences:AccountPreferencesInput};
function failure(kind:string){
 if(kind==='forbidden')return 'Your account is not authorized to save this preference.';
 if(kind==='unauthenticated')return 'Sign in again before saving this preference.';
 if(kind==='validation_failure')return 'The service rejected these fields. Read the saved preference before submitting a correction.';
 if(kind==='conflict')return 'The service reported a conflict. Read the saved preference before another submission.';
 if(kind==='rate_limited')return 'Requests are temporarily limited. Wait before another submission.';
 return 'The save outcome is unconfirmed. No automatic retry was made. Read the saved preference before another submission.';
}
export function AccountPreferenceForm(props:Props){
 const request=useRef<AbortController|null>(null),waitTimer=useRef<ReturnType<typeof setTimeout>|null>(null),mounted=useRef(true);const [pending,setPending]=useState(false),[settled,setSettled]=useState(false),[message,setMessage]=useState('');
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;if(waitTimer.current)clearTimeout(waitTimer.current);request.current?.abort();};},[]);
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(request.current||settled)return;const fields=new FormData(event.currentTarget);
  const assets=fields.getAll('assets').map(String),motion=fields.get('motion');
  if(props.mode==='assets'&&(assets.length>50||assets.some(a=>a.length<1||a.length>32))){setMessage('Choose up to 50 identifiers, each between 1 and 32 characters.');return;}
  if(props.mode==='preferences'&&motion!=='low'&&motion!=='medium'&&motion!=='high'){setMessage('Choose a motion preference.');return;}
  const controller=new AbortController();request.current=controller;setPending(true);setMessage('Saving your preference…');const timer=setTimeout(()=>controller.abort(),30000);waitTimer.current=timer;
  try{
   const client=createSessionBoundBrowserApiClient(),context={signal:controller.signal},idempotency={key:crypto.randomUUID()};
   if(props.mode==='assets'){
    const result=await client.mutate('PATCH /api/account/watchlist',{body:{assets},idempotency,context});if(!mounted.current)return;
    const saved=result.kind==='success'?trackedAssets(envelope(result.value)):null;
    setMessage(saved?`Saved tracked markets: ${saved.length?saved.join(', '):'none'}.`:failure(result.kind));
   }else{
    // The frozen PATCH replaces all notification settings too. Re-read them
    // immediately before saving motion; never invent defaults or clear flags.
    const current=await client.read('GET /api/account/state',{context});
    const latest=current.kind==='success'?accountPreferences(envelope(current.value)):null;
    if(!latest){if(mounted.current)setMessage('Current preferences could not be read safely. No save was submitted.');return;}
    const result=await client.mutate('PATCH /api/account/preferences',{body:props.mode==='notifications'?{...latest,notifications:{inApp:fields.has('inApp'),email:fields.has('email'),browserPush:fields.has('browserPush')},notificationClasses:{biasChanges:fields.has('biasChanges'),contradictionSpikes:fields.has('contradictionSpikes'),keyLevelInteractions:fields.has('keyLevelInteractions'),macroEventWarnings:fields.has('macroEventWarnings'),postEventRegimeShift:fields.has('postEventRegimeShift'),journalCoaching:fields.has('journalCoaching')}}:{...latest,motionIntensity:motion as MotionIntensity},idempotency,context});if(!mounted.current)return;
    const saved=result.kind==='success'?accountPreferences(envelope(result.value)):null;
    setMessage(saved?(props.mode==='notifications'?'The service returned saved notification preferences. Read them before another submission.':`Saved motion preference: ${saved.motionIntensity}.`):failure(result.kind));
   }
  }catch{if(mounted.current)setMessage('The save outcome is unconfirmed. No automatic retry was made. Read the saved preference before another submission.');}
  finally{clearTimeout(timer);waitTimer.current=null;request.current=null;if(mounted.current){setPending(false);setSettled(true);}}
 }
 const markets=props.mode==='assets'?Array.from(new Set<string>([...launchMarkets,...props.assets])):[];
 if(props.mode==='notifications')return <form className={styles.form} onSubmit={submit} aria-busy={pending}><fieldset className={styles.choices} disabled={pending||settled}><legend>Account notification preferences</legend>{Object.entries({...props.preferences.notifications,...props.preferences.notificationClasses}).map(([key,value])=><label key={key} className={styles.choice}><input type="checkbox" name={key} defaultChecked={value}/><span>{({inApp:'In app',email:'Email',browserPush:'Browser push',biasChanges:'Bias changes',contradictionSpikes:'Contradiction spikes',keyLevelInteractions:'Key-level interactions',macroEventWarnings:'Macro event warnings',postEventRegimeShift:'Post-event regime shift',journalCoaching:'Journal coaching'} as Record<string,string>)[key]}</span></label>)}</fieldset><p>These account preferences do not verify targets, enable providers or prove delivery. The current motion preference is re-read and preserved before saving.</p><button className={ui.button} disabled={pending||settled}>Save notification preferences</button><p role="status">{message}</p>{settled&&<a className={ui.button} href="/settings/notifications">Read saved preferences</a>}</form>;
 return <form className={styles.form} onSubmit={submit} aria-busy={pending}><fieldset className={`${styles.choices} ${props.mode==='preferences'?styles.motion:''}`} disabled={pending||settled}><legend>{props.mode==='assets'?'Markets to track':'Preferred motion intensity'}</legend>{props.mode==='assets'?markets.map(asset=><label className={styles.choice} key={asset}><input type="checkbox" name="assets" value={asset} defaultChecked={props.assets.includes(asset)}/><span>{asset}</span></label>):(['low','medium','high'] as const).map(level=><label className={styles.choice} key={level}><input type="radio" name="motion" value={level} defaultChecked={props.motion===level}/><span>{level==='low'?'Low':level==='medium'?'Medium':'High'}<small>{level==='low'?'A quieter preference.':level==='medium'?'A balanced preference.':'A more expressive preference.'}</small></span></label>)}</fieldset><p>{props.mode==='assets'?'Saving replaces your account’s tracked-market selection. This is separate from portfolio watchlist entities.':'This saves your account preference. Your device’s reduced-motion setting still takes priority; this screen does not alter the protected dashboard’s motion.'}</p><button className={ui.button} disabled={pending||settled}>{pending?'Saving…':props.mode==='assets'?'Save tracked markets':'Save motion preference'}</button><p role="status">{message}</p>{settled&&<a className={ui.button} href={`/settings/${props.mode}`}>Read saved preferences</a>}</form>;
}
