import { WhatsAppIcon } from "../assets/svgs/WhatsAppIcon";
import { coactiva_config } from "../configs/config";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar los botones después de un pequeño delay para mejor UX
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => window.open(`tel:${coactiva_config.cellphones.one}`, '_self');
  const handleWhatsApp = () => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank');
  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      
      {/* Botón de Llamada */}
      <div className="relative group">
        <button
          onClick={handleCall}
          aria-label="Llamar ahora"
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Phone className="w-5 h-5" />
        </button>
        
        {/* Label */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap relative">
            Llamar ahora
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <div className="relative group">
        <button
          onClick={handleWhatsApp}
          aria-label="Chat por WhatsApp"
          className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="relative left-1 px-3 py-4 rounded-full">
            <WhatsAppIcon />
          </div>
        </button>
        
        {/* Label */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap relative">
            Chat por WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

    </div>
  );
};