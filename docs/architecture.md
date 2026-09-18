# Arquitectura

## Visión general
Landing page estática (SPA de una sola ruta) construida en React, compilada por Vite a HTML/CSS/JS estático. No hay backend, base de datos ni CMS en esta fase.

```
Usuario → Netlify/Hostinger (CDN estático) → index.html + JS/CSS bundle
                                            → formulario → [pendiente: proveedor de email]
                                            → botones → WhatsApp / Instagram (enlaces directos)
```

## Component Architecture

```
src/
├── components/
│   ├── layout/       Footer (elementos de layout global)
│   ├── navigation/    Navbar
│   ├── hero/          Hero
│   ├── sections/      Services, ServiceList, Process, FAQ, Contact
│   └── ui/            Button, FramedTag, SplitHeading, SocialIcon, CornerShards
│                       (primitivas reutilizables, sin lógica de negocio)
├── data/
│   └── content.js      Única fuente de verdad para copy y datos de contacto
└── App.jsx             Composición de secciones (sin lógica propia)
```

**Principio:** los componentes en `ui/` no conocen el contenido del negocio (reciben props). Los componentes en `sections/` conocen el contenido (importan de `data/content.js`) y componen las piezas de `ui/`. Esto permite:
- Cambiar copy sin tocar componentes.
- Reutilizar `ui/` en futuras páginas (Fase 2+) sin arrastrar contenido de la Landing.

## Por qué no hay backend todavía
Ver ADR-004. El formulario de contacto está listo a nivel de UI pero el envío real depende de un proveedor de correo aún no elegido.

## Rutas futuras (Fase 2+)
Cuando se agregue routing (ej. página de portfolio, blog, dashboard), se recomienda introducir React Router o migrar a un meta-framework (Next.js/Astro) — decisión que requerirá su propio ADR y no debe tomarse unilateralmente en una sesión futura sin revisar este documento primero.
