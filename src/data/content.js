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
  { name: "Facebook", href: brand.facebookLink, confirmed: true },
  { name: "TikTok", href: brand.tiktokLink, confirmed: true }
  // { name: "YouTube", href: "#", confirmed: false },
  // { name: "LinkedIn", href: "#", confirmed: false },
  // { name: "X", href: "#", confirmed: false },
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

// ---------------------------------------------------------------------------
// PORTFOLIO POR CATEGORÍAS (estructura pedida por el cliente en Canva, nov 2026)
// Cada categoría = una portada en /portfolio y una página en /portfolio/<slug>.
// TODO ES EDITABLE AQUÍ:
//   kicker / title   texto real de la portada (se muestra sobre la foto, no va dentro de la imagen)
//   cover            ruta de la portada, o null para usar el marcador con degradado de marca
//   textInCover      true si la imagen de portada YA trae el título dentro: entonces el texto
//                    se oculta visualmente (queda para lectores de pantalla y buscadores)
//   description      texto de introducción de la página (vacío = no se muestra)
//   items            fotos/videos de la categoría: { src, alt } o { type: "video", src, poster, alt }
// Fotos: entregadas por el cliente (Drive "Fotos Profesionales"), optimizadas a WebP 4:5 en
// /public/portfolio. Trazabilidad en docs/assets.md. NO se inventan clientes ni proyectos.
// Categorías sin fotos muestran "Próximamente".
// ---------------------------------------------------------------------------
export const portfolioCategories = [
  {
    slug: "gastronomicas",
    kicker: "Producciones",
    title: "Gastronómicas",
    cover: "/portfolio/portfolio-03-gastronomia-carne.webp",
    textInCover: false,
    description: "",
    items: [
      { src: "/portfolio/portfolio-03-gastronomia-carne.webp", alt: "Salsa cremosa vertida sobre un corte de carne a la parrilla con verduras asadas" },
      { src: "/portfolio/portfolio-01-gastronomia-bebida.webp", alt: "Bebida de naranja con hojas de menta sobre un posavasos, con tres salsas al fondo" },
      { src: "/portfolio/portfolio-07-gastronomia-mesa.webp", alt: "Mesa con platos de carne, camarones y papas fritas acompañados de salsas" },
      { src: "/portfolio/portfolio-05-gastronomia-pupusas.webp", alt: "Pupusa con queso derretido levantada sobre un plato de pupusas" },
      { src: "/portfolio/servicios-postre.webp", alt: "Rebanada de pastel de queso con salsa de fresa y menta" },
      { src: "/portfolio/gastronomia-sandwich.webp", alt: "Sándwich de ciabatta con carne y papas fritas con salsa de tomate" },
      { src: "/portfolio/gastronomia-pupusa-mano.webp", alt: "Mano sosteniendo una pupusa sobre una bandeja de pupusas" },
      { src: "/portfolio/servicios-pupusas.webp", alt: "Canasta con pupusas recién hechas" },
      { src: "/portfolio/servicios-sliders.webp", alt: "Mini hamburguesas con ensalada de repollo sobre una bandeja" },
      { src: "/portfolio/gastronomia-sopa.webp", alt: "Tazón de barro con sopa de verduras y papa junto a pupusas" },
    ],
  },
  {
    slug: "inmobiliarias",
    kicker: "Producciones",
    title: "Inmobiliarias",
    cover: "/portfolio/inmobiliaria-fachada.webp",
    textInCover: false,
    description: "",
    items: [
      { src: "/portfolio/inmobiliaria-fachada.webp", alt: "Fachada blanca de un edificio moderno con palmeras y cielo azul" },
      { src: "/portfolio/inmobiliaria-sala.webp", alt: "Sala con sofá seccional gris, alfombra y plantas" },
      { src: "/portfolio/inmobiliaria-pasillo.webp", alt: "Pasillo de una casa con sala, sofá gris y la puerta de entrada al fondo" },
      { src: "/portfolio/inmobiliaria-dormitorio.webp", alt: "Dormitorio con dos camas, cortinas verdes y aire acondicionado" },
      { src: "/portfolio/inmobiliaria-repisa.webp", alt: "Repisa blanca con plantas y decoraciones sobre una pared color crema" },
      { src: "/portfolio/inmobiliaria-patio.webp", alt: "Patio interior con tragaluz, ventana y piso de cerámica" },
    ],
  },
  {
    slug: "marca-personal",
    kicker: "Marca",
    title: "Personal",
    cover: "/portfolio/marca-personal-01.webp",
    textInCover: false,
    description: "",
    items: [
      { src: "/portfolio/marca-personal-01.webp", alt: "Retrato de un hombre con traje negro y corbata, sentado en una silla de oficina sobre fondo claro" },
      { src: "/portfolio/marca-personal-02.webp", alt: "Retrato de un hombre con traje negro y corbata, sentado con las piernas cruzadas" },
      { src: "/portfolio/marca-personal-03.webp", alt: "Retrato de un hombre sonriendo mientras se abotona el saco del traje" },
    ],
  },
  {
    slug: "espacios",
    kicker: "Fotografía de",
    title: "Espacios",
    cover: "/portfolio/portfolio-08-hospitalidad-sala.webp",
    textInCover: false,
    description: "",
    items: [
      { src: "/portfolio/portfolio-08-hospitalidad-sala.webp", alt: "Lobby con sofá capitoné gris y piso de mármol" },
      { src: "/portfolio/portfolio-04-hospitalidad-lobby.webp", alt: "Mostrador de recepción de mármol en un lobby con paneles de madera y luces cálidas" },
      { src: "/portfolio/portfolio-02-hospitalidad-recepcion.webp", alt: "Recepción de hotel con letrero dorado, lámpara de brazos y dos sillones negros" },
      { src: "/portfolio/espacios-restaurante.webp", alt: "Restaurante de hotel con mesas blancas, sillas beige y margaritas en primer plano" },
      { src: "/portfolio/espacios-desayunos.webp", alt: "Sala de desayunos de hotel con isla de mármol y madera y lámpara de araña" },
      { src: "/portfolio/portfolio-06-hospitalidad-habitacion.webp", alt: "Habitación de hotel con cama, escritorio y un cuadro de paisaje" },
      { src: "/portfolio/espacios-habitacion-a.webp", alt: "Habitación de hotel con cama doble, clóset y televisor bajo luces indirectas" },
      { src: "/portfolio/espacios-habitacion-b.webp", alt: "Habitación de hotel con dos camas, cabeceras de madera y cuadros en la pared" },
    ],
  },
  { slug: "dron", kicker: "Dron", title: "Services", cover: null, textInCover: false, description: "", items: [] },
  { slug: "producto", kicker: "Fotografía", title: "de Producto", cover: null, textInCover: false, description: "", items: [] },
  { slug: "publicitarias", kicker: "Producciones", title: "Publicitarias", cover: null, textInCover: false, description: "", items: [] },
  { slug: "detras-de-camara", kicker: "Detrás", title: "de Cámara", cover: null, textInCover: false, description: "", items: [] },
  {
    slug: "diseno-grafico",
    kicker: "Diseño",
    title: "Gráfico",
    cover: null,
    textInCover: false,
    description: "",
    items: [
      { src: "/portfolio/diseno-grafico-canoas.webp", alt: "Pieza gráfica \"Las mejores canoas\" con plátanos horneados con queso y pasas sobre papel estampado" },
    ],
  },
  { slug: "desarrollo-web", kicker: "Desarrollo", title: "Web", cover: null, textInCover: false, description: "", items: [] },
];

export const categoryPath = (slug) => `${routes.portfolio}/${slug}`;

// Mosaico de Servicios Creativos (misma fuente: fotos entregadas por el cliente)
export const serviciosCreativosMedia = [
  { src: "/portfolio/servicios-postre.webp", alt: "Rebanada de pastel de queso con salsa de fresa y menta" },
  { src: "/portfolio/servicios-pupusas.webp", alt: "Canasta con pupusas recién hechas" },
  { src: "/portfolio/servicios-sliders.webp", alt: "Mini hamburguesas con ensalada de repollo sobre una bandeja" },
];
