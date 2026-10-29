import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { brand, nav, routes } from "../../data/content";
import Button from "../ui/Button";
import BrandLogo from "../ui/BrandLogo";

const linkClass = ({ isActive }) =>
  `font-body text-sm transition-colors ${isActive ? "text-white" : "text-white/75 hover:text-white"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to={routes.home} className="flex items-center gap-2.5" aria-label={`${brand.name} — inicio`}>
          <BrandLogo variant="compact" alt="" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 font-body text-sm text-white/75 hover:text-white transition-colors"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-56 rounded-xl border border-white/10 bg-black shadow-xl">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            `block px-4 py-3 text-sm first:rounded-t-xl last:rounded-b-xl transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.href} to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            )
          )}
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
          className="md:hidden border-t border-white/10 bg-black px-5 py-4 flex flex-col gap-1"
          aria-label="Navegación móvil"
        >
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-white/5 last:border-none">
                <button
                  className="flex w-full items-center justify-between py-3 font-body text-base text-white/85"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  {item.label}
                  <span className={`transition-transform ${mobileServicesOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {mobileServicesOpen && (
                  <div className="pb-2 pl-3">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-white/70"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-body text-base text-white/85 last:border-none"
              >
                {item.label}
              </NavLink>
            )
          )}
          <Button as="a" href={brand.whatsappLink} target="_blank" rel="noreferrer" className="mt-3 w-full">
            Escribinos
          </Button>
        </nav>
      )}
    </header>
  );
}
