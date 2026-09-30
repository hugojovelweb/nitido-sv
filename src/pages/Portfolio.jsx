import usePageTitle from "../hooks/usePageTitle";
import { portfolioItems } from "../data/content";
import CornerShards from "../components/ui/CornerShards";
import CTABand from "../components/sections/CTABand";

export default function Portfolio() {
  usePageTitle("Portfolio");
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-black pt-32 pb-20 text-center sm:pt-40 sm:pb-24">
        <CornerShards position="top-left" className="opacity-50" />
        <CornerShards position="bottom-right" className="opacity-30" />
        <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-nitido-purple">
            Nuestro trabajo
          </p>
          <h1 className="font-display uppercase leading-[0.95] text-5xl text-balance sm:text-6xl">
            El arte de contar,{" "}
            <span className="bg-gradient-to-r from-nitido-purple-deep to-nitido-red bg-clip-text text-transparent">
              en cada pixel
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-white/70 text-balance">
            Contenido que no solo se ve nítido, sino que impulsa tu marca.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        {portfolioItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 px-6 py-16 text-center">
            <p className="font-body text-white/60">
              Estamos preparando nuestro portafolio. Muy pronto vas a ver aquí
              nuestros proyectos más recientes.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <figure key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-surface">
                {item.mediaType === "video" ? (
                  <video src={item.mediaUrl} className="aspect-video w-full object-cover" controls />
                ) : (
                  <img src={item.mediaUrl} alt={item.title} className="aspect-video w-full object-cover" />
                )}
                <figcaption className="p-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-white/55">{item.category}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      <CTABand
        title="¿Querés ver tu marca aquí?"
        subtitle="Hablemos de tu próximo proyecto."
      />
    </>
  );
}
