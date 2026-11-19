import usePageTitle from "../hooks/usePageTitle";
import CornerShards from "../components/ui/CornerShards";
import AnimatedWords from "../components/ui/AnimatedWords";
import Marquee from "../components/ui/Marquee";
import PortfolioGrid from "../components/sections/PortfolioGrid";
import CTABand from "../components/sections/CTABand";

export default function Portfolio() {
  usePageTitle("Portfolio");
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-black pt-32 pb-16 text-center sm:pt-40 sm:pb-20">
        <CornerShards position="top-left" className="opacity-50" data-parallax="0.6" />
        <CornerShards position="bottom-right" className="opacity-30" data-parallax="0.9" />
        <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
          <p data-intro className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-nitido-purple">
            Nuestro trabajo
          </p>
          <h1 className="font-display uppercase leading-[0.95] text-5xl text-balance sm:text-6xl">
            <AnimatedWords text="El arte de contar," />
            <span className="inline-block overflow-hidden py-[0.12em] -my-[0.12em] align-bottom">
              <span
                data-word
                className="inline-block bg-gradient-to-r from-nitido-purple-deep to-nitido-red bg-clip-text text-transparent"
              >
                en cada pixel
              </span>
            </span>
          </h1>
          <p data-intro className="mx-auto mt-6 max-w-lg text-white/70 text-balance">
            Contenido que no solo se ve nítido, sino que impulsa tu marca.
          </p>
        </div>
      </section>

      <Marquee className="border-y border-white/10 py-4 text-2xl text-white/80 sm:text-3xl" />

      <PortfolioGrid />

      <CTABand title="¿Querés ver tu marca aquí?" subtitle="Hablemos de tu próximo proyecto." />
    </>
  );
}
