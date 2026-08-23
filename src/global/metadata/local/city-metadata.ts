import type { Metadata } from 'next';
import { cityLandingData } from '@/data/local-pages/city-landing.data';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';

/**
 * Metadatos de las páginas de ciudad, generados a partir de una única fuente
 * de datos. Evita que cada ciudad nueva reintroduzca divergencias de canónica
 * o de convención de titulación (puntos A3, A4, B1, B2 del diagnóstico).
 */
export const buildCityMetadata = (ciudad: string): Metadata => {
  const data = cityLandingData[ciudad];
  if (!data) return {};

  const path = `/cobro-de-cartera/${data.slug}`;
  const url = absoluteUrl(path);

  // 28-34 caracteres: con el template de marca queda dentro del rango 50-60.
  const title = `Cobro de Cartera en ${data.cityName}`;

  const description = data.hasOffice
    ? `Casa de cobranza en ${data.cityName} con oficina propia. Cobro, cobranza y recuperación de cartera vencida empresarial con abogados propios y pago por resultados.`
    : `Cobro, cobranza y recuperación de cartera vencida empresarial en ${data.cityName} y ${data.cityRegion}. Abogados propios, gestión personalizada y pago por resultados.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Cobro y Recuperación de Cartera en ${data.cityName}`,
      description,
      type: 'website',
      locale: LOCALE,
      url,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Cobro y Recuperación de Cartera en ${data.cityName}`,
      description,
    },
  };
};
