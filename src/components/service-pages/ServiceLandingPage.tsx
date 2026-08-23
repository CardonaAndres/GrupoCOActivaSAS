import Link from 'next/link';
import { CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { ServiceLandingData } from '@/data/service-pages/service-landing.data';
import { cityLandingData } from '@/data/local-pages/city-landing.data';
import { blogSeo } from '@/app/blog-grupo-coactiva/data/blog-taxonomy.data';
import { WhatsAppCtaButton } from '@/components/local-pages/WhatsAppCtaButton';
import { ServiceLandingSchema } from './ServiceLandingSchema';

interface Props {
  data: ServiceLandingData;
}

export const ServiceLandingPage = ({ data }: Props) => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <ServiceLandingSchema data={data} />

      {/* Hero */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Ruta de navegación" className="max-w-3xl mx-auto mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-cyan-200">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {data.seoTitle}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-cyan-200 text-sm font-semibold uppercase tracking-widest mb-3">
              {data.heroEyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{data.h1}</h1>
            <p className="text-xl text-cyan-100 mb-8">{data.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppCtaButton label="Consulta Gratuita" />
              <Link
                href="/comunicate-con-grupo-coactiva"
                className="inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Respuesta directa: bloque legible por AI Overviews y asistentes */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto rounded-xl border-l-4 border-cyan-700 bg-cyan-50 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">En resumen</h2>
            <p data-speakable className="text-gray-800 leading-relaxed">
              {data.answerBox}
            </p>
          </div>
        </div>
      </section>

      {/* Secciones de contenido */}
      {data.sections.map((section, index) => (
        <section key={index} className={index % 2 === 0 ? 'py-12' : 'py-12 bg-gray-50'}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Diferenciales */}
      <section className="py-12 bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Por qué contratarnos
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {data.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">{bullet.title}</h3>
                    <p className="text-cyan-50 text-sm">{bullet.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura por ciudad: enlazado interno con anclaje descriptivo */}
      {data.relatedCitySlugs.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Cobertura por ciudad
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.relatedCitySlugs.map((citySlug) => {
                  const city = cityLandingData[citySlug];
                  if (!city) return null;
                  return (
                    <Link
                      key={citySlug}
                      href={`/cobro-de-cartera/${citySlug}`}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-6 hover:border-cyan-200 hover:bg-cyan-50 transition-colors"
                    >
                      <span className="block font-bold text-cyan-800 mb-1">
                        Cobro y recuperación de cartera en {city.cityName}
                      </span>
                      <span className="block text-gray-600 text-sm">
                        {city.hasOffice
                          ? `Sede propia en ${city.cityName}`
                          : `Cobertura en ${city.cityRegion}`}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p data-speakable className="text-gray-700 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artículos relacionados */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Profundice en nuestras guías
            </h2>
            <ul className="space-y-4">
              {data.relatedArticleSlugs.map((slug, index) => {
                const entry = blogSeo[slug];
                if (!entry) return null;
                // Se rota el anclaje para diversificar el texto de enlace.
                const anchor = entry.anchors[index % entry.anchors.length];
                return (
                  <li key={slug}>
                    <Link
                      href={`/blog-grupo-coactiva/${slug}`}
                      className="inline-flex items-start gap-2 text-cyan-700 hover:text-cyan-800 font-semibold"
                    >
                      <ArrowRight className="w-4 h-4 shrink-0 mt-1" />
                      {anchor}
                    </Link>
                    <p className="text-gray-600 text-sm pl-6">{entry.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Analizamos su cartera sin costo
            </h2>
            <p className="text-gray-600 mb-8">
              Cuéntenos el estado de sus obligaciones vencidas y le proponemos una
              estrategia concreta. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppCtaButton label="Hablar por WhatsApp" />
              <Link
                href="/comunicate-con-grupo-coactiva"
                className="inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
