import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data/posts.data';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { generateBlogSlugMetadata } from '@/global/metadata';

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

  return (
    <div className="min-h-screen bg-white pt-24">
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
            {/* Back link */}
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
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
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
              <a
                href={WhatsAppService.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4 rounded-lg transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Más artículos que pueden interesarte
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([postSlug]) => postSlug !== slug)
                .slice(0, 2)
                .map(([postSlug, relatedPost]) => (
                  <Link
                    key={postSlug}
                    href={`/blog-grupo-coactiva/${postSlug}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-40">
                      <Image
                        src={relatedPost.images[0].url}
                        alt={relatedPost.images[0].alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.content.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.content.introduction.split('\n\n')[0]}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}