// Contenido oficial extraído de las piezas de marca proporcionadas por el cliente
// (Servicios_Creativos.jpeg, Servicios_Digitales.jpeg, Proceso.jpeg, Preguntas.jpeg, Contacto.jpeg)
// NO se ha inventado texto de negocio. Ver /docs/assets.md para trazabilidad de fuentes.

export const brand = {
  name: "Nítido",
  tagline: "Hagamos que se vea Nítido.",
  whatsapp: "+503 6054 5650",
  whatsappLink: "https://wa.me/50360545650",
  instagram: "@nitido_sv",
  instagramLink: "https://instagram.com/nitido_sv",
  email: "somosos.nitido@gmail.com",
};

// Redes sociales. `confirmed: false` + `href: "#"` significa NOT_DEFINED —
// el cliente aún no ha compartido ese usuario/enlace oficial. El botón se
// renderiza visible pero deshabilitado (tooltip "pendiente de confirmar")
// hasta que se complete el link real aquí. No inventar URLs.
export const socials = [
  { name: "Instagram", href: brand.instagramLink, confirmed: true },
  { name: "WhatsApp", href: brand.whatsappLink, confirmed: true },
  { name: "Facebook", href: "#", confirmed: false },
  { name: "TikTok", href: "#", confirmed: false },
  { name: "YouTube", href: "#", confirmed: false },
  { name: "LinkedIn", href: "#", confirmed: false },
  { name: "X", href: "#", confirmed: false },
];

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export const creativeServices = [
  {
    title: "Producción Audiovisual",
    description: "Videos con intención y calidad visual.",
  },
  {
    title: "Fotografía",
    description: "Imágenes que elevan la presencia de tu marca.",
  },
  {
    title: "Edición",
    description: "Piezas limpias, dinámicas y bien pensadas.",
  },
  {
    title: "Contenido para Marcas",
    description: "Ideas visuales adaptadas a redes sociales.",
  },
  {
    title: "Dirección Creativa",
    description: "Concepto, estilo y enfoque para comunicar mejor.",
  },
];

export const digitalServices = [
  {
    title: "Branding y Rebranding",
    description: "Construimos identidades claras, coherentes y memorables.",
  },
  {
    title: "Community Management",
    description: "Gestionamos la presencia y comunicación de tu marca.",
  },
  {
    title: "Campañas en Google Ads",
    description: "Creamos campañas enfocadas en alcanzar tus objetivos.",
  },
  {
    title: "Desarrollo de Páginas Web",
    description: "Diseñamos experiencias digitales funcionales y atractivas.",
  },
  {
    title: "Implementación de CRM",
    description: "Organizamos tus contactos, procesos y oportunidades de venta.",
  },
];

export const process = [
  { step: 1, title: "Nos escribís" },
  { step: 2, title: "Cotizamos y planificamos" },
  { step: 3, title: "Producimos" },
  { step: 4, title: "Editamos" },
  { step: 5, title: "Revisamos y entregamos" },
];

export const faqs = [
  {
    question: "¿Piden anticipo?",
    answer: "Sí, 50% para iniciar.",
  },
  {
    question: "¿Cuánto tarda?",
    answer: "De 5 a 7 días, según el volumen y la complejidad de la edición.",
  },
  {
    question: "¿Adaptan paquetes?",
    answer: "Sí, según tu marca.",
  },
  {
    question: "¿Solo hacen videos?",
    answer:
      "También foto, edición, manejo de redes, campañas de Google, desarrollo de páginas web e implementación de CRM y contenido digital.",
  },
];
