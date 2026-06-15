import { CityLandingData } from '@/data/local-pages/city-landing.data';

const BASE_URL = 'https://www.grupocoactivasas.com';

interface Props {
  data: CityLandingData;
}

export const CityLandingSchema = ({ data }: Props) => {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cobro de Cartera',
        item: `${BASE_URL}/nuestros-servicios/cobro-de-cartera`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.cityName,
        item: `${BASE_URL}/cobro-de-cartera/${data.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Cobro de Cartera Empresarial en ${data.cityName}`,
    serviceType: 'Recuperación de cartera vencida',
    provider: {
      '@id': `${BASE_URL}/${data.schemaId}`,
    },
    areaServed: {
      '@type': 'City',
      name: data.cityName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
};