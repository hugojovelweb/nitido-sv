import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Footer from "./Footer";
import PageWipe from "./PageWipe";
import Splash from "./Splash";
import useGsapScope from "../../hooks/useGsapScope";
import { initPage } from "../../lib/motion";

export default function Layout() {
  const { pathname, hash } = useLocation();
  const mainRef = useRef(null);

  // Animaciones de la página actual (se revierten al cambiar de ruta)
  useGsapScope(initPage, mainRef, [pathname]);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-nitido-purple focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <Splash />
      <PageWipe />
      <main id="main-content" ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
