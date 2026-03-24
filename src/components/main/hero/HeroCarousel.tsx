'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroSlide } from '@/interfaces/hero.interfaces';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CalendarCheck } from 'lucide-react';

interface HeroCarouselProps {
  slides: HeroSlide[];
  interval?: number;
}

export const HeroCarousel = ({ slides, interval = 6000 }: HeroCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev') => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'next');
  }, [current, goTo, slides.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev');
  }, [current, goTo, slides.length]);

  useEffect(() => {
    timerRef.current = setTimeout(next, interval);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next, interval]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-145 sm:h-160 lg:h-175 overflow-hidden bg-cyan-950">

      {/* ── Background image ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Desktop */}
        <Image
          src={slide.imageSrc}
          alt={slide.imageAlt}
          fill
          priority={slide.id === 1}
          className="object-cover object-center hidden sm:block"
          sizes="100vw"
        />
        {/* Mobile */}
        <Image
          src={slide.imageMobileSrc}
          alt={slide.imageAlt}
          fill
          priority={slide.id === 1}
          className="object-cover object-top sm:hidden"
          sizes="100vw"
        />
      </div>

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-950/95 via-cyan-950/70 to-cyan-950/10" />
      {/* Overlay mobile más fuerte */}
      <div className="absolute inset-0 bg-cyan-950/50 sm:hidden" />

      {/* ── Slide content ── */}
      <div className="relative z-10 h-full container mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
        <div
          className={`max-w-xl transition-all duration-500 ${
            isAnimating
              ? direction === 'next'
                ? '-translate-x-8 opacity-0'
                : 'translate-x-8 opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          {/* Eyebrow */}
          <p className="text-white/60 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] mb-4">
            {slide.eyebrow}
          </p>

          {/* Headline — todo blanco, el peso tipográfico hace la jerarquía */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
            {slide.title}
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {slide.titleHighlight}
          </h1>

          {/* Accent bar — cyan-800 como único acento de color */}
          <div className="w-16 h-1 bg-cyan-800 rounded mb-6" />

          {/* Description */}
          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
            {slide.description}
          </p>

          {/* CTA — cyan-800 de fondo, texto blanco */}
          <Link
            href={slide.ctaHref}
            className="inline-flex items-center gap-3 bg-cyan-800 hover:bg-cyan-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-cyan-800/40 hover:-translate-y-0.5 text-sm sm:text-base uppercase tracking-widest"
          >
            <CalendarCheck className="w-5 h-5" />
            {slide.ctaLabel}
          </Link>
        </div>
      </div>

      {/* ── Navigation arrows ── */}
      <div className="absolute bottom-10 right-6 sm:right-10 z-20 flex items-center gap-3">
        <span className="text-white/40 text-xs font-mono tabular-nums mr-2 hidden sm:inline">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>

        <button
          onClick={prev}
          aria-label="Slide anterior"
          className="w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-cyan-800/60 hover:border-cyan-800 transition-all duration-200 flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Slide siguiente"
          className="w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-cyan-800/60 hover:border-cyan-800 transition-all duration-200 flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── Progress bar — cyan-800 ── */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div
          key={current}
          className="h-full bg-cyan-800 origin-left"
          style={{ animation: `hero-progress ${interval}ms linear forwards` }}
        />
      </div>

    </div>
  );
};