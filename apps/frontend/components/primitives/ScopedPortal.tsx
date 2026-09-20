"use client";
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
export function ScopedPortal() {
  const host = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return <div ref={host} data-testid="portal-host">{mounted && host.current ? createPortal(<span data-testid="portal-text">Scoped portal fixture</span>, host.current) : null}</div>;
}
