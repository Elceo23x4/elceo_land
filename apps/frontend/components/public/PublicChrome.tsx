import { RouteLink as Link } from './RouteLink';
import { Modal } from '../primitives/Modal';
import styles from './PublicChrome.module.css';

const navigation = [['Home','/'], ['Pricing','/pricing'], ['About','/about'], ['FAQ','/faq'], ['Help','/help']] as const;

export function PublicHeader() {
  return <header className={styles.header}>
    <a className={styles.skip} href="#main-content">Skip to content</a>
    <Link href="/" className={styles.brand} aria-label="ELCEO home">ELCEO<span>Market intelligence<br />for a clearer tomorrow</span></Link>
    <nav aria-label="Main" className={styles.desktop}>{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link href="/login" className={styles.signin}>Sign in <span aria-hidden="true">↗</span></Link>
    <details className={styles.mobile}><summary>Menu</summary><nav aria-label="Mobile main">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details>
  </header>;
}

export function PublicFooter() {
  return <footer className={styles.footer}>
    <div className={styles.footerTop}><Link href="/" className={styles.brand}>ELCEO</Link><p>A clearer way to think.<br />A more intentional way to trade.</p></div>
    <nav aria-label="Footer" className={styles.footerLinks}>
      {navigation.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      <Link href="/demo">Demo</Link><Link href="/dashboard">Open workspace</Link>
      <Link href="/legal/terms">Terms</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/risk-disclosure">Risk disclosure</Link>
      <Modal label="Cookies" title="Your cookie choices">
        <p>This experience uses necessary session and security cookies when you sign in. They support authentication and protect requests.</p>
        <h3>Necessary only</h3><p>No optional analytics or advertising cookies are enabled by this frontend. There are no optional categories to accept and no choice to save here.</p>
        <p>Cookie settings do not accept the Terms, acknowledge market risk or attest to your age.</p>
        <Link href="/legal/privacy">Read the privacy notice</Link>
      </Modal>
    </nav>
    <div className={styles.footerBottom}><span>© ELCEO. All rights reserved.</span><span>Market intelligence only. No execution. No custody. Markets involve risk.</span></div>
  </footer>;
}
