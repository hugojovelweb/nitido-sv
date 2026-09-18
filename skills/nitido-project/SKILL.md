---
name: nitido-project
description: Source of truth del proyecto digital de Nítido (agencia de producción audiovisual y marketing digital, El Salvador). Usar esta skill SIEMPRE que se trabaje en cualquier archivo de este repositorio, se discuta el proyecto de Nítido, o se planee una nueva fase/funcionalidad. Contiene identidad de marca, contexto de negocio, arquitectura, stack, decisiones técnicas, roadmap y reglas de desarrollo que NO deben romperse entre sesiones.
---

# Nítido — Project Memory

Esta skill es la **memoria persistente** del proyecto Nítido. Cualquier agente (incluido Claude en una sesión futura) debe leerla completa antes de tomar decisiones de diseño, arquitectura o contenido para este proyecto.

## Cuándo usar esta skill
- Al abrir/editar cualquier archivo dentro de `nitido-landing/`
- Al recibir una solicitud relacionada con "Nítido", su marca, su web, o su marketing
- Antes de proponer cualquier cambio de stack, arquitectura o identidad visual
- Antes de iniciar una nueva fase del roadmap

## Archivos de esta skill

| Archivo | Contenido |
|---|---|
| `brand.md` | Identidad visual: logo, colores, tipografías, tono |
| `business.md` | Qué es Nítido, servicios, público, contacto |
| `stack.md` | Stack técnico y por qué se eligió |
| `design-system.md` | Tokens de diseño y patrones visuales reutilizables |
| `roadmap.md` | Fases del proyecto (resumen — ver también `/docs/roadmap.md`) |
| `decisions.md` | Registro resumido de decisiones técnicas (ADRs) |
| `changelog.md` | Historial de cambios significativos |

## Reglas que NO deben romperse

1. **No inventar** información de negocio, testimonios, clientes, estadísticas o certificaciones. Si falta un dato, se marca como pendiente y se pregunta al cliente.
2. **No cambiar el stack** (React + Vite + Tailwind) sin un nuevo ADR y autorización explícita del cliente.
3. **No introducir colores/tipografías nuevas** fuera del Brand Board oficial sin que el cliente entregue una actualización de dicho documento.
4. **No implementar fases futuras del roadmap** (auth, dashboard, backend, etc.) antes de tiempo — solo preparar la arquitectura para que puedan incorporarse.
5. **Redes sociales sin confirmar** (Facebook, TikTok, LinkedIn, YouTube, X) deben mantenerse deshabilitadas (`confirmed: false` en `src/data/content.js`) hasta que el cliente entregue el handle/URL real.
6. Cuando una decisión nueva contradiga una decisión anterior documentada, **detenerse y pedir confirmación** al cliente antes de proceder.

## Cómo actualizar esta skill

Cada vez que el proyecto evolucione, preguntarse: *"¿esta modificación cambia información que debería persistir para futuras sesiones?"*

Si la respuesta es sí:
1. Actualizar el archivo correspondiente en esta carpeta (`brand.md`, `business.md`, `stack.md`, etc.)
2. Actualizar `/docs/` si aplica (ADRs, roadmap, design-system)
3. Agregar una entrada en `changelog.md`
4. Si es una decisión técnica nueva, crear un ADR en `/docs/adr/`

Esta skill nunca debe quedar desactualizada respecto al estado real del proyecto.
