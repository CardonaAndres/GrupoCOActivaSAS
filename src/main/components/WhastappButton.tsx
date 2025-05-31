import { WhatsAppIcon } from "../assets/svgs/WhatsAppIcon";
import { coactiva_config } from "../configs/config";

export const WhatsappButton = () => {
  return (
    <a href={`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-3 right-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
         <div className="relative left-1">
            <WhatsAppIcon />
        </div>
    </a>
  );
};
