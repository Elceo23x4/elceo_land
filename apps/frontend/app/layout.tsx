import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/tokens.css';
export const metadata: Metadata = { title: 'ELCEO — M1 architecture review', robots: { index: false, follow: false } };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
