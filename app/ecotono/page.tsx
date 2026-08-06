import Image from "next/image";
import RevealObserver from "./RevealObserver";

const DESTINATIONS = [
  {
    slug: "los-cabos",
    region: "México · Baja",
    name: "Los Cabos",
    blurb: "Desierto y mar en la misma franja de costa.",
  },
  {
    slug: "puerto-vallarta",
    region: "México · Pacífico",
    name: "Puerto Vallarta & Riviera Nayarit",
    blurb: "Malecón, selva y atardeceres que se acumulan.",
  },
  {
    slug: "tulum",
    region: "México · Caribe",
    name: "Tulum & Riviera Maya",
    blurb: "Cenotes, ruinas y arena blanca, capa sobre capa.",
  },
  {
    slug: "oaxaca",
    region: "México · Sur",
    name: "Oaxaca",
    blurb: "La mesa y el arte en su expresión más precisa.",
  },
  {
    slug: "cartagena",
    region: "Colombia",
    name: "Cartagena",
    blurb: "Murallas coloniales frente al Caribe.",
  },
  {
    slug: "costa-rica",
    region: "Costa Rica",
    name: "Costa Rica",
    blurb: "Selva, volcanes y desconexión medida.",
  },
  {
    slug: "amalfi",
    region: "Italia",
    name: "Costa Amalfitana",
    blurb: "Pueblos colgados sobre el Mediterráneo.",
  },
  {
    slug: "santorini",
    region: "Grecia",
    name: "Santorini",
    blurb: "Blanco y azul hasta donde alcanza la vista.",
  },
] as const;

const WHATSAPP_HREF =
  "https://wa.me/524772475304?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20de%20Ecotono%20Travel%20Co.%20Me%20gustar%C3%ADa%20platicar%20sobre%20un%20viaje.";

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.4 9 9.9 7.7 9.6 7.2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z" />
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

