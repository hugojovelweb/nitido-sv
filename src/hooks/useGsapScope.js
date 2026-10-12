import { useEffect } from "react";
import { loadGsap } from "../lib/gsap";

/**
 * Ejecuta `setup` dentro de gsap.matchMedia(): solo corre si el usuario NO pidió
 * movimiento reducido, y todo (tweens, ScrollTriggers, estilos inline) se
 * revierte solo al limpiar el efecto o cambiar de ruta.
 * Si GSAP no carga, el contenido queda visible (nada se oculta por CSS).
 */
export default function useGsapScope(setup, scopeRef, deps = []) {
  useEffect(() => {
    let cancelled = false;
    let mm;
    loadGsap()
      .then(({ gsap, ScrollTrigger }) => {
        const root = scopeRef.current;
        if (cancelled || !root) return;
        mm = gsap.matchMedia(root);
        mm.add(
          {
            motion: "(prefers-reduced-motion: no-preference)",
            desktop: "(min-width: 768px)",
            finePointer: "(hover: hover) and (pointer: fine)",
          },
          (ctx) => {
            if (!ctx.conditions.motion) return;
            return setup({ gsap, ScrollTrigger, root, conditions: ctx.conditions });
          }
        );
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      mm?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
