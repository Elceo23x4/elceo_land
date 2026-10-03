import Link from 'next/link';
import {requireAuthenticatedSession} from '../../../../lib/auth/server';
import {OperationalChrome} from '../../../../components/app/OperationalChrome';
import {CreateDraft} from '../../../../features/journal/CreateDraft';
import styles from '../../../../components/app/Operational.module.css';
export const dynamic='force-dynamic';
export default async function Page(){const session=await requireAuthenticatedSession('/journal/new');return <OperationalChrome session={session}><header className={styles.title}><div><h1>Begin with the reasoning.</h1><p>Capture your market context before the decision becomes an outcome.</p></div></header><CreateDraft/><Link className={styles.button} href="/journal">Read your case record</Link></OperationalChrome>;}
