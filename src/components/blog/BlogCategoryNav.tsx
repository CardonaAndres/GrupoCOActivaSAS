import Link from 'next/link';
import {
  blogCategories,
  postsByCategory,
  BlogCategorySlug,
} from '@/app/blog-grupo-coactiva/data/blog-taxonomy.data';

interface Props {
  /** Categoría activa, si la hay. */
  active?: BlogCategorySlug;
}

/**
 * Navegación por categorías: convierte el índice plano en un modelo
 * hub-and-spoke y multiplica las rutas de acceso a cada artículo (bloque D).
 */
export const BlogCategoryNav = ({ active }: Props) => (
  <nav aria-label="Categorías del blog" className="flex flex-wrap gap-3 justify-center">
    <Link
      href="/blog-grupo-coactiva"
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? 'bg-white text-cyan-800 border border-cyan-200 hover:bg-cyan-50'
          : 'bg-cyan-700 text-white'
      }`}
    >
      Todos los artículos
    </Link>
    {Object.values(blogCategories).map((category) => {
      const count = postsByCategory(category.slug).length;
      const isActive = active === category.slug;
      return (
        <Link
          key={category.slug}
          href={`/blog-grupo-coactiva/categoria/${category.slug}`}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            isActive
              ? 'bg-cyan-700 text-white'
              : 'bg-white text-cyan-800 border border-cyan-200 hover:bg-cyan-50'
          }`}
        >
          {category.name} ({count})
        </Link>
      );
    })}
  </nav>
);
