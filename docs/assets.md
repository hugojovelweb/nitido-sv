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
