---
name: etnabi-roadmap
description: Checklist y contexto para llevar etnabi.com de "en construcción" a un hub personal (perfil, intereses, negocios, blog) con Ecotono Travel Co. como uno de los negocios y cotización en sitio. Úsala al trabajar en este repo o cuando se hable de "la página", "etnabi.com", "el sitio", "Ecotono", dominio, hosting, o cotizaciones.
---

# Roadmap etnabi.com

## Visión (confirmada 2026-08-06)

- `etnabi.com` = hub personal: perfil, intereses, **negocios**, blog. No es un sitio dedicado solo a viajes.
- "Negocios" es una sección que muestra/enlaza los negocios de Etna. Hoy: Ecotono Travel Co. Después: los que se agreguen.
- Cada negocio puede vivir en su propio subdominio (como ya pasa con `ecotono.etnabi.com`) — eso es solo una "dirección" bonita, no una arquitectura separada ni un costo extra; sigue siendo el mismo repo/deploy.
- Cotización en sitio: **formulario simple** (destino/fechas/presupuesto → llega por correo o WhatsApp). No un cotizador con precio en vivo — eso se evalúa después de validar el negocio.

## Cómo está armado hoy (para no perder el hilo entre sesiones)

- Un solo repo Next.js (`Developer/website`), un solo deploy en Vercel.
- `proxy.ts` es el "portero": si alguien entra por `ecotono.*`, internamente sirve `/ecotono` sin cambiar la URL visible. No cuesta extra, no es "otro servidor".
- `app/page.tsx` — hoy solo un placeholder "Sitio en construcción" con un link suelto. Le falta ser el hub.
- `app/ecotono/` — landing completa de Ecotono, ya construida y revisada con la skill `web-design-guidelines`.

## Fase 0 — Costos, antes de tocar código (15 min)

- [ ] Confirmar en el dashboard de Vercel en qué plan está el proyecto (probablemente "Hobby", gratis) y qué lo haría pasar a pago (tráfico, funciones serverless, dominios extra).
- [ ] Confirmar dónde y cuándo se renueva `etnabi.com` (registrador, fecha de vencimiento, costo anual).
- [ ] Anotar ambos costos aunque sean $0 hoy — es la base del análisis financiero, no algo aparte.

Por qué primero: no tiene sentido diseñar backend/formularios sin saber si eso empuja el proyecto a un plan de pago.

## Fase 1 — Análisis técnico mínimo (decide el tamaño real del sitio)

- [ ] Listar qué negocios/secciones existen HOY (Ecotono) vs. cuáles son solo intención (seguros, e-commerce, blog — mencionados en el README pero no construidos). No construir lo que todavía no existe.
- [ ] Decidir: el formulario de cotización, ¿guarda datos en una base de datos o solo envía una notificación? → recomendado: solo envío, sin base de datos, para la Fase 3.
- [ ] Elegir proveedor de envío de formularios (ej. Resend, o una API route de Next.js + servicio de email) — evitar crear backend/cuenta propia todavía.

Por qué: el error común es construir un sistema con base de datos y login antes de tener un solo negocio validado con clientes reales.

## Fase 2 — Reconstruir el home como hub personal

- [ ] Reemplazar el placeholder de `app/page.tsx` con: perfil breve, sección "Intereses", sección "Negocios" (tarjeta/link a Ecotono con su propio nombre y subdominio), sección "Blog" (puede decir "próximamente" si no existe aún).
- [ ] Enlazar Ecotono desde "Negocios" con su marca propia, no como una ruta genérica sin contexto.
- [ ] Revisar que el diseño del home no compita visualmente con la identidad de cada negocio (Ecotono ya tiene su propia paleta/tono editorial).

## Fase 3 — Cotización en sitio para Ecotono

- [ ] Diseñar el formulario simple: destino, fechas, número de viajeros, presupuesto aproximado, contacto preferido (WhatsApp/correo).
- [ ] Definir a dónde llega la solicitud (correo de Etna, WhatsApp vía API, o ambos).
- [ ] Aplicar buenas prácticas de formularios (labels, autocomplete, mensajes de error inline, botón deshabilitado solo durante el envío) — ver skill `web-design-guidelines`.
- [ ] Página o mensaje de confirmación tras enviar (que no parezca que no hizo nada).

## Fase 4 — Análisis financiero real (antes de invertir tiempo en más negocios)

- [ ] Sumar costos fijos anuales: dominio + hosting (si deja de ser gratis) + servicio de email/formulario.
- [ ] Estimar cuántas cotizaciones/mes necesita Ecotono para justificar el tiempo invertido en el sitio.
- [ ] Decidir si vale la pena repetir el patrón (nuevo negocio = nueva sección + subdominio) antes de que el primero esté validado con clientes reales.

## Fase 5 — Lanzamiento

- [ ] Probar el formulario de extremo a extremo (enviar una cotización de prueba real).
- [ ] Correr la skill `web-design-guidelines` sobre el home nuevo (ya se corrió una vez sobre `/ecotono`).
- [ ] Confirmar DNS apuntando correctamente a Vercel para `etnabi.com`, `www.etnabi.com` y `ecotono.etnabi.com`.
- [ ] Publicar y compartir el link real — hoy el home todavía dice "en construcción".

## Por dónde empezar

Fase 0 primero (sin código, 15 min) — sin eso cualquier decisión técnica es a ciegas. Después Fase 2 (reconstruir el home), porque es lo único que ve hoy un visitante que llega a `etnabi.com`, y es lo que hace que "Negocios" (Ecotono) sea descubrible.
