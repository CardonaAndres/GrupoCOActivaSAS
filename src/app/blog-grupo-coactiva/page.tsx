import { BlogMetadata } from '@/global/metadata';
import { BlogIndexLayout } from '@/components/blog/BlogIndexLayout';
import { BlogListSchema } from '@/components/blog/BlogListSchema';
import { slugsForPage, totalBlogPages } from './data/blog-pagination';

export const metadata = BlogMetadata;

export default function BlogPage() {
  const totalPages = totalBlogPages();

  return (
    <>
      <BlogListSchema
        path="/blog-grupo-coactiva"
        name="Blog de cobro y recuperación de cartera"
        description="Guías sobre cobro de cartera, cobranza empresarial, recuperación de deudas e insolvencia en Colombia."
        slugs={slugsForPage(1)}
      />
      <BlogIndexLayout
        h1="Blog de Cobro y Recuperación de Cartera"
        intro="Guías prácticas sobre cobro de cartera, cobranza empresarial, recuperación de deudas e insolvencia en Colombia, escritas por nuestro equipo jurídico."
        slugs={slugsForPage(1)}
        currentPage={1}
        totalPages={totalPages}
      />
    </>
  );
}
