import { HeroSlide } from "@/interfaces/hero.interfaces";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    imageSrc: '/imgs/hero/desktop/hero-2.webp',
    imageMobileSrc: '/imgs/hero/desktop/hero-2.webp',
    imageAlt: 'Empresarios en reunión de negocios',
    eyebrow: '¿Su empresa tiene cartera vencida?',
    title: 'Recupere su cartera',
    titleHighlight: 'vencida hoy.',
    description: 'Gestionamos el cobro de su cartera con un sistema personalizado, cobertura nacional y resultados comprobados en más de 15 años.',
    ctaLabel: 'Agendar reunión',
    ctaHref: '/comunicate-con-grupo-coactiva',
  },
  {
    id: 2,
    imageSrc: '/imgs/hero/desktop/hero-1.jpg',
    imageMobileSrc: '/imgs/hero/desktop/hero-1.jpg',
    imageAlt: 'Asesora experta en cobro de cartera',
    eyebrow: 'Señor empresario',
    title: 'Cobramos la Cartera de su Empresa.',
    titleHighlight: '',
    description: 'Especialistas en cobro de cartera empresarial con x años de experiencia y 90% de efectividad. Gestión extrajudicial, prejurídica y jurídica a nivel nacional.',
    ctaLabel: 'Agendar reunión',
    ctaHref: '/comunicate-con-grupo-coactiva',
  },
];