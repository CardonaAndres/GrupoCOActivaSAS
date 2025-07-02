import { motion } from 'framer-motion'
import { MapPin,Mail,Shield,Users,TrendingUp, Instagram ,ArrowUp, FileText } from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'
import { coactiva_config, router } from '@/main/configs/config'

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const currentYear = new Date().getFullYear()

export const Footer = () => {

  return (
    <footer className={`relative ${styles.accent[900]} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("/ImgDeEjemplo.webp")`
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${styles.text.white} mb-4`}>
                  Grupo Coactiva S.A.S.
                </h3>
                <p className={`${styles.text.lightGray} text-lg leading-relaxed mb-6`}>
                  Somos especialistas en la recuperación eficiente, ética y profesional de cartera vencida en Colombia y América Latina.
                </p>
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${styles.gradient.primary} ${styles.text.white} text-sm font-medium`}>
                  <Shield className="w-4 h-4 mr-2" />
                  10 años de experiencia
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center`}>
                    <TrendingUp className={`w-5 h-5 ${styles.text.white}`} />
                  </div>
                  <div>
                    <p className={`${styles.text.white} font-semibold`}>Modelo por resultados</p>
                    <p className={`${styles.text.lightGray} text-sm`}>Solo cobras cuando recuperas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center`}>
                    <Users className={`w-5 h-5 ${styles.text.white}`} />
                  </div>
                  <div>
                    <p className={`${styles.text.white} font-semibold`}>Equipo experto</p>
                    <p className={`${styles.text.lightGray} text-sm`}>Abogados especialistas</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className={`${styles.text.white} font-semibold mb-4`}>Síguenos en redes sociales</p>
                <div className="flex space-x-4">
                  {[
                    { 
                      icon: Instagram, 
                      label: 'Instagram',
                      url : 'https://www.instagram.com/grupocoactiva?igsh=amNuczBubnU4bG4='
                    },
                  ].map(({ icon: Icon, label, url }) => (
                    <motion.a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm ${styles.border.white} border flex items-center justify-center ${styles.text.lightGray} hover:bg-gradient-to-br ${styles.hover.primary} hover:text-white transition-all duration-300`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className={`text-lg font-semibold ${styles.text.white} mb-6`}>
                Información de contacto
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <MapPin className={`w-5 h-5 ${styles.text.white}`} />
                  </div>
                  <div>
                    <p className={`${styles.text.white} font-medium`}>Dirección</p>
                    <p className={`${styles.text.lightGray} text-sm leading-relaxed`}>
                      Circular 76 # 39B - 135<br />
                      Laureles, Medellín<br />
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${styles.gradient.primary} flex items-center justify-center flex-shrink-0`}>
                    <Mail className={`w-5 h-5 ${styles.text.white}`} />
                  </div>
                  <div>
                    <p className={`${styles.text.white} font-medium`}>Email</p>
                    <a 
                      href="mailto:info@grupocoactiva.com" 
                      className={`${styles.text.lightGray} text-sm ${styles.hover.primaryText} transition-colors duration-300`}
                    >
                      { coactiva_config.emails.one }
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className={`text-lg font-semibold ${styles.text.white} mb-6`}>
                Nuestros servicios
              </h4>
              <ul className="space-y-3">
                {[
                  'Certificación de Castigo de Cartera',
                  'Cobro Prejurídico y Jurídico',
                  'Cobro Extrajudicial',
                  'Conciliaciones',
                  'Estudios de Crédito',
                  'Análisis de Bienes'
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className={`${styles.text.lightGray} text-sm ${styles.hover.primaryText} transition-colors duration-300 hover:translate-x-1 transform inline-block`}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className={`mt-8 w-full bg-gradient-to-r ${styles.gradient.primary} ${styles.text.white} font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${styles.shadow.primary} hover:shadow-xl`}
              >
                Solicitar consulta gratuita
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${styles.border.white} bg-black/20 backdrop-blur-sm`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className={`${styles.text.lightGray} text-sm text-center md:text-left`}>
                <p>&copy; {currentYear} Grupo Coactiva S.A.S. Todos los derechos reservados.</p>
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Privacy Policy Link */}
                <motion.a
                  href={router.privacity}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 ${styles.text.lightGray} text-sm ${styles.hover.primaryText} transition-colors duration-300`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Política de Privacidad</span>
                </motion.a>
                
                {/* Scroll to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${styles.gradient.primary} ${styles.text.white} flex items-center justify-center ${styles.shadow.primary} hover:shadow-xl transition-all duration-300`}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}