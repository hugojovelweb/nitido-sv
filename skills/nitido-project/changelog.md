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

## 2026-09-29 (2) — Ajuste visual: degradado en vez de letras multicolor
- Cliente envió el wordmark oficial "NÍTIDO" con degradado morado→rojo y pidió reemplazar el efecto de letras multicolor ("se ve mezclado") en varios encabezados.
- Nuevo componente `GradientHeading` (mismo degradado que ya se usaba en el Hero para la palabra "nítido").
- Reemplazado `SplitHeading` → `GradientHeading` en: "Servicios" (teaser de Inicio), "Reviews", "Servicios Creativos", "Servicios Digitales" (vía `PillarsGrid`), y "El detalle" (ambas páginas de Servicios).
- Sin cambios en "Nosotros" (sigue con `SplitHeading`) ni en Contacto — el cliente dijo que evaluará con su cliente final si extender el degradado ahí también. Pendiente de confirmación antes de tocarlos.
- Build y lint verificados sin errores; QA visual de Inicio, Servicios Creativos y Servicios Digitales.

## 2026-10-01 — Degradado en "Nosotros" + cumplimiento con skill nitido-web-platform
- Cliente confirmó extender el degradado morado→rojo (`GradientHeading`) al título "Nosotros", pidiendo respetar explícitamente la skill compartida `nitido-web-platform`.
- Se corrió por primera vez `scripts/verificar_marca.py` de esa skill contra el proyecto completo (ver ADR-006): reveló superficies con grises inventados (`#0a0a0d`, `#121216`) y assets muertos sin relación con la marca.
- `--color-surface` ahora se deriva por transparencia (`rgb(255 255 255 / 0.06)`), igual que `--nt-superficie` en la skill; `--color-surface-raised` eliminado (sin uso).
- Eliminados `src/assets/react.svg`, `vite.svg`, `hero.png` (plantilla por defecto de Vite, sin relación con Nítido, sin referencias en el código).
- El color `#5504eb` del degradado (muestreado por píxel del isotipo real) se mantuvo — es más preciso que el "ESTIMADO" de la skill — y se usó para **corregir la skill compartida** (`tokens.css`, `tokens.json`, `marca-nitido.md`), resolviendo su pendiente #2 para todo proyecto futuro de Nítido.
- `SplitHeading` queda sin uso activo en ninguna página (se conserva el componente, no se borra, por si se necesita más adelante).
- Verificador de marca: 0 bloqueantes, 0 avisos. Build y lint limpios.
- **Bug encontrado y corregido en `GradientHeading`**: el degradado se veía casi todo morado, sin llegar al rojo, en los 6 títulos ya migrados (no solo "Nosotros"). Causa: el componente renderiza un `<h2>` por defecto, que es `display: block` y ocupa el ancho completo del contenedor — el degradado se repartía sobre ese ancho completo, pero el texto (más angosto) solo alcanzaba a mostrar la porción morada inicial. Corregido agregando `inline-block` (y `text-balance`) en `GradientHeading.jsx`, igual que ya funcionaba en el `<span>` de "nítido" del Hero. Verificado visualmente en los 6 títulos (desktop + mobile, incluyendo wrap de dos líneas en "Servicios Digitales").

## Pendiente para la próxima sesión
- Confirmar si el degradado también debe aplicarse al título de "Contacto"
- (se mantienen los pendientes de sesiones anteriores: misión/visión/valores de Nosotros, reseñas reales, portfolio real, redes sociales sin confirmar, proveedor de formulario)

## 2026-10-12 — Reelfolio con animaciones (ADR-007)
- Cliente compartió Drive "Fotos Profesionales" (no accesible desde el entorno de desarrollo: pidió subir las fotos al chat) y aprobó GSAP + ScrollTrigger con intensidad "muy potente en todas las secciones".
- Nuevo sistema de movimiento por atributos `data-*` (`src/lib/motion.js`), carga diferida y respeto a `prefers-reduced-motion`.
- Portfolio: reel horizontal fijado (escritorio) / tira nativa (móvil) con 6 marcadores hasta tener fotos reales; marquee, parallax interno, contador y barra de progreso.
- Global: entrada de palabras del hero, isotipo con rebote, reveals, cascadas, línea de Proceso que se dibuja, botones magnéticos y cortina de página con degradado de marca.
- QA: build y lint limpios, verificador de marca 0/0, sin errores de JS, probado en escritorio, móvil y movimiento reducido.
- Pendiente: fotos/videos reales para llenar `portfolioItems` y asignar media a Servicios/Nosotros; tipografías Anton/Poppins aún se cargan desde Google Fonts (la skill recomienda alojarlas en el proyecto).

## 2026-10-19 — Fotos reales en Portfolio y Servicios Creativos
- Cliente entregó el zip "Fotos Profesionales". Se seleccionaron y optimizaron 11 fotos (gastronomía y espacios de hotel) → `public/portfolio/`, trazabilidad en `docs/assets.md`.
- `portfolioItems` con 8 fotos (alt descriptivo por foto); nuevo mosaico animado `MediaMosaic` en Servicios Creativos (`serviciosCreativosMedia`).
- Fix: `max-w-none` en `MediaSlot` (el preflight de Tailwind recortaba el 125% de ancho del parallax y dejaba franjas negras).
- El entorno de desarrollo se reinició: el proyecto se restauró desde el último zip. La corrección del degradado `#5504eb` en la skill compartida `nitido-web-platform` se perdió y se reaplicó en la sandbox; NO persiste fuera de ella (actualizar la skill real, ver ADR-006).
- Verificador de marca 0/0, build y lint limpios, sin errores de JS (escritorio y móvil).
- Pendiente: decidir uso de los retratos (Nosotros/equipo), nombres de proyectos/clientes con permiso, Hero con foto, videos.

## 2026-10-27 — Logo con eslogan en el Hero
- Cliente pidió reemplazar la primera imagen de Inicio (isotipo) por el logo horizontal con eslogan, grande y atractivo, en dos versiones según el fondo.
- Nuevo `BrandLogo` (`on="dark"|"light"`), archivos transparentes en `public/brand/`; revelado de izquierda a derecha (`data-logo`) en `lib/motion.js`. Sin sombras ni brillos sobre el logo (regla de la skill de marca).
- Pendiente de confirmar: este logotipo difiere del del brandboard (ver docs/assets.md); pedir SVG/PNG originales.
- Verificador de marca 0/0, build y lint limpios, sin errores de JS.

## 2026-10-27 (2) — Hero: logo más grande, sin titular
- Cliente tachó el titular "Hagamos que se vea nítido" del hero y pidió que el logo (nombre + eslogan) se vea más grande. Se eliminó el titular visible.
- El logo ahora va dentro del `<h1>` (nombre accesible: "Nítido, agencia creativa audiovisual") para conservar la jerarquía de encabezados.
- Ancho del logo: hasta 960 px en escritorio y 94 % de la pantalla en móvil. Logos re-exportados a resolución nativa (≈1290 px de ancho, ≈30 KB).
- "Hagamos que se vea Nítido." sigue definido en `content.js` (`brand.tagline`) pero hoy NO se muestra en ninguna pantalla. Pendiente: decidir con el cliente si va en el pie de página u otra sección.
- Verificador de marca 0/0, build y lint limpios, sin errores de JS.
