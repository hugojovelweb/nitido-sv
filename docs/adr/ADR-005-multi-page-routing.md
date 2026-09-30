# ADR-005: Migración de Landing single-page a sitio multi-página

## Contexto
El cliente entregó `Nitido_com.docx` con capturas de una maqueta de referencia
(sitio de otro negocio, construido en un builder externo) y pidió fusionar esa
estructura con el proyecto Nítido existente. Pidió explícitamente URLs
separadas: inicio, nosotros, servicios (dividido en dos páginas), portfolio,
contacto — en vez de anchors (`#servicios`) dentro de una sola página.

## Problema
El proyecto era una landing de una sola página (Fase 1, ADR-001). Cambiar a
multi-página implica: routing del lado del cliente, SEO por página, y
configuración de servidor para que las URLs internas no den 404 al refrescar.

## Opciones consideradas
1. **react-router-dom** (client-side routing, SPA) — mismo stack (Vite+React),
   sin backend, compila a estático.
2. **Migrar a Next.js** (file-based routing, SSR/SSG real) — mejor SEO por
   defecto, pero cambia el stack completo ya autorizado en ADR-001 y añade
   complejidad de servidor no necesaria en esta fase.
3. Mantener una sola página con anchors — no cumple el pedido explícito del
   cliente de URLs independientes por sección.

## Decisión
Opción 1: **react-router-dom**, manteniendo Vite + React + Tailwind (sin
romper ADR-001). Cada página tiene su propio `<title>` vía el hook
`usePageTitle` (sin dependencia extra tipo react-helmet).

## Consecuencias
- Requiere reglas de redirect en el hosting para que todas las rutas sirvan
  `index.html` (routing lo resuelve el navegador): ya configurado en
  `netlify.toml` (Netlify) y `public/.htaccess` (Hostinger/Apache).
- SEO por página es más limitado que con SSR real (meta tags se inyectan por
  JS, no en el HTML servido inicialmente) — aceptable para Fase 1; revisar en
  Fase 2 si el SEO orgánico se vuelve prioritario (posible migración a
  Next.js o prerendering estático, requeriría nuevo ADR).
- Si el proyecto migra a Next.js en una fase futura, esta decisión se
  revisita explícitamente con un nuevo ADR — no reemplazar el stack sin eso.
