import { MetadataRoute } from 'next';
import { blogPosts } from './blog-grupo-coactiva/data/posts.data';
import { postDates } from './blog-grupo-coactiva/data/post-dates.data';
import { blogCategories, postsByCategory } from './blog-grupo-coactiva/data/blog-taxonomy.data';
import { cityLandingData } from '@/data/local-pages/city-landing.data';
import { serviceLandings } from '@/data/service-pages/service-landing.data';
import { BLOG_PAGE_SIZE } from './blog-grupo-coactiva/data/blog-pagination';
import { SITE_URL } from '@/global/seo/site.config';

/**
 * Fecha de última revisión real del contenido de cada ruta estática.
 *
 * Punto A6 del diagnóstico: antes se usaba `new Date()`, de modo que cada
 * despliegue reportaba las 8 URLs estáticas como modificadas aunque su
 * contenido no hubiera cambiado, degradando la fiabilidad de la señal.
 * Actualice estas fechas SOLO cuando el contenido de la página cambie.
 */
const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-08-22',
  '/nuestros-servicios/cobro-de-cartera': '2026-08-22',
  '/quienes-somos-grupo-coactiva': '2026-08-22',
  '/comunicate-con-grupo-coactiva': '2026-08-22',
  '/blog-grupo-coactiva': '2026-08-22',
  '/politica-de-privacidad-coactiva': '2026-08-22',
  '/cobranza-de-cartera': '2026-08-22',
  '/recuperacion-de-cartera': '2026-08-22',
  '/casa-de-cobranza': '2026-08-22',
  '/abogados-de-cobranza': '2026-08-22',
  '/cobro-de-cartera/medellin': '2026-08-22',
  '/cobro-de-cartera/bogota': '2026-08-22',
  '/cobro-de-cartera/cali': '2026-08-22',
  '/cobro-de-cartera/barranquilla': '2026-08-22',
  '/cobro-de-cartera/bucaramanga': '2026-08-22',
};

const lastmod = (path: string): Date =>
  new Date(STATIC_LASTMOD[path] ?? '2026-08-22');

const entry = (
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  priority: number
): MetadataRoute.Sitemap[number] => ({
  url: `${SITE_URL}${path === '/' ? '' : path}`,
  lastModified: lastmod(path),
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    entry('/', 'weekly', 1),
    entry('/nuestros-servicios/cobro-de-cartera', 'monthly', 0.9),
    entry('/quienes-somos-grupo-coactiva', 'monthly', 0.7),
    entry('/comunicate-con-grupo-coactiva', 'monthly', 0.7),
    entry('/blog-grupo-coactiva', 'weekly', 0.8),
    entry('/politica-de-privacidad-coactiva', 'yearly', 0.2),
  ];

  const serviceLandingRoutes: MetadataRoute.Sitemap = Object.keys(serviceLandings).map(
    (slug) => entry(`/${slug}`, 'monthly', 0.9)
  );

  const cityRoutes: MetadataRoute.Sitemap = Object.keys(cityLandingData).map((ciudad) =>
    entry(`/cobro-de-cartera/${ciudad}`, 'monthly', 0.85)
  );

  // Páginas de categoría: hubs del modelo hub-and-spoke (bloque D).
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(blogCategories).map((slug) => {
    const posts = postsByCategory(slug as keyof typeof blogCategories);
    const dates = posts
      .map((s) => postDates[s]?.updatedAt ?? postDates[s]?.publishedAt)
      .filter(Boolean)
      .sort();
    return {
      url: `${SITE_URL}/blog-grupo-coactiva/categoria/${slug}`,
      lastModified: new Date(dates[dates.length - 1] ?? '2026-08-22'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  const totalPages = Math.ceil(Object.keys(blogPosts).length / BLOG_PAGE_SIZE);
  const blogPaginationRoutes: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(totalPages - 1, 0) },
    (_, index) => ({
      url: `${SITE_URL}/blog-grupo-coactiva/pagina/${index + 2}`,
      lastModified: lastmod('/blog-grupo-coactiva'),
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = Object.keys(blogPosts).map((slug) => ({
    url: `${SITE_URL}/blog-grupo-coactiva/${slug}`,
    lastModified: new Date(
      postDates[slug]?.updatedAt ?? postDates[slug]?.publishedAt ?? '2026-08-22'
    ),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceLandingRoutes,
    ...cityRoutes,
    ...categoryRoutes,
    ...blogPaginationRoutes,
    ...blogRoutes,
  ];
}