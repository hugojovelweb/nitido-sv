# Design System — Nítido (resumen)

Ver el documento completo en `/docs/design-system.md`. Este archivo es un resumen rápido para consulta entre sesiones.

## Colores (no cambiar sin Brand Board actualizado)
- Rojo `#ff2055` · Morado `#7d1fff` · Blanco `#ffffff` · Negro `#000000`
- Gradiente logo: `#5504eb` → `#7d1fff`

## Tipografías
- Display: Anton (sustituto de "Ultra System" — ver ADR-003)
- Body: Poppins

## Patrones visuales de marca (reutilizar, no reinventar)
1. Encabezados con **degradado morado→rojo** (`GradientHeading`, igual al wordmark oficial "NÍTIDO", valor confirmado por muestreo de píxel `#5504eb`→`#7d1fff`). Usado en TODOS los H2 de sección, incluyendo "Nosotros" (confirmado por el cliente 1 oct 2026). El tratamiento de letras multicolor alternadas (`SplitHeading`) quedó reemplazado por completo (feedback del cliente, sept 2026: "mezcla de colores no se ve muy bien"); el componente se conserva sin uso activo por si se necesita más adelante. Pendiente de confirmar si también se extiende al título "Contacto".
2. Proceso numerado con línea conectora vertical
3. Caja con borde rojo para subtítulos/taglines de sección
4. Formas diagonales rojas/moradas en las esquinas
5. Banda full-bleed con degradado rojo→morado para abrir páginas de Servicios — texto **blanco**, palabra de énfasis en **negro** (corrección explícita del cliente, sept 2026 — nunca al revés)
6. Grid de 3 tarjetas "Pilares" (ícono + título + descripción) para resumir una categoría de servicios
7. Banda CTA de cierre de página, antes del footer ("¿Listo para...?")

## Componentes UI reutilizables
`Button`, `FramedTag`, `SplitHeading`, `GradientHeading`, `SocialIcon`, `PillarIcon`, `CornerShards` — en `src/components/ui/`
`PillarsGrid`, `GradientHero`, `CTABand`, `Reviews`, `ServiciosTeaser` — en `src/components/sections/`

## Movimiento (ADR-007)
GSAP + ScrollTrigger, solo transform/opacity/clip-path. Se activa con atributos `data-*` (ver `src/lib/motion.js`); los componentes no importan GSAP. Con `prefers-reduced-motion` no se anima nada. Nuevos: `AnimatedWords`, `Marquee`, `MediaSlot`, `PortfolioReel`, `PageWipe`.

Logo con eslogan: `BrandLogo` (`on="dark"` o `"light"`) usa `public/brand/logo-horizontal-sobre-*.webp`. Sin efectos sobre el logo.

## Footer oficial (NO cambiar sin pedido expreso del cliente)
Línea 1: `© {año} Nítido. Todos los derechos reservados.` · Línea 2: `Hugo Jovel Web.` (enlace a https://hugojovelweb.tech/, nueva pestaña, `rel="noopener noreferrer"`). Firma de autoría del desarrollador. Un solo componente: `Footer.jsx`. Ver ADR-008.

## Intro de entrada
Video de Design (`public/intro/`), una vez por sesión, iris de salida, saltable, omitida con movimiento reducido. `Splash.jsx` + `lib/splash.js`. Ver ADR-008.

## Portfolio por categorías
Cuadrícula de 10 portadas (`PortfolioGrid`) + página por categoría (`PortfolioCategory`, `/portfolio/<slug>`). Todo editable en `content.js` → `portfolioCategories` (texto real sobre foto limpia; `textInCover` para portadas con texto en la imagen). Ver ADR-009.
