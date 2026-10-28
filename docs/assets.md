# Assets — Trazabilidad

## Assets reales usados (extraídos del Brand Board oficial)

| Asset | Origen | Ubicación en proyecto |
|---|---|---|
| Isotipo blanco (transparente) | Extraído y procesado de `brandboard_nitido_pdf.pdf` | `public/brand/isotipo-white.png` |
| Isotipo negro (transparente) | Extraído y procesado de `brandboard_nitido_pdf.pdf` | `public/brand/isotipo-black.png` |
| Favicons (32/192/512px) | Generados a partir del isotipo oficial | `public/brand/favicon-*.png` |
| Colores de marca | Brand Board oficial (páginas de paleta) | `src/index.css` |
| Gradiente morado exacto | Sampleado por pixel del triángulo del logo real | `src/index.css` (`--color-nitido-purple-deep`) |
| Copy de Servicios Creativos/Digitales | `Servicios_Creativos.jpeg`, `Servicios_Digitales.jpeg` | `src/data/content.js` |
| Copy de Proceso | `Proceso.jpeg` | `src/data/content.js` |
| Copy de FAQ | `Preguntas.jpeg` | `src/data/content.js` |
| Contacto (Instagram, correo, WhatsApp) | `Contacto.jpeg` | `src/data/content.js` |

## IMAGE_REQUIRED — pendiente del cliente

| Asset | Propósito | Dimensiones recomendadas | Formato | Notas |
|---|---|---|---|---|
| Foto de fondo — Hero de Portfolio | La maqueta de referencia (`Nitido_com.docx`, imagen 12) usa una foto real de fondo en `/portfolio`. No se agregó ninguna: el entorno de desarrollo no tiene acceso a bancos de imágenes externos, y no se debía usar una foto de stock sin licencia verificable en un sitio real de cliente. Mientras tanto, `/portfolio` usa un fondo de degradado + shards (sistema visual de marca) | 1920×1080px mín. | JPG/WEBP | Puede ser genérica (foto de cámara/producción), pero con licencia comercial clara (Unsplash/Pexels con atribución, o banco propio) |
| Contenido de portfolio (fotos/video de trabajos reales) | Grid de `/portfolio`, alimentado desde `src/data/content.js` → `portfolioItems` (vacío = estado "Próximamente") | 1200×800px | JPG/WEBP/MP4, <300KB c/u imagen | El cliente creará un Drive para esto (Nitido_com.docx, punto 7). No inventar clientes ni proyectos |
| Logo SVG vectorial | Reemplazar PNG rasterizado por SVG nativo (mejor escalado, menor peso) | — | SVG | El cliente puede exportarlo de su herramienta de diseño original |
| Archivos de fuente "Ultra System" | Reemplazar el sustituto Anton | — | WOFF2 | Ver ADR-003 |
| Contenido de "Nosotros" | Misión, visión, valores, diferenciadores — `src/data/content.js` → `nosotros` | — | Texto | Ver `nosotros.missionDefined` etc. en el código — hoy en `false` |
| Reseñas reales | Sección Reviews — `src/data/content.js` → `reviews` (vacío = estado "Próximamente") | — | Texto + nombre/rol | No se inventaron testimonios. Formato: `{ name, role, quote, rating }` |

## Redes sociales — pendiente de confirmación

Solo Instagram, WhatsApp y correo están confirmados en el Brand Board. El sitio ya tiene espacio reservado (íconos deshabilitados, `href="#"`) para:

- Facebook
- TikTok
- LinkedIn
- YouTube
- X (Twitter)

**Acción requerida:** el cliente debe enviar el usuario/URL exacto de cada red que sí tenga activa. Se actualiza en `src/data/content.js` → array `socials`, cambiando `confirmed: false` a `true` y completando `href`.

## Presupuesto de medios para el reel de Portfolio (ADR-007)

Formato de cada proyecto en `src/data/content.js` → `portfolioItems`:
`{ title, category, mediaUrl, mediaType: "image" | "video", poster }`.
Los archivos van en `public/portfolio/` (el Drive no puede enlazarse directo).

