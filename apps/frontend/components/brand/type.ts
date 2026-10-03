import localFont from 'next/font/local';

// Self-hosted OFL font; attached only to new UI surfaces, never the cockpit.
export const editorialFont = localFont({
  src: '../../assets/fonts/Geist-Variable.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});
