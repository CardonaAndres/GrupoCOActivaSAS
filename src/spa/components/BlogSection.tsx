import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Sparkles, Clock, Scale, FileText } from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'
import { useBlogHook } from '../hooks/useBlogHook'
import type { BlogPost } from '@/main/assets/ts/types'
import { router } from '@/main/configs/config'
import { useNavigate } from 'react-router-dom'

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

// Artículos destacados seleccionados del array
const getFeaturedArticles = (blogPosts: BlogPost[]) => {
    // Seleccionar los 3 artículos más interesantes basados en relevancia y utilidad
    const featuredIndices = [1, 2, 4]; // Momento ideal, Cobro prejurídico, Ley 1116
    
    return featuredIndices.map(index => {
        const post = blogPosts[index];
        if (!post) return null;
        
        // Mapear iconos y categorías para cada artículo
        const articleMeta: Record<number, { icon: any; category: string; color: string; excerpt: string }> = {
            1: { 
                icon: Clock, 
                category: "Timing Estratégico",
                color: "from-amber-500 to-orange-600",
                excerpt: "Descubre el momento exacto para iniciar el cobro de cartera y maximizar tus probabilidades de recuperación exitosa."
            },
            2: { 
                icon: Scale, 
                category: "Estrategia Legal",
                color: "from-blue-500 to-indigo-600",
                excerpt: "Aprende la importancia del cobro prejurídico como paso previo antes de escalar a procesos judiciales costosos."
            },
            4: { 
                icon: FileText, 
                category: "Protección Legal",
                color: "from-red-500 to-rose-600",
                excerpt: "Protege tu cartera antes de que tu cliente se acoja a la Ley 1116 de insolvencia empresarial en Colombia."
            }
        };
        
        const meta = articleMeta[index];
        const IconComponent = meta.icon;
        
        return {
            id: `article-${index}`,
            title: post.content.title,
            excerpt: meta.excerpt,
            image: post.images[0]?.url || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            imageAlt: post.images[0]?.alt || post.content.title,
            category: meta.category,
            icon: IconComponent,
            color: meta.color,
            readTime: "5 min",
            slug: `articulo-${index + 1}`
        };
    }).filter(Boolean);
};

export const BlogSection = () => {
    const { blogPosts } = useBlogHook();
    const navigate = useNavigate();
    const featuredArticles = getFeaturedArticles(blogPosts);

    const handleArticleClick = (slug : string) => navigate(router.blogPost.replace(':slug', slug));
    const handleViewAll = () => window.location.href = router.blogPage;

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredArticles.map((article) => {
                            const IconComponent = article?.icon;
                            return (
                                <motion.article
                                    key={article?.id}
                                    variants={itemVariants}
                                    whileHover="hover"
                                    className="group cursor-pointer"
                                    onClick={() => handleArticleClick(article?.slug || '')}
                                >
                                    <motion.div
                                        variants={cardHoverVariants}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full relative group"
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img 
                                                src={article?.image} 
                                                alt={article?.imageAlt}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            
                                            {/* Category Badge with Icon */}
                                            <div className="absolute top-4 left-4">
                                                <div className={`inline-flex items-center px-3 py-2 rounded-full bg-gradient-to-r ${article?.color} text-white text-xs font-bold shadow-lg backdrop-blur-sm`}>
                                                    <IconComponent className="w-3 h-3 mr-1" />
                                                    {article?.category}
                                                </div>
                                            </div>

                                            {/* Floating Icon on Hover */}
                                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <ArrowRight className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Title */}
                                            <h3 className={`text-xl font-bold ${styles.text.primary} mb-3 leading-tight group-hover:${styles.text.secondary} transition-colors duration-300 line-clamp-2`}>
                                                {article?.title}
                                            </h3>
                                            
                                            {/* Excerpt */}
                                            <p className={`${styles.text.gray} mb-4 leading-relaxed text-sm line-clamp-3`}>
                                                {article?.excerpt}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="flex items-center justify-between">
                                                <span className={`text-sm font-semibold ${styles.text.secondary} group-hover:${styles.text.primary} transition-colors duration-300`}>
                                                    Leer más
                                                </span>
                                                <ArrowRight className={`w-4 h-4 ${styles.text.secondary} group-hover:${styles.text.primary} group-hover:translate-x-1 transition-all duration-300`} />
                                            </div>
                                        </div>

                                        {/* Hover Effect Line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${article?.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
                                    </motion.div>
                                </motion.article>
                            );
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
                    <div className="p-2 lg:p-4 relative overflow-hidden">
                        <div className="relative z-10">
                            {/* Stats Preview */}
                            <motion.div 
                                className="mb-8 grid grid-cols-2 gap-4 max-w-md mx-auto"
                                variants={containerVariants}
                            >
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className={`text-2xl font-bold ${styles.text.secondary}`}>
                                        100%
                                    </div>
                                    <div className="text-sm text-gray-600">Especializado</div>
                                </motion.div>
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className={`text-2xl font-bold ${styles.text.secondary}`}>
                                        24/7
                                    </div>
                                    <div className="text-sm text-gray-600">Disponible</div>
                                </motion.div>
                            </motion.div>

                            {/* CTA Button */}
                            <div className="flex justify-center">
                                <motion.button 
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleViewAll}
                                    className={`group bg-gradient-to-r ${styles.gradient.primary} hover:from-teal-700 hover:to-teal-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3`}
                                >
                                    <BookOpen className="w-5 h-5 group-hover:animate-pulse" />
                                    Ver todos los artículos
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                            </div>

                            {/* Additional Info */}
                            <motion.p 
                                variants={itemVariants}
                                className="mt-4 text-sm text-gray-600 max-w-lg mx-auto"
                            >
                                Accede a nuestra biblioteca completa de conocimiento especializado en 
                                <span className="font-semibold text-teal-700"> recuperación de cartera y estrategias legales</span>
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}