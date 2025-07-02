import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon';
import { Building, Mail, MessageSquare, Pencil, Phone, Send, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { coactiva_config, router } from '@/main/configs/config';
import { useContactHook } from '../hooks/useContactHook';

// Declarar la interfaz global para grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa?: string;
  cargo?: string;
  mensaje: string;
}

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>();
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const { sendEmail } = useContactHook();

    // Clave de sitio de reCAPTCHA 
    const RECAPTCHA_SITE_KEY = '6LfWvWUrAAAAAJDA_6bKLNWG6yOG7NNWZS7kZKxJ';

    // Cargar el script de reCAPTCHA cuando el componente se monta
    useEffect(() => {
        const loadRecaptcha = () => {
            // Verificar si ya existe el script
            const existingScript = document.querySelector(`script[src*="recaptcha"]`);
            if (existingScript) existingScript.remove();
            
            // Limpiar grecaptcha si existe
            if (window.grecaptcha) delete window.grecaptcha;
            
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                // Esperar un poco para asegurar que grecaptcha esté completamente cargado
                setTimeout(() => {
                    if (window.grecaptcha && window.grecaptcha.ready) {
                        window.grecaptcha.ready(() => {
                            setRecaptchaLoaded(true);
                        });
                    } else {
                        console.error('reCAPTCHA no se cargó correctamente');
                    }
                }, 100);
            };
            script.onerror = () => console.error('Error al cargar reCAPTCHA');
            
            document.head.appendChild(script);
        };

        loadRecaptcha();

        // Cleanup al desmontar el componente
        return () => {
            const script = document.querySelector(`script[src*="recaptcha"]`);
            if (script) script.remove();
            if (window.grecaptcha) delete window.grecaptcha;
        };
    }, []);

    // Función para ejecutar reCAPTCHA
    const executeRecaptcha = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (!window.grecaptcha || !recaptchaLoaded) {
                reject('reCAPTCHA no está cargado');
                return;
            }

            window.grecaptcha.ready(() => {
                window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
                    .then((token: string) => {
                        console.log('reCAPTCHA token obtenido:', token);
                        resolve(token);
                    })
                    .catch((error: any) => {
                        console.error('Error al ejecutar reCAPTCHA:', error);
                        reject(error);
                    });
            });
        });
    };

    const onSubmited = handleSubmit(async (data: ContactFormData) => {
        try {
            // Ejecutar reCAPTCHA antes de enviar el formulario
            const recaptchaToken = await executeRecaptcha();
            
            // Agregar el token de reCAPTCHA a los datos del formulario
            const formDataWithRecaptcha = { ...data, recaptchaToken };
            await sendEmail(formDataWithRecaptcha);

            setIsSubmitted(true);
            reset();

            // Resetear el estado después de 3 segundos
            setTimeout(() => setIsSubmitted(false), 3000);
            
        } catch (error) {
            console.error('Error con reCAPTCHA:', error);
            alert('Error de verificación. Por favor, inténtalo de nuevo.');
        }
    });
    
    return (
        <form onSubmit={onSubmited}>
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl">
                <div className="mb-6">
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        Solicita tu consulta gratuita
                    </h2>
                    <p className="text-white/80 text-sm lg:text-base">
                        Cuéntanos sobre tu situación y te contactaremos en menos de 24 horas
                    </p>
                </div>

                {isSubmitted ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                            ¡Mensaje enviado exitosamente!
                        </h4>
                        <p className="text-white/80">
                            Nos comunicaremos contigo en las próximas 24 horas
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4 lg:space-y-6">
                        {/* Primera fila: Nombre y Email */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white font-medium mb-2 text-sm">
                                    <User className="w-4 h-4 inline mr-2" />
                                    Nombre completo *
                                </label>
                                <input
                                    {...register('nombre', { 
                                    required: 'El nombre es requerido',
                                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                    })}
                                    type="text"
                                    className="w-full px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm"
                                    placeholder="Tu nombre completo"
                                />
                                {errors.nombre && (
                                    <p className="text-red-300 text-xs mt-1">{errors.nombre.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2 text-sm">
                                    <Mail className="w-4 h-4 inline mr-2" />
                                    Correo electrónico *
                                </label>
                                <input
                                    {...register('email', { 
                                    required: 'El email es requerido',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Email inválido'
                                    }
                                    })}
                                    type="email"
                                    className="w-full px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm"
                                    placeholder="tu@email.com"
                                />
                                {errors.email && (
                                    <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Segunda fila: Teléfono y Empresa */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white font-medium mb-2 text-sm">
                                    <Phone className="w-4 h-4 inline mr-2" />
                                    Teléfono *
                                </label>
                                <input
                                    {...register('telefono', { 
                                        required: 'El teléfono es requerido',
                                        minLength: { value: 10, message: 'Mínimo 10 dígitos' }
                                    })}
                                    type="tel"
                                    className="w-full px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm"
                                    placeholder="+57 300 123 4567"
                                />
                                {errors.telefono && (
                                    <p className="text-red-300 text-xs mt-1">{errors.telefono.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2 text-sm">
                                    <Building className="w-4 h-4 inline mr-2" />
                                    Empresa
                                </label>
                                <input
                                    {...register('empresa')}
                                    type="text"
                                    className="w-full px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm"
                                    placeholder="Nombre de tu empresa"
                                />
                            </div>
                        </div>

                        {/* Tercera fila: Cargo (solo en móvil ocupa toda la fila, en desktop la mitad) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white font-medium mb-2 text-sm">
                                    <Pencil className="w-4 h-4 inline mr-2" />
                                    Cargo en la empresa
                                </label>
                                <input
                                    {...register('cargo')}
                                    type="text"
                                    className="w-full px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm"
                                    placeholder="Tu cargo"
                                />
                            </div>
                            {/* Espacio vacío en desktop para mantener la alineación */}
                            <div className="hidden lg:block"></div>
                        </div>

                        {/* Cuarta fila: Mensaje */}
                        <div>
                            <label className="block text-white font-medium mb-2 text-sm">
                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                Mensaje *
                            </label>
                            <textarea
                                {...register('mensaje', { 
                                    required: 'El mensaje es requerido',
                                    minLength: { value: 10, message: 'Mínimo 10 caracteres' }
                                })}
                                rows={3}
                                className="w-full px-3 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none text-sm"
                                placeholder="Cuéntanos sobre tu situación de cartera..."
                            />
                            {errors.mensaje && (
                                <p className="text-red-300 text-xs mt-1">{errors.mensaje.message}</p>
                            )}
                        </div>

                        {/* Información sobre reCAPTCHA */}
                        <div className="text-xs text-white/60">
                            Este sitio está protegido por reCAPTCHA y se aplican la{' '}
                            <a href={router.privacity} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:underline">
                                Política de Privacidad
                            </a>{' '}
                            y los{' '}
                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:underline">
                                Términos de Servicio
                            </a>{' '}
                            de Google.
                        </div>

                        {/* Botones */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {/* Botón WhatsApp */}
                            <button 
                                type="button"  
                                onClick={() => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')}
                                className="px-4 py-3 bg-green-500 text-white font-bold text-sm lg:text-base rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center group"
                            >
                                <WhatsAppIcon />
                                WhatsApp
                            </button>

                            {/* Botón Enviar */}
                            <button
                                type="submit"
                                disabled={isSubmitting || !recaptchaLoaded}
                                className="px-4 py-3 bg-white text-green-700 font-bold text-sm lg:text-base rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center group border-2 border-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-700 mr-2" />
                                        Enviando...
                                    </>
                                ) : !recaptchaLoaded ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-700 mr-2" />
                                        Cargando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                        Enviar
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </form>
    )
}