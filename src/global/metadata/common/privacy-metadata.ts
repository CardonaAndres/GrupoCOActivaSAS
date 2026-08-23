import type { Metadata } from 'next';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';

const path = '/politica-de-privacidad-coactiva';
const description =
  'Política de tratamiento de datos personales de Grupo Coactiva SAS conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 (habeas data en Colombia).';

export const PrivacyMetadata: Metadata = {
  // A2: la canónica declaraba la home en lugar de su propia URL.
  title: 'Política de Privacidad',
  description,

  alternates: { canonical: absoluteUrl(path) },

  openGraph: {
    title: 'Política de Privacidad y Tratamiento de Datos',
    description,
    type: 'website',
    locale: LOCALE,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
  },

  // Página legal sin valor de negocio en resultados: se indexa pero no se
  // permite fragmento extenso ni vista previa de imagen (punto I3).
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': 0,
      'max-image-preview': 'none',
    },
  },
};
