import { Helmet } from 'react-helmet-async';

export const MetaTags = () => {
  const siteTitle = "Cobro Jurídico Colombia | Casa de Cobranza Profesional en Bogotá y Medellín";
  const siteDescription = "Empresa líder en cobro jurídico y prejurídico en Colombia. Servicios profesionales de recuperación de cartera vencida, gestión de cobranza y asesoría legal especializada en Bogotá, Medellín y toda Colombia. Abogados expertos en cobranza ejecutiva con más de 10 años de experiencia.";
  
  const keywords = [
    "cobro jurídico Colombia",
    "casa de cobranza Bogotá",
    "casa de cobranza Medellín",
    "casa de cobro medellin",
    "casa de cobro Bogotá",
    "cobro de cartera Medellín",
    "cobro de cartera bogota",
    "cobro de cartera vencida Medellín",
    "cobro de cartera vencida Bogotá",
    "cobro de cartera vencida",
    "cobro ejecutivo Medellín",
    "cobro ejecutivo Bogotá",
    "cobro ejecutivo",
    "cobro prejuridico Medellín",
    "cobro prejuridico Bogotá",
    "cobro prejuridico",
    "empresa de cobro Medellín",
    "empresa de cobro Bogotá",
    "empresa de cobro",
    "gestion de cobro medellin",
    "gestión de cobro Bogotá",
    "gestión de cobro",
    "recuperacion de cartera vencida",
    "recuperacion de cartera vencida medellin",
    "recuperacion de cartera vencida bogota",
    "abogados de cobro medellin",
    "abogados de cobro bogota",
    "abogados de cobro",
    "abogados de cobro de cartera",
    "abogados de cobro de cartera medellin",
    "cobro de cartera Colombia",
    "cobro de facturas en medellin",
    "cobro de facturas en bogota",
    "cobro de facturas",
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
    "cobranzas medellin",
    "cobranzas bogota",
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
    "agencias de cobro Medellin",
    "cobranza de cartera morosa",
    "cobro ejecutivo de facturas",
    "empresas de cobranza medellin",
    "empresas de cobranza bogota",
    "empresas cobranza Colombia",
    "empresas de cobro de cartera"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Cobro Jurídico Colombia",
    "description": siteDescription,
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.png`,
    "telephone": "+57-300-000-0000",
    "email": "info@cobrojuridico.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle Principal 123",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "postalCode": "110111",
        "addressCountry": "CO"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Carrera Principal 456",
        "addressLocality": "Medellín",
        "addressRegion": "Antioquia",
        "postalCode": "050001",
        "addressCountry": "CO"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Colombia"
      },
      {
        "@type": "City",
        "name": "Bogotá"
      },
      {
        "@type": "City",
        "name": "Medellín"
      }
    ],
    "serviceType": [
      "Cobro Jurídico",
      "Cobro Prejurídico",
      "Recuperación de Cartera",
      "Gestión de Cobranza",
      "Cobro Ejecutivo"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <Helmet>
      {/* Metadatos básicos - ORDEN IMPORTANTE PARA LIGHTHOUSE */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={window.location.href} />
      
      {/* Idioma y codificación */}
      <html lang="es" />
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="es-CO" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${window.location.origin}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Cobro Jurídico Colombia" />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={`${window.location.origin}/twitter-image.jpg`} />
      <meta property="twitter:creator" content="@cobrojuridico" />

      {/* SEO técnico */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Idioma y región */}
      <meta name="geo.region" content="CO" />
      <meta name="geo.placename" content="Colombia" />
      <meta name="geo.position" content="4.7110;-74.0721" />
      <meta name="ICBM" content="4.7110, -74.0721" />

      {/* Metadatos para móviles */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Cobro Jurídico Colombia" />

      {/* Favicon y iconos */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* DNS Prefetch para optimización - SIN Google Maps */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="//www.google-analytics.com" crossOrigin="" />
      <link rel="preconnect" href="//www.googletagmanager.com" crossOrigin="" />

      {/* Datos estructurados JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Metadatos adicionales para SEO local */}
      <meta name="geo.region" content="CO-DC" />
      <meta name="geo.region" content="CO-ANT" />
      <meta name="NUTS" content="CO11" />
      <meta name="NUTS" content="CO05" />

      {/* Autor y copyright */}
      <meta name="author" content="Cobro Jurídico Colombia" />
      <meta name="copyright" content="© 2025 Cobro Jurídico Colombia. Todos los derechos reservados." />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />

      {/* Seguridad - Solo Content-Type válido en meta */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

      {/* Metadatos específicos del negocio */}
      <meta name="business.hours" content="mo-fr 08:00-18:00" />
      <meta name="business.hours" content="sa 08:00-12:00" />
      <meta name="business.contact_data.street_address" content="Calle Principal 123, Bogotá" />
      <meta name="business.contact_data.locality" content="Bogotá" />
      <meta name="business.contact_data.region" content="Cundinamarca" />
      <meta name="business.contact_data.postal_code" content="110111" />
      <meta name="business.contact_data.country_name" content="Colombia" />
    </Helmet>
  );
};
