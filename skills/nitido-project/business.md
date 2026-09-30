# Business — Nítido

## Qué es
Agencia de **producción audiovisual y marketing digital**, aparentemente con base en **El Salvador** (código de país +503 en WhatsApp, dominio de referencia `.sv`).

## Servicios Creativos
1. Producción Audiovisual — "Videos con intención y calidad visual."
2. Fotografía — "Imágenes que elevan la presencia de tu marca."
3. Tomas de Dron — "Perspectiva aérea para producciones con más impacto visual." (agregado sept 2026, `Nitido_com.docx`)
4. Edición — "Piezas limpias, dinámicas y bien pensadas."
5. Contenido para Marcas — "Ideas visuales adaptadas a redes sociales."
6. Dirección Creativa — "Concepto, estilo y enfoque para comunicar mejor."

## Servicios Digitales
1. Branding y Rebranding — "Construimos identidades claras, coherentes y memorables."
2. Community Management — "Gestionamos la presencia y comunicación de tu marca."
3. Campañas en Google Ads — "Creamos campañas enfocadas en alcanzar tus objetivos."
4. Desarrollo de Páginas Web — "Diseñamos experiencias digitales funcionales y atractivas."
5. Implementación de CRM — "Organizamos tus contactos, procesos y oportunidades de venta."

## Proceso de trabajo (5 pasos, confirmado por el cliente)
1. Nos escribís
2. Cotizamos y planificamos
3. Producimos
4. Editamos
5. Revisamos y entregamos

## Política comercial (de FAQ oficial)
- **Anticipo:** 50% para iniciar
- **Tiempo de entrega:** 5 a 7 días (según volumen/complejidad)
- **Paquetes:** adaptables según la marca del cliente
- Ofrecen más que video: foto, edición, manejo de redes, campañas de Google, desarrollo web, CRM y contenido digital

## Contacto oficial confirmado
- **Instagram:** @nitido_sv
- **Correo:** somosos.nitido@gmail.com
- **WhatsApp:** +503 6054 5650

## Redes sociales pendientes de confirmar
El cliente indicó que, al ser agencia de marketing, quiere presencia en **todas las redes posibles**: Facebook, TikTok, LinkedIn, YouTube, X. Los espacios ya están en el sitio (deshabilitados) — falta el handle/URL real de cada una. Ver `/docs/assets.md`.

## Información NO disponible (no inventar)
- Misión / visión / valores formales (página `/nosotros` tiene el espacio listo, `nosotros.missionDefined` etc. en `false`)
- Público objetivo explícito (industria, tamaño de empresa)
- Diferenciadores frente a competidores
- Testimonios/reseñas reales (sección Reviews lista con estado vacío — `reviews: []` en `content.js`)
- Contenido real de portfolio (fotos/video) — cliente creará un Google Drive para esto; `/portfolio` muestra "Próximamente" mientras `portfolioItems` esté vacío
- Dominio propio definitivo (usará subdominio de Netlify por ahora, migrará a Hostinger)

## Estructura del sitio (multi-página, sept 2026)
Por pedido explícito del cliente (`Nitido_com.docx` + maqueta de referencia
`hotpink-lyrebird-builder-0t3c8sbd7ktywkaj.hostingersite.com`, robots-disallowed),
el sitio pasó de landing de una página a multi-página real (ver ADR-005):
`/`, `/nosotros`, `/servicios/creativos`, `/servicios/digitales`, `/portfolio`, `/contacto`.
