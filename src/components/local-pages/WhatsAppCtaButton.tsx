'use client';

import { WhatsAppIcon } from '@/global/components';
import { WhatsAppService } from '@/global/services';

interface Props {
  label?: string;
  className?: string;
}

export const WhatsAppCtaButton = ({
  label = 'Hablar por WhatsApp',
  className = '',
}: Props) => (
  <a
    href={WhatsAppService.getWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => WhatsAppService.trackWhatsAppConversion()}
    className={`inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg ${className}`}
  >
    <WhatsAppIcon className="w-6 h-6" />
    {label}
  </a>
);