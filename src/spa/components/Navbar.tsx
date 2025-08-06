import Logo from '@/main/assets/imgs/logo.jpg';
import { useState } from 'react';
import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { coactiva_config, router } from '@/main/configs/config';
import { useNavHook } from '../hooks/useNavHook';
import { Link } from 'react-router-dom';

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

export const Navbar = () => {
  const { navItems } = useNavHook();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
      {/* Barra superior de contacto */}
      <div className={`${styles.primary[700]} ${styles.text.white} py-2`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden lg:block">
              <span className="font-medium">🕒 Respuesta inmediata</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>Consulta Gratuita: +57 {coactiva_config.cellphones.one} </span>
              </div>
              <div className="hidden md:flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span> {coactiva_config.emails.one} </span>
              </div> 
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to={router.home}>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <div className='w-24 h-24 flex items-center justify-center'>
                <img src={Logo} alt="coactiva logo" className='w-full h-full object-contain' />
              </div>
              <div>
                <h1 className="text-xs text-slate-500 hidden">{coactiva_config.titles.two}</h1>
              </div>
            </motion.div>
          </Link>

          {/* CTA Central - Texto de contacto */}
          <div className="flex-1 px-3 sm:px-4 md:px-8 max-w-full lg:max-w-xl">
            <button onClick={() => {window.open(`tel:${coactiva_config.cellphones.one}`, '_self')}} 
              className="group inline-flex items-center gap-1.5 sm:gap-2 text-teal-800/80 hover:text-teal-800 transition-colors w-full justify-center"
            > 
              {/* Versión móvil - texto completo en columnas */}
              <span className="flex flex-col sm:hidden text-[10.5px] leading-tight text-center">
                <span>¿Tus clientes te deben y no te pagan?</span>
                <span className="font-semibold mt-0.5">
                  Contáctanos: {coactiva_config.cellphones.one}
                </span>
              </span>
              
              {/* Versión tablet - formato intermedio */}
              <span className="hidden sm:flex lg:hidden flex-col text-xs leading-tight text-center">
                <span>¿Tus clientes te deben y no te pagan?</span>
                <span className="font-medium mt-0.5">
                  Contáctanos: {coactiva_config.cellphones.one}
                </span>
              </span>
              
              {/* Versión desktop - completa en línea */}
              <span className="hidden lg:block text-sm">
                <span className="inline">¿Tus clientes te deben y no te pagan?</span>
                <span className="inline ml-1">
                  Contáctanos: <span className="font-medium underline">{coactiva_config.cellphones.one}</span>
                </span>
              </span>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Otros enlaces */}
            {navItems.map((item, index) => (
              <Link to={item.to} key={index} className={`${styles.text.accent} ${styles.hover.primaryText} font-medium transition-colors`}>
               {item.name}
             </Link>
            ))}
            
          </div>

          {/* Menu Mobile Button */}
          <button onClick={toggleMenu} aria-label='Boton desplegable'
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
            
            {/* Otros enlaces mobile */}
            {navItems.map((item, index) => (
              <Link to={item.to} key={index} className={`block px-4 py-3 ${styles.text.accent} font-medium`}>
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};