# etnabi.com

Sitio personal de Etna Abigail — hub con blog/investigaciones, Ecotono Travel Co. (viajes), seguros y e-commerce. Construido con [Next.js](https://nextjs.org).

## Estructura

- `/` — sitio principal (en construcción)
- `/ecotono` — landing de Ecotono Travel Co., servida en `ecotono.etnabi.com` vía `middleware.ts`

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para el sitio principal.

Para probar el subdominio de Ecotono en local, visita [http://localhost:3000/ecotono](http://localhost:3000/ecotono) directamente (el middleware de reescritura por subdominio solo aplica una vez desplegado con el dominio real).

## Deploy

Proyecto pensado para Vercel. Al desplegar, agrega `ecotono.etnabi.com` como dominio adicional del mismo proyecto (Project → Settings → Domains) — el middleware se encarga de enrutarlo a `/ecotono` automáticamente.
