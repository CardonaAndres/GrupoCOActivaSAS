import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data/posts.data';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { BlogPostSchema } from './components/BlogPostSchema';
import { ArticleAuthorBox } from './components/ArticleAuthorBox';
import { ArticleRelatedLinks } from './components/ArticleRelatedLinks';
import { generateBlogSlugMetadata } from '@/global/metadata';
import { postDates } from '../data/post-dates.data';
import { blogSeo, blogCategories } from '../data/blog-taxonomy.data';
import { authorForPost } from '@/data/team/authors.data';

// Generar metadata dinámica
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }>; }): Promise<Metadata> => {
  return await generateBlogSlugMetadata({ params });
}

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  // Si no existe el post, mostrar 404
  if (!post) notFound();

  const { content, images } = post;
  const seo = blogSeo[slug];
  const category = seo ? blogCategories[seo.category] : null;
  const dates = postDates[slug];
  const author = authorForPost(slug);

  return (
    <div className="min-h-screen bg-white pt-24">
      <BlogPostSchema slug={slug} post={post} />
      {/* Hero con imagen destacada */}
      <section className="relative h-96 bg-gray-900">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
          <div className="max-w-4xl mx-auto h-full flex flex-col justify-end pb-12">
            {/* Migas de pan, coherentes con el BreadcrumbList del schema */}
            <nav aria-label="Ruta de navegación" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-cyan-200">
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
                {category && (
                  <>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link
                        href={`/blog-grupo-coactiva/categoria/${category.slug}`}
                        className="hover:text-white hover:underline"
                      >
                        {category.name}
                      </Link>
                    </li>
                  </>
                )}
              </ol>
            </nav>

            <Link
              href="/blog-grupo-coactiva"
              className="inline-flex items-center gap-2 text-white hover:text-cyan-300 mb-6 transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {content.title}
            </h1>

            {/* Firma y fechas: autoría humana verificable (E-E-A-T) */}
            <p className="mt-4 text-cyan-100 text-sm">
              Por{' '}
              <Link href={author.profileUrl} className="font-semibold hover:underline">
                {author.name}
              </Link>
              , {author.jobTitle}
              {dates?.publishedAt && (
                <>
                  {' · '}
                  <time dateTime={dates.publishedAt}>
                    Publicado el{' '}
                    {new Date(`${dates.publishedAt}T12:00:00Z`).toLocaleDateString(
                      'es-CO',
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </time>
                </>
              )}
              {dates?.updatedAt && (
                <>
                  {' · '}
                  <time dateTime={dates.updatedAt}>
                    Actualizado el{' '}
                    {new Date(`${dates.updatedAt}T12:00:00Z`).toLocaleDateString('es-CO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              {content.introduction.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  data-speakable={index === 0 ? '' : undefined}
                  className="text-gray-700 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Importance Section (if exists) */}
            {content.importance && (
              <div className="bg-cyan-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content.importance.title}
                </h2>
                <ul className="space-y-3 mb-4">
                  {content.importance.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 italic">{content.importance.note}</p>
              </div>
            )}

            {/* Timing Section (if exists) */}
            {content.timing && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content.timing.question}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {content.timing.answer}
                </p>
              </div>
            )}

            {/* Benefits/Stages (if exists) */}
            {content.benefits && (
              <div className="mb-8">
                {/* Encabezado de sección: evita el salto de jerarquía h1 -> h3
                    en los artículos que no incluyen bloque de importancia. */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Puntos clave
                </h2>
                <div className="space-y-6">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="border-l-4 border-cyan-700 pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stages (if exists) */}
            {content.stages && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Etapas del proceso
                </h2>
                <div className="space-y-6">
                  {content.stages.map((stage, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {stage.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reasons to Act (if exists) */}
            {content.reasonsToAct && (
              <div className="bg-cyan-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content.reasonsToAct.title}
                </h2>
                <ul className="space-y-3">
                  {content.reasonsToAct.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Late Action Advice (if exists) */}
            {content.lateActionAdvice && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content.lateActionAdvice.question}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {content.lateActionAdvice.answer}
                </p>
              </div>
            )}

            {/* Services Offered (if exists) */}
            {content.servicesOffered && (
              <div className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {content.servicesOffered.title}
                </h2>
                <ul className="space-y-3">
                  {content.servicesOffered.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                      <span className="text-cyan-50">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conclusion */}
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Conclusión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {content.conclusion}
              </p>
            </div>

            {/* CTA */}
            <div className="bg-linear-to-br from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">
                ¿Necesita ayuda con su caso?
              </h3>
              <p className="text-green-50 mb-6">
                Contáctenos hoy para una consulta gratuita
              </p>
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      </article>

      <ArticleAuthorBox author={author} />
      <ArticleRelatedLinks slug={slug} />
    </div>
  );
}