'use client';

export default function DashboardError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main
      role="alert"
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background: '#030201',
        color: '#e6ddd3',
        fontFamily: "Inter, Geist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '30rem' }}>
        <p style={{ margin: '0 0 0.5rem', color: '#d97016', fontSize: '0.78rem', letterSpacing: '0.08em' }}>
          DASHBOARD STATE
        </p>
        <h1 style={{ margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 600 }}>Market context is unavailable.</h1>
        <p style={{ margin: '0 0 1rem', color: '#a99f95', lineHeight: 1.55 }}>
          The current dashboard view could not be resolved. No market values have been synthesized.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            border: '1px solid rgba(217,112,22,0.5)',
            background: 'transparent',
            color: '#e6ddd3',
            padding: '0.65rem 0.9rem',
            cursor: 'pointer',
          }}
        >
          Retry view
        </button>
      </div>
    </main>
  );
}
