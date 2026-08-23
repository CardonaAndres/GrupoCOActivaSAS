import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Equipo de Grupo Coactiva SAS';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Quiénes somos',
    title: 'Casa de cobranza con abogados propios',
    subtitle: '18 ejecutivos y 7 abogados · Medellín y Bogotá',
  });
}
