import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon';
import { Building, Mail, MessageSquare, Pencil, Phone, Send, User } from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa?: string;
  cargo?: string;
  mensaje: string;
}

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
    const onSubmited = handleSubmit(async (_ : ContactFormData) => {})
    
    return (
        <form className="lg:pl-8 pb-5" onSubmit={onSubmited}>
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                    Solicita tu consulta gratuita
                    </h2>
                    <p className="text-white/80">
                        Cuéntanos sobre tu situación y te contactaremos en menos de 24 horas
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-white font-medium mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Nombre completo *
                        </label>
                        <input
                            {...register('nombre', { 
                            required: 'El nombre es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                            placeholder="Tu nombre completo"
                        />
                        {errors.nombre && (
                            <p className="text-red-300 text-sm mt-1">{errors.nombre.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-white font-medium mb-2">
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
                            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                            placeholder="tu@email.com"
                        />
                        {errors.email && (
                            <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    
                    {/* Teléfono */}
                    <div>
                        <label className="block text-white font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono *
                        </label>
                        <input
                        {...register('telefono', { 
                            required: 'El teléfono es requerido',
                            minLength: { value: 10, message: 'Mínimo 10 dígitos' }
                        })}
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                        placeholder="+57 300 123 4567"
                        />
                        {errors.telefono && (
                        <p className="text-red-300 text-sm mt-1">{errors.telefono.message}</p>
                        )}
                    </div>

                    {/* Empresa */}
                    <div>
                        <label className="block text-white font-medium mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Empresa
                        </label>
                        <input
                        {...register('empresa')}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                        placeholder="Nombre de tu empresa"
                        />
                    </div>

                    {/* Cargo */}
                    <div>
                        <label className="block text-white font-medium mb-2">
                        <Pencil className="w-4 h-4 inline mr-2" />
                        Cargo en la empresa
                        </label>
                        <input
                        {...register('cargo')}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                        placeholder="Nombre de tu cargo"
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="block text-white font-medium mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Mensaje *
                        </label>
                        <textarea
                        {...register('mensaje', { 
                            required: 'El mensaje es requerido',
                            minLength: { value: 10, message: 'Mínimo 10 caracteres' }
                        })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
                        placeholder="Cuéntanos sobre tu situación de cartera..."
                        />
                        {errors.mensaje && (
                        <p className="text-red-300 text-sm mt-1">{errors.mensaje.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Botón WhatsApp */}
                        <button type="button" className="px-6 py-4 bg-green-500 text-white font-bold text-lg rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center group"
                        >
                        <WhatsAppIcon  />
                          WhatsApp
                        </button>

                        {/* Botón Enviar */}
                        <button
                          type="submit"
                          className="px-6 py-4 bg-white text-green-700 font-bold text-lg rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center group border-2 border-white/20"
                        >
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Enviar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}