'use client';
import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import styles from './Recovery.module.css';

type Status = 'idle' | 'sending' | 'accepted' | 'reset' | 'invalid' | 'policy' | 'uncertain' | 'limited';
const messages: Partial<Record<Status, string>> = {
  accepted: 'If recovery is available for this account, instructions will be sent. This response does not confirm an account exists or that an email was delivered.',
  reset: 'Your password reset has been confirmed. Return to sign in.',
  invalid: 'This recovery link is invalid or has expired. Request a new link.',
  policy: 'The password was not accepted. Use between 15 and 256 characters; the server checks the final password.',
  uncertain: 'We could not confirm the outcome. No automatic retry was made. If you were resetting a password, try signing in before requesting another link.',
  limited: 'Recovery is temporarily rate limited. Wait before trying again.',
};

export function RecoveryForm({ mode, token }: { mode: 'request' | 'confirm'; token?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const busy = useRef(false);
  const result = useRef<HTMLDivElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (busy.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const password = String(fields.get('password') ?? '');
    if (mode === 'confirm' && (Array.from(password.normalize('NFC')).length < 15 || Array.from(password.normalize('NFC')).length > 256)) {
      setStatus('policy'); return;
    }
    busy.current = true; setStatus('sending');
    // One logical submission; no retry loop or persisted credentials.
    const key = crypto.randomUUID();
    try {
      const response = await fetch(`/api/auth/password-reset/${mode}`, {
        method: 'POST', headers: { 'content-type': 'application/json', 'idempotency-key': key },
        body: JSON.stringify(mode === 'request' ? { email: String(fields.get('email') ?? '').trim() } : { token, password }),
      });
      const payload: unknown = await response.json();
      const data = payload !== null && typeof payload === 'object' ? payload as Record<string, unknown> : {};
      if (mode === 'request' && response.status === 202 && data.accepted === true) setStatus('accepted');
      else if (mode === 'confirm' && response.status === 200 && data.reset === true) { form.reset(); setStatus('reset'); }
      else if (response.status === 400 && data.error === 'password_policy_rejected') setStatus('policy');
      else if (response.status === 400 && data.error === 'invalid_or_expired_token') setStatus('invalid');
      else setStatus(response.status === 429 ? 'limited' : 'uncertain');
    } catch { setStatus('uncertain'); }
    finally { busy.current = false; result.current?.focus(); }
  }
  const terminal = ['accepted','reset','invalid','uncertain'].includes(status);
  if (mode === 'confirm' && !token) return <div role="status"><p>A recovery link is required before you can reset a password.</p><Link href="/forgot-password">Request a recovery link</Link></div>;
  return <>
    <form onSubmit={submit} className={styles.form} aria-busy={status === 'sending'}>
      {!terminal && <>
        <label htmlFor="recovery-value">{mode === 'request' ? 'Account email' : 'New password'}</label>
        <input id="recovery-value" name={mode === 'request' ? 'email' : 'password'} type={mode === 'request' ? 'email' : 'password'} autoComplete={mode === 'request' ? 'email' : 'new-password'} required aria-describedby="recovery-hint" disabled={status === 'sending'} />
        <p id="recovery-hint">{mode === 'request' ? 'Use the address associated with your existing credentials. Google-only accounts should return to Google sign-in.' : '15–256 characters. No required mixture of symbols, capitals or numbers.'}</p>
        <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Waiting for confirmation…' : mode === 'request' ? 'Request recovery instructions' : 'Confirm new password'}<span aria-hidden="true">↗</span></button>
      </>}
      <div ref={result} tabIndex={-1} role="status" className={styles.result}>{messages[status]}</div>
    </form>
    <nav aria-label="Recovery navigation"><Link href="/login">Return to sign in</Link>{status === 'invalid' && <Link href="/forgot-password">Request a new link</Link>}</nav>
  </>;
}
