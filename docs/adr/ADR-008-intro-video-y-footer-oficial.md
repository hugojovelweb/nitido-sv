# ADR-008: Intro animada con video de Design y footer oficial de Nítido

## Contexto
El equipo de Design de Nítido entregó un video animado (`IMG_8481.MOV`, 1920×1080, **2,1 s**, con
audio sin uso) para reemplazar la animación de entrada del sitio. Además el cliente fijó que el footer
actual (copyright de Nítido + firma de autoría de Hugo Jovel Web) se mantiene tal cual.

## Decisión: intro
- El video se usa como **intro de entrada** (`components/layout/Splash.jsx`), una vez por sesión del navegador.
- Archivos: `public/intro/nitido-intro.mp4` (433 KB, H.264) y `nitido-intro.webm` (304 KB), sin audio.
- Termina en un fotograma morado; la pantalla se cierra como un **iris** hacia el centro (850 ms) y revela el sitio.
  Las animaciones de entrada del hero esperan a que la intro termine (`lib/splash.js`, `lib/motion.js`).
- Se puede saltar con el botón "Saltar" o con Esc. Con `prefers-reduced-motion`, ahorro de datos, autoplay bloqueado,
  error de carga o si el video no arranca en 3 s, la intro se omite y el sitio carga normal (tope total de 5,5 s).
- Es un diálogo modal accesible (foco en "Saltar", scroll bloqueado mientras dura).
- La **cortina al cambiar de página** (`PageWipe`) se mantiene corta (≈1 s): un video de 2 s en cada navegación
  empeoraría la experiencia. Si Design quiere otra versión para las transiciones internas, se cambia ahí.
- No hay inicio de sesión todavía; cuando exista autenticación (Fase 3) se decide si la intro vuelve a mostrarse.

## Decisión: footer oficial (no cambiar sin pedido expreso del cliente)
```
© {año} Nítido. Todos los derechos reservados.
Hugo Jovel Web.      ← enlace a https://hugojovelweb.tech/ (target="_blank", rel="noopener noreferrer")
```
- Año dinámico. La segunda línea es la firma de autoría del desarrollador y enlaza a su portfolio.
- Parecido a la skill `sello-footer`, pero para Nítido (proyecto establecido) rige esta estructura, no la de las
  maquetas de cliente: no lleva el comentario "reemplazar al cierre del pago".
- Vive en un solo componente (`components/layout/Footer.jsx`), visible en todas las páginas.

## Para agregar a la skill `nitido-web-platform` (copiar/pegar; el entorno de desarrollo no puede guardar cambios ahí)
> **Footer oficial de Nítido.** Dos líneas centradas: `© {año} Nítido. Todos los derechos reservados.` y debajo
> `Hugo Jovel Web.` (enlace a https://hugojovelweb.tech/, `target="_blank"`, `rel="noopener noreferrer"`).
> No modificar sin pedido expreso del cliente. Aplica a todo trabajo del proyecto nitido-sv.

## Consecuencias
- +433 KB que se descargan solo en la primera visita de la sesión (con `preload="auto"`).
- Pedir a Design versión vertical para móvil si quieren que la intro se vea completa (hoy se amplía el video 16:9 al 170 %).
