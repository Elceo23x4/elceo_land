import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../../../components/primitives/Editorial.module.css';

export const metadata: Metadata = { title: 'A closer look at the process — ELCEO' };

const questions = [
  { title: 'A headline arrives. Price moves.', question: 'What do you know so far?', copy: 'You have an event and a price reaction. You do not yet have a complete explanation of the move.', prompts: ['When did the information become available?', 'What was the market already expecting?', 'Is the reaction consistent across the markets you are reviewing?'] },
  { title: 'The evidence does not all agree.', question: 'What would change your view?', copy: 'Contradictory evidence is part of the picture. Hiding it makes a story easier to tell, but harder to examine.', prompts: ['Which assumptions does your interpretation depend on?', 'What evidence runs against it?', 'What information is missing or no longer current?'] },
  { title: 'The move is over. The review is not.', question: 'What did your process reveal?', copy: 'An outcome alone does not explain the quality of a decision. Return to what you knew, what you assumed and how you responded.', prompts: ['What was your original thesis?', 'Did your reasoning change when the evidence changed?', 'Which pattern would you want to notice next time?'] },
] as const;

export default function DemoPage() {
  return <main id="main-content" className={styles.container}>
    <section className={`${styles.hero} ${styles.split}`}>
      <div><p className={styles.kicker}>A guided example</p><h1 className={styles.display}>Follow the<br />questions.</h1></div>
      <div><p className={styles.lead}>A headline, a reaction, a decision. Look at the space between them.</p><p className={styles.aside}>This is an illustrative reading exercise, not a live market feed, generated intelligence or a demonstration of your account access.</p></div>
    </section>
    <section aria-label="Illustrative market review" className={styles.rows}>
      {questions.map(item => <article className={styles.row} key={item.title}>
        <h2 className={styles.sectionTitle}>{item.title}</h2>
        <div><p>{item.copy}</p><details className={styles.disclosure}><summary>{item.question}</summary><ul>{item.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul></details></div>
      </article>)}
    </section>
    <section className={`${styles.section} ${styles.split}`}><h2 className={styles.sectionTitle}>Context is a process.<br />Keep it open.</h2><div><p className={styles.lead}>ELCEO brings evidence, context and review into a decision-support workspace. Your judgement and the risks remain your own.</p><Link className={`${styles.button} ${styles.primary}`} href="/signup">Start exploring ELCEO <span aria-hidden="true">↗</span></Link><p><Link className={styles.textLink} href="/pricing">Compare the perspectives</Link></p></div></section>
  </main>;
}
