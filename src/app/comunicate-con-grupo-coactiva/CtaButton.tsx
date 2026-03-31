'use client'

import { WhatsAppIcon } from '@/global/components'
import { WhatsAppService } from '@/global/services'

export const CtaButton = () => (
    <a
        href={WhatsAppService.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-green-600 font-semibold px-6 py-3 rounded-lg transition-colors shadow-md w-full"
        onClick={() => WhatsAppService.trackWhatsAppConversion()}
    >
        <WhatsAppIcon className="w-5 h-5" />
        Contactar un Asesor
    </a>
)
