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
| Foto/video hero | Reemplazar tratamiento tipográfico del Hero por imagen real de trabajo, si se desea en Fase 2 | 1600×1000px mín. | JPG/WEBP o MP4 | Opcional — el Hero actual funciona sin ella |
| Fotos de portfolio (3-6) | Sección de casos/trabajos (Fase 2) | 1200×800px | JPG/WEBP, <300KB c/u | No inventar clientes ni proyectos |
| Logo SVG vectorial | Reemplazar PNG rasterizado por SVG nativo (mejor escalado, menor peso) | — | SVG | El cliente puede exportarlo de su herramienta de diseño original |
| Archivos de fuente "Ultra System" | Reemplazar el sustituto Anton | — | WOFF2 | Ver ADR-003 |

## Redes sociales — pendiente de confirmación

Solo Instagram, WhatsApp y correo están confirmados en el Brand Board. El sitio ya tiene espacio reservado (íconos deshabilitados, `href="#"`) para:

- Facebook
- TikTok
- LinkedIn
- YouTube
- X (Twitter)

**Acción requerida:** el cliente debe enviar el usuario/URL exacto de cada red que sí tenga activa. Se actualiza en `src/data/content.js` → array `socials`, cambiando `confirmed: false` a `true` y completando `href`.
