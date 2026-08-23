import { Metadata } from 'next';
import { absoluteUrl, SITE_NAME, LOCALE, SITE_URL } from '@/global/seo/site.config';

/**
 * Índice del blog.
 *
 * Punto A1 del diagnóstico: la canónica declaraba `/blog`, ruta que devuelve
 * 404. La ruta real es `/blog-grupo-coactiva`. Esta página es la vía de
 * descubrimiento de toda la biblioteca de artículos, por lo que la señal
 * incorrecta comprometía la indexación de los 23 artículos.
 */
const path = '/blog-grupo-coactiva';
const description =
  'Guías sobre cobro de cartera, cobranza empresarial, recuperación de deudas e insolvencia en Colombia, escritas por abogados especializados.';

export const BlogMetadata: Metadata = {
  // 39 caracteres: con el template de marca queda en 60.
  title: 'Blog de Cobro y Recuperación de Cartera',
  description,

  alternates: {
    canonical: absoluteUrl(path),
    types: {
      'application/rss+xml': `${SITE_URL}/feed.xml`,
    },
  },

  openGraph: {
    title: 'Blog de Cobro y Recuperación de Cartera',
    description,
    type: 'website',
    locale: LOCALE,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Cobro y Recuperación de Cartera',
    description,
  },
};
