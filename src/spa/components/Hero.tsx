import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';
import { PrincipalHeroCard } from '../hero/PrincipalHeroCard';
import { InfoCards } from '../hero/InfoCards';
import { SliderBrands } from '../hero/SliderBrands';
import { useState, useEffect } from 'react';

export const Hero = () => {
  // Imágenes para desktop - estilo jurídico profesional con calidad máxima
  const desktopImages = [
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=95',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=95',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=95'
  ];

  // Imágenes para móvil - formato vertical con calidad máxima estilo jurídico profesional
  const mobileImages = [
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&h=2560&q=95',
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&h=2560&q=95',
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
        setImageLoaded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  // Obtener array de imágenes según el dispositivo
  const currentImages = isDesktop ? desktopImages : mobileImages;

  // Cambio automático de imagen cada 8 segundos para mejor apreciación
  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) => 
        (prevIndex + 1) % currentImages.length
      );
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % currentImages.length
        );
      }, 150);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentImages.length]);

  // Precargar imágenes con alta prioridad
  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = [
        currentImages[currentImageIndex],
        currentImages[nextImageIndex],
        currentImages[(currentImageIndex + 2) % currentImages.length]
      ];

      const promises = imagesToPreload.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.loading = 'eager'; // Prioridad alta
          img.decoding = 'async'; // No bloquear el hilo principal
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
        setImageLoaded(true);
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
      opacity: [0.8, 0.8, 0.8], // Reducido para no opacar la imagen
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images con mejor calidad y renderizado */}
      <div className="absolute inset-0 z-0">
        {imageLoaded && (
          <>
            {/* Imagen actual con mejor renderizado */}
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
                backgroundSize: 'cover',
                backgroundPosition: isDesktop ? 'center center' : 'center center',
                backgroundRepeat: 'no-repeat',
                imageRendering: 'crisp-edges', // Mejor renderizado
                WebkitBackfaceVisibility: 'hidden', // Previene parpadeos
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)' // Habilita aceleración por hardware
              }}
            />
            
            {/* Imagen siguiente precargada */}
            <motion.div 
              key={`next-${nextImageIndex}-${isDesktop ? 'desktop' : 'mobile'}`}
              className="absolute inset-0 opacity-0"
              style={{
                backgroundImage: `url('${currentImages[nextImageIndex]}')`,
                backgroundSize: 'cover',
                backgroundPosition: isDesktop ? 'center center' : 'center center',
                backgroundRepeat: 'no-repeat',
                imageRendering: 'crisp-edges',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
            />
          </>
        )}
        
        {/* Fallback minimalista mientras cargan */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
        )}
      </div>
      
      {/* Overlay minimalista - mucho más transparente */}
      <div className="absolute inset-0 z-10">
        {/* Overlay principal muy sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10" />
        
        {/* Overlay inferior para legibilidad del contenido */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      
      {/* Elementos flotantes decorativos más sutiles */}
      <div className="absolute inset-0 z-20 hidden lg:block">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 w-32 h-32 lg:w-40 lg:h-40 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className={`absolute bottom-32 left-16 w-24 h-24 lg:w-32 lg:h-32 ${styles.primary[400]}/10 rounded-full blur-2xl`}
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/2 right-1/4 w-20 h-20 lg:w-24 lg:h-24 bg-slate-200/5 rounded-full blur-xl"
        />
      </div>

      {/* Contenido principal con mejor contraste */}
      <div className="relative z-30 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Layout centrado vertical */}
          <div className="min-h-screen flex items-center py-8 sm:py-12 md:py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                {/* Header con badge */}
                <PrincipalHeroCard containerVariants={containerVariants} itemVariants={itemVariants}/>
              
                {/* Formulario de contacto */}  
                <ContactForm />
              </div>
              
              {/* Cards de beneficios con más backdrop-blur para contraste */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 mt-8 sm:mt-12 md:mt-16"
              >
                <motion.div variants={itemVariants} className="bg-black/30 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/25 shadow-2xl hover:bg-black/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-white rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">Solo pagas por resultados</h3>
                  </div>
                  <p className="text-white/95 text-sm md:text-base drop-shadow-md">
                    Sin inversión inicial, sin costos ocultos. Solo cobramos cuando recuperas tu dinero.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-black/30 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/25 shadow-2xl hover:bg-black/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className={`p-2 md:p-3 ${styles.primary[600]} rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg`}>
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">Equipo especializado</h3>
                  </div>
                  <p className="text-white/95 text-sm md:text-base drop-shadow-md">
                    Abogados expertos en recuperación de cartera con estrategias personalizadas.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-black/30 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/25 shadow-2xl hover:bg-black/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-slate-700 rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">Cobertura total</h3>
                  </div>
                  <p className="text-white/95 text-sm md:text-base drop-shadow-md">
                    Gestión de cobro en Colombia y toda América Latina con procesos ágiles.
                  </p>
                </motion.div>
              </motion.div>

              {/* Información de contacto */}
              <InfoCards containerVariants={containerVariants} itemVariants={itemVariants} />
              
              {/* Sección de marcas */}
              <SliderBrands />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};