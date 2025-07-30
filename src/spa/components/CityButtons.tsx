import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'
import { router } from '@/main/configs/config'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

const hoverVariants = {
    hover: {
        y: -2,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
}

// Datos de sedes - puedes reemplazar con datos reales
const locations = [
    {
        id: 1,
        city: "Bogotá",
        region: "Cundinamarca",
        isMain: false,
        href : router.sedeBogota
    },
    {
        id: 2,
        city: "Medellín",
        region: "Antioquia",
        isMain: false,
        href : router.sedeMedellin
    }
]

export const CityButtons = () => {
    return (
        <section className="py-12 relative">
            {/* Subtle Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 via-white to-cyan-50/30" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Header - Compact */}
                    <motion.div variants={itemVariants} className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className={`w-8 h-8 ${styles.primary[500]} rounded-lg flex items-center justify-center`}>
                                <MapPin className="w-4 h-4 text-white" />
                            </div>
                            <h3 className={`text-2xl font-bold ${styles.text.primary}`}>
                                Nuestras Sedes
                            </h3>
                        </div>
                        <p className={`${styles.text.accent} text-base max-w-2xl mx-auto`}>
                            Presencia nacional para brindar un servicio cercano y personalizado
                        </p>
                    </motion.div>

                    {/* Locations Grid - Horizontal Layout */}
                    <motion.div 
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
                    >
                        {locations.map((location) => (
                            <motion.div
                                key={location.id}
                                variants={itemVariants}
                                whileHover="hover"
                                className="group"
                                onClick={() => window.location.href = location.href}
                            >
                                <motion.div
                                    variants={hoverVariants}
                                    className={`relative bg-white rounded-xl p-6 border transition-all duration-300 cursor-pointer
                                        ${location.isMain 
                                            ? `${styles.border.primary} border-2 ${styles.shadow.primary} shadow-lg` 
                                            : `${styles.border.gray} hover:${styles.border.primary} hover:shadow-md`
                                        }
                                    `}
                                >
                                    {/* Main Sede Badge */}
                                    {location.isMain && (
                                        <div className="absolute -top-2 -right-2">
                                            <div className={`${styles.primary[500]} text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm`}>
                                                Principal
                                            </div>
                                        </div>
                                    )}

                                    {/* City Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300
                                            ${location.isMain 
                                                ? `${styles.primary[500]} text-white` 
                                                : `${styles.primary[100]} ${styles.text.secondary} group-hover:${styles.primary[500]} group-hover:text-white`
                                            }
                                        `}>
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className={`font-bold ${styles.text.primary} text-lg`}>
                                                {location.city}
                                            </h4>
                                            <p className={`text-sm ${styles.text.accent}`}>
                                                {location.region}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Effect Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${styles.gradient.primary} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer Info - Very Subtle */}
                    <motion.div 
                        variants={itemVariants}
                        className="text-center mt-8"
                    >
                        <div className={`inline-flex items-center gap-2 ${styles.primary[100]} px-4 py-2 rounded-full`}>
                            <div className={`w-2 h-2 ${styles.primary[500]} rounded-full animate-pulse`} />
                            <span className={`text-sm ${styles.text.secondary} font-medium`}>
                                Atención personalizada en todas nuestras sedes
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}