import { useState, useEffect } from 'react';
import { Mail, Menu, Phone, X } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';
import { useNavHook } from '../hooks/useNavHook';
import { Link } from 'react-router-dom';
import { coactiva_config, router } from '@/main/configs/config';
import { InfoCards } from '../hero/InfoCards';
import { SliderBrands } from '../hero/SliderBrands';
import { PrincipalHeroCard } from '../hero/PrincipalHeroCard';

const Navigation = () => {
    const { navItems } = useNavHook();

    return (
        <nav className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-2 lg:space-x-6">
            {navItems.map((item, index) => (
                <Link 
                    to={item.to} 
                    key={item.to} 
                    className="group relative text-teal-800 hover:text-cyan-300 transition-all duration-300 ease-in-out text-lg md:text-base font-medium tracking-wide px-4 py-2 rounded-lg hover:scale-105 transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    {/* Efecto de brillo sutil */}
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></span>
                    
                    {/* Borde animado */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-300 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                    
                    {/* Texto con efecto de resplandor */}
                    <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(103,232,249,0.6)] transition-all duration-300">
                        {item.name}
                    </span>
                </Link>
            ))}
        </nav>
    )
}

const MobileMenu = ({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) => {
  const { navItems } = useNavHook();

  const handleLinkClick = () => {
    onToggle();
  };

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
      {/* Menu Toggle Button */}
      <button 
        onClick={onToggle}
        className="text-teal-800 p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 z-50 relative"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-[9999] transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={onToggle} 
        />
        
        {/* Menu content - Slide from top */}
        <div className={`absolute top-0 left-0 right-0 bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-4 py-6">
            {/* Header with logo and close button */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
              <img 
                src='/logo-removebg.png' 
                alt='Logo de Grupo Coactiva' 
                className='w-24 h-auto' 
              />
              <button 
                onClick={onToggle}
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Navigation Links - Clean and simple */}
            <nav className="space-y-1 mb-6">
              {navItems.map((item, index) => (
                <Link
                  to={item.to}
                  key={item.to}
                  onClick={handleLinkClick}
                  className="block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 py-3 px-4 rounded-lg font-medium text-base"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.3s ease-out ${index * 100}ms`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Contact Info - Simplified */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <Phone size={16} className="mr-2 text-teal-600" />
                <span>+57 3018594940</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Mail size={16} className="mr-2 text-teal-600" />
                <span>comercial@grupocoactivasas.com</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link to={router.contact}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Solicitar consulta gratuita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Logo = () => (
  <Link to={router.home} className="flex items-center group cursor-pointer">
    <div className="mr-3 transition-transform group-hover:scale-110 duration-200">
      <img src='/logo-removebg.png' alt='Logo de Grupo Coactiva' className='w-28 sm:w-32 h-auto' />
    </div>
  </Link>
);

export const Hero = () => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  return (
    <div className="min-h-screen bg-teal-50/10 overflow-hidden">

      {/* Header con fondo siempre blanco */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Logo />
            
            {/* Botón de contacto - Mejorado para responsive */}
            <div className="flex-1 px-2 sm:px-3 md:px-6 max-w-full md:max-w-lg">
              <button onClick={() => {window.open(`tel:${coactiva_config.cellphones.one}`, '_self')}} 
                className="group inline-flex items-center gap-1.5 sm:gap-2 text-teal-800/80 hover:text-teal-800 transition-colors w-full justify-center md:justify-start"
              >
                
                {/* Versión móvil - texto completo en columnas */}
                <span className="flex flex-col sm:hidden text-[10.5px] leading-tight text-center">
                  <span>¿Tus clientes te deben y no te pagan?</span>
                  <span className="font-semibold mt-0.5">
                    Contáctanos: {coactiva_config.cellphones.one}
                  </span>
                </span>
                
                {/* Versión tablet - formato intermedio */}
                <span className="hidden sm:flex md:hidden flex-col text-xs leading-tight">
                  <span>¿Tus clientes te deben?</span>
                  <span className="font-medium mt-0.5">
                    Contáctanos: {coactiva_config.cellphones.one}
                  </span>
                </span>
                
                {/* Versión desktop - completa en línea */}
                <span className="hidden md:block text-sm">
                  <span className="inline">¿Tus clientes te deben y no te pagan?</span>
                  <span className="inline ml-1">
                    Contáctanos: <span className="font-medium underline">{coactiva_config.cellphones.one}</span>
                  </span>
                </span>
              </button>
            </div>
            
            {/* Navegación desktop */}
            <div className="hidden lg:block">
              <Navigation />
            </div>
            
            {/* Menú móvil */}
            <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="z-10 px-4 md:px-8 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[calc(100vh-120px)]">
            {/* Left Content */}
            <div className="lg:w-3/5 py-8 md:py-16 lg:pr-12">
                <PrincipalHeroCard
                    containerVariants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
                    itemVariants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                />
            </div>

            <div className="lg:w-2/5 relative z-10 pt-10">
              <ContactForm />
            </div>
            
          </div>
        </div>
        <div className='pt-10 sm:pt-16 relative z-10'>
            <InfoCards />
        </div>
        <div className='pb-10 sm:pt-16 relative z-10'>
            <SliderBrands />
        </div>
      </main>
    </div>
  );
};