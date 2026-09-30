'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import styles from '../../components/app/Operational.module.css';
export function SignOut() {
 const csrf=useRef<HTMLInputElement>(null),request=useRef<AbortController|null>(null);
 const [pending,setPending]=useState(false),[failure,setFailure]=useState('');
 useEffect(()=>()=>request.current?.abort(),[]);
 async function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();if(request.current)return;
  const form=event.currentTarget,controller=new AbortController();request.current=controller;setPending(true);setFailure('');
  const timer=setTimeout(()=>controller.abort(),15000);
  try {
   const response=await fetch('/api/auth/csrf',{credentials:'same-origin',cache:'no-store',signal:controller.signal});
   const payload:unknown=await response.json();
   if(!response.ok||!payload||typeof payload!=='object'||!('csrfToken'in payload)||typeof payload.csrfToken!=='string'||!payload.csrfToken||!csrf.current)throw new Error('unavailable');
   csrf.current.value=payload.csrfToken;form.submit();
  }catch{if(form.isConnected){setPending(false);setFailure('Sign-out could not be started. Your session status has not been changed by this screen.');}}
  finally{clearTimeout(timer);request.current=null;}
 }
 return <details className={styles.details}><summary>Sign out of ELCEO</summary><p>End this browser’s session through the canonical sign-in service.</p><form action="/api/auth/signout" method="post" onSubmit={submit} aria-busy={pending}><input type="hidden" name="csrfToken" ref={csrf}/><input type="hidden" name="callbackUrl" value="/login"/><button className={styles.button} disabled={pending}>{pending?'Opening sign-out…':'Confirm sign out'}</button><p role="status">{failure}</p></form></details>;
}
