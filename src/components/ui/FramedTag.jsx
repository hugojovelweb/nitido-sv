export default function FramedTag({ children, className = "" }) {
  return (
    <div
      className={`inline-block rounded-lg border border-nitido-red/70 px-5 py-2.5 shadow-[0_0_24px_-6px_var(--color-nitido-red)] ${className}`}
    >
      <span className="font-body font-semibold text-base sm:text-lg">{children}</span>
    </div>
  );
}
