'use client';

const CAMPO_AREAS = [
  {
    name: 'Plantas, jardines y espacios vivos',
    description: 'Cultivo y observación de vida vegetal.',
    image: '/campo-images/plantas.jpeg',
    bgSize: 'cover',
    bgPos: 'center'
  },
  {
    name: 'Accesibilidad e inclusión',
    description: 'Enseñanza sin barreras: cursos y conferencias que lleguen a más gente.',
    image: '/campo-images/accesibilidad.jpeg',
    bgSize: 'cover',
    bgPos: 'center'
  },
  {
    name: 'Arte y craft',
    description: 'Exploración sensorial a través de flores secas, pintura y resina.',
    image: '/campo-images/arte-pintura.jpeg',
    bgSize: 'cover',
    bgPos: 'center'
  },
];

export function CampoCard() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {CAMPO_AREAS.map((area) => (
        <div
          key={area.name}
          className="group relative overflow-hidden rounded-full w-48 h-48"
          style={{
            backgroundColor: 'rgba(187, 223, 201, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(187, 223, 201, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${area.image}')`,
              backgroundSize: area.bgSize,
              backgroundPosition: area.bgPos,
              opacity: 0.4,
            }}
            aria-hidden="true"
          />

          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(187, 223, 201, 0.4) 0%, rgba(187, 223, 201, 0.2) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-base font-bold mb-2" style={{ color: 'var(--morado)' }}>{area.name}</h3>
            <p className="text-sm" style={{ color: 'var(--morado)' }}>{area.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
