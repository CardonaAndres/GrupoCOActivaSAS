'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WhatsAppService } from '@/global/services';

export const FloatingContactButtons = () => {
  const [showTooltip, setShowTooltip] = useState<'whatsapp' | 'phone' | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Botón de WhatsApp */}
      <div className="relative">
        <a
          href={WhatsAppService.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="Contactar por WhatsApp"
          onMouseEnter={() => setShowTooltip('whatsapp')}
          onMouseLeave={() => setShowTooltip(null)}
        >
          <WhatsAppIcon />
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        </a>

        {/* Tooltip WhatsApp */}
        {showTooltip === 'whatsapp' && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chatea con nosotros
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
          </div>
        )}
      </div>

      {/* Botón de Llamada */}
      <div className="relative">
        <a
          href={`tel:${WhatsAppService.DEFAULT_PHONE_NUMBER}`}
          className="flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Llamar a Grupo Coactiva"
          onMouseEnter={() => setShowTooltip('phone')}
          onMouseLeave={() => setShowTooltip(null)}
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* Tooltip Teléfono */}
        {showTooltip === 'phone' && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Llámanos ahora
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
}