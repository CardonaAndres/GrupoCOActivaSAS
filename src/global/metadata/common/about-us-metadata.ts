import type { Metadata } from "next";

export const AboutUsMetadata: Metadata = {
  title: "Quiénes Somos | Grupo Coactiva SAS - Expertos en Recuperación de Cartera Colombia",
  description: "Conozca a Grupo Coactiva SAS, líderes en recuperación de cartera vencida. Equipo de 18 ejecutivos y 7 abogados especializados en cobro jurídico y prejurídico en Medellín, Bogotá y toda Colombia.",
  
  keywords: [
    "quienes somos grupo coactiva",
    "abogados cobranza colombia",
    "empresa recuperación cartera",
    "abogados especialistas cobro",
    "firma jurídica cobranza",
    "equipo legal cobranza",
    "esteban restrepo abogado",
  ].join(", "),
  
  alternates: {
    canonical: "https://www.grupocoactivasas.com/quienes-somos-grupo-coactiva",
  },
  
  openGraph: {
    title: "Quiénes Somos | Grupo Coactiva SAS - Expertos en Recuperación de Cartera",
    description: "Líderes en recuperación de cartera con equipo especializado de 18 ejecutivos y 7 abogados. Servicios jurídicos y prejurídicos en toda Colombia.",
    url: "https://www.grupocoactivasas.com/quienes-somos-grupo-coactiva",
    siteName: "Grupo Coactiva SAS",
    locale: "es_CO",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | Grupo Coactiva SAS",
    description: "Líderes en recuperación de cartera con equipo especializado en Colombia.",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};