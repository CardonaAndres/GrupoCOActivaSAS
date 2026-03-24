import Link from 'next/link';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';
import { MessageCircle, CalendarCheck } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section className="bg-gray-100">

      {/* ── Hero Banner ── */}
      <div className="py-12 text-center bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-800 leading-tight">
          Recuperación
          <br />
          <span className="text-cyan-800">de cartera vencida</span>
        </h2>
        <p className="mt-3 text-xl sm:text-2xl font-semibold text-cyan-900/70 tracking-wide">
          Personalizada vía Pre-Jurídica
        </p>
      </div>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-gray-300" />

      {/* ── Content block ── */}
      <div className="py-15 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Sub-header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              No pierda su dinero
            </h3>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Descubra cómo podemos ayudar a recuperar lo que le pertenece a su empresa
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Card 1 — Hablar con un experto (PRIMARY) */}
            <div className="relative bg-cyan-800 rounded-2xl p-10 flex flex-col items-center text-center text-white shadow-xl shadow-cyan-900/30 overflow-hidden">
              {/* decorative circle */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

              <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                <CalendarCheck className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>

              <h4 className="text-2xl font-bold mb-3">Hablar con un experto</h4>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                Hable con uno de nuestros asesores especializados en{' '}
                <strong className="text-white">cobro de cartera vencida de altas cuantías</strong>{' '}
                y obtenga un plan personalizado para su empresa.
              </p>

              <Link
                href="/comunicate-con-grupo-coactiva"
                className="mt-auto inline-flex items-center gap-2 bg-white text-cyan-800 font-bold px-8 py-3.5 rounded-full hover:bg-cyan-50 transition-colors text-sm uppercase tracking-widest shadow-md"
              >
                Agendar reunión
                <CalendarCheck className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 — WhatsApp (SECONDARY) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <MessageCircle className="w-10 h-10 text-cyan-800" strokeWidth={1.5} />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-3">Consúltenos</h4>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Si quiere conocer más sobre nuestro servicio de{' '}
                <strong className="text-gray-700">cobro de cartera</strong>{' '}
                y cómo podemos ser un aliado para su empresa, estamos esperando su mensaje.
              </p>

              <a
                href={WhatsAppService.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-sm uppercase tracking-widest shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Escribir a un asesor
              </a>
            </div>
          </div>

          {/* Bottom trust line */}
          <p className="text-center text-sm text-gray-400 mt-12 font-medium tracking-wide uppercase">
            15 años de experiencia · Cobro de cartera pre-jurídica · Resultados comprobados
          </p>
        </div>
      </div>
    </section>
  );
};