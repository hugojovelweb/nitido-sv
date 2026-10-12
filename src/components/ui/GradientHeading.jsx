/**
 * Encabezado con el degradado oficial de marca (morado → rojo), igual al
 * wordmark "NÍTIDO" del brand board. Reemplaza el tratamiento de letras
 * multicolor (SplitHeading) donde el cliente pidió una mezcla más limpia
 * (Servicios, Reviews, Servicios Creativos/Digitales, "El detalle").
 */
export default function GradientHeading({ text, as: Component = "h2", className = "", ...rest }) {
  return (
    <Component
      {...rest}
      // inline-block es clave: sin esto el degradado se reparte sobre el
      // ancho completo del bloque (contenedor), no sobre el texto, y el
      // resultado se ve casi todo morado sin llegar al rojo. Con
      // inline-block, el fondo se ajusta al ancho real del texto — igual
      // que el span de "nítido" en el Hero.
      className={`inline-block font-display uppercase leading-none text-balance bg-gradient-to-r from-nitido-purple-deep via-nitido-purple to-nitido-red bg-clip-text text-transparent ${className}`}
    >
      {text}
    </Component>
  );
}
