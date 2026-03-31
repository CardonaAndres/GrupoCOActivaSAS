'use client';

import { WhatsAppIcon } from "@/global/components";
import { WhatsAppService } from "@/global/services";

export const CtaButton = () => (
    <a
        href={WhatsAppService.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-sm uppercase tracking-widest shadow-md"
        onClick={() => WhatsAppService.trackWhatsAppConversion()}
    >
        <WhatsAppIcon className="w-5 h-5" />
        Escribir a un asesor
    </a>
)
