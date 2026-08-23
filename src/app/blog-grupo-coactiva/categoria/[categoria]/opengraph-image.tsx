import { blogCategories, BlogCategorySlug } from '../../data/blog-taxonomy.data';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Categoría del blog de Grupo Coactiva SAS';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return Object.keys(blogCategories).map((categoria) => ({ categoria }));
}

export default async function CategoryOpengraphImage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = blogCategories[categoria as BlogCategorySlug];

  return renderOgImage({
    eyebrow: 'Blog · Categoría',
    title: category?.seoTitle ?? 'Blog de cobro de cartera',
    subtitle: 'Guías jurídicas para empresas acreedoras en Colombia',
  });
}
