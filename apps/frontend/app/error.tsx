'use client';
import styles from '../components/app/Operational.module.css';
export default function ErrorBoundary(){return <main className={`${styles.surface} ${styles.main}`} role="alert"><h1>This view could not be confirmed.</h1><p>The application could not finish this view. If you submitted a change, its outcome may still be uncertain. No automatic retry has been started.</p><a className={styles.button} href="/workspace">Read current workspace</a><p><a href="/login">Return to sign in</a></p></main>;}
