#!/usr/bin/env bash
# ============================================================
# Nitido Landing - Setup y ejecución en Debian / XFCE (o cualquier Linux)
# ============================================================
set -e

echo ""
echo "=== Nítido Landing - Setup (Debian/XFCE) ==="
echo ""

if ! command -v node >/dev/null 2>&1; then
  echo "[!] Node.js no está instalado."
  echo ""
  echo "Instálalo con NodeSource (recomendado, Node 20 LTS):"
  echo "  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
  echo "  sudo apt-get install -y nodejs"
  echo ""
  echo "O usando nvm:"
  echo "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"
  echo "  nvm install 20"
  echo ""
  exit 1
fi

echo "Node detectado: $(node -v)"
echo "npm detectado:  $(npm -v)"
echo ""

echo "Instalando dependencias..."
npm install

echo ""
echo "Listo. Comandos disponibles:"
echo "  npm run dev      -> servidor de desarrollo (http://localhost:5173)"
echo "  npm run build    -> compila a /dist para producción (Netlify o Hostinger)"
echo "  npm run preview  -> sirve /dist localmente para probar el build"
echo ""

read -p "¿Iniciar el servidor de desarrollo ahora? (s/n): " respuesta
if [[ "$respuesta" == "s" || "$respuesta" == "S" ]]; then
  npm run dev
fi
