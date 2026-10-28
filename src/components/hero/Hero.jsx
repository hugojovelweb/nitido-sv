import { Link } from "react-router-dom";
import { brand, routes } from "../../data/content";
import Button from "../ui/Button";
import CornerShards from "../ui/CornerShards";
import BrandLogo from "../ui/BrandLogo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <CornerShards position="top-left" className="opacity-70" data-parallax="0.6" />
      <CornerShards position="bottom-right" className="opacity-40" data-parallax="0.9" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-8 text-center">
        {/* El logo (nombre + eslogan) es el título principal: va dentro del h1 para
            conservar la jerarquía de encabezados sin repetir texto visible. */}
        <h1 className="mb-10 sm:mb-12">
          <BrandLogo
            on="dark"
            data-logo
            fetchPriority="high"
            className="mx-auto w-[min(94vw,960px)]"
          />
        </h1>

        <p
          data-intro
          className="mx-auto mt-6 max-w-xl text-balance font-body text-base text-white/75 sm:text-lg"
        >
          Producción audiovisual, contenido y estrategia digital para marcas que
          quieren conectar y crecer.
        </p>

        <div
          data-intro
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer" data-magnetic>
            Escribinos por WhatsApp
          </Button>
          <Button as={Link} to={routes.serviciosCreativos} variant="outline" data-magnetic>
            Ver servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
