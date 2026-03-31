'use client';
import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';

export const WhatsAppCTA = () => (
  <a
    href={WhatsAppService.getWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => WhatsAppService.trackWhatsAppConversion()}
    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4 rounded-lg transition-all shadow-lg"
  >
    <WhatsAppIcon className="w-6 h-6" />
    Hablar por WhatsApp
  </a>
);