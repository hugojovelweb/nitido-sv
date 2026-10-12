# ADR-006: Cumplimiento con la skill compartida `nitido-web-platform`

## Contexto
El cliente pidió explícitamente respetar la skill `nitido-web-platform` (reglas
de marca y arquitectura para todo producto digital de Nítido) al hacer el
cambio de degradado en "Nosotros". Esa skill incluye un verificador de solo
lectura (`scripts/verificar_marca.py`) que no se había corrido contra este
proyecto hasta ahora.

## Problema
Al ejecutar el verificador por primera vez contra el proyecto completo
apareció con 4 bloqueantes y 1 aviso:
1. `--color-nitido-purple-deep: #5504eb` fuera de la paleta de la skill.
2. `--color-surface: #0a0a0d` y `--color-surface-raised: #121216` — grises
   nuevos, la skill exige derivar superficies con transparencias de
   blanco/negro, no hexadecimales inventados.
3. `src/assets/react.svg` con color fuera de paleta — asset por defecto de
   Vite, sin uso real en el proyecto.
4. Aviso de `<img>` sin `alt` en `Hero.jsx` — falso positivo: el `alt` sí
   existía, pero en una línea distinta al tag `<img>` (el verificador no lee
   atributos multilínea).

## Decisión y solución
1. **Color del degradado**: se mantuvo `#5504eb` (NO se bajó de calidad al
   valor "ESTIMADO" `#5000e8` de la skill) porque es el valor real, confirmado
   por muestreo de píxel directo sobre el isotipo oficial — exactamente lo que
   la propia skill pedía hacer para resolver su "pendiente por confirmar #2".
   Se actualizó la skill compartida (`assets/tokens.css`, `assets/tokens.json`,
   `references/marca-nitido.md`) con este valor confirmado, para que todo
   proyecto futuro de Nítido lo herede correctamente.
2. **Superficies**: `--color-surface` pasó de hex sólido a
   `rgb(255 255 255 / 0.06)` — transparencia de blanco sobre negro, igual al
   patrón `--nt-superficie` de la skill. `--color-surface-raised` se eliminó
   (no tenía ningún uso real en el código).
3. **Assets sin uso**: se eliminaron `src/assets/react.svg`, `vite.svg` y
   `hero.png` (plantilla por defecto de Vite / origen no ligado a la marca
   Nítido, sin ninguna referencia en el código).
4. **Falso positivo de `alt`**: se reformateó el `<img>` de `Hero.jsx` a una
   sola línea (sin cambiar el `alt`, que ya era correcto) para que el
   verificador lo lea bien en el futuro.

## Archivos afectados
| Archivo | Cambio |
|---|---|
| `src/index.css` | `--color-surface` derivado por transparencia; `--color-surface-raised` eliminado (sin uso) |
| `src/components/hero/Hero.jsx` | `<img>` reformateado a una línea (mismo `alt`) |
| `src/assets/*` | `react.svg`, `vite.svg`, `hero.png` eliminados (sin uso, no son de marca) |
| `mnt/skills/plugins/nitido-web-platform/assets/tokens.{css,json}` | Valor del degradado confirmado (`#5504eb`), ya no "ESTIMADO" |
| `mnt/skills/plugins/nitido-web-platform/references/marca-nitido.md` | Tabla de color y lista de pendientes actualizadas |

## Verificación
```
python3 scripts/verificar_marca.py /ruta/al/proyecto
→ 0 bloqueantes, 0 avisos
```

## Riesgos / Rollback
Ninguno funcional: son tokens CSS y assets muertos. Si `--color-surface` se
ve "demasiado sutil" en producción, se puede subir la opacidad
(`0.06` → `0.08`–`0.1`) sin salir de la regla de "transparencia, no gris
nuevo" de la skill.
