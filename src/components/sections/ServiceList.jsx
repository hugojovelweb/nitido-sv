export default function ServiceList({ items }) {
  return (
    <ul data-stagger className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item) => (
        <li key={item.title} className="group py-7 transition-[padding] duration-300 hover:pl-3 sm:py-8">
          <h3 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-2 max-w-lg font-body text-white/70">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
