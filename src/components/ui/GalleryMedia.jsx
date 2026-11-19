import { useEffect, useRef } from "react";

/**
 * Foto o video de una galería de categoría. El video va mudo y en bucle y solo
 * se reproduce mientras es visible (presupuesto de peso en docs/assets.md).
 */
export default function GalleryMedia({ item }) {
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

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={item.src}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={item.alt}
      />
    );
  }
  return (
    <img alt={item.alt}
      src={item.src}
      width="800"
      height="1000"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}
