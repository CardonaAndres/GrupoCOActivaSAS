import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Search, ArrowRight} from 'lucide-react'
import { styles } from '@/main/assets/ts/styles'
import { useBlogHook } from '../hooks/useBlogHook'
import { Navbar } from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
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

export const BlogPage = () => {
    const navigate = useNavigate();
    const { transformedPosts, blogPosts } = useBlogHook();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    // Filtrar posts
    const filteredPosts = transformedPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    // Ordenar posts
    const sortedPosts = [...filteredPosts].sort();
    const handlePostClick = (slug : string) => navigate(router.blogPost.replace(':slug', slug));
    
    return (
        <>
            <div className='pb-16'>
                <Navbar />
            </div>

            <div className={`min-h-screen ${styles.accent[50]} relative overflow-hidden`}>
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-teal-300/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-cyan-300/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-100/10 via-transparent to-cyan-100/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className={`inline-flex items-center px-6 py-3 rounded-full ${styles.primary[100]} ${styles.text.secondary} text-sm font-bold ${styles.border.primary} border-2 shadow-lg`}>
                            <BookOpen className="w-5 h-5 mr-2" />
                            Blog Especializado
                        </span>
                    </motion.div>

                    <motion.h1 
                        variants={itemVariants}
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${styles.text.primary} mb-6 leading-tight`}
                    >
                        Centro de 
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.gradient.primary}`}>
                            {' '}Conocimiento
                        </span>
                    </motion.h1>

                    <motion.p 
                        variants={itemVariants}
                        className={`text-xl ${styles.text.accent} mb-8 leading-relaxed max-w-3xl mx-auto`}
                    >
                        Explora nuestra biblioteca completa de artículos especializados en 
                        <span className={`font-semibold ${styles.text.secondary}`}> recuperación de cartera, estrategias legales y normativas colombianas.</span>
                    </motion.p>

                    {/* Stats */}
                    <motion.div 
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
                    >
                        <div className="text-center">
                            <div className={`text-3xl font-bold ${styles.text.secondary} mb-1`}>
                                100%
                            </div>
                            <div className="text-sm text-gray-600">Especializado</div>
                        </div>
                        <div className="text-center">
                            <div className={`text-3xl font-bold ${styles.text.secondary} mb-1`}>
                                24/7
                            </div>
                            <div className="text-sm text-gray-600">Disponible</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Articles Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {blogPosts.length === 0 ? (
                        <motion.div 
                            variants={itemVariants}
                            className="text-center py-16"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                No se encontraron artículos
                            </h3>
                            <p className="text-gray-500 mb-4">
                                Intenta con diferentes términos de búsqueda o categorías
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('Todos');
                                }}
                                className={`${styles.primary[600]} hover:${styles.primary[700]} text-white px-6 py-2 rounded-lg transition-colors duration-300`}
                            >
                                Limpiar filtros
                            </button>
                        </motion.div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedPosts.map((post) => {
                                const IconComponent = post.icon;
                                return (
                                    <motion.article
                                        key={post.id}
                                        variants={itemVariants}
                                        whileHover="hover"
                                        className="group cursor-pointer"
                                        onClick={() => handlePostClick(post.slug)}
                                    >
                                        <motion.div
                                            variants={cardHoverVariants}
                                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full"
                                        >
                                            {/* Image Container */}
                                            <div className="relative h-48 overflow-hidden">
                                                <img 
                                                    src={post.image} 
                                                    alt={post.imageAlt}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                
                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <div className={`inline-flex items-center px-3 py-2 rounded-full bg-gradient-to-r ${post.color} text-white text-xs font-bold shadow-lg backdrop-blur-sm`}>
                                                        <IconComponent className="w-3 h-3 mr-1" />
                                                        {post.category}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">

                                                {/* Title */}
                                                <h3 className={`text-xl font-bold ${styles.text.primary} mb-3 leading-tight group-hover:${styles.text.secondary} transition-colors duration-300 line-clamp-2`}>
                                                    {post.title}
                                                </h3>
                                                
                                                {/* Excerpt */}
                                                <p className={`${styles.text.gray} mb-4 leading-relaxed text-sm line-clamp-3`}>
                                                    {post.excerpt}
                                                </p>

                                                {/* Read More */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <span className={`text-sm font-semibold ${styles.text.secondary} group-hover:${styles.text.primary} transition-colors duration-300`}>
                                                        Leer artículo completo
                                                    </span>
                                                    <ArrowRight className={`w-4 h-4 ${styles.text.secondary} group-hover:${styles.text.primary} group-hover:translate-x-1 transition-all duration-300`} />
                                                </div>
                                            </div>

                                            {/* Hover Effect Line */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${post.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
                                        </motion.div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    )}
                </motion.div>

                {/* Load More / Pagination could go here if needed */}
                {sortedPosts.length > 0 && (
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center mt-16"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                                ¿Necesitas asesoría personalizada?
                            </h3>
                            <p className={`${styles.text.accent} mb-6 max-w-md mx-auto`}>
                                Nuestros expertos están listos para ayudarte con tu caso específico de recuperación de cartera.
                            </p>
                            <motion.button onClick={() => window.location.href = router.contact}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`bg-gradient-to-r ${styles.gradient.primary} hover:from-teal-700 hover:to-teal-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                            >
                                Contactar Especialista
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
            </div>
        </>
    )
}