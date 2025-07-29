import { styles } from '@/main/assets/ts/styles';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe } from 'lucide-react';
import { ContactForm } from '../hero/ContactForm';
import { PrincipalHeroCard } from '../hero/PrincipalHeroCard';
import { InfoCards } from '../hero/InfoCards';
import { SliderBrands } from '../hero/SliderBrands';
import { useState, useEffect, useMemo, memo } from 'react';

// Tipos para mejor type safety
interface BenefitCardProps {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  title: string;
  description: string;
}

// Componente memoizado para las cards de beneficios
const BenefitCard = memo<BenefitCardProps>(({ icon: Icon, iconBg, title, description }) => (
  <motion.div 
    variants={itemVariants} 
    className="backdrop-blur-xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/25 shadow-2xl hover:bg-black/40 transition-all duration-300"
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center mb-3 md:mb-4">
      <div className={`p-2 md:p-3 ${iconBg} rounded-lg md:rounded-xl mr-3 md:mr-4 shadow-lg`}>
        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${iconBg.includes('white') ? '' : 'text-white'}`} />
      </div>
      <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">{title}</h3>
    </div>
    <p className="text-white/95 text-sm md:text-base drop-shadow-md">{description}</p>
  </motion.div>
));

BenefitCard.displayName = 'BenefitCard';

// Componente para elementos flotantes decorativos
const FloatingElements = memo(() => (
  <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
    <motion.div
      variants={floatingVariants}
      animate="animate"
      className="absolute top-20 right-20 w-32 h-32 lg:w-40 lg:h-40 bg-white/5 rounded-full blur-3xl will-change-transform"
    />
    <motion.div
      variants={floatingVariants}
      animate="animate"
      initial={{ animationDelay: '2s' }}
      className={`absolute bottom-32 left-16 w-24 h-24 lg:w-32 lg:h-32 ${styles.primary[400]}/10 rounded-full blur-2xl will-change-transform`}
    />
    <motion.div
      variants={pulseVariants}
      animate="animate"
      className="absolute top-1/2 right-1/4 w-20 h-20 lg:w-24 lg:h-24 bg-slate-200/5 rounded-full blur-xl will-change-[transform,opacity]"
    />
  </div>
));

FloatingElements.displayName = 'FloatingElements';

// Constantes y variantes fuera del componente
const DESKTOP_BREAKPOINT = 768;
const RESIZE_DEBOUNCE_MS = 150;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 0.8, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Datos de las cards de beneficios
const benefitCardsData = [
  {
    icon: CheckCircle,
    iconBg: "bg-white",
    title: "Solo pagas por resultados",
    description: "Sin inversión inicial, sin costos ocultos. Solo cobramos cuando recuperas tu dinero."
  },
  {
    icon: Users,
    iconBg: styles.primary[600],
    title: "Equipo especializado",
    description: "Abogados expertos en recuperación de cartera con estrategias personalizadas."
  },
  {
    icon: Globe,
    iconBg: "bg-slate-700",
    title: "Cobertura total",
    description: "Gestión de cobro en Colombia y toda América Latina con procesos ágiles."
  }
];

// Hook personalizado para detectar desktop
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth >= DESKTOP_BREAKPOINT : true
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
      }, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
};

export const Hero = () => {
  const isDesktop = useIsDesktop();
  
  // Memoizar la imagen actual
  const currentImage = useMemo(() => 
    isDesktop ? '/backgroung_imgs/desk_img.webp' : '/backgroung_imgs/cell_img.webp', 
    [isDesktop]
  );

  // Memoizar estilos del background
  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url('${currentImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: isDesktop ? 'center 20%' : 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'auto',
    transform: 'translateZ(0)', // Force GPU acceleration
    WebkitBackfaceVisibility: 'hidden' as const,
    backfaceVisibility: 'hidden' as const,
  }), [currentImage, isDesktop]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image optimizado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={backgroundStyle} />
      </div>
      
      {/* Elementos flotantes decorativos */}
      <FloatingElements />

      {/* Contenido principal */}
      <div className="relative z-30 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="min-h-screen flex items-center py-8 sm:py-12 md:py-20">
            <div className="w-full max-w-7xl mx-auto">
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                <PrincipalHeroCard containerVariants={containerVariants} itemVariants={itemVariants}/>
                <ContactForm />
              </div>
              
              {/* Cards de beneficios */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 mt-8 sm:mt-12 md:mt-16"
              >
                {benefitCardsData.map((card, index) => (
                  <BenefitCard key={index} {...card} />
                ))}
              </motion.div>

              <InfoCards containerVariants={containerVariants} itemVariants={itemVariants} />
              <SliderBrands />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};