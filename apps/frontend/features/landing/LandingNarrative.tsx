import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { SceneMedia } from './SceneMedia';
import { LandingMotion } from './LandingMotion';
import styles from './LandingNarrative.module.css';

const principles = [
  { title: <>Context<br />before reaction.</>, copy: 'See the full picture. Not just the move.', color: '#da791e', icon: 'orb' },
  { title: <>Evidence<br />over emotion.</>, copy: 'Let data and structure lead.', color: '#17b69b', icon: 'layers' },
  { title: <>Selectivity<br />over activity.</>, copy: 'Not every move deserves a trade.', color: '#ed4357', icon: 'bars' },
  { title: <>Multiple<br />perspectives.</>, copy: 'One view is never enough.', color: '#2595eb', icon: 'prism' },
  { title: <>Continuous<br />review.</>, copy: 'A sharper you over time.', color: '#e42882', icon: 'rings' },
] as const;
const problems = ['Headline shock', 'Stale narrative', 'Weak zone significance', 'Single-timeframe bias', 'Contradiction ignored', 'Base/quote misread', 'Unreviewed pattern repetition'];
const fragments = [
  ['Headlines', 'Central bank signals caution'], ['Economic releases', 'Inflation surprises higher'],
  ['Market structure', 'A move needs context'], ['World events', 'Geopolitical tensions rise'], ['Company results', 'Earnings disappoint'],
];

function PrincipleIcon({ kind }: { kind: typeof principles[number]['icon'] }) {
  return <span className={`${styles.icon} ${styles[kind]}`} aria-hidden="true"><i /><i /><i /><i /><i /></span>;
}

