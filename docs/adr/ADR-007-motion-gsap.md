# ADR-007: Sistema de movimiento ("reelfolio") con GSAP + ScrollTrigger

## Contexto
El cliente pidió un portfolio tipo "reelfolio" con animaciones potentes y fuera
de lo común en cada sección donde irán fotos y video. Aprobó explícitamente
(oct 2026): librería GSAP + ScrollTrigger e intensidad "muy potente en todas las
secciones". La skill `nitido-web-platform` exige proponer el stack y esperar
aprobación, además de `prefers-reduced-motion` y rendimiento medido.

## Opciones
1. **GSAP + ScrollTrigger** — scroll fijado, máscaras, líneas de tiempo. Más peso.
2. **Motion** — encaja con React, más liviana, menos control en scroll complejo.
3. **CSS puro** — sin dependencias, efectos limitados y soporte irregular.

## Decisión
Opción 1, versión fijada `gsap@3.15.0`. Licencia: campo `license` de npm indica
"Standard 'no charge' license" (confirmar condiciones vigentes en
https://gsap.com/standard-license antes de producción).

## Cómo se aplica
- Carga diferida (`src/lib/gsap.js`): GSAP va en chunks aparte (~45 KB gzip).
- `useGsapScope` usa `gsap.matchMedia()`: con movimiento reducido NO se ejecuta
  nada y el contenido queda visible; todo se revierte al cambiar de ruta.
- Los componentes no importan GSAP: se activan con atributos `data-*`
  (catálogo en el comentario de `src/lib/motion.js`).
- Solo se animan `transform`, `opacity` y `clip-path`.
- Efectos: entrada de palabras con máscara, isotipo con rebote, reveals por
  scroll, cascada en tarjetas, línea de Proceso que se dibuja, parallax,
  botones magnéticos (puntero fino), cortina de página con el degradado de
  marca y reel de Portfolio con scroll horizontal fijado (solo escritorio).
- Móvil: el reel es una tira con scroll nativo y snap.

## Consecuencias
- +45 KB gzip diferidos. Medir LCP/INP/CLS con Lighthouse cuando haya fotos reales.
- Quien agregue una sección anima con `data-*`, no con GSAP directo.
- Los videos del reel deben cumplir el presupuesto de `docs/assets.md`.
