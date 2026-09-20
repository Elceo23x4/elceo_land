'use client';

import DashboardResponsiveCockpit from '../../../../src/dashboard/responsive/DashboardResponsiveCockpit';
import './dashboardParityBridge.css';

export const M4_DASHBOARD_PARITY_SENTINEL = 'elceo-m4-dashboard-parity-v1' as const;

/**
 * Framework-migration bridge only. The accepted responsive cockpit is imported
 * without its legacy mock RouteGate so M3 remains the authentication authority.
 * M4 deliberately preserves the cockpit's fixture intelligence while visual and
 * interaction parity are proven; server DTO binding must not fabricate fields
 * that are absent from the frozen dashboard projection.
 */
export default function DashboardParityClient() {
  return (
    <div className="elceo-dashboard-scope" data-m4-dashboard-parity="true">
      <DashboardResponsiveCockpit />
    </div>
  );
}