export function LandingNarrative() {
  return <main id="main-content" className={styles.landing} data-landing-root>
    <LandingMotion />
    <section className={styles.hero} aria-label="ELCEO market intelligence">
      <div className={styles.world} data-landing-world aria-hidden="true"><SceneMedia asset="world" /></div>
      <div className={styles.identity}>
        <div className={styles.wordmark}><span className={styles.candles} aria-hidden="true"><i /><i /><i /><i /><i /></span><h1>ELCEO</h1></div>
        <p>Market intelligence<br />for a clearer tomorrow</p>
      </div>
      <p className={styles.heroNote}>A clearer view<br />for a more intentional<br />trading journey.</p>
      <a className={styles.scroll} href="#market-depth">Explore the story <span aria-hidden="true">↓</span></a>
    </section>

    <section id="market-depth" className={styles.depth} aria-labelledby="depth-title">
      <SceneMedia asset="depth" fill className={styles.landscape} />
      <div className={styles.depthTitle}><p className={styles.label}>Same market. A deeper story.</p><h2 id="depth-title">Price is visible.<br />The real story<br /><em>runs deeper.</em></h2></div>
      <p className={styles.depthCopy}>Beneath every move is a web of narratives, pressures and shifting context. Most traders see the move. Fewer see what’s moving it.</p>
    </section>

    <section className={styles.aperture} aria-labelledby="blind-spots-title" data-landing-lens-scope>
      <div className={styles.lens} data-landing-lens aria-hidden="true" />
      <div className={styles.problemHeading}><p className={styles.label}>Common blind spots</p><h2 id="blind-spots-title">Most trading mistakes begin before the trade.</h2></div>
      <ul className={styles.problems}>{problems.map((problem, index) => <li key={problem}><svg viewBox="0 0 40 40" aria-hidden="true"><path d={[
        'M10 7h15l6 6v21H10z M25 7v8h6 M15 21h11 M15 26h8',
        'M5 13 20 7l15 6-15 6z M5 21l15 6 15-6 M5 29l15 6 15-6',
        'M6 23h28 M10 17v12 M15 12v16 M20 7v23 M25 15v20 M30 10v15',
        'M8 29V18 M15 33V8 M22 26V13 M29 32V5',
        'M20 5a15 15 0 1 0 0 30 15 15 0 1 0 0-30 M9 9l22 22',
        'M13 7v26 M19 11c-15-5-17 9-6 9s9 14-6 8 M30 7v26 M36 11c-15-5-17 9-6 9s9 14-6 8',
        'M31 12a14 14 0 1 0 2 17 M31 5v9h-9',
      ][index]} /></svg><span>{problem}</span></li>)}</ul>
    </section>

    <section className={styles.constellation} aria-labelledby="principles-title">
      <p className={`${styles.label} ${styles.approachLabel}`}>Our approach</p>
      <h2 id="principles-title">Our principles<br />in the age of market noise.</h2>
      <p className={styles.principlesCopy}>A clearer way to think. A more intentional way to trade. Built on principles that keep you focused on what actually matters.</p>
      <div className={styles.placards}>{principles.map((principle, i) => <article className={styles.placard} data-landing-placard key={principle.icon} style={{ '--tone': principle.color, '--order': i } as CSSProperties}>
        <PrincipleIcon kind={principle.icon} /><h3>{principle.title}</h3><p>{principle.copy}</p>
      </article>)}</div>
    </section>

    <section className={styles.information} aria-labelledby="information-title">
      <SceneMedia asset="horizon" fill className={styles.horizon} />
      <div className={styles.informationCopy}><p className={styles.label}>From fragments to a clearer view</p><h2 id="information-title">Turn information<br />into insight.</h2><p>News, data, sentiment, structure—connect the context around a move, and examine what the fragments alone cannot explain.</p></div>
      <div className={styles.planes} data-landing-planes role="region" aria-label="Illustrative information fragments; scroll horizontally on smaller screens" tabIndex={0}>
        {fragments.map(([label, title], i) => <div className={styles.plane} data-landing-plane data-depth={i === 2 ? 80 : i % 2 ? -35 : 10} key={label} style={{ '--plane': i } as CSSProperties}><span>{label}</span><p>{title}</p><div className={styles.fragmentLines} aria-hidden="true"><i /><i /><i /></div></div>)}
      </div>
      <p className={styles.fragmentCaption}>Illustrative fragments. A broader perspective.</p>
    </section>

    <section className={styles.product} aria-labelledby="product-title">
      <header><p className={styles.label}>A more intentional experience</p><h2 id="product-title">Market cognition,<br />in one focused workspace.</h2><p>See the context. Examine the evidence. Return to the questions that matter.</p></header>
      <div className={styles.mosaic}>
        <figure className={styles.wideCard}><div><h3>A clearer working perspective.</h3><p>Your market view, with its context in reach.</p></div><Image src="/m5-assets/dashboard-preview.webp" alt="ELCEO dashboard preview with chart, market context and evidence panels. Values are demonstration data." width={960} height={600} sizes="(max-width: 760px) 90vw, 800px" /><figcaption>Actual interface preview · demonstration data, not live intelligence.</figcaption></figure>
        <article className={styles.tallCard}><span className={styles.mosaicGlyph} aria-hidden="true">◎</span><h3>Context worth<br />examining.</h3><p>Look beyond the movement. Keep the supporting evidence and its limits in view.</p><Link href="/demo">Explore the approach <span aria-hidden="true">↗</span></Link></article>
        <article className={styles.shortCard}><h3>Structure your<br />attention.</h3><p>A more focused way to consider the information around your markets.</p></article>
        <article className={styles.shortCard}><h3>A sharper<br />review routine.</h3><p>Keep your reasoning open to questions, contradictions and change.</p><Link href="/about">Our principles <span aria-hidden="true">↗</span></Link></article>
      </div>
    </section>

    <section className={styles.conversion} aria-labelledby="conversion-title">
      <div className={styles.blueField} aria-hidden="true" />
      <p className={styles.label}>Ready for a clearer perspective?</p>
      <h2 id="conversion-title"><Link href="/signup">Start exploring<br />ELCEO <span aria-hidden="true">↗</span></Link></h2>
      <div className={styles.trust}><div><h3>Make room for context.</h3><p>A market-intelligence and decision-support experience.</p></div><div><h3>Your decision stays yours.</h3><p>No execution. No custody. No guarantee of outcomes.</p></div><div><h3>Understand before entering.</h3><p><Link href="/legal/privacy">Privacy</Link> and <Link href="/legal/risk-disclosure">risk disclosure</Link>, always within reach.</p></div></div>
    </section>
  </main>;
}
