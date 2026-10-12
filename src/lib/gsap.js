// Carga diferida de GSAP + ScrollTrigger (ADR-007). Se importa dinámicamente
// para que vaya en su propio chunk y no pese en el primer render.
let cache;

export function loadGsap() {
  cache ??= Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
    ([g, s]) => {
      const gsap = g.gsap || g.default;
      const ScrollTrigger = s.ScrollTrigger || s.default;
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    }
  );
  return cache;
}
