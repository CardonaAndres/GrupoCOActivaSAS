import { styles } from '@/main/assets/ts/styles'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, MessageCircle } from 'lucide-react'
import { useContactHook } from '../hooks/useContactHook'
import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon'
import { coactiva_config } from '@/main/configs/config'
import { LocationsComponent } from './LocationsComponent'

// Declarar la interfaz global para grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface FormData {
  nombre: string
  telefono: string
  ciudad: string
  email: string
  empresa: string
  cargo: string
  mensaje: string
}

export const ContactSection = () => {
  const { contactInfo, features, sendEmail } = useContactHook();  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset} = useForm<FormData>()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  // clave de sitio de reCAPTCHA 
  const RECAPTCHA_SITE_KEY = '6LfWvWUrAAAAAJDA_6bKLNWG6yOG7NNWZS7kZKxJ'

  // Cargar el script de reCAPTCHA cuando el componente se monta
  useEffect(() => {
    const loadRecaptcha = () => {
      // Verificar si ya existe el script
      const existingScript = document.querySelector(`script[src*="recaptcha"]`)
      if (existingScript) existingScript.remove()
      
      // Limpiar grecaptcha si existe
      if (window.grecaptcha) delete window.grecaptcha
      
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
      script.async = true
      script.defer = true
      script.onload = () => {
        // Esperar un poco para asegurar que grecaptcha esté completamente cargado
        setTimeout(() => {
          if (window.grecaptcha && window.grecaptcha.ready) {
            window.grecaptcha.ready(() => {
              setRecaptchaLoaded(true)
            })
          } else {
            console.error('reCAPTCHA no se cargó correctamente')
          }
        }, 100)
      }
      script.onerror = () => console.error('Error al cargar reCAPTCHA')
      
      document.head.appendChild(script)
    }

    loadRecaptcha()

    // Cleanup al desmontar el componente
    return () => {
      const script = document.querySelector(`script[src*="recaptcha"]`)

      if (script) script.remove() 
      if (window.grecaptcha) delete window.grecaptcha
      
    }
  }, [])

  // Función para ejecutar reCAPTCHA
  const executeRecaptcha = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !recaptchaLoaded) {
        reject('reCAPTCHA no está cargado')
        return
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
          .then((token: string) => {
            console.log('reCAPTCHA token obtenido:', token)
            resolve(token)
          })
          .catch((error: any) => {
            console.error('Error al ejecutar reCAPTCHA:', error)
            reject(error)
          })
      })
    })
  }

  const onSubmit = async (data: FormData) => {
    try {
      // Ejecutar reCAPTCHA antes de enviar el formulario
      const recaptchaToken = await executeRecaptcha()
      
      // Agregar el token de reCAPTCHA a los datos del formulario
      const formDataWithRecaptcha = { ...data, recaptchaToken}
      await sendEmail(formDataWithRecaptcha);
      
      setIsSubmitted(true)
      reset()

      // Resetear el estado después de 2 segundos
      setTimeout(() => setIsSubmitted(false), 2000)
      
    } catch (error) {
      console.error('Error con reCAPTCHA:', error)
      alert('Error de verificación. Por favor, inténtalo de nuevo.')
    }
  }

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

  return (
    <section id="contact" className={`py-20 ${styles.accent[50]} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold ${styles.text.primary} mb-6`}>
              ¿Tienes cartera pendiente por cobrar?
            </h2>
            <p className={`text-xl ${styles.text.gray} max-w-3xl mx-auto leading-relaxed`}>
              En Grupo Coactiva SAS, somos expertos en recuperación de cartera vencida. 
              Te ayudamos a recuperar tu dinero de forma ágil, segura y efectiva.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${styles.primary[50]} p-6 rounded-2xl border ${styles.border.primary} text-center`}
              >
                <div className={`w-16 h-16 ${styles.primary[100]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`w-8 h-8 ${styles.text.primary}`} />
                </div>
                <h3 className={`text-lg font-semibold ${styles.text.primary} mb-2`}>
                  {feature.title}
                </h3>
                <p className={styles.text.gray}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold ${styles.text.primary} mb-2`}>
                    Solicita tu asesoría gratuita
                  </h3>
                  <p className={styles.text.gray}>
                    Completa el formulario y un especialista se comunicará contigo
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-green-700 mb-2">
                      ¡Mensaje enviado exitosamente!
                    </h4>
                    <p className={styles.text.gray}>
                      Nos comunicaremos contigo en las próximas 24 horas
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                          Nombre y Apellido *
                        </label>
                        <input
                          {...register('nombre', { required: 'Este campo es obligatorio' })}
                          className={`w-full px-4 py-3 border ${errors.nombre ? 'border-red-300' : styles.border.gray} rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300`}
                          placeholder="Tu nombre completo"
                        />
                        {errors.nombre && (
                          <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                        )}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                          Teléfono *
                        </label>
                        <input
                          {...register('telefono', { required: 'Este campo es obligatorio' })}
                          className={`w-full px-4 py-3 border ${errors.telefono ? 'border-red-300' : styles.border.gray} rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300`}
                          placeholder="+57 300 123 4567"
                        />
                        {errors.telefono && (
                          <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                          Ciudad *
                        </label>
                        <input
                          {...register('ciudad', { required: 'Este campo es obligatorio' })}
                          className={`w-full px-4 py-3 border ${errors.ciudad ? 'border-red-300' : styles.border.gray} rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300`}
                          placeholder="Tu ciudad"
                        />
                        {errors.ciudad && (
                          <p className="text-red-500 text-sm mt-1">{errors.ciudad.message}</p>
                        )}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                          Correo Electrónico *
                        </label>
                        <input
                          {...register('email', { 
                            required: 'Este campo es obligatorio',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Correo electrónico inválido"
                            }
                          })}
                          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : styles.border.gray} rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                          Empresa
                        </label>
                        <input
                          {...register('empresa')}
                          className={`w-full px-4 py-3 border ${styles.border.gray} rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300`}
                          placeholder="Nombre de tu empresa"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                          Cargo
                        </label>
                        <input
                          {...register('cargo')}
                          className={`w-full px-4 py-3 border ${styles.border.gray} rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300`}
                          placeholder="Tu cargo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                        Mensaje *
                      </label>
                      <textarea
                        {...register('mensaje', { required: 'Este campo es obligatorio' })}
                        rows={4}
                        className={`w-full px-4 py-3 border ${errors.mensaje ? 'border-red-300' : styles.border.gray} rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none`}
                        placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                      />
                      {errors.mensaje && (
                        <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                      )}
                    </div>

                    {/* Información sobre reCAPTCHA */}
                    <div className="text-xs text-gray-500">
                      Este sitio está protegido por reCAPTCHA y se aplican la{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Política de Privacidad
                      </a>{' '}
                      y los{' '}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Términos de Servicio
                      </a>{' '}
                      de Google.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !recaptchaLoaded}
                      className={`w-full bg-gradient-to-r ${styles.gradient.primary} ${styles.text.white} font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg ${styles.shadow.primary} hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Enviando...
                        </>
                      ) : !recaptchaLoaded ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Cargando verificación...
                        </>
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${styles.accent[100]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${styles.text.darkGray} mb-1`}>
                          {info.title}
                        </h4>
                        <p className={`${styles.text.primary} font-medium`}>
                          {info.content}
                        </p>
                        <p className={`text-sm ${styles.text.gray}`}>
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <LocationsComponent styles={styles} />

              {/* CTA Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-r ${styles.gradient.primary} rounded-2xl p-8 text-center`}
              >
                <MessageCircle className={`w-12 h-12 ${styles.text.white} mx-auto mb-4`} />
                <h4 className={`text-xl font-bold ${styles.text.white} mb-2`}>
                  ¿Prefieres hablar directamente?
                </h4>
                <p className={`${styles.text.white} opacity-90 mb-6`}>
                  Agenda una cita personalizada con nuestros expertos
                </p>
                <button 
                onClick={() => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')} className={`bg-white ${styles.text.primary} font-semibold py-3 px-6 rounded-xl ${styles.hover.accent} transition-all duration-300 flex items-center mx-auto`}>
                  <WhatsAppIcon />
                  Agendar Cita
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}