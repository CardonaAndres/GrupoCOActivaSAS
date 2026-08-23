import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Política de privacidad de Grupo Coactiva SAS';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Legal',
    title: 'Política de privacidad',
    subtitle: 'Tratamiento de datos conforme a la Ley 1581 de 2012',
  });
}
