"use client";

import { useRef } from "react";

export default function ZoomImage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--zx", `${x}%`);
    el.style.setProperty("--zy", `${y}%`);
  };

  return (
    <div className="pausa-image-wrap" ref={ref} onMouseMove={handleMove}>
      {children}
    </div>
  );
}
