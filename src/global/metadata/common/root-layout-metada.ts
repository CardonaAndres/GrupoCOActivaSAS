import type { Metadata } from "next";

const BASE_URL = "https://www.grupocoactivasas.com";

// Palabras clave principales
const keywords = [
  "abogados cobranza Colombia",
  "recuperación de cartera",
  "cobro de cartera vencida",
  "cobro jurídico",
  "empresas de cobranza Medellín",
  "empresas de cobranza Bogotá",
  "casa de cobranza Colombia",
  "cobro ejecutivo",
  "cobro prejuridico",
  "abogados especialistas cobranza"
];


export const RootLayoutMetada: Metadata = {
  metadataBase: new URL('https://www.grupocoactivasas.com'),
  
  title: {
    default: "Grupo Coactiva SAS | Abogados Especialistas en Recuperación de Cartera - Colombia",
    template: "%s | Grupo Coactiva SAS"
  },
  
  description: "Cobro de Cartera Empresarial | Grupo Coactiva SAS | B2B Colombia",
  
  keywords: keywords.join(", "),
  
  authors: [{ name: "Grupo Coactiva SAS" }],
  
  creator: "Grupo Coactiva SAS",
  publisher: "Grupo Coactiva SAS",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: "https://www.grupocoactivasas.com",
  },
  
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.grupocoactivasas.com",
    siteName: "Grupo Coactiva SAS",
    title: "Grupo Coactiva SAS | Expertos en Recuperación de Cartera Colombia",
    description: "Recuperación eficiente y ética de cartera vencida. Cobertura en Colombia y Latinoamérica. Servicios jurídicos y prejurídicos especializados.",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Grupo Coactiva SAS | Expertos en Recuperación de Cartera",
    description: "Especialistas en cobro de cartera vencida. Cobertura nacional en Colombia y Latinoamérica.",
  },
  
  icons: {
    icon: "/imgs/logos/logo.png",
    shortcut: "/imgs/logos/logo.png",
    apple: "/imgs/logos/logo.png",
  },
  
  verification: {
    // google: "tu-codigo-de-verificacion-google", // Agregar después de crear Google Search Console
  },
  
  other: {
    "contact:phone_number": "+57 3018594940",
    "contact:email": "comercial@grupocoactivasas.com",
    "geo.region": "CO",
    "geo.placename": "Medellín",
    "geo.position": "6.244203;-75.581212", // Coordenadas aproximadas de Laureles
  }
};

// Schema.org JSON-LD para LocalBusiness
export const schemaOrgJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      "name": "Grupo Coactiva SAS",
      "description": "Especialistas en recuperación eficiente, ética y profesional de cartera vencida en Colombia y Latinoamérica",
      "url": BASE_URL,
      "logo": `${BASE_URL}/imgs/logos/logo.png`,
      "image": `${BASE_URL}/imgs/logos/logo.png`,
      "telephone": "+57-301-859-4940",
      "email": "comercial@grupocoactivasas.com",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "Country", "name": "Colombia" },
        { "@type": "City", "name": "Medellín" },
        { "@type": "City", "name": "Bogotá" },
        { "@type": "City", "name": "Cali" }
      ],
      "sameAs": [
        "https://www.instagram.com/grupocoactiva"
        // Agregar aquí Facebook, LinkedIn corporativo, etc. cuando existan
      ],
      "founder": {
        "@id": `${BASE_URL}/#esteban-restrepo`
      },
      "department": [
        { "@id": `${BASE_URL}/#sede-medellin` },
        { "@id": `${BASE_URL}/#sede-bogota` }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Cobranza",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cobro Jurídico de Cartera",
              "description": "Recuperación judicial de cartera vencida"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cobro Prejurídico",
              "description": "Gestión extrajudicial de cobranza"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Recuperación de Cartera Vencida",
              "description": "Estrategias personalizadas de recuperación"
            }
          }
        ]
      }
    },

    // ── Sede Medellín ──
    {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#sede-medellin`,
      "name": "Grupo Coactiva SAS - Sede Medellín",
      "branchOf": { "@id": `${BASE_URL}/#organization` },
      "telephone": "+57-301-859-4940",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Circular 76 #39B-135, Laureles",
        "addressLocality": "Medellín",
        "addressRegion": "Antioquia",
        "postalCode": "050034",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.244203",
        "longitude": "-75.581212"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    },

    // ── Sede Bogotá ──
    {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#sede-bogota`,
      "name": "Grupo Coactiva SAS - Sede Bogotá",
      "branchOf": { "@id": `${BASE_URL}/#organization` },
      "telephone": "+57-301-859-4940",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Carrera 13 # 85-32, Zona Rosa",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "addressCountry": "CO"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    },

    // ── Persona: fundador (E-E-A-T) ──
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#esteban-restrepo`,
      "name": "Esteban Restrepo",
      "jobTitle": "Socio-Fundador y Director Jurídico",
      "worksFor": { "@id": `${BASE_URL}/#organization` },
      "sameAs": [
        "http://linkedin.com/in/estebanrestrepoo",
        "https://www.instagram.com/estebanrlegal"
      ]
    }
  ]
};