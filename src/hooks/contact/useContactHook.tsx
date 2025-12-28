'use client';

import { useState } from "react";
import emailjs from '@emailjs/browser';

type EmailData = {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
}

type SendEmailResult = {
    success: boolean;
    error?: string;
}

export const useContactHook = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const sendEmail = async (emailData: EmailData): Promise<SendEmailResult> => {
        try {
            setLoading(true);
            setStatus('idle');
            setErrorMessage('');

            // Validaciones básicas
            if (!emailData.name || !emailData.email || !emailData.message) {
                throw new Error('Por favor completa todos los campos obligatorios');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailData.email)) {
                throw new Error('Por favor ingresa un correo electrónico válido');
            }

            const result = await emailjs.send(
                'service_oio611e',
                'template_3fcxb7u',
                {
                    nombre: emailData.name,
                    email: emailData.email,
                    telefono: emailData.phone || 'No proporcionado',
                    empresa: emailData.company || 'No proporcionado',
                    cargo: "",
                    mensaje: emailData.message,
                },
                'tdTDxrJyt3wjDmdwz'
            );

            if (result.status === 200) {
                setStatus('success');
                return { success: true };
            } else {
                throw new Error('Error al enviar el mensaje');
            }

        } catch (error: any) {
            const errorMsg = error.message || 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.';
            setStatus('error');
            setErrorMessage(errorMsg);
            
            return { 
                success: false, 
                error: errorMsg 
            };
        } finally {
            setLoading(false);
        }
    };

    const resetStatus = () => {
        setStatus('idle');
        setErrorMessage('');
    };

    return {
        sendEmail,
        loading,
        status,
        errorMessage,
        resetStatus
    }
}