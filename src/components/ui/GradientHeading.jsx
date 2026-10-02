/**
 * Encabezado con el degradado oficial de marca (morado → rojo), igual al
 * wordmark "NÍTIDO" del brand board. Reemplaza el tratamiento de letras
 * multicolor (SplitHeading) donde el cliente pidió una mezcla más limpia
 * (Servicios, Reviews, Servicios Creativos/Digitales, "El detalle").
 */
export default function GradientHeading({ text, as: Component = "h2", className = "" }) {
  return (
    <Component
      className={`font-display uppercase leading-none bg-gradient-to-r from-nitido-purple-deep via-nitido-purple to-nitido-red bg-clip-text text-transparent ${className}`}
    >
      {text}
    </Component>
  );
}
