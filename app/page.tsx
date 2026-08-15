import Image from "next/image";
import { Flower, MoleculeCluster, MushroomTrio, OrganicBlob, HandArrow, SmallHeart } from "./Deco";
import RevealObserver from "./RevealObserver";
import ZoomImage from "./ZoomImage";
import ProteinChain from "./ProteinChain";
import BackgroundMolecules from "./BackgroundMolecules";
import "./home.css";

const NEGOCIOS = [
  {
    href: "https://ecotono.etnabi.com",
    name: "Ecotono Travel Co.",
    blurb:
      "No es solo una agencia de viajes. Es un ejercicio de diseño de experiencias con la misma atención al detalle que requiere una investigación.",
    swatch: "var(--rosa-ecotono)",
  },
];

const CAMPO = [
  {
    name: "Sistemas complejos",
    phrase: "Cómo unas pocas reglas simples pueden generar algo que no se puede predecir a simple vista.",
    color: "var(--azul)",
    icon: (
      <>
        <circle cx="6" cy="7" r="2.4" />
        <circle cx="18" cy="7" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M8 8.5 11 16M16 8.5 13 16M8.3 7h7.4" />
      </>
    ),
  },
  {
    name: "Botánica y naturaleza",
    phrase: "Desde las flores hasta los ecosistemas: entender cómo se organizan los sistemas vivos.",
    color: "var(--rosa)",
    icon: (
      <>
        <circle cx="12" cy="8" r="2.6" />
        <circle cx="12" cy="16" r="2.6" />
        <circle cx="8" cy="12" r="2.6" />
        <circle cx="16" cy="12" r="2.6" />
        <circle cx="12" cy="12" r="1.6" />
      </>
    ),
  },
  {
    name: "Tecnología",
    phrase: "Herramientas que ayudan a comprender, automatizar y construir.",
    color: "var(--morado)",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </>
    ),
  },
  {
    name: "Accesibilidad e inclusión",
    phrase: "Crear proyectos que consideren a más personas y reduzcan barreras.",
    color: "var(--verde)",
    icon: (
      <>
        <circle cx="12" cy="4.5" r="1.7" />
        <path d="M6 9h12M12 9v6l4.5 4.5M12 15l-4.5 4.5" />
      </>
    ),
  },
  {
    name: "Educación",
    phrase: "Aprender constantemente y compartir aquello que vale la pena.",
    color: "var(--azul)",
    icon: <path d="M2 8l10-4 10 4-10 4-10-4Zm5 2.4V16c0 1.1 2.2 3 5 3s5-1.9 5-3v-5.6" />,
  },
  {
    name: "Pequeños negocios",
    phrase: "La belleza de construir algo útil, sostenible y bien hecho.",
    color: "var(--rosa)",
    icon: <path d="M3 9h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Zm2 0 1-4h12l1 4M9 13v3M15 13v3" />,
  },
];

