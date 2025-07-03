import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon'
import { coactiva_config } from '@/main/configs/config'
import { motion } from 'framer-motion'
import { Quote, Star, Users, Building2, CheckCircle, Sparkles, ArrowRight, Phone, Shield } from 'lucide-react'

export const References = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const references = [
    {
      company: "Casa Arango",
      logo: "/allies_logos/casa_arango.webp",
      manager: "Daniel Arango",
      position: "Gerente General",
      testimonial: "Para nosotros en Casa Arango, trabajar con Grupo Coactiva ha representado una alianza estratégica clave en nuestra gestión de Recuperación de cartera. Su equipo se ha destacado por su profesionalismo, eficiencia.",
      rating: 5,
    },
    {
      company: "Elastic Server",
      logo: "/allies_logos/elasticserver.webp",
      manager: "Andrés Saldarriaga",
      position: "Gerente General",
      testimonial: "Contar con Grupo Coactiva ha sido una decisión acertada para Elastic Server. Su enfoque estratégico y la solidez de sus procesos de recuperación de cartera nos han permitido mejorar significativamente nuestros indicadores financieros. Valoramos especialmente su capacidad de adaptación a nuestras políticas internas y la transparencia con la que gestionan cada caso.",
      rating: 5,
    },
    {
      company: "Ingecon Obras & Contratos SAS",
      logo: "/allies_logos/ingecon.webp",
      manager: "Mauricio Ocampo",
      position: "Gerente General",
      testimonial: "En Ingecon, confiamos en Grupo Coactiva para la gestión de nuestra cartera institucional y ha sido una decisión estratégica acertada. Su equipo combina eficiencia, seriedad y un manejo respetuoso de cada caso, cuidando siempre la imagen de nuestra empresa frente a los clientes. Gracias a su gestión, hemos optimizado tiempos de recuperación y fortalecido nuestra liquidez operativa. Son un aliado confiable para cualquier empresa de ingeniería que valore resultados con responsabilidad.",
      rating: 5,
    }
  ]

  const stats = [
    { 
      icon: Users, 
      value: "500+", 
      label: "Empresas Confían en Nosotros", 
      gradient: "from-teal-700 via-teal-500 to-teal-800" 
    },
    { 
      icon: CheckCircle, 
      value: "95%", 
      label: "Casos Exitosos", 
      gradient: "from-teal-700 via-teal-500 to-teal-800" 
    },
    { 
      icon: Building2, 
      value: "$50M+", 
      label: "Recuperados para Clientes", 
      gradient: "from-teal-700 via-teal-500 to-teal-800" 
    }
  ]

  return (
    <section className="py-16 sm:py-16 bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={floatingAnimation} className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full blur-3xl"
        />
        <motion.div animate={floatingAnimation} style={{ animationDelay: "1s" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-teal-100/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-teal-700" />
              <span className="text-teal-700 font-medium text-sm">100% Casos Verificables</span>
            </div>
            
            <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-teal-700 via-teal-500 to-teal-800 bg-clip-text text-transparent mb-6">
              Ellos Recuperan Su Cartera Con Nosotros
            </h2>
            <p className="text-lg sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              ¡Más de 500 empresas ya lo hicieron! Transforma tu cartera vencida en liquidez inmediata.
            </p>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-teal-600 to-cyan-500 mx-auto mt-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Stats Section with CTA */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={cardVariants} whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-teal-100/50 text-center">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}
                      className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.div 
                      className="text-4xl font-bold text-transparent bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-gray-600 font-medium"> {stat.label} </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA after stats */}
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-gray-700 font-medium mb-4">
                ¿Quieres resultados como estos?
              </p>
              <motion.button
                onClick={() => {
                  window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')}
                } whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Empieza tu recuperación gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* References Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {references.map((reference, index) => (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -12 }}
                className="group relative">
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100/30 overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/20 to-cyan-100/20 rounded-full -translate-y-16 translate-x-16" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-10 -left-10 w-40 h-40 opacity-5"
                  >
                    <Sparkles className="w-full h-full text-teal-600" />
                  </motion.div>

                  {/* Company Info */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div whileHover={{ scale: 1.05, rotate: 5 }}
                        className="w-36 h-20 rounded-2xl overflow-hidden bg-white p-2 shadow-lg border-2 border-teal-100"
                      >
                        <img src={reference.logo} alt={`${reference.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {reference.company}
                        </h3>
                        <div className="flex gap-1">
                          {[...Array(reference.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-3 w-8 h-8 text-teal-200" />
                    <blockquote className="relative z-10 text-gray-700 leading-relaxed italic pl-6">
                      {reference.testimonial}
                    </blockquote>
                  </div>

                  {/* Manager Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-teal-100/50">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-700 via-teal-500 to-teal-800 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {reference.manager.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        {reference.manager}
                      </div>
                      <div className="text-sm text-gray-600">
                        {reference.position}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Tu Empresa Puede Ser la Próxima Historia de Éxito
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Sin costos iniciales • Resultados en 30 días • Garantía de satisfacción
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button onClick={() => {
                  window.open(`tel:${coactiva_config.cellphones.one}`, '_self')}
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-teal-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                Llama ahora: { coactiva_config.cellphones.one }
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button onClick={() => {
                  window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')}
                } rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all duration-300 flex items-center justify-center shadow-xl"
              >
                <WhatsAppIcon />
                Escríbenos por WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}