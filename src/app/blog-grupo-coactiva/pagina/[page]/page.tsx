import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogIndexLayout } from '@/components/blog/BlogIndexLayout';
import { BlogListSchema } from '@/components/blog/BlogListSchema';
import { absoluteUrl, SITE_NAME, LOCALE } from '@/global/seo/site.config';
import { slugsForPage, totalBlogPages } from '../../data/blog-pagination';

export function generateStaticParams() {
  const total = totalBlogPages();
  return Array.from({ length: Math.max(total - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number(page);
  const url = absoluteUrl(`/blog-grupo-coactiva/pagina/${pageNumber}`);
  const description = `Página ${pageNumber} del blog de Grupo Coactiva SAS: guías sobre cobro de cartera, cobranza empresarial y recuperación de deudas en Colombia.`;

  return {
    title: `Blog de Cobro de Cartera — Página ${pageNumber}`,
    description,
    // Cada página de paginación es autocanónica: no se consolida en la
    // página 1, para no ocultar los artículos que solo aparecen aquí.
    alternates: { canonical: url },
    openGraph: {
      title: `Blog de Cobro de Cartera — Página ${pageNumber}`,
      description,
      type: 'website',
      locale: LOCALE,
      url,
      siteName: SITE_NAME,
    },
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = Number(page);
  const totalPages = totalBlogPages();

  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound();
  }

  const slugs = slugsForPage(pageNumber);

  return (
    <>
      <BlogListSchema
        path={`/blog-grupo-coactiva/pagina/${pageNumber}`}
        name={`Blog de cobro y recuperación de cartera — página ${pageNumber}`}
        description="Guías sobre cobro de cartera, cobranza empresarial y recuperación de deudas en Colombia."
        slugs={slugs}
        breadcrumb={{ name: `Página ${pageNumber}` }}
      />
      <BlogIndexLayout
        h1={`Blog de Cobro de Cartera — Página ${pageNumber}`}
        intro="Continúe explorando nuestras guías sobre cobro, cobranza y recuperación de cartera empresarial en Colombia."
        slugs={slugs}
        currentPage={pageNumber}
        totalPages={totalPages}
        breadcrumb={{ name: `Página ${pageNumber}` }}
      />
    </>
  );
}
