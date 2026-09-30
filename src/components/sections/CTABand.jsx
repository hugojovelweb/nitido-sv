import { brand } from "../../data/content";
import Button from "../ui/Button";

export default function CTABand({
  title = "¿Listo para un resultado nítido?",
  subtitle = "Hablemos de cómo Nítido puede transformar la presencia digital de tu marca.",
}) {
  return (
    <section className="border-t border-white/10 bg-black py-14 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl text-balance">
            {title}
          </h2>
          {subtitle && <p className="mt-2 max-w-md text-white/65">{subtitle}</p>}
        </div>
        <div className="flex shrink-0 gap-3">
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer">
            Hablemos de tu marca
          </Button>
        </div>
      </div>
    </section>
  );
}
