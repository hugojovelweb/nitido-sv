# Changelog — Nítido

Formato: `AAAA-MM-DD — Descripción`. Agregar una entrada por cada cambio que persista información relevante para futuras sesiones (nuevo componente, nueva decisión, nuevo asset, cambio de contenido).

## 2026-09-17 — Fase 1: Landing Page inicial
- Discovery completo: Brand Board (PDF) + 5 piezas de Instagram (Proceso, Preguntas, Contacto, Servicios Creativos, Servicios Digitales) analizadas y usadas como única fuente de contenido/identidad.
- Stack confirmado por el cliente: React 19 + Vite + Tailwind CSS v4 (ADR-001), con intención futura de incorporar Shadcn/ui.
- Deploy confirmado: Netlify ahora, Hostinger como destino final (ADR-002).
- Assets de marca extraídos y procesados directamente del PDF oficial: isotipo blanco y negro (transparentes, recortados), favicons generados a partir del isotipo, colores y gradiente sampleados con precisión de píxel.
- Landing construida completa: Navbar, Hero, Servicios (Creativos + Digitales), Proceso (5 pasos numerados), FAQ (acordeón), Contacto (info + formulario + redes sociales), Footer.
- Formulario de contacto: validación client-side completa, estados de carga/éxito/error, envío vía proveedor externo opcional (`VITE_FORM_ENDPOINT`) con fallback simulado documentado (ADR-004).
- Redes sociales: Instagram y WhatsApp confirmadas y funcionales. Facebook, TikTok, YouTube, LinkedIn y X agregadas en el código pero deshabilitadas (`confirmed: false`) — pendientes de que el cliente entregue los enlaces reales.
- SEO técnico: meta tags, Open Graph, Twitter Cards, JSON-LD (LocalBusiness), sitemap.xml, robots.txt.
- Documentación completa: README, docs/setup.md (Windows/Debian-Xfce/VS Code), docs/deployment.md, docs/architecture.md, docs/design-system.md, docs/assets.md, docs/roadmap.md, 4 ADRs.
- Build de producción verificado (`npm run build` sin errores) y QA visual con capturas desktop/mobile.

## Pendiente para la próxima sesión
- Recibir del cliente: enlaces reales de Facebook/TikTok/otras redes, fotografía/video de portfolio real, archivos de fuente "Ultra System", decisión de proveedor de formulario (Formspree/Resend/otro), dominio final.
