import { serviceLandings } from '@/data/service-pages/service-landing.data';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

const data = serviceLandings['cobranza-de-cartera'];

export const alt = data.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: data.heroEyebrow,
    title: data.seoTitle,
    subtitle: 'Medellín · Bogotá · Pago por resultados',
  });
}
