import { Link } from "react-router-dom";
import { portfolioCategories, categoryPath } from "../../data/content";

const TONES = [
  "from-nitido-purple-deep to-nitido-purple",
  "from-nitido-red to-nitido-purple-deep",
  "from-nitido-purple to-nitido-red",
];

function CategoryCard({ category, index }) {
  const { slug, kicker, title, cover, textInCover, items } = category;
  // Con textInCover el título ya viene dentro de la imagen: se oculta a la vista, no a lectores de pantalla
  const textClass = textInCover ? "sr-only" : "";
  return (
    <Link
      to={categoryPath(slug)}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-nitido-purple"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.07]">
        {cover ? (
          <img alt=""
            data-parallax="0.15"
            src={cover}
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            className="absolute inset-x-0 -top-[7%] h-[114%] w-full max-w-none object-cover"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${TONES[index % TONES.length]}`} />
        )}
      </div>
      <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/20" />
      <span className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
        <span className={`text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs ${textClass}`}>
          {kicker}
        </span>
        <span className={`mt-1 font-display text-xl uppercase leading-none text-white [overflow-wrap:anywhere] sm:text-2xl lg:text-[1.6rem] ${textClass}`}>
          {title}
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-3 text-center text-xs font-semibold text-white/90 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {items.length ? "Ver proyectos →" : "Próximamente"}
      </span>
    </Link>
  );
}

/** Cuadrícula de las categorías del portfolio (estructura pedida por el cliente en Canva). */
export default function PortfolioGrid() {
  return (
    <section aria-label="Categorías del portfolio" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <ul data-stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {portfolioCategories.map((category, i) => (
          <li key={category.slug}>
            <CategoryCard category={category} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
