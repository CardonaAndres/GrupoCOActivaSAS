import { coactiva_config } from "@/main/configs/config"
import { Mail, Phone, Shield, Star, Users } from "lucide-react"

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

export const useContactHook = () => {
  return {
    features,
    contactInfo
  }
}

