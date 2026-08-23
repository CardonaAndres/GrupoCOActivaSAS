import { CityLandingData } from '@/data/local-pages/city-landing.data';
import { SITE_URL, SITE_NAME, NAP } from '@/global/seo/site.config';

interface Props {
  data: CityLandingData;
}

export const CityLandingSchema = ({ data }: Props) => {
  const pageUrl = `${SITE_URL}/cobro-de-cartera/${data.slug}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cobro de Cartera',
        item: `${SITE_URL}/nuestros-servicios/cobro-de-cartera`,
      },
      { '@type': 'ListItem', position: 3, name: data.cityName, item: pageUrl },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  /**
   * Servicio local. Se declaran las cuatro variantes de intención que cubre la
   * página (cobro / cobranza / recuperación / casa de cobranza) para que los
   * motores asocien la entidad con cada una de ellas en esta ciudad.
   */
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `Cobro de Cartera Empresarial en ${data.cityName}`,
    // Se declaran también las formas exactas con las que se consulta el
    // servicio en el buscador, no solo la redacción editorial de la página.
    alternateName: [
      `Cobro de cartera ${data.cityName}`,
      `Cobranza de cartera en ${data.cityName}`,
      `Cobranza de cartera ${data.cityName}`,
      `Recuperación de cartera en ${data.cityName}`,
      `Recuperación de cartera ${data.cityName}`,
      `Recuperación de deudas en ${data.cityName}`,
      `Casa de cobranza en ${data.cityName}`,
      `Abogados de cobranza en ${data.cityName}`,
    ],
    description: data.heroDescription,
    serviceType: 'Recuperación de cartera vencida',
    category: 'Cobro de cartera',
    url: pageUrl,
    provider: data.schemaId
      ? { '@id': `${SITE_URL}/${data.schemaId}` }
      : { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: data.cityName },
      { '@type': 'AdministrativeArea', name: data.cityRegion },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Servicios de cobranza en ${data.cityName}`,
      itemListElement: data.serviceVariants.map((variant) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: variant.title,
          description: variant.description,
        },
      })),
    },
  };

  /**
   * Ficha de negocio local. Solo se declara cuando existe sede física, para no
   * enviar señales NAP de una dirección que no existe (coherencia local).
   */
  const localBusinessJsonLd = data.hasOffice
    ? {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': `${SITE_URL}/${data.schemaId}`,
        name: `${SITE_NAME} - Sede ${data.cityName}`,
        url: pageUrl,
        telephone: NAP.phoneSchema,
        email: NAP.email,
        priceRange: '$$',
        image: `${SITE_URL}/imgs/logos/logo-full.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.address,
          addressLocality: data.cityName,
          addressRegion: data.cityRegion,
          addressCountry: 'CO',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: data.geo.lat,
          longitude: data.geo.lng,
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      }
    : null;

  /** Bloque de respuesta directa, leído por asistentes de voz y motores de IA. */
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: data.heroTitle,
    description: data.heroDescription,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'es-CO',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
    },
  };

  const graphs = [
    webPageJsonLd,
    breadcrumbJsonLd,
    faqJsonLd,
    serviceJsonLd,
    ...(localBusinessJsonLd ? [localBusinessJsonLd] : []),
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
