import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MessageCircle, X, Send, CheckCircle, FileText } from 'lucide-react';
import { styles } from '@/main/assets/ts/styles';
import { useContactHook } from '../../spa/hooks/useContactHook';
import { router } from '../configs/config';

// Declarar la interfaz global para grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
    gtag: (...args: any[]) => void; 
  }
}

interface FormData {
  nombre: string
  telefono: string
  email: string
  mensaje: string
}

export const FloatingContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  
  const { sendEmail } = useContactHook()
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()

  // Clave de sitio de reCAPTCHA
  const RECAPTCHA_SITE_KEY = '6LfWvWUrAAAAAJDA_6bKLNWG6yOG7NNWZS7kZKxJ'

  // Cargar reCAPTCHA cuando se abre el modal
  useEffect(() => {
    if (!isModalOpen) return

    const loadRecaptcha = () => {
      const existingScript = document.querySelector(`script[src*="recaptcha"]`)
      if (existingScript) return setRecaptchaLoaded(true)
      
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
      script.async = true
      script.defer = true
      script.onload = () => {
        setTimeout(() => {
          if (window.grecaptcha && window.grecaptcha.ready) {
            window.grecaptcha.ready(() => {
              setRecaptchaLoaded(true)
            })
          }
        }, 100)
      }
      document.head.appendChild(script)
    }

    loadRecaptcha()
  }, [isModalOpen])

  const executeRecaptcha = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !recaptchaLoaded) {
        reject('reCAPTCHA no está cargado')
        return
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
          .then((token: string) => {
            resolve(token)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    })
  }

  const onSubmit = async (data: FormData) => {
    try {
      const recaptchaToken = await executeRecaptcha()
      const formDataWithRecaptcha = { ...data, recaptchaToken, ciudad: '', empresa: '', cargo: '' }
      
      await sendEmail(formDataWithRecaptcha)
      setIsSubmitted(true)
      reset()

      // *Evento de conversión de Google Ads**
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17262857323/hqLbCIy_-eEaEOuYyadA',
          'value': 1.0,
          'currency': 'COP'
        });
      }

      setTimeout(() => {
        setIsSubmitted(false)
        setIsModalOpen(false)
      }, 3000)
      
    } catch (error) {
      console.error('Error con reCAPTCHA:', error)
      alert('Error de verificación. Por favor, inténtalo de nuevo.')
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(false)
    reset()
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed left-6 bottom-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className={`bg-gradient-to-r ${styles.gradient.primary} ${styles.text.white} p-4 rounded-full shadow-2xl ${styles.shadow.primary} hover:shadow-3xl transition-all duration-300 flex items-center justify-center group`}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Tooltip */}
          <div className="absolute left-full ml-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Contáctanos
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
          </div>
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${styles.gradient.primary} rounded-t-2xl p-6 text-center relative`}>
                <button
                  onClick={closeModal}
                  className={`absolute top-4 right-4 ${styles.text.white} hover:bg-white/20 rounded-full p-2 transition-colors duration-200`}
                >
                  <X className="w-5 h-5" />
                </button>
                
                <MessageCircle className={`w-12 h-12 ${styles.text.white} mx-auto mb-3`} />
                <h3 className={`text-xl font-bold ${styles.text.white} mb-1`}>
                  Contáctanos
                </h3>
                <p className={`${styles.text.white} opacity-90 text-sm`}>
                  Te responderemos en las próximas 24 horas
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-green-700 mb-2">
                      ¡Mensaje enviado!
                    </h4>
                    <p className={`text-sm ${styles.text.gray}`}>
                      Nos comunicaremos contigo pronto
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${styles.text.darkGray} mb-1`}>
                        Nombre completo *
                      </label>
                      <input
                        {...register('nombre', { required: 'Este campo es obligatorio' })}
                        className={`w-full px-3 py-2 border ${errors.nombre ? 'border-red-300' : styles.border.gray} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm`}
                        placeholder="Tu nombre y apellido"
                      />
                      {errors.nombre && (
                        <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
                      )}
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${styles.text.darkGray} mb-1`}>
                        Teléfono *
                      </label>
                      <input
                        {...register('telefono', { required: 'Este campo es obligatorio' })}
                        className={`w-full px-3 py-2 border ${errors.telefono ? 'border-red-300' : styles.border.gray} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm`}
                        placeholder="+57 300 123 4567"
                      />
                      {errors.telefono && (
                        <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>
                      )}
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${styles.text.darkGray} mb-1`}>
                        Correo electrónico *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'Este campo es obligatorio',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Correo inválido"
                          }
                        })}
                        className={`w-full px-3 py-2 border ${errors.email ? 'border-red-300' : styles.border.gray} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${styles.text.darkGray} mb-1`}>
                        Mensaje *
                      </label>
                      <textarea
                        {...register('mensaje', { required: 'Este campo es obligatorio' })}
                        rows={3}
                        className={`w-full px-3 py-2 border ${errors.mensaje ? 'border-red-300' : styles.border.gray} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none text-sm`}
                        placeholder="¿Cómo podemos ayudarte?"
                      />
                      {errors.mensaje && (
                        <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>
                      )}
                    </div>

                    <div className="text-xs text-gray-500 leading-relaxed">
                      Protegido por reCAPTCHA. Se aplican la{' '}
                      <a href={router.privacity} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Política de Privacidad
                      </a>{' '}
                      y{' '}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Términos
                      </a>{' '}
                      de Google.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !recaptchaLoaded}
                      className={`w-full bg-gradient-to-r ${styles.gradient.primary} ${styles.text.white} font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center text-sm`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Enviando...
                        </>
                      ) : !recaptchaLoaded ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Cargando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}