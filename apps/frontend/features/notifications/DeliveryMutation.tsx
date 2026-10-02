'use client';
import {useEffect,useRef,useState,type FormEvent,type RefObject} from 'react';
import {Modal} from '../../components/primitives/Modal';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import {envelope,record} from '../workspace/projection';
import {targetProjection,subscriptionProjection,verificationIssued,verificationConsumed,type Channel,channels} from './settings-projection';
import type {TargetCreate,SubscriptionWrite} from '../../lib/contracts/refinements/notifications';
import styles from './DeliverySettings.module.css';
export type DeliveryAction='target-create'|'target-enable'|'target-disable'|'subscription-create'|'subscription-update'|'verification-issue'|'verification-consume';
const labels:Record<DeliveryAction,string>={'target-create':'Add delivery target','target-enable':'Enable target','target-disable':'Disable target','subscription-create':'Add channel subscription','subscription-update':'Edit subscription','verification-issue':'Request verification challenge','verification-consume':'Submit verification proof'};
const unknown='The outcome is unconfirmed. No automatic retry was made. The service may still finish. Read saved delivery settings before another action.';
type MutationProps={action:DeliveryAction;id?:string;channel?:Channel};
export function DeliveryMutation({offers,id,channel}:{offers:DeliveryAction[];id?:string;channel?:Channel}){const lock=useRef(false),[blocked,setBlocked]=useState(false);return <div className={styles.controls}>{offers.map(action=><SingleDeliveryMutation key={action} action={action} id={id} channel={channel} lock={lock} blocked={blocked} block={()=>setBlocked(true)}/>)}</div>;}
function SingleDeliveryMutation({action,id,channel,lock:locked,blocked,block}:MutationProps&{lock:RefObject<boolean>;blocked:boolean;block:()=>void}){
 const active=useRef<{controller:AbortController;timer:ReturnType<typeof setTimeout>}|null>(null),mounted=useRef(true);
 const [state,setState]=useState<'idle'|'pending'|'settled'>('idle'),[message,setMessage]=useState(''),[targetChannel,setTargetChannel]=useState<'email'|'in_app'|'push'>('email');
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;if(active.current){clearTimeout(active.current.timer);active.current.controller.abort();}};},[]);
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(locked.current)return;const form=e.currentTarget,data=new FormData(form);const value=(k:string)=>String(data.get(k)??'').trim();
 let target:TargetCreate|undefined,subscription:SubscriptionWrite|undefined;
 if(action==='target-create'){const label=value('label')||undefined;target=targetChannel==='email'?{channel:'email',email:value('email'),label}:targetChannel==='push'?{channel:'push',subscriptionId:value('subscriptionId'),label}:{channel:'in_app',label};}
 if(action.startsWith('subscription-')){const c=channel??value('channel') as Channel;if(!channels.includes(c)){setMessage('Choose a channel.');return;}const raw=value('threshold');if(raw&&!Number.isFinite(Number(raw))){setMessage('Materiality must be a finite number.');return;}subscription={channel:c,isEnabled:value('enabled')==='true',...(value('clear')==='on'?{minimumMaterialityScore:null}:raw?{minimumMaterialityScore:Number(raw)}:{})};}
 if(!action.endsWith('-create')&&!id){setMessage('No saved record was selected.');return;}
 locked.current=true;block();setState('pending');setMessage('Requesting the recorded change…');const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);active.current={controller,timer};
 try{const api=createSessionBoundBrowserApiClient(),common={context:{signal:controller.signal},idempotency:{key:crypto.randomUUID()}};
 const result=await (()=>{switch(action){
 case 'target-create':return api.mutate('POST /api/notifications/targets',{...common,body:target!});
 case 'target-enable':return api.mutate('POST /api/notifications/targets/{targetId}/enable',{...common,path:{targetId:id!}});
 case 'target-disable':return api.mutate('POST /api/notifications/targets/{targetId}/disable',{...common,path:{targetId:id!}});
 case 'subscription-create':return api.mutate('POST /api/notifications/subscriptions',{...common,body:subscription!});
 case 'subscription-update':return api.mutate('PATCH /api/notifications/subscriptions/{subscriptionId}',{...common,path:{subscriptionId:id!},body:subscription!});
 case 'verification-issue':return api.mutate('POST /api/notifications/verification/issue',{...common,body:{targetId:id!}});
 case 'verification-consume':{const token=value('token');form.reset();return api.mutate('POST /api/notifications/verification/consume',{...common,body:{targetId:id!,token}});}
 }})();if(!mounted.current)return;const d=result.kind==='success'?envelope(result.value):null;
 if(action.startsWith('target-')){const saved=targetProjection(d?.target);setMessage(saved&&(!id||saved.targetId===id)&&(action==='target-create'||saved.status===(action==='target-enable'?'active':'disabled'))?'The service returned the saved target. Read it to confirm its separate verification and enabled states.':unknown);}
 else if(action==='subscription-create'){const saved=subscriptionProjection(d?.subscription);setMessage(saved&&saved.channel===subscription?.channel?'The service returned the saved subscription. This does not prove delivery. Read saved settings.':unknown);}
 else if(action==='subscription-update'){const saved=record(d);setMessage(saved&&saved.subscriptionId===id&&saved.updated===true?'The service acknowledged the update. Read saved settings before treating the preference as confirmed.':unknown);}
 else if(action==='verification-issue')setMessage(verificationIssued(d?.verification,id!)?'The service acknowledged the verification challenge. This does not confirm delivery or verification. Read saved target state.':unknown);
 else {const v=verificationConsumed(d?.result,id!);setMessage(v?v.verified?'The service accepted the proof. Read the saved target before treating it as verified.':'The service did not verify this proof. Read saved target state before another submission.':unknown);}
 if(result.kind==='forbidden')setMessage('The service denied this operation. Read your current access before another submission.');
 if(result.kind==='unauthenticated')setMessage('Your session needs attention. Sign in again before another submission.');
 if(result.kind==='validation_failure')setMessage('The service rejected these fields. Read saved settings before preparing a correction.');
 if(result.kind==='conflict')setMessage('The service reported a conflict. Read saved settings before another submission.');
 if(result.kind==='rate_limited')setMessage('Requests are temporarily limited. Wait, then read saved settings.');
 }catch{if(mounted.current)setMessage(unknown);}finally{clearTimeout(timer);active.current=null;if(mounted.current)setState('settled');}}
 return <Modal label={labels[action]} title={labels[action]}><form className={styles.form} onSubmit={submit} aria-busy={state==='pending'}><p>Configuration, verification and successful delivery are separate. Changes require a saved-state read before another submission.</p><fieldset disabled={blocked||state!=='idle'}><legend>{labels[action]}</legend>
 {action==='target-create'&&<><label>Delivery channel<select name="channel" value={targetChannel} onChange={e=>setTargetChannel(e.target.value as typeof targetChannel)} aria-label="Delivery channel"><option value="email">Email</option><option value="in_app">In app</option><option value="push">Existing push subscription</option></select></label>{targetChannel==='email'&&<label>Email address<input name="email" type="email" maxLength={254} required autoComplete="email"/></label>}{targetChannel==='push'&&<><p>An existing provider-issued subscription ID is required. This form does not register a browser or prove provider readiness.</p><label>Existing subscription ID<input name="subscriptionId" minLength={8} maxLength={256} pattern="[A-Za-z0-9._:\-]+" required autoComplete="off"/></label></>}<label>Target label · optional<input name="label" autoComplete="off"/></label></>}
 {action.startsWith('subscription-')&&<>{!channel&&<label>Subscription channel<select name="channel" required aria-label="Subscription channel">{channels.map(c=><option key={c} value={c}>{c.replaceAll('_',' ')}</option>)}</select></label>}<label>Subscription state<select name="enabled" required defaultValue="" aria-label="Subscription state"><option value="" disabled>Choose recorded state</option><option value="true">Enabled</option><option value="false">Disabled</option></select></label><label>Minimum materiality · optional<input name="threshold" type="number" step="any"/></label><label className={styles.check}><input name="clear" type="checkbox"/>Clear the materiality threshold</label><p>No priority filter is offered: the frozen handler does not persist it. Enabling a channel does not establish a verified target or operational provider.</p></>}
 {action==='verification-issue'&&<p>The frozen service can issue a challenge, but this interface cannot confirm how the proof reaches you. No token is displayed here.</p>}
 {action==='verification-consume'&&<label>Verification proof<input name="token" type="password" required autoComplete="off"/></label>}
 <button className={styles.button}>{state==='pending'?'Requesting…':'Submit recorded change'}</button></fieldset><p role="status">{message}</p>{state==='settled'&&<a className={styles.button} href="/settings/notifications">Read saved delivery settings</a>}</form></Modal>;
}
