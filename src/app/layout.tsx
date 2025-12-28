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
      </body>
    </html>
  );
}
