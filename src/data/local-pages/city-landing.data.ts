import { NAP } from '@/global/seo/site.config';

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityHighlight {
  title: string;
  description: string;
}

/** Variante de intención de búsqueda cubierta por la página (cobro / cobranza / recuperación / casa de cobranza). */
export interface CityServiceVariant {
  title: string;
  description: string;
}

export interface CityLandingData {
  slug: string;
  cityName: string;
  cityFullName: string;
  /** Región administrativa (departamento). */
  cityRegion: string;
  /** Referencia al @id definido en schemaOrgJSONLD (root layout). Solo sedes físicas. */
  schemaId?: string;
  /** true si hay oficina física en la ciudad; false para páginas de cobertura. */
  hasOffice: boolean;
  /** Coordenadas usadas por el schema y el mapa. */
  geo: { lat: string; lng: string };
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  address?: string;
  cityFullAddress: string;
  introTitle: string;
  introParagraphs: string[];
  highlights: CityHighlight[];
  serviceVariants: CityServiceVariant[];
  whyUs: string[];
  faqs: CityFAQ[];
  /** Artículos del blog enlazados contextualmente desde la página (bloque D). */
  relatedArticleSlugs: string[];
}

/**
 * Genera un embed de Google Maps válido a partir de la dirección real.
 * Sustituye los `pb=` heredados, que en Medellín conservaban valores de
 * marcador de posición del despliegue inicial (punto H1 del diagnóstico).
 */
