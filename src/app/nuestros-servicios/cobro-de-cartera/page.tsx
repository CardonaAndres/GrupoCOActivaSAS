import Link from 'next/link';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';
import { PartnersSection } from '@/components/cobro-cartera';
import { Users, Scale, Target, CheckCircle, MapPin, Clock, DollarSign } from 'lucide-react';
import { CobroCarteraMetadata } from '@/global/metadata';

export const metadata = CobroCarteraMetadata

const services = [
  {
    icon: Users,
    title: 'Vía Prejurídica',
    description: '18 ejecutivos especializados con técnicas modernas de negociación.',
  },
  {
    icon: Scale,
    title: 'Vía Jurídica',
    description: '7 abogados especializados para procesos judiciales efectivos.',
  },
];

const features = [
  {
    icon: Target,
    title: 'Cobranza Personalizada',
    description: 'Modelo persona a persona, sin llamadas masivas ni cartas automáticas.',
  },
  {
    icon: MapPin,
    title: 'Cobertura Nacional',
    description: 'Gestionamos cuentas de alto valor en cualquier región del país.',
  },
  {
    icon: Clock,
    title: '20 Días Prejurídicos',
    description: 'Período máximo de gestión antes de iniciar proceso ejecutivo.',
  },
  {
    icon: DollarSign,
    title: 'Desde $10 Millones',
    description: 'Atendemos obligaciones superiores a $10.000.000 COP.',
  },
];

const benefits = [
  'Usted define las políticas y límites de cobranza',
  'Estrategia personalizada para cada caso',
  'Seguimiento constante y reportes claros',
  'Sin afectar su imagen corporativa',
  'Enfoque estratégico y comercial',
  'Transparencia en todo el proceso',
];

export default function CobroCarteraPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Cobro y Recuperación de Cartera
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Alta eficiencia y cobertura nacional. Líderes en recuperación de cartera empresarial.
            </p>
            <a
              href={WhatsAppService.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Consulta Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Nuestros Servicios
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-linear-to-br from-cyan-50 to-white rounded-xl p-8 border border-cyan-100">
                    <div className="w-16 h-16 bg-cyan-700 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-cyan-700" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Especializado */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Equipo Especializado
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-700 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    18 Ejecutivos Profesionales
                  </h3>
                  <p className="text-gray-700">
                    Entrenados en Programación Neurolingüística (PNL), inteligencia emocional y técnicas avanzadas de negociación para gestionar cada obligación de manera estratégica y personalizada.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-700 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    7 Abogados Especializados
                  </h3>
                  <p className="text-gray-700">
                    Departamento jurídico propio con dependientes judiciales para procesos de recuperación judicial eficientes a nivel nacional. Mantenemos enfoque negociador incluso en etapa judicial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Nuestra Metodología
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro modelo de recuperación es totalmente flexible y transparente. Usted define las políticas, límites y tratamiento que desea aplicar al deudor, y nuestro equipo ejecuta la estrategia de cobranza más adecuada para cada caso.
              </p>
              <div className="bg-cyan-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Costos de Cobranza</h3>
                <p className="text-gray-700 mb-4">
                  El costo del servicio se pacta previamente y oscila entre el <strong>5% y el 20%</strong>, dependiendo de:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>Ubicación del deudor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>Antigüedad de la obligación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                    <span>Monto de la cartera</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nuestro objetivo es que los <strong>intereses de mora cubran los gastos de cobranza</strong>, procurando que el capital no se vea afectado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-12 bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Ventajas de Trabajar con Nosotros
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                  <p className="text-cyan-50">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para recuperar su cartera vencida?
            </h2>
            <p className="text-gray-600 mb-8">
              Servicio estructurado con seguimiento constante y reportes claros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WhatsAppService.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Hablar por WhatsApp
              </a>
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
}