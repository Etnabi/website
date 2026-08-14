"use client";

import { useState } from "react";

export default function EventoDetalles() {
  const [detallesAbiertos, setDetallesAbiertos] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        backgroundImage: "url('/evento-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay difuminado - marca de agua */}
      <div
        className="absolute inset-0 backdrop-blur-sm pointer-events-none"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.55)" }}
      />

      {/* Contenido */}
      <div className="relative space-y-8 p-8 z-10">
      {/* Títulos y descripción */}
      <div>
        <h3 className="text-3xl font-bold text-lime-600 mb-4">
          Derecho a la Salud y Acceso a Tratamientos Innovadores
        </h3>
        <p className="text-xl text-lime-500 font-semibold mb-4">
          para una Mejor Calidad de Vida de las Personas con Acondroplasia
        </p>
        <p className="text-gray-700 italic text-lg mb-6">
          "Este foro nace del deseo de acercarnos, escucharnos y construir juntos. Porque detrás de cada persona hay una familia, una historia y un futuro que merecen ser acompañados con dignidad, empatía y oportunidad."
        </p>
      </div>

      {/* Información general */}
      <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-r from-lime-50 to-yellow-50 rounded-lg p-6">
        <div>
          <p className="text-sm text-gray-600 font-semibold">FECHA</p>
          <p className="text-lg text-lime-600 font-bold">28 de Agosto de 2026</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 font-semibold">HORA</p>
          <p className="text-lg text-lime-600 font-bold">10:30 AM</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 font-semibold">UBICACIÓN</p>
          <p className="text-sm text-lime-600 font-bold">FSTSE Guanajuato, El Establo, Marfil, Gto.</p>
        </div>
      </div>

      {/* Objetivo Desplegable */}
      {detallesAbiertos && (
        <div className="border-l-4 border-lime-600 pl-6 py-4">
          <h4 className="text-2xl font-bold text-lime-600 mb-3">Objetivo</h4>
          <p className="text-gray-700 leading-relaxed">
            Generar un espacio de diálogo, escucha y colaboración entre autoridades, profesionales de la salud, especialistas y familias, para compartir experiencias, fortalecer la empatía e impulsar acciones que favorezcan el acceso oportuno a tratamientos innovadores y una mejor calidad de vida para las personas con acondroplasia.
          </p>
        </div>
      )}

      {/* Programa Desplegable */}
      {detallesAbiertos && (
        <div className="bg-gradient-to-r from-lime-50 to-yellow-50 rounded-lg p-6">
          <h4 className="text-2xl font-bold text-lime-600 mb-6">Programa</h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-lime-400">
              <p className="font-bold text-lime-600">11:00 – 11:05 | Bienvenida</p>
              <p className="text-sm text-gray-700"><strong>Marisela Herrera Aguirre</strong> - Presidenta de Fundación De la Cabeza al Cielo A.C.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-400">
              <p className="font-bold text-pink-600">11:05 – 11:15 | Mensaje inaugural</p>
              <p className="text-sm text-gray-700"><strong>Senadora Virginia 'Kikis' Magaña Fonseca</strong> - Poder Legislativo</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <p className="font-bold text-purple-600">11:15 – 11:30 | Del Compendio Nacional a las familias</p>
              <p className="text-sm text-gray-700"><strong>Autoridad del Sector Salud</strong></p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <p className="font-bold text-blue-600">11:30 – 11:45 | La visión médica</p>
              <p className="text-sm text-gray-700"><strong>Dra. Paulina Calderillo</strong> - Médica Genetista</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
              <p className="font-bold text-rose-600">11:45 – 12:00 | Cuando el tratamiento aún no llega</p>
              <p className="text-sm text-gray-700"><strong>Paola De León</strong> - Testimonio de una madre</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-amber-400">
              <p className="font-bold text-amber-600">12:00 – 12:15 | La voz de la niñez con acondroplasia</p>
              <p className="text-sm text-gray-700"><strong>Dulce María Trejo</strong> - Testimonio de una niña con acondroplasia</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400">
              <p className="font-bold text-teal-600">12:15 – 12:30 | Cuando el acceso transforma vidas</p>
              <p className="text-sm text-gray-700"><strong>Camacho Hernández</strong> - Testimonio de una familia con acceso al tratamiento</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-lime-400">
              <p className="font-bold text-lime-600">12:30 – 12:55 | Conversatorio</p>
              <p className="text-sm text-gray-700"><strong>Moderadora: Andrea Irais López García</strong> - Diálogo con todos los ponentes y público</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <p className="font-bold text-purple-600">12:55 – 13:00 | Mensaje de cierre</p>
              <p className="text-sm text-gray-700"><strong>Marisela Herrera Aguirre</strong></p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setDetallesAbiertos(!detallesAbiertos)}
        className="w-full px-8 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition"
      >
        {detallesAbiertos ? "Cerrar Detalles" : "Más Información"}
      </button>
      </div>
    </div>
  );
}
