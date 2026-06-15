/**
 * Fechas de publicación/actualización de cada artículo del blog.
 * Se usan para el sitemap (lastModified) y para el schema BlogPosting
 * (datePublished / dateModified).
 *
 * IMPORTANTE: ajusta estas fechas a las reales de publicación.
 * Si vas a publicar los 23 artículos de forma escalonada (2-4 por mes,
 * como recomienda el estudio SEO), usa esa fecha real en lugar de estas.
 */

export const postDates: Record<string, { publishedAt: string; updatedAt?: string }> = {
  'beneficios-cobro-cartera-vencida-empresas': { publishedAt: '2025-11-03' },
  'momento-ideal-iniciar-cobro-cartera-vencida': { publishedAt: '2025-11-10' },
  'importancia-cobro-prejudico-colombia': { publishedAt: '2025-11-17' },
  'cobro-facturas-electronicas-proceso-juridico': { publishedAt: '2025-12-01' },
  'ley-1116-insolvencia-empresarial-cobrar-antes': { publishedAt: '2025-12-08' },
  'como-recuperar-cartera-vencida-sin-danar-relacion-comercial': { publishedAt: '2025-12-15' },
  'empresas-cobranza-medellin-como-elegir': { publishedAt: '2026-01-05' },
  'proceso-ejecutivo-cobro-colombia-guia': { publishedAt: '2026-01-12' },
  'recuperacion-cartera-b2b-colombia-estrategias': { publishedAt: '2026-01-19' },
  'cuanto-cobra-empresa-cobranza-colombia': { publishedAt: '2026-02-02' },
  'pagare-vencido-como-cobrar-legalmente-colombia': { publishedAt: '2026-02-09' },
  'acuerdos-pago-empresariales-negociacion-colombia': { publishedAt: '2026-02-16' },
  'intereses-mora-colombia-empresas-cobro': { publishedAt: '2026-03-02' },
  'senales-cliente-no-paga-prevencion-cartera': { publishedAt: '2026-03-09' },
  'embargo-bienes-colombia-proceso-ejecutivo': { publishedAt: '2026-03-16' },
  'cartera-vencida-sector-construccion-colombia': { publishedAt: '2026-04-06' },
  'derechos-acreedor-colombia-cobro-cartera': { publishedAt: '2026-04-13' },
  'cobranza-etica-colombia-que-esta-permitido': { publishedAt: '2026-04-20' },
  'cartera-vencida-reporte-centrales-riesgo-colombia': { publishedAt: '2026-05-04' },
  'recuperacion-cartera-sector-salud-colombia': { publishedAt: '2026-05-11' },
  'digitalizacion-cobranza-tendencias-tecnologia-2025': { publishedAt: '2026-05-18' },
  'liquidacion-empresas-recuperacion-cartera-colombia': { publishedAt: '2026-06-01' },
  'por-que-subcontratar-cobro-cartera-empresas': { publishedAt: '2026-06-08' },
};