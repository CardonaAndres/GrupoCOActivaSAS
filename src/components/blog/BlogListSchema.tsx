import { blogPosts } from '@/app/blog-grupo-coactiva/data/posts.data';
import { blogSeo } from '@/app/blog-grupo-coactiva/data/blog-taxonomy.data';
import { SITE_URL } from '@/global/seo/site.config';

interface Props {
  path: string;
  name: string;
  description: string;
  slugs: string[];
  breadcrumb?: { name: string };
}

/**
 * `CollectionPage` + `ItemList` para índices y páginas de categoría.
 * Da a Google y a los motores de IA una lectura explícita del inventario de
 * contenido y de la estructura del hub.
 */
export const BlogListSchema = ({ path, name, description, slugs, breadcrumb }: Props) => {
  const url = `${SITE_URL}${path}`;

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name,
    description,
    inLanguage: 'es-CO',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: slugs.length,
      itemListElement: slugs.map((slug, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog-grupo-coactiva/${slug}`,
        name: blogSeo[slug]?.seoTitle ?? blogPosts[slug]?.content.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog-grupo-coactiva`,
      },
      ...(breadcrumb
        ? [{ '@type': 'ListItem', position: 3, name: breadcrumb.name, item: url }]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
};
