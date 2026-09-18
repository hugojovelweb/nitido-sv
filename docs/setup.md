# Setup — Windows, Debian/Xfce y VS Code

## 1. Instalar Node.js (una sola vez por máquina)

### Windows

1. Descarga el instalador **LTS** desde https://nodejs.org (botón grande, versión "LTS").
2. Ejecuta el `.msi` y deja todas las opciones por defecto (incluye npm).
3. Verifica en PowerShell o CMD:
   ```powershell
   node -v
   npm -v
   ```

### Debian / Xfce (Debian 12/13 con escritorio Xfce)

Usa NodeSource para obtener una versión reciente (el repositorio de Debian trae versiones viejas):

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
```

Si prefieres no usar `sudo` con un script remoto, alternativa vía `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## 2. Extraer el proyecto

Descomprime `nitido-landing.zip` donde prefieras trabajar, por ejemplo:

- Windows: `C:\Users\TuUsuario\Proyectos\nitido-landing`
- Debian: `~/Proyectos/nitido-landing`

## 3. Abrir en VS Code

1. Instala VS Code: https://code.visualstudio.com (Windows: instalador `.exe`; Debian: `.deb` o `sudo apt install code` si ya agregaste el repo de Microsoft).
2. Abre la carpeta del proyecto:
   ```bash
   code nitido-landing
   ```
3. Extensiones recomendadas (VS Code las sugerirá automáticamente si tienes `.vscode/extensions.json`):
   - **ES7+ React/Redux/React-Native snippets**
   - **Tailwind CSS IntelliSense**
   - **Prettier - Code formatter**
4. Abre una terminal integrada: `Terminal → New Terminal` (o `` Ctrl+ñ `` / `` Ctrl+` ``).

## 4. Instalar dependencias y correr

Dentro de la terminal de VS Code (o cualquier terminal, Windows/Debian):

```bash
cd nitido-landing
npm install
npm run dev
```

Abre el navegador en la URL que muestra la terminal (normalmente `http://localhost:5173`). Los cambios en el código se reflejan automáticamente (hot reload).

## 5. Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` — es lo único que se sube al hosting final (Netlify o Hostinger).

Para revisar el build localmente antes de subirlo:

```bash
npm run preview
```

## 6. Variables de entorno (formulario de contacto)

Si vas a conectar el formulario a un proveedor real de envío (Formspree, por ejemplo):

1. Crea un archivo `.env` en la raíz del proyecto (mismo nivel que `package.json`).
2. Agrega:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/tu-id-real
   ```
3. Reinicia `npm run dev` para que tome la variable.

Sin esta variable, el formulario funciona igual pero abre el cliente de correo del visitante como respaldo (ver `docs/adr/ADR-004-contact-form.md`).

## Problemas comunes

| Problema | Causa probable | Solución |
|---|---|---|
| `npm: command not found` | Node no instalado o terminal no reiniciada | Reinstala Node y abre una terminal nueva |
| Puerto 5173 ocupado | Otro proceso Vite corriendo | Cierra el otro proceso o usa `npm run dev -- --port 5174` |
| Estilos de Tailwind no aparecen | Falta `npm install` o caché de Vite corrupta | `rm -rf node_modules/.vite` y vuelve a correr `npm run dev` |
| Fuentes se ven distintas a Instagram | Se usa Anton/Poppins como sustituto de "Ultra System" (no se recibieron los archivos de esa fuente) | Ver `docs/assets.md` — agregar los archivos de fuente cuando estén disponibles |
