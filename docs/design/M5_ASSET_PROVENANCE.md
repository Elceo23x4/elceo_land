# M5 asset provenance

## New presentation typography

Geist Sans variable, original unmodified `fonts/Geist/webfonts/Geist[wght].woff2` from [vercel/geist-font](https://github.com/vercel/geist-font/tree/10dc7658f13c38a474cde201bb09a4617267545b), commit `10dc7658f13c38a474cde201bb09a4617267545b`.

- Origin: licensed-sourced, official project repository.
- Licence: SIL Open Font License 1.1; original licence included at `apps/frontend/assets/fonts/OFL.txt`.
- Destination: `apps/frontend/assets/fonts/Geist-Variable.woff2`, 69,760 bytes.
- SHA-256: `2ffebe993e969069a9789d15164b7715d42491b5835516c5e3b935d5f81b05f1`.
- Weights: variable 100–900; current UI primarily 400/500/600. Normal style only; font synthesis disabled.
- Usage: new public/editorial UI, deliberately tight display tracking and restrained readable body scale; no dashboard usage.
- Loading: self-hosted `next/font/local`; one file preloaded by the public layout, `display: swap`, adjusted Arial fallback. No runtime font CDN requests.
- Fallback: Arial, sans-serif. Font class stays on new UI surface; neither root body nor dashboard receives it.

## Existing authorities

The original approved landing PNG and every dashboard source asset remain unchanged. The reference PNG is design authority, not a flattened substitute for the landing implementation. New landing raster/3D/video assets and their budgets/provenance remain pending; no provisional asset is represented as final.
