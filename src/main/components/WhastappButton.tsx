import { WhatsAppIcon } from "../assets/svgs/WhatsAppIcon";
import { coactiva_config } from "../configs/config";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsappButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Mostrar el botón después de un pequeño delay para mejor UX
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    setHasInteracted(true);
    window.open(`tel:${coactiva_config.cellphones.one}`, '_self');
  };

  const handleWhatsApp = () => {
    setHasInteracted(true);
    window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}?text=Hola,%20me%20gustaría%20obtener%20más%20información`, '_blank');
  };

  const toggleMenu = () => {
    setHasInteracted(true);
    setIsExpanded(!isExpanded);
  };

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event : any) => {
      if (isExpanded && !event.target.closest('.floating-menu-container')) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded]);

  if (!isVisible) return null;

  return (
    <div className="floating-menu-container fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Backdrop para cerrar en mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-opacity-80 md:bg-transparent -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Opciones expandidas */}
      <div className={`flex flex-col items-end space-y-3 transition-all duration-300 ease-out transform ${
        isExpanded 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
        
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
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap relative">
              Llamar ahora
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
        </div>

        {/* Botón de WhatsApp directo */}
        <div className="relative group">
          <button
            onClick={handleWhatsApp}
            aria-label="Chat directo por WhatsApp"
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="relative left-1 p-4 rounded-full">
              <WhatsAppIcon />
            </div>
            
          </button>
          
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap relative">
              Chat por WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Botón Principal - Menú */}
      <div className="relative">
        {/* Efecto de pulso cuando no ha interactuado */}
        {!hasInteracted && (
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
        )}
        
        <button
          onClick={toggleMenu}
          aria-label={isExpanded ? "Cerrar menú de contacto" : "Abrir menú de contacto"}
          className={`relative p-5 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
            isExpanded 
              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
              : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
          } text-white`}
        >
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </div>
        </button>

        {/* Tooltip del botón principal */}
        {!isExpanded && (
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap relative">
              Opciones de contacto
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
        )}

        {/* Indicador de nuevas opciones */}
        {!isExpanded && !hasInteracted && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
        )}
      </div>
    </div>
  );
};