import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';

const services = [
  {
    number: '01',
    title: 'Insolvencia Personal',
    description: 'Libérese de sus deudas por la vía legal. Aplicamos la Ley de la Segunda Oportunidad sin límite de monto. Protección integral de su patrimonio.',
    highlight: 'Sin límite de monto',
    href: '/nuestros-servicios/insolvencia',
  },
  {
    number: '02',
    title: 'Insolvencia Empresarial',
    description: 'Reorganización y liquidación empresarial bajo la Ley 1116 de 2006. Preservar la empresa como unidad productiva o cerrar operaciones legalmente.',
    highlight: 'Reorganización y liquidación',
    href: '/nuestros-servicios/insolvencia',
  },
  {
    number: '03',
    title: 'Cobro de Cartera Vencida',
    description: 'Recuperación de cartera con alta eficiencia a nivel nacional. 18 ejecutivos y 7 abogados especializados trabajando para maximizar resultados.',
    highlight: 'Obligaciones superiores a $10.000.000 COP',
    href: '/nuestros-servicios/cobro-de-cartera',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-cyan-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            15 años de experiencia en recuperación de cartera y procesos de insolvencia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-800"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-gray-100 mb-4">
                {service.number}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 -mt-12">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Highlight */}
              <div className="pt-4 border-t border-gray-200 mb-4">
                <p className="text-sm font-bold text-cyan-800">
                  {service.highlight}
                </p>
              </div>

              {/* Ver más link */}
              <Link
                href={service.href}
                className="inline-flex items-center text-cyan-800 hover:text-cyan-900 font-semibold text-sm group-hover:gap-2 transition-all"
              >
                Ver más
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center">
          <a
            href={WhatsAppService.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Consulta Gratuita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}