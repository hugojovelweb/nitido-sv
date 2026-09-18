# Roadmap — Nítido Digital Ecosystem

## ✅ Fase 1 — Landing Page (actual)
- Landing responsiva con identidad de marca completa
- Servicios (Creativos + Digitales), Proceso, FAQ, Contacto
- Formulario de contacto (UI lista, envío pendiente de proveedor — ADR-004)
- SEO técnico, accesibilidad base, deploy en Netlify

## Fase 2 — Web corporativa avanzada
- Sección de Portfolio/Casos de estudio (requiere fotos/video reales del cliente)
- Blog o sección de contenido (si aplica al negocio)
- Conexión real del formulario de contacto (Formspree/Resend — decidir con cliente)
- Analytics (Google Analytics/Plausible — requiere autorización del cliente, ver docs de seguridad)

## Fase 3 — Autenticación
- Sistema de login para clientes (ej. portal de seguimiento de proyectos)
- Decisión de proveedor: Auth propio vs. servicio (Auth0, Clerk, Supabase Auth)

## Fase 4 — Dashboard
- Panel para que clientes de Nítido vean el estado de sus proyectos/entregables

## Fase 5 — Backend / API
- API REST para servir el dashboard y futuras integraciones
- Decisión de base de datos (pendiente — no definida aún)

## Fase 6 — Aplicación
- Posible expansión a app web completa (gestión de proyectos, clientes, facturación)

## Fase 7 — Mobile
- App móvil si el modelo de negocio lo justifica

## Fase 8 — Automatización / IA
- Automatizaciones internas (ej. generación de reportes, CRM)
- Posible agente de IA para atención inicial de clientes

---

**Regla:** no se implementa nada de Fase 2+ sin antes documentar la decisión correspondiente en un ADR y actualizar este roadmap y `skills/nitido-project/`.
