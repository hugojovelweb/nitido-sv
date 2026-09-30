// Contenido oficial extraído de las piezas de marca proporcionadas por el cliente
// (Servicios_Creativos.jpeg, Servicios_Digitales.jpeg, Proceso.jpeg, Preguntas.jpeg,
// Contacto.jpeg) + Nitido_com.docx (pedido de sitio multi-página, sept 2026).
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

// Mapa del sitio multi-página (routing con react-router-dom).
// Pedido explícito del cliente (Nitido_com.docx): inicio, nosotros, servicios
// (dividido en dos páginas), portfolio, contacto.
export const routes = {
  home: "/",
  nosotros: "/nosotros",
  serviciosCreativos: "/servicios/creativos",
  serviciosDigitales: "/servicios/digitales",
  portfolio: "/portfolio",
  contacto: "/contacto",
};

export const nav = [
  { label: "Inicio", href: routes.home },
  { label: "Nosotros", href: routes.nosotros },
  {
    label: "Servicios",
    children: [
      { label: "Servicios Creativos", href: routes.serviciosCreativos },
      { label: "Servicios Digitales", href: routes.serviciosDigitales },
    ],
  },
  { label: "Portfolio", href: routes.portfolio },
  { label: "Contacto", href: routes.contacto },
];

// "Pilares" — resumen en 3 tarjetas que abre cada página de Servicios,
// según el patrón visual pedido en Nitido_com.docx (imagen 4: "Pilares
// para tu crecimiento digital"). Íconos referencian SocialIcon-style keys
// propias (ver PillarIcon.jsx).
export const creativePillars = [
  {
    icon: "camera",
    title: "Producción Visual",
    description: "Fotografía y video con dirección de arte que capturan la esencia de tu marca.",
  },
  {
    icon: "target",
    title: "Dirección Creativa",
    description: "Concepto, estilo y enfoque para que cada pieza comunique mejor.",
  },
  {
    icon: "film",
    title: "Edición y Postproducción",
    description: "Piezas limpias, dinámicas y bien pensadas, listas para publicar.",
  },
];

export const digitalPillars = [
  {
    icon: "camera",
    title: "Identidad de Marca",
    description: "Branding y rebranding con identidades claras, coherentes y memorables.",
  },
  {
    icon: "target",
    title: "Estrategia Directa",
    description: "Campañas y gestión de comunidad enfocadas en alcance y conversión medibles.",
  },
  {
    icon: "film",
    title: "Presencia Digital",
    description: "Sitios web y CRM que organizan tus procesos y oportunidades de venta.",
  },
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
    title: "Tomas de Dron",
    description: "Perspectiva aérea para producciones con más impacto visual.",
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

// NOT_DEFINED — el cliente pidió agregar una sección de Reviews
// (Nitido_com.docx, punto 11) pero no ha entregado reseñas reales todavía.
// No se inventan testimonios. El componente Reviews.jsx muestra un estado
// vacío profesional mientras este arreglo esté vacío. Formato esperado por
// entrada: { name, role, quote, rating (1-5) }.
export const reviews = [];

// NOT_DEFINED — el cliente no ha entregado copy de misión/visión/valores/
// diferenciadores para "Nosotros". Solo se usan aquí los hechos ya
// confirmados por el cliente en otras piezas de marca (no se inventa nada
// nuevo). Actualizar cuando el cliente entregue brand-guidelines.txt /
// product-context.txt con esta información.
export const nosotros = {
  intro:
    "Somos una agencia creativa y de marketing digital en El Salvador. Combinamos producción audiovisual, contenido y estrategia digital para que tu marca se vea, literalmente, nítida.",
  missionDefined: false,
  visionDefined: false,
  valuesDefined: false,
};

// NOT_DEFINED — sin fotografía real de portfolio todavía. El cliente creará
// un Google Drive para ir agregando contenido (Nitido_com.docx, punto 7).
// Portfolio.jsx muestra un estado "próximamente" mientras este arreglo esté
// vacío. Formato esperado por entrada: { title, category, mediaUrl, mediaType }.
export const portfolioItems = [];
