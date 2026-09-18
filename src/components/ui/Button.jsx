const variants = {
  primary:
    "bg-gradient-to-r from-nitido-purple-deep to-nitido-purple text-white hover:brightness-110 active:brightness-95",
  outline:
    "border-2 border-nitido-red text-white hover:bg-nitido-red/10 active:bg-nitido-red/20",
  ghost:
    "text-white/80 hover:text-white",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body font-semibold text-sm sm:text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
