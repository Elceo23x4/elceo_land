import 'server-only';
import Link from 'next/link';
import { getCanonicalSessionResolution } from '../../lib/auth/server';
import { sanitizeCallbackPath } from '../../lib/auth/core';
import { GoogleEntry } from './GoogleEntry';
import editorial from '../../components/primitives/Editorial.module.css';
import styles from './AccountEntry.module.css';

export type EntrySearch = Promise<Record<string, string | string[] | undefined>>;

export async function AccountEntry({ mode, searchParams }: { mode: 'login' | 'signup'; searchParams: EntrySearch }) {
  const params = await searchParams;
  const callbackPath = sanitizeCallbackPath(typeof params.callbackUrl === 'string' ? params.callbackUrl : undefined, mode === 'signup' ? '/onboarding' : '/dashboard');
  const session = await getCanonicalSessionResolution().catch(() => null);
  const authenticated = session?.kind === 'authenticated';
  const signup = mode === 'signup';
  return <main id="main-content" className={`${editorial.container} ${styles.entry}`}>
    <section className={styles.statement}>
      <p className={editorial.kicker}>{signup ? 'A more intentional market routine' : 'Return to your perspective'}</p>
      <h1 className={editorial.display}>{signup ? <>A clearer view<br />starts here.</> : <>Your context.<br />In focus.</>}</h1>
      <p className={editorial.lead}>{signup ? 'Bring evidence, context and review into one decision-support workspace.' : 'Pick up the questions, observations and market context that matter to you.'}</p>
      <div className={styles.principle} aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <p className={styles.limit}>Market intelligence only.<br />No trade execution. No custody. No guaranteed outcomes.</p>
    </section>
    <section className={styles.access} aria-label={signup ? 'Create your account' : 'Sign in to ELCEO'}>
      <h2>{authenticated ? 'You’re signed in.' : signup ? 'Make room for context.' : 'Welcome back.'}</h2>
      {authenticated ? <><p>Your sign-in service has confirmed this session. Continue to your workspace or onboarding.</p><Link className={`${editorial.button} ${editorial.primary}`} href={callbackPath}>Continue <span aria-hidden="true">↗</span></Link></> : <>
        <p>{signup ? 'Use your Google account to enter ELCEO. You’ll then review the disclosures, choose your markets and review your plan.' : 'Use Google to securely return to your ELCEO account.'}</p>
        {typeof params.error === 'string' && <p className={styles.error} role="alert">Sign-in could not be completed. Please try again with the Google account you use for ELCEO.</p>}
        <GoogleEntry callbackPath={callbackPath} />
      </>}
      <div className={styles.readBefore}><p>Read before continuing</p><Link href="/legal/terms">Terms</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/risk-disclosure">Risk disclosure</Link></div>
      <p className={styles.note}>Signing in does not record your Terms acceptance, risk acknowledgement or age attestation. Those are separate onboarding steps.</p>
      <div className={styles.alternative}><Link href={signup ? '/login' : '/signup'}>{signup ? 'Already have an account? Sign in' : 'New to ELCEO? Start here'}</Link><Link href="/help">Need guidance?</Link></div>
    </section>
  </main>;
}
