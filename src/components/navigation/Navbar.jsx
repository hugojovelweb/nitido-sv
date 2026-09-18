import { useState } from "react";
import { brand, nav } from "../../data/content";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${brand.name} — inicio`}>
          <img src="/brand/isotipo-white.png" alt="" className="h-8 w-auto" width="32" height="24" />
          <span className="font-display text-xl tracking-wide">{brand.name.toUpperCase()}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-white/75 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer" className="!py-2.5 !px-5 text-sm">
            Escribinos
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-white/10 bg-black px-5 py-4 flex flex-col gap-4"
          aria-label="Navegación móvil"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-body text-base text-white/85"
            >
              {item.label}
            </a>
          ))}
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer" className="mt-1 w-full">
            Escribinos
          </Button>
        </nav>
      )}
    </header>
  );
}
