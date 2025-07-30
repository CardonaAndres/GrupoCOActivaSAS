import { useContactHook } from '../hooks/useContactHook';
import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon';
import { coactiva_config, router } from '@/main/configs/config';
import { styles } from '@/main/assets/ts/styles';
import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  CheckCircle, 
  MessageCircle, 
  AlertCircle,
  Award,
  TrendingUp,
  Users,
  Phone,
} from 'lucide-react';

// Types
declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface FormData {
  nombre: string;
  telefono: string;
  ciudad: string;
  email: string;
  empresa: string;
  cargo: string;
  mensaje: string;
}

interface FormState {
  isSubmitted: boolean;
  isError: boolean;
  errorMessage: string;
}

// Constants
const RECAPTCHA_SITE_KEY = '6LfWvWUrAAAAAJDA_6bKLNWG6yOG7NNWZS7kZKxJ';
const RECAPTCHA_SCRIPT_URL = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

// Stats data
const stats = [
  { value: '10+', label: 'Años de experiencia', icon: Award },
  { value: '95%', label: 'Tasa de éxito', icon: TrendingUp },
  { value: '+500', label: 'Clientes satisfechos', icon: Users },
];


// Subcomponents
const FormInput = memo(({ 
  label, 
  name, 
  register, 
  errors, 
  placeholder, 
  type = 'text',
  validation,
  required = false 
}: any) => (
  <div>
    <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
      {label} {required && '*'}
    </label>
    <input
      type={type}
      {...register(name, validation)}
      className={`w-full px-4 py-3 border ${
        errors[name] ? 'border-red-300' : styles.border.gray
      } rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300`}
      placeholder={placeholder}
    />
    {errors[name] && (
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm mt-1"
      >
        {errors[name].message}
      </motion.p>
    )}
  </div>
));

const FeatureCard = memo(({ feature }: { feature: any }) => (
  <motion.div
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
));

