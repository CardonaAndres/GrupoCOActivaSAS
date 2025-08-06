import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { Award, Clock } from 'lucide-react';

interface Props {
    containerVariants : any,
    itemVariants : any
}

export const PrincipalHeroCard = ({ containerVariants, itemVariants } : Props) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" 
        className="text-center relative ">
        <motion.div variants={itemVariants} className="mb-4">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-teal-100/40 backdrop-blur-md border border-teal-800/60 shadow-lg shadow-black/10">
            <Award className="w-5 h-5 text-teal-800 mr-3" />
            <span className="text-teal-800 text-sm">
            10 años de experiencia recuperando cartera empresarial en Colombia y LATAM
            </span>
        </div>
        </motion.div>

        {/* Título principal */}
        <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-800 leading-tight mb-6">
            Haz que tu 
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${styles.gradient.primary}`}>
            empresa avance
            </span>
        </h1>
        <p className="text-2xl lg:text-3xl text-teal-800/90 font-light max-w-4xl mx-auto">
            Deja el cobro de cartera en manos expertas
        </p>
        </motion.div>

        <div className="flex flex-row gap-4 justify-center text-teal-800/90">
            <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-medium">Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-medium">95% casos exitosos</span>
            </div>
        </div>

        {/* Botones de acción */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center my-7">
            <motion.button onClick={() => window.location.href = '/#servicios-grupocoactivasas'}
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 bg-teal-900 backdrop-blur-md text-white font-bold text-lg rounded-lg border border-teal-700/50 hover:bg-teal-800/90 transition-all duration-300 min-w-[200px]"
            >
                Ver servicios
            </motion.button>
        </motion.div>
        {/* CTA adicional - Llamada inmediata */}
        
    </motion.div>
  )
}

