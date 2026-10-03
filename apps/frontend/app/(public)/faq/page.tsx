import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../../components/primitives/Editorial.module.css';
export const metadata: Metadata = { title: 'Questions, answered — ELCEO' };
const groups = [
  { id: 'product', title: 'The product', items: [
    ['What is ELCEO?', 'A market-intelligence and decision-support workspace. ELCEO brings context, evidence and review together to help you examine a market decision.'],
    ['Will ELCEO tell me what to buy or sell?', 'No. Directional bias, confidence and other intelligence describe context; they are not instructions to execute a trade. You remain responsible for your decisions.'],
    ['Can I trade or deposit money here?', 'No. ELCEO is not a broker, execution venue or custody service. Subscription payments purchase access to the product, not a trading balance.'],
  ] },
  { id: 'intelligence', title: 'Evidence & uncertainty', items: [
    ['Does confidence mean certainty?', 'No. Confidence is part of the context around the evidence. Information may be incomplete, contradictory or become stale, and market outcomes remain uncertain.'],
    ['Why might intelligence be unavailable?', 'A source, dependency or materialized view may not be ready. ELCEO should show that limitation rather than fill it with a guessed result.'],
    ['Does opening a snapshot create new intelligence?', 'No. Viewing the latest, current or historical snapshot is a read. Refresh and generation are separate, explicit actions where your access permits them.'],
  ] },
  { id: 'account', title: 'Accounts & plans', items: [
    ['How do I create an account?', 'Use Google on the signup screen when the provider is available. Onboarding then introduces compliance acknowledgements, tracked markets and plan selection.'],
    ['What is the difference between Kick Off and Focus Plan?', 'Kick Off provides a reduced introduction; Focus Plan provides the fuller product experience subject to current account access. The pricing page explains the two paths.'],
    ['Does a payment return page prove my upgrade succeeded?', 'No. Access changes only after the service confirms payment and account state. A payment can remain pending or require reconciliation after the browser returns.'],
    ['Are my tracked markets the same as my portfolio watchlist?', 'No. Tracked markets configure your account scope. Portfolio watchlist entries hold their own priority, thesis and review context.'],
  ] },
] as const;
export default function FaqPage() {
  return <main id="main-content" className={styles.container}>
    <header className={`${styles.hero} ${styles.split}`}><div><p className={styles.kicker}>A little clarity before you begin</p><h1 className={styles.display}>Good questions.<br />Straight answers.</h1></div><p className={styles.lead}>What ELCEO does, where its limits are and what to expect as you use it.</p></header>
    <nav className={styles.jumpLinks} aria-label="Question topics">{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title}</a>)}</nav>
    {groups.map(group => <section key={group.id} id={group.id} className={`${styles.section} ${styles.split}`} style={{ alignItems: 'start' }}><h2 className={styles.sectionTitle}>{group.title}</h2><div>{group.items.map(([question, answer]) => <details key={question} className={styles.disclosure}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>)}
    <section className={styles.section}><div className={styles.banner}><p>Looking for a practical starting point? Follow the guides to account setup, reviewing information and understanding access.</p><Link className={styles.textLink} href="/help">Explore help <span aria-hidden="true">→</span></Link></div></section>
  </main>;
}