function CampoIcon({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <RevealObserver />
      <div className="grain" aria-hidden="true"></div>

      <div className="home-content">
        <nav className="home-nav">
          <span className="wordmark">ETNA ABIGAIL</span>
          <a className="nav-link" href="#negocios">
            Lo que construyo
          </a>
        </nav>

        <header className="home-hero">
          <svg className="molecule-accent" viewBox="0 0 88 64" fill="none" aria-hidden="true">
            <line x1="14" y1="14" x2="44" y2="34" />
            <line x1="44" y1="34" x2="74" y2="18" />
            <line x1="44" y1="34" x2="50" y2="56" />
            <circle cx="14" cy="14" r="4" />
            <circle cx="44" cy="34" r="5" />
            <circle cx="74" cy="18" r="3.5" />
            <circle cx="50" cy="56" r="3.5" />
          </svg>
          <div className="hero-grid">
            <div className="home-hero-inner">
              <h1>Hola, soy <span className="highlight-box">Abi.</span></h1>
              <p className="hero-lead">
                Este sitio es una ventana a las cosas que me interesan, los proyectos en los que trabajo y algunas de las cosas que voy descubriendo por el camino.
              </p>
              <div className="hero-meta">
                <span><i className="dot" style={{background: "var(--teal-sat)"}}></i> MX</span>
                <span><i className="dot" style={{background: "var(--acento)"}}></i> M.Sc. Ciencias Aplicadas</span>
              </div>
              <div className="cta-row">
                <a href="#campo" className="btn primary">Ver trabajo</a>
                <a href="#contacto" className="btn ghost">Contacto</a>
              </div>
            </div>
            <div className="hero-animation relative">
              <OrganicBlob className="absolute -top-12 -right-8 w-32 h-32 opacity-20" color="var(--acento)" />
              <ProteinChain />
              <HandArrow className="absolute -bottom-6 right-8 w-8 h-8 opacity-40" direction="down-right" color="var(--teal-sat)" />
            </div>
          </div>
        </header>

        <section className="pad reveal relative" id="metodo">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <BackgroundMolecules count={1} />
          </div>
          <Flower className="deco deco-metodo" stroke="var(--azul)" />
          <div className="perfil-meta standalone relative z-10">
            <span className="mono-label">Actualmente</span>
            <div className="item">
              <span className="v-title">Investigación</span>
              <span className="v">
                Simulación molecular computacional. Explorando cómo modelar sistemas complejos.
              </span>
            </div>
          </div>
        </section>

        <section className="pad reveal relative" id="negocios">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <BackgroundMolecules count={2} />
          </div>
          <MoleculeCluster className="deco deco-negocios" stroke="var(--rosa-ecotono)" />
          <h2 className="relative z-10">Lo que estoy construyendo</h2>
          <div className="negocios-grid relative z-10">
            {NEGOCIOS.map((n) => (
              <a className="negocio-card" href={n.href} key={n.name}>
                <span className="swatch" style={{ background: n.swatch }}></span>
                <h3>{n.name}</h3>
                <p>{n.blurb}</p>
              </a>
            ))}
            <div className="negocio-card ghost">
              <h3>Próximamente</h3>
              <p>El siguiente proyecto va aquí, cuando esté listo.</p>
            </div>
          </div>
        </section>

        <section className="pad reveal relative" id="campo">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <BackgroundMolecules count={2} />
          </div>
          <OrganicBlob className="absolute top-20 -left-12 w-40 h-40" color="var(--sage)" />
          <MushroomTrio className="deco deco-campo" />
          <h2 className="relative z-10">Notas de campo</h2>
          <p className="campo-intro relative z-10">
            No todo lo que me interesa termina en una publicación científica. Algunas ideas nacen
            observando una flor, diseñando un sitio web, conversando sobre accesibilidad o
            intentando construir un pequeño negocio. Este espacio reúne esas exploraciones.
          </p>
          <div className="curiosidad-grid relative z-10">
            {CAMPO.map((i) => (
              <div className="curiosidad-card" key={i.name}>
                <CampoIcon color={i.color}>{i.icon}</CampoIcon>
                <h3>{i.name}</h3>
                <p>{i.phrase}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact reveal relative" id="contacto">
          <OrganicBlob className="absolute top-16 -right-20 w-48 h-48" color="var(--rosa)" />
          <OrganicBlob className="absolute bottom-32 -left-16 w-36 h-36" color="var(--acento)" />
          <div className="contact-inner relative z-10">
            <span className="eyebrow">Contacto</span>
            <h2 className="section-title">Hablemos.</h2>
            <p className="contact-lead">
              ¿Un proyecto de simulación, análisis de datos o una colaboración de investigación?
              <br />
              Escríbeme por cualquiera de estos canales.
            </p>
            <div className="contact-links">
              <a href="mailto:etna.aby@gmail.com" className="clink">
                <span className="clink-icon">✉</span> Correo
              </a>
              <a href="https://www.linkedin.com/in/etna-lopez-garcia" target="_blank" rel="noopener" className="clink">
                <span className="clink-icon">in</span> LinkedIn
              </a>
              <a href="https://github.com/etnabi" target="_blank" rel="noopener" className="clink">
                <span className="clink-icon">⚙</span> GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="home-footer">
          <span>Etna Abigail © 2026</span>
          <span>Hub personal · México</span>
        </footer>
      </div>
    </div>
  );
}
