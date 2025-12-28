import { Phone, Mail } from 'lucide-react';
import { Form } from '@/components/contact';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';
import { LocationsSection } from '@/components/main';
import { ContactMetadata } from '@/global/metadata';

export const metadata = ContactMetadata

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Contáctenos
            </h1>
            <p className="text-lg text-cyan-100">
              Estamos listos para ayudarle con sus necesidades de recuperación de cartera e insolvencia
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Solicite una Consulta Gratuita
              </h2>
              <Form />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-linear-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-3">
                  ¿Prefiere hablar directamente?
                </h3>
                <p className="mb-6 text-green-50">
                  Contáctenos por WhatsApp para una respuesta inmediata
                </p>
                <a
                  href={WhatsAppService.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-green-600 font-semibold px-6 py-3 rounded-lg transition-colors shadow-md w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Contactar un Asesor
                </a>
              </div>

              {/* Info Cards */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <a href="tel:+573018594940" className="text-gray-600 hover:text-cyan-700 transition-colors">
                        +57 3018594940
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@grupocoactivasas.com" className="text-gray-600 hover:text-cyan-700 transition-colors break-all">
                        comercial@grupocoactivasas.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection />
    </div>
  );
}