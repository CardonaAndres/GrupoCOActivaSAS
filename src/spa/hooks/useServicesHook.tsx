import { Award, BarChart3, Briefcase, Clock, FileText, Handshake, Scale, Users } from "lucide-react"

const services = [
      {
        icon: Briefcase,
        title: "Cobro de Cartera: prejurídico y jurídico",
        description: "Gestionamos el cobro de tus obligaciones en todas sus etapas, aplicando estrategias personalizadas para maximizar la recuperación.",
        features: ["Estrategias personalizadas", "Todas las etapas", "Máxima recuperación"],
        color: "from-teal-700 via-teal-500 to-teal-800"
    },
    {
        icon: FileText,
        title: "Certificación de Castigo de Cartera",
        description: "Emitimos certificaciones formales que respaldan la depuración contable de cartera incobrable, conforme a la normativa vigente.",
        features: ["Cumplimiento normativo", "Proceso ágil", "Documentación completa"],
        color: "from-teal-700 via-teal-500 to-teal-800"
    },
    {
        icon: Handshake,
        title: "Conciliaciones en Asuntos de Cartera",
        description: "Facilitamos acuerdos de pago y conciliaciones efectivas entre las partes, priorizando soluciones rápidas y amigables.",
        features: ["Soluciones rápidas", "Acuerdos efectivos", "Relaciones comerciales"],
        color: "from-teal-700 via-teal-500 to-teal-800"
    },
    {
        icon: BarChart3,
        title: "Estudios de Crédito y Análisis de Bienes",
        description: "Realizamos estudios detallados sobre la capacidad crediticia de personas y empresas, así como análisis de bienes y activos.",
        features: ["Análisis detallado", "Capacidad crediticia", "Evaluación de activos"],
        color: "from-teal-700 via-teal-500 to-teal-800"
    }
]

const benefits = [
    {
      icon: Award,
      title: "Más de 10 años de experiencia",
      description: "Equipo de abogados expertos en recuperación de cartera"
    },
    {
      icon: Clock,
      title: "Cobro inmediato y personalizado",
      description: "Estrategias a la medida y gestión rápida y efectiva"
    },
    {
      icon: Users,
      title: "Modelo basado en resultados",
      description: "Solo cobramos cuando tú recuperas tu dinero"
    },
    {
      icon: Scale,
      title: "Sin costos ocultos",
      description: "No cobramos afiliaciones, mensualidades ni tasas ocultas"
    }
]

export const useServicesHook = () => {

  return {
    services,
    benefits
  }
}
