import type { ReactNode } from 'react';
import { editorialFont } from '../../components/brand/type';
import { PublicHeader, PublicFooter } from '../../components/public/PublicChrome';
import styles from '../../components/primitives/Editorial.module.css';
// Presentation scope only; M3 continues to own all session/authorization decisions.
export default function Layout({ children }: { children: ReactNode }) {
  return <div className={`${styles.surface} ${editorialFont.className}`} data-elceo-ui="account-entry"><PublicHeader />{children}<PublicFooter /></div>;
}