const StatCard = memo(({ stat, index }: { stat: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="text-center"
  >
    <motion.div 
      className={`w-16 h-16 ${styles.accent[100]} rounded-2xl flex items-center justify-center mx-auto mb-3`}
    >
      <stat.icon className={`w-8 h-8 ${styles.text.primary}`} />
    </motion.div>
    <motion.h4 
      className={`text-3xl font-bold ${styles.text.primary} mb-1`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      {stat.value}
    </motion.h4>
    <p className={`text-sm ${styles.text.gray}`}>{stat.label}</p>
  </motion.div>
));

// Custom hooks
const useRecaptcha = () => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src*="recaptcha"]`);
    if (existingScript && window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = RECAPTCHA_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    const handleLoad = () => {
      const checkRecaptcha = () => {
        if (window.grecaptcha?.ready) {
          window.grecaptcha.ready(() => setRecaptchaLoaded(true));
        } else {
          setTimeout(checkRecaptcha, 100);
        }
      };
      checkRecaptcha();
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', () => console.error('Error al cargar reCAPTCHA'));
    
    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
    };
  }, []);

  const executeRecaptcha = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !recaptchaLoaded) {
        reject(new Error('reCAPTCHA no está cargado'));
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
          .then(resolve)
          .catch(reject);
      });
    });
  }, [recaptchaLoaded]);

  return { recaptchaLoaded, executeRecaptcha };
};

// Main component
export const ContactSection = () => {
  const { contactInfo, features, sendEmail } = useContactHook();
  const { recaptchaLoaded, executeRecaptcha } = useRecaptcha();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const [formState, setFormState] = useState<FormState>({
    isSubmitted: false,
    isError: false,
    errorMessage: ''
  });

  const onSubmit = useCallback(async (data: FormData) => {
    try {
      setFormState({ isSubmitted: false, isError: false, errorMessage: '' });
      
      const recaptchaToken = await executeRecaptcha();
      await sendEmail({ ...data, recaptchaToken });
      
      setFormState({ isSubmitted: true, isError: false, errorMessage: '' });
      reset();

      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setFormState({
        isSubmitted: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Error al enviar el formulario'
      });

      setTimeout(() => {
        setFormState(prev => ({ ...prev, isError: false }));
      }, 5000);
    }
  }, [executeRecaptcha, sendEmail, reset]);

  const handleWhatsAppClick = useCallback(() => {
    window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank');
  }, []);

  return (
    <section id="contact" className={`py-20 ${styles.accent[50]} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" 
        />
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
              <FeatureCard key={index} feature={feature} />
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

                <AnimatePresence mode="wait">
                  {formState.isSubmitted ? (
                    <motion.div
                      key="success"
                      variants={fadeInVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
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
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit(onSubmit)} 
                      className="space-y-6"
                    >
                      {/* Error Message */}
                      <AnimatePresence>
                        {formState.isError && (
                          <motion.div
                            variants={fadeInVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3"
                          >
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-red-800">
                                Error al enviar el formulario
                              </p>
                              <p className="text-sm text-red-600 mt-1">
                                {formState.errorMessage || 'Por favor, inténtalo de nuevo.'}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput
                          label="Nombre y Apellido"
                          name="nombre"
                          register={register}
                          errors={errors}
                          placeholder="Tu nombre completo"
                          required
                          validation={{ required: 'Este campo es obligatorio' }}
                        />

                        <FormInput
                          label="Teléfono"
                          name="telefono"
                          register={register}
                          errors={errors}
                          placeholder="+57 300 123 4567"
                          type="tel"
                          required
                          validation={{ 
                            required: 'Este campo es obligatorio',
                            pattern: {
                              value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
                              message: 'Número de teléfono inválido'
                            }
                          }}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput
                          label="Ciudad"
                          name="ciudad"
                          register={register}
                          errors={errors}
                          placeholder="Tu ciudad"
                          required
                          validation={{ required: 'Este campo es obligatorio' }}
                        />

                        <FormInput
                          label="Correo Electrónico"
                          name="email"
                          register={register}
                          errors={errors}
                          placeholder="tu@email.com"
                          type="email"
                          required
                          validation={{ 
                            required: 'Este campo es obligatorio',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Correo electrónico inválido"
                            }
                          }}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput
                          label="Empresa"
                          name="empresa"
                          register={register}
                          errors={errors}
                          placeholder="Nombre de tu empresa"
                        />

                        <FormInput
                          label="Cargo"
                          name="cargo"
                          register={register}
                          errors={errors}
                          placeholder="Tu cargo"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium ${styles.text.darkGray} mb-2`}>
                          Mensaje *
                        </label>
                        <textarea
                          {...register('mensaje', { required: 'Este campo es obligatorio' })}
                          rows={4}
                          className={`w-full px-4 py-3 border ${
                            errors.mensaje ? 'border-red-300' : styles.border.gray
                          } rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none`}
                          placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                        />
                        {errors.mensaje && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.mensaje.message}
                          </motion.p>
                        )}
                      </div>

                      {/* reCAPTCHA Info */}
                      <div className="text-xs text-gray-500">
                        Este sitio está protegido por reCAPTCHA y se aplican la{' '}
                        <a 
                          href={router.privacity} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-500 hover:underline"
                        >
                          Política de Privacidad
                        </a>{' '}
                        y los{' '}
                        <a 
                          href="https://policies.google.com/terms" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-500 hover:underline"
                        >
                          Términos de Servicio
                        </a>{' '}
                        de Google.
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting || !recaptchaLoaded}
                        whileHover={{ scale: isSubmitting || !recaptchaLoaded ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting || !recaptchaLoaded ? 1 : 0.98 }}
                        className={`w-full bg-gradient-to-r ${styles.gradient.primary} ${styles.text.white} font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg ${styles.shadow.primary} hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
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
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side - Enhanced Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Section */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <StatCard key={index} stat={stat} index={index} />
                  ))}
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 ${styles.accent[100]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${styles.text.gray}`}>{info.title}</p>
                      <p className={`${styles.text.primary} font-semibold`}>{info.content}</p>
                      {info.subtitle && (
                        <p className={`text-xs ${styles.text.gray} mt-0.5`}>{info.subtitle}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-r ${styles.gradient.primary} rounded-3xl p-8 text-center relative overflow-hidden`}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                
                <div className="relative z-10">
                  <MessageCircle className={`w-14 h-14 ${styles.text.white} mx-auto mb-4`} />
                  <h4 className={`text-2xl font-bold ${styles.text.white} mb-3`}>
                    ¿Necesitas atención inmediata?
                  </h4>
                  <p className={`${styles.text.white} opacity-90 mb-6 text-lg`}>
                    Contáctanos ahora y recibe asesoría personalizada
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.button 
                      onClick={handleWhatsAppClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-white ${styles.text.primary} font-semibold py-3 px-6 rounded-xl ${styles.hover.accent} transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp</span>
                    </motion.button>
                    <motion.button 
                      onClick={() => window.location.href = `tel:${coactiva_config.cellphones.one}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-white/20 backdrop-blur-sm ${styles.text.white} font-semibold py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/30`}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Llamar</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-green-700">
                    Paga por resultados
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};