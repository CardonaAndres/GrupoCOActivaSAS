import { BlogPost } from '../../types/blog-types';
import { postDates } from '../../data/post-dates.data';

interface Props {
  slug: string;
  post: BlogPost;
}

const BASE_URL = 'https://www.grupocoactivasas.com';

export const BlogPostSchema = ({ slug, post }: Props) => {
  const dates = postDates[slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.content.title,
    description: post.seo.metaDescription,
    image: post.images[0]?.url,
    author: {
      '@type': 'Organization',
      name: post.seo.metaTags.author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Grupo Coactiva SAS',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/imgs/logos/logo.png`,
      },
    },
    datePublished: dates?.publishedAt,
    dateModified: dates?.updatedAt ?? dates?.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog-grupo-coactiva/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};