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
                    transition={{ delay: 1.4 }} className="text-white/80 text-sm font-medium tracking-wider uppercase mb-4"
                    >
                    Resultados efectivos en recuperación de cartera
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6 }}
                    className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-8"
                    >
                    Empresas líderes que recuperan su cartera con Grupo Coactiva S.A.S
                    </motion.h2>
                </div>

                {/* Carrusel infinito sin cortes - Solo logos */}
                <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl py-5">
                    <div className="relative flex">
                    <motion.div 
                        className="flex items-center space-x-12 sm:space-x-16 md:space-x-20 lg:space-x-24"
                        variants={brandSlideVariants}
                        animate="animate"
                        style={{ minWidth: "200%" }}
                    >
                        {/* Primera serie completa */}
                        {brands.map((brand, index) => (
                        <div key={`set1-${index}`} className="flex-shrink-0">
                            <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white/95 backdrop-blur-lg rounded-xl border border-white/30 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl">
                            <img 
                                src={`${brand.logo}`} 
                                alt={`Logo de ${brand.name}`} 
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain hover:grayscale-0 transition-all duration-300"
                            />
                            </div>
                        </div>
                        ))}
                        
                        {/* Segunda serie idéntica para continuidad */}
                        {brands.map((brand, index) => (
                            <div key={`set2-${index}`} className="flex-shrink-0">
                                <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white/95 backdrop-blur-lg rounded-xl border border-white/30 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl">
                                <img 
                                    src={`${brand.logo}`}
                                    alt={`Logo de ${brand.name}`} 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain hover:grayscale-0 transition-all duration-300"
                                />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    </div>
                    
                    {/* Gradientes más sutiles */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-white/10 to-transparent pointer-events-none z-10" />
                </div>

                {/* Estadística adicional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mt-6 flex justify-center items-center space-x-6 sm:space-x-8 text-white/80"
                >
                    <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                    <div className="text-xs sm:text-sm">Empresas atendidas</div>
                    </div>
                    <div className="w-px h-8 sm:h-12 bg-white/30"></div>
                    <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">95%</div>
                    <div className="text-xs sm:text-sm">Tasa de éxito</div>
                    </div>
                </motion.div>
        </motion.div>
    )
}