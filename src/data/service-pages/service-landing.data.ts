/**
 * Landings de intención comercial de cabecera.
 *
 * Cubren las variantes de búsqueda que la página de servicios no puede
 * atender sin canibalizarse a sí misma: "cobranza de cartera",
 * "recuperación de cartera / de deudas", "casa de cobranza" y
 * "abogados de cobranza". Cada una tiene un ángulo propio (proceso,
 * resultado, proveedor y equipo jurídico) para evitar solapamiento.
 */

export interface ServiceSection {
  title: string;
  paragraphs: string[];
}

export interface ServiceBullet {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceLandingData {
  slug: string;
  /** Título de <title>, sin marca (el template la añade). <= 39 caracteres. */
  seoTitle: string;
  metaDescription: string;
  /** Términos que la página cubre; alimentan el `alternateName` del schema. */
  alternateNames: string[];
  heroEyebrow: string;
  h1: string;
  heroDescription: string;
  answerBox: string;
  sections: ServiceSection[];
  bullets: ServiceBullet[];
  faqs: ServiceFAQ[];
  relatedArticleSlugs: string[];
  relatedCitySlugs: string[];
}

export const serviceLandings: Record<string, ServiceLandingData> = {
  'cobranza-de-cartera': {
    slug: 'cobranza-de-cartera',
    seoTitle: 'Cobranza de Cartera para Empresas',
    metaDescription:
      'Cobranza de cartera empresarial en Colombia: gestión persona a persona, acuerdos de pago documentados y escalamiento jurídico. Solo paga si recuperamos.',
    alternateNames: [
      'Cobranza de cartera',
      'Cobranza de cartera Medellín',
      'Cobranza de cartera Bogotá',
      'Cobranza de cartera Colombia',
      'Cobranza empresarial',
      'Cobro de cartera',
    ],
    heroEyebrow: 'Servicio nacional',
    h1: 'Cobranza de Cartera para Empresas en Colombia',
    heroDescription:
      'Gestionamos la cobranza de cartera vencida de su empresa persona a persona, sin call center masivo, con abogados propios listos para escalar el caso cuando la negociación se agota.',
    answerBox:
      'La cobranza de cartera es el conjunto de gestiones que una empresa realiza para conseguir el pago de obligaciones vencidas. En Grupo Coactiva SAS la ejecutamos en dos fases: una gestión prejurídica de contacto y negociación, y —si no prospera— un proceso ejecutivo ante los juzgados. Trabajamos obligaciones empresariales desde $10.000.000 COP con honorarios entre el 5% y el 20% sobre lo efectivamente recuperado.',
    sections: [
      {
        title: '¿Qué incluye nuestro servicio de cobranza de cartera?',
        paragraphs: [
          'La cobranza empieza mucho antes de la primera llamada. Analizamos la documentación de la obligación —facturas electrónicas, pagarés, contratos, actas y órdenes de compra—, verificamos su exigibilidad y determinamos si constituye título ejecutivo. Ese diagnóstico define la estrategia y no tiene costo.',
          'A partir de ahí asignamos un ejecutivo responsable que mantiene la interlocución con el deudor, deja constancia documental de cada contacto y estructura las alternativas de pago. Toda la gestión se realiza dentro del marco de la cobranza ética y de la normativa de habeas data vigente en Colombia.',
          'Si la vía prejurídica se agota, el mismo equipo escala el caso a nuestros abogados, que radican el proceso ejecutivo y solicitan las medidas cautelares que correspondan. Su empresa no tiene que buscar un tercero ni volver a explicar el caso.',
        ],
      },
      {
        title: 'Cobranza prejurídica y cobranza jurídica: cuándo aplica cada una',
        paragraphs: [
          'La cobranza prejurídica busca el pago voluntario y preserva la relación comercial. Es la vía adecuada cuando el deudor sigue operando, reconoce la deuda y el problema es de flujo de caja. Nuestra gestión prejurídica típica se desarrolla en un plazo de hasta 20 días antes de recomendar el escalamiento.',
          'La cobranza jurídica aplica cuando el deudor desconoce la obligación, incumple los acuerdos pactados o presenta señales de deterioro patrimonial. Requiere título ejecutivo y abre la posibilidad de medidas cautelares sobre bienes, cuentas y créditos del deudor.',
        ],
      },
    ],
    bullets: [
      {
        title: 'Ejecutivo dedicado por cartera',
        description:
          'Cada obligación tiene un responsable con nombre propio que reporta el avance, no un sistema de marcación automática.',
      },
      {
        title: 'Abogados propios, no subcontratados',
        description:
          '7 abogados especializados en cobro empresarial asumen la vía ejecutiva sin cambiar de proveedor a mitad del proceso.',
      },
      {
        title: 'Honorarios sobre lo recuperado',
        description:
          'Entre el 5% y el 20% del monto efectivamente recuperado. Sin cuotas fijas, sin anticipos.',
      },
      {
        title: 'Trazabilidad documental',
        description:
          'Cada gestión queda registrada, lo que sostiene tanto la negociación como una eventual demanda.',
      },
    ],
    faqs: [
      {
        question: '¿Qué diferencia hay entre cobranza de cartera y cobro de cartera?',
        answer:
          'En la práctica comercial colombiana se usan como sinónimos. "Cobranza de cartera" suele referirse al proceso de gestión continuada, y "cobro de cartera" al acto de exigir el pago de una obligación concreta. Grupo Coactiva SAS presta ambos: gestión continuada de la cartera de la empresa y cobro de obligaciones puntuales.',
      },
      {
        question: '¿Cuánto tarda la cobranza de una cartera vencida?',
        answer:
          'La gestión prejurídica se desarrolla en un plazo de hasta 20 días. Si el caso escala a proceso ejecutivo, los tiempos dependen del juzgado, de las medidas cautelares y de si el deudor propone excepciones; en Colombia un ejecutivo puede tomar entre varios meses y un par de años.',
      },
      {
        question: '¿Desde qué monto gestionan cobranza empresarial?',
        answer:
          'Desde $10.000.000 COP por obligación. Ese umbral nos permite asignar un ejecutivo dedicado y respaldo jurídico a cada caso, en lugar de gestionar volumen de forma masiva.',
      },
      {
        question: '¿La cobranza daña la relación con mi cliente?',
        answer:
          'No si se gestiona correctamente. Nuestro protocolo prioriza el acuerdo y la interlocución respetuosa: en la mayoría de los casos la relación comercial se conserva y el cliente vuelve a comprar una vez normaliza el pago.',
      },
    ],
    relatedArticleSlugs: [
      'importancia-cobro-prejudico-colombia',
      'acuerdos-pago-empresariales-negociacion-colombia',
      'como-recuperar-cartera-vencida-sin-danar-relacion-comercial',
      'cobranza-etica-colombia-que-esta-permitido',
    ],
    relatedCitySlugs: ['medellin', 'bogota'],
  },

  'recuperacion-de-cartera': {
    slug: 'recuperacion-de-cartera',
    seoTitle: 'Recuperación de Cartera y Deudas',
    metaDescription:
      'Recuperación de cartera y de deudas empresariales en Colombia. Diagnóstico gratuito, gestión prejurídica y proceso ejecutivo con abogados propios.',
    alternateNames: [
      'Recuperación de cartera',
      'Recuperación de cartera Colombia',
      'Recuperación de cartera Medellín',
      'Recuperación de cartera Bogotá',
      'Recuperación de deudas',
      'Recuperación de deudas empresariales',
      'Recuperación de cartera vencida',
    ],
    heroEyebrow: 'Resultados medibles',
    h1: 'Recuperación de Cartera y de Deudas Empresariales',
    heroDescription:
      'Convertimos cartera vencida en caja. Analizamos su cartera sin costo, priorizamos por recuperabilidad y ejecutamos la vía —prejurídica o judicial— que maximiza el retorno.',
    answerBox:
      'La recuperación de cartera es el proceso de convertir obligaciones vencidas en dinero efectivamente cobrado. Grupo Coactiva SAS lo aborda en tres pasos: diagnóstico documental sin costo, priorización de la cartera por antigüedad y recuperabilidad, y ejecución por vía prejurídica o judicial según el caso. La empresa solo paga honorarios sobre el monto realmente recuperado.',
    sections: [
      {
        title: 'Cómo priorizamos una cartera para maximizar la recuperación',
        paragraphs: [
          'No toda la cartera vencida se recupera igual. La antigüedad de la obligación, la solidez del título, la situación patrimonial del deudor y la existencia de garantías determinan la probabilidad real de cobro. Por eso el primer paso siempre es un diagnóstico de la cartera completa, no una gestión indiscriminada.',
          'Con ese mapa, concentramos el esfuerzo donde el retorno es mayor y definimos para el resto una estrategia distinta: acuerdos de pago, reestructuración de la obligación o, cuando corresponde, el reporte a centrales de riesgo dentro del marco legal.',
        ],
      },
      {
        title: 'Recuperación de deudas por vía judicial',
        paragraphs: [
          'Cuando la obligación consta en un título ejecutivo —pagaré, factura electrónica aceptada, contrato con obligación clara, expresa y exigible— es posible acudir al proceso ejecutivo. El juez libra mandamiento de pago y pueden decretarse medidas cautelares sobre bienes y cuentas del deudor.',
          'Nuestros abogados asumen la radicación, el impulso procesal y el seguimiento del expediente. La empresa acreedora recibe reportes del estado del proceso sin tener que gestionar el trámite judicial por su cuenta.',
        ],
      },
    ],
    bullets: [
      {
        title: 'Diagnóstico de cartera sin costo',
        description:
          'Revisamos documentación, exigibilidad y prescripción antes de proponer cualquier estrategia.',
      },
      {
        title: 'Priorización por recuperabilidad',
        description:
          'El esfuerzo se concentra donde hay retorno real, no de forma uniforme sobre toda la base.',
      },
      {
        title: 'Cobertura nacional',
        description:
          'Sedes en Medellín y Bogotá, y gestión de deudores domiciliados en cualquier ciudad del país.',
      },
      {
        title: 'Reporte periódico',
        description:
          'Su empresa conoce el estado de cada obligación y el resultado agregado de la gestión.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es la recuperación de cartera?',
        answer:
          'Es el proceso mediante el cual una empresa consigue el pago de obligaciones que ya están vencidas. Incluye el diagnóstico documental, la gestión de cobro prejurídica, la negociación de acuerdos de pago y, si es necesario, el proceso ejecutivo ante los juzgados.',
      },
      {
        question: '¿Se puede recuperar cartera muy antigua?',
        answer:
          'Depende de la prescripción del título y de la situación del deudor. Un pagaré prescribe a los tres años desde su vencimiento y una factura tiene sus propios términos. Por eso el diagnóstico previo es determinante: revisamos si la obligación sigue siendo exigible antes de invertir esfuerzo en ella.',
      },
      {
        question: '¿Recuperan cartera en toda Colombia?',
        answer:
          'Sí. Tenemos sede física en Medellín y oficina en Bogotá, y gestionamos deudores domiciliados en cualquier ciudad del país, incluidas Cali, Barranquilla, Bucaramanga y Cartagena.',
      },
      {
        question: '¿Qué pasa si el deudor entra en insolvencia?',
        answer:
          'La obligación entra en un proceso colectivo regido por la Ley 1116 y su recuperación pasa a depender de la prelación de créditos. Es la principal razón para no aplazar la gestión: cuanto antes se actúa, mayor es el margen de maniobra.',
      },
    ],
    relatedArticleSlugs: [
      'recuperacion-cartera-b2b-colombia-estrategias',
      'proceso-ejecutivo-cobro-colombia-guia',
      'ley-1116-insolvencia-empresarial-cobrar-antes',
      'embargo-bienes-colombia-proceso-ejecutivo',
    ],
    relatedCitySlugs: ['medellin', 'bogota', 'cali'],
  },

  'casa-de-cobranza': {
    slug: 'casa-de-cobranza',
    seoTitle: 'Casa de Cobranza en Colombia',
    metaDescription:
      'Casa de cobranza en Colombia con sedes en Medellín y Bogotá: gestión persona a persona, abogados propios y honorarios sobre lo efectivamente recuperado.',
    alternateNames: [
      'Casa de cobranza en Colombia',
      'Casa de cobranza en Medellín',
      'Casa de cobranza en Bogotá',
      'Casa de cobranza',
      'Empresa de cobranza',
      'Empresa de cobro de cartera',
    ],
    heroEyebrow: 'Sedes en Medellín y Bogotá',
    h1: 'Casa de Cobranza en Colombia para Empresas',
    heroDescription:
      'Somos una casa de cobranza con equipo propio: 18 ejecutivos y 7 abogados. Sin call center masivo, sin costos fijos y con sede física donde reunirse con nosotros.',
    answerBox:
      'Una casa de cobranza es la empresa especializada a la que un acreedor le encarga la recuperación de su cartera vencida. Grupo Coactiva SAS opera como casa de cobranza B2B desde 2010, con sede principal en Laureles (Medellín) y oficina en la Zona Rosa (Bogotá), equipo propio de 18 ejecutivos y 7 abogados, y honorarios exclusivamente sobre el monto recuperado.',
    sections: [
      {
        title: 'Cómo elegir una casa de cobranza en Colombia',
        paragraphs: [
          'El mercado colombiano de cobranza mezcla perfiles muy distintos: call centers de cobranza masiva orientados a cartera de consumo, despachos jurídicos que solo actúan por vía judicial y casas de cobranza integrales que cubren ambas fases. Para cartera empresarial de mediana y alta cuantía, la tercera opción suele ser la que mejor rinde.',
          'Hay cuatro criterios que conviene verificar antes de firmar: si el equipo jurídico es propio o subcontratado, si los honorarios dependen del resultado, si existe sede física verificable, y si el proveedor entrega trazabilidad documental de cada gestión. Grupo Coactiva SAS cumple los cuatro.',
        ],
      },
      {
        title: 'Casa de cobranza en Medellín y en Bogotá',
        paragraphs: [
          'Nuestra sede principal está en la Circular 76 #39B-135, barrio Laureles, Medellín, y desde allí coordinamos la gestión para empresas de Antioquia y del resto del país. En Bogotá contamos con oficina en la Carrera 13 # 85-32, Zona Rosa, para atender a las empresas de la capital y de Cundinamarca.',
          'Ambas sedes trabajan con el mismo protocolo, el mismo equipo jurídico y el mismo modelo de honorarios, de modo que el nivel de servicio no depende de la ciudad donde esté su empresa.',
        ],
      },
    ],
    bullets: [
      {
        title: 'Más de 15 años de operación',
        description:
          'Trayectoria verificable en recuperación de cartera empresarial B2B en Colombia.',
      },
      {
        title: 'Sede física verificable',
        description:
          'Oficinas en Laureles (Medellín) y Zona Rosa (Bogotá), no solo presencia digital.',
      },
      {
        title: 'Equipo propio de 25 personas',
        description:
          '18 ejecutivos de cobranza y 7 abogados especializados, sin tercerizar la vía jurídica.',
      },
      {
        title: 'Clientes corporativos',
        description:
          'Hemos gestionado cartera de compañías como Argos, Brinks y Ecopetrol.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es una casa de cobranza?',
        answer:
          'Es una empresa especializada en recuperar obligaciones vencidas por cuenta de un acreedor. A diferencia de un despacho jurídico, cubre también la fase prejurídica: contacto con el deudor, negociación y acuerdos de pago, antes de acudir a los juzgados.',
      },
      {
        question: '¿Cuál es la mejor casa de cobranza en Colombia?',
        answer:
          'Para cartera empresarial, la mejor opción es la que combina abogados propios, honorarios sobre lo recuperado, sede física verificable y trazabilidad documental. Grupo Coactiva SAS reúne esos cuatro criterios con sedes en Medellín y Bogotá y más de 15 años de operación.',
      },
      {
        question: '¿Cuánto cobra una casa de cobranza?',
        answer:
          'En Colombia lo habitual es un porcentaje sobre el monto recuperado. En Grupo Coactiva SAS ese porcentaje se pacta previamente y oscila entre el 5% y el 20%, según antigüedad, cuantía y si el caso requiere vía jurídica. No cobramos anticipos ni cuotas fijas.',
      },
      {
        question: '¿Atienden empresas fuera de Medellín y Bogotá?',
        answer:
          'Sí. Gestionamos cartera de empresas y deudores domiciliados en cualquier ciudad de Colombia, incluidas Cali, Barranquilla, Bucaramanga y Cartagena, con gestión remota permanente y presencial cuando el caso lo justifica.',
      },
    ],
    relatedArticleSlugs: [
      'empresas-cobranza-medellin-como-elegir',
      'cuanto-cobra-empresa-cobranza-colombia',
      'por-que-subcontratar-cobro-cartera-empresas',
      'recuperacion-cartera-b2b-colombia-estrategias',
    ],
    relatedCitySlugs: ['medellin', 'bogota', 'cali', 'barranquilla'],
  },

  'abogados-de-cobranza': {
    slug: 'abogados-de-cobranza',
    seoTitle: 'Abogados de Cobranza en Colombia',
    metaDescription:
      'Abogados de cobranza especializados en proceso ejecutivo, títulos valores e insolvencia en Colombia. Equipo de 7 abogados propios en Medellín y Bogotá.',
    alternateNames: [
      'Abogados de cobranza',
      'Abogados de cobranza Medellín',
      'Abogados de cobranza Bogotá',
      'Abogados para cobro de cartera',
      'Abogados cobro jurídico Colombia',
    ],
    heroEyebrow: 'Equipo jurídico propio',
    h1: 'Abogados de Cobranza y Cobro Jurídico en Colombia',
    heroDescription:
      'Siete abogados especializados en cobro empresarial: proceso ejecutivo, medidas cautelares, títulos valores e insolvencia. La vía jurídica no se subcontrata.',
    answerBox:
      'Los abogados de cobranza son los profesionales que llevan la recuperación de una deuda por vía judicial cuando la gestión prejurídica no prospera. En Grupo Coactiva SAS el equipo jurídico es propio —7 abogados especializados— y asume el proceso ejecutivo completo: estudio del título, demanda, medidas cautelares y seguimiento del expediente hasta el pago.',
    sections: [
      {
        title: 'Qué hace un abogado de cobranza',
        paragraphs: [
          'Su primer trabajo es determinar si la obligación presta mérito ejecutivo: si consta en un documento que contenga una obligación clara, expresa y exigible, y si proviene del deudor o de su causante. De esa calificación depende que el cobro pueda tramitarse por la vía rápida del proceso ejecutivo o deba seguir un proceso declarativo.',
          'Después estructura la demanda, calcula capital e intereses de mora dentro del tope legal, solicita las medidas cautelares que correspondan sobre bienes, cuentas bancarias y créditos del deudor, y hace el seguimiento procesal hasta la liquidación del crédito.',
          'En paralelo, evalúa riesgos: prescripción del título, posible insolvencia del deudor, existencia de otros acreedores con mejor prelación y viabilidad real de recuperación frente al costo del proceso.',
        ],
      },
      {
        title: 'Cuándo conviene acudir a un abogado de cobranza',
        paragraphs: [
          'Cuando el deudor desconoce la obligación, incumple los acuerdos pactados, deja de responder o muestra señales de deterioro patrimonial. También cuando la obligación se acerca al plazo de prescripción, porque una vez cumplido el término deja de ser exigible judicialmente.',
          'En Grupo Coactiva SAS el escalamiento es interno: el mismo caso pasa del ejecutivo de cobranza al equipo jurídico sin cambiar de proveedor ni volver a documentar la obligación desde cero.',
        ],
      },
    ],
    bullets: [
      {
        title: 'Especialización en cobro empresarial',
        description:
          'Proceso ejecutivo, títulos valores, facturas electrónicas, garantías mobiliarias e insolvencia.',
      },
      {
        title: 'Escalamiento sin fricción',
        description:
          'El expediente pasa de cobranza a jurídica dentro de la misma firma, con la documentación ya integrada.',
      },
      {
        title: 'Radicación en todo el país',
        description:
          'Presentamos la demanda ante el juzgado competente según el domicilio del deudor.',
      },
      {
        title: 'Dirección jurídica identificable',
        description:
          'Nuestro director jurídico, Esteban Restrepo, encabeza el área y firma el contenido legal del sitio.',
      },
    ],
    faqs: [
      {
        question: '¿Cuándo necesito un abogado para cobrar una deuda?',
        answer:
          'Cuando la gestión directa no funciona, el deudor incumple acuerdos, desconoce la obligación o la deuda se acerca al plazo de prescripción. También cuando el monto justifica un proceso judicial y existe un título ejecutivo que lo respalde.',
      },
      {
        question: '¿Qué documentos necesita un abogado de cobranza?',
        answer:
          'El título que soporta la obligación —pagaré, factura electrónica aceptada, contrato, acta de entrega u orden de compra—, el estado de cuenta, la comunicación previa con el deudor y, cuando existan, las garantías constituidas.',
      },
      {
        question: '¿Los abogados de Grupo Coactiva SAS son propios o subcontratados?',
        answer:
          'Son propios. Contamos con un equipo de 7 abogados especializados en cobro empresarial vinculados a la firma, lo que permite que el caso escale de la fase prejurídica a la judicial sin cambiar de proveedor.',
      },
      {
        question: '¿Cobran honorarios por adelantado?',
        answer:
          'No. El modelo es de honorarios sobre el monto efectivamente recuperado, entre el 5% y el 20% según antigüedad, cuantía y complejidad. Los costos procesales de ley se acuerdan previamente con el cliente.',
      },
    ],
    relatedArticleSlugs: [
      'proceso-ejecutivo-cobro-colombia-guia',
      'pagare-vencido-como-cobrar-legalmente-colombia',
      'derechos-acreedor-colombia-cobro-cartera',
      'cobro-facturas-electronicas-proceso-juridico',
    ],
    relatedCitySlugs: ['medellin', 'bogota'],
  },
};
