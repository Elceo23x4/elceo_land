 'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {Modal} from '../../components/primitives/Modal';
import {createSessionBoundBrowserApiClient} from '../../lib/api/authenticated-browser';
import {envelope} from '../workspace/projection';
import {watchProjection,positionProjection,actionProjection,snapshotProjection} from './projection';
import {operationDetails,fields,parsePortfolioBody,allowedOptions,type PortfolioAction} from './operations';
import styles from './Portfolio.module.css';
const uncertain='The outcome is unconfirmed. No automatic retry was made. The service may still finish the request. Read the saved record before another action.';
export function PortfolioMutations({offers,id,status,health,returnPath}:{offers:readonly PortfolioAction[];id?:string;status?:string;health?:string;returnPath:string}){
 const active=useRef<{controller:AbortController;timer:ReturnType<typeof setTimeout>}|null>(null),mounted=useRef(true),locked=useRef(false);
 const [state,setState]=useState<'idle'|'pending'|'settled'>('idle'),[message,setMessage]=useState(''),[savedHref,setSavedHref]=useState(returnPath);
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;if(active.current){clearTimeout(active.current.timer);active.current.controller.abort();}};},[]);
 async function submit(action:PortfolioAction,event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(locked.current||active.current)return;const data=new FormData(event.currentTarget);
  try{parsePortfolioBody(action,data);}catch(e){setMessage(e instanceof Error?e.message:'Review these fields.');return;}
  if(operationDetails[action].pathKey&&!id){setMessage('No saved entity was selected.');return;}
  locked.current=true;setState('pending');setMessage('Requesting the recorded change…');const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);active.current={controller,timer};
  try{const common={idempotency:{key:crypto.randomUUID()},context:{signal:controller.signal}},api=createSessionBoundBrowserApiClient();
   const result=await (()=>{switch(action){
case 'watch-create': return api.mutate('POST /api/portfolio/watchlist',{...common,body:parsePortfolioBody('watch-create',data)});
case 'watch-edit': return api.mutate('PATCH /api/portfolio/watchlist/{entryId}',{...common,path:{entryId:id!},body:parsePortfolioBody('watch-edit',data)});
case 'watch-status': return api.mutate('POST /api/portfolio/watchlist/{entryId}/status',{...common,path:{entryId:id!},body:parsePortfolioBody('watch-status',data)});
case 'watch-health': return api.mutate('POST /api/portfolio/watchlist/{entryId}/thesis-health',{...common,path:{entryId:id!},body:parsePortfolioBody('watch-health',data)});
case 'watch-archive': return api.mutate('POST /api/portfolio/watchlist/{entryId}/archive',{...common,path:{entryId:id!}});
case 'position-create': return api.mutate('POST /api/portfolio/positions',{...common,body:parsePortfolioBody('position-create',data)});
case 'position-edit': return api.mutate('PATCH /api/portfolio/positions/{positionId}',{...common,path:{positionId:id!},body:parsePortfolioBody('position-edit',data)});
case 'position-open': return api.mutate('POST /api/portfolio/positions/{positionId}/open',{...common,path:{positionId:id!},body:parsePortfolioBody('position-open',data)});
case 'position-reduce': return api.mutate('POST /api/portfolio/positions/{positionId}/reduce',{...common,path:{positionId:id!},body:parsePortfolioBody('position-reduce',data)});
case 'position-close': return api.mutate('POST /api/portfolio/positions/{positionId}/close',{...common,path:{positionId:id!},body:parsePortfolioBody('position-close',data)});
case 'position-cancel': return api.mutate('POST /api/portfolio/positions/{positionId}/cancel',{...common,path:{positionId:id!},body:parsePortfolioBody('position-cancel',data)});
case 'position-health': return api.mutate('POST /api/portfolio/positions/{positionId}/thesis-health',{...common,path:{positionId:id!},body:parsePortfolioBody('position-health',data)});
case 'action-create': return api.mutate('POST /api/portfolio/actions',{...common,body:parsePortfolioBody('action-create',data)});
case 'action-edit': return api.mutate('PATCH /api/portfolio/actions/{actionId}',{...common,path:{actionId:id!},body:parsePortfolioBody('action-edit',data)});
case 'action-complete': return api.mutate('POST /api/portfolio/actions/{actionId}/complete',{...common,path:{actionId:id!}});
case 'action-dismiss': return api.mutate('POST /api/portfolio/actions/{actionId}/dismiss',{...common,path:{actionId:id!}});
case 'snapshot': return api.mutate('POST /api/portfolio/snapshot/generate',{...common});}})();if(!mounted.current)return;
   const payload=result.kind==='success'?envelope(result.value):null,kind=operationDetails[action].response;
   const saved=kind==='entry'?watchProjection(payload?.entry):kind==='position'?positionProjection(payload?.position):kind==='action'?actionProjection(payload?.action):snapshotProjection(payload?.snapshot);
   const returnedId=saved?('entryId' in saved?saved.entryId:'positionId' in saved?saved.positionId:'actionId' in saved?saved.actionId:saved.snapshotId):null;
   const requiredStatus:Partial<Record<PortfolioAction,string>>={'watch-archive':'archived','watch-status':String(data.get('status')),'position-create':'proposed','position-open':'open','position-reduce':'reducing','position-close':'closed','position-cancel':'canceled','action-create':'open','action-complete':'completed','action-dismiss':'dismissed'};
   if(saved&&returnedId&&(!id||id===returnedId)&&(!requiredStatus[action]||('status' in saved&&saved.status===requiredStatus[action]))&&(!action.endsWith('-health')||('thesisHealth' in saved&&saved.thesisHealth===data.get('thesisHealth')))){
    setMessage('The service returned the saved record. Read it before taking another action.');
    if(action.endsWith('-create'))setSavedHref(`/portfolio/${kind==='entry'?'watchlist':kind==='position'?'positions':'actions'}?selected=${encodeURIComponent(returnedId)}#record`);
   }else if(result.kind==='forbidden')setMessage('Your account is not authorized for this operation.');
   else if(result.kind==='unauthenticated')setMessage('Sign in again before another action.');
   else if(result.kind==='conflict')setMessage('The service reported a conflict or invalid transition. Read the saved record before another action.');
   else if(result.kind==='validation_failure')setMessage('The service rejected these fields. Read the saved record before preparing a corrected action.');
   else if(result.kind==='rate_limited')setMessage('Requests are temporarily limited. Wait, then read the saved record.');
   else setMessage(uncertain);
  }catch{if(mounted.current)setMessage(uncertain);}finally{clearTimeout(timer);active.current=null;if(mounted.current)setState('settled');}
 }
 return <div className={styles.controls}>{offers.map(action=><Modal key={action} label={operationDetails[action].label} title={operationDetails[action].label}><form className={styles.form} onSubmit={e=>submit(action,e)} aria-busy={state==='pending'}><p>{action==='snapshot'?'Explicitly generate a new server-owned portfolio snapshot. Simply reading the portfolio never generates one.':'This records your context and activity. It does not place, change or cancel a market order.'}</p>{fields[action].length>0&&<p>Blank optional fields keep the service default or saved value. Supplied targets replace the recorded list. Times are entered in UTC. No price, size or performance value is calculated here.</p>}<fieldset disabled={state!=='idle'}><legend>{operationDetails[action].label}</legend><div className={styles.fields}>{fields[action].map(field=><label className={styles.field} key={field.key}>{field.label}{field.required?'':' · optional'}{field.kind==='select'?<select name={field.key} required={field.required} defaultValue=""><option value="">{field.required?'Choose recorded value':'Leave unchanged'}</option>{allowedOptions(action,field.key,status,health).map(v=><option value={v} key={v}>{v.replaceAll('_',' ')}</option>)}</select>:field.kind==='numbers'?<textarea name={field.key}/>:<input name={field.key} type={field.kind==='number'?'number':field.kind==='time'?'datetime-local':'text'} step={field.kind==='number'?'any':field.kind==='time'?'1':undefined} required={field.required} autoComplete="off"/>}</label>)}</div><button className={styles.action}>{state==='pending'?'Requesting…':'Confirm recorded change'}</button></fieldset><p role="status">{message}</p>{state==='settled'&&<a className={styles.action} href={savedHref}>Read saved record ↗</a>}</form></Modal>)}</div>;
}
