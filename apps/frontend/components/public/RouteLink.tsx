'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Central current-destination semantics; presentation only, no access decisions. */
export function RouteLink({ href, children, className, 'aria-label': label }: {
  href: string; children: ReactNode; className?: string; 'aria-label'?: string;
}) {
  const current = usePathname();
  return current === href
    ? <span className={className} aria-current="page" aria-label={label}>{children}</span>
    : <Link href={href} className={className} aria-label={label}>{children}</Link>;
}
