import { coactiva_config } from "@/main/configs/config"
import { Mail, Phone, Shield, Star, Users } from "lucide-react"
import emailjs from '@emailjs/browser'
import { useState } from "react"

const contactInfo = [
    {
        icon: Phone,
        title: "Teléfono",
        content: '+57 ' + coactiva_config.cellphones.one,
        subtitle: "Línea directa",
        color: "text-blue-600"
    },
    {
        icon: Mail,
        title: "Email",
        content: coactiva_config.emails.one,
        subtitle: "Respuesta en 24 horas",
        color: "text-purple-600"
    }
]

const features = [
    {
        icon: Shield,
        title: "Consulta Confidencial",
        description: "Tu información está protegida"
    },
    {
        icon: Users,
        title: "Atención Personalizada",
        description: "Soluciones a tu medida"
    },
    {
        icon: Star,
        title: "Respuesta Rápida",
        description: "Contestamos en 24 horas"
    }
]

type emailData = {
    nombre: string;
    email: string;
    telefono: string;
    empresa?: string;
    cargo?: string;
    mensaje: string;
    recaptchaToken: string;
}

export const useContactHook = () => {
    const [ loading, setLoading ] = useState(false);

    const sendEmail = async (emailData: emailData) => {
            try {
                setLoading(true);

                const result = await emailjs.send(
                    'service_oio611e',
                    'template_3fcxb7u',
                    {
                        nombre: emailData.nombre,
                        email: emailData.email,
                        telefono: emailData.telefono,
                        empresa: emailData.empresa,
                        cargo: emailData.cargo,
                        mensaje: emailData.mensaje,
                    },
                    'tdTDxrJyt3wjDmdwz'
                );

                console.log('Email enviado:', result.text);
                return { success: true };
            } catch (error: any) {
                console.error('Error al enviar email:', error);
                return { success: false, error };
            } finally {
                setLoading(false);
            }
    };


    return {
        features,
        contactInfo,
        sendEmail,
        loading
    }
}

