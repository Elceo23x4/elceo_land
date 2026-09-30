import type { ReactNode } from 'react';
import Link from 'next/link';
import { RouteLink } from '../public/RouteLink';
import { editorialFont } from '../brand/type';
import type { CanonicalSession } from '../../lib/auth/core';
import styles from './Operational.module.css';

export function OperationalChrome({session,children}:{session:CanonicalSession;children:ReactNode}) {
  return <div className={`${styles.surface} ${editorialFont.className}`} data-elceo-ui="operational">
    <header className={styles.bar}><Link href="/" className={styles.brand}>ELCEO</Link><nav aria-label="Application navigation"><RouteLink href="/dashboard">Dashboard</RouteLink><RouteLink href="/workspace">Workspace</RouteLink><RouteLink href="/journal">Journal</RouteLink><RouteLink href="/analytics">Analytics</RouteLink><RouteLink href="/coaching">Coaching</RouteLink><RouteLink href="/notifications">Notifications</RouteLink></nav><Link href="/settings" className={styles.identity}>{session.user.name ?? session.user.email ?? 'Your account'}</Link></header>
    <main id="main-content" className={styles.main}>{children}</main>
  </div>;
}
