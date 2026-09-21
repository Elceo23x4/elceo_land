import type { Metadata } from 'next';
import { AccountEntry, type EntrySearch } from '../../../features/account-entry/AccountEntry';
export const metadata: Metadata = { title: 'Start exploring — ELCEO' };
export default function SignupPage({ searchParams }: { searchParams: EntrySearch }) {
  return <AccountEntry mode="signup" searchParams={searchParams} />;
}
