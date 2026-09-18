# ADR-004: Formulario de Contacto

## Context
Cliente confirmó: quiere formulario de contacto **y** botones directos a WhatsApp/redes sociales, en una Landing sin backend propio.

## Problem
¿Cómo implementar un formulario funcional sin backend en esta fase?

## Options
- **A. Solo botones directos** (WhatsApp/redes) — cero fricción técnica, pero no es lo que el cliente pidió.
- **B. Formulario conectado a un servicio de envío de terceros** (Formspree, Resend, EmailJS) — sin backend propio.
- **C. Backend propio** (Node/Express, etc.) — fuera de alcance de la Fase 1.

## Decision
**Opción B**, con implementación en dos pasos:
1. **Ahora:** el formulario existe, valida en el cliente (nombre, correo, mensaje requeridos) y tiene estados de carga/éxito/error — pero el envío está simulado (`fakeSubmit`) porque aún no se ha elegido el proveedor de correo.
2. **Antes de producción real:** reemplazar `fakeSubmit` en `src/components/sections/Contact.jsx` por una llamada `fetch` al proveedor elegido.

## Reason
No se debe implementar backend "hasta conocer el stack y proveedor de correo" (regla del proceso). Se construye el formulario completo y listo, dejando el punto de integración claramente aislado y documentado para no bloquear el resto del desarrollo.

## Consequences
- El formulario **no envía correos reales todavía** — es un placeholder funcional a nivel de UI/UX.
- Se necesita definir con el cliente: ¿Formspree (gratis, rápido) o Resend/EmailJS u otro? Ver `docs/roadmap.md`.
- Los botones directos a WhatsApp e Instagram sí son 100% funcionales desde ya (no dependen de backend).
