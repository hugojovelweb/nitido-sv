import usePageTitle from "../hooks/usePageTitle";
import Hero from "../components/hero/Hero";
import ServiciosTeaser from "../components/sections/ServiciosTeaser";
import ReviewsSection from "../components/sections/Reviews";
import Process from "../components/sections/Process";
import FAQ from "../components/sections/FAQ";
import CTABand from "../components/sections/CTABand";

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <ServiciosTeaser />
      <ReviewsSection />
      <Process />
      <FAQ />
      <CTABand />
    </>
  );
}
