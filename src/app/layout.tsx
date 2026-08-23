import Script from "next/script";
import "@/global/assets/css/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { RootLayoutMetada, RootLayoutViewport, schemaOrgJSONLD } from "@/global/metadata";
import { FloatingContactButtons, Footer, Navbar } from "@/global/components";

export const metadata = RootLayoutMetada;
export const viewport = RootLayoutViewport;

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="es-CO">
      <head>
        {/*
          Grafo de identidad (schema.org) emitido como <script> nativo en el HTML
          del servidor. Antes se inyectaba con next/script y solo era visible tras
          ejecutar JavaScript, por lo que los rastreadores de IA no lo veían.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body>
        <main className="min-h-screen">
          <Navbar />
          {children}
          <FloatingContactButtons />
          <Footer />
        </main>

        <Analytics />

        {/* Google Analytics / Google Ads — cargados tras la interactividad (INP) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17262857323"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NEW3QHTMK0');
            gtag('config', 'AW-17262857323');
          `}
        </Script>
      </body>
    </html>
  );
}
