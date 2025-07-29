import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'

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


// Artículos de ejemplo - puedes reemplazar con datos reales
const featuredArticles = [
    {
        id: 1,
        title: "Estrategias Efectivas para la Recuperación de Cartera",
        excerpt: "Descubre las técnicas más avanzadas y probadas para maximizar la recuperación de cuentas por cobrar en el mercado latinoamericano.",
        category: "Estrategias",
        readTime: "5 min",
        views: "2.1k",
        date: "2024-07-15",
        featured: true,
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        title: "Marco Legal del Cobro en Colombia 2024",
        excerpt: "Conoce las últimas actualizaciones en la legislación colombiana sobre procesos de cobro y recuperación de cartera.",
        category: "Legal",
        readTime: "8 min",
        views: "1.8k",
        date: "2024-07-10",
        featured: false,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        title: "Tecnología en el Cobro: Herramientas Digitales",
        excerpt: "Explora cómo la tecnología está revolucionando los procesos de cobranza y mejorando las tasas de recuperación.",
        category: "Tecnología",
        readTime: "6 min",
        views: "1.5k",
        date: "2024-07-05",
        featured: false,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
]

export const BlogSection = () => {
    return (
        <section className={`py-20 ${styles.accent[50]} relative overflow-hidden`}>
            {/* Enhanced Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-teal-300/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-cyan-300/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-100/10 via-transparent to-cyan-100/10 rounded-full blur-3xl" />
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
                        <motion.span 
                            variants={pulseVariants}
                            animate="pulse"
                            className={`inline-flex items-center px-6 py-3 rounded-full ${styles.primary[100]} ${styles.text.secondary} text-sm font-bold ${styles.border.primary} border-2 ${styles.shadow.primary} shadow-lg`}
                        >
                            <BookOpen className="w-5 h-5 mr-2" />
                            Conocimiento Especializado
                            <Sparkles className="w-4 h-4 ml-2" />
                        </motion.span>
                    </motion.div>

                    <motion.h2 
                        variants={itemVariants}
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${styles.text.primary} mb-6 leading-tight`}
                    >
                        Artículos de 
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.gradient.primary}`}>
                            {' '}Interés
                        </span>
                    </motion.h2>

                    <motion.p 
                        variants={itemVariants}
                        className={`text-xl ${styles.text.accent} mb-8 leading-relaxed max-w-3xl mx-auto`}
                    >
                        Mantente actualizado con las últimas tendencias, estrategias y normativas en 
                        <span className={`font-semibold ${styles.text.secondary}`}> recuperación de cartera y cobranza judicial.</span>
                    </motion.p>

                </motion.div>

                {/* Articles Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    {/* Articles Grid - 3 Column Layout like the image */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredArticles.map((article) => (
                            <motion.article
                                key={article.id}
                                variants={itemVariants}
                                whileHover="hover"
                                className="group cursor-pointer"
                            >
                                <motion.div
                                    variants={cardHoverVariants}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full relative"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={article.image} 
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full ${styles.primary[600]} text-white text-xs font-medium shadow-sm`}>
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className={`text-xl font-bold ${styles.text.primary} mb-3 leading-tight group-hover:${styles.text.secondary} transition-colors duration-300`}>
                                            {article.title}
                                        </h3>
                                        
                                        {/* Excerpt */}
                                        <p className={`${styles.text.gray} mb-4 leading-relaxed text-sm line-clamp-3`}>
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    {/* Hover Effect Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${styles.gradient.primary} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
                                </motion.div>
                            </motion.article>
                        ))}
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
                    <div className={`p-2 lg:p-4 relative overflow-hidden`}>

                        <div className="relative z-10">

                            {/* CTA Button - Single Button like in the image */}
                            <div className="flex justify-center">
                                <motion.button 
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group bg-gradient-to-r ${styles.gradient.primary} ${styles.hover.primary} text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3`}
                                >
                                    <BookOpen className="w-5 h-5 group-hover:animate-pulse" />
                                    Ver todos
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}