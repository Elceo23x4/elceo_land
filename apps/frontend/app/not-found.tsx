import Link from 'next/link';
import styles from '../components/app/Operational.module.css';
export default function NotFound(){return <main className={`${styles.surface} ${styles.main}`}><h1>This page is unavailable.</h1><p>The address does not identify an available page. No account or record ownership has been inferred.</p><Link className={styles.button} href="/workspace">Return to workspace</Link></main>;}
