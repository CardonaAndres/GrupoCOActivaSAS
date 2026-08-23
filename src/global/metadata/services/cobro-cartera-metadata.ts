import type { Metadata } from 'next';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';

const path = '/nuestros-servicios/cobro-de-cartera';
const description =
  'Cobro, cobranza y recuperación de cartera vencida empresarial en toda Colombia. Gestión prejurídica y jurídica con abogados propios y pago por resultados.';

export const CobroCarteraMetadata: Metadata = {
  // 31 caracteres: con el template de marca queda en 52.
  title: 'Cobro y Recuperación de Cartera',
  description,

  alternates: { canonical: absoluteUrl(path) },

  openGraph: {
    title: 'Cobro y Recuperación de Cartera Empresarial en Colombia',
    description,
    type: 'website',
    locale: LOCALE,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cobro y Recuperación de Cartera Empresarial',
    description,
  },
};
