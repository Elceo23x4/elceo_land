import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../../components/primitives/Editorial.module.css';
export const metadata: Metadata = { title: 'Help & guidance — ELCEO' };
export default function HelpPage() {
  return <main id="main-content" className={styles.container}>
    <header className={`${styles.hero} ${styles.split}`}><div><p className={styles.kicker}>Help & guidance</p><h1 className={styles.display}>Find your<br />next step.</h1></div><p className={styles.lead}>A practical guide to setting up, reading context and building a review routine.</p></header>
    <nav aria-label="Help topics" className={styles.jumpLinks}><a href="#getting-started">Getting started</a><a href="#reading-context">Reading context</a><a href="#your-records">Your records</a><a href="#access-billing">Access & billing</a></nav>
    <div className={`${styles.section} ${styles.helpGrid}`}>
      <section id="getting-started"><h2>Start with your<br />market scope.</h2><ol><li>Sign in with Google through ELCEO’s account entry.</li><li>Read the Terms and Risk Disclosure during onboarding.</li><li>Choose the markets you want to follow.</li><li>Review your plan and account access before exploring the workspace.</li></ol><Link className={styles.textLink} href="/signup">Create an account <span aria-hidden="true">↗</span></Link></section>
      <section id="reading-context"><h2>Read the context,<br />including its limits.</h2><p>Start with the market and timeframe. Look at the evidence supporting a view, any contradictions and when the information was produced.</p><p>A stale or unavailable view is a reason to pause. Opening a view does not silently refresh it, and a confidence value does not guarantee an outcome.</p><Link className={styles.textLink} href="/faq#intelligence">Understand intelligence <span aria-hidden="true">↗</span></Link></section>
      <section id="your-records"><h2>Keep the reasoning<br />with the record.</h2><p>Use your journal to describe a thesis and revisit it later. Portfolio watchlists, positions and actions organise your own records; recording an action here does not execute it at a broker.</p><p>Review what you believed at the time alongside what you later observed. Keep user observations distinct from ELCEO’s server-produced intelligence.</p></section>
      <section id="access-billing"><h2>Give pending payments<br />time to reconcile.</h2><p>A return from a payment provider does not prove an upgrade is active. Check Billing and Access for the service-confirmed state.</p><p>If an attempt is processing or its outcome is unclear, avoid starting duplicate payments. Keep its reference and review its status before taking another action.</p><Link className={styles.textLink} href="/settings/billing">Open billing <span aria-hidden="true">↗</span></Link></section>
    </div>
    <section className={styles.section}><div className={styles.banner}><p>In-product support-ticket submission is not available. These guides and the FAQ remain accessible without an account.</p><Link className={styles.textLink} href="/faq">Browse the FAQ <span aria-hidden="true">→</span></Link></div></section>
  </main>;
}
