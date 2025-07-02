import { styles } from '@/main/assets/ts/styles'
import { router } from '@/main/configs/config'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, CheckCircle, AlertCircle, ArrowLeft, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

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

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const PrivacityPage = () => {
  const userRights = [
    {
      icon: Eye,
      title: "Conocer, actualizar y rectificar",
      description: "Derecho a conocer, actualizar y rectificar sus datos personales"
    },
    {
      icon: FileText,
      title: "Solicitar prueba de autorización",
      description: "Derecho a solicitar prueba de la autorización otorgada"
    },
    {
      icon: Shield,
      title: "Ser informado del uso",
      description: "Derecho a ser informado sobre el uso que se ha dado a sus datos"
    },
    {
      icon: AlertCircle,
      title: "Presentar quejas",
      description: "Derecho a presentar quejas ante la Superintendencia de Industria y Comercio"
    },
    {
      icon: Lock,
      title: "Revocar autorización",
      description: "Derecho a revocar la autorización y/o solicitar la supresión de los datos"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header with Background Pattern */}
      <div className={`relative ${styles.accent[900]} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
          }} />
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          {/* Back Button */}
          <Link to={router.home}
            className={`mb-8 inline-flex items-center space-x-2 ${styles.text.lightGray} ${styles.hover.primaryText} transition-colors duration-300`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </Link>

          {/* Header Content */}
          <motion.div variants={itemVariants} className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${styles.gradient.primary} ${styles.shadow.primary} mb-6`}>
              <Shield className={`w-10 h-10 ${styles.text.white}`} />
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-bold ${styles.text.white} mb-4`}>
              Política de Privacidad
            </h1>
            
            <p className={`text-xl ${styles.text.lightGray} max-w-3xl mx-auto leading-relaxed`}>
              En Grupo Coactiva SAS protegemos la privacidad y datos personales de nuestros usuarios
            </p>
            
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Introduction Section */}
        <motion.div variants={itemVariants} className={`bg-white rounded-2xl p-8 ${styles.shadow.card} mb-12`}>
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center mr-4`}>
              <FileText className={`w-6 h-6 ${styles.text.white}`} />
            </div>
            <h2 className={`text-2xl font-bold ${styles.text.primary}`}>Introducción</h2>
          </div>
          
          <p className={`${styles.text.gray} text-lg leading-relaxed`}>
            En <strong className={styles.text.primary}>Grupo Coactiva SAS</strong> respetamos y protegemos la privacidad de todos los usuarios que visitan nuestro sitio web <span className={styles.text.accent}>www.grupocoactivasas.com</span> y de quienes nos suministran su información personal a través de nuestros canales digitales. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos los datos personales que usted nos proporciona.
          </p>
        </motion.div>

        {/* User Rights Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${styles.text.primary} mb-4`}>Sus Derechos como Titular</h2>
            <p className={`${styles.text.gray} text-lg max-w-3xl mx-auto`}>
              De acuerdo con la <strong>Ley 1581 de 2012</strong>, los titulares de los datos personales tienen los siguientes derechos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white rounded-xl p-6 ${styles.shadow.card} border ${styles.border.gray} hover:border-teal-200 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center mb-4`}>
                  <right.icon className={`w-6 h-6 ${styles.text.white}`} />
                </div>
                <h3 className={`font-semibold ${styles.text.primary} mb-2`}>{right.title}</h3>
                <p className={`${styles.text.gray} text-sm leading-relaxed`}>{right.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Measures Section */}
        <motion.div variants={itemVariants} className={`bg-gradient-to-r ${styles.gradient.accent} rounded-2xl p-8 ${styles.shadow.card} mb-12`}>
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center mr-4`}>
              <Lock className={`w-6 h-6 ${styles.text.white}`} />
            </div>
            <h2 className={`text-2xl font-bold ${styles.text.primary}`}>Medidas de Seguridad</h2>
          </div>
          
          <p className={`${styles.text.gray} text-lg leading-relaxed mb-6`}>
            <strong className={styles.text.primary}>Grupo Coactiva SAS</strong> implementa medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales frente a pérdida, mal uso, acceso no autorizado o alteración.
          </p>
          
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${styles.primary[100]} ${styles.text.primary}`}>
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Protección garantizada</span>
          </div>
        </motion.div>

        {/* Data Sharing Section */}
        <motion.div variants={itemVariants} className={`bg-white rounded-2xl p-8 ${styles.shadow.card} mb-12`}>
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center mr-4`}>
              <Shield className={`w-6 h-6 ${styles.text.white}`} />
            </div>
            <h2 className={`text-2xl font-bold ${styles.text.primary}`}>Compartir Información</h2>
          </div>
          
          <p className={`${styles.text.gray} text-lg leading-relaxed`}>
            <strong>No compartimos ni transferimos</strong> datos personales a terceros sin autorización previa, salvo cuando sea requerido por una autoridad competente o por obligación legal.
          </p>
        </motion.div>

        {/* Policy Updates Section */}
        <motion.div variants={itemVariants} className={`bg-gradient-to-r ${styles.gradient.accentDark} rounded-2xl p-8 ${styles.shadow.card}`}>
          <div className="text-center">
            <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6`}>
              <Calendar className={`w-8 h-8 ${styles.text.white}`} />
            </div>
            
            <h2 className={`text-2xl font-bold ${styles.text.white} mb-4`}>Vigencia y Actualizaciones</h2>
            
            <div className={`${styles.text.lightGray} text-lg leading-relaxed space-y-4`}>
              <p>
                Esta Política de Privacidad rige a partir de su publicación en el sitio web y permanecerá vigente hasta que sea modificada de manera parcial o total.
              </p>
              <p>
                Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio será publicado en esta misma sección.
              </p>
            </div>
            
            <Link to={router.home} className={`mt-8 bg-white ${styles.text.primary} font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-xl`}>
              Entendido, volver al sitio
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}