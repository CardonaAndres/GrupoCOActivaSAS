import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';
import { PrincipalHeroCard } from '../hero/PrincipalHeroCard';
import { InfoCards } from '../hero/InfoCards';
import { SliderBrands } from '../hero/SliderBrands';
import { useState, useEffect } from 'react';

export const Hero = () => {
  // Imágenes para desktop - paisaje/horizontal
  const desktopImages = [
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Oficina con documentos legales
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Calculadora y documentos financieros
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Profesional revisando documentos
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Apretón de manos - acuerdos
    'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ];

  // Imágenes para móvil - mejor composición vertical
  const mobileImages = [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', // Persona con documentos - vertical
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Manos firmando contrato - vertical
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Calculadora y documentos - vertical
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Persona trabajando - vertical
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Documentos legales - vertical
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Oficina moderna - vertical
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  // Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Obtener array de imágenes según el dispositivo
  const currentImages = isDesktop ? desktopImages : mobileImages;

  // Cambio automático de imagen cada 6 segundos con animación mejorada
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
      }, 100);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImages.length]);

  // Precargar imágenes para transiciones fluidas
  useEffect(() => {
    // Precargar la siguiente imagen
    const nextIndex = (currentImageIndex + 1) % currentImages.length;
    const img = new Image();
    img.src = currentImages[nextIndex];
    
    // Precargar también la imagen actual si cambió el dispositivo
    const currentImg = new Image();
    currentImg.src = currentImages[currentImageIndex];
  }, [currentImageIndex, currentImages]);

  // Actualizar índices cuando cambia el tipo de dispositivo
  useEffect(() => {
    setCurrentImageIndex(0);
    setNextImageIndex(1);
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
      {/* Background Images con crossfade mejorado */}
      <div className="absolute inset-0 z-0">
        {/* Imagen actual */}
        <motion.div 
          key={`current-${currentImageIndex}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94] // Bezier personalizado para suavidad
          }}
          style={{
            backgroundImage: `url('${currentImages[currentImageIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: isDesktop ? 'center' : 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Imagen siguiente para transición suave */}
        <motion.div 
          key={`next-${nextImageIndex}`}
          className="absolute inset-0 opacity-0"
          style={{
            backgroundImage: `url('${currentImages[nextImageIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: isDesktop ? 'center' : 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
      
      {/* Overlay con gradiente responsivo */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient.overlay} z-10`} />
      
      {/* Overlay adicional para móvil para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/20 md:bg-transparent z-15" />
      
      
      {/* Elementos flotantes decorativos */}
      <div className="absolute inset-0 z-20">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className={`absolute bottom-32 left-16 w-32 h-32 ${styles.primary[400]}/20 rounded-full blur-2xl`}
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-slate-200/15 rounded-full blur-xl"
        />
      </div>

      {/* Contenido principal con mejor responsive */}
      <div className="relative z-30 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          {/* Layout centrado vertical con mejor espaciado móvil */}
          <div className="min-h-screen flex items-center py-12 md:py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
                {/* Header con badge */}
                <PrincipalHeroCard containerVariants={containerVariants} itemVariants={itemVariants}/>
              
                {/* Formulario de contacto */}  
                <ContactForm />

              </div>
              
              {/* Cards de beneficios con mejor responsive */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 mt-12 md:mt-16"
              >
                <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-white rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg">Solo pagas por resultados</h3>
                  </div>
                  <p className="text-white/80 text-sm md:text-base">
                    Sin inversión inicial, sin costos ocultos. Solo cobramos cuando recuperas tu dinero.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className={`p-2 md:p-3 ${styles.primary[600]} rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg`}>
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg">Equipo especializado</h3>
                  </div>
                  <p className="text-white/80 text-sm md:text-base">
                    Abogados expertos en recuperación de cartera con estrategias personalizadas.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-slate-700 rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg">Cobertura total</h3>
                  </div>
                  <p className="text-white/80 text-sm md:text-base">
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