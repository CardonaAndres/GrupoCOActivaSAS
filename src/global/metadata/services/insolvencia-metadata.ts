import type { Metadata } from 'next';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';

const path = '/nuestros-servicios/insolvencia';
const description =
  'Asesoría en Ley de Insolvencia y Segunda Oportunidad en Colombia: suspenda embargos, renegocie sus deudas y proteja su patrimonio con abogados especializados.';

export const InsolvenciaMetadata: Metadata = {
  // 39 caracteres: con el template de marca queda en 60.
  title: 'Ley de Insolvencia y Segunda Oportunidad',
  description,

  alternates: { canonical: absoluteUrl(path) },

  openGraph: {
    title: 'Ley de Insolvencia y Segunda Oportunidad en Colombia',
    description,
    type: 'website',
    locale: LOCALE,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ley de Insolvencia y Segunda Oportunidad',
    description,
  },
};