export default function EcotonoPage() {
  return (
    <div className="ecotono-page">
      <RevealObserver />
      <div className="grain"></div>
      <div className="vignette"></div>

      <nav className="nav">
        <div className="wordmark">
          <svg className="mark" width="34" height="30" viewBox="0 0 22 20" fill="none">
            <defs>
              <radialGradient id="dotGrad" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#FF5FA8" />
                <stop offset="55%" stopColor="#D6006C" />
                <stop offset="100%" stopColor="#A80057" />
              </radialGradient>
            </defs>
            <path className="tide-wave w2 ribbon-shadow" d="M1 6c3.5-3 6.5 3 10 0s6.5-3 10 0" stroke="#3F6472" strokeWidth="3.6" strokeLinecap="round" fill="none" opacity="0.22" />
            <path className="tide-wave w2 ribbon-base" d="M1 6c3.5-3 6.5 3 10 0s6.5-3 10 0" stroke="#5D93A6" strokeWidth="3.1" strokeLinecap="round" fill="none" />
            <g transform="translate(-0.25,-0.4)">
              <path className="tide-wave w2 ribbon-shine" d="M1 6c3.5-3 6.5 3 10 0s6.5-3 10 0" stroke="#A8D3E0" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.85" />
            </g>
            <path className="tide-wave w1 ribbon-shadow" d="M1 14c3.5-3 6.5 3 10 0s6.5-3 10 0" stroke="#5E6E3C" strokeWidth="3.6" strokeLinecap="round" fill="none" opacity="0.22" />
            <path className="tide-wave w1 ribbon-base" d="M1 14c3.5-3 6.5 3 10 0s6.5-3 10 0" stroke="#8B9B57" strokeWidth="3.1" strokeLinecap="round" fill="none" />
            <g transform="translate(-0.25,-0.4)">
              <path className="tide-wave w1 ribbon-shine" d="M1 14c3.5-3 6.5 3 10 0s6.5-3 10 0" stroke="#C3CE8E" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.85" />
            </g>
            <circle className="tide-dot" cx="11" cy="10" r="2.3" fill="url(#dotGrad)" />
          </svg>
          <span className="name">
            ECOTONO<span className="sub">TRAVEL CO.</span>
          </span>
        </div>
        <a className="cta-small" href={WHATSAPP_HREF} target="_blank" rel="noopener">
          Escríbeme
        </a>
      </nav>

      <header className="hero">
        <svg className="hero-mark" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" />
          <path className="tide-wave w2" d="M14 76c32-27 59 27 86 0s50-27 86 0" stroke="currentColor" strokeWidth="1" />
          <path className="tide-wave w1" d="M14 124c32-27 59 27 86 0s50-27 86 0" stroke="currentColor" strokeWidth="1" />
          <circle className="dot tide-dot" cx="100" cy="100" r="4.5" />
        </svg>
        <div className="hero-inner">
          <span className="eyebrow">
            <span className="rule"></span>Asesoría de viajes curada, con precisión de campo
          </span>
          <h1>
            Donde los mundos<br />
            <em>se encuentran.</em>
          </h1>
          <p className="lede">
            Diseñamos cada viaje en el punto exacto donde lo conocido se encuentra con lo inesperado.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href={WHATSAPP_HREF} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Cuéntame tu viaje
            </a>
            <a className="btn-ghost" href="#destinos">
              Ver puntos de partida ↓
            </a>
          </div>
        </div>
      </header>

      <section className="founder reveal">
        <div className="founder-inner">
          <span className="eyebrow">
            <span className="rule"></span>Nuestro método
          </span>
          <blockquote>
            &quot;Observamos antes de proponer. Cada itinerario pasa por el mismo rigor con el que se estudia un
            ecosistema — nada al azar, todo con un porqué.&quot;
          </blockquote>
          <cite>— Método Ecotono</cite>
        </div>
      </section>

      <section className="pad valores reveal" id="valores">
        <div className="section-head">
          <span className="eyebrow">
            <span className="rule"></span>Cómo trabajamos
          </span>
          <h2>Precisión de campo, aplicada a tu itinerario.</h2>
        </div>
        <div className="valores-grid">
          <div className="valor">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8C6A45" strokeWidth="1.3">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l2.5 2.5L16 9" />
            </svg>
            <h3>Observación, no catálogo</h3>
            <p>Cada itinerario nace de entender lo que realmente buscas — no de un filtro de precios genérico.</p>
          </div>
          <div className="valor">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8C6A45" strokeWidth="1.3">
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <path d="M3 9h18M8 4v5" />
            </svg>
            <h3>Rigor, con apoyo de IA</h3>
            <p>La tecnología acelera la investigación y el seguimiento — la decisión final siempre pasa por un criterio humano.</p>
          </div>
          <div className="valor">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8C6A45" strokeWidth="1.3">
              <path d="M4 4l16 8-16 8 4-8-4-8z" />
            </svg>
            <h3>Una sola conversación</h3>
            <p>Todo el proceso vive en un mismo hilo de WhatsApp, de principio a fin, sin perder contexto.</p>
          </div>
        </div>
      </section>

      <section className="pad reveal" id="destinos">
        <div className="section-head">
          <span className="eyebrow">
            <span className="rule"></span>Puntos de partida
          </span>
          <h2>Algunos rumbos frecuentes — el tuyo puede ser otro.</h2>
        </div>
        <div className="dest-grid">
          {DESTINATIONS.map((d) => (
            <div className="dest-card" key={d.slug}>
              <div className="dest-photo">
                <Image
                  src={`/destinos/${d.slug}.jpg`}
                  alt={d.name}
                  fill
                  sizes="(max-width: 520px) 50vw, (max-width: 900px) 33vw, 25vw"
                />
              </div>
              <div className="dest-caption">
                <span className="region">{d.region}</span>
                <h4>{d.name}</h4>
                <p>{d.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pad proceso reveal" id="proceso">
        <div className="section-head">
          <span className="eyebrow">
            <span className="rule"></span>Cómo empezamos
          </span>
          <h2>Tres pasos, un solo mensaje para arrancar.</h2>
        </div>
        <div className="pasos">
          <div className="paso">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M4 5h16v11H9l-4 4V5z" />
            </svg>
            <span className="n">PASO I</span>
            <h4>Me cuentas el viaje</h4>
            <p>Fechas, presupuesto aproximado, con quién viajas — por WhatsApp, sin formularios largos.</p>
          </div>
          <div className="paso">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.4" />
            </svg>
            <span className="n">PASO II</span>
            <h4>Trazamos la ruta</h4>
            <p>Te regreso opciones curadas y un primer itinerario. Ajustamos juntos hasta que quede exacto.</p>
          </div>
          <div className="paso">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <rect x="4" y="8" width="16" height="12" rx="1.5" />
              <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>
            <span className="n">PASO III</span>
            <h4>Viajas tranquilo</h4>
            <p>Confirmación, seguimiento y un contacto directo antes, durante y después del viaje.</p>
          </div>
        </div>
      </section>

      <section className="pad contacto reveal" id="contacto">
        <svg className="paper-plane" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M21 3 3 10.5l7.5 2.5L13 21 21 3z" />
          <path d="M10.5 13 21 3" />
        </svg>
        <span className="eyebrow">
          <span className="rule"></span>Empecemos
        </span>
        <h2>¿Hacia dónde te gustaría ir?</h2>
        <p className="lede">
          Escríbeme directo por WhatsApp — sin compromiso, sin catálogo cerrado. Solo una conversación para entender
          qué viaje tienes en mente.
        </p>
        <a className="btn-primary" href={WHATSAPP_HREF} target="_blank" rel="noopener">
          <WhatsAppIcon />
          Escríbeme por WhatsApp
        </a>
      </section>

      <footer>
        <div className="wordmark">
          <span className="name">ECOTONO TRAVEL CO.</span>
        </div>
        <span>Asesoría de viajes independiente · México</span>
      </footer>
    </div>
  );
}
