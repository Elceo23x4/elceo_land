import type { Metadata } from 'next';
import { AccountEntry, type EntrySearch } from '../../../features/account-entry/AccountEntry';
export const metadata: Metadata = { title: 'Sign in — ELCEO' };
export default function LoginPage({ searchParams }: { searchParams: EntrySearch }) {
  return <AccountEntry mode="login" searchParams={searchParams} />;
}
