/**
 * Rótulo gigante que corre sin parar (solo transform, CSS puro).
 * El texto se duplica para que el bucle sea continuo.
 */
export default function Marquee({ text = "Hagamos que se vea nítido", className = "" }) {
  const item = (
    <span className="mx-8 inline-block">
      {text} <span aria-hidden="true">✦</span>
    </span>
  );
  return (
    <div aria-hidden="true" className={`marquee overflow-hidden whitespace-nowrap font-display uppercase ${className}`}>
      <div className="marquee-track inline-flex">
        {item}
        {item}
        {item}
        {item}
      </div>
    </div>
  );
}
