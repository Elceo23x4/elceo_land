import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Modal } from '../../components/primitives/Modal';
import { RouteLink } from '../../components/public/RouteLink';
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
  return <span className={`${styles.icon} ${styles[kind]}`} aria-hidden="true"></span>;
}

export function LandingNarrative() {
  return <main id="main-content" className={styles.landing} data-landing-root>
    <LandingMotion />
    <header className={styles.navigation}>
      <a className={styles.skip} href="#main-content">Skip to content</a>
      <RouteLink href="/" className={styles.brand} aria-label="ELCEO home"><span className={styles.brandCandles} aria-hidden="true"><i /><i /><i /></span>ELCEO<span className={styles.tagline}>Market intelligence<br />for a clearer tomorrow</span></RouteLink>
      <nav aria-label="Main"><RouteLink href="/">Home</RouteLink><Link href="/demo">Product</Link><Link href="/about">About</Link></nav>
      <Link href="/login" className={styles.signin}>Sign in <span aria-hidden="true">→</span></Link>
      <details className={styles.menu}><summary aria-label="Open navigation">Menu</summary><nav aria-label="Expanded main"><Link href="/pricing">Pricing</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/help">Help</Link></nav></details>
    </header>
    <section data-landing-scene="section-01-hero" className={styles.hero} aria-label="ELCEO market intelligence">
      <div className={styles.world} data-landing-world aria-hidden="true"><SceneMedia asset="network-globe" /></div>
      <div className={styles.identity}>
        <div className={styles.wordmark}><span className={styles.candles} aria-hidden="true"><i /><i /><i /><i /><i /></span><h1>ELCEO</h1></div>
        <p>Market intelligence<br />for a clearer tomorrow</p>
      </div>
      <p className={styles.heroNote}>A clearer view<br />for a more intentional<br />trading journey.</p>
      <a className={styles.scroll} href="#market-depth">Scroll <span aria-hidden="true">↓</span></a>
      <figure className={styles.film} aria-label="ELCEO introduction film — not yet available"><div className={styles.filmPoster} /><figcaption>Watch intro <span>Film in preparation</span></figcaption></figure>
    </section>

    <section data-landing-scene="section-02-depth" id="market-depth" className={styles.depth} aria-labelledby="depth-title">
      <div className={styles.depthTitle}><p className={styles.label}>Same market.<br />A deeper story.</p><h2 id="depth-title">Price is visible.<br />The real story<br /><em>runs deeper.</em></h2></div>
      <p className={styles.depthCopy}>Beneath every move is a web of narratives, pressures and shifting context. Most traders see the move. Fewer see what’s moving it.</p>
    </section>

    <section data-landing-scene="section-03-blind-spots" className={styles.aperture} aria-labelledby="blind-spots-title" data-landing-lens-scope>
      <SceneMedia asset="torn-paper-strip" fill className={styles.paper} />
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

    <section data-landing-scene="section-04-principles" className={styles.constellation} aria-labelledby="principles-title">
      <p className={`${styles.label} ${styles.approachLabel}`}>Our approach</p>
      <h2 id="principles-title">Our principles<br />in the age of market noise.</h2>
      <p className={styles.principlesCopy}>A clearer way to think. A more intentional way to trade. Built on principles that keep you focused on what actually matters.</p>
      <div className={styles.placards}>{principles.map((principle, i) => <article className={styles.placard} data-landing-placard key={principle.icon} style={{ '--tone': principle.color, '--order': i } as CSSProperties}>
        <PrincipleIcon kind={principle.icon} /><h3>{principle.title}</h3><p>{principle.copy}</p>
      </article>)}</div>
    </section>

    <section data-landing-scene="section-05-perspective" className={styles.information} aria-labelledby="information-title">
      <SceneMedia asset="world-environment" fill className={styles.horizon} />
      <div className={styles.informationCopy}><p className={styles.label}>From fragments to a clearer view</p><h2 id="information-title">Turn information<br />into insight.</h2><p>News, data, sentiment, structure — ELCEO helps you connect the dots so you can see what others miss.</p></div>
      <div className={styles.planes} data-landing-planes role="region" aria-label="Illustrative information fragments; scroll horizontally on smaller screens" tabIndex={0}>
        {fragments.map(([label, title], i) => <div className={styles.plane} data-landing-plane data-depth={i === 2 ? 60 : i % 2 ? -35 : -80} key={label} style={{ '--plane': i } as CSSProperties}><span>{label}</span><p>{title}</p></div>)}
      </div>
      <div className={styles.observer} aria-hidden="true"><SceneMedia asset="observer-foreground" /></div>
      <div className={styles.perspectiveControls}><span className={styles.thumb} aria-hidden="true" /><span className={styles.thumb} aria-hidden="true" /><p>A broader perspective<br />A calmer you</p><a href="#information-title" aria-label="Return to perspective heading">↑</a></div>
      <p className={styles.fragmentCaption}>Different signals.<br />A clearer perspective.</p>
    </section>

    <section data-landing-scene="section-06-workspace" className={styles.product} aria-labelledby="product-title">
      <header><p className={styles.label}>A more<br />intentional experience</p><h2 id="product-title">Market<br />cognition, in one<br />focused workspace.</h2><p>See what matters. Filter the noise. Focus on high-conviction areas with structured intelligence.</p><Link className={styles.explore} href="/demo">Explore preview <span aria-hidden="true">→</span></Link></header>
      <div className={styles.mosaic}>
        <figure className={styles.tablet}><Image src="/m5-assets/landing/workspace/tablet.webp" alt="Abstract ELCEO workspace object; illustrative, not live market data." width={627} height={627} sizes="(max-width:760px) 85vw, 22vw" /></figure>
        <article className={styles.insights}><h3>Structured<br />insights</h3><p>Built for<br />real conditions.</p><Image src="/m5-assets/landing/workspace/structured-insights.webp" alt="" width={627} height={627} sizes="20vw" /></article>
        <article className={styles.track}><h3>Track what<br />matters</h3><p>Your markets.<br />Your focus.</p><Image src="/m5-assets/landing/workspace/tracked-world.webp" alt="" width={627} height={627} sizes="20vw" /></article>
        <article className={styles.routine}><Image src="/m5-assets/landing/workspace/review-wheel.webp" alt="" width={627} height={627} sizes="(max-width:760px) 40vw, 20vw" /><div><h3>A sharper<br />trading routine</h3><p>Discipline today.<br />A clearer tomorrow.</p></div></article>
      </div>
    </section>

    <section data-landing-scene="section-07-entry" className={styles.conversion} aria-labelledby="conversion-title">
      <SceneMedia asset="planetary-field" fill className={styles.ctaField} />
      <p className={styles.label}>Ready for a clearer perspective?</p>
      <h2 id="conversion-title"><Link href="/signup"><svg className={styles.google} viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.36Z"/><path fill="#34a853" d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.82-1.76-5.61-4.12H3.04v2.59A10 10 0 0 0 12 22Z"/><path fill="#fbbc05" d="M6.39 13.92A6 6 0 0 1 6.08 12c0-.67.11-1.31.31-1.92V7.49H3.04A10 10 0 0 0 2 12c0 1.61.39 3.14 1.04 4.51l3.35-2.59Z"/><path fill="#ea4335" d="M12 5.96c1.47 0 2.79.51 3.82 1.51l2.87-2.87A9.59 9.59 0 0 0 12 2a10 10 0 0 0-8.96 5.49l3.35 2.59C7.18 7.72 9.4 5.96 12 5.96Z"/></svg>Continue with Google<span className={styles.entryArrow} aria-hidden="true">→</span></Link></h2>
      <div className={styles.trust}>
        <div><svg className={styles.trustIcon} viewBox="0 0 24 32" aria-hidden="true"><path d="m14 1-12 18h9l-1 12 13-19h-9Z"/></svg><div><h3>What you get</h3><p>A personalized workspace, market cognition, and practical insights.</p></div></div>
        <div><svg className={styles.trustIcon} viewBox="0 0 24 32" aria-hidden="true"><path d="M12 2 2 6v11c0 6 5 10 10 13 5-3 10-7 10-13V6L12 2Zm0 3v21c-5-3-7-6-7-9V8l7-3Z"/></svg><div><h3>Market intelligence only</h3><p>No trade execution. No custody of funds. Not financial advice.</p></div></div>
        <div><svg className={styles.trustIcon} viewBox="0 0 24 32" aria-hidden="true"><path d="M5 12V8a7 7 0 0 1 14 0v4h2v18H3V12h2Zm3 0h8V8a4 4 0 0 0-8 0v4Zm3 7v6h2v-6h-2Z"/></svg><div><h3>Your data, your control</h3><p>Read our <Link href="/legal/privacy">Privacy Policy</Link> to learn how we protect your information.</p></div></div>
      </div>
      <Link className={styles.learn} href="/about">Learn more <span aria-hidden="true">↓</span></Link>
    </section>
    <footer data-landing-scene="section-08-footer" className={styles.footer}>
      <div className={styles.footerRow}><RouteLink href="/" className={styles.brand}>ELCEO<span className={styles.tagline}>Market intelligence<br />for a clearer tomorrow</span></RouteLink>
        <nav aria-label="Footer"><Link href="/about">About</Link><Link href="/demo">Product</Link><Link href="/help">Help</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/risk-disclosure">Risk Disclosure</Link>
          <Modal label="Cookies" title="Your cookie choices"><p>This experience uses necessary session and security cookies when you sign in.</p><h3>Necessary only</h3><p>No optional analytics or advertising cookies are enabled by this frontend. There are no optional categories to accept and no choice to save here.</p><p>Cookie settings do not accept the Terms, acknowledge market risk or attest to your age.</p><Link href="/legal/privacy">Read the privacy notice</Link></Modal>
        </nav>
      </div>
      <div className={styles.footerBottom}><span>© {new Date().getUTCFullYear()} ELCEO. All rights reserved.</span><span>Not financial advice. Markets involve risk.</span></div>
    </footer>
  </main>;
}
