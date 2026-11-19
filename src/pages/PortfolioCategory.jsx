import { Link, Navigate, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import { brand, portfolioCategories, categoryPath, routes } from "../data/content";
import CornerShards from "../components/ui/CornerShards";
import Button from "../components/ui/Button";
import GalleryMedia from "../components/ui/GalleryMedia";
import CTABand from "../components/sections/CTABand";

/** Página de una categoría del portfolio: /portfolio/<slug> (datos en content.js). */
export default function PortfolioCategory() {
  const { slug } = useParams();
  const index = portfolioCategories.findIndex((c) => c.slug === slug);
  const category = portfolioCategories[index];
  usePageTitle(category ? `${category.kicker} ${category.title}` : "Portfolio");
  if (!category) return <Navigate to={routes.portfolio} replace />;

  const total = portfolioCategories.length;
  const prev = portfolioCategories[(index - 1 + total) % total];
  const next = portfolioCategories[(index + 1) % total];

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-surface to-black pt-32 pb-12 sm:pt-40 sm:pb-16">
        <CornerShards position="top-left" className="opacity-50" data-parallax="0.6" />
        <CornerShards position="bottom-right" className="opacity-30" data-parallax="0.9" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Link
            to={routes.portfolio}
            data-intro
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span> Portfolio
          </Link>
          <h1 className="mt-6 font-display uppercase leading-[0.95] text-5xl sm:text-7xl">
            <span data-intro className="mb-3 block font-body text-sm font-semibold tracking-[0.2em] text-white/80 sm:text-base">
              {category.kicker}
            </span>
            {category.title.split(" ").map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-[0.12em] my-[-0.12em] align-bottom">
                <span
                  data-word
                  className="inline-block bg-linear-to-r from-nitido-purple-deep via-nitido-purple to-nitido-red bg-clip-text text-transparent"
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
          {category.description && (
            <p data-intro className="mt-6 max-w-xl text-lg text-white/75 text-balance">
              {category.description}
            </p>
          )}
        </div>
      </section>

      <section aria-label={`Proyectos: ${category.kicker} ${category.title}`} className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {category.items.length ? (
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {category.items.map((item) => (
              <li key={item.src}>
                <figure
                  data-reveal="mask"
                  className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10"
                >
                  <GalleryMedia item={item} />
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 px-6 py-16 text-center">
            <p className="mx-auto max-w-md text-white/65">
              Estamos preparando los proyectos de esta categoría. Si quieres uno así para tu marca, escríbenos.
            </p>
            <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer" className="mt-6">
              Escribinos por WhatsApp
            </Button>
          </div>
        )}
      </section>

      <nav aria-label="Otras categorías" className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 sm:grid-cols-2 sm:px-8">
        {[
          { c: prev, label: "Anterior", align: "text-left" },
          { c: next, label: "Siguiente", align: "sm:text-right" },
        ].map(({ c, label, align }) => (
          <Link
            key={label}
            to={categoryPath(c.slug)}
            className={`rounded-2xl border border-white/10 px-6 py-5 transition-colors hover:border-nitido-purple ${align}`}
          >
            <span className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</span>
            <span className="mt-1 block font-display text-xl uppercase">
              {c.kicker} {c.title}
            </span>
          </Link>
        ))}
      </nav>

      <CTABand title="¿Querés un proyecto como estos?" subtitle="Contanos qué necesitas y armamos la propuesta." />
    </>
  );
}
