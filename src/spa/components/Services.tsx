import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'
import { useServicesHook } from '../hooks/useServicesHook'
import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
    opacity: 1,
    transition: {
            duration: 0.6,
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
    }
}

const cardHoverVariants = {
    hover: {
    y: -8,
    scale: 1.02,
    transition: {
        duration: 0.3,
        ease: "easeOut"
    }
    }
}

export const Services = () => {
    const { services, benefits } = useServicesHook();

    return (
        <section className={`py-20 ${styles.accent[50]} relative overflow-hidden`}>
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/20 to-green-300/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-slate-200/20 to-slate-300/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
                >
                <motion.div variants={itemVariants} className="mb-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full ${styles.primary[100]} ${styles.text.secondary} text-sm font-medium ${styles.border.primary} border`}>
                    <Scale className="w-4 h-4 mr-2" />
                    Servicios Especializados
                    </span>
                </motion.div>

                <motion.h2 
                    variants={itemVariants}
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${styles.text.primary} mb-6 leading-tight`}
                >
                    Nuestros 
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.gradient.primary}`}>
                    {' '}Servicios
                    </span>
                </motion.h2>

                <motion.p 
                    variants={itemVariants}
                    className={`text-xl ${styles.text.accent} mb-8 leading-relaxed max-w-3xl mx-auto`}
                >
                    En Grupo Coactiva SAS, ofrecemos soluciones de cobro personalizadas para empresas nacionales e internacionales 
                    que requieren recuperar su cartera en Colombia y América Latina.
                </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20"
                >
                {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.div
                        variants={cardHoverVariants}
                        className={`bg-white rounded-2xl p-8 ${styles.shadow.card} hover:shadow-2xl transition-all duration-300 border ${styles.border.gray} h-full`}
                        >
                        {/* Icon */}
                        <div className="mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg ${styles.shadow.primary}`}>
                            <Icon className={`w-8 h-8 ${styles.text.white}`} />
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className={`text-xl font-bold ${styles.text.primary} mb-4 leading-tight`}>
                            {service.title}
                        </h3>
                        
                        <p className={`${styles.text.gray} mb-6 leading-relaxed`}>
                            {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                                <div className={`w-2 h-2 ${styles.primary[500]} rounded-full mr-3`} />
                                <span className={`text-sm ${styles.text.accent} font-medium`}>
                                {feature}
                                </span>
                            </div>
                            ))}
                        </div>

                        {/* Hover Effect Line */}
                        <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                        </motion.div>
                    </motion.div>
                    )
                })}
                </motion.div>

                {/* Process Section */}
                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`${styles.primary[600]} rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden`}
                >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                </div>

                <div className="relative z-10">
                    <motion.div variants={itemVariants} className="text-center mb-12">
                    <h3 className={`text-3xl lg:text-4xl font-bold ${styles.text.white} mb-4`}>
                        Nuestro Proceso Integral
                    </h3>
                    <p className={`text-lg text-green-100 max-w-2xl mx-auto`}>
                        Nuestro equipo profesional gestiona todo el proceso desde la evaluación hasta la implementación 
                        de acciones jurídicas y extrajurídicas.
                    </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { step: "01", title: "Evaluación", desc: "Análisis de solvencia crediticia" },
                        { step: "02", title: "Estrategia", desc: "Diseño de plan personalizado" },
                        { step: "03", title: "Ejecución", desc: "Implementación de acciones" },
                        { step: "04", title: "Recuperación", desc: "Resultados garantizados" }
                    ].map((item, index) => (
                        <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-center"
                        >
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                            <div className={`text-2xl font-bold text-green-200 mb-2`}>
                            {item.step}
                            </div>
                            <h4 className={`text-lg font-semibold ${styles.text.white} mb-2`}>
                            {item.title}
                            </h4>
                            <p className="text-green-100 text-sm">
                            {item.desc}
                            </p>
                        </div>
                        </motion.div>
                    ))}
                    </div>
                </div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16"
                >
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h3 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-4`}>
                    Nuestros Beneficios
                    </h3>
                    <p className={`text-lg ${styles.text.accent} max-w-2xl mx-auto`}>
                    Trabajamos con un enfoque integral y personalizado para garantizar los mejores resultados
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                        <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className={`bg-white rounded-xl p-6 ${styles.shadow.card} hover:shadow-xl transition-all duration-300 border ${styles.border.gray} text-center`}
                        >
                        <div className={`w-12 h-12 bg-gradient-to-br ${styles.gradient.primary} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg ${styles.shadow.primary}`}>
                            <Icon className={`w-6 h-6 ${styles.text.white}`} />
                        </div>
                        <h4 className={`text-lg font-semibold ${styles.text.primary} mb-2`}>
                            {benefit.title}
                        </h4>
                        <p className={`${styles.text.gray} text-sm`}>
                            {benefit.description}
                        </p>
                        </motion.div>
                    )
                    })}
                </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
                >
                <div className={`bg-gradient-to-r ${styles.gradient.accent} rounded-2xl p-8 lg:p-12 border ${styles.border.gray}`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${styles.text.primary} mb-4`}>
                    ¿Listo para recuperar tu cartera?
                    </h3>
                    <p className={`${styles.text.accent} mb-8 max-w-2xl mx-auto`}>
                    Confía en Grupo Coactiva SAS para convertir tus cuentas por cobrar en recursos recuperados. 
                    Contáctanos hoy y descubre cómo podemos ayudarte.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className={`${styles.primary[600]} ${styles.hover.primary} ${styles.text.white} 
                        ${styles.shadow.primary} font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2`}
                        >
                            <WhatsAppIcon  />
                            Hablar con un Asesor
                        </button>
                    </div>
                </div>
                </motion.div>
            </div>
        </section>
    )
}