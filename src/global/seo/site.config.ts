/**
 * Configuración central de SEO.
 *
 * Fuente única de verdad para host canónico, marca y datos NAP.
 * Todas las URLs canónicas, og:url, sitemap, schema y feeds se construyen
 * a partir de aquí para evitar la divergencia www / no-www detectada en el
 * diagnóstico SEO (bloque A: canonicalización).
 */

/** Host canónico: SIEMPRE con www (es el destino de la redirección del servidor). */
export const SITE_URL = 'https://www.grupocoactivasas.com';

/** Denominación de marca unificada (sin "S.A.S." con puntos). */
export const BRAND = 'Grupo Coactiva SAS';

export const SITE_NAME = BRAND;

export const LOCALE = 'es_CO';

/** Datos NAP unificados (sitio, schema, Google Business Profile, directorios). */
export const NAP = {
  phone: '+57 316 403 3330',
  phoneE164: '+573164033330',
  phoneSchema: '+57-316-403-3330',
  email: 'comercial@grupocoactivasas.com',
  medellin: {
    street: 'Circular 76 #39B-135, Laureles',
    locality: 'Medellín',
    region: 'Antioquia',
    postalCode: '050034',
    country: 'CO',
    lat: '6.244203',
    lng: '-75.581212',
  },
  bogota: {
    street: 'Carrera 13 # 85-32, Zona Rosa',
    locality: 'Bogotá',
    region: 'Cundinamarca',
    postalCode: '110221',
    country: 'CO',
    lat: '4.669410',
    lng: '-74.055260',
  },
} as const;

/** Construye una URL absoluta canónica a partir de una ruta relativa. */
export const absoluteUrl = (path = '/'): string => {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Bloque de metadatos canónicos + Open Graph coherente para cualquier página.
 * Garantiza que canonical y og:url nunca diverjan (puntos A3 y A4).
 */
export const canonicalBlock = (path: string) => ({
  alternates: { canonical: absoluteUrl(path) },
  openGraph: {
    url: absoluteUrl(path),
    siteName: SITE_NAME,
    locale: LOCALE,
  },
});
