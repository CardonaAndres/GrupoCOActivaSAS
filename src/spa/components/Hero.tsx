import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, Users, Award, Globe } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';

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
          backgroundImage: `url('/ImgDeEjemplo.webp')`,
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
                <motion.div variants={containerVariants} initial="hidden"
                  animate="visible" className="text-center mb-12">
                  <motion.div variants={itemVariants} className="mb-8">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg shadow-black/10">
                      <Award className="w-5 h-5 text-white mr-3" />
                      <span className="text-white text-sm">
                        Más de 15 años recuperando carteras en Colombia y América Latina
                      </span>
                    </div>
                  </motion.div>

                  {/* Título principal */}
                  <motion.div variants={itemVariants} className="mb-8">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                      Haz que tu 
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                        negocio avance
                      </span>
                    </h1>
                    <p className="text-2xl lg:text-3xl text-white/90 font-light max-w-4xl mx-auto">
                      Deja el cobro de cartera en nuestras manos expertas
                    </p>
                  </motion.div>

                  {/* Descripción */}
                  <motion.p variants={itemVariants} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
                    Somos tu aliado estratégico para la recuperación de cartera y gestión de cobro jurídico. 
                    Soluciones efectivas, rápidas y seguras que protegen tu patrimonio financiero.
                  </motion.p>

                  {/* Botones de acción */}
                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                    
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-slate-900/80 backdrop-blur-md text-white font-bold text-lg rounded-full border border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300 min-w-[200px]"
                    >
                      Ver Servicios
                    </motion.button>
                  </motion.div>
                </motion.div>
              
                {/* Formulario de contacto */}  
                <ContactForm />

              </div>
              
              {/* Cards de beneficios */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12"
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
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center"
              >
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 text-white/90">
                  <div className="flex items-center group cursor-pointer hover:text-white transition-colors">
                    <div className={`p-2 ${styles.primary[600]} rounded-lg mr-3 group-hover:bg-green-500 transition-colors`}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Consulta inmediata</p>
                      <p className="text-sm text-white/70">Respuesta en minutos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group cursor-pointer hover:text-white transition-colors">
                    <div className="p-2 bg-white rounded-lg mr-3 group-hover:bg-slate-100 transition-colors">
                      <Mail className="w-5 h-5 text-green-700" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">info@grupocoactiva.com</p>
                      <p className="text-sm text-white/70">Asesoría personalizada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group cursor-pointer hover:text-white transition-colors">
                    <div className="p-2 bg-slate-700 rounded-lg mr-3 group-hover:bg-slate-600 transition-colors">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Medellín, Colombia</p>
                      <p className="text-sm text-white/70">Circular 76 #39B-135</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};