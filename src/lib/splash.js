/**
 * Estado de la intro animada de entrada (ver ADR-008).
 * - Se muestra una vez por sesión del navegador.
 * - No se muestra con movimiento reducido ni con ahorro de datos.
 * - Las animaciones de entrada del hero esperan a que la intro termine
 *   (lib/motion.js usa isSplashActive / onSplashEnd).
 */
const KEY = "nitido:intro-vista";
const EVENT = "nitido:splash-end";
let active = false;

export function shouldShowSplash() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (navigator.connection?.saveData) return false;
  try {
    return !sessionStorage.getItem(KEY);
  } catch {
    return true;
  }
}

export const isSplashActive = () => active;

export function setSplashActive(value) {
  const was = active;
  active = value;
  if (was && !value) window.dispatchEvent(new Event(EVENT));
}

export function markSplashSeen() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* sin almacenamiento: se mostrará de nuevo, no pasa nada */
  }
}

export function onSplashEnd(callback) {
  window.addEventListener(EVENT, callback, { once: true });
  return () => window.removeEventListener(EVENT, callback);
}
