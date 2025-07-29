import { motion } from 'framer-motion'
import { MapPin, Navigation, Building, Sparkles, Star } from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'
import { useLocation } from 'react-router-dom'
import { coactiva_config, sedes } from '@/main/configs/config'
import { WhatsAppIcon } from '@/main/assets/svgs/WhatsAppIcon'

// Animation Variants
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

const pulseVariants = {
    pulse: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const floatingVariants = {
    float: {
        y: [-3, 3, -3],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

export const SedeComponent = () => {
    const location = useLocation();
    const isMedellin = location.pathname.includes('medellin');
    const { city, backgroundImage, mapUrl, description, highlights } = isMedellin ? sedes.medellin : sedes.bogota;

    return (
        <section className={`py-20 ${styles.accent[50]} relative overflow-hidden`}>
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-teal-300/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-cyan-300/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with Background Image */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="relative h-80 lg:h-96">
                        <img 
                            src={backgroundImage} 
                            alt={`Sede ${city}`}
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${styles.gradient.overlay}`} />
                        
                        {/* Floating Background Elements */}
                        <motion.div
                            variants={floatingVariants}
                            animate="float"
                            className="absolute top-10 right-10 w-20 h-20 bg-teal-400/20 rounded-full blur-xl"
                        />
                        <motion.div
                            variants={floatingVariants}
                            animate="float"
                            style={{ animationDelay: '1s' }}
                            className="absolute bottom-10 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg"
                        />

                        {/* Header Content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white relative z-10">
                                <motion.div variants={itemVariants} className="mb-6">
                                    <motion.span 
                                        variants={pulseVariants}
                                        animate="pulse"
                                        className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold shadow-lg"
                                    >
                                        <Building className="w-5 h-5 mr-2" />
                                        Nuestra Sede
                                        <Sparkles className="w-4 h-4 ml-2" />
                                    </motion.span>
                                </motion.div>

                                <motion.h1 
                                    variants={itemVariants}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                                >
                                    Sede 
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-teal-200">
                                        {' '}{city}
                                    </span>
                                </motion.h1>

                                <motion.p 
                                    variants={itemVariants}
                                    className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-white/90"
                                >
                                    {description}
                                </motion.p>
                            </div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-transparent rounded-br-full" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-cyan-400/30 to-transparent rounded-tl-full" />
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-12 mb-16"
                >
                    {/* Left Column - Contact Information & CTA */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Contact Header */}
                        <div>
                            <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-6 leading-tight`}>
                                Información de 
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.gradient.primary}`}>
                                    {' '}Contacto
                                </span>
                            </h2>
                            <p className={`text-lg ${styles.text.accent} leading-relaxed`}>
                                Estamos aquí para brindarte el mejor servicio de recuperación de cartera. 
                                Contáctanos a través de cualquiera de nuestros canales disponibles.
                            </p>
                        </div>

                        {/* CTA Section */}
                        <div className="space-y-4">
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-center"
                            >
                                <div className={`bg-gradient-to-r ${styles.gradient.accent} rounded-3xl p-8 lg:p-12 ${styles.border.accent} border-2 relative overflow-hidden`}>
                                    {/* Background Decoration */}
                                    <div className="absolute top-0 left-0 w-full h-full opacity-5">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23134e4a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                            backgroundSize: '30px 30px'
                                        }} />
                                    </div>

                                    <div className="relative z-10">
                                        <motion.div
                                            variants={pulseVariants}
                                            animate="pulse"
                                            className={`w-16 h-16 bg-gradient-to-br ${styles.primary[500]} to-cyan-600 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl`}
                                        >
                                            <Building className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <h3 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-4 leading-tight`}>
                                            ¿Listo para visitarnos en 
                                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.gradient.primary}`}> {city}?</span>
                                        </h3>
                                        
                                        <p className={`text-xl ${styles.text.accent} mb-8 max-w-2xl mx-auto leading-relaxed`}>
                                            Nuestro equipo especializado está listo para atenderte y brindarte las mejores soluciones 
                                            <span className={`font-semibold ${styles.text.secondary}`}> de recuperación de cartera.</span>
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button 
                                                type="button"  
                                                onClick={() => window.open(`https://wa.me/${coactiva_config.cellphones.oneToWhatsapp}`, '_blank')}
                                                className="px-4 py-3 bg-green-500 text-white font-bold text-sm lg:text-base rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center group"
                                            >
                                                <WhatsAppIcon />
                                                WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Highlights Section */}
                        <motion.div variants={itemVariants} className="mt-8">
                            <h3 className={`text-xl font-bold ${styles.text.primary} mb-4 flex items-center`}>
                                <Star className={`w-5 h-5 ${styles.text.secondary} mr-2`} />
                                ¿Por qué elegir nuestra sede?
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center group"
                                    >
                                        <div className={`w-2 h-2 ${styles.primary[500]} rounded-full mr-3 group-hover:scale-150 transition-transform duration-300`} />
                                        <span className={`text-sm ${styles.text.accent} font-medium group-hover:${styles.text.secondary} transition-colors duration-300`}>
                                            {highlight}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Map Section */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Map Header */}
                        <div>
                            <h2 className={`text-3xl lg:text-4xl font-bold ${styles.text.primary} mb-6 leading-tight`}>
                                Nuestra 
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.gradient.primary}`}>
                                    {' '}Ubicación
                                </span>
                            </h2>
                            <p className={`text-lg ${styles.text.accent} leading-relaxed mb-6`}>
                                Encuentranos fácilmente en el corazón de {city}. 
                                Nuestra ubicación estratégica nos permite brindar un servicio eficiente y accesible.
                            </p>
                        </div>

                        {/* Map Container */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-200 relative overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23134e4a' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                                        backgroundSize: '20px 20px'
                                    }} />
                                </div>

                                {/* Map Header */}
                                <div className="relative z-10 mb-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className={`w-10 h-10 bg-gradient-to-br ${styles.primary[500]} to-cyan-600 rounded-lg flex items-center justify-center mr-3`}>
                                                <MapPin className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${styles.text.primary}`}>Mapa Interactivo</h4>
                                                <p className={`text-sm ${styles.text.accent}`}>Sede {city}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Iframe Container */}
                                <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src={mapUrl}
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-xl"
                                        title={`Mapa de la sede en ${city}`}
                                    />
                                </div>

                                {/* Map Footer */}
                                <div className="relative z-10 mt-4 flex items-center justify-between text-sm">
                                    <span className={`${styles.text.accent} font-medium`}>
                                        📍 {city}, Colombia
                                    </span>
                                    <span className={`${styles.text.gray}`}>
                                        Actualizado hoy
                                    </span>
                                </div>
                            </div>

                            {/* Floating Action Button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${styles.primary[500]} to-cyan-600 rounded-full shadow-xl flex items-center justify-center z-20 hover:shadow-2xl transition-all duration-300`}
                            >
                                <Navigation className="w-6 h-6 text-white" />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}