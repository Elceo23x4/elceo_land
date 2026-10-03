import Link from 'next/link';
import type { ReactNode } from 'react';
import editorial from '../primitives/Editorial.module.css';
import styles from './LegalDocument.module.css';

type Section = { id: string; title: string; children: ReactNode };

/** Reading structure only. Policy approval, versions and acknowledgements are not inferred here. */
export function LegalDocument({ title, introduction, sections, publicationNote }: {
  title: string; introduction: string; sections: readonly Section[]; publicationNote: string;
}) {
  return <main id="main-content" className={editorial.container}>
    <header className={`${editorial.hero} ${styles.heading}`}>
      <p className={editorial.kicker}>ELCEO · Legal &amp; trust</p>
      <h1 className={editorial.display}>{title}</h1>
      <p className={editorial.lead}>{introduction}</p>
    </header>
    <div className={styles.document}>
      <nav aria-label="On this page" className={styles.contents}>
        <p>In this document</p>
        <ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
      </nav>
      <div className={styles.body}>
        <aside className={styles.notice} aria-label="Publication status"><h2>Publication status</h2><p>{publicationNote}</p></aside>
        {sections.map(section => <section key={section.id} id={section.id} className={styles.section}>
          <h2>{section.title}</h2>{section.children}
        </section>)}
        <nav aria-label="Related documents" className={styles.related}>
          <span>Read alongside</span>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/risk-disclosure">Risk disclosure</Link>
          <Link href="/help">Help</Link>
        </nav>
      </div>
    </div>
  </main>;
}
