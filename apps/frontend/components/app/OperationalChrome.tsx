import type { ReactNode } from 'react';
import Link from 'next/link';
import { RouteLink } from '../public/RouteLink';
import { editorialFont } from '../brand/type';
import type { CanonicalSession } from '../../lib/auth/core';
import styles from './Operational.module.css';

export function OperationalChrome({session,children}:{session:CanonicalSession;children:ReactNode}) {
  return <div className={`${styles.surface} ${editorialFont.className}`} data-elceo-ui="operational">
    <header className={styles.bar}><Link href="/" className={styles.brand}>ELCEO</Link><nav aria-label="Application navigation"><RouteLink href="/dashboard">Dashboard</RouteLink><RouteLink href="/workspace">Workspace</RouteLink></nav><span className={styles.identity}>{session.user.name ?? session.user.email ?? 'Your account'}</span></header>
    <main id="main-content" className={styles.main}>{children}</main>
  </div>;
}
