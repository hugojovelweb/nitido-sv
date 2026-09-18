export default function SplitHeading({ text, as: Component = "h2", className = "" }) {
  return (
    <Component className={`split-letters font-display uppercase leading-none ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </Component>
  );
}
