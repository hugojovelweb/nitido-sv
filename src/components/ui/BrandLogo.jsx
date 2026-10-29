/**
 * Logo oficial de Nítido. Siempre se usa el archivo, nunca texto reescrito con
 * otra tipografía (regla de la skill de marca).
 *   variant="lockup"  → logo horizontal con eslogan "Agencia creativa audiovisual"
 *   variant="compact" → isotipo + NÍTIDO, sin eslogan (barra de navegación y pie)
 *   on="dark"  → versión para fondos oscuros (la del sitio)
 *   on="light" → versión para fondo blanco (solo existe para "lockup")
 * Archivos recortados y con fondo transparente en /public/brand. Sin sombras,
 * brillos ni contornos sobre el logo.
 */
const LOGOS = {
  lockup: {
    dark: { src: "/brand/logo-horizontal-sobre-oscuro.webp", width: 1292, height: 297 },
    light: { src: "/brand/logo-horizontal-sobre-claro.webp", width: 1287, height: 295 },
    alt: "Nítido, agencia creativa audiovisual",
  },
  compact: {
    dark: { src: "/brand/logo-nav-sobre-oscuro.webp", width: 737, height: 160 },
    alt: "Nítido",
  },
};

export default function BrandLogo({ variant = "lockup", on = "dark", className = "", ...rest }) {
  const logo = LOGOS[variant];
  const file = logo[on] ?? logo.dark;
  return (
    <img alt={logo.alt}
      src={file.src}
      width={file.width}
      height={file.height}
      decoding="async"
      className={className}
      {...rest}
    />
  );
}
