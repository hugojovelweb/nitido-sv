# Nítido — Sitio Web (Fase 1)

## Hugo Jovel Web

Sitio corporativo multi-página de **Nítido**, agencia creativa y de marketing digital en El Salvador.

> "Hagamos que se vea Nítido."

Este sitio es la **Fase 1** de una plataforma digital evolutiva. Ver [`docs/roadmap.md`](docs/roadmap.md) para las fases futuras (dashboard, autenticación, CRM propio, app, etc.) y [`skills/nitido-project/`](skills/nitido-project/SKILL.md) para el contexto completo del proyecto (memoria persistente entre sesiones de desarrollo).

## Páginas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/nosotros` | Nosotros |
| `/servicios/creativos` | Servicios Creativos |
| `/servicios/digitales` | Servicios Digitales |
| `/portfolio` | Portfolio (10 categorías) |
| `/portfolio/<categoria>` | Galería de cada categoría |
| `/contacto` | Contacto |

## Stack

- **Frontend:** React 19 + Vite + Tailwind CSS v4 + react-router-dom (ver ADR-005)
- **Hosting actual:** Netlify (pruebas / portfolio), con CI/CD desde GitHub
- **Hosting destino:** Hostinger (cuenta ya existente del cliente) — build estático (`dist/`), incluye `.htaccess` para routing
- **Sin backend propio** en esta fase. Formulario de contacto listo para conectarse a un proveedor externo (ver `docs/setup.md`)

## Requisitos

- Node.js 20 LTS o superior — https://nodejs.org
- npm 10+ (viene con Node)

## Empezar

\`\`\`bash
npm install
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # compila a /dist para producción
npm run preview   # sirve /dist localmente para verificar el build
\`\`\`

Instrucciones detalladas para **Windows**, **Debian/Xfce** y **VS Code** en [`docs/setup.md`](docs/setup.md).

## Estructura del proyecto

\`\`\`text
nitido-landing/
├── public/brand/          # Logos e íconos oficiales (extraídos del Brand Board)
├── public/.htaccess       # Routing SPA para Hostinger (Apache)
├── src/
│   ├── components/
│   │   ├── layout/        # Layout, Footer
│   │   ├── navigation/    # Navbar (con dropdown Servicios)
│   │   ├── hero/          # Hero
│   │   ├── sections/      # PillarsGrid, ServiciosTeaser, ServiceList, GradientHero,
│   │   │                  # CTABand, Process, FAQ, Reviews, Contact
│   │   └── ui/            # Button, FramedTag, SplitHeading, PillarIcon, CornerShards, SocialIcon
│   ├── pages/              # Una página = una ruta (Home, Nosotros, ServiciosCreativos, ...)
│   ├── hooks/usePageTitle.js
│   ├── data/content.js    # Todo el copy oficial + rutas + nav (extraído de las piezas de marca)
│   └── index.css          # Design tokens (colores, tipografía, animaciones)
├── docs/                  # Documentación técnica + ADRs
└── skills/nitido-project/ # Memoria persistente del proyecto para futuras sesiones
\`\`\`

## Reglas del proyecto

1. **No inventar contenido de negocio.** Todo el copy viene de las piezas de marca oficiales entregadas por el cliente (`src/data/content.js` documenta la fuente de cada bloque).
2. **No inventar assets visuales.** Los logos se extrajeron directamente del `brandboard_nitido_pdf.pdf`. Cualquier imagen/foto de portfolio real debe agregarse cuando el cliente la entregue (ver `docs/assets.md`).
3. **Redes sociales sin confirmar** (Facebook, TikTok, YouTube, LinkedIn, X) están en el código pero marcadas `confirmed: false` en `src/data/content.js` — actualiza esa bandera y el `href` real cuando el cliente entregue los enlaces.
4. Cambios de arquitectura importantes se documentan como ADR en `docs/adr/`.
5. Antes de una nueva sesión de desarrollo (IA o humana), lee `skills/nitido-project/SKILL.md` primero.

## Despliegue

- **Netlify:** conecta este repo o arrastra la carpeta `dist/` tras `npm run build` a https://app.netlify.com/drop
- **Hostinger:** sube el contenido de `dist/` (no la carpeta en sí) a `public_html/` vía File Manager o FTP. Ver `docs/deployment.md`.
