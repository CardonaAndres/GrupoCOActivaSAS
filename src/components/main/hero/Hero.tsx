import { HERO_SLIDES } from '@/data';
import { HeroCarousel } from './HeroCarousel';

export const Hero = () => {
  return (
    <section aria-label="Hero principal" className='py-20'>
      <HeroCarousel slides={HERO_SLIDES} interval={6000} />
    </section>
  );
};