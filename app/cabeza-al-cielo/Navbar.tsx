"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const secciones = [
    { nombre: "Inicio", href: "#" },
    { nombre: "Próximo Evento", href: "#evento" },
    { nombre: "Junta Directiva", href: "#directiva" },
    { nombre: "Nuestros Apoyos", href: "#apoyos" },
    { nombre: "Círculo de Padres", href: "#padres" },
    { nombre: "Sobre Nosotros", href: "#nosotros" },
    { nombre: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg relative">
      {/* SVG Ondas de fondo */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Onda morada */}
        <path
          d="M 0,40 Q 150,20 300,40 T 600,40 T 900,40 T 1200,40 L 1200,50 Q 1050,70 900,50 T 600,50 T 300,50 T 0,50 Z"
          fill="#9C6B97"
          opacity="0.3"
        />
        {/* Onda azul */}
        <path
          d="M 0,50 Q 200,30 400,50 T 800,50 T 1200,50 L 1200,65 Q 1000,85 800,65 T 400,65 T 0,65 Z"
          fill="#6C6C9C"
          opacity="0.25"
        />
        {/* Onda rosa */}
        <path
          d="M 0,60 Q 250,35 500,60 T 1000,60 T 1200,60 L 1200,80 Q 950,100 700,80 T 200,80 T 0,80 Z"
          fill="#E38396"
          opacity="0.2"
        />

        {/* Corazones decorativos */}
        <text x="100" y="35" fontSize="24" opacity="0.4">
          ❤️
        </text>
        <text x="800" y="50" fontSize="20" opacity="0.35">
          💜
        </text>
        <text x="1100" y="25" fontSize="18" opacity="0.3">
          ❤️
        </text>

        {/* Estrellas decorativas */}
        <text x="300" y="75" fontSize="16" opacity="0.35">
          ⭐
        </text>
        <text x="950" y="40" fontSize="14" opacity="0.3">
          ✨
        </text>
        <text x="500" y="20" fontSize="12" opacity="0.25">
          ⭐
        </text>
      </svg>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-lime-600 hover:text-lime-700 transition">
          De la Cabeza al Cielo
        </a>

        {/* Menú Hamburguesa */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden flex flex-col gap-1.5 hover:opacity-80 transition"
        >
          <span className="block w-6 h-0.5 bg-purple-600 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-blue-600 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-pink-600 rounded transition-all" />
        </button>

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-8">
          {secciones.map((seccion) => (
            <a
              key={seccion.nombre}
              href={seccion.href}
              className="text-gray-700 hover:text-lime-600 transition font-semibold"
            >
              {seccion.nombre}
            </a>
          ))}
        </nav>
      </div>

      {/* Menú Móvil Desplegable - Lista */}
      {menuAbierto && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200">
          <div className="flex flex-col">
            {secciones.map((seccion) => (
              <a
                key={seccion.nombre}
                href={seccion.href}
                onClick={() => setMenuAbierto(false)}
                className="px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-lime-50 hover:to-yellow-50 hover:text-lime-600 font-semibold transition border-b border-gray-100 last:border-b-0"
              >
                {seccion.nombre}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
