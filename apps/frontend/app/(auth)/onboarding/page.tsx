import Link from 'next/link';
import {requireAuthenticatedSession} from '../../../lib/auth/server';
import editorial from '../../../components/primitives/Editorial.module.css';
import styles from '../../../features/account-entry/AccountEntry.module.css';
export const dynamic='force-dynamic';
export const metadata={title:'Begin your workspace — ELCEO',robots:{index:false,follow:false}};
export default async function Page() {
 const session=await requireAuthenticatedSession('/onboarding');
 return <main id="main-content" className={`${editorial.container} ${styles.entry}`}><header className={styles.statement}><p className={editorial.kicker}>Welcome to ELCEO</p><h1 className={editorial.display}>Context begins<br/>with clarity.</h1><p className={editorial.lead}>Review the product’s limits before choosing tracked markets and a plan.</p><ol><li>Welcome</li><li>Compliance review</li><li>Tracked markets</li><li>Plan</li><li>Complete</li></ol></header><section className={styles.access} aria-label="Onboarding status">
 {session.user.onboardingCompletedAt?<><h2>Your onboarding is recorded.</h2><p>Your sign-in service reports completion at <time dateTime={session.user.onboardingCompletedAt}>{session.user.onboardingCompletedAt}</time>.</p><Link className={editorial.button} href="/workspace">Open your workspace ↗</Link></>:<><h2>Compliance review is not ready.</h2><p role="status">The full Terms and final risk acknowledgement need publication approval. Recording an explicit 18+ attestation also requires the pending backend contract. We cannot complete onboarding or claim your acceptance is recorded yet.</p><p>ELCEO provides market intelligence and decision support. It does not execute trades, hold funds or guarantee outcomes.</p><div className={styles.readBefore}><Link href="/legal/terms">Read Terms information</Link><Link href="/legal/privacy">Read privacy information</Link><Link href="/legal/risk-disclosure">Read risk disclosure</Link></div><p className={styles.note}>No acceptance checkbox, market selection or plan choice has been submitted or saved by this screen.</p><Link href="/settings/profile">Review your identity</Link></>}
 </section></main>;
}
