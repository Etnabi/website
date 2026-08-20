'use client';

import { useState, useEffect } from 'react';

const DESTINATIONS = [
  { name: 'Amalfi', image: '/destinos/amalfi.jpg' },
  { name: 'Cartagena', image: '/destinos/cartagena.jpg' },
  { name: 'Costa Rica', image: '/destinos/costa-rica.jpg' },
  { name: 'Los Cabos', image: '/destinos/los-cabos.jpg' },
  { name: 'Oaxaca', image: '/destinos/oaxaca.jpg' },
  { name: 'Puerto Vallarta', image: '/destinos/puerto-vallarta.jpg' },
  { name: 'Santorini', image: '/destinos/santorini.jpg' },
  { name: 'Tulum', image: '/destinos/tulum.jpg' },
];

export function EcotonoCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = DESTINATIONS[currentIndex];

  return (
    <a
      href="https://ecotono.etnabi.com"
      className="group relative overflow-visible rounded-2xl border transition-transform duration-300 ease-out hover:scale-[1.02]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
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
          opacity: 0.3,
        }}
        aria-hidden="true"
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(214, 0, 108, 0.4) 0%, rgba(214, 0, 108, 0.1) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        {/* Header */}
        <div>
          <div className="mb-2 inline-block rounded-full px-3 py-1" style={{ background: 'rgba(255, 255, 255, 0.15)' }}>
            <span className="text-xs font-medium text-white opacity-90">Experiencias de viaje</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Ecotono Travel Co.</h3>
          <p className="mt-2 text-sm text-white opacity-90">No es solo un viaje, es donde se encuentran los mundos.</p>
        </div>

        {/* Carousel Circle */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex gap-1">
            {DESTINATIONS.map((_, idx) => (
              <div
                key={idx}
                className="h-1 w-6 rounded-full transition-all duration-300"
                style={{
                  background: idx === currentIndex ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)',
                }}
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Circular image preview */}
          <div
            className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/40 shadow-xl"
            style={{
              background: 'transparent',
            }}
          >
            <img
              src={current.image}
              alt={current.name}
              className="h-full w-full object-cover transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
