import Link from 'next/link';
import {isCanonicalAdminRole,type CanonicalSession} from '../../lib/auth/core';
import {Modal} from '../primitives/Modal';
import styles from './Operational.module.css';
export function AccountAffordance({session}:{session:CanonicalSession}){
 return <Modal label="Account" title="Your account"><h3>{session.user.name??'Your account'}</h3><p>{session.user.email??'Email not supplied.'}</p><p>Your sign-in identity is supplied by the service. A plan label does not grant access to a feature.</p><p><Link className={styles.button} href="/settings/profile">Profile and identity</Link></p><p><Link className={styles.button} href="/settings/access">Read access and usage</Link></p><p><Link className={styles.button} href="/settings/billing">Read plan and billing</Link></p><p><Link className={styles.button} href="/settings/security">Security and sign out</Link></p>{isCanonicalAdminRole(session.user.role)&&<p><Link className={styles.button} href="/admin">Administrative control</Link></p>}</Modal>;
}
