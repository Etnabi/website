"use client";

import { useEffect, useRef } from "react";

interface Atom {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface Molecule {
  atoms: Atom[];
  centerX: number;
  centerY: number;
  rotation: number;
  rotationSpeed: number;
}

const COLORS = [
  "#FF6B6B", "#4ECDC4", "#FFD93D", "#A8E6CF",
  "#FF8B94", "#6C5CE7", "#74B9FF",
];

export default function BackgroundMolecules({ count = 2 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moleculesRef = useRef<Molecule[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create molecules
    const createMolecule = (x: number, y: number, atomCount: number, color: string) => {
      const atoms: Atom[] = [];
      const radius = atomCount * 6;

      for (let i = 0; i < atomCount; i++) {
        const angle = (i / atomCount) * Math.PI * 2;
        const distance = Math.random() * radius + 4;
        atoms.push({
          x: x + Math.cos(angle) * distance,
          y: y + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: Math.random() * 1.5 + 2,
          color: color,
        });
      }

      return {
        atoms,
        centerX: x,
        centerY: y,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      };
    };

    moleculesRef.current = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const atomCount = Math.random() * 3 + 2;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      moleculesRef.current.push(createMolecule(x, y, atomCount, color));
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const molecules = moleculesRef.current;

      molecules.forEach((mol) => {
        mol.rotation += mol.rotationSpeed;

        mol.atoms.forEach((atom) => {
          atom.x += atom.vx;
          atom.y += atom.vy;

          atom.vx *= 0.97;
          atom.vy *= 0.97;

          // Attraction to center
          const centerDx = mol.centerX - atom.x;
          const centerDy = mol.centerY - atom.y;
          const centerDist = Math.sqrt(centerDx * centerDx + centerDy * centerDy);
          if (centerDist > 30) {
            atom.vx += (centerDx / centerDist) * 0.08;
            atom.vy += (centerDy / centerDist) * 0.08;
          }

          if (atom.x - atom.radius < 0 || atom.x + atom.radius > canvas.width) {
            atom.vx *= -0.8;
            atom.x = Math.max(atom.radius, Math.min(canvas.width - atom.radius, atom.x));
          }
          if (atom.y - atom.radius < 0 || atom.y + atom.radius > canvas.height) {
            atom.vy *= -0.8;
            atom.y = Math.max(atom.radius, Math.min(canvas.height - atom.radius, atom.y));
          }
        });

        let sumX = 0, sumY = 0;
        mol.atoms.forEach((atom) => {
          sumX += atom.x;
          sumY += atom.y;
        });
        mol.centerX += (sumX / mol.atoms.length - mol.centerX) * 0.02;
        mol.centerY += (sumY / mol.atoms.length - mol.centerY) * 0.02;
      });

      // Draw molecules
      molecules.forEach((mol) => {
        for (let i = 0; i < mol.atoms.length; i++) {
          for (let j = i + 1; j < mol.atoms.length; j++) {
            const dx = mol.atoms[i].x - mol.atoms[j].x;
            const dy = mol.atoms[i].y - mol.atoms[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 30) {
              ctx.strokeStyle = `rgba(100, 150, 200, ${0.3 * (1 - distance / 30)})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(mol.atoms[i].x, mol.atoms[i].y);
              ctx.lineTo(mol.atoms[j].x, mol.atoms[j].y);
              ctx.stroke();
            }
          }
        }

        mol.atoms.forEach((atom) => {
          ctx.fillStyle = atom.color;
          ctx.globalAlpha = 0.15;
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius * 1.8, 0, Math.PI * 2);
          ctx.fill();

          ctx.globalAlpha = 0.8;
          ctx.fillStyle = atom.color;
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.beginPath();
          ctx.arc(atom.x - atom.radius * 0.25, atom.y - atom.radius * 0.25, atom.radius * 0.25, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current || 0);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ height: "100%" }}
    />
  );
}
