'use client';

import { useState, useEffect } from 'react';

const RESEARCH_AREAS = [
  {
    name: 'Fullerenos',
    image: '/investigacion-carousel/fullerenos.png',
    fontFamily: 'Georgia, serif',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '18px',
    bgSize: 'cover',
    bgPos: 'center'
  },
  {
    name: 'Proteínas',
    image: '/investigacion-carousel/proteinas-tau.png',
    fontFamily: 'Fraunces, serif',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '19px',
    bgSize: '300%',
    bgPos: 'center'
  },
  {
    name: 'Análisis Tau',
    image: '/investigacion-carousel/analisis-tau.png',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '17px',
    letterSpacing: '1px',
    bgSize: '250%',
    bgPos: 'center'
  },
];

export function InvestigacionCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= RESEARCH_AREAS.length) {
      setCurrentIndex(0);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RESEARCH_AREAS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const safeIndex = Math.max(0, Math.min(currentIndex, RESEARCH_AREAS.length - 1));
  const current = RESEARCH_AREAS[safeIndex] || RESEARCH_AREAS[0];

  return (
    <a
      href="#metodo"
      className="group relative overflow-visible rounded-2xl border transition-transform duration-300 ease-out hover:scale-[1.02]"
      style={{
        backgroundColor: 'rgba(187, 223, 201, 0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(187, 223, 201, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
        minHeight: '340px',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${current.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      {/* Overlay gradient - verde teal */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(187, 223, 201, 0.3) 0%, rgba(187, 223, 201, 0.1) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        {/* Header */}
        <div>
          <div className="mb-2 inline-block rounded-full px-3 py-1" style={{ background: 'rgba(255, 255, 255, 0.15)' }}>
            <span className="text-xs font-medium text-white opacity-90">Simulación molecular</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Investigación</h3>
          <p className="mt-2 text-sm text-white opacity-90">Explorando cómo modelar sistemas complejos a través de simulaciones computacionales.</p>
        </div>

        {/* Carousel Circle */}
        <div className="flex items-end justify-between gap-4">
          {/* Current research area with unique typography */}
          <div>
            <span
              className="transition-all duration-700 inline-block"
              style={{
                fontFamily: current.fontFamily,
                fontWeight: current.fontWeight,
                fontStyle: current.fontStyle,
                fontSize: current.fontSize,
                letterSpacing: current.letterSpacing || '0',
                color: 'rgba(255, 255, 255, 0.95)',
              }}
            >
              {current.name}
            </span>
          </div>

          {/* Circular image preview */}
          <div
            className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/40 shadow-xl transition-all duration-700"
            style={{
              backgroundImage: `url('${current.image}')`,
              backgroundSize: current.bgSize || 'cover',
              backgroundPosition: current.bgPos || 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
}
