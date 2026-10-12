import { brand } from "../../data/content";
import Button from "../ui/Button";

/**
 * Réplica del patrón "full-bleed gradient hero" pedido en Nitido_com.docx
 * (imagen 3), con la corrección explícita del cliente: "Todas las letras
 * blancas y solo Resalta en Negro" — texto blanco, palabra de énfasis en negro.
 */
export default function GradientHero({ eyebrow, title, accentWord, subtitle, ctaLabel = "Escribinos" }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nitido-red via-fuchsia-700 to-nitido-purple py-24 text-center sm:py-32">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        {eyebrow && (
          <p data-intro className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 data-intro className="font-display uppercase leading-[0.95] text-5xl text-white text-balance sm:text-6xl">
          {title}{" "}
          {accentWord && <span className="text-black">{accentWord}</span>}
        </h1>
        {subtitle && (
          <p data-intro className="mx-auto mt-6 max-w-xl text-balance font-body text-white/90">
            {subtitle}
          </p>
        )}
        <div data-intro className="mt-8">
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer" className="!bg-black !bg-none text-white" data-magnetic>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
