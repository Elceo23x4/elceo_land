import { RecoveryForm } from './RecoveryForm';
import editorial from '../../components/primitives/Editorial.module.css';
import styles from '../account-entry/AccountEntry.module.css';
export function RecoveryPage({ mode, token }: { mode: 'request' | 'confirm'; token?: string }) {
  return <main id="main-content" className={`${editorial.container} ${styles.entry}`}>
    <header className={styles.statement}><p className={editorial.kicker}>Account recovery</p><h1 className={editorial.display}>{mode === 'request' ? <>Find your way<br />back.</> : <>A fresh start.<br />Same account.</>}</h1><p className={editorial.lead}>Recover access to your existing credentials without changing your market context or creating another account.</p></header>
    <section className={styles.access} aria-label="Password recovery"><h2>{mode === 'request' ? 'Request a recovery link.' : 'Choose a new password.'}</h2><RecoveryForm mode={mode} token={token} /></section>
  </main>;
}
