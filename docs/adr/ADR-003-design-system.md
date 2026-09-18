# ADR-003: Sistema de Diseño

## Context
Existe un Brand Board oficial (PDF) con logo, paleta y tipografías. No hay fotos/video de portfolio de clientes reales disponibles para esta fase.

## Problem
¿Cómo construir una identidad visual fiel a la marca sin fotografía real y sin inventar contenido visual?

## Options
- **A. Usar fotografía de stock genérica** como relleno.
- **B. Apoyarse 100% en la identidad gráfica ya validada por el cliente** (logo, gradiente, tipografía condensada, formas diagonales, iconos con glow) replicando patrones que el cliente ya usa en sus propias piezas de Instagram.

## Decision
**Opción B.** Cero fotografía de stock. El diseño reutiliza literalmente los patrones visuales que el cliente ya validó y publica: encabezados con letras multicolor (visto en "Servicios Creativos/Digitales"), proceso numerado con línea conectora, cajas con borde rojo para subtítulos, formas diagonales en las esquinas.

## Reason
El brief prohíbe inventar imágenes corporativas o testimonios. Stock genérico además diluye la identidad de marca y es la señal más común de un sitio "genérico" hecho por IA. Reutilizar el propio lenguaje visual del cliente es más fiel a la marca y no requiere activos que no existen.

## Consequences
- Cuando el cliente entregue fotografía/video real de trabajos, se integrará en Hero y una futura sección de Portfolio/Casos de estudio (Fase 2).
- La tipografía "Ultra System" (listada en el Brand Board) no tiene archivos de fuente disponibles ni está en Google Fonts; se usa **Anton** como sustituto visual (misma familia condensada/impactante usada en las piezas reales) hasta recibir los archivos oficiales. Ver `docs/design-system.md`.
