import { useState, useEffect } from 'react';
import { Menu, X, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { styles } from '@/main/assets/ts/styles';
import { ContactForm } from '../hero/ContactForm';

const Navigation = ({ className = "", onLinkClick = () => {} }) => (
  <nav className={`flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 text-white ${className}`}>
    <a href="#inicio" onClick={onLinkClick} className="text-cyan-400 font-medium text-lg md:text-base hover:text-cyan-300 transition-colors">Inicio</a>
    <a href="#nosotros" onClick={onLinkClick} className={`${styles.hover.accentText} transition-colors text-lg md:text-base`}>Sobre nosotros</a>
    <a href="#servicios" onClick={onLinkClick} className={`${styles.hover.accentText} transition-colors text-lg md:text-base`}>Servicios</a>
    <a href="#articulos" onClick={onLinkClick} className={`${styles.hover.accentText} transition-colors text-lg md:text-base`}>Artículos</a>
    <a href="#contacto" onClick={onLinkClick} className={`${styles.hover.accentText} transition-colors text-lg md:text-base`}>Contáctanos</a>
  </nav>
);

const MobileMenu = ({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) => {
  const handleLinkClick = () => {
    onToggle(); // Cierra el menú cuando se hace clic en un enlace
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button 
        onClick={onToggle}
        className="text-white p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile menu overlay with animation */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-teal-900/95 backdrop-blur-md" onClick={onToggle} />
        
        <div className={`relative h-full bg-gradient-to-br from-teal-800 to-teal-900 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <Logo />
              <button 
                onClick={onToggle}
                className="text-white p-2 hover:bg-white/20 rounded-lg transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation */}
            <div className="flex-1 px-6 py-12">
              <Navigation className="text-xl space-y-8" onLinkClick={handleLinkClick} />
              
              {/* Contact info in mobile menu */}
              <div className="mt-16 pt-8 border-t border-white/20">
                <h3 className="text-cyan-400 font-semibold mb-6 text-lg">Contacto rápido</h3>
                <div className="space-y-4 text-white/80">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-cyan-400" />
                    <span>+57 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-cyan-400" />
                    <span>info@grupocoactiva.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-cyan-400" />
                    <span>Guarne, Antioquia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Logo = () => (
  <div className="flex items-center group cursor-pointer">
    <div className="text-cyan-400 mr-3 transition-transform group-hover:scale-110 duration-200">
      <AlertCircle size={32} />
    </div>
    <div className="text-white">
      <div className="text-xl font-bold tracking-wider">GRUPO</div>
      <div className="text-xs tracking-widest opacity-80">COACTIVA S.A.S</div>
    </div>
  </div>
);

export const Hero = () => { 
  const imageURL = 'https://images.pexels.com/photos/3446126/pexels-photo-3446126.jpeg';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-600 to-teal-800">
      {/* Background - Solo visible en desktop */}
      <div className="hidden md:block absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageURL})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-teal-800/60" />
      </div>

      {/* Header con imagen de fondo en móvil */}
      <header className="relative z-10">
        {/* Imagen de fondo solo en móvil */}
        <div className="md:hidden absolute inset-0 h-80">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageURL})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-teal-800/70 to-teal-600" />
        </div>

        {/* Navigation */}
        <div className="relative z-20 px-4 md:px-8 py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Logo />
            <div className="hidden md:block">
              <Navigation />
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[calc(100vh-120px)]">
            {/* Left Content */}
            <div className="lg:w-3/5 py-8 md:py-16 lg:pr-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="text-white block">Enfócate en</span>
                  <span className="text-cyan-400 block">crecer,</span>
                  <span className="text-white block">nosotros cobramos</span>
                  <span className="text-cyan-400">por ti.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Recuperamos tu cartera vencida con estrategias efectivas y profesionales.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                    Ver casos de éxito
                  </button>
                </div>
                
                {/* Mobile Content */}
                <div className="lg:hidden mt-16">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Right Content - Desktop Only */}
            <div className="hidden lg:block lg:w-2/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      {/* Large decorative element - Desktop only */}
      <div className="hidden xl:block absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <div className="text-cyan-300 text-[500px] font-bold leading-none select-none">
          G
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="hidden md:block absolute top-1/4 left-8 opacity-20">
        <div className="w-32 h-32 rounded-full border-2 border-cyan-400/30"></div>
      </div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 opacity-20">
        <div className="w-16 h-16 rounded-full bg-cyan-400/20"></div>
      </div>
    </div>
  );
};