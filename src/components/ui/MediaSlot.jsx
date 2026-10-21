import { useEffect, useRef } from "react";

/**
 * Espacio para foto o video de portfolio.
 * - Con `item` real: imagen (carga diferida) o <video> mudo en bucle que solo
 *   se reproduce mientras es visible.
 * - Sin `item`: marcador de marca claramente identificado ("Próximo proyecto").
 *   Nunca se inventan proyectos ni clientes.
 */
export default function MediaSlot({ item, index }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? video.play().catch(() => {}) : video.pause()),
      { threshold: 0.4 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [item]);

  if (!item) {
    const tones = [
      "from-nitido-purple-deep to-nitido-purple",
      "from-nitido-red to-nitido-purple-deep",
      "from-nitido-purple to-nitido-red",
    ];
    return (
      <>
        <div
          data-reel-media
          className={`h-full w-[125%] -ml-[12.5%] bg-gradient-to-br ${tones[index % tones.length]}`}
        />
        {/* Etiqueta fuera del medio animado para que no se desplace ni se recorte */}
        <span className="absolute left-5 top-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
          Próximo proyecto
        </span>
      </>
    );
  }

  return item.mediaType === "video" ? (
    <video
      ref={videoRef}
      data-reel-media
      className="h-full w-[125%] max-w-none -ml-[12.5%] object-cover"
      src={item.mediaUrl}
      poster={item.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={item.alt ?? item.title}
    />
  ) : (
    <img alt={item.alt ?? item.title}
      data-reel-media
      className="h-full w-[125%] max-w-none -ml-[12.5%] object-cover"
      src={item.mediaUrl}
      width="800"
      height="1000"
      loading="lazy"
      decoding="async"
    />
  );
}
