import { blogPosts } from '../data/posts.data';
import { blogSeo, blogCategories } from '../data/blog-taxonomy.data';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Artículo de Grupo Coactiva SAS sobre cobro de cartera';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];
  const seo = blogSeo[slug];

  return renderOgImage({
    eyebrow: seo ? blogCategories[seo.category].name : 'Blog',
    title: seo?.seoTitle ?? post?.content.title ?? 'Cobro de cartera en Colombia',
    subtitle: 'Guía práctica para empresas acreedoras',
  });
}
