'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import styles from './AccountEntry.module.css';

const record = (value: unknown): value is Record<string, unknown> => !!value && typeof value === 'object' && !Array.isArray(value);

/** UI for the existing canonical relay; never reads cookies or creates a session. */
export function GoogleEntry({ callbackPath }: { callbackPath: string }) {
  const [pending, setPending] = useState(false);
  const [failure, setFailure] = useState('');
  const request = useRef<AbortController | null>(null);
  const csrf = useRef<HTMLInputElement>(null);
  const statusId = useId();
  useEffect(() => () => request.current?.abort(), []);

  async function begin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current) return;
    const form = event.currentTarget;
    const controller = new AbortController();
    request.current = controller;
    setPending(true); setFailure('');
    const timer = setTimeout(() => controller.abort(), 15_000);
    try {
      const options: RequestInit = { credentials: 'same-origin', cache: 'no-store', signal: controller.signal, headers: { accept: 'application/json' } };
      const providerResponse = await fetch('/api/auth/providers', options);
      if (!providerResponse.ok) throw new Error('unavailable');
      const providers: unknown = await providerResponse.json();
      if (!record(providers) || !record(providers.google) || providers.google.id !== 'google') throw new Error('unavailable');
      const csrfResponse = await fetch('/api/auth/csrf', options);
      if (!csrfResponse.ok) throw new Error('unavailable');
      const payload: unknown = await csrfResponse.json();
      if (!record(payload) || typeof payload.csrfToken !== 'string' || !payload.csrfToken || !csrf.current) throw new Error('unavailable');
      csrf.current.value = payload.csrfToken;
      // Native navigation lets the unchanged relay forward provider redirects and
      // opaque cookies. No redirect URL from JSON is trusted by this component.
      form.submit();
    } catch {
      if (form.isConnected) {
        setFailure('Google sign-in is unavailable right now. Please try again.');
        setPending(false);
      }
    } finally {
      clearTimeout(timer);
      request.current = null;
    }
  }

  return <form action="/api/auth/signin/google" method="post" onSubmit={begin} aria-busy={pending} className={styles.form}>
    <input ref={csrf} name="csrfToken" type="hidden" defaultValue="" />
    <input name="callbackUrl" type="hidden" value={callbackPath} />
    <button type="submit" disabled={pending} aria-describedby={statusId} className={styles.google}>
      {pending ? 'Opening secure sign-in…' : 'Continue with Google'}<span aria-hidden="true">↗</span>
    </button>
    <p id={statusId} role="status" aria-live="polite" className={styles.status}>{failure || (pending ? 'Connecting to Google through ELCEO.' : 'Your account is secured by the sign-in service.')}</p>
    <noscript><p>Enable JavaScript to begin secure Google sign-in. Public information remains available without signing in.</p></noscript>
  </form>;
}
