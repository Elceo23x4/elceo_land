import type { Metadata } from 'next';
import DashboardParityClient from '../../../features/dashboard/DashboardParityClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dashboard — ELCEO',
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <DashboardParityClient />;
}
