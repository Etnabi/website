"use client";

import { useEffect, useRef, useState } from "react";

interface Atom {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  type: number; // 0-2 para diferentes tipos de átomos
}

interface Molecule {
  atoms: Atom[];
  centerX: number;
  centerY: number;
  rotation: number;
  rotationSpeed: number;
}

const COLORS = [
  "#FF6B6B", // Rojo
  "#4ECDC4", // Turquesa
  "#FFD93D", // Amarillo
  "#A8E6CF", // Verde menta
  "#FF8B94", // Rosa
  "#6C5CE7", // Púrpura
  "#74B9FF", // Azul
];

export default function InteractiveMolecule() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const moleculesRef = useRef<Molecule[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create molecules (clusters)
    const createMolecule = (x: number, y: number, atomCount: number, color: string) => {
      const atoms: Atom[] = [];
      const radius = atomCount * 8;

      for (let i = 0; i < atomCount; i++) {
        const angle = (i / atomCount) * Math.PI * 2;
        const distance = Math.random() * radius + 5;
        atoms.push({
          x: x + Math.cos(angle) * distance,
          y: y + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2 + 3,
          color: color,
          type: i % 3,
        });
      }

      return {
        atoms,
        centerX: x,
        centerY: y,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      };
    };

    // Initialize molecules
    moleculesRef.current = [];
    for (let i = 0; i < 6; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const atomCount = Math.random() * 4 + 3;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      moleculesRef.current.push(createMolecule(x, y, atomCount, color));
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(240, 245, 250, 0.1)");
      gradient.addColorStop(1, "rgba(220, 240, 250, 0.1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const molecules = moleculesRef.current;
      const repelRadius = 150;
      const repelStrength = 2;

      // Update molecules
      molecules.forEach((mol) => {
        mol.rotation += mol.rotationSpeed;

        // Update atoms
        mol.atoms.forEach((atom) => {
          // Repel from mouse
          const dx = atom.x - mousePos.x;
          const dy = atom.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - distance / repelRadius) * repelStrength;
            atom.vx += Math.cos(angle) * force;
            atom.vy += Math.sin(angle) * force;
          }

          // Apply velocity
          atom.x += atom.vx;
          atom.y += atom.vy;

          // Damping
          atom.vx *= 0.93;
          atom.vy *= 0.93;

          // Attraction to molecule center
          const centerDx = mol.centerX - atom.x;
          const centerDy = mol.centerY - atom.y;
          const centerDist = Math.sqrt(centerDx * centerDx + centerDy * centerDy);
          if (centerDist > 50) {
            atom.vx += (centerDx / centerDist) * 0.1;
            atom.vy += (centerDy / centerDist) * 0.1;
          }

          // Bounce off walls
          if (atom.x - atom.radius < 0 || atom.x + atom.radius > canvas.width) {
            atom.vx *= -0.8;
            atom.x = Math.max(atom.radius, Math.min(canvas.width - atom.radius, atom.x));
          }
          if (atom.y - atom.radius < 0 || atom.y + atom.radius > canvas.height) {
            atom.vy *= -0.8;
            atom.y = Math.max(atom.radius, Math.min(canvas.height - atom.radius, atom.y));
          }

          // Add slight gravity
          atom.vy += 0.05;
        });

        // Update center
        let sumX = 0,
          sumY = 0;
        mol.atoms.forEach((atom) => {
          sumX += atom.x;
          sumY += atom.y;
        });
        mol.centerX += (sumX / mol.atoms.length - mol.centerX) * 0.02;
        mol.centerY += (sumY / mol.atoms.length - mol.centerY) * 0.02;
      });

      // Draw molecules
      molecules.forEach((mol) => {
        // Draw bonds between atoms
        for (let i = 0; i < mol.atoms.length; i++) {
          for (let j = i + 1; j < mol.atoms.length; j++) {
            const dx = mol.atoms[i].x - mol.atoms[j].x;
            const dy = mol.atoms[i].y - mol.atoms[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 40) {
              ctx.strokeStyle = `rgba(100, 150, 200, ${0.4 * (1 - distance / 40)})`;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(mol.atoms[i].x, mol.atoms[i].y);
              ctx.lineTo(mol.atoms[j].x, mol.atoms[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw atoms
        mol.atoms.forEach((atom) => {
          // Glow
          ctx.fillStyle = atom.color;
          ctx.globalAlpha = 0.2;
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius * 2, 0, Math.PI * 2);
          ctx.fill();

          // Main circle
          ctx.globalAlpha = 1;
          ctx.fillStyle = atom.color;
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2);
          ctx.fill();

          // Shine
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
          ctx.beginPath();
          ctx.arc(atom.x - atom.radius * 0.3, atom.y - atom.radius * 0.3, atom.radius * 0.3, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current || 0);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg"
      style={{ height: "400px" }}
    />
  );
}
