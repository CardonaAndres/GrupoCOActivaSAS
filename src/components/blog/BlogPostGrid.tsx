import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/app/blog-grupo-coactiva/data/posts.data';
import { blogSeo, blogCategories } from '@/app/blog-grupo-coactiva/data/blog-taxonomy.data';
import { postDates } from '@/app/blog-grupo-coactiva/data/post-dates.data';

interface Props {
  slugs: string[];
}

const formatDate = (value?: string) =>
  value
    ? new Date(`${value}T12:00:00Z`).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

/**
 * Rejilla de artículos. Sustituye las fotografías de banco por una cabecera de
 * marca (punto B5) y añade categoría y fecha, que antes no se mostraban.
 */
export const BlogPostGrid = ({ slugs }: Props) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {slugs.map((slug) => {
      const post = blogPosts[slug];
      const seo = blogSeo[slug];
      if (!post) return null;

      const category = seo ? blogCategories[seo.category] : null;
      const dates = postDates[slug];
      const published = formatDate(dates?.publishedAt);
      const updated = dates?.updatedAt ? formatDate(dates.updatedAt) : null;

      return (
        <article
          key={slug}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-700 p-6 text-white">
            {category && (
              <Link
                href={`/blog-grupo-coactiva/categoria/${category.slug}`}
                className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-200 hover:text-white mb-3"
              >
                {category.name}
              </Link>
            )}
            <h2 className="text-lg font-bold leading-snug">
              <Link href={`/blog-grupo-coactiva/${slug}`} className="hover:underline">
                {seo?.seoTitle ?? post.content.title}
              </Link>
            </h2>
          </div>

          <div className="p-6 flex flex-col grow">
            <p className="text-gray-600 mb-4 line-clamp-4 grow">
              {seo?.description ?? post.content.introduction.split('\n\n')[0]}
            </p>

            {published && (
              <p className="text-xs text-gray-500 mb-4">
                <time dateTime={dates?.publishedAt}>Publicado el {published}</time>
                {updated && (
                  <>
                    {' · '}
                    <time dateTime={dates?.updatedAt}>Actualizado el {updated}</time>
                  </>
                )}
              </p>
            )}

            <Link
              href={`/blog-grupo-coactiva/${slug}`}
              className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-semibold transition-colors"
            >
              {seo?.anchors[0] ?? 'Leer más'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      );
    })}
  </div>
);
