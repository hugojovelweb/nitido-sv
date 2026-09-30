import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} — Nítido` : "Nítido — Hagamos que se vea Nítido";
    return () => {
      document.title = previous;
    };
  }, [title]);
}
