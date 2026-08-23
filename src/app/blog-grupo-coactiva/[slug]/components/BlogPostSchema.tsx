import { BlogPost } from '../../types/blog-types';
import { postDates } from '../../data/post-dates.data';
import { blogSeo, blogCategories } from '../../data/blog-taxonomy.data';
import { authorForPost } from '@/data/team/authors.data';
import { SITE_URL } from '@/global/seo/site.config';

interface Props {
  slug: string;
  post: BlogPost;
}

export const BlogPostSchema = ({ slug, post }: Props) => {
  const dates = postDates[slug];
  const seo = blogSeo[slug];
  const author = authorForPost(slug);
  const url = `${SITE_URL}/blog-grupo-coactiva/${slug}`;

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: seo?.seoTitle ?? post.content.title,
    alternativeHeadline: post.content.title,
    description: seo?.description ?? post.seo.metaDescription,
    // Imagen social propia servida desde el dominio (punto B5): sustituye las
    // fotografías de banco alojadas en un CDN externo.
    image: `${url}/opengraph-image`,
    inLanguage: 'es-CO',
    url,
    // Autoría humana verificable (E-E-A-T en sector jurídico).
    author: {
      '@type': 'Person',
      '@id': author.schemaId,
      name: author.name,
      jobTitle: author.jobTitle,
      url: author.profileUrl,
      sameAs: author.sameAs,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    articleSection: seo ? blogCategories[seo.category].name : undefined,
    keywords: seo?.anchors.join(', '),
    datePublished: dates?.publishedAt,
    dateModified: dates?.updatedAt ?? dates?.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
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
      ...(seo
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: blogCategories[seo.category].name,
              item: `${SITE_URL}/blog-grupo-coactiva/categoria/${seo.category}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: seo.seoTitle,
              item: url,
            },
          ]
        : [{ '@type': 'ListItem', position: 3, name: post.content.title, item: url }]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
};
