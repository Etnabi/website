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
          <h2 className="relative z-10">Exploraciones y curiosidades</h2>
          <p className="campo-intro relative z-10">
            No todo lo que me interesa termina en una publicación científica. Algunas ideas nacen
            observando una flor, diseñando un sitio web, conversando sobre accesibilidad o
            intentando construir un pequeño negocio. Este espacio reúne esas exploraciones.
          </p>
          <div className="relative z-10">
            <CampoCard />
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
