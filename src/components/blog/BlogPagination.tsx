import Link from 'next/link';

interface Props {
  currentPage: number;
  totalPages: number;
}

const hrefFor = (page: number) =>
  page === 1 ? '/blog-grupo-coactiva' : `/blog-grupo-coactiva/pagina/${page}`;

export const BlogPagination = ({ currentPage, totalPages }: Props) => {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Paginación del blog"
      className="flex flex-wrap items-center justify-center gap-2 mt-12"
    >
      {currentPage > 1 && (
        <Link
          href={hrefFor(currentPage - 1)}
          rel="prev"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-cyan-800 border border-cyan-200 hover:bg-cyan-50"
        >
          ← Anterior
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          href={hrefFor(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            page === currentPage
              ? 'bg-cyan-700 text-white'
              : 'text-cyan-800 border border-cyan-200 hover:bg-cyan-50'
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={hrefFor(currentPage + 1)}
          rel="next"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-cyan-800 border border-cyan-200 hover:bg-cyan-50"
        >
          Siguiente →
        </Link>
      )}
    </nav>
  );
};
