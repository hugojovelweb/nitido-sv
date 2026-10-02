import { Link } from "react-router-dom";
import { routes } from "../../data/content";
import GradientHeading from "../ui/GradientHeading";

const cards = [
  {
    to: routes.serviciosCreativos,
    title: "Servicios Creativos",
    description: "Producción audiovisual, fotografía, tomas de dron, edición y dirección creativa.",
  },
  {
    to: routes.serviciosDigitales,
    title: "Servicios Digitales",
    description: "Branding, community management, campañas, páginas web e implementación de CRM.",
  },
];

export default function ServiciosTeaser() {
  return (
    <section id="servicios" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
      <GradientHeading text="Servicios" className="text-4xl sm:text-5xl" />
      <p className="mt-3 max-w-md text-white/70">
        Soluciones creativas y digitales para marcas que quieren conectar y crecer.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="group rounded-2xl border border-white/10 bg-surface p-7 transition-colors hover:border-nitido-purple"
          >
            <h3 className="font-display text-2xl uppercase sm:text-3xl">{card.title}</h3>
            <p className="mt-2 text-white/65">{card.description}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-nitido-purple">
              Ver más
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
