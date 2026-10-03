import type { Metadata } from 'next';
import { LegalDocument } from '../../../../components/public/LegalDocument';

export const metadata: Metadata = { title: 'Privacy — ELCEO' };

export default function PrivacyPage() {
  return <LegalDocument title="Privacy & data" introduction="A clear account of what this experience does—and what the full privacy notice still needs to explain."
    publicationNote="The complete, approved Privacy Policy is not yet published here. This page describes the current sign-in and cookie experience; it does not replace that policy."
    sections={[
      { id: 'sign-in', title: 'Signing in', children: <p>Account creation uses Google. ELCEO relies on its server-managed sign-in session to identify the account accessing protected features. A plan or role shown in the interface does not itself grant access.</p> },
      { id: 'cookies', title: 'Session and security cookies', children: <><p>Necessary cookies support sign-in and request security. This frontend does not enable optional analytics or advertising cookies.</p><p>You can revisit the cookie information from the footer. Cookie information is separate from Terms acceptance and risk acknowledgement.</p></> },
      { id: 'account-access', title: 'Your account information', children: <p>Personal workspace features use the signed-in account. Changing a visible account label or a page address cannot grant access to someone else’s information.</p> },
      { id: 'full-notice', title: 'The complete privacy notice', children: <p>The approved notice must identify the responsible operator and explain the applicable data processing, retention, recipients, rights and contact details. Those details are not inferred or promised by this summary.</p> },
    ]} />;
}
