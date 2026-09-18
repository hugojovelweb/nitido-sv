# ADR-002: Estrategia de Deployment

## Context
El cliente quiere iterar rápido ahora mismo (prueba y error, y que sirva como pieza de portfolio propio como developer), y luego migrar a un hosting definitivo donde ya tiene cuenta activa.

## Problem
¿Cómo desplegar sin bloquear la migración futura ni duplicar trabajo?

## Options
- **A. Netlify → Hostinger (elegida):** deploy inmediato en Netlify (gratis, CI/CD automático desde git), migración posterior a Hostinger subiendo el build compilado.
- **B. Hostinger desde el día 1:** evita una migración futura pero es más lento para iterar (sin CI/CD automático en plan compartido estándar).

## Decision
**Opción A.** Netlify ahora, Hostinger como destino final.

## Reason
Decisión explícita del cliente: quiere Netlify para pruebas/portfolio inmediato, y ya cuenta con una cuenta de Hostinger con servicios activos para la versión definitiva.

## Consequences
- El proyecto se mantiene 100% estático (ver ADR-001) precisamente para que el mismo `/dist` funcione sin cambios en ambos hosts.
- Al migrar, habrá que: (1) comprar/apuntar el dominio final a Hostinger, (2) subir `/dist` vía FTP o hPanel, (3) actualizar `canonical`, Open Graph URLs y `sitemap.xml` en `index.html` y `public/` con el dominio definitivo.
- Mientras tanto, el dominio temporal es un subdominio de Netlify (`*.netlify.app`).
