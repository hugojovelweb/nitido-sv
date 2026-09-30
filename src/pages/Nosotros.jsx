import usePageTitle from "../hooks/usePageTitle";
import { nosotros } from "../data/content";
import SplitHeading from "../components/ui/SplitHeading";
import CornerShards from "../components/ui/CornerShards";
import CTABand from "../components/sections/CTABand";

export default function Nosotros() {
  usePageTitle("Nosotros");
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <CornerShards position="top-left" className="opacity-60" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <SplitHeading text="Nosotros" className="text-5xl sm:text-6xl" />
          <p className="mt-6 max-w-xl text-lg text-white/75 text-balance">
            {nosotros.intro}
          </p>

          {(!nosotros.missionDefined || !nosotros.visionDefined || !nosotros.valuesDefined) && (
            <div className="mt-10 rounded-xl border border-dashed border-white/15 px-6 py-5 text-sm text-white/50">
              Esta sección está lista para misión, visión y valores oficiales de
              Nítido — se agregarán en cuanto el cliente los confirme.
            </div>
          )}
        </div>
      </section>
      <CTABand
        title="¿Querés conocer más de nosotros?"
        subtitle="Escríbenos y conversemos sobre tu proyecto."
      />
    </>
  );
}
