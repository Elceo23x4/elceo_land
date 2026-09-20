import { mediationImplemented } from '../../lib/api/server';
import { ScopedPortal } from '../../components/primitives/ScopedPortal';
import Arrow from '../../../../src/assets/source/dashboard/arrows/elceo-svg-14-arrow-up.svg';
import { M2BrowserClientProof } from './M2BrowserClientProof';
import styles from './proof.module.css';

export default function ArchitectureProof() {
  return (
    <main>
      <h1>M1 architecture verification</h1>
      <p>Engineering fixture only. No product interface is implemented.</p>
      <output data-testid="server-boundary">Mediation: {String(mediationImplemented)}</output>
      <M2BrowserClientProof />
      <div className={styles.publicFixture} data-testid="public-fixture">Public CSS isolation fixture</div>
      <div className={`elceo-dashboard-scope ${styles.dashboardFixture}`} data-testid="dashboard-fixture">
        <div className="dashboard-precision-viewport"><ScopedPortal /></div>
      </div>
      <Arrow aria-label="SVGR source import proof" className={styles.svgProof} />
      <img src="/m1-assets/arrow-up.svg" alt="Source SVG URL proof" width="18" height="18" />
    </main>
  );
}
