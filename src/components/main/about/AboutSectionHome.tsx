import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Target } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    value: '15+',
    label: 'Años de experiencia',
  },
  {
    icon: Target,
    value: '100%',
    label: 'Cobertura nacional',
  },
];

export const AboutSectionHome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative h-144 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/imgs/people/esteban-restrepo.png"
                  alt="Esteban Restrepo - Director Jurídico"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority={true}
                />
              </div>
              
              {/* Name Card Below Image */}
              <div className="mt-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <p className="font-bold text-gray-900 text-lg">Esteban Restrepo</p>
                <p className="text-cyan-700 text-sm">Socio-Fundador y Director Jurídico</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-50 rounded-full -z-10"></div>
            </div>

            {/* Content Side */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">
                  Sobre Nosotros
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Líderes en recuperación de cartera e insolvencia
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Grupo Coactiva S.A.S.</strong> es liderado por <strong>Esteban Restrepo</strong>, con <strong>15 años de experiencia</strong> en el manejo integral del cobro de cartera empresarial, procesos prejurídicos y jurídicos, e insolvencias.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Acompañamos a empresas y personas en la solución de sus obligaciones financieras, brindando <strong>asesoría legal estratégica y personalizada</strong>, orientada a la protección del patrimonio y la recuperación de la estabilidad económica.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-6 h-6 text-cyan-700" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="/quienes-somos-grupo-coactiva"
                className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                Conocer más sobre nosotros
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}