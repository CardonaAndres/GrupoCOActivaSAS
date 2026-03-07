import Script from "next/script";
import "@/global/assets/css/globals.css";
import { RootLayoutMetada, schemaOrgJSONLD } from "@/global/metadata";
import { FloatingContactButtons, Footer, Navbar } from "@/global/components";

export const metadata = RootLayoutMetada

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="es-CO">
      <head>
        {/* JSON-LD Schema */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <main className="min-h-screen">
          <Navbar />
          {children}
          <FloatingContactButtons />
          <Footer />
        </main>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NEW3QHTMK0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NEW3QHTMK0');
          `}
        </Script>
      </body>
    </html>
  );
}