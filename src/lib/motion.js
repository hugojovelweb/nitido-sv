/**
 * Sistema de movimiento de Nítido (ADR-007).
 * Se activa con atributos data-* para que los componentes no dependan de GSAP:
 *   data-word            palabra que sube con máscara (intro, ver AnimatedWords)
 *   data-intro           bloque que entra al cargar la página
 *   data-iso             isotipo: entra con giro y rebote
 *   data-logo            logo horizontal: se revela de izquierda a derecha
 *   data-reveal="up"     entra con fade + desplazamiento al hacer scroll
 *   data-reveal="mask"   se revela con clip-path (izquierda → derecha)
 *   data-stagger         sus hijos directos entran en cascada
 *   data-draw            línea que se dibuja con el scroll
 *   data-pop             elemento que aparece escalando
 *   data-parallax="n"    desplazamiento vertical con el scroll (n = fuerza)
 *   data-magnetic        botón que sigue al cursor (solo puntero fino)
 *   data-reel            Portfolio: scroll horizontal fijado (solo escritorio)
 * Solo se anima transform, opacity y clip-path (ver docs/adr/ADR-007).
 */
import { isSplashActive, onSplashEnd } from "./splash";

export function initPage({ gsap, ScrollTrigger, root, conditions }) {
  const q = (selector) => gsap.utils.toArray(selector, root);
  const cleanups = [];
  const trigger = (el, start = "top 88%") => ({ trigger: el, start, once: true });

  // --- Entrada de página (above the fold) ---
  // Si la intro de video está activa, la línea de tiempo espera a que termine.
  const waiting = isSplashActive();
  const intro = gsap.timeline({ paused: waiting });
  if (waiting) cleanups.push(onSplashEnd(() => intro.play()));

  const words = q("[data-word]");
  if (words.length) {
    intro.from(words, { yPercent: 120, rotate: 5, duration: 1.1, ease: "expo.out", stagger: 0.08 }, 0.1);
  }
  q("[data-iso]").forEach((el) =>
    intro.from(el, { scale: 0.3, rotate: -28, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" }, 0)
  );
  q("[data-logo]").forEach((el) =>
    intro.fromTo(
      el,
      { clipPath: "inset(0 100% 0 0)", scale: 0.94, opacity: 0.4 },
      { clipPath: "inset(0 0% 0 0)", scale: 1, opacity: 1, duration: 1.4, ease: "expo.out" },
      0
    )
  );
  q("[data-intro]").forEach((el, i) =>
    intro.from(el, { y: 34, opacity: 0, duration: 0.9, ease: "power3.out" }, 0.45 + i * 0.12)
  );

  // --- Revelados al hacer scroll ---
  q('[data-reveal="up"]').forEach((el) =>
    gsap.from(el, { y: 60, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: trigger(el) })
  );
  q('[data-reveal="mask"]').forEach((el) =>
    gsap.fromTo(
      el,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "expo.inOut", scrollTrigger: trigger(el) }
    )
  );
  q("[data-stagger]").forEach((parent) =>
    gsap.from(parent.children, {
      y: 56,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: trigger(parent, "top 86%"),
    })
  );
  q("[data-pop]").forEach((el) =>
    gsap.from(el, { scale: 0, duration: 0.7, ease: "back.out(2.2)", scrollTrigger: trigger(el, "top 90%") })
  );
  q("[data-draw]").forEach((el) =>
    gsap.from(el, {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 60%", scrub: true },
    })
  );
  q("[data-parallax]").forEach((el) => {
    const strength = parseFloat(el.dataset.parallax) || 0.2;
    gsap.fromTo(
      el,
      { y: -120 * strength },
      {
        y: 120 * strength,
        ease: "none",
        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });

  // --- Botones magnéticos (solo mouse/trackpad) ---
  if (conditions.finePointer) {
    q("[data-magnetic]").forEach((el) => {
      const moveX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const moveY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        moveX((e.clientX - (r.left + r.width / 2)) * 0.3);
        moveY((e.clientY - (r.top + r.height / 2)) * 0.3);
      };
      const onLeave = () => {
        moveX(0);
        moveY(0);
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });
  }

  // --- Reel de Portfolio: scroll horizontal fijado (escritorio) ---
  const reel = root.querySelector("[data-reel]");
  if (reel && conditions.desktop) {
    const track = reel.querySelector("[data-reel-track]");
    const bar = reel.querySelector("[data-reel-bar]");
    const count = reel.querySelector("[data-reel-count]");
    const total = track.children.length;
    const distance = () => Math.max(0, track.scrollWidth - reel.clientWidth);

    // En escritorio el scroll lo maneja GSAP, no el overflow nativo
    gsap.set(track, { overflowX: "visible", scrollSnapType: "none" });
    const skew = gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3.out" });

    const move = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: reel,
        pin: true,
        scrub: 0.6,
        start: "top top",
        end: () => "+=" + distance(),
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (bar) gsap.set(bar, { scaleX: self.progress });
          if (count) count.textContent = String(Math.min(total, Math.round(self.progress * (total - 1)) + 1)).padStart(2, "0");
          skew(gsap.utils.clamp(-6, 6, self.getVelocity() / -400));
        },
      },
    });
    const onEnd = () => skew(0);
    ScrollTrigger.addEventListener("scrollEnd", onEnd);
    cleanups.push(() => ScrollTrigger.removeEventListener("scrollEnd", onEnd));

    // Contra-movimiento del medio dentro de cada tarjeta (parallax horizontal)
    q("[data-reel-media]").forEach((media) =>
      gsap.fromTo(
        media,
        { xPercent: -9 },
        {
          xPercent: 9,
          ease: "none",
          scrollTrigger: {
            trigger: media.parentElement,
            containerAnimation: move,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        }
      )
    );
    // Los números de cada tarjeta suben al entrar
    q("[data-reel-index]").forEach((num) =>
      gsap.from(num, {
        yPercent: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: { trigger: num.closest("[data-reel-card]"), containerAnimation: move, start: "left 85%", toggleActions: "play none none reverse" },
      })
    );
  }

  return () => cleanups.forEach((fn) => fn());
}
