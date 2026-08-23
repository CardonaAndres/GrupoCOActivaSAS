import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Blog de cobro y recuperación de cartera — Grupo Coactiva SAS';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Blog',
    title: 'Cobro y recuperación de cartera',
    subtitle: 'Guías jurídicas para empresas acreedoras en Colombia',
  });
}
