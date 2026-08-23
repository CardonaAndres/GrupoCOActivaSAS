/**
 * Capa SEO + taxonomía del blog.
 *
 * Resuelve tres puntos del diagnóstico:
 *  - B1/B2: título corto y único por artículo (<= 60 caracteres, sin marca duplicada).
 *  - B8:    meta description dentro del rango 120-160.
 *  - D/E4:  categorías temáticas (modelo hub-and-spoke) y anclajes descriptivos
 *           variados para el enlazado interno contextual.
 */

export type BlogCategorySlug =
  | 'cobro-juridico'
  | 'cobro-prejuridico'
  | 'insolvencia'
  | 'prevencion-de-cartera'
  | 'gestion-de-cobranza'
  | 'cobranza-sectorial';

export interface BlogCategory {
  slug: BlogCategorySlug;
  name: string;
  /** Título de la página hub (<= 60 caracteres una vez aplicado el template). */
  seoTitle: string;
  description: string;
  intro: string;
}

export const blogCategories: Record<BlogCategorySlug, BlogCategory> = {
  'cobro-juridico': {
    slug: 'cobro-juridico',
    name: 'Cobro Jurídico',
    seoTitle: 'Cobro Jurídico de Cartera en Colombia',
    description:
      'Guías sobre cobro jurídico de cartera en Colombia: proceso ejecutivo, títulos valores, embargo de bienes y derechos del acreedor, por abogados de cobranza.',
    intro:
      'Cuando la gestión prejurídica se agota, el cobro jurídico es la vía para hacer exigible la obligación ante un juez. En esta sección reunimos las guías sobre proceso ejecutivo, títulos valores, medidas cautelares y derechos del acreedor en Colombia.',
  },
  'cobro-prejuridico': {
    slug: 'cobro-prejuridico',
    name: 'Cobro Prejurídico',
    seoTitle: 'Cobro Prejurídico y Acuerdos de Pago',
    description:
      'Cómo recuperar cartera vencida por vía prejurídica en Colombia: negociación, acuerdos de pago, cobranza ética y momento ideal para iniciar la gestión.',
    intro:
      'La mayor parte de la cartera se recupera antes de llegar a un juzgado. Aquí encontrará las estrategias de cobranza prejurídica que preservan la relación comercial: negociación, acuerdos de pago y cobranza ética.',
  },
  insolvencia: {
    slug: 'insolvencia',
    name: 'Insolvencia y Liquidación',
    seoTitle: 'Insolvencia Empresarial y Ley 1116',
    description:
      'Qué hacer como acreedor cuando su deudor entra en insolvencia o liquidación en Colombia: Ley 1116, prelación de créditos y protección de su cartera.',
    intro:
      'La insolvencia de un cliente cambia por completo las reglas del cobro. Estas guías explican la Ley 1116, los procesos de reorganización y liquidación, y cómo actuar a tiempo para proteger su cartera.',
  },
  'prevencion-de-cartera': {
    slug: 'prevencion-de-cartera',
    name: 'Prevención de Cartera',
    seoTitle: 'Prevención de Cartera Vencida',
    description:
      'Políticas de crédito, señales de alerta, intereses de mora y reporte a centrales de riesgo: cómo evitar que la cartera de su empresa se vuelva pérdida.',
    intro:
      'La cartera más rentable es la que nunca se vence. En esta sección abordamos políticas de crédito, señales tempranas de impago, intereses de mora y reporte a centrales de riesgo.',
  },
  'gestion-de-cobranza': {
    slug: 'gestion-de-cobranza',
    name: 'Gestión de Cobranza',
    seoTitle: 'Gestión y Tercerización de la Cobranza',
    description:
      'Cómo elegir una casa de cobranza en Colombia, cuánto cobra, qué modelos existen y cuándo conviene tercerizar la recuperación de cartera empresarial.',
    intro:
      'Decidir cómo gestionar la cobranza —internamente o con una casa de cobranza especializada— define la tasa de recuperación. Aquí comparamos modelos, costos y criterios de selección.',
  },
  'cobranza-sectorial': {
    slug: 'cobranza-sectorial',
    name: 'Cobranza por Sector',
    seoTitle: 'Recuperación de Cartera por Sector',
    description:
      'Particularidades de la recuperación de cartera en sectores como salud y construcción en Colombia: ciclos de pago, contrapartes y estrategias específicas.',
    intro:
      'Cada sector tiene su propia dinámica de pago, contrapartes y riesgos. Estas guías recogen la experiencia de Grupo Coactiva SAS en verticales con alta concentración de cartera vencida.',
  },
};

