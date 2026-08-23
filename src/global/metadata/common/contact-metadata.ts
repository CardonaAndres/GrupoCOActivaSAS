import type { Metadata } from 'next';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';

const path = '/comunicate-con-grupo-coactiva';
const description =
  'Solicite una consulta gratuita sobre cobro de cartera, cobranza empresarial o insolvencia. Le respondemos en minutos desde Medellín y Bogotá.';

export const ContactMetadata: Metadata = {
  // 28 caracteres: con el template de marca queda en 49.
  title: 'Contacto y Asesoría Gratuita',
  description,

  alternates: { canonical: absoluteUrl(path) },

  openGraph: {
    title: 'Contacto | Consulta Gratuita de Cobro de Cartera',
    description,
    type: 'website',
    locale: LOCALE,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Grupo Coactiva SAS',
    description,
  },
};
