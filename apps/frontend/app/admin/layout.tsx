import type { ReactNode } from 'react';
// Structural boundary only; no session or authorization claim.
export default function Layout({ children }: { children: ReactNode }) { return children; }
