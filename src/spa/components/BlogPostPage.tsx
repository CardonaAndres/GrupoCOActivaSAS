import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, CheckCircle2, AlertCircle } from 'lucide-react';
import { styles } from '@/main/assets/ts/styles';
import { useBlogHook } from '../hooks/useBlogHook';
import { router } from '@/main/configs/config';
import { Navbar } from './Navbar';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Función para generar slug a partir del título
const generateSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remover caracteres especiales
        .replace(/\s+/g, '-') // Reemplazar espacios con guiones
        .replace(/--+/g, '-') // Reemplazar múltiples guiones con uno solo
        .trim();
};

export const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { blogPosts } = useBlogHook();

    const postIndex = blogPosts.findIndex((post, index) => {
        const postSlug = generateSlug(post.content.title);
        const indexSlug = `articulo-${index + 1}`;
        return slug === postSlug || slug === indexSlug;
    });

    const post = blogPosts[postIndex];
    const getPostMetadata = (index: number) => {
        const metadata: any = {
            0: { 
                readTime: "8 min",
                difficulty: "Básico",
                category: "Beneficios Empresariales",
                publishDate: "2024-12-15"
            },
            1: { 
                readTime: "6 min",
                difficulty: "Intermedio",
                category: "Timing Estratégico",
                publishDate: "2024-12-13"
            },
            2: { 
                readTime: "7 min",
                difficulty: "Intermedio",
                category: "Estrategia Legal",
                publishDate: "2024-12-11"
            },
            3: { 
                readTime: "9 min",
                difficulty: "Avanzado",
                category: "Facturación Digital",
                publishDate: "2024-12-09"
            },
            4: { 
                readTime: "10 min",
                difficulty: "Avanzado",
                category: "Protección Legal",
                publishDate: "2024-12-07"
            }
        };
        
        return metadata[index] || {
            readTime: "5 min",
            difficulty: "Básico",
            category: "General",
            publishDate: "2024-12-01"
        };
    };
    const postMeta = getPostMetadata(postIndex);

        // Si no se encuentra el post, mostrar 404
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-700 mb-4">Artículo no encontrado</h1>
                    <p className="text-gray-500 mb-6">El artículo que buscas no existe o ha sido movido.</p>
                    <Link to={router.blogPage} 
                        className={`${styles.primary[600]} hover:${styles.primary[700]} text-white px-6 py-3 rounded-lg transition-colors duration-300`}
                    >
                        Volver al Blog
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: Date | string) => {
        return new Date(dateString).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.content.title,
                    text: post.seo.metaDescription,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: copiar URL al clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('URL copiada al portapapeles');
        }
    };

    return (
        <>
            <div className='pb-16'>
                <Navbar />
                <div className={`min-h-screen `}>
                    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                        {post.images[0] && (
                            <div className="absolute inset-0">
                                <img 
                                    src={post.images[0].url}
                                    alt={post.images[0].alt}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
                            </div>
                        )}

                        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                            <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {/* Back Button */}
                                    <motion.button
                                        variants={itemVariants}
                                        onClick={() => navigate('/blog')}
                                        className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-300"
                                    >
                                        <ArrowLeft className="w-5 h-5 mr-2" />
                                        Volver al Blog
                                    </motion.button>

                                    {/* Category Badge */}
                                    <motion.div variants={itemVariants} className="mb-6">
                                        <span className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${styles.gradient.primary} text-white text-sm font-bold shadow-lg`}>
                                            <BookOpen className="w-4 h-4 mr-2" />
                                            {postMeta.category}
                                        </span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h1 
                                        variants={itemVariants}
                                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                                    >
                                        {post.content.title}
                                    </motion.h1>

                                    {/* Meta Information */}
                                    <motion.div 
                                        variants={itemVariants}
                                        className="flex flex-wrap items-center gap-6 text-white/80"
                                    >
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {formatDate(postMeta.publishDate)}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {postMeta.readTime} de lectura
                                        </div>
                                        <button
                                            onClick={handleShare}
                                            className="flex items-center hover:text-white transition-colors duration-300"
                                        >
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Compartir
                                        </button>
                                    </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="max-w-7xl rounded-2xl shadow-xl bg-white mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4 overflow-hidden">
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className='p-5 lg:p-12'>
                                {/* Introduction */}
                                <motion.div variants={itemVariants} className="mb-12">
                                    <div className={`text-lg ${styles.text.gray} leading-relaxed whitespace-pre-line`}>
                                        {post.content.introduction}
                                    </div>
                                </motion.div>

                                {/* Importance Section */}
                                {post.content.importance && (
                                    <motion.div variants={itemVariants} className="mb-12">
                                        <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                                            {post.content.importance.title}
                                        </h2>
                                        <ul className="space-y-3 mb-6">
                                            {post.content.importance.points.map((point, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className={`w-6 h-6 ${styles.text.secondary} mr-3 mt-0.5 flex-shrink-0`} />
                                                    <span className={`${styles.text.gray} text-lg`}>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {post.content.importance.note && (
                                            <div className={`bg-gradient-to-r ${styles.primary[50]} to-teal-50 border-l-4 ${styles.border.primary} p-6 rounded-r-lg`}>
                                                <div className="flex items-start">
                                                    <AlertCircle className={`w-6 h-6 ${styles.text.secondary} mr-3 mt-0.5 flex-shrink-0`} />
                                                    <p className={`${styles.text.accent} text-lg italic`}>
                                                        {post.content.importance.note}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}

                                {/* Benefits Section */}
                                {post.content.benefits && (
                                    <motion.div variants={itemVariants} className="mb-12">
                                        <h2 className={`text-3xl font-bold ${styles.text.primary} mb-8`}>
                                            Beneficios Principales
                                        </h2>
                                        <div className="space-y-8">
                                            {post.content.benefits.map((benefit, index) => (
                                                <div key={index} className="border-l-4 border-teal-500 pl-6">
                                                    <h3 className={`text-xl font-bold ${styles.text.primary} mb-3`}>
                                                        {benefit.title}
                                                    </h3>
                                                    <p className={`${styles.text.gray} text-lg leading-relaxed whitespace-pre-line`}>
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Timing Section */}
                                {post.content.timing && (
                                    <motion.div variants={itemVariants} className="mb-12">
                                        <div className={`bg-gradient-to-r ${styles.primary[50]} to-blue-50 p-8 rounded-2xl`}>
                                            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                                                {post.content.timing.question}
                                            </h3>
                                            <p className={`${styles.text.accent} text-lg leading-relaxed whitespace-pre-line`}>
                                                {post.content.timing.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Stages Section */}
                                {post.content.stages && (
                                    <motion.div variants={itemVariants} className="mb-12">
                                        <h2 className={`text-3xl font-bold ${styles.text.primary} mb-8`}>
                                            Etapas del Proceso
                                        </h2>
                                        <div className="grid gap-6">
                                            {post.content.stages.map((stage, index) => (
                                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                    <h3 className={`text-xl font-bold ${styles.text.secondary} mb-3`}>
                                                        {stage.title}
                                                    </h3>
                                                    <p className={`${styles.text.gray} text-lg leading-relaxed whitespace-pre-line`}>
                                                        {stage.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Reasons to Act Section */}
                                {post.content.reasonsToAct && (
                                    <motion.div variants={itemVariants} className="mb-12">
                                        <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                                            {post.content.reasonsToAct.title}
                                        </h2>
                                        <ul className="space-y-3">
                                            {post.content.reasonsToAct.points.map((point, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className={`w-6 h-6 ${styles.text.secondary} mr-3 mt-0.5 flex-shrink-0`} />
                                                    <span className={`${styles.text.gray} text-lg`}>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}

                                {/* Late Action Advice Section */}
                                {post.content.lateActionAdvice && (
                                    <motion.div variants={itemVariants} className="mb-12">
                                        <div className={`bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200`}>
                                            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                                                {post.content.lateActionAdvice.question}
                                            </h3>
                                            <p className={`${styles.text.accent} text-lg leading-relaxed whitespace-pre-line`}>
                                                {post.content.lateActionAdvice.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Services Offered Section */}
                                {post.content.servicesOffered && (
                                    <motion.div variants={itemVariants} className="mb-12">
                                        <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                                            {post.content.servicesOffered.title}
                                        </h2>
                                        <ul className="space-y-3">
                                            {post.content.servicesOffered.points.map((point, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className={`w-6 h-6 ${styles.text.secondary} mr-3 mt-0.5 flex-shrink-0`} />
                                                    <span className={`${styles.text.gray} text-lg`}>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}

                                {/* Conclusion */}
                                <motion.div variants={itemVariants} className="mb-12">
                                    <h2 className={`text-3xl font-bold ${styles.text.primary} mb-6`}>
                                        Conclusión
                                    </h2>
                                    <div className={`text-lg ${styles.text.gray} leading-relaxed whitespace-pre-line bg-gradient-to-r ${styles.primary[50]} to-teal-50 p-8 rounded-2xl border-l-4 ${styles.border.primary}`}>
                                        {post.content.conclusion}
                                    </div>
                                </motion.div>

                                {/* CTA Section */}
                                <motion.div variants={itemVariants} className="text-center">
                                    <div className={`bg-gradient-to-r ${styles.gradient.primary} p-8 rounded-2xl text-white`}>
                                        <h3 className="text-2xl font-bold mb-4">
                                            ¿Necesitas ayuda con tu caso específico?
                                        </h3>
                                        <p className="text-lg mb-6 opacity-90">
                                            Nuestros expertos están listos para asesorarte de manera personalizada
                                        </p>
                                        <motion.button 
                                            onClick={() => navigate(router.contact)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-teal-700 font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                                        >
                                            Contactar Especialista
                                        </motion.button>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}