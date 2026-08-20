import Image from "next/image";
import { Flower, MoleculeCluster, MushroomTrio, OrganicBlob, HandArrow, SmallHeart } from "./Deco";
import RevealObserver from "./RevealObserver";
import ZoomImage from "./ZoomImage";
import ProteinChain from "./ProteinChain";
import BackgroundMolecules from "./BackgroundMolecules";
import { EcotonoCard } from "./components/EcotonoCard";
import { InvestigacionCard } from "./components/InvestigacionCard";
import { CampoCard } from "./components/CampoCard";
import "./home.css";

const NEGOCIOS = [
  {
    href: "https://ecotono.etnabi.com",
    name: "Ecotono Travel Co.",
    blurb:
      "No es solo un viaje, es donde se encuentran los mundos.",
    swatch: "var(--rosa-ecotono)",
  },
  {
    href: "#investigacion",
    name: "Investigación",
    blurb:
      "Simulación molecular computacional. Explorando cómo modelar sistemas complejos.",
    swatch: "var(--verde)",
    isInvestigacion: true,
  },
];

const CAMPO = [
  {
    name: "Plantas, jardines y espacios vivos",
    phrase: "Cultivo y observación de vida vegetal.",
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
    name: "Accesibilidad e inclusión",
    phrase: "Enseñanza sin barreras: cursos y conferencias que lleguen a más gente.",
    color: "var(--verde)",
    icon: (
      <>
        <circle cx="12" cy="4.5" r="1.7" />
        <path d="M6 9h12M12 9v6l4.5 4.5M12 15l-4.5 4.5" />
      </>
    ),
  },
  {
    name: "Arte y craft",
    phrase: "Exploración sensorial a través de flores secas, pintura y resina.",
    color: "var(--morado)",
    icon: (
      <>
        <path d="M3 3h18v18H3z" />
        <circle cx="8" cy="8" r="2" />
        <path d="M3 15l6-6 5 5 7-7" />
      </>
    ),
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

<section className="pad reveal relative" id="negocios">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <BackgroundMolecules count={2} />
          </div>
          <MoleculeCluster className="deco deco-negocios" stroke="var(--rosa-ecotono)" />
          <h2 className="relative z-10">Lo que estoy construyendo</h2>
          <div className="negocios-grid relative z-10">
            {NEGOCIOS.map((n) => {
              if (n.name === "Ecotono Travel Co.") {
                return <EcotonoCard key={n.name} />;
              } else if (n.isInvestigacion) {
                return <InvestigacionCard key={n.name} />;
              } else {
                return (
                  <a className="negocio-card" href={n.href} key={n.name}>
                    <span className="swatch" style={{ background: n.swatch }}></span>
                    <h3>{n.name}</h3>
                    <p>{n.blurb}</p>
                  </a>
                );
              }
            })}
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
          <h2 className="relative z-10 mb-12">Exploraciones y curiosidades</h2>
          <div className="relative z-10">
            <CampoCard />
          </div>
        </section>

        <section className="contact reveal relative" id="contacto">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <filter id="soft-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
              </filter>
            </defs>
            <g opacity="0.3">
              <ellipse cx="100" cy="80" rx="100" ry="80" fill="#42625F" opacity="0.15" transform="rotate(-35 100 80)" filter="url(#soft-blur)"/>
              <ellipse cx="1100" cy="120" rx="90" ry="70" fill="#42625F" opacity="0.12" transform="rotate(45 1100 120)" filter="url(#soft-blur)"/>
              <circle cx="150" cy="520" r="60" fill="#42625F" opacity="0.1" filter="url(#soft-blur)"/>
              <ellipse cx="1050" cy="540" rx="110" ry="85" fill="#42625F" opacity="0.13" transform="rotate(30 1050 540)" filter="url(#soft-blur)"/>
            </g>
          </svg>
          <div className="contact-inner relative z-10">
            <span className="eyebrow">Contacto</span>
            <h2 className="section-title">Hablemos.</h2>
            <p className="contact-lead">
              Me encantaría conocer tu proyecto. Cuéntame qué estás haciendo.
            </p>
            <div className="contact-links">
              <a href="mailto:etna.aby@gmail.com" className="clink" title="Correo">
                <span className="clink-icon">✉</span>
              </a>
              <a href="https://www.linkedin.com/in/etna-lopez-garcia" target="_blank" rel="noopener" className="clink" title="LinkedIn">
                <span className="clink-icon">in</span>
              </a>
              <a href="https://github.com/etnabi" target="_blank" rel="noopener" className="clink" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
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
