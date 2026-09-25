import type { Metadata } from 'next';
import { LandingNarrative } from '../../features/landing/LandingNarrative';
export const metadata: Metadata = { title: 'ELCEO — Market intelligence for a clearer tomorrow' };
export default function HomePage() { return <LandingNarrative />; }
