# ADR-001: Stack de Frontend

## Context
Fase 1 requiere una Landing Page que debe evolucionar hacia web corporativa, dashboard, autenticación y aplicación en fases futuras (ver roadmap.md).

## Problem
¿Qué stack de frontend minimiza reescritura futura sin sobrecargar la Fase 1?

## Options
- **A. HTML/CSS/JS + Tailwind:** cero build, máxima portabilidad inmediata a cualquier hosting.
- **B. React (Vite) + Tailwind:** requiere build, pero los componentes son reutilizables y escalables hacia dashboard/app.

## Decision
**Opción B: React 19 + Vite + Tailwind CSS v4**, compilado a sitio estático (`npm run build` → `/dist`).

## Reason
Autorizado explícitamente por el cliente. El cliente confirmó interés en incorporar **Shadcn/ui** más adelante, que requiere React + Tailwind — esta decisión ya lo deja preparado sin fricción futura.

## Consequences
- Requiere `npm run build` antes de subir a hosting tradicional (Hostinger); no es simplemente "arrastrar y soltar" archivos fuente.
- El resultado compilado (`/dist`) es 100% estático — funciona igual en Netlify que en Hostinger.
- Habilita crecimiento hacia Fase 3+ (dashboard, auth) reutilizando el mismo stack.
