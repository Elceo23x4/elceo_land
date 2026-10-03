import { RecoveryPage } from '../../../features/recovery/RecoveryPage';
export const metadata = { title: 'Reset password — ELCEO', robots: { index: false, follow: false }, referrer: 'no-referrer' as const };
export const dynamic = 'force-dynamic';
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  return <RecoveryPage mode="confirm" token={typeof params.token === 'string' ? params.token : undefined} />;
}
