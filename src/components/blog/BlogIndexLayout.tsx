import Link from 'next/link';
import { BlogPostGrid } from './BlogPostGrid';
import { BlogPagination } from './BlogPagination';
import { BlogCategoryNav } from './BlogCategoryNav';
import { BlogCategorySlug } from '@/app/blog-grupo-coactiva/data/blog-taxonomy.data';

interface Props {
  h1: string;
  intro: string;
  slugs: string[];
  activeCategory?: BlogCategorySlug;
  currentPage?: number;
  totalPages?: number;
  breadcrumb?: { name: string };
}

export const BlogIndexLayout = ({
  h1,
  intro,
  slugs,
  activeCategory,
  currentPage = 1,
  totalPages = 1,
  breadcrumb,
}: Props) => (
  <div className="min-h-screen bg-gray-50 pt-24">
    <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav aria-label="Ruta de navegación" className="max-w-3xl mx-auto mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-cyan-200">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/blog-grupo-coactiva"
                  className="hover:text-white hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {breadcrumb.name}
              </li>
            </ol>
          </nav>
        )}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{h1}</h1>
          <p data-speakable className="text-lg text-cyan-100">
            {intro}
          </p>
        </div>
      </div>
    </section>

    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlogCategoryNav active={activeCategory} />
      </div>
    </section>

    <section className="pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlogPostGrid slugs={slugs} />
          <BlogPagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </section>

    {/* Enlaces a las páginas comerciales: la biblioteca transfiere autoridad */}
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nuestros servicios
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: '/nuestros-servicios/cobro-de-cartera',
                label: 'Cobro de cartera empresarial',
              },
              { href: '/cobranza-de-cartera', label: 'Cobranza de cartera para empresas' },
              {
                href: '/recuperacion-de-cartera',
                label: 'Recuperación de cartera y de deudas',
              },
              { href: '/casa-de-cobranza', label: 'Casa de cobranza en Colombia' },
              { href: '/abogados-de-cobranza', label: 'Abogados de cobranza' },
              {
                href: '/cobro-de-cartera/medellin',
                label: 'Cobro de cartera en Medellín',
              },
              { href: '/cobro-de-cartera/bogota', label: 'Cobro de cartera en Bogotá' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-cyan-800 font-semibold hover:bg-cyan-50 hover:border-cyan-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesita asesoría especializada?</h2>
          <p className="text-cyan-100 mb-8">
            Nuestro equipo analiza su cartera sin costo y le propone una estrategia de
            recuperación concreta.
          </p>
          <Link
            href="/comunicate-con-grupo-coactiva"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-cyan-900 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
          >
            Solicitar Consulta
          </Link>
        </div>
      </div>
    </section>
  </div>
);
