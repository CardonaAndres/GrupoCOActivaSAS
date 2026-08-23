import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Servicio de cobro y recuperación de cartera empresarial';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Servicio principal',
    title: 'Cobro y recuperación de cartera',
    subtitle: 'Gestión prejurídica y jurídica · Pago por resultados',
  });
}
