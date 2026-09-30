# Stack — Nítido

## Confirmado y autorizado por el cliente

| Capa | Elección |
|---|---|
| Frontend | React 19 + Vite + Tailwind CSS v4 |
| Routing | react-router-dom (multi-página, ver ADR-005) |
| Control de versiones | GitHub (repo "nitido-sv") |
| Hosting actual | Netlify, con CI/CD desde GitHub (push a main despliega automáticamente) |
| Hosting final | Hostinger (cuenta propia ya existente) — requiere `.htaccess` para SPA routing, ya incluido en `public/.htaccess` |
| CMS | Ninguno (contenido hardcodeado en `src/data/content.js`) |
| Backend | Ninguno en Fase 1 |
| Base de datos | Ninguna en Fase 1 |
| Formulario de contacto | UI lista, envío real pendiente de elegir proveedor (Formspree/Resend/EmailJS) — ver ADR-004 |
| Analytics | No autorizado todavía — no agregar sin permiso explícito |

## Evolución futura mencionada por el cliente
- Interés confirmado en incorporar **Shadcn/ui** en el futuro — compatible sin fricción con el stack actual (Tailwind + React), no requiere migración.

## Comandos clave
```bash
npm install       # instalar dependencias
npm run dev       # desarrollo local (localhost:5173)
npm run build     # compilar a /dist
npm run preview   # probar el build de producción localmente
```

## No hacer sin nuevo ADR + autorización
- Cambiar de React a otro framework
- Agregar un CMS
- Agregar backend/base de datos
- Cambiar de Netlify/Hostinger a otro proveedor
