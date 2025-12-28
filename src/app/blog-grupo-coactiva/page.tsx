import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from './data/posts.data';
import { BlogMetadata } from '@/global/metadata';

export const metadata = BlogMetadata

export default function BlogPage() {
  // Convertir el objeto a array para renderizar
  const posts = Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-lg text-cyan-100">
              Artículos especializados sobre cobro de cartera, insolvencia y recuperación de deudas
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={post.images[0].url}
                      alt={post.images[0].alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.content.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.content.introduction.split('\n\n')[0]}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/blog-grupo-coactiva/${post.slug}`}
                      className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-semibold transition-colors"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesita asesoría especializada?
            </h2>
            <p className="text-cyan-100 mb-8">
              Nuestro equipo está listo para ayudarle con sus necesidades de recuperación de cartera e insolvencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/comunicate-con-grupo-coactiva"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-cyan-900 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
              >
                Solicitar Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}