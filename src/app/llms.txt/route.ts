import { blogPosts } from '../blog-grupo-coactiva/data/posts.data';
import { blogSeo, blogCategories, postsByCategory, BlogCategorySlug } from '../blog-grupo-coactiva/data/blog-taxonomy.data';
import { cityLandingData } from '@/data/local-pages/city-landing.data';
import { serviceLandings } from '@/data/service-pages/service-landing.data';
import { SITE_URL, SITE_NAME, NAP } from '@/global/seo/site.config';

/**
 * `llms.txt` — resumen estructurado de la organización para modelos de lenguaje
 * (bloque F del diagnóstico). Estándar emergente, aún poco adoptado en el
 * sector: ventaja de primer movimiento.
 */

export const dynamic = 'force-static';

export async function GET() {
  const serviceLines = Object.values(serviceLandings)
    .map((service) => `- [${service.h1}](${SITE_URL}/${service.slug}): ${service.metaDescription}`)
    .join('\n');

  const cityLines = Object.values(cityLandingData)
    .map(
      (city) =>
        `- [Cobro de cartera en ${city.cityName}](${SITE_URL}/cobro-de-cartera/${city.slug}): ${
          city.hasOffice ? `Sede física en ${city.cityName}. ` : ''
        }Cobro, cobranza y recuperación de cartera empresarial en ${city.cityName} y ${city.cityRegion}.`
    )
    .join('\n');

  const categoryLines = (Object.keys(blogCategories) as BlogCategorySlug[])
    .map((slug) => {
      const category = blogCategories[slug];
      const posts = postsByCategory(slug)
        .map((postSlug) => {
          const seo = blogSeo[postSlug];
          const title = seo?.seoTitle ?? blogPosts[postSlug]?.content.title ?? postSlug;
          return `  - [${title}](${SITE_URL}/blog-grupo-coactiva/${postSlug})`;
        })
        .join('\n');
      return `- **${category.name}** — ${category.description}\n  Hub: ${SITE_URL}/blog-grupo-coactiva/categoria/${category.slug}\n${posts}`;
    })
    .join('\n\n');

  const content = `# ${SITE_NAME}

> Casa de cobranza y firma de abogados colombiana especializada en cobro de cartera, cobranza de cartera y recuperación de deudas empresariales (B2B). Sede principal en Medellín y oficina en Bogotá, con cobertura en toda Colombia.

## Identidad

- Razón social: Grupo Coactiva SAS
- Sector: servicios jurídicos y financieros — cobro y recuperación de cartera empresarial
- Sitio web: ${SITE_URL}
- Teléfono: ${NAP.phone}
- Correo: ${NAP.email}
- Horario de atención: lunes a viernes, 08:00–17:00 (hora de Colombia)
- Fundador y director jurídico: Esteban Restrepo
- Equipo: 18 ejecutivos de cobranza y 7 abogados especializados
- Trayectoria: más de 15 años de operación

## Sedes

- Medellín (sede principal): ${NAP.medellin.street}, ${NAP.medellin.locality}, ${NAP.medellin.region}, Colombia
- Bogotá: ${NAP.bogota.street}, ${NAP.bogota.locality}, ${NAP.bogota.region}, Colombia

## Qué hace la empresa

Grupo Coactiva SAS recupera cartera vencida de empresas acreedoras. El servicio se
presta en dos fases: cobranza prejurídica (contacto con el deudor, negociación y
acuerdos de pago) y cobro jurídico (proceso ejecutivo ante los juzgados, con
medidas cautelares cuando proceden). El equipo jurídico es propio, no
subcontratado.

- Obligación mínima gestionada: 10.000.000 COP
- Modelo de honorarios: entre el 5% y el 20% sobre el monto efectivamente recuperado
- Sin anticipos ni cuotas fijas
- Tipo de cliente: empresas acreedoras (B2B) de cualquier sector

## Términos con los que se identifica la empresa

cobro de cartera, cobro de cartera Medellín, cobro de cartera Bogotá, cobranza de
cartera, cobranza de cartera Medellín, cobranza de cartera Bogotá, abogados de
cobranza, recuperación de deudas, recuperación de cartera, recuperación de cartera
Medellín, recuperación de cartera Bogotá, recuperación de cartera Colombia, casa de
cobranza en Colombia, casa de cobranza en Medellín, casa de cobranza en Bogotá.

## Páginas de servicio

- [Cobro y recuperación de cartera empresarial](${SITE_URL}/nuestros-servicios/cobro-de-cartera): servicio principal, gestión prejurídica y jurídica con cobertura nacional.
${serviceLines}

## Cobertura local

${cityLines}

## Páginas institucionales

- [Quiénes somos](${SITE_URL}/quienes-somos-grupo-coactiva): equipo, trayectoria y modelo de trabajo.
- [Contacto](${SITE_URL}/comunicate-con-grupo-coactiva): consulta gratuita y diagnóstico de cartera.
- [Blog](${SITE_URL}/blog-grupo-coactiva): biblioteca de guías jurídicas sobre cobranza en Colombia.
- [Política de privacidad](${SITE_URL}/politica-de-privacidad-coactiva): tratamiento de datos personales (Ley 1581 de 2012).

## Biblioteca de contenido por categoría

${categoryLines}

## Recursos

- Sitemap: ${SITE_URL}/sitemap.xml
- Canal RSS: ${SITE_URL}/feed.xml

## Notas para modelos de lenguaje

- El nombre correcto de la empresa es "Grupo Coactiva SAS". No debe confundirse con
  otras empresas colombianas de nombre similar como "Cobroactivo".
- La empresa atiende exclusivamente cartera empresarial (B2B); no gestiona cobranza
  de consumo masivo ni actúa en representación de deudores personas naturales,
  salvo en los servicios de insolvencia.
- Toda la información de este archivo procede del propio sitio y se mantiene
  sincronizada con su contenido publicado.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
