import { styles } from "@/main/assets/ts/styles";
import { Handshake, HelpCircle, Users, ChevronRight, Star } from "lucide-react";
import { coactiva_config, router } from "@/main/configs/config";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/main/assets/svgs/WhatsAppIcon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    }
  }
}

const cardData = [
  {
    title: "Sobre Nosotros",
    description: "Conoce nuestra historia, misión, visión y los valores que nos impulsan a ser líderes en recuperación de cartera.",
    icon: Users,
    gradient: styles.gradient.primary,
    textColor: styles.text.primary,
    borderColor: styles.border.primary,
    hoverBorder: "hover:border-teal-400",
    action: "Conocer más",
    route: router.about,
    badge: "10+ años",
    features: ["Experiencia comprobada"]
  },
  {
    title: "Nuestros Aliados",
    description: "Descubre las empresas y organizaciones que confían en nosotros para fortalecer sus finanzas.",
    icon: Handshake,
    gradient: styles.gradient.accentDark,
    textColor: styles.text.accent,
    borderColor: styles.border.accent,
    hoverBorder: "hover:border-cyan-400",
    action: "Ver aliados",
    route: router.allies,
    badge: "500+ clientes",
    features: ["Confianza empresarial"]
  },
  {
    title: "Preguntas Frecuentes",
    description: "Resuelve todas tus dudas sobre nuestros servicios y procesos de recuperación de cartera de manera rápida.",
    icon: HelpCircle,
    gradient: styles.gradient.primary,
    textColor: styles.text.primary,
    borderColor: styles.border.primary,
    hoverBorder: "hover:border-teal-400",
    action: "Resolver mis dudas",
    route: router.FAQ,
    badge: "24/7 soporte",
    features: ["Soporte especializado"]
  }
]

export const CardsNavigation = () => {
  const handleNavigation = (route : string) => window.location.href = route;

  return (
    <section className={`py-16 lg:py-16 bg-gradient-to-br ${styles.gradient.accent} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm ${styles.text.primary} text-sm font-medium mb-6`}>
            <Star className="w-4 h-4 mr-2" />
            Explora nuestras secciones
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${styles.text.primary} mb-4`}>
            Descubre todo sobre
            <span className={`block bg-gradient-to-r ${styles.gradient.primary} bg-clip-text text-transparent`}>
              Grupo Coactiva
            </span>
          </h2>
          <p className={`text-lg ${styles.text.secondary} max-w-3xl mx-auto`}>
            Navega por las secciones más importantes y conoce todo lo que necesitas sobre nuestros servicios
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <motion.button
                onClick={() => handleNavigation(card.route)}
                className={`
                  w-full bg-white/95 backdrop-blur-sm rounded-3xl p-8 
                  border-2 ${card.borderColor} ${card.hoverBorder}
                  transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/25
                  ${styles.shadow.card} relative overflow-hidden
                `}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${card.gradient} ${styles.text.white} text-xs font-bold`}>
                    {card.badge}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`
                      w-20 h-20 bg-gradient-to-br ${card.gradient} 
                      rounded-3xl flex items-center justify-center
                      group-hover:shadow-xl group-hover:shadow-teal-500/50
                      transition-all duration-500
                    `}
                  >
                    <card.icon className={`w-10 h-10 ${styles.text.white}`} />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold ${card.textColor} group-hover:scale-105 transition-transform duration-300`}>
                      {card.title}
                    </h3>
                    
                    <p className={`${styles.text.gray} leading-relaxed text-base`}>
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-col space-y-2">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient}`} />
                          <span className={`${styles.text.secondary} text-sm font-medium`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className={`
                      flex items-center justify-center space-x-2 ${card.textColor} font-bold
                      bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent
                      group-hover:scale-105 transition-all duration-300
                    `}
                  >
                    <span className="text-lg">{card.action}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronRight className={`w-6 h-6 ${card.textColor} opacity-80`} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} 
                     style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-3xl" />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }} className="text-center mt-16"
        >
          <p className={`${styles.text.secondary} mb-6 text-lg`}>
            ¿Necesitas ayuda personalizada?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank');
            }}
            className={`px-8 py-4 bg-gradient-to-r bg-green-500 hover:bg-green-600 ${styles.text.white} 
              font-bold rounded-2xl ${styles.shadow.primary} hover:shadow-xl
              duration-300 transition-colors cursor-pointer
            `}
          > 
            <div className="inline-flex items-centertext-white rounded-md">
                <WhatsAppIcon /> Contactar con un experto
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}