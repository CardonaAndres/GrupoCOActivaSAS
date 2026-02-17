'use client';

import { useState } from "react";

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

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailData),
            });

            const data = await response.json();

            if (!response.ok)
                throw new Error(data.error || 'Error al enviar el mensaje');
            
            setStatus('success');
            return { success: true };

        } catch (error: any) {
            const errorMsg = error.message || 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.';
            setStatus('error');
            setErrorMessage(errorMsg);
            return { success: false, error: errorMsg };
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