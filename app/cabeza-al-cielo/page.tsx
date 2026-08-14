import Image from "next/image";
import EventoDetalles from "./EventoDetalles";
import Navbar from "./Navbar";

export default function Home() {
  const ponentes = [
    { nombre: "Marisela Herrera Aguirre", rol: "Presidenta De la Cabeza al Cielo A.C." },
    { nombre: "Senadora Virginia 'Kikis' Magaña Fonseca", rol: "Poder Legislativo" },
    { nombre: "Dra. Paulina Calderillo", rol: "Médica Genetista" },
    { nombre: "Paola De León", rol: "Testimonio - Madre" },
    { nombre: "Dulce María Trejo", rol: "Testimonio - Personas con Acondroplasia" },
    { nombre: "Camacho Hernández", rol: "Testimonio - Familia con Acceso" },
    { nombre: "Andrea Irais López García", rol: "Moderadora" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <Navbar />

      {/* Formas decorativas - Fondo */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 2400">
        {/* Línea ondulada morada - arriba */}
        <path d="M 0 100 Q 150 50 300 100 T 600 100 T 900 100 T 1200 100 L 1200 200 Q 1050 250 900 200 T 600 200 T 300 200 T 0 200 Z" fill="#d8b4fe" opacity="0.4" />

        {/* Forma rellena rosa - lado izquierdo */}
        <rect x="-50" y="300" width="200" height="300" fill="#f0a3d1" opacity="0.3" transform="skewY(-20)" />

        {/* Línea ondulada verde - medio */}
        <path d="M 0 600 Q 200 550 400 600 T 800 600 T 1200 600 L 1200 650 Q 1000 700 800 650 T 400 650 T 0 650 Z" fill="#bbdfc9" opacity="0.35" />

        {/* Forma rellena morada - derecha */}
        <circle cx="1100" cy="800" r="180" fill="#c4b5fd" opacity="0.25" />

        {/* Línea ondulada rosa - más abajo */}
        <path d="M 0 1000 Q 150 950 300 1000 T 600 1000 T 900 1000 T 1200 1000 L 1200 1080 Q 1050 1130 900 1080 T 600 1080 T 300 1080 T 0 1080 Z" fill="#f472b6" opacity="0.3" />

        {/* Rectángulo relleno verde - izquierda */}
        <rect x="-100" y="1200" width="300" height="250" fill="#86efac" opacity="0.2" transform="rotate(-15 50 1325)" />

        {/* Línea ondulada morada - cerca del footer */}
        <path d="M 0 1500 Q 200 1450 400 1500 T 800 1500 T 1200 1500 L 1200 1600 Q 1000 1650 800 1600 T 400 1650 T 0 1600 Z" fill="#e9d5ff" opacity="0.35" />

        {/* Forma rellena rosa - derecha */}
        <polygon points="1200,1700 1200,1900 1000,2000 900,1800" fill="#fecdd3" opacity="0.3" />

        {/* Línea ondulada verde - muy abajo */}
        <path d="M 0 2000 Q 150 1950 300 2000 T 600 2000 T 900 2000 T 1200 2000 L 1200 2100 Q 1050 2150 900 2100 T 600 2150 T 300 2100 T 0 2100 Z" fill="#d1fae5" opacity="0.3" />
      </svg>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="mb-12 flex justify-center">
          <Image
            src="/cabeza-al-cielo/logo.png"
            alt="De la Cabeza al Cielo - Logo"
            width={280}
            height={220}
            priority
            className="drop-shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-lime-600 mb-6">
          De la Cabeza al Cielo
        </h1>
        <p className="text-2xl text-lime-500 mb-4">
          Fundación por los Derechos a la Salud y Acceso a Tratamientos
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Generar un espacio de diálogo, escucha y colaboración entre autoridades, profesionales de la salud, especialistas y familias, para compartir experiencias, fortalecer la empatía e impulsar acciones que favorezcan el acceso oportuno a tratamientos innovadores y una mejor calidad de vida.
        </p>
        <div className="inline-block px-2 py-2 rounded-lg bg-white border-2 border-dashed border-lime-300">
          <div className="text-sm font-semibold text-lime-500">Misión de la Asociación</div>
        </div>
      </section>

      {/* Logro: Vosoritida */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-lime-50 to-yellow-50 rounded-lg p-12 border-l-8 border-lime-600">
          <h2 className="text-4xl font-bold text-lime-600 mb-6">Un Logro Histórico</h2>
          <h3 className="text-2xl font-semibold text-lime-500 mb-4">
            Vosoritida: Incorporada al Compendio Nacional de Insumos para la Salud
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            La incorporación de la vosoritida al Compendio Nacional de Insumos para la Salud representa un paso histórico para las niñas, niños y adolescentes con acondroplasia en México.
          </p>
          <p className="text-gray-600 mb-6 italic">
            Gracias a todas las familias, especialistas, autoridades y personas que hicieron posible este gran logro.
          </p>
          <a href="#" className="inline-block px-8 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition">
            Lee la nota completa
          </a>
        </div>
      </section>

      {/* Prensa / En los Medios */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-lime-600 mb-12 text-center">En los Medios</h2>

        {/* TV Jalisco - Estática */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg overflow-hidden shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Imagen */}
            <div className="flex items-center justify-center p-8">
              <img
                src="/cabeza-al-cielo/tv-jalisco.png"
                alt="Aparición en TV Jalisco"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Contenido */}
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-purple-700 mb-4">TV Jalisco</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Agradecemos profundamente a <strong>TV Jalisco</strong> por abrir este valioso espacio para hablar sobre los avances en favor de las personas con talla baja y visibilizar una causa que transforma vidas.
              </p>
              <p className="text-gray-700 mb-6 italic">
                "Seguimos levantando la voz, el corazón y la mano por un mundo más incluyente."
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Participantes:</strong> Ana (Fundación De la Cabeza al Cielo A.C.) y Margarita (Gente Pequeña de México)
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Año:</strong> 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Posts - Carousel Deslizable */}
        <div className="relative group">
          <h3 className="text-2xl font-bold text-pink-700 mb-6">Publicaciones Facebook</h3>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
              {/* Post 1: Salud es Derecho Humano */}
              <div className="flex-shrink-0 w-96 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg overflow-hidden shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 h-48 overflow-hidden">
                    <img
                      src="/cabeza-al-cielo/facebook-post.png"
                      alt="Publicación Facebook - Salud es un Derecho Humano"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-pink-700 mb-3">Salud es un Derecho</h4>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed flex-grow">
                      ¿Sabías que la salud es un derecho humano? Conocer nuestras opciones de atención y contar con el acompañamiento de especialistas nos permite tomar decisiones informadas.
                    </p>
                    <p className="text-xs text-gray-600">
                      #delacabezaalcielo #inclusion #diversidad
                    </p>
                  </div>
                </div>
              </div>

              {/* Post 2: No Estás Sola */}
              <div className="flex-shrink-0 w-96 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg overflow-hidden shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 h-48 overflow-hidden">
                    <img
                      src="/cabeza-al-cielo/facebook-post-2.png"
                      alt="Publicación Facebook - No Estás Sola"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-rose-700 mb-3">No Estás Sola</h4>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed flex-grow">
                      Recibir un diagnóstico puede llenar nuestro corazón de preguntas. Queremos que sepas que no estás sola. Hay familias que ya pasamos por este camino.
                    </p>
                    <p className="text-xs text-gray-600">
                      #delacabezaalcielo #inclusion #respeto
                    </p>
                  </div>
                </div>
              </div>

              {/* Post 3: Escalón Universal */}
              <div className="flex-shrink-0 w-96 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg overflow-hidden shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 h-48 overflow-hidden">
                    <img
                      src="/cabeza-al-cielo/facebook-post-3.png"
                      alt="Publicación Facebook - Escalón Universal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-pink-700 mb-3">Escalón Universal</h4>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed flex-grow">
                      La inclusión en las escuelas no siempre requiere grandes cambios. Un pequeño ajuste puede hacer una gran diferencia. El escalón universal es un ajuste razonable que promueve accesibilidad e igualdad.
                    </p>
                    <p className="text-xs text-gray-600">
                      #escalónuniversal #accesibilidad #inclusión
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs mt-4">← Desliza para ver más →</p>

          {/* Botones de flechas - Decorativos */}
          <div className="absolute left-2 top-32 bg-white hover:bg-gray-100 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition cursor-pointer opacity-60 hover:opacity-100">
            ←
          </div>

          <div className="absolute right-2 top-32 bg-white hover:bg-gray-100 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition cursor-pointer opacity-60 hover:opacity-100">
            →
          </div>
        </div>
      </section>

      {/* Evento Próximo */}
      <section id="evento" className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-lg my-12 shadow-lg">
        <h2 className="text-4xl font-bold text-lime-600 mb-12 text-center">Próximo Evento</h2>
        <EventoDetalles />
      </section>

      {/* Junta Directiva / Mapa Conceptual */}
      <section id="directiva" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-lime-600 mb-12 text-center">Junta Directiva</h2>

        <div className="relative h-96 flex items-center justify-center">
          {/* SVG Conexiones */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
            {/* Centro a Vice */}
            <line x1="400" y1="200" x2="200" y2="100" stroke="#84cc16" strokeWidth="2" />
            {/* Centro a Tesorero */}
            <line x1="400" y1="200" x2="400" y2="80" stroke="#84cc16" strokeWidth="2" />
            {/* Centro a Vocales derecha */}
            <line x1="400" y1="200" x2="600" y2="100" stroke="#84cc16" strokeWidth="2" />
            <line x1="400" y1="200" x2="600" y2="300" stroke="#84cc16" strokeWidth="2" />
          </svg>

          {/* Nodos */}
          <div className="absolute flex flex-col items-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <div className="bg-lime-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl shadow-lg">👤</div>
            <p className="text-center mt-2 font-bold text-lime-600">Presidenta</p>
            <p className="text-xs text-gray-500">Por confirmar</p>
          </div>

          {/* Vice Presidenta */}
          <div className="absolute flex flex-col items-center" style={{ left: "25%", top: "25%" }}>
            <div className="bg-lime-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-md">👤</div>
            <p className="text-center mt-2 font-bold text-lime-600 text-sm">Vice Presidenta</p>
            <p className="text-xs text-gray-500">Por confirmar</p>
          </div>

          {/* Tesorero */}
          <div className="absolute flex flex-col items-center" style={{ left: "50%", top: "5%", transform: "translateX(-50%)" }}>
            <div className="bg-lime-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-md">👤</div>
            <p className="text-center mt-2 font-bold text-lime-600 text-sm">Tesorero/a</p>
            <p className="text-xs text-gray-500">Por confirmar</p>
          </div>

          {/* Vocal 1 */}
          <div className="absolute flex flex-col items-center" style={{ right: "25%", top: "25%" }}>
            <div className="bg-lime-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-md">👤</div>
            <p className="text-center mt-2 font-bold text-lime-600 text-sm">Vocal</p>
            <p className="text-xs text-gray-500">Por confirmar</p>
          </div>

          {/* Vocal 2 */}
          <div className="absolute flex flex-col items-center" style={{ right: "25%", bottom: "25%" }}>
            <div className="bg-lime-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-md">👤</div>
            <p className="text-center mt-2 font-bold text-lime-600 text-sm">Vocal</p>
            <p className="text-xs text-gray-500">Por confirmar</p>
          </div>
        </div>
      </section>

      {/* Apoyos: Hospitales - Carousel */}
      <section id="apoyos" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-lime-600 mb-4 text-center">Nuestros Apoyos</h2>
        <p className="text-center text-gray-600 mb-8 text-lg">Instituciones de salud comprometidas con la calidad de vida de nuestras familias</p>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-white rounded-lg p-8 shadow-md border-t-4 border-lime-400 hover:shadow-lg transition"
              >
                <div className="h-20 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400">
                  Logo Hospital {i}
                </div>
                <h3 className="font-bold text-lime-600 mb-2">Hospital/Institución {i}</h3>
                <p className="text-gray-600 text-sm">Apoyo en atención médica integral para personas con acondroplasia.</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-4">← Desliza para ver más →</p>
      </section>

      {/* Círculo de Padres */}
      <section id="padres" className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
        <h2 className="text-4xl font-bold text-lime-600 mb-6">Círculo de Padres</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Somos un grupo de padres que tenemos una misión en común: apoyarnos mutuamente, compartir experiencias y fortalecer la red de familias con niñas, niños y adolescentes con acondroplasia.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En nuestro círculo nos reunimos regularmente para conversar, aprender de expertos, resolver dudas y construir un espacio seguro donde nuestras voces sean escuchadas.
            </p>
            <button className="px-8 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition">
              Únete al Círculo
            </button>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-lime-600">
            <h3 className="text-2xl font-bold text-lime-600 mb-6">¿Qué hacemos?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>Reuniones mensuales para compartir experiencias</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>Charlas con especialistas en salud y desarrollo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>Red de apoyo emocional y práctico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-600 font-bold">✓</span>
                <span>Advocacia por derechos y acceso a tratamientos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-lime-600 mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Fundación De la Cabeza al Cielo A.C.</strong> es una organización comprometida con el bienestar integral de las personas con acondroplasia y sus familias.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Trabajamos para garantizar el acceso equitativo a tratamientos innovadores, fortalecer la empatía en la sociedad y construir un futuro donde cada persona pueda alcanzar su máximo potencial, con dignidad y apoyo.
          </p>
        </div>
      </section>

      {/* Contacto - Horizontal en una fila */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-lime-600 mb-12 text-center">Contacto</h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-lime-600 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-lime-600 mb-3 text-lg">Ubicación</h3>
            <p className="text-gray-600 text-sm">FSTSE Guanajuato, Marfil, Gto.</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-pink-600 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="font-bold text-lime-600 mb-3 text-lg">Email</h3>
            <p className="text-gray-600 text-sm">contacto@delacabezaalcielo.org</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-yellow-600 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-bold text-lime-600 mb-3 text-lg">Redes Sociales</h3>
            <p className="text-gray-600 text-sm">@delacabezaalcielo</p>
          </div>
        </div>
      </section>

      {/* Footer - Decorativo */}
      <footer className="relative bg-gradient-to-b from-purple-400 via-pink-300 to-purple-500 text-white py-20 mt-20 overflow-hidden">
        {/* Elementos decorativos: Corazones grandes */}
        <svg className="absolute top-8 left-12 w-24 h-24 text-pink-200 opacity-40 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg className="absolute bottom-20 right-8 w-28 h-28 text-rose-300 opacity-30 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        {/* Estrellas */}
        <div className="absolute top-12 right-20 text-5xl animate-pulse">⭐</div>
        <div className="absolute top-32 right-40 text-4xl opacity-60 animate-bounce" style={{ animationDelay: "0.2s" }}>✨</div>
        <div className="absolute bottom-32 left-20 text-5xl opacity-70 animate-pulse">⭐</div>
        <div className="absolute bottom-12 left-1/2 text-4xl opacity-50" style={{ transform: "translateX(-50%)" }}>✨</div>

        {/* Contenido del Footer */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Gracias por ser parte de nosotros</h3>
          <p className="text-xl text-lime-200 mb-2 font-semibold">© 2026 Fundación De la Cabeza al Cielo A.C.</p>
          <p className="text-lg text-lime-100 mb-8">Acceso, dignidad y oportunidad para todos</p>

          {/* Corazón divider */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-3xl text-pink-200">💚</span>
            <span className="text-3xl text-rose-200">❤️</span>
            <span className="text-3xl text-purple-200">💜</span>
          </div>

          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-sm text-lime-100">
              Sitio web diseñado y editado por{" "}
              <a href="https://etnabi.com" className="font-bold text-white hover:text-lime-200 transition underline">
                etnabi.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
