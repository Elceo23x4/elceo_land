import type { ReactNode } from 'react';
import { editorialFont } from '../../components/brand/type';
import { PublicHeader, PublicFooter } from '../../components/public/PublicChrome';
import styles from '../../components/primitives/Editorial.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={`${styles.surface} ${editorialFont.className}`} data-elceo-ui="public"><PublicHeader />{children}<PublicFooter /></div>;
}
