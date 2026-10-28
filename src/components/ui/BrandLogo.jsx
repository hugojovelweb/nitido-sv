/**
 * Logo horizontal con eslogan ("Agencia creativa audiovisual").
 * Elige la versión según el fondo donde se coloca:
 *   on="dark"  → texto blanco (fondos negro, morado, rojo; es el caso del sitio)
 *   on="light" → texto negro (fondo blanco)
 * Archivos ya recortados y con fondo transparente en /public/brand.
 * No se le aplican sombras, brillos ni contornos (regla de la skill de marca).
 */
const SRC = {
  dark: "/brand/logo-horizontal-sobre-oscuro.webp",
  light: "/brand/logo-horizontal-sobre-claro.webp",
};

export default function BrandLogo({ on = "dark", className = "", ...rest }) {
  return (
    <img alt="Nítido, agencia creativa audiovisual"
      src={SRC[on]}
      width="1292"
      height="297"
      decoding="async"
      className={`h-auto ${className}`}
      {...rest}
    />
  );
}
