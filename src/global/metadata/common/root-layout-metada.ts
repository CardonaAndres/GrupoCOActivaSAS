import type { Metadata, Viewport } from "next";
import { SITE_URL, SITE_NAME, LOCALE, NAP, absoluteUrl } from "@/global/seo/site.config";

/**
 * Metadatos raíz.
 *
 * Cambios frente a la versión anterior (diagnóstico SEO, bloque B):
 *  - B1: el template ya no duplica la marca; las páginas declaran títulos cortos
 *        sin marca y el template la añade una sola vez.
 *  - B2: título por defecto dentro del rango visible (50-60 caracteres).
 *  - B10/B12: theme-color y manifest.
 *  - B13: se retira `meta keywords` (en desuso desde 2009).
 *  - H6: se retiran `geo.region` / `geo.position` (en desuso).
 */

export const RootLayoutViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#164e63" },
    { media: "(prefers-color-scheme: dark)", color: "#083344" },
  ],
  colorScheme: "light",
};

export const RootLayoutMetada: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    // 51 caracteres
    default: "Cobro de Cartera y Cobranza Empresarial en Colombia",
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Casa de cobranza y abogados especialistas en cobro y recuperación de cartera vencida en Medellín, Bogotá y toda Colombia. Pago por resultados.",

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },

  openGraph: {
    type: "website",
    locale: LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Cobro y Recuperación de Cartera Empresarial en Colombia",
    description:
      "Recuperación de cartera vencida para empresas en Medellín, Bogotá y toda Colombia. Gestión prejurídica y jurídica con equipo propio de abogados.",
  },

  twitter: {
    card: "summary_large_image",
    site: "@grupocoactiva",
    creator: "@grupocoactiva",
    title: "Cobro y Recuperación de Cartera Empresarial en Colombia",
    description:
      "Casa de cobranza B2B con sedes en Medellín y Bogotá. Recuperamos su cartera vencida con modelo de pago por resultados.",
  },

  // Los iconos (favicon.ico, icon.png, apple-icon.png) se resuelven por
  // convención de archivos en src/app, por lo que no se declaran aquí.

  verification: {
    // google: "codigo-de-verificacion", // Añadir tras dar de alta Google Search Console
  },

  other: {
    "contact:phone_number": NAP.phone,
    "contact:email": NAP.email,
  },
};

/**
 * Grafo de identidad corporativa (schema.org).
 *
 * Bloque C del diagnóstico: se sirve como <script type="application/ld+json">
 * nativo desde el HTML del servidor, de modo que también lo lean los
 * rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended),
 * que no ejecutan JavaScript.
 */
