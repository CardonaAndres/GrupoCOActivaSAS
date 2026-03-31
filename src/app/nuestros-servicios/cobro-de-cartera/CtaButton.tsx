'use client';

import { WhatsAppIcon } from "@/global/components";
import { WhatsAppService } from "@/global/services";

export const CtaButton = () => (
    <a
        href={WhatsAppService.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
        onClick={() => WhatsAppService.trackWhatsAppConversion()}
    >
        <WhatsAppIcon className="w-6 h-6" />
        Hablar por WhatsApp
    </a>
)