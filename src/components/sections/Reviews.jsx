import { reviews } from "../../data/content";
import SplitHeading from "../ui/SplitHeading";

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 text-nitido-purple" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${i < rating ? "" : "opacity-25"}`} aria-hidden="true">
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.7 1.1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
      <SplitHeading text="Reviews" className="text-4xl sm:text-5xl" />
      <p className="mt-3 max-w-md text-white/70">Lo que dicen las marcas que ya trabajaron con nosotros.</p>

      {reviews.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-white/15 px-6 py-12 text-center">
          <p className="font-body text-white/60">
            Todavía no tenemos reseñas publicadas aquí — muy pronto compartiremos lo que
            nuestros clientes dicen de nosotros.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-white/10 bg-surface p-6">
              <Stars rating={r.rating} />
              <blockquote className="mt-3 text-white/80">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.name}
                {r.role && <span className="font-normal text-white/50"> — {r.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
