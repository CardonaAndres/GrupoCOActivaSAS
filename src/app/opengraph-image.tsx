import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt =
  'Grupo Coactiva SAS — Cobro y recuperación de cartera empresarial en Colombia';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'Casa de cobranza · Medellín y Bogotá',
    title: 'Cobro y recuperación de cartera empresarial',
    subtitle: 'Abogados propios · Pago por resultados · Cobertura nacional',
  });
}