| Tipo | Formato | Tamaño de imagen | Peso máximo | Notas |
|---|---|---|---|---|
| Foto | WebP (o AVIF) | 800×1000 px (4:5) | 250 KB | `alt` descriptivo = `title` |
| Video | MP4 H.264, sin audio | 720×900 px (4:5) | 4 MB, 6–10 s en bucle | Requiere `poster` (WebP ≤ 120 KB) |

Sin items reales, el reel muestra 6 marcadores "Próximo proyecto" con el
degradado de marca (no se inventan proyectos ni clientes).

## Fotos entregadas por el cliente (oct 2026) — trazabilidad

Origen: Drive "Fotos Profesionales" (zip de 35 archivos; 2 duplicados exactos). Se
usaron 11 de 33 fotos únicas, recortadas a 4:5 (800×1000) y convertidas a WebP (≤250 KB).
Los originales no se suben al repositorio.

| Original | Archivo optimizado | Uso |
|---|---|---|
| `024C1DAE-E2D4-4169-8830-0DEA0E925732.png` | `public/portfolio/portfolio-01-gastronomia-bebida.webp` | Portfolio (reel) |
| `IMG_9109.JPG` | `public/portfolio/portfolio-02-hospitalidad-recepcion.webp` | Portfolio (reel) |
| `B818941D-9A7B-4725-AC09-C2F545884F1C.png` | `public/portfolio/portfolio-03-gastronomia-carne.webp` | Portfolio (reel) |
| `9FFF982A-712F-4E94-9CF9-59800E46245E(1).jpg` | `public/portfolio/portfolio-04-hospitalidad-lobby.webp` | Portfolio (reel) |
| `IMG_8415.HEIC` | `public/portfolio/portfolio-05-gastronomia-pupusas.webp` | Portfolio (reel) |
| `IMG_9108.JPG` | `public/portfolio/portfolio-06-hospitalidad-habitacion.webp` | Portfolio (reel) |
| `1994C0B7-D61B-47DB-ABF2-33C55F07F803.png` | `public/portfolio/portfolio-07-gastronomia-mesa.webp` | Portfolio (reel) |
| `55634CA5-8D6E-4D62-B7F1-1EA672241782.jpg` | `public/portfolio/portfolio-08-hospitalidad-sala.webp` | Portfolio (reel) |
| `DE22CEBE-4433-4989-810E-27269EDC0360.png` | `public/portfolio/servicios-postre.webp` | Servicios Creativos (mosaico) |
| `IMG_2584.HEIC` | `public/portfolio/servicios-pupusas.webp` | Servicios Creativos (mosaico) |
| `IMG_4664.JPG` | `public/portfolio/servicios-sliders.webp` | Servicios Creativos (mosaico) |

**No usadas (pendiente de decisión del cliente):** 3 retratos de una persona en traje
(`DSC05574/05576/05583`, posible foto para Nosotros o equipo; no se identificó a la persona),
una imagen con texto diseñado ("Las mejores canoas", es una pieza de redes, no foto),
una foto de naturaleza (serpiente) y fotos de baños/lavandería/patio/habitaciones de menor
impacto. Los títulos del reel son categorías genéricas; no se nombraron clientes.

## Logo horizontal con eslogan (entregado por el cliente, oct 2026)

Dos versiones (WhatsApp Image 2026-10-27 3:07 PM): texto negro para fondo claro y texto
blanco para fondo oscuro, con el eslogan "Agencia creativa audiovisual". Procesadas a WebP
con fondo transparente (1200 px de ancho, ≈42 KB):

| Archivo | Uso |
|---|---|
| `public/brand/logo-horizontal-sobre-oscuro.webp` | Fondos negro/morado/rojo. En uso: Hero de Inicio |
| `public/brand/logo-horizontal-sobre-claro.webp` | Fondo blanco. Disponible, sin uso aún (el sitio es oscuro) |

Se usa con `<BrandLogo on="dark" | "light" />`. **A confirmar con el cliente:** el logotipo de
estas versiones (tipografía recta) es distinto al del brandboard (ancho e inclinado, ver
`skills/nitido-web-platform`). Hay que definir cuál es el vigente y, si es este, actualizar
brandboard y skill. Además llegaron como JPEG de WhatsApp: pedir SVG o PNG originales.
