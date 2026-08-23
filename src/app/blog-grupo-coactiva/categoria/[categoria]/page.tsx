import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogIndexLayout } from '@/components/blog/BlogIndexLayout';
import { BlogListSchema } from '@/components/blog/BlogListSchema';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';
import {
  blogCategories,
  postsByCategory,
  BlogCategorySlug,
} from '../../data/blog-taxonomy.data';

export function generateStaticParams() {
  return Object.keys(blogCategories).map((categoria) => ({ categoria }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = blogCategories[categoria as BlogCategorySlug];
  if (!category) return {};

  const url = absoluteUrl(`/blog-grupo-coactiva/categoria/${category.slug}`);

  return {
    title: category.seoTitle,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      title: category.seoTitle,
      description: category.description,
      type: 'website',
      locale: LOCALE,
      url,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: category.seoTitle,
      description: category.description,
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = blogCategories[categoria as BlogCategorySlug];

  if (!category) notFound();

  const slugs = postsByCategory(category.slug);

  return (
    <>
      <BlogListSchema
        path={`/blog-grupo-coactiva/categoria/${category.slug}`}
        name={category.seoTitle}
        description={category.description}
        slugs={slugs}
        breadcrumb={{ name: category.name }}
      />
      <BlogIndexLayout
        h1={category.seoTitle}
        intro={category.intro}
        slugs={slugs}
        activeCategory={category.slug}
        breadcrumb={{ name: category.name }}
      />
    </>
  );
}
