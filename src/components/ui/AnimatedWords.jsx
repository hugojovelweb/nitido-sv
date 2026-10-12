import { Fragment } from "react";

/**
 * Divide un texto en palabras con máscara para que cada una "suba" al entrar
 * (animación en lib/motion.js, atributo data-word). El padding negativo evita
 * recortar tildes (Í) con line-height ajustado.
 */
export default function AnimatedWords({ text }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      <span className="inline-block overflow-hidden py-[0.12em] -my-[0.12em] align-bottom">
        <span data-word className="inline-block will-change-transform">{word}</span>
      </span>{" "}
    </Fragment>
  ));
}
