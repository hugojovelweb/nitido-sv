# Deployment

## Netlify (actual)

**Opción A — Git (recomendada):**
1. Sube este proyecto a un repositorio de GitHub/GitLab.
2. En [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project".
3. Conecta el repo. Netlify detecta `netlify.toml` automáticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Cada `git push` vuelve a desplegar automáticamente.

**Opción B — Deploy manual (drag & drop):**
1. Corre `npm run build` localmente.
2. Arrastra la carpeta `dist/` generada a [app.netlify.com/drop](https://app.netlify.com/drop).

## Hostinger (destino final — ver ADR-002)

1. Corre `npm run build`.
2. Abre hPanel → Administrador de Archivos → `public_html`.
3. Sube **el contenido** de `dist/` (no la carpeta `dist` en sí) directamente a `public_html`.
4. Verifica que `index.html` quede en la raíz de `public_html`.
5. Si usas un subdominio o carpeta específica, ajusta las rutas si es necesario (este proyecto usa rutas absolutas `/`, funciona en la raíz del dominio).

**Antes de migrar a Hostinger definitivamente**, actualizar en el código:
- `index.html`: `<link rel="canonical">`, Open Graph `og:url`, `og:image`
- `public/robots.txt`: URL del sitemap
- `public/sitemap.xml`: URL final

con el dominio real de Hostinger.

## Variables de entorno

Ninguna requerida en esta fase (sin backend). Cuando se conecte el proveedor de formulario (ver ADR-004), su API key **nunca** debe ir hardcodeada en el código fuente — usar variables de entorno de Netlify/Hostinger según corresponda.