export interface BlogSeoEntry {
  /** Título absoluto para <title> y og:title. Máximo 60 caracteres. */
  seoTitle: string;
  /** Meta description en rango 120-160 caracteres. */
  description: string;
  category: BlogCategorySlug;
  /** Anclajes descriptivos alternativos para enlaces internos contextuales. */
  anchors: string[];
}

export const blogSeo: Record<string, BlogSeoEntry> = {
  'beneficios-cobro-cartera-vencida-empresas': {
    seoTitle: '5 Beneficios del Cobro de Cartera Vencida',
    description:
      'Cinco beneficios concretos de recuperar la cartera vencida de su empresa: liquidez, menor riesgo de incobrabilidad y respaldo jurídico especializado.',
    category: 'gestion-de-cobranza',
    anchors: [
      'beneficios de recuperar la cartera vencida',
      'por qué cobrar la cartera vencida a tiempo',
      'impacto del cobro de cartera en la liquidez',
    ],
  },
  'momento-ideal-iniciar-cobro-cartera-vencida': {
    seoTitle: '¿Cuándo Iniciar el Cobro de Cartera Vencida?',
    description:
      'El momento en que inicia la gestión determina cuánto recupera. Conozca los plazos de mora y las señales que indican que debe activar el cobro de cartera.',
    category: 'cobro-prejuridico',
    anchors: [
      'cuándo iniciar el cobro de cartera vencida',
      'plazos de mora para activar la cobranza',
      'momento ideal para iniciar la gestión de cobro',
    ],
  },
  'importancia-cobro-prejudico-colombia': {
    seoTitle: 'Cobro Prejurídico en Colombia: Por Qué Importa',
    description:
      'El cobro prejurídico resuelve la mayoría de las obligaciones antes del juzgado. Conozca sus etapas, ventajas y cuándo conviene escalar a la vía jurídica.',
    category: 'cobro-prejuridico',
    anchors: [
      'cobro prejurídico de cartera en Colombia',
      'gestión prejurídica antes del proceso jurídico',
      'importancia del cobro prejurídico',
    ],
  },
  'cobro-facturas-electronicas-proceso-juridico': {
    seoTitle: 'Cobro de Facturas Electrónicas Impagadas',
    description:
      'La factura electrónica es título valor y permite cobro ejecutivo. Requisitos de aceptación, plazos y cómo iniciar el proceso jurídico en Colombia.',
    category: 'cobro-juridico',
    anchors: [
      'cobro jurídico de facturas electrónicas',
      'la factura electrónica como título valor',
      'cómo cobrar facturas electrónicas impagadas',
    ],
  },
  'ley-1116-insolvencia-empresarial-cobrar-antes': {
    seoTitle: 'Ley 1116: Cobre Antes de la Insolvencia',
    description:
      'Si su cliente se acoge a la Ley 1116, su cartera entra en un proceso colectivo. Conozca la prelación de créditos y por qué conviene cobrar antes.',
    category: 'insolvencia',
    anchors: [
      'Ley 1116 de insolvencia empresarial',
      'cobrar antes de que el deudor se acoja a insolvencia',
      'prelación de créditos en insolvencia',
    ],
  },
  'como-recuperar-cartera-vencida-sin-danar-relacion-comercial': {
    seoTitle: 'Recuperar Cartera sin Perder al Cliente',
    description:
      'Estrategias para recuperar cartera vencida en Colombia conservando la relación comercial: tono, canales, escalamiento y acuerdos que sí se cumplen.',
    category: 'cobro-prejuridico',
    anchors: [
      'recuperar cartera vencida sin dañar la relación comercial',
      'cobranza que preserva al cliente',
      'cómo cobrar sin perder la relación comercial',
    ],
  },
  'empresas-cobranza-medellin-como-elegir': {
    seoTitle: 'Empresas de Cobranza en Medellín: Cómo Elegir',
    description:
      'Criterios para elegir una casa de cobranza en Medellín: equipo jurídico propio, modelo de honorarios, trazabilidad y señales de alerta que debe evitar.',
    category: 'gestion-de-cobranza',
    anchors: [
      'empresas de cobranza en Medellín',
      'cómo elegir una casa de cobranza en Medellín',
      'criterios para contratar cobranza en Medellín',
    ],
  },
  'proceso-ejecutivo-cobro-colombia-guia': {
    seoTitle: 'Proceso Ejecutivo de Cobro en Colombia: Guía',
    description:
      'Guía del proceso ejecutivo en Colombia: título valor, mandamiento de pago, medidas cautelares, excepciones del deudor y tiempos reales de cada etapa.',
    category: 'cobro-juridico',
    anchors: [
      'proceso ejecutivo de cobro en Colombia',
      'etapas del proceso ejecutivo',
      'cobro judicial por vía ejecutiva',
    ],
  },
  'recuperacion-cartera-b2b-colombia-estrategias': {
    seoTitle: 'Recuperación de Cartera B2B en Colombia',
    description:
      'Estrategias de recuperación de cartera B2B en Colombia: segmentación por antigüedad, interlocución con áreas financieras y escalamiento jurídico.',
    category: 'gestion-de-cobranza',
    anchors: [
      'recuperación de cartera B2B en Colombia',
      'estrategias de cobranza entre empresas',
      'recuperación de cartera empresarial',
    ],
  },
  'cuanto-cobra-empresa-cobranza-colombia': {
    seoTitle: '¿Cuánto Cobra una Empresa de Cobranza?',
    description:
      'Modelos de honorarios de las empresas de cobranza en Colombia, rangos de porcentaje sobre lo recuperado y qué costos debe vigilar antes de firmar.',
    category: 'gestion-de-cobranza',
    anchors: [
      'cuánto cobra una empresa de cobranza en Colombia',
      'honorarios de una casa de cobranza',
      'modelo de pago por resultados en cobranza',
    ],
  },
  'pagare-vencido-como-cobrar-legalmente-colombia': {
    seoTitle: 'Pagaré Vencido: Cómo Cobrarlo Legalmente',
    description:
      'Requisitos del pagaré como título valor, plazos de prescripción, errores frecuentes de diligenciamiento y pasos para cobrarlo por vía ejecutiva.',
    category: 'cobro-juridico',
    anchors: [
      'cómo cobrar un pagaré vencido',
      'el pagaré como título valor ejecutivo',
      'cobro legal de pagarés en Colombia',
    ],
  },
  'acuerdos-pago-empresariales-negociacion-colombia': {
    seoTitle: 'Acuerdos de Pago Empresariales: Cómo Negociar',
    description:
      'Cómo estructurar acuerdos de pago con deudores corporativos en Colombia: garantías, cláusula aceleratoria, plazos realistas y errores que los invalidan.',
    category: 'cobro-prejuridico',
    anchors: [
      'acuerdos de pago con deudores empresariales',
      'cómo negociar un acuerdo de pago',
      'estructurar acuerdos de pago exigibles',
    ],
  },
  'intereses-mora-colombia-empresas-cobro': {
    seoTitle: 'Intereses de Mora en Colombia: Cuánto Cobrar',
    description:
      'Cómo se calculan los intereses de mora en Colombia, el tope de usura de la Superfinanciera y cómo trasladar legalmente los costos de la cobranza.',
    category: 'prevencion-de-cartera',
    anchors: [
      'cálculo de intereses de mora en Colombia',
      'tasa máxima de interés moratorio',
      'intereses de mora que puede cobrar su empresa',
    ],
  },
  'senales-cliente-no-paga-prevencion-cartera': {
    seoTitle: 'Señales de que su Cliente No va a Pagar',
    description:
      'Indicadores tempranos de riesgo de impago y cómo estructurar políticas de crédito que eviten que la cartera de su empresa se vuelva incobrable.',
    category: 'prevencion-de-cartera',
    anchors: [
      'señales de alerta de un cliente que no paga',
      'prevención de cartera vencida',
      'políticas de crédito para evitar impagos',
    ],
  },
  'embargo-bienes-colombia-proceso-ejecutivo': {
    seoTitle: 'Embargo de Bienes en Colombia: Cómo Funciona',
    description:
      'Qué bienes son embargables en Colombia, cuáles son inembargables, cómo se decretan las medidas cautelares y su efecto real sobre la recuperación.',
    category: 'cobro-juridico',
    anchors: [
      'embargo de bienes en el proceso ejecutivo',
      'medidas cautelares en cobro de cartera',
      'qué bienes se pueden embargar en Colombia',
    ],
  },
  'cartera-vencida-sector-construccion-colombia': {
    seoTitle: 'Cartera Vencida en el Sector Construcción',
    description:
      'Retenciones en garantía, actas de obra y subcontratación: cómo recuperar cartera vencida en el sector constructor colombiano sin frenar la obra.',
    category: 'cobranza-sectorial',
    anchors: [
      'cartera vencida en el sector construcción',
      'cobranza para constructoras y contratistas',
      'recuperación de cartera en obra civil',
    ],
  },
  'derechos-acreedor-colombia-cobro-cartera': {
    seoTitle: 'Derechos del Acreedor en Colombia',
    description:
      'Qué le garantiza la ley colombiana como acreedor: exigibilidad, acción pauliana, acción oblicua y herramientas de cobro disponibles ante el impago.',
    category: 'cobro-juridico',
    anchors: [
      'derechos del acreedor en Colombia',
      'herramientas legales del acreedor',
      'qué puede hacer un acreedor ante el impago',
    ],
  },
  'cobranza-etica-colombia-que-esta-permitido': {
    seoTitle: 'Cobranza Ética: Qué Está Permitido en Colombia',
    description:
      'Marco normativo de la cobranza en Colombia: prácticas permitidas, conductas prohibidas, habeas data y límites de la Circular 048 de la Superfinanciera.',
    category: 'cobro-prejuridico',
    anchors: [
      'cobranza ética en Colombia',
      'qué prácticas de cobranza están permitidas',
      'límites legales de la gestión de cobro',
    ],
  },
  'cartera-vencida-reporte-centrales-riesgo-colombia': {
    seoTitle: 'Reporte a Centrales de Riesgo por Cartera',
    description:
      'Cuándo y cómo reportar a un deudor en centrales de riesgo en Colombia, requisitos de notificación previa y efectos del reporte sobre la negociación.',
    category: 'prevencion-de-cartera',
    anchors: [
      'reporte a centrales de riesgo por cartera vencida',
      'cómo reportar a un deudor moroso',
      'habeas data y reporte negativo',
    ],
  },
  'recuperacion-cartera-sector-salud-colombia': {
    seoTitle: 'Recuperación de Cartera en el Sector Salud',
    description:
      'Glosas, giro directo y flujos EPS-IPS: estrategias de recuperación de cartera para clínicas, hospitales y proveedores del sector salud en Colombia.',
    category: 'cobranza-sectorial',
    anchors: [
      'recuperación de cartera en el sector salud',
      'cobranza para clínicas, IPS y proveedores médicos',
      'cartera vencida entre EPS e IPS',
    ],
  },
  'digitalizacion-cobranza-tendencias-tecnologia-2025': {
    seoTitle: 'Digitalización de la Cobranza: Tendencias',
    description:
      'Automatización, scoring y omnicanalidad en la cobranza colombiana: qué tecnología aporta valor real y dónde sigue siendo decisivo el factor humano.',
    category: 'gestion-de-cobranza',
    anchors: [
      'digitalización de la cobranza',
      'tecnología aplicada a la recuperación de cartera',
      'tendencias de cobranza digital',
    ],
  },
  'liquidacion-empresas-recuperacion-cartera-colombia': {
    seoTitle: 'Liquidación de Empresas y su Cartera',
    description:
      'Qué pasa con su deuda cuando el cliente entra en liquidación judicial en Colombia, cómo hacerse parte del proceso y en qué orden se paga a los acreedores.',
    category: 'insolvencia',
    anchors: [
      'liquidación de empresas y recuperación de cartera',
      'qué pasa con la deuda si el cliente se liquida',
      'acreedores en liquidación judicial',
    ],
  },
  'por-que-subcontratar-cobro-cartera-empresas': {
    seoTitle: 'Tercerizar el Cobro de Cartera: Ventajas',
    description:
      'Costo real de cobrar internamente frente a tercerizar con una casa de cobranza: tasa de recuperación, foco del equipo comercial y respaldo jurídico.',
    category: 'gestion-de-cobranza',
    anchors: [
      'tercerizar el cobro de cartera',
      'subcontratar la cobranza empresarial',
      'cobranza interna vs. casa de cobranza',
    ],
  },
};

/** Slugs de los artículos de una categoría, en el orden en que se declaran. */
export const postsByCategory = (category: BlogCategorySlug): string[] =>
  Object.entries(blogSeo)
    .filter(([, entry]) => entry.category === category)
    .map(([slug]) => slug);

/**
 * Artículos relacionados de un post: primero los de su misma categoría y,
 * si no alcanzan, se completa con los de categorías vecinas. Garantiza el
 * mínimo de 3 enlaces internos contextuales por artículo (punto D).
 */
export const relatedPosts = (slug: string, limit = 4): string[] => {
  const entry = blogSeo[slug];
  if (!entry) return [];

  const sameCategory = postsByCategory(entry.category).filter((s) => s !== slug);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const rest = Object.keys(blogSeo).filter(
    (s) => s !== slug && !sameCategory.includes(s)
  );
  return [...sameCategory, ...rest].slice(0, limit);
};
