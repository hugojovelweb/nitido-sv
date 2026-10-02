import usePageTitle from "../hooks/usePageTitle";
import { digitalPillars, digitalServices } from "../data/content";
import GradientHero from "../components/sections/GradientHero";
import PillarsGrid from "../components/sections/PillarsGrid";
import GradientHeading from "../components/ui/GradientHeading";
import ServiceList from "../components/sections/ServiceList";
import CTABand from "../components/sections/CTABand";

export default function ServiciosDigitales() {
  usePageTitle("Servicios Digitales");
  return (
    <>
      <div className="pt-16">
        <GradientHero
          eyebrow="Nuestra oferta"
          title="Estrategia que"
          accentWord="crece."
          subtitle="Combinamos identidad de marca con estrategia digital directa para resultados medibles."
        />
      </div>

      <PillarsGrid
        title="Servicios Digitales"
        subtitle="Soluciones estratégicas para fortalecer y hacer crecer tu marca."
        items={digitalPillars}
      />

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <GradientHeading text="El detalle" className="text-3xl sm:text-4xl" />
        <div className="mt-8">
          <ServiceList items={digitalServices} />
        </div>
      </section>

      <CTABand
        title="¿Listo para hacer crecer tu marca?"
        subtitle="Contanos tu objetivo y armamos la estrategia."
      />
    </>
  );
}
