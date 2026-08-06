export function Flower({ className, stroke = "var(--rosa)" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 190" fill="none" aria-hidden="true">
      <path d="M60 80v70" stroke="var(--verde)" strokeWidth="1.1" opacity=".5" />
      <path
        d="M60 118c-16-4-26 6-30 18 16 6 28-4 30-18Z"
        stroke="var(--verde)"
        strokeWidth="1"
        opacity=".5"
      />
      <path
        d="M60 140c16-4 28 6 32 18-16 6-30-4-32-18Z"
        stroke="var(--verde)"
        strokeWidth="1"
        opacity=".5"
      />
      <g stroke={stroke} strokeWidth="1.2" opacity=".6">
        <circle cx="60" cy="60" r="22" />
        <circle cx="60" cy="20" r="22" />
        <circle cx="22" cy="60" r="22" />
        <circle cx="98" cy="60" r="22" />
        <circle className="deco-pulse" cx="60" cy="60" r="9" fill={stroke} opacity=".55" />
      </g>
    </svg>
  );
}

export function MoleculeCluster({
  className,
  stroke = "var(--morado)",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 140 140" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.2" opacity=".55">
        <line x1="20" y1="18" x2="70" y2="55" />
        <line x1="70" y1="55" x2="48" y2="105" />
        <line x1="70" y1="55" x2="120" y2="45" />
        <line x1="48" y1="105" x2="100" y2="122" />
      </g>
      <circle cx="20" cy="18" r="5" fill={stroke} opacity=".7" />
      <circle className="deco-pulse" cx="70" cy="55" r="7" fill={stroke} opacity=".8" />
      <circle cx="48" cy="105" r="4.5" fill={stroke} opacity=".6" />
      <circle cx="120" cy="45" r="4" fill={stroke} opacity=".55" />
      <circle cx="100" cy="122" r="4" fill={stroke} opacity=".55" />
    </svg>
  );
}

export function MushroomTrio({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 90" fill="none" aria-hidden="true">
      <g stroke="var(--gris)" strokeWidth="1.1" opacity=".55">
        <path d="M16 56Q40 24 64 56" />
        <path d="M16 56h48" />
        <path d="M30 56 32 80M50 56 48 80" />
      </g>
      <g stroke="var(--gris)" strokeWidth="1" opacity=".5">
        <path d="M84 68Q100 46 116 68" />
        <path d="M84 68h32" />
        <path d="M94 68 95 84M106 68 105 84" />
      </g>
      <g stroke="var(--gris)" strokeWidth="1.1" opacity=".55">
        <path d="M150 50Q172 20 194 50" />
        <path d="M150 50h44" />
        <path d="M163 50 165 76M181 50 179 76" />
      </g>
      <circle className="deco-pulse" cx="172" cy="34" r="3.5" fill="var(--verde)" opacity=".7" />
    </svg>
  );
}
