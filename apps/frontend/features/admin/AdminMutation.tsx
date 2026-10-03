'use client';
import {useEffect,useId,useRef,useState,type FormEvent} from 'react';
import {Modal} from '../../components/primitives/Modal';
import {commandDefinitions,stepUpActions,stepUpRouteScopes,type AdminCommand,type Field} from './commands';
import {words,type DisplayValue} from './projection';
import {AdminData} from './AdminData';
import styles from './Admin.module.css';
type Offer={command:Exclude<AdminCommand,'challenge'|'verify'>;target?:string};
type Result={kind:string;status:number|null;value?:DisplayValue};
function resultRecord(value:unknown):Record<string,unknown>|null{return value&&typeof value==='object'&&!Array.isArray(value)?value as Record<string,unknown>:null;}
const feedback:Record<string,string>={forbidden:'The service denied this operation. No authorization was inferred.',permission_denied:'The service denied administrative permission.',role_denied:'Your canonical role does not authorize this operation.',unauthenticated:'Your session needs attention. Sign in again before continuing.',conflict:'The service reported a conflict. Read recorded state before another logical change.',rate_limited:'The service is limiting requests. No retry was made.',validation_failure:'The submitted fields were not accepted. Read recorded state before another submission.',unavailable_degraded:'The service is unavailable. The mutation outcome remains unconfirmed.'};
export function AdminMutations({offers,readback}:{offers:Offer[];readback:string}){
 const lock=useRef(false),[blocked,setBlocked]=useState(false);
 return <div className={styles.actions}>{offers.map(offer=><AdminMutation key={offer.command} {...offer} blocked={blocked} acquire={()=>{if(lock.current)return false;lock.current=true;setBlocked(true);return true;}} readback={readback}/>)}</div>;
}
function AdminMutation({command,target,blocked,acquire,readback}:Offer&{blocked:boolean;acquire:()=>boolean;readback:string}){
 const id=useId(),mounted=useRef(true),controller=useRef<AbortController|null>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null),started=useRef(false),cancelled=useRef(false),saved=useRef<Record<string,unknown>>({});
 const [pending,setPending]=useState(false),[stage,setStage]=useState<'initial'|'proof'|'verified'|'settled'>('initial'),[message,setMessage]=useState(''),[proof,setProof]=useState(''),[receipt,setReceipt]=useState<Record<string,unknown>|null>(null),[value,setValue]=useState<DisplayValue>();
 const highRisk=Object.hasOwn(stepUpActions,command),definition=commandDefinitions[command];
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;if(timer.current)clearTimeout(timer.current);controller.current?.abort();};},[]);
 function dismiss(){setProof('');if(started.current){cancelled.current=true;if(timer.current)clearTimeout(timer.current);timer.current=null;controller.current?.abort();setStage('settled');setReceipt(null);setMessage('This dialog was closed. Browser waiting ended; server cancellation is not proven. Read recorded state before another change.');}}
 async function send(action:AdminCommand,body:Record<string,unknown>):Promise<Result>{
  const abort=new AbortController();controller.current=abort;timer.current=setTimeout(()=>abort.abort(),30000);setPending(true);
  try{const response=await fetch('/api/admin-command',{method:'POST',headers:{'content-type':'application/json','idempotency-key':crypto.randomUUID()},body:JSON.stringify({command:action,body}),signal:abort.signal});const raw:unknown=await response.json();const r=resultRecord(raw);if(!r||typeof r.kind!=='string')return {kind:'unknown_error',status:response.status};return {kind:r.kind,status:response.status,...('value'in r?{value:r.value as DisplayValue}:{})};}
  catch{return {kind:'unknown_error',status:null};}
  finally{if(timer.current)clearTimeout(timer.current);timer.current=null;controller.current=null;if(mounted.current)setPending(false);}
 }
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(controller.current||stage==='settled'||cancelled.current)return;
  const form=event.currentTarget;
  if(stage==='initial'){
   if(blocked||!acquire())return;started.current=true;
   const data=new FormData(form),body:Record<string,unknown>={};for(const [key,spec]of Object.entries(definition.fields) as [string,Field][]){if(key==='stepUpChallengeId')continue;const v=data.get(key);if(v===null||v===''){if(spec.kind!=='optional')body[key]='';continue;}body[key]=spec.kind==='boolean'?v==='true':String(v);}saved.current=body;
   if(highRisk){const providerKind=String(data.get('providerKind'));saved.current={...body};const result=await send('challenge',{actionKind:stepUpActions[command as keyof typeof stepUpActions],targetUserId:body.userId,providerKind});if(!mounted.current||cancelled.current)return;const r=resultRecord(result.value);
    if(result.kind==='success'&&r&&typeof r.challengeId==='string'&&r.targetUserId===body.userId&&r.providerKind===providerKind&&r.status==='pending'&&r.routeScope===stepUpRouteScopes[command as keyof typeof stepUpRouteScopes]){setReceipt(r);setStage('proof');setMessage(`Challenge recorded. Provider status: ${String(r.providerStatus)}. No verification is implied.`);}else{setStage('settled');setMessage(feedback[result.kind]??'The challenge outcome is unconfirmed. No retry was made.');}return;
   }
  }
  if(stage==='proof'){
   const submittedProof=proof;setProof('');const result=await send('verify',{challengeId:receipt?.challengeId,providerKind:receipt?.providerKind,proof:submittedProof});if(!mounted.current||cancelled.current)return;const r=resultRecord(result.value);
   if(result.kind==='success'&&r?.verified===true&&r.status==='verified'&&r.challengeId===receipt?.challengeId&&r.providerKind===receipt?.providerKind){setStage('verified');setMessage('The backend returned verification. Final authorization, freshness and single use are checked again when the change is submitted.');}
   else{setStage('settled');setMessage(result.kind==='success'&&typeof r?.status==='string'?`Verification was not granted: ${r.status}. No commercial change was submitted.`:feedback[result.kind]??'The verification outcome is unconfirmed. No commercial change was submitted.');}return;
  }
  const result=await send(command,{...saved.current,...(highRisk?{stepUpChallengeId:receipt?.challengeId}:{})});if(!mounted.current||cancelled.current)return;setStage('settled');setReceipt(null);
  if(result.kind==='success'&&result.value!==undefined){setValue(result.value);setMessage('The service returned the recorded result below. Read current state before another logical change.');}
  else setMessage(feedback[result.kind]??'The mutation outcome is unconfirmed. No automatic retry was made. Browser cancellation does not prove server cancellation.');
 }
 return <Modal label={definition.label} title={definition.label} onDismiss={dismiss}><form className={styles.form} onSubmit={submit} aria-busy={pending}>
 <p>This records an administrative change. Review the target and fields carefully. It does not execute a market trade or prove provider settlement.</p>
 <fieldset disabled={pending||stage!=='initial'||blocked}><legend>Recorded change</legend>{(Object.entries(definition.fields) as [string,Field][]).filter(([key])=>key!=='stepUpChallengeId').map(([key,spec])=><label className={styles.field} key={key}><span id={`${id}-${key}`}>{words(key)}</span>{spec.kind==='choice'||spec.kind==='boolean'?<select name={key} aria-labelledby={`${id}-${key}`} required>{(spec.kind==='boolean'?['false','true']:spec.values??[]).map(v=><option key={v} value={v}>{words(v)}</option>)}</select>:<input name={key} aria-labelledby={`${id}-${key}`} defaultValue={key==='userId'||key==='subjectId'?target:undefined} readOnly={!!target&&(key==='userId'||key==='subjectId')} required={spec.kind!=='optional'} placeholder={spec.kind==='timestamp'?'YYYY-MM-DDTHH:mm:ssZ':undefined}/>}</label>)}{highRisk&&<label className={styles.field}><span id={`${id}-provider`}>Verification provider</span><select name="providerKind" aria-labelledby={`${id}-provider`}><option value="totp">TOTP</option><option value="webauthn_passkey">WebAuthn passkey</option><option value="authenticator_app">Authenticator app</option><option value="verified_email_fallback">Verified email fallback</option></select></label>}</fieldset>
 {stage==='proof'&&<label className={styles.field}><span>Step-up proof</span><input type="password" value={proof} onChange={e=>setProof(e.target.value)} required autoComplete="off" disabled={pending}/></label>}
 {receipt&&<p>Challenge expires: {String(receipt.expiresAt)}. Closing this dialog does not cancel or revoke the backend challenge.</p>}
 <button className={styles.button} disabled={pending||stage==='settled'||stage==='initial'&&blocked}>{stage==='proof'?'Verify proof':stage==='verified'?'Submit verified change':highRisk?'Request verification':'Submit recorded change'}</button>
 <p role="status">{message}</p>{value!==undefined&&<AdminData value={value}/>}<a href={readback}>Read authoritative state</a>{message.includes('session')&&<a href="/login?callbackUrl=%2Fadmin">Sign in again</a>}
 </form></Modal>;
}
