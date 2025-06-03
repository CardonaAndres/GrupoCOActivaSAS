import { styles } from '@/main/assets/ts/styles'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Shield, Award, Handshake, CheckCircle, Globe, Scale } from 'lucide-react'

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
      color: "from-green-400 to-green-600"
    },
    {
      icon: Target,
      title: "Compromiso",
      description: "Trabajamos con enfoque en resultados, brindando soluciones ágiles y efectivas.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      title: "Servicio al cliente",
      description: "Priorizamos la comunicación clara, constante y oportuna.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Heart,
      title: "Respeto y responsabilidad",
      description: "Preservamos la integridad de todas las partes involucradas en el proceso de cobro.",
      color: "from-pink-400 to-pink-600"
    }
  ]

  const expertise = [
    { title: "Cobro Extrajudicial", icon: Handshake },
    { title: "Cobro Prejurídico", icon: Award },
    { title: "Cobro Jurídico", icon: Scale },
    { title: "Conciliaciones", icon: CheckCircle }
  ]

  return (
    <section className={`py-20 ${styles.primary[50]} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold ${styles.text.primary} mb-6`}>
              Grupo Coactiva S.A.S.
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${styles.gradient.primary} mx-auto mb-6 rounded-full`} />
            <p className={`text-xl ${styles.text.accent} max-w-3xl mx-auto leading-relaxed`}>
              Agencia líder en gestión y recuperación de cartera en Colombia
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Company Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* About Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`${styles.accent[50]} rounded-2xl p-8 ${styles.shadow.card} border ${styles.border.accent}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${styles.gradient.primary} rounded-xl flex items-center justify-center mr-4`}>
                    <Globe className={`w-6 h-6 ${styles.text.white}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${styles.text.primary}`}>
                    Acerca de nosotros
                  </h3>
                </div>
                <p className={`${styles.text.accent} leading-relaxed mb-4`}>
                  Somos especialistas en la recuperación eficiente, ética y profesional de cartera vencida. 
                  Contamos con un equipo altamente capacitado y tecnología de vanguardia, lo que nos permite 
                  ofrecer soluciones rápidas, seguras y personalizadas para cada uno de nuestros clientes.
                </p>
                <p className={`${styles.text.accent} leading-relaxed`}>
                  Nos comprometemos con los resultados y trabajamos para proteger tu patrimonio financiero, 
                  garantizando tranquilidad y respaldo a través de asesoría especializada y procesos estructurados.
                </p>
              </motion.div>

              {/* Purpose Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`${styles.primary[600]} rounded-2xl p-8 ${styles.shadow.primary} text-white`}
              >
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Nuestro propósito</h3>
                </div>
                <p className="text-green-100 leading-relaxed text-lg">
                  Queremos que te concentres en lo realmente importante: el crecimiento de tu negocio. 
                  De la recuperación de tu dinero, nos encargamos nosotros.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Mission & Vision */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Mission */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-8 ${styles.shadow.card} border ${styles.border.gray}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Nuestra misión</h3>
                </div>
                <p className={`${styles.text.accent} leading-relaxed`}>
                  Proporcionar a nuestros clientes el servicio de recuperación de cartera más completo, 
                  transparente y profesional del mercado colombiano, aplicando las mejores prácticas 
                  jurídicas, prejurídicas y extrajudiciales.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-8 ${styles.shadow.card} border ${styles.border.gray}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-4`}>
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Nuestra visión</h3>
                </div>
                <p className={`${styles.text.accent} leading-relaxed`}>
                  Consolidarnos como la empresa de cobranza más confiable, reconocida y eficiente en Colombia, 
                  ampliando nuestra cobertura nacional y fortaleciendo la relación con nuestros clientes 
                  mediante soluciones efectivas y personalizadas.
                </p>
              </motion.div>

              {/* CSR */}
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${styles.gradient.accent} rounded-2xl p-8 ${styles.shadow.card} border ${styles.border.gray}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mr-4`}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${styles.text.primary}`}>Responsabilidad social</h3>
                </div>
                <p className={`${styles.text.accent} leading-relaxed`}>
                  Aportamos al fortalecimiento de la economía nacional mediante la recuperación responsable 
                  de obligaciones, contribuyendo a la estabilidad financiera de empresas y personas.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold ${styles.text.primary} mb-4`}>Nuestros valores</h3>
              <p className={`text-lg ${styles.text.accent}`}>
                Los principios que guían nuestro trabajo diario
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-white rounded-2xl p-6 ${styles.shadow.card} border ${styles.border.gray} text-center`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`text-lg font-bold ${styles.text.primary} mb-3`}>
                    {value.title}
                  </h4>
                  <p className={`${styles.text.gray} text-sm leading-relaxed`}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div variants={itemVariants}>
            <div className={`${styles.primary[600]} rounded-3xl p-8 lg:p-12 text-white`}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Expertos en Cobro Extrajudicial, Prejurídico y Jurídico
                </h3>
                <p className="text-green-100 text-lg max-w-3xl mx-auto">
                  Ofrecemos un servicio integral, adaptado a las necesidades de cada cliente, 
                  con reportes periódicos y estrategias personalizadas para garantizar altos índices de recuperación.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg"
                >
                  ¡Recupera tu cartera ahora!
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
