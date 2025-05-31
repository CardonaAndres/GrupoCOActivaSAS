import { useState } from 'react';
import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { Phone, Mail, Menu, X, ChevronDown, Shield, Users, Globe } from 'lucide-react';
import { coactiva_config } from '@/main/configs/config';
import { useNavHook } from '../hooks/useNavHook';

export const Navbar = () => {
  const { navItems } = useNavHook();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdown = (dropdown : any) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
      {/* Barra superior de contacto */}
      <div className={`${styles.primary[700]} ${styles.text.white} py-2`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>Consulta Gratuita: {coactiva_config.cellphones.one} </span>
              </div>
              <div className="hidden md:flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span> {coactiva_config.emails.one} </span>
              </div> 
            </div>
            <div className="hidden lg:block">
              <span className="font-medium">🕒 Respuesta inmediata</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className={`p-2 ${styles.primary[700]} rounded-xl ${styles.shadow.primary}`}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${styles.text.primary}`}>
                <span className={`${styles.text.accent}`}>{coactiva_config.titles.one}</span>
              </h1>
              <p className="text-xs text-slate-500">{coactiva_config.titles.two}</p>
            </div>
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Servicios Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('servicios')}
                className={`flex items-center space-x-1 ${styles.text.accent} ${styles.hover.primaryText} font-medium transition-colors py-2`}
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'servicios' ? 'rotate-180' : ''}`} />
              </button>
              
              <motion.div
                variants={dropdownVariants}
                animate={activeDropdown === 'servicios' ? 'open' : 'closed'}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
              >
                <div className="p-2">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                    <div className={`p-2 ${styles.primary[100]} rounded-lg mr-3 group-hover:${styles.primary[200]} transition-colors`}>
                      <Shield className={`w-5 h-5 ${styles.text.primary}`} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Cobro Jurídico</p>
                      <p className="text-sm text-slate-500">Procesos legales especializados</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                    <div className={`p-2 ${styles.accent[100]} rounded-lg mr-3 group-hover:${styles.accent[200]} transition-colors`}>
                      <Users className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Gestión Extrajudicial</p>
                      <p className="text-sm text-slate-500">Negociación y acuerdos</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                    <div className={`p-2 ${styles.primary[100]} rounded-lg mr-3 group-hover:${styles.primary[200]} transition-colors`}>
                      <Globe className={`w-5 h-5 ${styles.text.primary}`} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Cobertura Internacional</p>
                      <p className="text-sm text-slate-500">América Latina</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Otros enlaces */}
            {navItems.map((item, index) => (
              <a href={item.to} key={index} className={`${styles.text.accent} ${styles.hover.primaryText} font-medium transition-colors`}>
              {item.name}
            </a>
            ))}
            
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 ${styles.text.accent} ${styles.hover.primaryText} transition-colors`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        <motion.div
          variants={menuVariants}
          animate={isMenuOpen ? 'open' : 'closed'}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4 border-t border-slate-100">
            
            {/* Servicios Mobile */}
            <div>
              <button
                onClick={() => handleDropdown('servicios-mobile')}
                className={`flex items-center justify-between w-full px-4 py-3 ${styles.text.accent} font-medium text-left`}
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'servicios-mobile' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'servicios-mobile' && (
                <div className="ml-4 space-y-2 mt-2">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <Shield className={`w-5 h-5 ${styles.text.primary} mr-3`} />
                    <div>
                      <p className="font-medium text-slate-800">Cobro Jurídico</p>
                      <p className="text-sm text-slate-500">Procesos legales</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <Users className="w-5 h-5 text-slate-700 mr-3" />
                    <div>
                      <p className="font-medium text-slate-800">Gestión Extrajudicial</p>
                      <p className="text-sm text-slate-500">Negociación</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Otros enlaces mobile */}
            {navItems.map((item, index) => (
              <a href={item.to} key={index} className={`block px-4 py-3 ${styles.text.accent} font-medium`}>
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};