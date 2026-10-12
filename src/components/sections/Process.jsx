import { brand, process } from "../../data/content";
import Button from "../ui/Button";

export default function Process() {
  return (
    <section id="proceso" className="relative bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <h2 data-reveal="up" className="font-display text-5xl uppercase sm:text-6xl">Proceso</h2>
        <p className="mt-2 font-body text-white/70">
          Así trabajamos <span className="text-nitido-red font-semibold">con vos</span>.
        </p>

        <ol className="mt-12">
          {process.map((item, i) => (
            <li key={item.step} data-reveal="up" className="relative flex gap-6 pb-10 last:pb-0">
              {i < process.length - 1 && (
                <span
                  aria-hidden="true"
                  data-draw
                  className="absolute left-6 top-12 h-full w-0.5 bg-nitido-red/60"
                />
              )}
              <span data-pop className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-nitido-purple-deep to-nitido-purple font-display text-xl">
                {item.step}
              </span>
              <span className="pt-2.5 font-body text-lg font-semibold sm:text-xl">
                {item.title}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6 text-center sm:text-left">
          <p className="font-body text-white/75 mb-4">¿Tenés un proyecto en mente?</p>
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer">
            Escribinos
          </Button>
        </div>
      </div>
    </section>
  );
}
