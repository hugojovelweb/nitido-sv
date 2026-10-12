import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { loadGsap } from "../../lib/gsap";

/**
 * Cortina con el degradado de marca que barre la pantalla al cambiar de
 * página (no en la carga inicial ni con movimiento reducido).
 */
export default function PageWipe() {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let tl;
    const el = ref.current;
    loadGsap().then(({ gsap }) => {
      if (cancelled || !el) return;
      tl = gsap.timeline();
      tl.set(el, { display: "flex", yPercent: 0 })
        .from(el.querySelector("img"), { scale: 0.4, rotate: -20, opacity: 0, duration: 0.5, ease: "back.out(2)" })
        .to(el, { yPercent: -100, duration: 0.85, ease: "expo.inOut" }, "+=0.1")
        .set(el, { display: "none" });
    });
    return () => {
      cancelled = true;
      tl?.kill();
      if (el) el.style.display = "none";
    };
  }, [pathname]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden items-center justify-center bg-gradient-to-br from-nitido-purple-deep via-nitido-purple to-nitido-red"
    >
      <img src="/brand/isotipo-white.png" alt="" className="h-20 w-auto" />
    </div>
  );
}
