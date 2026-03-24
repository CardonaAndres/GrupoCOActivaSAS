export interface HeroSlide {
  id: number;
  /** Imagen escritorio (1440×800 recomendado) */
  imageSrc: string;
  /** Imagen mobile (768×900 recomendado) */
  imageMobileSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}