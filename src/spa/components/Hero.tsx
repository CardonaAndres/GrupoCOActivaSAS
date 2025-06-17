import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';
import { PrincipalHeroCard } from '../hero/PrincipalHeroCard';
import { InfoCards } from '../hero/InfoCards';
import { SliderBrands } from '../hero/SliderBrands';

export const Hero = () => {

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
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
          backgroundImage: `url('https://impulsapopular.com/wp-content/uploads/2018/05/Alianzas-estrategicas.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay mejorado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient.overlay} z-10`} />
      
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

      {/* Contenido principal */}
      <div className="relative z-30 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Layout centrado vertical */}
          <div className="min-h-screen flex items-center py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16'>
                {/* Header con badge */}
                <PrincipalHeroCard containerVariants={containerVariants} itemVariants={itemVariants}/>
              
                {/* Formulario de contacto */}  
                <ContactForm />

              </div>
              
              {/* Cards de beneficios */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 mt-16"
              >
                <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-xl mr-4 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Solo pagas por resultados</h3>
                  </div>
                  <p className="text-white/80">
                    Sin inversión inicial, sin costos ocultos. Solo cobramos cuando recuperas tu dinero.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${styles.primary[600]} rounded-xl mr-4 shadow-lg`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Equipo especializado</h3>
                  </div>
                  <p className="text-white/80">
                    Abogados expertos en recuperación de cartera con estrategias personalizadas.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-slate-700 rounded-xl mr-4 shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Cobertura total</h3>
                  </div>
                  <p className="text-white/80">
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