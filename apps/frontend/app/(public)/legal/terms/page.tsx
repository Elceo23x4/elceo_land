import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalDocument } from '../../../../components/public/LegalDocument';

export const metadata: Metadata = { title: 'Terms — ELCEO' };

export default function TermsPage() {
  return <LegalDocument title="Terms of service" introduction="Understand the role of ELCEO before you create an account."
    publicationNote="The complete Terms of Service are awaiting approved publication. The information below explains the product; it is not a complete agreement and must not be treated as one."
    sections={[
      { id: 'purpose', title: 'The purpose of ELCEO', children: <p>ELCEO provides market intelligence and decision support. It is not a broker, an order-execution venue or a custody service. It does not hold customer funds or make trading decisions for you.</p> },
      { id: 'decisions', title: 'Your decisions and their risks', children: <><p>Market information provides context, not a promise of a particular result. ELCEO does not provide investment advice or guarantee profitable outcomes.</p><p>Read the <Link href="/legal/risk-disclosure">risk disclosure</Link> alongside this product explanation.</p></> },
      { id: 'acknowledgements', title: 'Separate acknowledgements', children: <p>Terms acceptance and risk acknowledgement are distinct steps in onboarding. Reading this page does not accept an agreement, acknowledge risk or attest to age eligibility.</p> },
      { id: 'full-document', title: 'The complete document', children: <p>The complete approved agreement must be available before a terms-acceptance flow can be considered ready for production. Contractual details are not supplied by this product summary.</p> },
    ]} />;
}
