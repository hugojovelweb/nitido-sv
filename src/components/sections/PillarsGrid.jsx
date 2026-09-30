import SplitHeading from "../ui/SplitHeading";
import PillarIcon from "../ui/PillarIcon";

export default function PillarsGrid({ title, subtitle, items }) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SplitHeading text={title} className="text-4xl sm:text-5xl" />
        {subtitle && (
          <p className="mt-3 max-w-xl text-white/70">{subtitle}</p>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/60 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-nitido-purple/15 text-nitido-purple">
                <PillarIcon name={item.icon} />
              </span>
              <h3 className="mt-4 font-display text-xl uppercase">{item.title}</h3>
              <p className="mt-2 text-sm text-white/65">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
