# Decisiones técnicas (resumen) — Nítido

Registro resumido. El detalle completo de cada decisión (contexto, opciones consideradas, consecuencias) vive en `/docs/adr/`.

| ADR | Decisión | Por qué (resumen) |
|---|---|---|
| [ADR-001](/docs/adr/ADR-001-stack.md) | Stack: React 19 + Vite + Tailwind CSS v4, compilado a estático | Autorizado por el cliente; deja abierta la puerta a Shadcn/ui; reutilizable en fases futuras (dashboard, app) |
| [ADR-002](/docs/adr/ADR-002-deployment.md) | Deploy: Netlify ahora → Hostinger después | Cliente quiere iterar rápido en Netlify (portfolio propio) y ya tiene cuenta activa en Hostinger para el destino final |
| [ADR-003](/docs/adr/ADR-003-design-system.md) | Diseño 100% basado en la identidad ya validada del cliente, sin stock | No hay fotografía real de portfolio; se reutilizan los patrones visuales reales de las piezas de Instagram del cliente (headings multicolor, proceso numerado, cajas con borde rojo, formas diagonales) |
| [ADR-004](/docs/adr/ADR-004-contact-form.md) | Formulario con proveedor externo opcional (`VITE_FORM_ENDPOINT`), con fallback simulado mientras no se defina proveedor | No hay backend propio en Fase 1; no se implementa hasta conocer el proveedor de correo elegido |

## Reglas derivadas que no deben romperse
- No cambiar el stack sin nuevo ADR + autorización del cliente.
- No agregar fotografía de stock — solo assets reales del Brand Board o entregados por el cliente.
- No hardcodear API keys del proveedor de formulario — siempre vía variable de entorno.
