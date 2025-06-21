import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Props {
    containerVariants : any,
    itemVariants : any
}

export const PrincipalHeroCard = ({ containerVariants, itemVariants } : Props) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" 
        className="text-center mb-12 mt-14">
        <motion.div variants={itemVariants} className="mb-8">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg shadow-black/10">
            <Award className="w-5 h-5 text-white mr-3" />
            <span className="text-white text-sm">
            10 años de Experiencia Recuperando cartera Empresarial en Colombia y Latam
            </span>
        </div>
        </motion.div>

        {/* Título principal */}
        <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Haz que tu 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
            negocio avance
            </span>
        </h1>
        <p className="text-2xl lg:text-3xl text-white/90 font-light max-w-4xl mx-auto">
            Deja el cobro de cartera en manos expertas
        </p>
        </motion.div>

        {/* Descripción */}
        <motion.p variants={itemVariants} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Somos tu aliado estratégico para la recuperación de cartera y gestión de cobro jurídico. 
            Soluciones efectivas, rápidas y seguras que protegen el patrimonio de tu empresa.
        </motion.p>

        {/* Botones de acción */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
        
        <motion.button onClick={() => window.location.href = '/#services'}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-slate-900/80 backdrop-blur-md text-white font-bold text-lg rounded-full border border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300 min-w-[200px]"
        >
            Ver Servicios
        </motion.button>
        </motion.div>
    </motion.div>
  )
}

