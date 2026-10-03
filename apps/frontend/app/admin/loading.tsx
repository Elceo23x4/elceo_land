import styles from '../../features/admin/Admin.module.css';
export default function Loading(){return <main className={`${styles.shell} ${styles.main}`} role="status" aria-busy="true"><h1>Reading administrative context…</h1><p>Waiting for the canonical session, permission and selected records. No healthy state has been assumed.</p></main>;}
