import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Contacto con Grupo Coactiva SAS';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Contacto',
    title: 'Diagnóstico gratuito de su cartera',
    subtitle: 'Le respondemos en minutos · Medellín y Bogotá',
  });
}
