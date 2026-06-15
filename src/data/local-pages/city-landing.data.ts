export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityHighlight {
  title: string;
  description: string;
}

export interface CityLandingData {
  slug: 'medellin' | 'bogota';
  cityName: string;
  cityFullName: string;
  schemaId: string; // referencia al @id definido en schemaOrgJSONLD (root layout)
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  address: string;
  cityFullAddress: string;
  embedUrl: string;
  introTitle: string;
  introParagraphs: string[];
  highlights: CityHighlight[];
  whyUs: string[];
  faqs: CityFAQ[];
  relatedArticleSlug?: string;
}

export const cityLandingData: Record<string, CityLandingData> = {
  medellin: {
    slug: 'medellin',
    cityName: 'Medellín',
    cityFullName: 'Medellín, Antioquia',
    schemaId: '#sede-medellin',
    heroEyebrow: 'Sede Principal',
    heroTitle: 'Cobro de Cartera Empresarial en Medellín',
    heroDescription:
      'Recuperamos la cartera vencida de su empresa con sede física en Laureles, equipo propio de abogados y ejecutivos, y cobertura en toda Antioquia.',
    address: 'Circular 76 #39B-135, Laureles',
    cityFullAddress: 'Circular 76 #39B-135, Laureles, Medellín, Antioquia',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0234567890123!2d-75.5678901234567!3d6.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290123456789%3A0x1234567890abcdef!2sCircular%2076%20%23%2039B-135%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco',
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
        question: '¿Cuánto cobra Grupo Coactiva SAS por el servicio?',
        answer:
          'El costo se pacta previamente y oscila entre el 5% y el 20% sobre el monto efectivamente recuperado, dependiendo de la antigüedad de la deuda, el monto y si la gestión requiere vía jurídica. Solo paga si recuperamos su dinero.',
      },
    ],
    relatedArticleSlug: 'empresas-cobranza-medellin-como-elegir',
  },

  bogota: {
    slug: 'bogota',
    cityName: 'Bogotá',
    cityFullName: 'Bogotá, Cundinamarca',
    schemaId: '#sede-bogota',
    heroEyebrow: 'Sede Bogotá',
    heroTitle: 'Cobro de Cartera Empresarial en Bogotá',
    heroDescription:
      'Atendemos a su empresa en Bogotá con el mismo modelo de gestión personalizada, pago por resultados y respaldo jurídico que nos respalda en todo el país.',
    address: 'Carrera 13 # 85-32, Zona Rosa',
    cityFullAddress: 'Carrera 13 # 85-32, Zona Rosa, Bogotá, Cundinamarca',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.433650761865!2d-74.06454699999999!3d4.694468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac52ff727b7%3A0xd1519e335fabf67e!2zQ2wuIDEwNiAjIDU0LTkzLCBTdWJhLCBCb2dvdMOhLCBELkMuLCBCb2dvdMOhLCBCb2dvdMOhLCBELkMu!5e0!3m2!1ses-419!2sco!4v1750735126127!5m2!1ses-419!2sco',
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
    relatedArticleSlug: 'recuperacion-cartera-b2b-colombia-estrategias',
  },
};