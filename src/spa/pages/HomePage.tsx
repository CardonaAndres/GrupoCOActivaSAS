import { motion } from "framer-motion";
import { Hero } from "@/spa/components/Hero";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";
import { ContactSection } from "../components/ContactSection";
import { useEffect } from "react";
import { styles } from "@/main/assets/ts/styles";
import { ArrowRight, Handshake, Users } from "lucide-react";
import { router } from "@/main/configs/config";
import { References } from "../components/References";

const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
}

export const HomePage = () => {
  useEffect(() => { document.title = 'Grupo Coactiva S.A.S | Bienvenido' }, []);

  return (
    <>
        <Navbar />
        <div className="pt-16">
            <Hero />
        </div>
        <div id="services"> 
          <Services />
        </div>
        <References />
        <ContactSection />
        <section className={`py-16 bg-gradient-to-br ${styles.gradient.accent}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {/* Botón Sobre Nosotros */}
              <motion.div variants={buttonVariants}>
                <motion.button
                onClick={() => window.location.href = router.about}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    group w-full bg-white rounded-2xl p-8 border-2 ${styles.border.primary}
                    transition-all duration-300 hover:border-teal-400
                    ${styles.shadow.card} hover:shadow-xl
                  `}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`
                      w-16 h-16 bg-gradient-to-br ${styles.gradient.primary} 
                      rounded-2xl flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Users className={`w-8 h-8 ${styles.text.white}`} />
                    </div>
                    
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.primary} mb-2`}>
                        Sobre Nosotros
                      </h3>
                      <p className={`${styles.text.gray} mb-4 leading-relaxed`}>
                        Conoce nuestra historia, misión, visión y los valores que nos impulsan a ser líderes en recuperación de cartera.
                      </p>
                    </div>

                    <div className={`
                      flex items-center ${styles.text.primary} font-semibold
                      group-hover:translate-x-2 transition-transform duration-300
                    `}>
                      <span>Conocer más</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </motion.button>
              </motion.div>

              {/* Botón Nuestros Aliados */}
              <motion.div variants={buttonVariants}>
                <motion.button
                  onClick={() => window.location.href = router.allies}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    group w-full bg-white rounded-2xl p-8 border-2 ${styles.border.accent}
                    transition-all duration-300 hover:border-cyan-400
                    ${styles.shadow.card} hover:shadow-xl
                  `}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`
                      w-16 h-16 bg-gradient-to-br ${styles.gradient.accentDark} 
                      rounded-2xl flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Handshake className={`w-8 h-8 ${styles.text.white}`} />
                    </div>
                    
                    <div>
                      <h3 className={`text-2xl font-bold ${styles.text.accent} mb-2`}>
                        Nuestros Aliados
                      </h3>
                      <p className={`${styles.text.gray} mb-4 leading-relaxed`}>
                        Descubre las empresas y organizaciones que confían en nosotros para fortalecer sus finanzas.
                      </p>
                    </div>

                    <div className={`
                      flex items-center ${styles.text.accent} font-semibold
                      group-hover:translate-x-2 transition-transform duration-300
                    `}>
                      <span>Ver aliados</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
    </>
  )
}

