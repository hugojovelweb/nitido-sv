# Arquitectura

## Visión general
Sitio multi-página construido en React + react-router-dom, compilado por Vite
a HTML/CSS/JS estático (SPA con routing del lado del cliente — ver ADR-005).
No hay backend, base de datos ni CMS en esta fase.

```
Usuario → Netlify/Hostinger (CDN estático) → index.html + JS/CSS bundle
                                            → react-router resuelve la página según la URL
                                            → formulario → [pendiente: proveedor de email]
                                            → botones → WhatsApp / Instagram (enlaces directos)
```

Todas las rutas internas requieren que el servidor sirva siempre
`index.html` (ver `netlify.toml` y `public/.htaccess`) — react-router decide
qué página mostrar en el navegador.

## Mapa del sitio

| Ruta | Página | Componente |
|---|---|---|
| `/` | Inicio | `pages/Home.jsx` |
| `/nosotros` | Nosotros | `pages/Nosotros.jsx` |
| `/servicios` | Redirect → `/servicios/creativos` | — |
| `/servicios/creativos` | Servicios Creativos | `pages/ServiciosCreativos.jsx` |
| `/servicios/digitales` | Servicios Digitales | `pages/ServiciosDigitales.jsx` |
| `/portfolio` | Portfolio | `pages/Portfolio.jsx` |
| `/contacto` | Contacto | `pages/Contacto.jsx` |
| `*` | Redirect → `/` | — |

## Component Architecture

```
src/
├── components/
│   ├── layout/        Layout (Navbar + Outlet + Footer), Footer
│   ├── navigation/     Navbar (con dropdown "Servicios")
│   ├── hero/           Hero
│   ├── sections/       PillarsGrid, ServiciosTeaser, ServiceList, GradientHero,
│   │                    CTABand, Process, FAQ, Reviews, Contact
│   └── ui/              Button, FramedTag, SplitHeading, SocialIcon, PillarIcon,
│                         CornerShards (primitivas reutilizables, sin lógica de negocio)
├── data/
│   └── content.js       Única fuente de verdad para copy, rutas (`routes`) y nav
├── hooks/
│   └── usePageTitle.js   <title> por página sin dependencias extra
├── pages/                Una página = una ruta. Composición de secciones.
└── App.jsx               Definición de rutas (react-router)
```

**Principio:** los componentes en `ui/` no conocen el contenido del negocio
(reciben props). Los componentes en `sections/` conocen el contenido
(importan de `data/content.js`) y componen las piezas de `ui/`. Las páginas en
`pages/` solo componen secciones — no tienen lógica ni copy propio. Esto
permite:
- Cambiar copy sin tocar componentes.
- Reordenar o reutilizar secciones entre páginas sin duplicar código.
- Agregar una página nueva (Fase 2+) sin tocar el resto del sitio: crear el
  archivo en `pages/`, agregar la ruta en `App.jsx` y el link en `nav` de
  `content.js`.

## Por qué no hay backend todavía
Ver ADR-004. El formulario de contacto está listo a nivel de UI pero el envío
real depende de un proveedor de correo aún no elegido.

## Decisiones relevantes
Ver `docs/adr/` — especialmente ADR-005 (routing multi-página) antes de
agregar más páginas o considerar un meta-framework (Next.js/Astro).
