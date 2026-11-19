import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { markSplashSeen, setSplashActive, shouldShowSplash } from "../../lib/splash";

const MAX_WAIT_START_MS = 3000; // si el video no arranca, se omite la intro
const MAX_TOTAL_MS = 5500; // tope de seguridad
const IRIS_MS = 850;

/**
 * Intro de entrada: video animado del equipo de Design (2,1 s, sin audio).
 * Termina en un fotograma morado y la pantalla se "cierra" como un iris hacia
 * el centro para revelar el sitio. Una vez por sesión; se puede saltar con el
 * botón o con Esc. Con movimiento reducido o ahorro de datos no se muestra.
 */
export default function Splash() {
  const [visible, setVisible] = useState(() => shouldShowSplash());
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const startedRef = useRef(false);
  const videoRef = useRef(null);
  const skipRef = useRef(null);

  // Mientras la intro está activa se bloquea el scroll del documento
  useLayoutEffect(() => {
    if (!visible) return;
    setSplashActive(true);
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = previous;
    };
  }, [visible]);

  const close = useCallback((animate) => {
    if (closingRef.current) return;
    closingRef.current = true;
    markSplashSeen();
    setSplashActive(false); // dispara las animaciones de entrada del hero
    if (!animate) {
      setVisible(false);
      return;
    }
    setClosing(true);
    window.setTimeout(() => setVisible(false), IRIS_MS + 150);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const video = videoRef.current;
    if (video) {
      video.muted = true; // React no refleja el atributo "muted": se fuerza aquí
      video.play().catch(() => close(false)); // autoplay bloqueado → se omite
    }
    skipRef.current?.focus({ preventScroll: true });
    const onKey = (e) => e.key === "Escape" && close(true);
    window.addEventListener("keydown", onKey);
    const startTimer = window.setTimeout(() => {
      if (!startedRef.current) close(false);
    }, MAX_WAIT_START_MS);
    const totalTimer = window.setTimeout(() => close(true), MAX_TOTAL_MS);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(startTimer);
      window.clearTimeout(totalTimer);
    };
  }, [visible, close]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Animación de bienvenida de Nítido"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black"
      style={{
        clipPath: closing ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
        transition: closing ? `clip-path ${IRIS_MS}ms cubic-bezier(0.76, 0, 0.24, 1)` : "none",
      }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-contain max-sm:scale-[1.7]"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onPlaying={() => (startedRef.current = true)}
        onEnded={() => close(true)}
        onError={() => close(false)}
      >
        <source src="/intro/nitido-intro.mp4" type="video/mp4" />
        <source src="/intro/nitido-intro.webm" type="video/webm" />
      </video>
      <button
        ref={skipRef}
        type="button"
        onClick={() => close(true)}
        className="absolute bottom-6 right-6 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm text-white/85 transition-colors hover:text-white"
      >
        Saltar
      </button>
    </div>
  );
}
