import { portfolioItems } from "../../data/content";
import MediaSlot from "../ui/MediaSlot";

const SLOTS = 6;

/**
 * "Reelfolio": tira horizontal de proyectos.
 * Escritorio + movimiento permitido → se fija en pantalla y el scroll vertical
 * la desplaza en horizontal (lib/motion.js, data-reel).
 * Móvil / movimiento reducido → tira con scroll nativo y snap.
 */
export default function PortfolioReel() {
  const items = portfolioItems.length ? portfolioItems : Array.from({ length: SLOTS }, () => null);

  return (
    <section
      data-reel
      aria-label="Proyectos de Nítido"
      className="relative overflow-hidden bg-black pt-20 pb-10 md:h-[100svh] md:py-0"
    >
      <ReelBackdrop />
      <div className="relative z-10 flex h-full flex-col justify-center md:pt-16">
        <div className="mb-6 flex items-end justify-between px-5 sm:px-8">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-white/60">
            <span data-reel-count className="text-nitido-white">01</span>
            {" / "}
            {String(items.length).padStart(2, "0")}
          </p>
          <div className="hidden h-0.5 w-40 bg-white/15 md:block">
            <div data-reel-bar className="h-full origin-left scale-x-0 bg-gradient-to-r from-nitido-purple-deep to-nitido-red" />
          </div>
        </div>

        <ul
          data-reel-track
          className="flex gap-5 overflow-x-auto px-5 pb-4 snap-x snap-mandatory sm:px-8 md:gap-8 md:overflow-visible md:pb-0 md:snap-none"
        >
          {items.map((item, i) => (
            <li
              key={item?.title ?? i}
              data-reel-card
              className="group relative shrink-0 snap-center basis-[78vw] sm:basis-[48vw] md:basis-[30vw]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 transition-transform duration-500 group-hover:scale-[0.98]">
                <MediaSlot item={item} index={i} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="mt-4 flex items-end gap-4 overflow-hidden">
                <span data-reel-index className="font-display text-4xl leading-none text-nitido-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold">{item?.title ?? "Tu marca, aquí"}</p>
                  <p className="text-sm text-white/55">{item?.category ?? "Producción audiovisual"}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Rótulo gigante de fondo, detrás de las tarjetas
function ReelBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="marquee pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap font-display text-[22vw] uppercase leading-none outline-text"
    >
      <div className="marquee-track inline-flex">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="mx-10 inline-block">Nítido ✦ Reel</span>
        ))}
      </div>
    </div>
  );
}
