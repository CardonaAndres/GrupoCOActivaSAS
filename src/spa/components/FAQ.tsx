import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { styles } from '@/main/assets/ts/styles'
import { 
    ChevronDown, 
    HelpCircle, 
    MessageCircle, 
    Phone, 
    Mail, 
    Clock, 
    CheckCircle, 
    Star, 
    Users, 
    TrendingUp, 
    DollarSign, 
    Percent, 
    FileText, 
    Scale 
} from 'lucide-react'
import { coactiva_config } from '@/main/configs/config'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const faqData = [
  {
    question: "¿Cómo puedo contratar los servicios de Grupo Coactiva S.A.S?",
    answer: "Es muy sencillo: puede comunicarse con nosotros a través de nuestro formulario web, vía WhatsApp, vía telefónica o por correo electrónico. Le asignaremos un asesor comercial que evaluará su caso, presentará una propuesta formal y, una vez aprobada, iniciaremos el proceso de cobro en máximo 24 horas.",
    icon: Phone
  },
  {
    question: "¿Qué beneficios tiene tercerizar el cobro de cartera con Grupo Coactiva S.A.S?",
    answer: "Al tercerizar con nosotros, su empresa podrá reducir costos operativos y cargas administrativas, incrementar la recuperación de cartera en menor tiempo y contar con personal experto en cobranza y gestión jurídica.",
    icon: TrendingUp
  },
  {
    question: "¿A partir de qué cuantías gestiona Grupo Coactiva S.A.S el cobro de obligaciones?",
    answer: "En Grupo Coactiva S.A.S gestionamos obligaciones desde montos mínimos de $10.000.000 pesos por deudor tanto para proceso prejuridico y jurídico. Le invitamos a contactarnos para evaluar su caso y ofrecerle la mejor alternativa de gestión según la cuantía de sus obligaciones.",
    icon: DollarSign
  },
  {
    question: "¿Qué costos o comisiones manejan por la gestión de cobro?",
    answer: "Nuestras tarifas se adaptan al monto, antigüedad y cuantía de la obligacion a recuperar. Trabajamos bajo esquemas de honorarios por éxito, lo que significa que cobramos un porcentaje previamente pactado únicamente sobre las sumas efectivamente recuperadas.",
    icon: Percent
  },
  {
    question: "¿Qué tipo de cartera puede gestionar Grupo Coactiva S.A.S?",
    answer: "Gestionamos todo tipo de cartera, siempre y cuando sea cartera vencida y de difícil recaudo. Atendemos obligaciones financieras, comerciales, jurídicas y de servicios, tanto de personas naturales como jurídicas, adaptando nuestras estrategias según la etapa de morosidad y las necesidades del cliente.",
    icon: FileText
  },
  {
    question: "¿Cuál es el proceso que siguen para realizar el cobro de cartera?",
    answer: "Iniciamos con una etapa prejuridica, donde contactamos al deudor por medio de visita personalizada. Si no se obtiene respuesta frente al pago de la obligación, pasamos a la etapa jurídica, en la que, previa autorización del cliente, adelantamos los trámites legales correspondientes para el cobro judicial de la obligación.",
    icon: Scale
  }
]

const statsData = [
  { label: "Años de experiencia", value: "10+", icon: Star },
  { label: "Clientes satisfechos", value: "500+", icon: Users },
  { label: "Respuesta inicial", value: "24h", icon: Clock }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0) // Primera pregunta abierta por defecto
  const toggleFAQ = (index : any) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className={`py-12 lg:py-20 ${styles.primary[50]} relative overflow-hidden`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("/ImgDeEjemplo.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient.accent} opacity-50`} />
        
        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-400/20 blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Enhanced Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${styles.gradient.primary} ${styles.text.white} text-sm font-medium mb-4 ${styles.shadow.primary}`}
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </motion.div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${styles.text.primary} mb-4 leading-tight`}>
            Todo lo que necesitas
            <span className={`block bg-gradient-to-r ${styles.gradient.primary} bg-clip-text text-transparent`}>
              saber sobre nosotros
            </span>
          </h2>
          
          <p className={`text-lg ${styles.text.secondary} max-w-3xl mx-auto leading-relaxed mb-8`}>
            Resolvemos las dudas más importantes sobre nuestros servicios de recuperación de cartera.
          </p>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {statsData.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05, y: -3 }}
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 ${styles.shadow.card}`}
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${styles.gradient.primary} rounded-lg flex items-center justify-center mb-2 mx-auto`}>
                  <stat.icon className={`w-4 h-4 ${styles.text.white}`} />
                </div>
                <div className={`text-xl font-bold ${styles.text.primary} mb-1`}>{stat.value}</div>
                <div className={`text-xs ${styles.text.secondary}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* FAQ Content */}
          <motion.div variants={itemVariants} className="xl:col-span-2">

            {/* FAQ List */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={`${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className={`bg-white/90 backdrop-blur-sm rounded-2xl ${styles.shadow.card} overflow-hidden border ${styles.border.primary} ${
                      openIndex === index ? `ring-2 ring-teal-500/50` : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full px-6 py-5 text-left flex items-center justify-between ${styles.hover.accent} transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div className={`w-10 h-10 bg-gradient-to-br ${styles.gradient.primary} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <faq.icon className={`w-5 h-5 ${styles.text.white}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-base lg:text-sm font-bold ${styles.text.primary} leading-tight`}>
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }} className="flex-shrink-0 ml-3"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center`}>
                          <ChevronDown className={`w-4 h-4 ${styles.text.white}`} />
                        </div>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className={`px-6 pb-5 ml-13 ${styles.text.gray} leading-relaxed`}>
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Enhanced Contact CTA */}
          <motion.div variants={itemVariants} className="xl:col-span-1">
            <motion.div whileHover={{ scale: 1.02 }} className={`bg-gradient-to-br ${styles.gradient.accentDark} rounded-2xl p-6 ${styles.shadow.primary} text-white top-8 overflow-hidden relative`} >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("/ImgDeEjemplo.webp")`,
                  backgroundSize: 'cover'
                }} />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <MessageCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    ¿Tienes una pregunta específica?
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
                    Nuestros expertos están listos para ayudarte.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <motion.div 
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Llámanos ahora</p>
                      <p className="text-white/80 text-sm">Respuesta inmediata</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Escríbenos</p>
                      <p className="text-white/80 text-sm">Respuesta inmediata</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Consulta gratuita</p>
                      <p className="text-white/80 text-sm">Sin compromiso</p>
                    </div>
                  </motion.div>
                </div>

                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full bg-white text-teal-800 font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-xl" onClick={() => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')}>
                  Solicitar consulta gratuita
                </motion.button>

                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-teal-500/90 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}