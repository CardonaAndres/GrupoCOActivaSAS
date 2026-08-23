import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME, LOCALE } from "@/global/seo/site.config";

const path = "/quienes-somos-grupo-coactiva";
const description =
  "Somos una casa de cobranza colombiana con 15 años de experiencia: 18 ejecutivos y 7 abogados especializados en recuperación de cartera en Medellín y Bogotá.";

export const AboutUsMetadata: Metadata = {
  // 38 caracteres: con el template de marca queda en 59.
  title: "Quiénes Somos: Nuestro Equipo Jurídico",
  description,

  alternates: { canonical: absoluteUrl(path) },

  openGraph: {
    title: "Quiénes Somos | Casa de Cobranza con Abogados Propios",
    description,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
    locale: LOCALE,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | Grupo Coactiva SAS",
    description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
