import { MetadataRoute } from 'next';
import { SITE_NAME } from '@/global/seo/site.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Cobro y recuperación de cartera`,
    short_name: 'Grupo Coactiva',
    description:
      'Casa de cobranza y abogados especialistas en cobro, cobranza y recuperación de cartera empresarial en Medellín, Bogotá y toda Colombia.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#164e63',
    lang: 'es-CO',
    categories: ['business', 'finance', 'legal'],
    icons: [
      {
        src: '/imgs/logos/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/imgs/logos/logo-full.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
