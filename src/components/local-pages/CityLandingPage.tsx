import Link from 'next/link';
import { MapPin, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { CityLandingData } from '@/data/local-pages/city-landing.data';
import { WhatsAppCtaButton } from './WhatsAppCtaButton';
import { CityLandingSchema } from './CityLandingSchema';

interface Props {
  data: CityLandingData;
}

export const CityLandingPage = ({ data }: Props) => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <CityLandingSchema data={data} />

      {/* Hero */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-cyan-200 text-sm font-semibold uppercase tracking-widest mb-3">
              {data.heroEyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {data.heroTitle}
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              {data.heroDescription}
            </p>
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

      {/* Intro */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {data.introTitle}
            </h2>
            <div className="prose prose-lg max-w-none space-y-4">
              {data.introParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              ¿Por qué elegir Grupo Coactiva SAS en {data.cityName}?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {data.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map & Address */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden grid md:grid-cols-2">
              <div className="relative h-72 md:h-auto bg-gray-200">
                <iframe
                  src={data.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa oficina ${data.cityName}`}
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nuestra oficina en {data.cityName}
                </h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">{data.address}</p>
                    <p className="text-gray-600 text-sm">{data.cityFullName}</p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    data.cityFullAddress
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-700 hover:text-cyan-800 font-semibold text-sm hover:underline"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Nuestro Servicio en {data.cityName}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.whyUs.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                  <p className="text-cyan-50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              Preguntas Frecuentes sobre Cobro de Cartera en {data.cityName}
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related article */}
      {data.relatedArticleSlug && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 mb-3">¿Quiere conocer más?</p>
              <Link
                href={`/blog-grupo-coactiva/${data.relatedArticleSlug}`}
                className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-semibold transition-colors"
              >
                Lea nuestro artículo relacionado
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para recuperar su cartera vencida en {data.cityName}?
            </h2>
            <p className="text-gray-600 mb-8">
              Consulta gratuita, sin compromiso. Le respondemos en minutos.
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