import { getImageProps } from 'next/image';
import media from './scene-media.json';

/** Server-rendered picture: browser selects one art-directed source before hydration. */
export function SceneMedia({ asset, className, fill = false }: {
  asset: keyof typeof media; className?: string; fill?: boolean;
}) {
  const pair = media[asset];
  const common = { alt: '', className, sizes: asset === 'world' ? '(max-width: 760px) 115vw, 64vw' : '100vw',
    loading: asset === 'world' ? 'eager' as const : 'lazy' as const,
    fetchPriority: asset === 'world' ? 'high' as const : 'auto' as const };
  const props = (source: typeof pair.desktop) => getImageProps({ ...common, ...source,
    ...(fill ? { fill: true, width: undefined, height: undefined } : {}) }).props;
  const mobile = props(pair.mobile);
  const desktop = props(pair.desktop);
  return <picture data-scene-media={asset}>
    <source media="(max-width: 760px)" srcSet={mobile.srcSet} sizes={mobile.sizes} />
    <img {...desktop} alt="" />
  </picture>;
}