export const schemaOrgJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-CO",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog-grupo-coactiva?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["LegalService", "ProfessionalService", "Organization"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Grupo Coactiva SAS",
      alternateName: [
        "Coactiva",
        "Casa de cobranza Grupo Coactiva",
        "Grupo Coactiva cobro de cartera",
      ],
      description:
        "Casa de cobranza y firma de abogados especializada en cobro de cartera, cobranza de cartera y recuperación de deudas empresariales en Medellín, Bogotá y toda Colombia.",
      slogan: "Recuperamos su cartera vencida. Usted solo paga por resultados.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/imgs/logos/logo-full.png`,
        contentUrl: `${SITE_URL}/imgs/logos/logo-full.png`,
        caption: SITE_NAME,
      },
      image: `${SITE_URL}/opengraph-image`,
      telephone: NAP.phoneSchema,
      email: NAP.email,
      priceRange: "$$",
      currenciesAccepted: "COP",
      knowsLanguage: ["es-CO"],
      knowsAbout: [
        "Cobro de cartera",
        "Cobranza de cartera",
        "Recuperación de cartera",
        "Recuperación de deudas",
        "Cobro jurídico",
        "Cobro prejurídico",
        "Proceso ejecutivo",
        "Ley 1116 de insolvencia empresarial",
      ],
      areaServed: [
        { "@type": "Country", name: "Colombia" },
        { "@type": "City", name: "Medellín" },
        { "@type": "City", name: "Bogotá" },
        { "@type": "City", name: "Cali" },
        { "@type": "City", name: "Barranquilla" },
        { "@type": "City", name: "Bucaramanga" },
      ],
      sameAs: [
        "https://www.instagram.com/grupocoactiva",
        // Añadir aquí LinkedIn corporativo, Facebook y ficha de Google Business Profile
      ],
      founder: { "@id": `${SITE_URL}/#esteban-restrepo` },
      employee: { "@id": `${SITE_URL}/#esteban-restrepo` },
      department: [
        { "@id": `${SITE_URL}/#sede-medellin` },
        { "@id": `${SITE_URL}/#sede-bogota` },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: NAP.phoneSchema,
          email: NAP.email,
          contactType: "sales",
          areaServed: "CO",
          availableLanguage: ["es"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de cobro y recuperación de cartera",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cobro Jurídico de Cartera",
              description:
                "Recuperación judicial de cartera vencida mediante proceso ejecutivo y medidas cautelares.",
              serviceType: "Cobro jurídico",
              areaServed: { "@type": "Country", name: "Colombia" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cobro Prejurídico",
              description:
                "Gestión extrajudicial de cobranza de cartera con negociación y acuerdos de pago.",
              serviceType: "Cobro prejurídico",
              areaServed: { "@type": "Country", name: "Colombia" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Recuperación de Cartera Vencida",
              description:
                "Recuperación de deudas empresariales B2B con estrategias personalizadas y pago por resultados.",
              serviceType: "Recuperación de cartera",
              areaServed: { "@type": "Country", name: "Colombia" },
            },
          },
        ],
      },
    },

    // ── Sede Medellín ──
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#sede-medellin`,
      name: "Grupo Coactiva SAS - Sede Medellín",
      description:
        "Sede principal de Grupo Coactiva SAS en Laureles, Medellín. Cobro de cartera y recuperación de deudas empresariales en Medellín y Antioquia.",
      branchOf: { "@id": `${SITE_URL}/#organization` },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      url: absoluteUrl("/cobro-de-cartera/medellin"),
      telephone: NAP.phoneSchema,
      email: NAP.email,
      priceRange: "$$",
      image: `${SITE_URL}/imgs/logos/logo-full.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.medellin.street,
        addressLocality: NAP.medellin.locality,
        addressRegion: NAP.medellin.region,
        postalCode: NAP.medellin.postalCode,
        addressCountry: NAP.medellin.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: NAP.medellin.lat,
        longitude: NAP.medellin.lng,
      },
      areaServed: [
        { "@type": "City", name: "Medellín" },
        { "@type": "AdministrativeArea", name: "Antioquia" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
    },

    // ── Sede Bogotá ──
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#sede-bogota`,
      name: "Grupo Coactiva SAS - Sede Bogotá",
      description:
        "Sede de Grupo Coactiva SAS en la Zona Rosa de Bogotá. Cobro de cartera y recuperación de deudas empresariales en Bogotá y Cundinamarca.",
      branchOf: { "@id": `${SITE_URL}/#organization` },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      url: absoluteUrl("/cobro-de-cartera/bogota"),
      telephone: NAP.phoneSchema,
      email: NAP.email,
      priceRange: "$$",
      image: `${SITE_URL}/imgs/logos/logo-full.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.bogota.street,
        addressLocality: NAP.bogota.locality,
        addressRegion: NAP.bogota.region,
        postalCode: NAP.bogota.postalCode,
        addressCountry: NAP.bogota.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: NAP.bogota.lat,
        longitude: NAP.bogota.lng,
      },
      areaServed: [
        { "@type": "City", name: "Bogotá" },
        { "@type": "AdministrativeArea", name: "Cundinamarca" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
    },

    // ── Persona: fundador (E-E-A-T) ──
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#esteban-restrepo`,
      name: "Esteban Restrepo",
      jobTitle: "Socio-Fundador y Director Jurídico",
      description:
        "Abogado y director jurídico de Grupo Coactiva SAS, especializado en cobro de cartera empresarial, proceso ejecutivo e insolvencia en Colombia.",
      image: `${SITE_URL}/imgs/people/esteban-restrepo.webp`,
      url: absoluteUrl("/quienes-somos-grupo-coactiva"),
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: [
        "Cobro de cartera",
        "Proceso ejecutivo",
        "Ley 1116 de insolvencia empresarial",
        "Recuperación de deudas",
      ],
      sameAs: [
        "https://www.linkedin.com/in/estebanrestrepoo",
        "https://www.instagram.com/estebanrlegal",
      ],
    },
  ],
};
