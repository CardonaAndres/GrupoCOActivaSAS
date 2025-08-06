import { motion } from "framer-motion";
import { useAlliesHook } from "../hooks/useAlliesHook";

const brandSlideVariants = {
    animate: {
        x: ["-50%", "-100%"],
        transition: {
        x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
        },
        },
    }
};

export const SliderBrands = () => {
    const { partners : brands } = useAlliesHook();

    return (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }} className="mt-16 text-center"
            >
                <div className="mb-8">
                    <motion.p initial={{ opacity: 0 }}  animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }} className="text-teal-800/80 text-sm font-bold tracking-wider uppercase mb-4"
                    >
                        Alianzas Estratégicas
                    </motion.p>
                </div>

                {/* Carrusel minimalista */}
                <div className="relative overflow-hidden py-8">
                    <motion.div 
                    className="flex items-center gap-16 md:gap-24"
                    variants={brandSlideVariants}
                    animate="animate"
                    >
                    {/* Duplicamos los logos para el efecto infinito */}
                    {[...brands, ...brands].map((brand, index) => (
                        <div 
                        key={`brand-${index}`} 
                        className="flex-shrink-0 group"
                        >
                        <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                            <img 
                            src={brand.logo} 
                            alt={brand.name}
                            className="max-w-full max-h-full object-contain opacity-50 
                                    group-hover:opacity-90 transition-opacity duration-500
                                    hover:grayscale-0"
                            />
                        </div>
                        </div>
                    ))}
                    </motion.div>
                    
                    {/* Gradientes sutiles en los bordes */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-32 
                                bg-gradient-to-r from-white via-white/80 to-transparent 
                                pointer-events-none z-10" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-32 
                                bg-gradient-to-l from-white via-white/80 to-transparent 
                                pointer-events-none z-10" />
                </div>

                {/* Estadística adicional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mt-6 flex justify-center items-center space-x-6 sm:space-x-8 text-teal-800/80"
                >
                    <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-teal-800">500+</div>
                    <div className="text-xs sm:text-sm">Empresas atendidas</div>
                    </div>
                    <div className="w-px h-8 sm:h-12 bg-teal-800text-teal-800/30"></div>
                    <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-teal-800">95%</div>
                    <div className="text-xs sm:text-sm">Tasa de éxito</div>
                    </div>
                </motion.div>
        </motion.div>
    )
}