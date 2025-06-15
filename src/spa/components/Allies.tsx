import { styles } from '@/main/assets/ts/styles'
import { motion } from 'framer-motion'
import { Handshake, Star } from 'lucide-react'
import { useAlliesHook } from '../hooks/useAlliesHook'

export const Allies = () => {
    const { partners } = useAlliesHook();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className={`py-20 bg-gradient-to-br ${styles.gradient.accent} relative overflow-hidden`}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="mb-4">
            <span className={`inline-flex items-center px-4 py-2 rounded-full ${styles.primary[100]} ${styles.text.primary} text-sm font-medium border ${styles.border.primary}`}>
              <Handshake className="w-4 h-4 mr-2" />
              Alianzas Estratégicas
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${styles.text.primary} mb-6`}
          >
            Nuestros{' '}
            <span className={`${styles.text.accent}`}>
              Aliados
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className={`text-xl ${styles.text.gray} max-w-3xl mx-auto leading-relaxed`}
          >
            Trabajamos junto a las empresas más reconocidas y confiables del sector, 
            construyendo alianzas estratégicas que nos permiten ofrecer soluciones 
            integrales y de la más alta calidad a nuestros clientes.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
    
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 ${styles.accent[500]} rounded-2xl mb-4`}>
              <Handshake className={`w-8 h-8 ${styles.text.white}`} />
            </div>
            <div className={`text-3xl font-bold ${styles.text.primary} mb-2`}>15+</div>
            <div className={`${styles.text.gray} font-medium`}>Países de Cobertura</div>
          </div>
          
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${styles.gradient.primary} rounded-2xl mb-4`}>
              <Star className={`w-8 h-8 ${styles.text.white}`} />
            </div>
            <div className={`text-3xl font-bold ${styles.text.primary} mb-2`}>98%</div>
            <div className={`${styles.text.gray} font-medium`}>Satisfacción</div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`bg-white rounded-2xl p-6 ${styles.shadow.card} border ${styles.border.gray} 
              transition-all duration-300 group cursor-pointer`}
            >
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 
                           transition-all duration-300 filter group-hover:brightness-110"
                />
                {/* Fallback content */}
                <div className={`hidden w-full h-full items-center justify-center ${styles.primary[100]} rounded-lg`}>
                  <div className={`text-2xl font-bold ${styles.text.primary}`}>
                    {partner.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <div className={`bg-gradient-to-r ${styles.gradient.primary} rounded-3xl p-8 sm:p-12`}>
            <h3 className={`text-2xl sm:text-3xl font-bold ${styles.text.white} mb-4`}>
              ¿Quieres ser nuestro aliado?
            </h3>
            <p className={`text-lg ${styles.text.white} opacity-90 mb-8 max-w-2xl mx-auto`}>
              Únete a nuestra red de aliados estratégicos y juntos construyamos 
              soluciones innovadoras para el mercado latinoamericano.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white ${styles.text.primary} font-bold py-4 px-8 rounded-xl 
                         transition-all duration-300 ${styles.shadow.white} hover:shadow-xl 
                         transform hover:-translate-y-1`}
            >
              Conviértete en Aliado
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl" />
      </motion.div>
    </section>
  )
}
