export default function DashboardLoading() {
  return (
    <main
      aria-live="polite"
      aria-busy="true"
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background: '#030201',
        color: '#e6ddd3',
        fontFamily: "Inter, Geist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <p style={{ margin: 0, fontSize: '0.82rem', letterSpacing: '0.04em' }}>
        Loading market context…
      </p>
    </main>
  );
}
