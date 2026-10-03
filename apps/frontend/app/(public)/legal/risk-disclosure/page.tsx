import type { Metadata } from 'next';
import { LegalDocument } from '../../../../components/public/LegalDocument';

export const metadata: Metadata = { title: 'Market intelligence & risk — ELCEO' };

export default function RiskDisclosurePage() {
  return <LegalDocument title="Market intelligence. Real uncertainty." introduction="A clearer view can support your process. It cannot remove the risks of the market."
    publicationNote="This product-risk explanation uses ELCEO’s approved product framing. Final legal wording and the policy version used for formal acknowledgement still require publication review. Reading this page does not record an acknowledgement."
    sections={[
      { id: 'decision-support', title: 'Decision support, not a trading instruction', children: <p>ELCEO helps you examine market context and evidence. Directional bias, confidence and other intelligence outputs are context to consider, not instructions to buy or sell and not personalised investment advice.</p> },
      { id: 'uncertainty', title: 'Confidence is not certainty', children: <p>Markets involve risk. Evidence can conflict, information can become stale, and an interpretation can change as conditions develop. A confidence assessment is not a guarantee that an outcome will occur.</p> },
      { id: 'limits', title: 'Pay attention to the limits', children: <p>Read available freshness, degraded-state and unavailable-state information alongside the analysis. Missing or unavailable information should not be treated as confirmation of an idea.</p> },
      { id: 'no-execution', title: 'No execution or custody', children: <p>ELCEO is not a broker or an order-execution venue. It does not hold customer funds. Recording a plan or action in a journal does not place a trade.</p> },
      { id: 'review', title: 'Keep the reasoning open to review', children: <p>Consider contradictory evidence, your assumptions and what remains unknown. Review the reasoning behind a decision as well as its outcome. ELCEO makes no promise of profit or successful trades.</p> },
    ]} />;
}
