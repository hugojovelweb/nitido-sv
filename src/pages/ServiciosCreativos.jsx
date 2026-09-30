import usePageTitle from "../hooks/usePageTitle";
import { creativePillars, creativeServices } from "../data/content";
import GradientHero from "../components/sections/GradientHero";
import PillarsGrid from "../components/sections/PillarsGrid";
import SplitHeading from "../components/ui/SplitHeading";
import ServiceList from "../components/sections/ServiceList";
import CTABand from "../components/sections/CTABand";

export default function ServiciosCreativos() {
  usePageTitle("Servicios Creativos");
  return (
    <>
      <div className="pt-16">
        <GradientHero
          eyebrow="Nuestra oferta"
          title="Contenido que"
          accentWord="resalta."
          subtitle="Producción audiovisual con intención, calidad visual y dirección creativa en cada pieza."
        />
      </div>

      <PillarsGrid
        title="Servicios Creativos"
        subtitle="Soluciones creativas para marcas que quieren conectar y crecer."
        items={creativePillars}
      />

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <SplitHeading text="El detalle" className="text-3xl sm:text-4xl" />
        <div className="mt-8">
          <ServiceList items={creativeServices} />
        </div>
      </section>

      <CTABand
        title="¿Listo para grabar tu próxima pieza?"
        subtitle="Contanos qué necesitas y armamos la propuesta."
      />
    </>
  );
}
