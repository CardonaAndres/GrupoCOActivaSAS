'use client';

import { FormEvent, useState } from 'react';
import { useContactHook } from '@/hooks';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export const Form = () => {
    const { sendEmail, loading, status, errorMessage, resetStatus } = useContactHook();
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const result = await sendEmail({
            name: formData.nombre,
            email: formData.email,
            phone: formData.telefono,
            company: formData.empresa,
            message: formData.mensaje
        });

        if (result.success) {
            // Limpiar formulario después del envío exitoso
            setFormData({
                nombre: '',
                empresa: '',
                email: '',
                telefono: '',
                mensaje: ''
            });
            
            // Auto-ocultar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                resetStatus();
            }, 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="space-y-6">
            {/* Alerta de éxito */}
            {status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-green-900">¡Mensaje enviado con éxito!</h4>
                        <p className="text-sm text-green-700 mt-1">
                            Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                        </p>
                    </div>
                </div>
            )}

            {/* Alerta de error */}
            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-red-900">Error al enviar</h4>
                        <p className="text-sm text-red-700 mt-1">
                            {errorMessage}
                        </p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo *
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                            placeholder="Juan Pérez"
                        />
                    </div>
                    <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                            Empresa
                        </label>
                        <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                            placeholder="Nombre de su empresa"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                            placeholder="correo@ejemplo.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono *
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            required
                            value={formData.telefono}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                            placeholder="+57 300 123 4567"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Cuéntenos brevemente sobre su situación..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        'Enviar Consulta'
                    )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                    * Campos obligatorios. Sus datos están protegidos según nuestra política de privacidad.
                </p>
            </form>
        </div>
    );
}