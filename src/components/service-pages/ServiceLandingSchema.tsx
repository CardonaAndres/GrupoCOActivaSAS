import { ServiceLandingData } from '@/data/service-pages/service-landing.data';
import { SITE_URL } from '@/global/seo/site.config';

interface Props {
  data: ServiceLandingData;
}

export const ServiceLandingSchema = ({ data }: Props) => {
  const url = `${SITE_URL}/${data.slug}`;

  const graphs = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: data.h1,
      description: data.metaDescription,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'es-CO',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '[data-speakable]'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: data.seoTitle, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: data.h1,
      alternateName: data.alternateNames,
      description: data.metaDescription,
      serviceType: data.seoTitle,
      url,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Colombia' },
      audience: { '@type': 'BusinessAudience', name: 'Empresas acreedoras (B2B)' },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          description:
            'Honorarios entre el 5% y el 20% sobre el monto efectivamente recuperado. Sin anticipos ni costos fijos.',
          priceCurrency: 'COP',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  return (
    <>
      {graphs.map((graph, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
};
