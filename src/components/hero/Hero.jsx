import { Link } from "react-router-dom";
import { brand, routes } from "../../data/content";
import Button from "../ui/Button";
import CornerShards from "../ui/CornerShards";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <CornerShards position="top-left" className="opacity-70" />
      <CornerShards position="bottom-right" className="opacity-40" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <img src="/brand/isotipo-white.png" alt="Nítido" className="mx-auto mb-8 h-14 w-auto animate-fade-up sm:h-16" />

        <h1
          className="animate-fade-up font-display uppercase leading-[0.92] text-balance text-5xl sm:text-6xl md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Hagamos que se vea{" "}
          <span className="bg-gradient-to-r from-nitido-purple-deep via-nitido-purple to-nitido-red bg-clip-text text-transparent">
            nítido
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-xl text-balance font-body text-base text-white/75 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Producción audiovisual, contenido y estrategia digital para marcas que
          quieren conectar y crecer.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer">
            Escribinos por WhatsApp
          </Button>
          <Button as={Link} to={routes.serviciosCreativos} variant="outline">
            Ver servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
