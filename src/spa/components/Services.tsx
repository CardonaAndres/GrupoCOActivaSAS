import { motion } from 'framer-motion'
import { Scale, Zap, Star, Sparkles, TrendingUp, Users, Clock } from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'
import { useServicesHook } from '../hooks/useServicesHook'
import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon'
import { coactiva_config } from '@/main/configs/config'

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

const featuredCardVariants = {
    hover: {
        y: -12,
        scale: 1.03,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
}

const benefitCardVariants = {
    hover: {
        y: -10,
        scale: 1.05,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
}

const pulseVariants = {
    pulse: {
        scale: [1, 1.1, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const floatingVariants = {
    float: {
        y: [-5, 5, -5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const imageSlideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

export const Services = () => {
    const { services, benefits } = useServicesHook();

    return (
        <section className={`py-20 ${styles.accent[50]} relative overflow-hidden`}>
            {/* Enhanced Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-teal-300/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-slate-200/20 to-slate-300/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-100/10 via-transparent to-emerald-100/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with Hero Image */}
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
                        En Grupo Coactiva SAS ofrecemos soluciones personalizadas para la recuperación de cartera vencida para empresas de Colombia y Latam.
                    </motion.p>

                    {/* Hero Illustration */}
                    <motion.div variants={imageSlideVariants} className="flex justify-center mb-12">
                    </motion.div>
                </motion.div>

                {/* Services Grid - Enhanced Featured First Service */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }} className="mb-20"
                >
                    {/* Featured Service */}
                    {services.length > 0 && (
                         <motion.div variants={itemVariants} whileHover="hover" className="mb-12">
                            <motion.div
                                variants={featuredCardVariants}
                                className={`relative bg-gradient-to-br from-teal-100 to-teal-200/50 rounded-3xl p-8 lg:p-12 ${styles.shadow.card} hover:shadow-2xl transition-all duration-500 border-2 border-teal-200 overflow-hidden group`}
                            >
                                {/* Background Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Floating Elements */}
                                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-teal-200/30 to-teal-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-tl from-teal-300/20 to-teal-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Contenido de texto */}
                                    <div>
                                        {/* Title with Enhanced Typography */}
                                        <h3 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-4 leading-tight group-hover:text-teal-700 transition-colors duration-300`}>
                                            {services[0].title}
                                        </h3>
                                        
                                        <p className={`text-lg ${styles.text.gray} mb-6 leading-relaxed`}>
                                            {services[0].description}
                                        </p>

                                        {/* Enhanced CTA Button */}
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')}
                                            className="group/btn bg-gradient-to-r from-teal-700 via-teal-500 to-teal-800 hover:from-teal-800 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                                        >
                                            <Zap className="w-5 h-5 group-hover/btn:animate-pulse" />
                                            Comenzar Ahora
                                        </motion.button>
                                    </div>

                                    {/* Sección de imagen */}
                                    <div className="relative order-first lg:order-last">
                                        <div className="relative overflow-hidden rounded-2xl shadow-2xl group/image">
                                            {/* Imagen principal */}
                                            <img 
                                                src={"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} 
                                                alt={services[0].title}
                                                className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover/image:scale-110"
                                            />
                                            
                                            {/* Overlay con gradiente */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-transparent to-teal-600/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                                            
                                            {/* Elementos decorativos flotantes */}
                                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
                                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                                        </div>
                                        
                                        {/* Tarjeta flotante con estadística o feature destacado */}
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-teal-100"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <p className="text-lg font-bold text-teal-700">
                                                        Grupo Coactiva S.A.S
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Enhanced Hover Effect Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Regular Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(1).map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={index + 1}
                                    variants={itemVariants}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        variants={cardHoverVariants}
                                        className={`bg-white rounded-2xl p-8 ${styles.shadow.card} hover:shadow-2xl transition-all duration-300 border ${styles.border.gray} h-full relative overflow-hidden group`}
                                    >
                                        {/* Card Background Image */}
                                        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                            <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-full blur-xl" />
                                        </div>

                                        {/* Icon with enhanced styling */}
                                        <div className="mb-6 relative z-10">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg ${styles.shadow.primary} relative`}>
                                                <Icon className={`w-8 h-8 ${styles.text.white}`} />
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <Star className="w-3 h-3 text-white fill-current" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className={`text-xl font-bold ${styles.text.primary} mb-4 leading-tight relative z-10`}>
                                            {service.title}
                                        </h3>
                                        
                                        <p className={`${styles.text.gray} mb-6 leading-relaxed relative z-10`}>
                                            {service.description}
                                        </p>

                                        {/* Features with enhanced styling */}
                                        <div className="space-y-3 mb-4 relative z-10">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center group/feature">
                                                    <div className={`w-2 h-2 ${styles.primary[800]} rounded-full mr-3 group-hover/feature:scale-125 transition-transform duration-200`} />
                                                    <span className={`text-sm ${styles.text.accent} font-medium group-hover/feature:text-teal-700 transition-colors duration-200`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 relative z-10`} />
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Enhanced Benefits Section */}
                <motion.div variants={containerVariants} initial="hidden"
                        whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        className="mb-16 relative"
                    >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-100/50 via-transparent to-teal-200/50 rounded-3xl -mx-4" />
                    
                    <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
                        <div className="mb-6">
                            <motion.div 
                                variants={pulseVariants}
                                animate="pulse"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 text-sm font-bold border-2 border-teal-200 shadow-lg"
                            >
                                <Sparkles className="w-5 h-5 mr-2 text-teal-700" />
                                ¿Por qué elegir Grupo Coactiva?
                                <Sparkles className="w-5 h-5 ml-2 text-teal-700" />
                            </motion.div>
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent mb-6">
                            Nuestros Beneficios
                        </h3>
                        <p className={`text-xl ${styles.text.accent} max-w-3xl mx-auto leading-relaxed mb-8`}>
                            Trabajamos con un enfoque integral y personalizado para garantizar los mejores resultados. 
                            <span className="font-semibold text-teal-700"> Resultados que hablan por sí solos.</span>
                        </p>

                        {/* Benefits Preview Images */}
                        <div className="flex justify-center gap-4 mb-8">
                            {[
                                { icon: TrendingUp, bg: "from-teal-700 via-teal-500 to-teal-800" },
                                { icon: Users, bg: "from-teal-700 via-teal-500 to-teal-800" },
                                { icon: Clock, bg: "from-teal-700 via-teal-500 to-teal-800" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`w-16 h-16 bg-gradient-to-br ${item.bg} rounded-xl flex items-center justify-center shadow-lg`}
                                >
                                    <item.icon className="w-8 h-8 text-white" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover="hover"
                                    className="group"
                                >
                                    <motion.div
                                        variants={benefitCardVariants}
                                        className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-teal-200 text-center overflow-hidden h-full"
                                    >
                                        {/* Floating Background Elements */}
                                        <motion.div 
                                            variants={floatingVariants}
                                            animate="float"
                                            className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-teal-100/50 to-teal-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                                        />
                                        <motion.div 
                                            variants={floatingVariants}
                                            animate="float"
                                            style={{ animationDelay: '1s' }}
                                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-emerald-100/40 to-teal-200/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-teal-50/50 to-teal-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-800 rounded-b-full group-hover:w-24 transition-all duration-500" />

                                        <div className="relative z-10">
                                            <div className="relative mb-6">
                                                <motion.div 
                                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                                    transition={{ duration: 0.5 }}
                                                    className="relative"
                                                >
                                                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-teal-400/30 to-teal-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500 mx-auto" />
                                                    <div className="relative w-20 h-20 bg-gradient-to-br from-teal-700 via-teal-500 to-teal-800 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:shadow-teal-500/25 transition-all duration-500">
                                                        <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                                                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                                                    </div>
                                                </motion.div>
                                            </div>

                                            <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                                                {benefit.title}
                                            </h4>
                                            
                                            <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-6">
                                                {benefit.description}
                                            </p>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>

                </motion.div>

                {/* Enhanced CTA Section */}
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
                        <button onClick={() => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')} className={`${styles.primary[600]} ${styles.hover.primary} ${styles.text.white} 
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