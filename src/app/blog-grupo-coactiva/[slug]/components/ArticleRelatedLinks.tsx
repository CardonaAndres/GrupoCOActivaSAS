import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogSeo, blogCategories, relatedPosts } from '../../data/blog-taxonomy.data';

interface Props {
  slug: string;
}

/**
 * Enlazado interno contextual del artículo (bloque D del diagnóstico).
 *
 * Antes, la sección de relacionados enlazaba siempre a los dos primeros
 * artículos del objeto, de modo que 21 de los 23 recibían un único enlace
 * entrante desde el índice del blog. Ahora los relacionados se calculan por
 * categoría y el anclaje se rota entre las variantes descriptivas de cada
 * artículo, garantizando el mínimo de 3 enlaces contextuales entrantes y
 * 3 salientes hacia páginas comerciales.
 */
const COMMERCIAL_LINKS = [
  {
    href: '/nuestros-servicios/cobro-de-cartera',
    label: 'servicio de cobro de cartera empresarial',
  },
  { href: '/recuperacion-de-cartera', label: 'recuperación de cartera y de deudas' },
  { href: '/abogados-de-cobranza', label: 'abogados de cobranza y cobro jurídico' },
  { href: '/cobranza-de-cartera', label: 'cobranza de cartera para empresas' },
  { href: '/casa-de-cobranza', label: 'casa de cobranza en Colombia' },
  { href: '/cobro-de-cartera/medellin', label: 'cobro de cartera en Medellín' },
  { href: '/cobro-de-cartera/bogota', label: 'cobro de cartera en Bogotá' },
];

/** Selección estable y variada de enlaces comerciales según el slug. */
const commercialLinksFor = (slug: string) => {
  const offset =
    slug.split('').reduce((total, char) => total + char.charCodeAt(0), 0) %
    COMMERCIAL_LINKS.length;
  return Array.from(
    { length: 3 },
    (_, index) => COMMERCIAL_LINKS[(offset + index) % COMMERCIAL_LINKS.length]
  );
};

export const ArticleRelatedLinks = ({ slug }: Props) => {
  const related = relatedPosts(slug, 4);
  const entry = blogSeo[slug];
  const category = entry ? blogCategories[entry.category] : null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Siga leyendo
              {category ? ` sobre ${category.name.toLowerCase()}` : ''}
            </h2>
            {category && (
              <p className="text-gray-600 text-sm mb-6">
                <Link
                  href={`/blog-grupo-coactiva/categoria/${category.slug}`}
                  className="text-cyan-700 hover:underline font-semibold"
                >
                  Ver todos los artículos de {category.name}
                </Link>
              </p>
            )}
            <ul className="space-y-4">
              {related.map((relatedSlug, index) => {
                const relatedEntry = blogSeo[relatedSlug];
                if (!relatedEntry) return null;
                const anchor =
                  relatedEntry.anchors[index % relatedEntry.anchors.length];
                return (
                  <li key={relatedSlug}>
                    <Link
                      href={`/blog-grupo-coactiva/${relatedSlug}`}
                      className="inline-flex items-start gap-2 text-cyan-700 hover:text-cyan-800 font-semibold"
                    >
                      <ArrowRight className="w-4 h-4 shrink-0 mt-1" />
                      {anchor}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Necesita gestionar su cartera?
            </h2>
            <ul className="space-y-4">
              {commercialLinksFor(slug).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-start gap-2 text-cyan-700 hover:text-cyan-800 font-semibold"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0 mt-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/comunicate-con-grupo-coactiva"
                  className="inline-flex items-start gap-2 text-cyan-700 hover:text-cyan-800 font-semibold"
                >
                  <ArrowRight className="w-4 h-4 shrink-0 mt-1" />
                  solicitar un diagnóstico gratuito de cartera
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
