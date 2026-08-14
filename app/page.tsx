import Image from "next/image";
import { Flower, MoleculeCluster, MushroomTrio } from "./Deco";
import RevealObserver from "./RevealObserver";
import ZoomImage from "./ZoomImage";
import "./home.css";

const NEGOCIOS = [
  {
    href: "https://ecotono.etnabi.com",
    name: "Ecotono Travel Co.",
    blurb:
      "No es solo una agencia de viajes. Es un ejercicio de diseño de experiencias con la misma atención al detalle que requiere una investigación.",
    swatch: "var(--rosa-ecotono)",
  },
  {
    href: "https://cabeza-al-cielo.etnabi.com",
    name: "De la Cabeza al Cielo",
    blurb:
      "Fundación comprometida con el acceso equitativo a tratamientos innovadores y calidad de vida para personas con acondroplasia.",
    swatch: "#9C6B97",
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
          <div className="home-hero-inner">
            <h1>Etna Abigail</h1>
            <p className="tagline">Me interesan las preguntas que requieren paciencia.</p>
            <p className="tagline-list">
              Algunas terminan en una simulación molecular.
              <br />
              Otras, en un pequeño negocio.
              <br />
              Otras, simplemente en una libreta llena de notas.
            </p>
            <p className="tagline">Este espacio reúne todas ellas.</p>
          </div>
        </header>

        <section className="pad reveal" id="metodo">
          <Flower className="deco deco-metodo" stroke="var(--azul)" />
          <div className="perfil-meta standalone">
            <span className="mono-label">Actualmente</span>
            <div className="item">
              <span className="v-title">Investigación</span>
              <span className="v">
                Simulación molecular computacional. Explorando cómo modelar sistemas complejos.
              </span>
            </div>
          </div>
        </section>

        <section className="pausa reveal" id="pausa">
          <ZoomImage>
            <Image
              src="/investigacion-editada.png"
              alt="Visualización de una simulación molecular computacional"
              width={905}
              height={430}
              className="pausa-image"
            />
          </ZoomImage>
          <p className="pausa-caption">Toda investigación empieza con una buena pregunta.</p>
        </section>

        <section className="pad reveal" id="negocios">
          <MoleculeCluster className="deco deco-negocios" stroke="var(--rosa-ecotono)" />
          <h2>Lo que estoy construyendo</h2>
          <div className="negocios-grid">
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

        <section className="pad reveal" id="campo">
          <MushroomTrio className="deco deco-campo" />
          <h2>Notas de campo</h2>
          <p className="campo-intro">
            No todo lo que me interesa termina en una publicación científica. Algunas ideas nacen
            observando una flor, diseñando un sitio web, conversando sobre accesibilidad o
            intentando construir un pequeño negocio. Este espacio reúne esas exploraciones.
          </p>
          <div className="curiosidad-grid">
            {CAMPO.map((i) => (
              <div className="curiosidad-card" key={i.name}>
                <CampoIcon color={i.color}>{i.icon}</CampoIcon>
                <h3>{i.name}</h3>
                <p>{i.phrase}</p>
              </div>
            ))}
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
