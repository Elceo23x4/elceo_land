'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {Modal} from '../../components/primitives/Modal';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import {envelope} from '../workspace/projection';
import {journalCaseProjection} from './projection';
import {actionsByStatus,actionFields,actionLabels,parseAction,expectedStatus,type JournalAction} from './lifecycle';
import form from './JournalForm.module.css';
import ui from '../../components/app/Operational.module.css';
const uncertain='The outcome is unconfirmed. No automatic retry was made. The service may still finish the operation. Read the saved case before another action.';
export function CaseLifecycle({caseId,status}:{caseId:string;status:string}){
 const active=useRef<{controller:AbortController;timer:ReturnType<typeof setTimeout>}|null>(null),mounted=useRef(true),locked=useRef(false);
 const [state,setState]=useState<'idle'|'pending'|'settled'>('idle'),[message,setMessage]=useState('');
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;if(active.current){clearTimeout(active.current.timer);active.current.controller.abort();}};},[]);
 async function submit(action:JournalAction,event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(locked.current||active.current)return;
  const data=new FormData(event.currentTarget);
  try{parseAction(action,data);}catch(error){setMessage(error instanceof Error?error.message:'Review the recorded fields.');return;}
  locked.current=true;setState('pending');setMessage('Recording the requested change…');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);active.current={controller,timer};
  const common={path:{caseId},idempotency:{key:crypto.randomUUID()},context:{signal:controller.signal}},api=createSessionBoundBrowserApiClient();
  try{
   // Literal operation partition; never an arbitrary path/request interface.
   const result=await (action==='plan'?api.mutate('POST /api/journal/cases/{caseId}/plan',{...common,body:parseAction('plan',data)}):
    action==='execute'?api.mutate('POST /api/journal/cases/{caseId}/execute',{...common,body:parseAction('execute',data)}):
    action==='adjust'?api.mutate('POST /api/journal/cases/{caseId}/adjust',{...common,body:parseAction('adjust',data)}):
    action==='partial-close'?api.mutate('POST /api/journal/cases/{caseId}/partial-close',{...common,body:parseAction('partial-close',data)}):
    action==='close'?api.mutate('POST /api/journal/cases/{caseId}/close',{...common,body:parseAction('close',data)}):
    action==='cancel'?api.mutate('POST /api/journal/cases/{caseId}/cancel',{...common,body:parseAction('cancel',data)}):
    api.mutate('POST /api/journal/cases/{caseId}/review',{...common,body:parseAction('review',data)}));
   if(!mounted.current)return;
   const saved=result.kind==='success'?journalCaseProjection(envelope(result.value)?.case):null;
   if(saved&&saved.caseId===caseId&&saved.status===(action==='adjust'?status:expectedStatus[action]))setMessage('The service returned the updated case. Read the saved case before another action.');
   else if(result.kind==='conflict')setMessage('The service reported a conflict or invalid transition. Read the saved case before another action.');
   else if(result.kind==='validation_failure')setMessage('The service rejected the submitted fields. Read the saved case before preparing a corrected action.');
   else if(result.kind==='forbidden')setMessage('Your account is not authorized for this action.');
   else if(result.kind==='unauthenticated')setMessage('Sign in again before taking another action.');
   else if(result.kind==='rate_limited')setMessage('Requests are temporarily limited. Wait, then read the saved case.');
   else setMessage(uncertain);
  }catch{if(mounted.current)setMessage(uncertain);}
  finally{clearTimeout(timer);active.current=null;if(mounted.current)setState('settled');}
 }
 const available=actionsByStatus[status]??[];
 return <section className={ui.panel}><h2>Continue the case record</h2><p>These actions record your activity. They do not place, change or cancel a market order. The service validates every transition.</p>{!available.length?<p>No further lifecycle action is offered for this recorded status.</p>:<div className={ui.tabs}>{available.map(action=><Modal key={action} label={actionLabels[action]} title={actionLabels[action]}><form className={form.form} onSubmit={e=>submit(action,e)} aria-busy={state==='pending'}><p>Blank optional fields preserve the recorded value. Supplied lists replace that field; no performance value is calculated here. Times are entered in UTC.</p><fieldset disabled={state!=='idle'}><legend>{actionLabels[action]}</legend><div className={form.fields}>{actionFields[action].map(field=><div className={form.field} key={field.key}><label htmlFor={`${action}-${field.key}`}>{field.label}{field.required?'':' · optional'}</label>{field.kind==='select'?<select id={`${action}-${field.key}`} name={field.key} required={field.required} defaultValue=""><option value="">{field.required?'Choose recorded value':'Keep recorded value'}</option>{field.options?.map(value=><option key={value} value={value}>{value.replaceAll('_',' ')}</option>)}</select>:field.kind==='lines'||field.kind==='numbers'?<textarea id={`${action}-${field.key}`} name={field.key}/>:<input id={`${action}-${field.key}`} name={field.key} type={field.kind==='number'?'number':field.kind==='time'?'datetime-local':'text'} step={field.kind==='number'?'any':field.kind==='time'?'1':undefined} required={field.required} autoComplete="off"/>}</div>)}</div><button className={ui.button}>{state==='pending'?'Recording…':'Confirm recorded change'}</button></fieldset><p role="status">{message}</p>{state==='settled'&&<a className={ui.button} href={`/journal/${encodeURIComponent(caseId)}`}>Read saved case ↗</a>}</form></Modal>)}</div>}</section>;
}
