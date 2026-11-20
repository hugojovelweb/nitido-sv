# ADR-009: Portfolio por categorías con página propia

## Contexto
Los clientes definieron en un archivo de Canva cómo quieren el portfolio: 10 portadas por categoría (producciones gastronómicas,
inmobiliarias, marca personal, fotografía de espacios, dron, fotografía de producto, producciones publicitarias, detrás de cámara,
diseño gráfico y desarrollo web), y cada imagen debe apuntar a los proyectos ejecutados con clientes. El enlace de Canva no puede
leerse de forma automática (bloquea robots); la estructura se tomó de una captura del cliente.

## Decisión (aprobada por el cliente, nov 2026)
- `/portfolio` muestra la cuadrícula de las 10 categorías y **reemplaza al reel horizontal** (ADR-007 sigue vigente para el resto del movimiento).
- Cada portada abre una **página propia** `/portfolio/<slug>` con la galería de esa categoría, enlaces a la categoría anterior/siguiente y CTA.
- El título de cada portada es **texto real y editable** (`kicker` + `title`) sobre la foto limpia. Si algún día se usa una portada que ya trae el
  texto dentro de la imagen, `textInCover: true` lo oculta a la vista y lo conserva para lectores de pantalla y buscadores.
- Todo vive en `src/data/content.js` → `portfolioCategories`. Categorías sin fotos muestran un marcador con el degradado de marca y "Próximamente".
- Slug desconocido → redirige a `/portfolio`.
- Se eliminaron `PortfolioReel` y `MediaSlot` (reemplazados). El bloque `data-reel` de `lib/motion.js` se conserva sin uso por si se reutiliza.

## Consecuencias
- Agregar una foto o video = una línea en `items`. Una categoría nueva = un objeto nuevo (la ruta se crea sola).
- `public/sitemap.xml` es estático: al llenar una categoría vacía, agregar su URL.
- Videos: MP4 sin audio, 6–10 s, ≤4 MB, con `poster` (ver docs/assets.md).
