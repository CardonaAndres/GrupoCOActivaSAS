import { styles } from '@/main/assets/ts/styles'
import { coactiva_config } from '@/main/configs/config'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Shield, Award, Handshake, CheckCircle, Globe, Scale, TrendingUp, Clock, UserCheck, BarChart3, Phone } from 'lucide-react'

export const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const values = [
    {
      icon: Shield,
      title: "Ética y transparencia",
      description: "Manejamos cada proceso con honestidad y respeto, protegiendo la imagen y reputación de nuestros clientes.",
      gradient: "from-green-400 to-green-600",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: Target,
      title: "Compromiso",
      description: "Trabajamos con enfoque en resultados, brindando soluciones ágiles y efectivas.",
      gradient: "from-blue-400 to-blue-600",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: Users,
      title: "Servicio al cliente",
      description: "Priorizamos la comunicación clara, constante y oportuna.",
      gradient: "from-purple-400 to-purple-600",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: Heart,
      title: "Respeto y responsabilidad",
      description: "Preservamos la integridad de todas las partes involucradas en el proceso de cobro.",
      gradient: "from-pink-400 to-pink-600",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
    }
  ]

  const expertise = [
    { 
      title: "Cobro Extrajudicial", 
      icon: Handshake,
      description: "Gestión amigable y profesional",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      title: "Cobro Prejurídico", 
      icon: Award,
      description: "Procesos estructurados y efectivos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      title: "Cobro Jurídico", 
      icon: Scale,
      description: "Respaldo legal especializado",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
    },
    { 
      title: "Conciliaciones", 
      icon: CheckCircle,
      description: "Soluciones consensuadas",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
    }
  ]

  const stats = [
    {
      icon: TrendingUp,
      number: "95%",
      label: "Tasa de éxito",
      description: "en recuperación de cartera"
    },
    {
      icon: Clock,
      number: "10+",
      label: "Años de experiencia",
      description: "en el mercado colombiano"
    },
    {
      icon: UserCheck,
      number: "500+",
      label: "Clientes satisfechos",
      description: "confían en nuestros servicios"
    },
    {
      icon: BarChart3,
      number: "$50M+",
      label: "Recuperados",
      description: "en cartera vencida"
    }
  ]

  const teamImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face&auto=format&q=80"
  ]

  return (
    <section className={`py-12 sm:py-20 ${styles.primary[50]} relative overflow-hidden min-h-screen`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient.accent}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${styles.text.primary} mb-4 sm:mb-6`}>
              Grupo Coactiva S.A.S.
            </h2>
            <div className={`w-16 sm:w-24 h-1 bg-gradient-to-r ${styles.gradient.primary} mx-auto mb-4 sm:mb-6 rounded-full`} />
            <p className={`text-lg sm:text-xl ${styles.text.secondary} max-w-3xl mx-auto leading-relaxed px-4`}>
              Agencia líder en gestión y recuperación de cartera en Colombia
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-16 sm:mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-white rounded-2xl p-4 sm:p-6 ${styles.shadow.card} border ${styles.border.gray} text-center`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${styles.gradient.primary} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.text.white}`} />
                  </div>
                  <div className={`text-xl sm:text-2xl font-bold ${styles.text.primary} mb-1`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm sm:text-base font-semibold ${styles.text.secondary} mb-1`}>
                    {stat.label}
                  </div>
                  <div className={`text-xs sm:text-sm ${styles.text.gray}`}>
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            {/* Left Column - Company Info */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* About Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`${styles.primary[100]} rounded-2xl p-6 sm:p-8 ${styles.shadow.card} border ${styles.border.primary} overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=200&fit=crop&crop=center&auto=format&q=80"
                    alt="Business background"
                    className="w-full h-full object-cover rounded-bl-3xl"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${styles.gradient.primary} rounded-xl flex items-center justify-center mr-3 sm:mr-4`}>
                      <Globe className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.text.white}`} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${styles.text.primary}`}>
                      Acerca de nosotros
                    </h3>
                  </div>
                  <p className={`${styles.text.secondary} leading-relaxed mb-4 text-sm sm:text-base`}>
                    Somos especialistas en la recuperación eficiente, ética y profesional de cartera vencida. 
                    Contamos con un equipo altamente capacitado y tecnología de vanguardia, lo que nos permite 
                    ofrecer soluciones rápidas, seguras y personalizadas para cada uno de nuestros clientes.
                  </p>
                  <p className={`${styles.text.secondary} leading-relaxed text-sm sm:text-base`}>
                    Nos comprometemos con los resultados y trabajamos para proteger tu patrimonio financiero, 
                    garantizando tranquilidad y respaldo a través de asesoría especializada y procesos estructurados.
                  </p>
                </div>
              </motion.div>

              {/* Purpose Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`${styles.primary[600]} rounded-2xl p-6 sm:p-8 shadow-xl ${styles.text.white} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                    <h3 className="text-xl sm:text-2xl font-bold">Nuestro propósito</h3>
                  </div>
                  <p className="text-green-100 leading-relaxed text-base sm:text-lg">
                    Queremos que te concentres en lo realmente importante: el crecimiento de tu negocio. 
                    De la recuperación de tu dinero, nos encargamos nosotros.
                  </p>
                </div>
              </motion.div>

              {/* Team Preview */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 sm:p-8 ${styles.shadow.card} border ${styles.border.gray}`}
              >
                <h4 className={`text-lg sm:text-xl font-bold ${styles.text.primary} mb-4`}>
                  Nuestro equipo experto
                </h4>
                <div className="flex -space-x-2 mb-4">
                  {teamImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Team member ${index + 1}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-md object-cover"
                    />
                  ))}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-md bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className={`text-xs sm:text-sm font-semibold ${styles.text.gray}`}>+20</span>
                  </div>
                </div>
                <p className={`${styles.text.gray} text-sm`}>
                  Profesionales especializados en derecho, finanzas y atención al cliente
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Mission & Vision */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* Mission */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 sm:p-8 ${styles.shadow.card} border ${styles.border.gray} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=center&auto=format&q=80"
                    alt="Mission background"
                    className="w-full h-full object-cover rounded-bl-2xl"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Target className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.text.white}`} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${styles.text.primary}`}>Nuestra misión</h3>
                  </div>
                  <p className={`${styles.text.accent} leading-relaxed text-sm sm:text-base`}>
                    Proporcionar a nuestros clientes el servicio de recuperación de cartera más completo, 
                    transparente y profesional del mercado colombiano, aplicando las mejores prácticas 
                    jurídicas, prejurídicas y extrajudiciales.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 sm:p-8 ${styles.shadow.card} border ${styles.border.gray} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=150&fit=crop&crop=center&auto=format&q=80"
                    alt="Vision background"
                    className="w-full h-full object-cover rounded-bl-2xl"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Eye className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.text.white}`} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${styles.text.primary}`}>Nuestra visión</h3>
                  </div>
                  <p className={`${styles.text.accent} leading-relaxed text-sm sm:text-base`}>
                    Consolidarnos como la empresa de cobranza más confiable, reconocida y eficiente en Colombia, 
                    ampliando nuestra cobertura nacional y fortaleciendo la relación con nuestros clientes 
                    mediante soluciones efectivas y personalizadas.
                  </p>
                </div>
              </motion.div>

              {/* CSR */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${styles.gradient.accent} rounded-2xl p-6 sm:p-8 ${styles.shadow.card} border ${styles.border.gray} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=150&h=150&fit=crop&crop=center&auto=format&q=80"
                    alt="CSR background"
                    className="w-full h-full object-cover rounded-bl-2xl"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.text.white}`} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${styles.text.primary}`}>Responsabilidad social</h3>
                  </div>
                  <p className={`${styles.text.accent} leading-relaxed text-sm sm:text-base`}>
                    Aportamos al fortalecimiento de la economía nacional mediante la recuperación responsable 
                    de obligaciones, contribuyendo a la estabilidad financiera de empresas y personas.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className={`text-2xl sm:text-3xl font-bold ${styles.text.primary} mb-4`}>Nuestros valores</h3>
              <p className={`text-base sm:text-lg ${styles.text.accent}`}>
                Los principios que guían nuestro trabajo diario
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-white rounded-2xl overflow-hidden ${styles.shadow.card} border ${styles.border.gray}`}
                >
                  <div className="h-32 sm:h-40 overflow-hidden relative">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${value.gradient} opacity-80`} />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <value.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${styles.text.white}`} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className={`text-base sm:text-lg font-bold ${styles.text.primary} mb-2 sm:mb-3`}>
                      {value.title}
                    </h4>
                    <p className={`${styles.text.gray} text-xs sm:text-sm leading-relaxed`}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div variants={itemVariants}>
            <div className={`${styles.primary[600]} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 ${styles.text.white} relative overflow-hidden`}>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=300&fit=crop&crop=center&auto=format&q=80"
                  alt="Legal background"
                  className="w-full h-full object-cover rounded-bl-3xl"
                />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Expertos en Cobro Extrajudicial, Prejurídico y Jurídico
                  </h3>
                  <p className="text-green-100 text-base sm:text-lg max-w-3xl mx-auto">
                    Ofrecemos un servicio integral, adaptado a las necesidades de cada cliente, 
                    con reportes periódicos y estrategias personalizadas para garantizar altos índices de recuperación.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-20">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative z-10">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                          <item.icon className={`w-4 h-4 sm:w-6 sm:h-6 ${styles.text.white}`} />
                        </div>
                        <h4 className={`font-semibold ${styles.text.white} text-xs sm:text-base mb-1`}>
                          {item.title}
                        </h4>
                        <p className={`text-green-100 text-xs sm:text-sm opacity-90`}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')}
                    className={`bg-white ${styles.text.secondary} font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl ${styles.hover.accent} transition-all duration-300 ${styles.shadow.card} text-sm sm:text-base inline-flex items-center gap-2`}
                  >
                    <Phone className="w-4 h-4" />
                    ¡Recupera tu cartera ahora!
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}