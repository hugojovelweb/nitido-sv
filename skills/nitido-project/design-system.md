# Design System — Nítido (resumen)

Ver el documento completo en `/docs/design-system.md`. Este archivo es un resumen rápido para consulta entre sesiones.

## Colores (no cambiar sin Brand Board actualizado)
- Rojo `#ff2055` · Morado `#7d1fff` · Blanco `#ffffff` · Negro `#000000`
- Gradiente logo: `#5504eb` → `#7d1fff`

## Tipografías
- Display: Anton (sustituto de "Ultra System" — ver ADR-003)
- Body: Poppins

## Patrones visuales de marca (reutilizar, no reinventar)
1. Encabezados con letras multicolor (blanco/morado/rojo alternado)
2. Proceso numerado con línea conectora vertical
3. Caja con borde rojo para subtítulos/taglines de sección
4. Formas diagonales rojas/moradas en las esquinas
5. Banda full-bleed con degradado rojo→morado para abrir páginas de Servicios — texto **blanco**, palabra de énfasis en **negro** (corrección explícita del cliente, sept 2026 — nunca al revés)
6. Grid de 3 tarjetas "Pilares" (ícono + título + descripción) para resumir una categoría de servicios
7. Banda CTA de cierre de página, antes del footer ("¿Listo para...?")

## Componentes UI reutilizables
`Button`, `FramedTag`, `SplitHeading`, `SocialIcon`, `PillarIcon`, `CornerShards` — en `src/components/ui/`
`PillarsGrid`, `GradientHero`, `CTABand`, `Reviews`, `ServiciosTeaser` — en `src/components/sections/`
