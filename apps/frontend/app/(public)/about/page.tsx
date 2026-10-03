import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../../components/primitives/Editorial.module.css';

export const metadata: Metadata = { title: 'About ELCEO — Context before reaction' };

export default function AboutPage() {
  return <main id="main-content" className={styles.container}>
    <section className={`${styles.hero} ${styles.split}`}>
      <div><p className={styles.kicker}>The thinking behind ELCEO</p><h1 className={`${styles.display} ${styles.aboutDisplay}`}>More context.<br />Better questions.</h1></div>
      <p className={styles.lead}>Markets move quickly. Understanding what is moving them takes a different kind of attention.</p>
    </section>
    <hr className={styles.rule} />
    <section className={`${styles.section} ${styles.split}`}>
      <h2 className={styles.sectionTitle}>Price tells you<br />what happened.<br /><span className={styles.accent}>Context asks why.</span></h2>
      <div className={styles.reading}><p>ELCEO brings market information, evidence and review into one decision-support workspace. It helps you examine the forces around a move, notice conflicting evidence and return to the assumptions behind your decisions.</p><p className={styles.aside}>The aim is a more intentional process. A clearer view still leaves the decision—and its risk—with you.</p></div>
    </section>
    <section aria-label="Our approach" className={styles.rows}>
      {[
        ['Context before reaction', 'A headline is a starting point. Consider its timing, the wider market and what price has already absorbed before treating it as a complete explanation.'],
        ['Evidence over emotion', 'Look for support, contradictions and missing information. Confidence is context to examine, never certainty to borrow.'],
        ['Selectivity over activity', 'Not every move deserves a decision. A disciplined process includes recognising when the evidence is thin or conditions are unclear.'],
        ['Review over repetition', 'Keep a record of your thesis, actions and observations. Revisit the reasoning—not just the outcome—to understand the habits shaping your process.'],
      ].map(([title, copy]) => <article key={title} className={styles.row}><h3>{title}</h3><p>{copy}</p></article>)}
    </section>
    <section className={styles.section}><div className={styles.banner}><p>ELCEO is market intelligence and decision support. It does not execute trades, hold funds or provide a guarantee of outcomes.</p><Link className={styles.textLink} href="/legal/risk-disclosure">Understand the limits <span aria-hidden="true">↗</span></Link></div></section>
    <section className={`${styles.section} ${styles.split}`}><h2 className={styles.sectionTitle}>Build a calmer<br />market routine.</h2><div><p className={styles.lead}>Start with the questions that matter to you.</p><Link className={`${styles.button} ${styles.primary}`} href="/signup">Start exploring ELCEO <span aria-hidden="true">→</span></Link></div></section>
  </main>;
}
