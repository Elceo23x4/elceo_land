import styles from '../../../components/app/Operational.module.css';
export default function Loading(){return <main className={`${styles.surface} ${styles.main}`} role="status" aria-busy="true"><h1>Reading notification records…</h1><p>Waiting for the service. No values or empty state have been assumed.</p></main>;}
