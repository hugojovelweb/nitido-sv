import usePageTitle from "../hooks/usePageTitle";
import Contact from "../components/sections/Contact";

export default function Contacto() {
  usePageTitle("Contacto");
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
