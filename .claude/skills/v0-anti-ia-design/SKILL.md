---
name: v0-anti-ia-design
description: Generar componentes React con v0 (Vercel) usando claymorphism, glassmorphism y profundidad real — evita "olor a IA" plano. Úsalo al diseñar nuevas secciones de etnabi.com o Landing pages sin que parezcan templates genéricos.
---

# v0 Anti-IA Design Skill

## Propósito

Usar **v0 (Vercel)** para generar componentes React modernos con **profundidad, textura y estética premium** que eviten parecer templates planos o hechos por IA genérica.

---

## Estilos Modernos a Usar

### 1. **Claymorphism** (Arcilla 3D Suave)
- Elementos con volumen de plastilina mate
- Sombras interiores suaves (inset shadows)
- Colores desaturados, bordes suavizados
- Uso: Tarjetas, botones, fondos

**Prompt v0:**
```
"Create a card component using claymorphism: soft rounded corners, 
inset shadows, matte clay-like appearance, desaturated colors like 
#C8B4D4 and #E8DED5, subtle depth"
```

### 2. **Glassmorphism** (Efecto Cristal Esmerilado)
- Fondos translúcidos con backdrop-filter (blur)
- Bordes sutiles semi-transparentes
- Contraste con fondo detrás
- Uso: Overlays, modales, tarjetas flotantes

**Prompt v0:**
```
"Create a glassmorphism card: backdrop-filter blur(10px), 
background rgba(255,255,255,0.1), border rgba(255,255,255,0.2), 
floating shadow effect"
```

### 3. **Neo-Brutalismo** (Contraste Disruptivo)
- Bordes negros gruesos (4-6px)
- Colores de alto contraste NO saturados
- Sombras paralelas duras (sin suavizar)
- Tipografía bold, asimétrica
- Uso: Secciones de impacto, call-to-action

**Prompt v0:**
```
"Create a neo-brutalism hero section: thick black borders (4px), 
high contrast unsaturated colors, hard parallel shadows, bold typography, 
asymmetric layout"
```

### 4. **Isométrico con Textura Real**
- Elementos en perspectiva isométrica (45°)
- Materiales realistas (madera, metal cepillado, resina)
- Sombras realistas con ambient occlusion
- Uso: Iconografía, backgrounds, featured sections

**Prompt v0:**
```
"Create an isometric 3D component: 45-degree perspective, 
brushed metal texture, ambient occlusion shadows, realistic depth, 
isolated on white background"
```

---

## Capas y Profundidad (El Secreto Anti-Plano)

### Sombras y Luces
```css
/* Ambient Occlusion (sombras ambientales) */
box-shadow: 
  inset 0 2px 4px rgba(0,0,0,0.05),
  0 8px 16px rgba(0,0,0,0.1);

/* Floating Elements (elementos flotantes) */
box-shadow: 
  0 20px 40px rgba(0,0,0,0.15),
  0 0 1px rgba(255,255,255,0.5) inset;

/* Backlighting (iluminación trasera) */
position: relative;
background: linear-gradient(135deg, #fff 0%, #f5f5f5 100%);
```

**Prompt v0:**
```
"Add layered composition with:
- Floating elements using long drop shadows (0 20px 40px)
- Ambient occlusion for depth
- Subtle backlighting gradient
- Multiple depth layers"
```

---

## Workflow Recomendado

### Paso 1: Generar Assets en v0
1. Ve a **https://v0.dev**
2. Pega tu prompt con los términos clave (claymorphism, glassmorphism, etc.)
3. v0 genera un componente React completo
4. Copia el código (Tailwind + React hooks)

### Paso 2: Adaptar a etnabi.com
1. Abre `/app/components/` (o crea la carpeta)
2. Pega el componente de v0
3. Ajusta colores a la paleta de etnabi.com:
   - `--paper: #F9F6F2` (fondo)
   - `--verde: #BBDFC9` (Actualmente)
   - `--acento: #9C6B97` (morado)
4. Integra en `app/page.tsx`

### Paso 3: Refinamiento Local
- Prueba en dev: `npm run dev`
- Ajusta sombras, bordes, espaciado
- Commit y deploy en Vercel

---

## Evitar Trampas Comunes

❌ **NO pidas:** "una landing page completa"
- v0 te da una imagen fija con texto deformado

✅ **SÍ pide:** Componentes individuales modulares
- Genera: Card → Hero → CTA → Footer
- Luego monta en tu página

---

## Prompts Listos para Copiar-Pegar

### Hero Claymorphism
```
"Create a hero section using claymorphism with:
- Matte clay-like cards in desaturated lavender (#D4C5E8) and cream (#F5F1E8)
- Inset shadows for depth
- Rounded corners (20px)
- Floating elements with subtle drop shadows
- Headline text in serif (Fraunces) with lead text in sans-serif (Inter)
- No gradients, solid colors only"
```

### Feature Cards Glassmorphism
```
"Create 3 feature cards using glassmorphism:
- Backdrop-filter blur(10px)
- Semi-transparent white background
- Subtle border with rgba(255,255,255,0.2)
- Icon above title
- Floating effect with box-shadow: 0 20px 40px rgba(0,0,0,0.1)
- Responsive grid layout"
```

### CTA Neo-Brutalism
```
"Create a call-to-action section using neo-brutalism:
- Thick black border (5px)
- High contrast: dark background, white text
- Bold sans-serif typography (Inter 700)
- Hard parallel shadow (4px offset)
- Asymmetric layout
- One large button with no rounded corners"
```

---

## Integración en etnabi.com

### Estructura de Carpetas
```
app/
├── components/
│   ├── HeroClaymorph.tsx      (Generado en v0)
│   ├── CardGlassmorphism.tsx  (Generado en v0)
│   ├── CTANeobrutal.tsx       (Generado en v0)
│   └── ...
├── page.tsx                    (Importa y arma el layout)
└── home.css                    (Sobrescribe Tailwind si es necesario)
```

### Ejemplo de Importación
```tsx
import HeroClaymorph from "@/app/components/HeroClaymorph";
import CardGlassmorphism from "@/app/components/CardGlassmorphism";

export default function Home() {
  return (
    <>
      <HeroClaymorph />
      <CardGlassmorphism />
    </>
  );
}
```

---

## Checklist Antes de Deploy

- [ ] Componente generado en v0
- [ ] Código copiado a `/app/components/`
- [ ] Colores adaptados a palette de etnabi.com
- [ ] `npm run dev` sin errores TS
- [ ] Probado en desktop + mobile (resize)
- [ ] Commit + push a GitHub
- [ ] Vercel deployment automático
- [ ] Visual check en etnabi.com en vivo

---

## Referencias

- **v0.dev**: https://v0.dev
- **Shadcn UI** (componentes base): https://ui.shadcn.com
- **Aceternity UI** (efectos premium): https://aceternity.com
- **Tailwind CSS**: https://tailwindcss.com
