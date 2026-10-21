import { serviciosCreativosMedia } from "../../data/content";

/**
 * Mosaico de fotos reales con revelado por máscara y parallax interno
 * (atributos data-* de lib/motion.js). La imagen es más alta que su marco
 * para tener recorrido de parallax sin dejar bordes vacíos.
 */
export default function MediaMosaic() {
  return (
    <section aria-label="Trabajo reciente" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-5 sm:grid-cols-3">
        {serviciosCreativosMedia.map((m, i) => (
          <figure
            key={m.src}
            data-reveal="mask"
            className={`relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 ${i === 1 ? "sm:mt-12" : ""}`}
          >
            <img alt={m.alt}
              data-parallax="0.25"
              src={m.src}
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
              className="absolute inset-x-0 -top-[7%] h-[114%] w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
