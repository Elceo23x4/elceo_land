import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../../components/primitives/Editorial.module.css';
import plans from '../../../components/public/Plans.module.css';

export const metadata: Metadata = { title: 'Kick Off & Focus Plan — ELCEO' };

export default function PricingPage() {
  return <main id="main-content" className={styles.container}>
    <section className={`${styles.hero} ${styles.split}`}>
      <div><p className={styles.kicker}>Kick Off / Focus Plan</p><h1 className={styles.display}>Choose your<br />depth of context.</h1></div>
      <p className={styles.lead}>A focused starting point or a fuller view of the evidence. Both support your thinking. Neither makes the decision for you.</p>
    </section>
    <section aria-label="Plan comparison" className={plans.comparison}>
      <article className={plans.plan}>
        <p className={styles.kicker}>The starting perspective</p><h2>Kick Off</h2>
        <p className={styles.lead}>Read the market in context.</p>
        <p>A reduced dashboard built around H4 chart context, evidence score and macro headlines.</p>
        <ul><li>H4 chart context</li><li>Evidence score</li><li>Macro headlines</li></ul>
        <Link href="/signup" className={styles.button}>Explore ELCEO <span aria-hidden="true">↗</span></Link>
      </article>
      <article className={`${plans.plan} ${plans.focus}`}>
        <p className={styles.kicker}>The fuller perspective</p><h2>Focus Plan</h2>
        <p className={styles.lead}>Examine what supports the view.</p>
        <p>A fuller dashboard projection with directional bias, confidence context, contradictions and evidence lineage.</p>
        <ul><li>Directional bias and confidence context</li><li>Contradiction state and evidence lineage</li><li>Chart annotations and cognition modules</li></ul>
        <Link href="/login" className={`${styles.button} ${styles.primary}`}>Sign in to review access <span aria-hidden="true">↗</span></Link>
      </article>
    </section>
    <section className={`${styles.section} ${styles.split}`}>
      <h2 className={styles.sectionTitle}>Before you<br />choose a plan.</h2>
      <div className={styles.reading}><p>Current prices and purchase terms are not published on this page. Review the available offer in your account before making a purchase.</p><p className={styles.aside}>Your account determines which capabilities are available. A plan description or a payment return screen does not confirm access.</p><Link className={styles.textLink} href="/help#access-billing">Billing guidance <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section aria-label="Plan questions" className={styles.rows}>
      <details className={styles.disclosure}><summary>Is confidence a guarantee?</summary><p>No. Confidence provides context for the evidence. It does not guarantee an outcome or turn analysis into a trading instruction.</p></details>
      <details className={styles.disclosure}><summary>Can a reduced view recreate Focus Plan intelligence?</summary><p>No. Kick Off and Focus Plan have separate dashboard projections. The reduced view does not contain the full intelligence behind Focus Plan.</p></details>
      <details className={styles.disclosure}><summary>Does a completed payment screen confirm my access?</summary><p>Access depends on the account’s confirmed subscription and entitlement state. Check your account if the payment and access status do not agree.</p></details>
    </section>
    <section className={styles.section}><div className={styles.banner}><p>ELCEO provides market intelligence and decision support. It does not execute trades, hold funds or promise an outcome.</p><Link href="/legal/risk-disclosure" className={styles.textLink}>Read the risk disclosure <span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}
