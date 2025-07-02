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
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-9">
              <div className='w-26 h-26 flex items-center justify-center'>
                <img src={Logo} alt="coactiva logo" className='w-full h-full object-contain' />
              </div>
              <div>
                <h1 className="text-xs text-slate-500">{coactiva_config.titles.two}</h1>
              </div>
            </motion.div>
          </Link>
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