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

## 2026-09-29 — Migración a sitio multi-página
- Cliente envió `Nitido_com.docx` (capturas de maqueta de referencia de otro negocio construida en un builder externo, más notas de cambios) pidiendo fusionar esa estructura/estilo con el proyecto Nítido existente, sin romper la marca.
- Convertido de landing single-page a sitio multi-página con react-router-dom (ADR-005): `/`, `/nosotros`, `/servicios/creativos`, `/servicios/digitales`, `/portfolio`, `/contacto`. Redirect `/servicios` → `/servicios/creativos`.
- Navbar reconstruido con dropdown "Servicios" (desktop) y acordeón (mobile).
- Nuevo servicio agregado a Servicios Creativos: "Tomas de Dron".
- Nuevos componentes: `PillarsGrid` (grid de 3 tarjetas "Pilares..."), `GradientHero` (banda de degradado rojo→morado para abrir páginas de Servicios, con corrección del cliente: texto blanco + palabra de énfasis en negro), `CTABand` (banda final de página), `Reviews` (sección con estado vacío profesional — sin testimonios inventados), `ServiciosTeaser` (tarjetas de enlace en Inicio).
- Página `/portfolio`: decisión consciente de NO usar la foto de stock de la maqueta de referencia (sin acceso a bancos de imágenes con licencia verificable desde este entorno) — usa el sistema visual de marca (degradado + shards) en su lugar. Documentado como IMAGE_REQUIRED en `docs/assets.md`.
- Página `/nosotros`: solo contiene hechos ya confirmados de la marca — misión/visión/valores marcados explícitamente como pendientes (`nosotros.missionDefined` etc. en `false`), con nota visible en la página mientras tanto.
- Agregado `public/.htaccess` (routing SPA para Hostinger/Apache) — `netlify.toml` y `sitemap.xml` ya estaban listos desde la sesión anterior.
- Build, lint y QA visual (6 páginas, desktop + mobile + menú dropdown) verificados sin errores.

## Pendiente para la próxima sesión
- Contenido real de "Nosotros" (misión, visión, valores, diferenciadores)
- Reseñas reales para Reviews
- Contenido de portfolio (fotos/video) — cliente creará un Google Drive
- Foto de fondo con licencia clara para el Hero de Portfolio (o confirmar que se mantiene el estilo gráfico actual)
- Enlaces reales de Facebook/TikTok/YouTube/LinkedIn/X
- Decisión de proveedor de formulario (Formspree/Resend/otro)
