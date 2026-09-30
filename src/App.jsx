import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import ServiciosCreativos from "./pages/ServiciosCreativos";
import ServiciosDigitales from "./pages/ServiciosDigitales";
import Portfolio from "./pages/Portfolio";
import Contacto from "./pages/Contacto";
import { routes } from "./data/content";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.nosotros} element={<Nosotros />} />
          <Route path="/servicios" element={<Navigate to={routes.serviciosCreativos} replace />} />
          <Route path={routes.serviciosCreativos} element={<ServiciosCreativos />} />
          <Route path={routes.serviciosDigitales} element={<ServiciosDigitales />} />
          <Route path={routes.portfolio} element={<Portfolio />} />
          <Route path={routes.contacto} element={<Contacto />} />
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
