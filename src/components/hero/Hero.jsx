import { Link } from "react-router-dom";
import { brand, routes } from "../../data/content";
import Button from "../ui/Button";
import CornerShards from "../ui/CornerShards";
import AnimatedWords from "../ui/AnimatedWords";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <CornerShards position="top-left" className="opacity-70" data-parallax="0.6" />
      <CornerShards position="bottom-right" className="opacity-40" data-parallax="0.9" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <img src="/brand/isotipo-white.png" alt="Nítido" data-iso
          className="mx-auto mb-8 h-14 w-auto sm:h-16" />

        <h1
          className="font-display uppercase leading-[0.92] text-balance text-5xl sm:text-6xl md:text-7xl"
        >
          <AnimatedWords text="Hagamos que se vea" />
          <span className="inline-block overflow-hidden py-[0.12em] -my-[0.12em] align-bottom">
            <span
              data-word
              className="inline-block bg-gradient-to-r from-nitido-purple-deep via-nitido-purple to-nitido-red bg-clip-text text-transparent"
            >
              nítido
            </span>
          </span>
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
