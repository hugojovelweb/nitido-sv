import { creativeServices, digitalServices } from "../../data/content";
import SplitHeading from "../ui/SplitHeading";
import ServiceList from "./ServiceList";

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-16 sm:gap-20">
        <div>
          <SplitHeading
            text="Servicios Creativos"
            className="text-4xl sm:text-5xl"
          />
          <p className="mt-3 max-w-md text-white/70">
            Soluciones creativas para marcas que quieren conectar y crecer.
          </p>
          <div className="mt-8">
            <ServiceList items={creativeServices} />
          </div>
        </div>

        <div>
          <SplitHeading
            text="Servicios Digitales"
            className="text-4xl sm:text-5xl"
          />
          <p className="mt-3 max-w-md text-white/70">
            Soluciones estratégicas para fortalecer y hacer crecer tu marca.
          </p>
          <div className="mt-8">
            <ServiceList items={digitalServices} />
          </div>
        </div>
      </div>
    </section>
  );
}
