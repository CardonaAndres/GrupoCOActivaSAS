'use client';

import Image from 'next/image';
import { useRef } from 'react';

export interface Company {
  name: string;
  logo: string; // src de la imagen
  width?: number;
  height?: number;
}

interface ClientCarouselProps {
  companies: Company[];
}

export const ClientCarousel = ({ companies }: ClientCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicamos para loop infinito visual
  const items = [...companies, ...companies];

  const handleMouseEnter = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Empresas que confían en nosotros"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-white to-transparent" />

      {/* Track */}
      <div
        ref={trackRef}
        className="flex items-center gap-12 carousel-track"
        style={{ width: 'max-content' }}
      >
        {items.map((company, i) => (
          <div
            key={`${company.name}-${i}`}
            className="group flex flex-col items-center justify-center gap-3 px-6 py-4 rounded-xl border border-transparent hover:border-cyan-100 hover:bg-cyan-50/50 transition-all duration-300 cursor-default select-none min-w-35"
          >
            <div className="relative grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <Image
                src={company.logo}
                alt={`Logo de ${company.name}`}
                width={company.width ?? 120}
                height={company.height ?? 48}
                className="object-contain max-h-12 w-auto"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};