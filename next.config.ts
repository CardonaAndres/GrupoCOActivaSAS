import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  
  async redirects() {
    return [
      // A1: ruta histórica del blog, que la canónica del índice declaraba y
      // devolvía 404. Se redirige de forma permanente a la ruta real.
      {
        source: "/blog",
        destination: "/blog-grupo-coactiva",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blog-grupo-coactiva/:slug",
        permanent: true,
      },
      // I4: corrección ortográfica de la URL del artículo de cobro prejurídico.
      // La ruta con la errata se conserva porque ya tiene enlaces e historial.
      {
        source: "/blog-grupo-coactiva/importancia-cobro-prejuridico-colombia",
        destination: "/blog-grupo-coactiva/importancia-cobro-prejudico-colombia",
        permanent: true,
      },
      // Variantes de URL frecuentes hacia las landings de intención comercial.
      {
        source: "/nuestros-servicios/recuperacion-de-cartera",
        destination: "/recuperacion-de-cartera",
        permanent: true,
      },
      {
        source: "/nuestros-servicios/cobranza-de-cartera",
        destination: "/cobranza-de-cartera",
        permanent: true,
      },
      // E5: alias habitual del canal de sindicación.
      {
        source: "/rss.xml",
        destination: "/feed.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
