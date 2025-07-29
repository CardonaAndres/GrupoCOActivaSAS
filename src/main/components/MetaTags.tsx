import { Helmet } from 'react-helmet-async';

export const MetaTags = () => {
  const siteTitle = "Abogados Especialistas en Cobranza de Cartera | Grupo Coactiva SAS - Medellín, Bogotá, Cali";
  const siteDescription = "Grupo Coactiva SAS - Líderes en cobranza jurídica y prejurídica en Colombia. Recuperamos su cartera vencida con estrategias efectivas. Abogados especializados en cobro ejecutivo en Medellín, Bogotá y Cali. Resultados garantizados.";
  
  // Keywords expandidas y optimizadas para SEO local
  const keywords = [
    // Términos principales
    "abogados cobranza Colombia",
    "empresa de cobranza",
    "cobro de cartera",
    "abogados de cobranza",
    "servicios de cobranza",
    "abogados cobranzas",
    "estrategias de cobranza",
    "recuperación de cartera",
    "empresas de cobros",
    "cobro jurídico en colombia",
    "empresas de cobranza en bogota",
    "empresas de cobranza en medellin",
    
    // SEO Local Bogotá
    "cobro jurídico Bogotá",
    "casa de cobranza Bogotá",
    "casa de cobro Bogotá",
    "cobro de cartera bogota",
    "cobro de cartera vencida Bogotá",
    "cobro ejecutivo Bogotá",
    "cobro prejuridico Bogotá",
    "empresa de cobro Bogotá",
    "gestión de cobro Bogotá",
    "recuperacion de cartera vencida bogota",
    "abogados de cobro bogota",
    "cobro de facturas en bogota",
    "cobranzas bogota",
    "empresas de cobranza bogota",
    "agencias de cobro Bogotá",
    "cobranza jurídica Bogotá",
    "abogados especialistas cobranza Bogotá",
    "recuperación cartera morosa Bogotá",
    "gestión cobranza empresarial Bogotá",
    "cobro ejecutivo facturas Bogotá",
    
    // SEO Local Medellín
    "cobro jurídico Medellín",
    "casa de cobranza Medellín",
    "casa de cobro medellin",
    "cobro de cartera Medellín",
    "cobro de cartera vencida Medellín",
    "cobro ejecutivo Medellín",
    "cobro prejuridico Medellín",
    "empresa de cobro Medellín",
    "gestion de cobro medellin",
    "recuperacion de cartera vencida medellin",
    "abogados de cobro medellin",
    "abogados de cobro de cartera medellin",
    "cobro de facturas en medellin",
    "cobranzas medellin",
    "empresas de cobranza medellin",
    "agencias de cobro Medellin",
    "cobranza jurídica Medellín",
    "abogados especialistas cobranza Medellín",
    "recuperación cartera morosa Medellín",
    "gestión cobranza empresarial Medellín",
    "cobro ejecutivo facturas Medellín",
    
    // SEO Local Cali
    "cobro jurídico Cali",
    "casa de cobranza Cali",
    "casa de cobro Cali",
    "cobro de cartera Cali",
    "cobro de cartera vencida Cali",
    "cobro ejecutivo Cali",
    "cobro prejuridico Cali",
    "empresa de cobro Cali",
    "gestión de cobro Cali",
    "recuperacion de cartera vencida Cali",
    "abogados de cobro Cali",
    "cobro de facturas en Cali",
    "cobranzas Cali",
    "empresas de cobranza Cali",
    "agencias de cobro Cali",
    "cobranza jurídica Cali",
    "abogados especialistas cobranza Cali",
    
    // Términos específicos del sector
    "cobro de cartera Colombia",
    "cobro de cartera vencida",
    "cobro ejecutivo",
    "cobro prejuridico",
    "cobro juridico de cartera",
    "cobro juridico en Colombia",
    "cobro juridico y prejuridico",
    "cobro prejuridico en Colombia",
    "empresa de cobro de cartera",
    "gestión de cobro de cartera",
    "servicio de cobro de facturas",
    "agencia de cobro",
    "casas de cobranza",
    "casas de cobro",
    "cobranza de cartera",
    "cobranza cartera vencida",
    "cobrar cartera vencida",
    "proceso prejuridico cobro de cartera",
    "cobros jurídicos",
    "casas de cobranza en Colombia",
    "cobro cartera",
    "abogados especializados en cobranza",
    "cobro juridico cartera",
    "agencia de cobranza",
    "gestión de cobranza",
    "casa de cobranza en Colombia",
    "empresas cobranza",
    "gestión de cobranza efectiva",
    "empresas de recuperación de cartera",
    "cobranza de cartera morosa",
    "cobro ejecutivo de facturas",
    "empresas cobranza Colombia",
    "empresas de cobro de cartera",
    
    // Términos complementarios
    "deudores morosos Colombia",
    "recuperación judicial de cartera",
    "cobranza extrajudicial",
    "negociación de deudas",
    "asesoría jurídica cobros",
    "procesos ejecutivos cobranza",
    "títulos ejecutivos",
    "cobro persuasivo",
    "cobro coercitivo",
    "gestión integral de cartera",
    "outsourcing cobranza",
    "tercerización cobros",
    "call center cobranza",
    "notificaciones judiciales",
    "embargos y secuestros",
    "remates judiciales",
    "concordatos y acuerdos",
    "reestructuración de deudas",
    "reportes centrales de riesgo",
    "datacredito",
    "cifin",
    "scoring crediticio",
    "bureau de crédito",
    "cobranza hospitalaria",
    "cobranza bancaria",
    "cobranza comercial",
    "cobranza de servicios públicos",
    "cobranza de seguros",
    "cobranza inmobiliaria",
    "cobranza vehicular",
    "factoring",
    "confirming",
    "descuento de cartera"
  ];

  // Datos estructurados más completos
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Grupo Coactiva SAS - Abogados Especialistas en Cobranza",
    "alternateName": "Cobro Jurídico Colombia",
    "description": siteDescription,
    "url": typeof window !== 'undefined' ? window.location.origin : 'https://grupocoactiva.com',
    "logo": {
      "@type": "ImageObject",
      "url": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : 'https://grupocoactiva.com/logo.png',
      "width": 200,
      "height": 60
    },
    "image": typeof window !== 'undefined' ? `${window.location.origin}/og-image.jpg` : 'https://grupocoactiva.com/og-image.jpg',
    "telephone": ["+57-301-234-5678", "+57-604-567-8901", "+57-602-345-6789"],
    "email": "info@grupocoactiva.com",
    "sameAs": [
      "https://www.facebook.com/grupocoactiva",
      "https://www.linkedin.com/company/grupocoactiva",
      "https://www.instagram.com/grupocoactiva",
      "https://twitter.com/grupocoactiva"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Carrera 13 # 85-32, Oficina 501",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "postalCode": "110221",
        "addressCountry": "CO",
        "telephone": "+57-301-234-5678"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Carrera 43A # 1-18, Torre Empresarial, Piso 12",
        "addressLocality": "Medellín",
        "addressRegion": "Antioquia",
        "postalCode": "050021",
        "addressCountry": "CO",
        "telephone": "+57-604-567-8901"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Avenida 6N # 25-15, Centro Empresarial",
        "addressLocality": "Cali",
        "addressRegion": "Valle del Cauca",
        "postalCode": "760044",
        "addressCountry": "CO",
        "telephone": "+57-602-345-6789"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Colombia"
      },
      {
        "@type": "State",
        "name": "Cundinamarca"
      },
      {
        "@type": "State",
        "name": "Antioquia"
      },
      {
        "@type": "State",
        "name": "Valle del Cauca"
      },
      {
        "@type": "City",
        "name": "Bogotá"
      },
      {
        "@type": "City",
        "name": "Medellín"
      },
      {
        "@type": "City",
        "name": "Cali"
      },
      {
        "@type": "City",
        "name": "Barranquilla"
      },
      {
        "@type": "City",
        "name": "Cartagena"
      },
      {
        "@type": "City",
        "name": "Bucaramanga"
      }
    ],
    "serviceType": [
      "Cobro Jurídico",
      "Cobro Prejurídico",
      "Recuperación de Cartera Vencida",
      "Gestión Integral de Cobranza",
      "Cobro Ejecutivo",
      "Procesos Ejecutivos",
      "Asesoría Jurídica en Cobros",
      "Negociación de Deudas",
      "Cobranza Extrajudicial",
      "Gestión de Cartera Morosa"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "COP",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "María González"
        },
        "reviewBody": "Excelente servicio de cobranza, recuperamos el 85% de nuestra cartera vencida."
      }
    ],
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-13:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Cobranza",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cobro Jurídico"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cobro Prejurídico"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Juan Carlos Mendoza",
      "jobTitle": "Abogado Especialista en Derecho Comercial"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "45"
    },
    "yearEstablished": "2015",
    "legalName": "Grupo Coactiva SAS",
    "taxID": "900123456-1",
    "vatID": "900123456-1",
    "slogan": "Recuperamos lo que es suyo"
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": typeof window !== 'undefined' ? window.location.origin : 'https://grupocoactiva.com'
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios de Cobranza",
        "item": typeof window !== 'undefined' ? `${window.location.origin}/servicios` : 'https://grupocoactiva.com/servicios'
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el cobro jurídico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El cobro jurídico es un proceso legal mediante el cual se recuperan deudas a través de procedimientos judiciales, utilizando títulos ejecutivos para garantizar el pago de obligaciones vencidas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tarda el proceso de cobranza?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo varía según el tipo de proceso. El cobro prejurídico puede tomar de 30 a 90 días, mientras que el cobro jurídico puede extenderse de 6 meses a 2 años dependiendo de la complejidad del caso."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué ciudades prestan servicios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestamos servicios de cobranza en las principales ciudades de Colombia: Bogotá, Medellín, Cali, Barranquilla, Cartagena y Bucaramanga, con cobertura nacional."
        }
      }
    ]
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://grupocoactiva.com';
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://grupocoactiva.com';

  return (
    <Helmet htmlAttributes={{ lang: 'es-CO' }}>
      {/* Metadatos básicos optimizados */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Idioma y codificación */}
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="es-CO" />
      <html lang="es-CO" />

      {/* Open Graph optimizado */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${currentOrigin}/og-image.jpg`} />
      <meta property="og:image:alt" content="Grupo Coactiva SAS - Abogados Especialistas en Cobranza" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content="Grupo Coactiva SAS" />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:locale:alternate" content="es_ES" />

      {/* Twitter Cards optimizado */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@grupocoactiva" />
      <meta name="twitter:creator" content="@grupocoactiva" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${currentOrigin}/twitter-image.jpg`} />
      <meta name="twitter:image:alt" content="Grupo Coactiva SAS - Cobranza Jurídica" />

      {/* SEO técnico avanzado */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="duckduckbot" content="index, follow" />

      {/* Geolocalización y región expandida */}
      <meta name="geo.region" content="CO" />
      <meta name="geo.country" content="Colombia" />
      <meta name="geo.placename" content="Colombia" />
      <meta name="geo.position" content="4.7110;-74.0721" />
      <meta name="ICBM" content="4.7110, -74.0721" />
      <meta name="geo.region" content="CO-DC" />
      <meta name="geo.region" content="CO-ANT" />
      <meta name="geo.region" content="CO-VAC" />
      <meta name="NUTS" content="CO11" />
      <meta name="NUTS" content="CO05" />
      <meta name="NUTS" content="CO76" />

      {/* Datos de ubicaciones específicas */}
      <meta name="business.location" content="Bogotá, Colombia" />
      <meta name="business.location" content="Medellín, Colombia" />
      <meta name="business.location" content="Cali, Colombia" />
      <meta name="business.coordinates" content="4.7110,-74.0721" />
      <meta name="business.coordinates" content="6.2442,-75.5812" />
      <meta name="business.coordinates" content="3.4516,-76.5320" />

      {/* Metadatos móviles optimizados */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-navbutton-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Grupo Coactiva" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Grupo Coactiva SAS" />

      {/* Favicons optimizados */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

      {/* Preconnect y DNS prefetch optimizados */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      <link rel="dns-prefetch" href="//apis.google.com" />
      <link rel="dns-prefetch" href="//facebook.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//instagram.com" />
      <link rel="dns-prefetch" href="//twitter.com" />

      {/* Metadatos de negocio expandidos */}
      <meta name="business.hours" content="mo-fr 08:00-18:00" />
      <meta name="business.hours" content="sa 08:00-13:00" />
      <meta name="business.hours" content="su closed" />
      <meta name="business.contact_data.street_address" content="Carrera 13 # 85-32, Oficina 501, Bogotá" />
      <meta name="business.contact_data.locality" content="Bogotá" />
      <meta name="business.contact_data.region" content="Cundinamarca" />
      <meta name="business.contact_data.postal_code" content="110221" />
      <meta name="business.contact_data.country_name" content="Colombia" />
      <meta name="business.contact_data.phone_number" content="+57-301-234-5678" />
      <meta name="business.contact_data.email" content="info@grupocoactiva.com" />
      <meta name="business.contact_data.website" content={currentOrigin} />

      {/* Información adicional de la empresa */}
      <meta name="author" content="Grupo Coactiva SAS" />
      <meta name="copyright" content="© 2025 Grupo Coactiva SAS. Todos los derechos reservados." />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 day" />
      <meta name="expires" content="never" />
      <meta name="language" content="Spanish" />
      <meta name="doc-type" content="Web Page" />
      <meta name="doc-rights" content="Copywritten Work" />
      <meta name="doc-class" content="Living Document" />
      <meta name="classification" content="Business" />
      <meta name="category" content="Legal Services" />
      <meta name="coverage" content="Worldwide" />
      <meta name="identifier-URL" content={currentUrl} />
      <meta name="reply-to" content="info@grupocoactiva.com" />
      <meta name="owner" content="Grupo Coactiva SAS" />
      <meta name="directory" content="submission" />

      {/* Seguridad */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* Industria y servicios específicos */}
      <meta name="industry" content="Legal Services" />
      <meta name="industry" content="Debt Collection" />
      <meta name="industry" content="Financial Services" />
      <meta name="service" content="Debt Recovery" />
      <meta name="service" content="Legal Consultation" />
      <meta name="service" content="Commercial Law" />
      <meta name="specialty" content="Debt Collection" />
      <meta name="specialty" content="Commercial Litigation" />
      <meta name="specialty" content="Asset Recovery" />

      {/* URLs alternativas y idiomas */}
      <link rel="alternate" hrefLang="es-co" href={currentUrl} />
      <link rel="alternate" hrefLang="es-es" href={currentUrl} />
      <link rel="alternate" hrefLang="es" href={currentUrl} />

      {/* Datos estructurados múltiples */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Metadatos específicos para motores de búsqueda locales */}
      <meta name="city" content="Bogotá" />
      <meta name="city" content="Medellín" />
      <meta name="city" content="Cali" />
      <meta name="state" content="Cundinamarca" />
      <meta name="state" content="Antioquia" />
      <meta name="state" content="Valle del Cauca" />
      <meta name="country" content="Colombia" />
      <meta name="postal-code" content="110221" />
      <meta name="postal-code" content="050021" />
      <meta name="postal-code" content="760044" />

      {/* Metadatos de redes sociales adicionales */}
      <meta property="fb:app_id" content="123456789012345" />
      <meta property="fb:admins" content="grupocoactiva" />
      <meta name="pinterest" content="nopin" />
      <meta name="linkedin:owner" content="grupo-coactiva-sas" />

      {/* Rich snippets adicionales */}
      <meta name="price" content="Consulta gratuita" />
      <meta name="availability" content="InStock" />
      <meta name="condition" content="New" />
      <meta name="brand" content="Grupo Coactiva SAS" />
      <meta name="manufacturer" content="Grupo Coactiva SAS" />

      {/* Metadatos para análisis y tracking */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code" />

      {/* Información de contacto estructurada */}
      <meta itemProp="name" content="Grupo Coactiva SAS" />
      <meta itemProp="description" content={siteDescription} />
      <meta itemProp="image" content={`${currentOrigin}/logo.png`} />
      <meta itemProp="telephone" content="+57-301-234-5678" />
      <meta itemProp="email" content="info@grupocoactiva.com" />
      <meta itemProp="url" content={currentOrigin} />
    </Helmet>
  );
};