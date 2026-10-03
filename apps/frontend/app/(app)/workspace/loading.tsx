import styles from '../../../components/app/Operational.module.css';
export default function Loading() { return <main className={`${styles.surface} ${styles.main}`} role="status" aria-busy="true"><h1>Reading your workspace…</h1><p>Waiting for the current server snapshot. No values have been assumed.</p></main>; }
