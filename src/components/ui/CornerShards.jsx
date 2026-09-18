// Réplica del motivo gráfico de formas diagonales que aparece en todas las
// piezas de marca (esquinas superior-izquierda e inferior-derecha).
export default function CornerShards({ position = "top-left", className = "" }) {
  const isTop = position === "top-left";
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${isTop ? "top-0 left-0" : "bottom-0 right-0"} ${className}`}
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      style={isTop ? {} : { transform: "rotate(180deg)" }}
    >
      <polygon points="0,0 160,0 60,120 0,120" fill="var(--color-nitido-purple-deep)" opacity="0.85" />
      <polygon points="40,0 220,0 130,90 90,90" fill="var(--color-nitido-red)" opacity="0.5" />
      <polygon points="0,140 90,140 30,220 0,220" fill="var(--color-nitido-red)" opacity="0.35" />
    </svg>
  );
}
