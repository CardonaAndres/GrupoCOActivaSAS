import Link from 'next/link';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';
import { Scale, Shield, FileText, CheckCircle, TrendingDown, Home, AlertCircle } from 'lucide-react';
import { InsolvenciaMetadata } from '@/global/metadata';

export const metadata = InsolvenciaMetadata;

const services = [
  {
    icon: Scale,
    title: 'Insolvencia Persona Natural',
    description: 'Reorganice sus obligaciones con todos sus acreedores de manera legal.',
  },
  {
    icon: FileText,
    title: 'Insolvencia Empresarial',
    description: 'Preserve su empresa y supere la crisis financiera.',
  },
  {
    icon: Shield,
    title: 'Liquidación Judicial',
    description: 'Cierre ordenado y legal con protección jurídica.',
  },
];

const situations = [
  {
    icon: TrendingDown,
    text: '¿Cansado de pagar intereses sin bajar el capital?',
  },
  {
    icon: Home,
    text: '¿Tiene su vehículo o vivienda embargados?',
  },
  {
    icon: AlertCircle,
    text: '¿No puede cumplir con sus pagos mensuales?',
  },
];

export default function InsolvenciaPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Libérese de sus deudas por la vía legal
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Aplicamos la Ley de la Segunda Oportunidad, sin límite de monto
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

      {/* Situaciones */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              ¿Se identifica con alguna de estas situaciones?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {situations.map((situation, index) => {
                const Icon = situation.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                    <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-semibold text-sm">
                      {situation.text}
                    </p>
                  </div>
                );
              })}
            </div>
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
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-cyan-700" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-12 bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              ¿Qué logra con la Ley de Insolvencia?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                <p className="text-cyan-50">Suspender embargos y procesos judiciales</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                <p className="text-cyan-50">Renegociar deudas según su capacidad</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                <p className="text-cyan-50">Proteger su patrimonio y bienes</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                <p className="text-cyan-50">Terminar con intereses excesivos</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                <p className="text-cyan-50">Recuperar su tranquilidad financiera</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-300 shrink-0 mt-1" />
                <p className="text-cyan-50">Asesoría jurídica en cada etapa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para recuperar su estabilidad financiera?
            </h2>
            <p className="text-gray-600 mb-8">
              Lo acompañamos con asesoría jurídica especializada en cada etapa del proceso
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