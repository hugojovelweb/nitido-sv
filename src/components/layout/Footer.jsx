import { Link } from "react-router-dom";
import { brand, nav, socials, routes } from "../../data/content";
import SocialIcon from "../ui/SocialIcon";
import BrandLogo from "../ui/BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  const flatLinks = nav.flatMap((item) => (item.children ? item.children : [item]));

  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link to={routes.home} className="flex items-center gap-2.5">
          <BrandLogo variant="compact" className="h-8 w-auto" />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Enlaces del pie de página">
          {flatLinks.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm text-white/60 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.confirmed ? "_blank" : undefined}
              rel={s.confirmed ? "noreferrer" : undefined}
              aria-label={s.name}
              className={`transition-colors ${s.confirmed ? "text-white/60 hover:text-white" : "text-white/20 cursor-not-allowed"}`}
              onClick={(e) => !s.confirmed && e.preventDefault()}
            >
              <SocialIcon name={s.name} className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/40">
        © {year} {brand.name}. Todos los derechos reservados.
        <br /> <a href="https://hugojovelweb.tech/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">Hugo Jovel Web.</a>  
      </p>
    </footer>
  );
}
