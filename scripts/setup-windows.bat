@echo off
REM ============================================================
REM Nitido Landing - Setup y ejecucion en Windows
REM Requiere: Node.js 18+ instalado (https://nodejs.org)
REM ============================================================

echo.
echo === Nitido Landing - Setup (Windows) ===
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] No se encontro Node.js. Descargalo en https://nodejs.org ^(version LTS^) e instalalo.
    pause
    exit /b 1
)

echo Node detectado:
node -v
echo.

echo Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Fallo la instalacion de dependencias.
    pause
    exit /b 1
)

echo.
echo Iniciando servidor de desarrollo en http://localhost:5173
echo Presiona Ctrl+C para detener.
echo.
call npm run dev

pause
