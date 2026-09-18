# Design System

Fuente oficial: `brandboard_nitido_pdf.pdf` (proporcionado por el cliente). Cualquier cambio de color/tipografía debe venir de una actualización de ese documento, no de preferencia estética de quien programe.

## Colors

| Token | Hex | Uso | Fuente |
|---|---|---|---|
| `nitido-red` | `#ff2055` | Acentos, bordes de tags, CTAs secundarios | Brand Board oficial |
| `nitido-purple` | `#7d1fff` | Color primario de marca, extremo claro del gradiente | Brand Board oficial |
| `nitido-purple-deep` | `#5504eb` | Extremo oscuro del gradiente (sampleado del logo real) | Extraído del isotipo |
| `nitido-white` | `#ffffff` | Texto principal, fondos claros | Brand Board oficial |
| `nitido-black` | `#000000` | Fondo base del sitio | Brand Board oficial |
| `surface` | `#0a0a0d` | Fondo alterno para separar secciones (necesidad de implementación, no es color de marca) | Derivado |

## Typography

| Rol | Fuente | Nota |
|---|---|---|
| Display / Headlines | **Anton** (Google Fonts) | Sustituto de "Ultra System" — ver ADR-003. Reemplazar cuando se reciban los archivos oficiales de Ultra System. |
| Body / UI | **Poppins** (Google Fonts) | Tipografía secundaria oficial del Brand Board — usada tal cual. |

### Escala tipográfica
- H1 (Hero): `text-5xl` a `text-7xl` (responsive), Anton, uppercase
- H2 (secciones): `text-5xl`/`text-6xl`, Anton, uppercase
- H3 (items de servicio): `text-2xl`/`text-3xl`, Anton, uppercase
- Body: `text-base`/`text-lg`, Poppins
- Small/caption: `text-sm`, Poppins

## Patrones visuales reutilizados del cliente (no inventados)

1. **Encabezados con letras multicolor** (`SplitHeading`): replica el efecto visto en "SERVICIOS CREATIVOS" / "SERVICIOS DIGITALES" donde cada letra alterna blanco/morado/rojo.
2. **Proceso numerado con línea conectora**: réplica exacta del layout de la pieza "Proceso" (círculos numerados 1-5 unidos por una línea).
3. **Caja con borde rojo para subtítulos** (`FramedTag`): réplica del patrón visto en "Preguntas" ("Lo que debes saber.") y "Contacto" ("Hablemos de tu marca.").
4. **Formas diagonales en esquinas** (`CornerShards`): réplica del motivo gráfico presente en todas las piezas de Instagram del cliente.

Estos NO son decisiones de diseño genéricas — son extracciones directas del lenguaje visual que el cliente ya usa y aprobó.

## Radius
- `rounded-full` — botones, badges circulares
- `rounded-lg` — inputs, framed tags

## Spacing
Se usa la escala nativa de Tailwind (4px base). Secciones usan `py-20`/`py-28` como ritmo vertical consistente.

## Breakpoints
Tailwind por defecto: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px. Mobile-first en todos los componentes.

## Pendiente
- Archivos reales de la tipografía "Ultra System" (para reemplazar Anton).
- Fotografía/video de portfolio real (ver `assets.md`).