export const mapEmbedUrl = (query: string): string =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=es`;

export const cityLandingData: Record<string, CityLandingData> = {
  medellin: {
    slug: 'medellin',
    cityName: 'Medellín',
    cityFullName: 'Medellín, Antioquia',
    cityRegion: 'Antioquia',
    schemaId: '#sede-medellin',
    hasOffice: true,
    geo: { lat: NAP.medellin.lat, lng: NAP.medellin.lng },
    heroEyebrow: 'Sede Principal',
    heroTitle: 'Cobro de Cartera Empresarial en Medellín',
    heroDescription:
      'Casa de cobranza con sede física en Laureles. Recuperamos la cartera vencida de su empresa con equipo propio de abogados y ejecutivos, con cobertura en toda Antioquia.',
    address: NAP.medellin.street,
    cityFullAddress: `${NAP.medellin.street}, Medellín, Antioquia`,
    introTitle: 'Recuperación de Cartera Vencida para Empresas en Medellín',
    introParagraphs: [
      'Medellín es uno de los principales centros empresariales de Colombia, con un tejido productivo diverso que incluye manufactura, retail, construcción, salud y servicios. En este entorno, la cartera vencida entre empresas (B2B) es uno de los problemas financieros más comunes y, al mismo tiempo, uno de los más postergados.',
      'Grupo Coactiva SAS tiene su sede principal en el barrio Laureles, en Medellín, desde donde lideramos la gestión de cobro para empresas de la ciudad con más de 15 años de experiencia, un equipo propio de 18 ejecutivos y 7 abogados especializados.',
      'Nuestra cercanía con el tejido empresarial antioqueño nos permite combinar gestión remota y presencial, adaptándonos a las particularidades de cada sector y cada deudor en la ciudad y en todo el departamento.',
    ],
    highlights: [
      {
        title: 'Sede Principal en Laureles',
        description:
          'Oficina física en Medellín que nos permite atención presencial y, cuando es necesario, visitas a deudores dentro de la ciudad.',
      },
      {
        title: 'Cobertura en toda Antioquia',
        description:
          'Gestionamos cartera vencida de empresas ubicadas en Medellín y en los municipios del Valle de Aburrá y el resto del departamento.',
      },
      {
        title: 'Experiencia Sectorial Local',
        description:
          'Hemos trabajado con empresas de sectores clave para Antioquia como construcción, manufactura y retail, incluyendo clientes reconocidos como Argos.',
      },
      {
        title: 'Equipo Propio: 18 Ejecutivos y 7 Abogados',
        description:
          'A diferencia de los call centers de cobranza masiva, cada caso es gestionado de forma personalizada por un ejecutivo dedicado, con respaldo jurídico inmediato si el caso lo requiere.',
      },
    ],
    serviceVariants: [
      {
        title: 'Cobro de cartera en Medellín',
        description:
          'Gestión completa del cobro de cartera vencida de su empresa: contacto con el deudor, negociación, acuerdos de pago y escalamiento jurídico cuando el caso lo exige.',
      },
      {
        title: 'Cobranza de cartera en Medellín',
        description:
          'Cobranza empresarial persona a persona, sin call center masivo. Cada obligación es asignada a un ejecutivo que le reporta el avance del caso.',
      },
      {
        title: 'Recuperación de cartera en Medellín',
        description:
          'Recuperación de deudas B2B desde $10.000.000 COP, con modelo de honorarios sobre lo efectivamente recuperado y trazabilidad de cada gestión.',
      },
      {
        title: 'Casa de cobranza en Medellín con abogados propios',
        description:
          'No subcontratamos la vía jurídica: nuestros abogados de cobranza inician el proceso ejecutivo y solicitan medidas cautelares desde la misma sede.',
      },
    ],
    whyUs: [
      'Atención personalizada para empresas de Medellín y Antioquia',
      'Visitas presenciales a deudores en la ciudad cuando es necesario',
      'Conocimiento del tejido empresarial antioqueño',
      'Modelo de pago por resultados: solo paga si recuperamos',
      'Gestión prejurídica de hasta 20 días antes de escalar a vía jurídica',
      'Atendemos obligaciones empresariales desde $10.000.000 COP',
    ],
    faqs: [
      {
        question: '¿Dónde está ubicada la oficina de Grupo Coactiva SAS en Medellín?',
        answer:
          'Nuestra sede principal está ubicada en la Circular 76 #39B-135, barrio Laureles, Medellín, Antioquia. Desde esta oficina coordinamos la gestión de cobro para empresas de la ciudad y de todo el departamento.',
      },
      {
        question: '¿Cuál es la mejor casa de cobranza en Medellín para empresas?',
        answer:
          'La mejor opción es la que cuente con abogados propios, modelo de pago por resultados y gestión persona a persona. Grupo Coactiva SAS reúne esos tres criterios: sede física en Laureles, equipo de 18 ejecutivos y 7 abogados especializados en cobro de cartera empresarial, y honorarios únicamente sobre lo efectivamente recuperado.',
      },
      {
        question: '¿Atienden empresas en toda Antioquia o solo en Medellín?',
        answer:
          'Atendemos empresas en Medellín y en todos los municipios de Antioquia, además de contar con cobertura a nivel nacional gracias a nuestro modelo de gestión remota y presencial.',
      },
      {
        question: '¿Cuál es el monto mínimo de cartera que pueden gestionar?',
        answer:
          'Trabajamos obligaciones empresariales a partir de $10.000.000 COP, lo que nos permite enfocar nuestro equipo en carteras de mediana y alta cuantía con mayor potencial de recuperación.',
      },
      {
        question: '¿Cuánto cobra Grupo Coactiva SAS por el servicio en Medellín?',
        answer:
          'El costo se pacta previamente y oscila entre el 5% y el 20% sobre el monto efectivamente recuperado, dependiendo de la antigüedad de la deuda, el monto y si la gestión requiere vía jurídica. Solo paga si recuperamos su dinero.',
      },
    ],
    relatedArticleSlugs: [
      'empresas-cobranza-medellin-como-elegir',
      'recuperacion-cartera-b2b-colombia-estrategias',
      'cuanto-cobra-empresa-cobranza-colombia',
    ],
  },

  bogota: {
    slug: 'bogota',
    cityName: 'Bogotá',
    cityFullName: 'Bogotá, Cundinamarca',
    cityRegion: 'Cundinamarca',
    schemaId: '#sede-bogota',
    hasOffice: true,
    geo: { lat: NAP.bogota.lat, lng: NAP.bogota.lng },
    heroEyebrow: 'Sede Bogotá',
    heroTitle: 'Cobro de Cartera Empresarial en Bogotá',
    heroDescription:
      'Casa de cobranza con oficina en la Zona Rosa. Recuperamos la cartera vencida de su empresa con gestión personalizada, pago por resultados y respaldo jurídico propio.',
    address: NAP.bogota.street,
    cityFullAddress: `${NAP.bogota.street}, Bogotá, Cundinamarca`,
    introTitle: 'Recuperación de Cartera Vencida para Empresas en Bogotá',
    introParagraphs: [
      'Bogotá concentra la mayor cantidad de sedes corporativas del país y, con ello, algunos de los volúmenes más altos de cartera vencida entre empresas (B2B). Los procesos de aprobación de pagos más complejos y las relaciones comerciales de largo plazo hacen que estas obligaciones requieran una gestión especializada.',
      'Grupo Coactiva SAS cuenta con oficina en Bogotá, en la Zona Rosa, desde donde aplicamos el mismo modelo de gestión persona a persona, con 18 ejecutivos y 7 abogados especializados, que nos ha dado más de 15 años de experiencia en recuperación de cartera empresarial.',
      'Nuestra presencia en la ciudad nos permite gestionar directamente con los tomadores de decisión de empresas bogotanas, preservando la relación comercial y maximizando la tasa de recuperación.',
    ],
    highlights: [
      {
        title: 'Oficina en Bogotá',
        description:
          'Contamos con oficina en la Zona Rosa de Bogotá, lo que nos permite atención cercana y, cuando es necesario, gestión presencial en la ciudad.',
      },
      {
        title: 'Cobertura en Bogotá y Cundinamarca',
        description:
          'Gestionamos cartera vencida de empresas ubicadas en Bogotá y en los municipios de Cundinamarca, además de cobertura a nivel nacional.',
      },
      {
        title: 'Experiencia con Grandes Empresas',
        description:
          'Hemos trabajado con clientes reconocidos con operación en Bogotá como Brinks y Ecopetrol, en procesos de recuperación de cartera de alta cuantía.',
      },
      {
        title: 'Mismo Modelo Nacional: Pago por Resultados',
        description:
          'El mismo modelo persona a persona y de honorarios sobre lo recuperado que aplicamos en todo el país, sin costos fijos ni anticipos.',
      },
    ],
    serviceVariants: [
      {
        title: 'Cobro de cartera en Bogotá',
        description:
          'Gestión de cobro de cartera vencida para empresas bogotanas, con interlocución directa ante áreas de tesorería, compras y jurídica del deudor.',
      },
      {
        title: 'Cobranza de cartera en Bogotá',
        description:
          'Cobranza empresarial estructurada por antigüedad y cuantía, con reportes periódicos del estado de cada obligación gestionada.',
      },
      {
        title: 'Recuperación de cartera en Bogotá',
        description:
          'Recuperación de deudas B2B de alta cuantía, incluyendo carteras con múltiples facturas, actas y órdenes de compra asociadas.',
      },
      {
        title: 'Casa de cobranza en Bogotá con equipo jurídico',
        description:
          'Si la vía prejurídica se agota, nuestros abogados de cobranza radican el proceso ejecutivo ante los juzgados de Bogotá y hacen seguimiento del expediente.',
      },
    ],
    whyUs: [
      'Atención personalizada para empresas de Bogotá y Cundinamarca',
      'Gestión directa con tomadores de decisión en empresas bogotanas',
      'Experiencia en cartera B2B de alta cuantía',
      'Modelo de pago por resultados: solo paga si recuperamos',
      'Gestión prejurídica de hasta 20 días antes de escalar a vía jurídica',
      'Atendemos obligaciones empresariales desde $10.000.000 COP',
    ],
    faqs: [
      {
        question: '¿Grupo Coactiva SAS tiene oficina en Bogotá?',
        answer:
          'Sí, contamos con oficina en Bogotá, ubicada en la Carrera 13 # 85-32, Zona Rosa, además de nuestra sede principal en Medellín. Esto nos permite atender de forma cercana a empresas de la capital.',
      },
      {
        question: '¿Cuál es la mejor casa de cobranza en Bogotá para empresas?',
        answer:
          'Para cartera empresarial, la mejor casa de cobranza en Bogotá es la que combina oficina en la ciudad, abogados propios para la vía ejecutiva y honorarios sobre lo recuperado. Grupo Coactiva SAS opera con ese modelo desde su oficina de la Zona Rosa.',
      },
      {
        question: '¿Atienden empresas en toda Bogotá y Cundinamarca?',
        answer:
          'Sí, gestionamos cartera vencida de empresas ubicadas en Bogotá y en todo el departamento de Cundinamarca, además de cobertura a nivel nacional.',
      },
      {
        question: '¿Qué tipo de empresas en Bogotá pueden contratar el servicio?',
        answer:
          'Trabajamos con empresas de cualquier sector que tengan obligaciones empresariales (B2B) a partir de $10.000.000 COP, especialmente en sectores con alta concentración de cartera vencida como construcción, salud y servicios.',
      },
      {
        question: '¿Cómo inicio el proceso de cobro de cartera en Bogotá?',
        answer:
          'Puede solicitar una consulta gratuita por WhatsApp o a través de nuestro formulario de contacto. Analizamos su cartera sin costo y le proponemos una estrategia de gestión prejurídica o jurídica según el caso.',
      },
    ],
    relatedArticleSlugs: [
      'recuperacion-cartera-b2b-colombia-estrategias',
      'proceso-ejecutivo-cobro-colombia-guia',
      'acuerdos-pago-empresariales-negociacion-colombia',
    ],
  },

  cali: {
    slug: 'cali',
    cityName: 'Cali',
    cityFullName: 'Cali, Valle del Cauca',
    cityRegion: 'Valle del Cauca',
    hasOffice: false,
    geo: { lat: '3.451647', lng: '-76.531985' },
    heroEyebrow: 'Cobertura Valle del Cauca',
    heroTitle: 'Cobro de Cartera Empresarial en Cali',
    heroDescription:
      'Recuperamos la cartera vencida de empresas del Valle del Cauca con gestión remota y presencial, equipo propio de abogados y modelo de pago por resultados.',
    cityFullAddress: 'Cali, Valle del Cauca, Colombia',
    introTitle: 'Recuperación de Cartera Vencida para Empresas en Cali',
    introParagraphs: [
      'Cali concentra buena parte de la agroindustria, la manufactura y la distribución del suroccidente colombiano. Son sectores con ciclos de pago largos y cadenas de proveedores extensas, condiciones que hacen que la cartera vencida se acumule con rapidez.',
      'Grupo Coactiva SAS atiende empresas del Valle del Cauca desde su estructura nacional, con el mismo equipo de 18 ejecutivos y 7 abogados especializados que gestiona la cartera de nuestros clientes en Medellín y Bogotá.',
      'Nuestro modelo combina gestión remota permanente con desplazamientos presenciales cuando el caso lo justifica, de modo que una empresa caleña recibe exactamente el mismo nivel de seguimiento que una con sede en nuestras oficinas.',
    ],
    highlights: [
      {
        title: 'Cobertura en todo el Valle del Cauca',
        description:
          'Gestionamos cartera vencida de empresas en Cali, Palmira, Yumbo, Buga y el resto del departamento.',
      },
      {
        title: 'Ejecutivo Dedicado por Caso',
        description:
          'Cada cartera asignada tiene un ejecutivo responsable que reporta avances, sin importar la ciudad donde esté su empresa.',
      },
      {
        title: 'Respaldo Jurídico Nacional',
        description:
          'Nuestros abogados radican procesos ejecutivos ante los juzgados competentes en cualquier ciudad del país, incluida Cali.',
      },
      {
        title: 'Sin Costos Fijos ni Anticipos',
        description:
          'Modelo de honorarios exclusivamente sobre el monto efectivamente recuperado, igual que en nuestras sedes.',
      },
    ],
    serviceVariants: [
      {
        title: 'Cobro de cartera en Cali',
        description:
          'Gestión de cobro de obligaciones empresariales vencidas con deudores domiciliados en Cali y el Valle del Cauca.',
      },
      {
        title: 'Cobranza de cartera en Cali',
        description:
          'Cobranza B2B con contacto directo, acuerdos de pago documentados y seguimiento del cumplimiento.',
      },
      {
        title: 'Recuperación de cartera en Cali',
        description:
          'Recuperación de deudas para empresas del suroccidente colombiano, desde $10.000.000 COP por obligación.',
      },
      {
        title: 'Casa de cobranza para empresas del Valle del Cauca',
        description:
          'Alternativa a los call centers de cobranza masiva: gestión persona a persona con respaldo de abogados propios.',
      },
    ],
    whyUs: [
      'Cobertura para empresas de Cali y todo el Valle del Cauca',
      'Gestión remota permanente y presencial cuando el caso lo requiere',
      'Equipo propio de 18 ejecutivos y 7 abogados especializados',
      'Modelo de pago por resultados: solo paga si recuperamos',
      'Gestión prejurídica antes de escalar a la vía jurídica',
      'Atendemos obligaciones empresariales desde $10.000.000 COP',
    ],
    faqs: [
      {
        question: '¿Grupo Coactiva SAS atiende empresas en Cali?',
        answer:
          'Sí. Atendemos empresas de Cali y de todo el Valle del Cauca desde nuestra estructura nacional, con sedes en Medellín y Bogotá. La gestión es remota de forma permanente y presencial cuando el caso lo justifica.',
      },
      {
        question: '¿Cómo funciona el cobro de cartera si no tienen oficina en Cali?',
        answer:
          'El proceso es idéntico al de nuestras sedes: un ejecutivo dedicado gestiona la obligación, documenta cada contacto y reporta el avance. Para la vía jurídica, nuestros abogados radican el proceso ejecutivo ante el juzgado competente en Cali.',
      },
      {
        question: '¿Qué tipo de cartera gestionan en el Valle del Cauca?',
        answer:
          'Cartera empresarial B2B a partir de $10.000.000 COP: facturas electrónicas, pagarés, contratos y actas de servicio de sectores como agroindustria, manufactura, distribución, construcción y salud.',
      },
      {
        question: '¿Cuánto cuesta el servicio de cobranza en Cali?',
        answer:
          'Los honorarios se pactan previamente y oscilan entre el 5% y el 20% sobre el monto efectivamente recuperado, según antigüedad, cuantía y si el caso requiere vía jurídica. No hay costos fijos ni anticipos.',
      },
    ],
    relatedArticleSlugs: [
      'recuperacion-cartera-b2b-colombia-estrategias',
      'cuanto-cobra-empresa-cobranza-colombia',
      'por-que-subcontratar-cobro-cartera-empresas',
    ],
  },

  barranquilla: {
    slug: 'barranquilla',
    cityName: 'Barranquilla',
    cityFullName: 'Barranquilla, Atlántico',
    cityRegion: 'Atlántico',
    hasOffice: false,
    geo: { lat: '10.968536', lng: '-74.781324' },
    heroEyebrow: 'Cobertura Costa Caribe',
    heroTitle: 'Cobro de Cartera Empresarial en Barranquilla',
    heroDescription:
      'Recuperación de cartera vencida para empresas de Barranquilla y la Costa Caribe, con equipo propio de abogados y honorarios sobre lo recuperado.',
    cityFullAddress: 'Barranquilla, Atlántico, Colombia',
    introTitle: 'Recuperación de Cartera Vencida para Empresas en Barranquilla',
    introParagraphs: [
      'Barranquilla es el principal nodo logístico e industrial de la Costa Caribe. Comercio exterior, transporte, distribución y construcción conforman un tejido empresarial donde los plazos de pago extendidos son la norma y la cartera vencida, una consecuencia frecuente.',
      'Grupo Coactiva SAS gestiona cartera de empresas del Atlántico desde su estructura nacional, aplicando el mismo protocolo de cobranza prejurídica y jurídica que en sus sedes de Medellín y Bogotá.',
      'Trabajamos con obligaciones empresariales a partir de $10.000.000 COP y asignamos a cada cartera un ejecutivo responsable, con respaldo inmediato del equipo jurídico cuando la negociación no prospera.',
    ],
    highlights: [
      {
        title: 'Cobertura en la Costa Caribe',
        description:
          'Atendemos empresas de Barranquilla, Soledad, Malambo y el resto del Atlántico, además de Cartagena y Santa Marta.',
      },
      {
        title: 'Experiencia en Logística y Distribución',
        description:
          'Sectores con alta rotación de facturas y múltiples contrapartes, donde la trazabilidad documental es determinante para el cobro.',
      },
      {
        title: 'Vía Jurídica en Cualquier Juzgado del País',
        description:
          'Nuestros abogados radican el proceso ejecutivo ante el juzgado competente, incluido el circuito de Barranquilla.',
      },
      {
        title: 'Pago por Resultados',
        description:
          'Honorarios únicamente sobre el monto efectivamente recuperado, sin costos fijos ni anticipos.',
      },
    ],
    serviceVariants: [
      {
        title: 'Cobro de cartera en Barranquilla',
        description:
          'Cobro de facturas, pagarés y contratos vencidos con deudores domiciliados en Barranquilla y el Atlántico.',
      },
      {
        title: 'Cobranza de cartera en Barranquilla',
        description:
          'Gestión de cobranza empresarial con contacto directo, acuerdos documentados y seguimiento del cumplimiento.',
      },
      {
        title: 'Recuperación de cartera en la Costa Caribe',
        description:
          'Recuperación de deudas B2B para empresas de Atlántico, Bolívar y Magdalena.',
      },
      {
        title: 'Casa de cobranza para empresas del Atlántico',
        description:
          'Gestión persona a persona con abogados propios, como alternativa a la cobranza masiva por call center.',
      },
    ],
    whyUs: [
      'Cobertura para empresas de Barranquilla y toda la Costa Caribe',
      'Protocolo de cobranza idéntico al de nuestras sedes',
      'Equipo propio de 18 ejecutivos y 7 abogados especializados',
      'Modelo de pago por resultados: solo paga si recuperamos',
      'Experiencia en logística, distribución y construcción',
      'Atendemos obligaciones empresariales desde $10.000.000 COP',
    ],
    faqs: [
      {
        question: '¿Atienden empresas en Barranquilla y la Costa Caribe?',
        answer:
          'Sí. Gestionamos cartera vencida de empresas de Barranquilla, el Atlántico y el resto de la Costa Caribe desde nuestra estructura nacional, con sedes en Medellín y Bogotá.',
      },
      {
        question: '¿Pueden iniciar un proceso ejecutivo en Barranquilla?',
        answer:
          'Sí. Cuando la gestión prejurídica se agota, nuestros abogados radican el proceso ejecutivo ante el juzgado competente según el domicilio del deudor, incluidos los juzgados de Barranquilla.',
      },
      {
        question: '¿Qué documentos necesito para iniciar el cobro?',
        answer:
          'Facturas electrónicas aceptadas, pagarés, contratos, órdenes de compra o actas de entrega, junto con el estado de cuenta del deudor. Analizamos la documentación sin costo antes de iniciar.',
      },
      {
        question: '¿Cuánto cobra la cobranza empresarial en Barranquilla?',
        answer:
          'Entre el 5% y el 20% sobre el monto efectivamente recuperado, según antigüedad, cuantía y si el caso llega a la vía jurídica. Sin costos fijos ni anticipos.',
      },
    ],
    relatedArticleSlugs: [
      'cobro-facturas-electronicas-proceso-juridico',
      'recuperacion-cartera-b2b-colombia-estrategias',
      'proceso-ejecutivo-cobro-colombia-guia',
    ],
  },

  bucaramanga: {
    slug: 'bucaramanga',
    cityName: 'Bucaramanga',
    cityFullName: 'Bucaramanga, Santander',
    cityRegion: 'Santander',
    hasOffice: false,
    geo: { lat: '7.119349', lng: '-73.122742' },
    heroEyebrow: 'Cobertura Santander',
    heroTitle: 'Cobro de Cartera Empresarial en Bucaramanga',
    heroDescription:
      'Recuperación de cartera vencida para empresas de Bucaramanga y Santander, con gestión personalizada, abogados propios y pago por resultados.',
    cityFullAddress: 'Bucaramanga, Santander, Colombia',
    introTitle: 'Recuperación de Cartera Vencida para Empresas en Bucaramanga',
    introParagraphs: [
      'El área metropolitana de Bucaramanga concentra manufactura, calzado, salud, comercio y servicios petroleros. Es un tejido empresarial con alta interdependencia entre proveedores, donde una cartera vencida se propaga rápidamente por la cadena de pagos.',
      'Grupo Coactiva SAS atiende empresas santandereanas con el mismo equipo y el mismo protocolo de gestión que aplica en sus sedes de Medellín y Bogotá: cobranza prejurídica documentada y escalamiento jurídico cuando corresponde.',
      'Cada obligación se asigna a un ejecutivo responsable que mantiene la interlocución con el deudor y reporta el avance del caso a su empresa.',
    ],
    highlights: [
      {
        title: 'Cobertura en Santander',
        description:
          'Atendemos empresas de Bucaramanga, Floridablanca, Girón, Piedecuesta y el resto del departamento.',
      },
      {
        title: 'Experiencia en Salud y Manufactura',
        description:
          'Dos de los sectores con mayor concentración de cartera vencida en la región, con contrapartes y ciclos de pago propios.',
      },
      {
        title: 'Abogados Propios para la Vía Ejecutiva',
        description:
          'No subcontratamos el proceso jurídico: nuestro equipo legal radica y hace seguimiento del expediente.',
      },
      {
        title: 'Honorarios sobre lo Recuperado',
        description:
          'Sin costos fijos ni anticipos. Su empresa solo paga cuando el dinero entra.',
      },
    ],
    serviceVariants: [
      {
        title: 'Cobro de cartera en Bucaramanga',
        description:
          'Cobro de obligaciones empresariales vencidas con deudores domiciliados en Bucaramanga y su área metropolitana.',
      },
      {
        title: 'Cobranza de cartera en Bucaramanga',
        description:
          'Cobranza B2B persona a persona, con acuerdos de pago documentados y control de cumplimiento.',
      },
      {
        title: 'Recuperación de cartera en Santander',
        description:
          'Recuperación de deudas empresariales desde $10.000.000 COP en todo el departamento.',
      },
      {
        title: 'Casa de cobranza para empresas santandereanas',
        description:
          'Gestión especializada con respaldo jurídico, orientada a preservar la relación comercial.',
      },
    ],
    whyUs: [
      'Cobertura para empresas de Bucaramanga y todo Santander',
      'Ejecutivo dedicado por cartera asignada',
      'Equipo propio de 18 ejecutivos y 7 abogados especializados',
      'Modelo de pago por resultados: solo paga si recuperamos',
      'Gestión prejurídica antes de escalar a la vía jurídica',
      'Atendemos obligaciones empresariales desde $10.000.000 COP',
    ],
    faqs: [
      {
        question: '¿Grupo Coactiva SAS atiende empresas en Bucaramanga?',
        answer:
          'Sí. Gestionamos cartera vencida de empresas de Bucaramanga y todo Santander desde nuestra estructura nacional, con el mismo protocolo que aplicamos en Medellín y Bogotá.',
      },
      {
        question: '¿Cómo se gestiona el cobro sin oficina en la ciudad?',
        answer:
          'La gestión prejurídica es remota y permanente, con un ejecutivo dedicado. Para la vía jurídica, nuestros abogados radican el proceso ejecutivo ante el juzgado competente en Bucaramanga y hacen seguimiento del expediente.',
      },
      {
        question: '¿Trabajan cartera del sector salud en Santander?',
        answer:
          'Sí. Tenemos experiencia en recuperación de cartera del sector salud, incluidos flujos entre EPS, IPS y proveedores, donde las glosas y el giro directo condicionan la estrategia de cobro.',
      },
      {
        question: '¿Desde qué monto gestionan una cartera?',
        answer:
          'Desde $10.000.000 COP por obligación. Ese umbral nos permite dedicar un ejecutivo y, si es necesario, respaldo jurídico a cada caso.',
      },
    ],
    relatedArticleSlugs: [
      'recuperacion-cartera-sector-salud-colombia',
      'senales-cliente-no-paga-prevencion-cartera',
      'recuperacion-cartera-b2b-colombia-estrategias',
    ],
  },
};
