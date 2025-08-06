import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';
import { useNavHook } from '../hooks/useNavHook';
import { Link } from 'react-router-dom';
import { router } from '@/main/configs/config';
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
                    className="group relative text-white md:text-white hover:text-cyan-300 transition-all duration-300 ease-in-out text-lg md:text-base font-medium tracking-wide px-4 py-2 rounded-lg hover:scale-105 transform"
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
    <div className="md:hidden z-[999]">
      <button 
        onClick={onToggle}
        className="text-white p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 z-50 relative"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={onToggle} 
        />
        
        {/* Menu content */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center">
                <img 
                  src='/logo-removebg.png' 
                  alt='Logo de Grupo Coactiva' 
                  className='w-32 h-auto' 
                />
              </div>
              <button 
                onClick={onToggle}
                className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    to={item.to}
                    key={item.to}
                    onClick={handleLinkClick}
                    className="group relative block text-gray-700 text-lg hover:text-cyan-300 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-cyan-50/30 hover:shadow-md hover:scale-[1.02] transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Efecto de brillo lateral */}
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-300 to-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-full"></span>
                    
                    {/* Efecto de resplandor de fondo */}
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-300/5 via-cyan-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    
                    {/* Texto con efectos */}
                    <span className="relative z-10 font-medium tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(103,232,249,0.4)] group-hover:translate-x-2 transition-all duration-300">
                      {item.name}
                    </span>
                    
                    {/* Indicador de flecha */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </Link>
                ))}
              </div>
              
              {/* Contact info in mobile menu */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-cyan-600 font-semibold mb-4 text-lg drop-shadow-sm">Contacto rápido</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-50/20 transition-all duration-200 hover:shadow-sm">
                    <Phone size={18} className="text-cyan-500" />
                    <span>+57 3018594940</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-50/20 transition-all duration-200 hover:shadow-sm">
                    <Mail size={18} className="text-cyan-500" />
                    <span>comercial@grupocoactivasas.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 bg-gray-50">
              <Link to={router.contact} className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-300/30">
                <span className="drop-shadow-sm">Solicitar consulta</span>
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
    <div className="text-cyan-400 mr-3 transition-transform group-hover:scale-110 duration-200">
      <img src='/logo-removebg.png' alt='Logo de Grupo Coactiva' className='w-36 h-auto' />
    </div>
  </Link>
);

export const Hero = () => { 
  const imageURL = 'https://static.vecteezy.com/system/resources/previews/029/285/934/non_2x/ai-generative-of-a-man-practicing-mindfulness-and-meditation-in-a-peaceful-natural-environment-sony-a7s-realistic-image-ultra-hd-high-design-very-detailed-free-photo.jpg';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-teal-600">
      {/* Background - Solo visible en desktop */}
      <div className="hidden md:block absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageURL})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-teal-800/70" />
      </div>

      {/* Header con imagen de fondo en móvil */}
      <header className="z-10">
        {/* Imagen de fondo solo en móvil */}
        <div className="md:hidden absolute inset-0 h-96">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageURL})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 to-teal-800/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-600 via-teal-300/ to-teal-50/"></div>
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
      <main className="relative z-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[calc(100vh-120px)]">
            {/* Left Content */}
            <div className="lg:w-3/5 py-8 md:py-16 lg:pr-12">
                <PrincipalHeroCard
                    containerVariants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
                    itemVariants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                />
            </div>

            <ContactForm />
            
          </div>
        </div>
        <div className='pt-10'>
            <InfoCards />
        </div>
        <div className='pb-10'>
            <SliderBrands />
        </div>
      </main>

      {/* Gradiente difuminado hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-50 via-cyan-50/50 to-transparent pointer-events-none"></div>
      
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