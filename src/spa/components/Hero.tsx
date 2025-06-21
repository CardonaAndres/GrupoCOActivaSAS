import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';
import { PrincipalHeroCard } from '../hero/PrincipalHeroCard';
import { InfoCards } from '../hero/InfoCards';
import { SliderBrands } from '../hero/SliderBrands';
import { useState, useEffect } from 'react';

export const Hero = () => {
  // Imágenes para desktop - paisaje/horizontal optimizadas para cobro de cartera
  const desktopImages = [
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Martillo judicial con documentos
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Abogado profesional revisando casos
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Oficina legal moderna
    'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Escalas de justicia
    'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Documentos legales y contrato
  ];

  // Imágenes para móvil - formato vertical optimizado para cobro de cartera
  const mobileImages = [
    // Martillo judicial - vertical perfecto para móvil
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
    
    // Profesional legal trabajando - composición vertical
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
    
    // Documentos legales y calculadora - vertical
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
    
    // Balanza de justicia - formato vertical
    'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
    
    // Abogado firmando documentos - vertical
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
    
    // Mesa de trabajo legal - vertical
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
    
    // Documentos de contrato - vertical
    'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
    
    // Oficina de abogados - vertical
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1560&q=80',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 768;
      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop);
        setImageLoaded(false); // Reiniciar carga para nuevas imágenes
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  // Obtener array de imágenes según el dispositivo
  const currentImages = isDesktop ? desktopImages : mobileImages;

  // Cambio automático de imagen cada 7 segundos con animación mejorada
  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) => 
        (prevIndex + 1) % currentImages.length
      );
      
      // Pequeño delay para permitir que se prepare la siguiente imagen
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % currentImages.length
        );
      }, 150);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImages.length]);

  // Precargar imágenes para transiciones fluidas y mejor performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = [
        currentImages[currentImageIndex],
        currentImages[nextImageIndex],
        currentImages[(currentImageIndex + 2) % currentImages.length] // Precargar una más
      ];

      const promises = imagesToPreload.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(promises);
        setImageLoaded(true);
      } catch (error) {
        console.warn('Error precargando imágenes:', error);
        setImageLoaded(true); // Continuar aunque falle la precarga
      }
    };

    preloadImages();
  }, [currentImageIndex, nextImageIndex, currentImages]);

  // Actualizar índices cuando cambia el tipo de dispositivo
  useEffect(() => {
    setCurrentImageIndex(0);
    setNextImageIndex(1);
    setImageLoaded(false);
  }, [isDesktop]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images con crossfade mejorado y optimización móvil */}
      <div className="absolute inset-0 z-0">
        {imageLoaded && (
          <>
            {/* Imagen actual */}
            <motion.div 
              key={`current-${currentImageIndex}-${isDesktop ? 'desktop' : 'mobile'}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                backgroundImage: `url('${currentImages[currentImageIndex]}')`,
                backgroundSize: isDesktop ? 'cover' : 'cover',
                backgroundPosition: isDesktop ? 'center center' : 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed' // Paralax sutil en desktop
              }}
            />
            
            {/* Imagen siguiente para transición suave */}
            <motion.div 
              key={`next-${nextImageIndex}-${isDesktop ? 'desktop' : 'mobile'}`}
              className="absolute inset-0 opacity-0"
              style={{
                backgroundImage: `url('${currentImages[nextImageIndex]}')`,
                backgroundSize: isDesktop ? 'cover' : 'cover',
                backgroundPosition: isDesktop ? 'center center' : 'center top',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </>
        )}
        
        {/* Fallback mientras cargan las imágenes */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-pulse" />
        )}
      </div>
      
      {/* Overlay con gradiente responsivo mejorado */}
      <div className={`absolute inset-0 z-10`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient.overlay}`} />
        {/* Overlay adicional para móvil con mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 md:from-black/40 md:via-transparent md:to-black/20" />
      </div>
      
      {/* Elementos flotantes decorativos con mejor responsive */}
      <div className="absolute inset-0 z-20 hidden md:block">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 w-32 h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className={`absolute bottom-32 left-16 w-24 h-24 lg:w-32 lg:h-32 ${styles.primary[400]}/20 rounded-full blur-2xl`}
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/2 right-1/4 w-20 h-20 lg:w-24 lg:h-24 bg-slate-200/15 rounded-full blur-xl"
        />
      </div>

      {/* Contenido principal con mejor responsive */}
      <div className="relative z-30 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Layout centrado vertical con mejor espaciado móvil */}
          <div className="min-h-screen flex items-center py-8 sm:py-12 md:py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                {/* Header con badge */}
                <PrincipalHeroCard containerVariants={containerVariants} itemVariants={itemVariants}/>
              
                {/* Formulario de contacto */}  
                <ContactForm />
              </div>
              
              {/* Cards de beneficios con mejor responsive y mejor contraste en móvil */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 mt-8 sm:mt-12 md:mt-16"
              >
                <motion.div variants={itemVariants} className="bg-white/15 md:bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/30 md:border-white/20 shadow-xl hover:bg-white/20 md:hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-white rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">Solo pagas por resultados</h3>
                  </div>
                  <p className="text-white/90 md:text-white/80 text-sm md:text-base drop-shadow-md">
                    Sin inversión inicial, sin costos ocultos. Solo cobramos cuando recuperas tu dinero.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white/15 md:bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/30 md:border-white/20 shadow-xl hover:bg-white/20 md:hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className={`p-2 md:p-3 ${styles.primary[600]} rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg`}>
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">Equipo especializado</h3>
                  </div>
                  <p className="text-white/90 md:text-white/80 text-sm md:text-base drop-shadow-md">
                    Abogados expertos en recuperación de cartera con estrategias personalizadas.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white/15 md:bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/30 md:border-white/20 shadow-xl hover:bg-white/20 md:hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-slate-700 rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">Cobertura total</h3>
                  </div>
                  <p className="text-white/90 md:text-white/80 text-sm md:text-base drop-shadow-md">
                    Gestión de cobro en Colombia y toda América Latina con procesos ágiles.
                  </p>
                </motion.div>
              </motion.div>

              {/* Información de contacto */}
              <InfoCards containerVariants={containerVariants} itemVariants={itemVariants} />
              
              {/* Sección de marcas mejorada - Al final */}
              <SliderBrands />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};