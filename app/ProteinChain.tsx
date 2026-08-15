"use client";

import { useEffect, useRef } from "react";

interface Bead {
  hx: number;
  hy: number;
  x: number;
  y: number;
  ph: number;
  amp: number;
  ampY?: number;
  r: number;
}

interface Chain {
  beads: Bead[];
  scale: number;
  offsetX: number;
  offsetY: number;
  timeOffset: number;
}

export default function ProteinChain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const palette = [
      "#FF6B6B", "#4ECDC4", "#FFD93D", "#A8E6CF",
      "#FF8B94", "#6C5CE7", "#74B9FF"
    ];
    let W = 0, H = 0, dpr = 1;
    let chains: Chain[] = [];
    const mouse = { x: -999, y: -999, on: false };

    function beadColor(t: number): string {
      const s = t * (palette.length - 1);
      const i = Math.min(palette.length - 2, Math.floor(s));
      const f = s - i;
      const a = hex(palette[i]);
      const b = hex(palette[i + 1]);
      return `rgb(${lerp(a[0], b[0], f) | 0},${lerp(a[1], b[1], f) | 0},${
        lerp(a[2], b[2], f) | 0
      })`;
    }

    function hex(h: string): [number, number, number] {
      return [
        parseInt(h.slice(1, 3), 16),
        parseInt(h.slice(3, 5), 16),
        parseInt(h.slice(5, 7), 16),
      ];
    }

    function lerp(a: number, b: number, t: number): number {
      return a + (b - a) * t;
    }

    function buildChain(N: number, scale: number, offsetX: number, offsetY: number, timeOffset: number): Chain {
      const base: Array<{ x: number; y: number }> = [];
      let x = 0.5, y = 0.5, ang = Math.random() * Math.PI * 2;
      base.push({ x, y });

      for (let i = 1; i < N; i++) {
        ang += (Math.random() - 0.5) * 1.5;
        const step = 0.052;
        x += Math.cos(ang) * step;
        y += Math.sin(ang) * step;

        if (x < 0.16 || x > 0.84) {
          ang = Math.PI - ang;
          x = Math.max(0.16, Math.min(0.84, x));
        }
        if (y < 0.16 || y > 0.84) {
          ang = -ang;
          y = Math.max(0.16, Math.min(0.84, y));
        }
        base.push({ x, y });
      }

      const beads = base.map((p, i) => ({
        hx: p.x,
        hy: p.y,
        x: p.x,
        y: p.y,
        ph: Math.random() * Math.PI * 2,
        amp: (0.006 + Math.random() * 0.01) * scale,
        ampY: (0.012 + Math.random() * 0.016) * scale,
        r: (i === 0 || i === N - 1 ? 7 : 4.4 + Math.random() * 1.6) * scale,
      }));

      return { beads, scale, offsetX, offsetY, timeOffset };
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initChains() {
      chains = [
        buildChain(26, 1, 0.5, 0.5, 0),
      ];
    }

    function drawChain(chain: Chain, time: number) {
      const { beads, scale, offsetX, offsetY, timeOffset } = chain;
      const N = beads.length;
      const adjustedTime = time + timeOffset;

      for (let i = 0; i < N; i++) {
        const b = beads[i];
        let nx = b.hx + Math.sin(adjustedTime + b.ph) * b.amp;
        let ny = b.hy + Math.cos(adjustedTime * 0.9 + b.ph) * (b.ampY || b.amp);

        nx = offsetX + (nx - 0.5) * (scale > 0.4 ? 1.3 : 1);
        ny = offsetY + (ny - 0.5) * (scale > 0.4 ? 1.3 : 1);

        let px = nx * W,
          py = ny * H;

        if (mouse.on) {
          const dx = px - mouse.x,
            dy = py - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 13000) {
            const f = (1 - d2 / 13000) * 26 * scale;
            const d = Math.sqrt(d2) || 1;
            px += (dx / d) * f;
            py += (dy / d) * f;
          }
        }
        b.x = px;
        b.y = py;
      }

      // contactos débiles
      ctx.lineWidth = 1 * scale;
      for (let i = 0; i < N; i++) {
        for (let j = i + 2; j < N; j++) {
          const dx = beads[i].x - beads[j].x,
            dy = beads[i].y - beads[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 52 * scale) {
            ctx.strokeStyle = `rgba(80,86,98,${0.16 * (1 - d / (52 * scale))})`;
            ctx.beginPath();
            ctx.moveTo(beads[i].x, beads[i].y);
            ctx.lineTo(beads[j].x, beads[j].y);
            ctx.stroke();
          }
        }
      }

      // enlaces backbone
      ctx.lineWidth = 2 * scale;
      for (let i = 0; i < N - 1; i++) {
        const grad = ctx.createLinearGradient(
          beads[i].x,
          beads[i].y,
          beads[i + 1].x,
          beads[i + 1].y
        );
        grad.addColorStop(0, beadColor(i / (N - 1)));
        grad.addColorStop(1, beadColor((i + 1) / (N - 1)));
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.moveTo(beads[i].x, beads[i].y);
        ctx.lineTo(beads[i + 1].x, beads[i + 1].y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // beads
      for (let i = 0; i < N; i++) {
        const b = beads[i];
        const col = beadColor(i / (N - 1));
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.shadowColor = col;
        ctx.shadowBlur = 7 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(45,50,58,0.10)";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.45)";
        ctx.fill();
      }
    }

    function frame(t: number) {
      ctx.clearRect(0, 0, W, H);
      const time = t * 0.0009;

      chains.forEach(chain => drawChain(chain, time));

      raf = requestAnimationFrame(frame);
    }

    let raf: number;
    function start() {
      resize();
      initChains();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    }

    canvas.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.on = true;
    });

    canvas.addEventListener("pointerleave", () => {
      mouse.on = false;
      mouse.x = mouse.y = -999;
    });

    let rt: NodeJS.Timeout;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(start, 150);
    });

    start();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg"
      style={{ height: "280px" }}
      aria-hidden="true"
    />
  );
}
