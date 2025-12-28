import Link from 'next/link';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';
import { TrendingUp, Scale, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Insolvencia',
    description: 'Soluciones legales para personas y empresas',
    href: '/servicios-de-cobranzas-en-grupo-coactiva#insolvencia-personal',
  },
  {
    icon: TrendingUp,
    title: 'Cobro de Cartera',
    description: 'Recuperación eficiente con cobertura nacional',
    href: '/servicios-de-cobranzas-en-grupo-coactiva#cobro',
  },
];

export const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Grupo Coactiva S.A.S
              <span className="block text-cyan-300 mt-2">
                
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-4">
              Soluciones jurídicas claras y efectivas para deudas, cartera vencida e insolvencias.
            </p>

            <p className="text-base text-cyan-200 max-w-2xl mx-auto mb-8">
              Liderados por <strong>Esteban Restrepo</strong>. Trabajamos con rigor, compromiso y respaldo jurídico real.
            </p>

            <a
              href={WhatsAppService.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Consulta Gratuita
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="w-14 h-14 bg-cyan-300/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-300/30 transition-colors">
                    <Icon className="w-7 h-7 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-cyan-100 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-cyan-300 text-sm font-semibold group-hover:gap-2 transition-all">
                    Ver más
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}