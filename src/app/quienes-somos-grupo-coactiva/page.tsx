import Link from 'next/link';
import Image from 'next/image';
import { AboutUsMetadata } from '@/global/metadata';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';
import { Target, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Respaldo Jurídico',
    description: 'Asesoría legal estratégica, personalizada y efectiva en cada caso.',
  },
  {
    icon: Target,
    title: 'Enfoque Estratégico',
    description: 'Combinamos estrategia legal, negociación y eficiencia para resultados óptimos.',
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    description: '18 ejecutivos y 7 abogados especializados en recuperación y procesos judiciales.',
  },
];

export const metadata = AboutUsMetadata;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              ¿Quiénes Somos?
            </h1>
            <p className="text-lg text-cyan-100">
              Líderes en recuperación de cartera y soluciones de insolvencia
            </p>
          </div>
        </div>
      </section>

      {/* Leader Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative h-125 bg-gray-100">
                  <Image
                    src="/imgs/people/esteban-restrepo.png"
                    alt="Esteban Restrepo - Director Jurídico Grupo Coactiva"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Esteban Restrepo
                  </h2>
                  <p className="text-cyan-700 font-semibold mb-6">
                    Socio-Fundador y Director Jurídico
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Experto en el manejo integral del <strong>cobro de cartera empresarial</strong>, procesos <strong>prejurídicos y jurídicos</strong>, e <strong>insolvencias de persona natural y jurídica</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Su enfoque combina <strong>estrategia legal, negociación y eficiencia</strong>, permitiendo recuperar la <strong>estabilidad financiera</strong> con un <strong>respaldo jurídico real y confiable</strong>.
                  </p>
                  <a
                    href="http://linkedin.com/in/estebanrestrepoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Ver Perfil en LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Grupo Coactiva S.A.S
              </h2>
              <div className="w-20 h-1 bg-cyan-700 mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                En Grupo Coactiva S.A.S. brindamos <strong>asesoría legal estratégica, personalizada y efectiva</strong>, orientada a la <strong>protección del patrimonio</strong> y la <strong>recuperación de la estabilidad económica</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Trabajamos con <strong>rigor, compromiso y responsabilidad</strong>, convencidos de que <strong>siempre existe una solución legal adecuada para cada situación</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-gray-600">
                Comprometidos con la excelencia y el servicio personalizado
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-cyan-700" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para recuperar su estabilidad financiera?
            </h2>
            <p className="text-gray-600 mb-8">
              Contáctenos hoy y descubra cómo podemos ayudarle con soluciones legales efectivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WhatsAppService.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Hablar con un Asesor
              </a>
              <Link
                href="/comunicate-con-grupo-coactiva"
                className="inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
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