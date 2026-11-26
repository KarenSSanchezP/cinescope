# CineScope 🎬

**CineScope** es una aplicación web de exploración cinematográfica desarrollada con Next.js 16, TypeScript y Tailwind CSS. Permite descubrir películas, consultar información detallada, realizar búsquedas, explorar géneros y guardar películas favoritas.

El proyecto fue desarrollado como actividad académica del programa **Full Stack Jr. de KODIGO**, utilizando inteligencia artificial como copiloto mediante un proceso de Vibe Coding.

## Enlaces

- **Aplicación:** https://cinescope-nu-fawn.vercel.app/
- **Repositorio:** https://github.com/KarenSSanchezP/cinescope
- **Documentación del desarrollo:** [VIBE_CODING.md](./VIBE_CODING.md)

## Funcionalidades

- Exploración de películas populares mediante TMDB API.
- Búsqueda de películas por título.
- Filtrado de películas por género.
- Consulta de fichas con información cinematográfica.
- Gestión de favoritos con persistencia en `localStorage`.
- Diseño responsive para móviles y computadoras.
- Manejo de estados de carga, errores y resultados vacíos.

## Tecnologías utilizadas

| Tecnología | Propósito |
|---|---|
| Next.js 16 | Framework y App Router |
| React 19 | Componentes e interactividad |
| TypeScript | Tipado estático |
| Tailwind CSS 4 | Estilos y diseño responsive |
| TMDB API v3 | Información cinematográfica |
| Git y GitHub | Control de versiones |
| Vercel | Despliegue en producción |
| ChatGPT | Asistencia de desarrollo mediante IA |

## Instalación local

**Requisitos:** Node.js 20.9 o superior, npm y Git.

1. Clonar el repositorio:

```bash
git clone https://github.com/KarenSSanchezP/cinescope.git
cd cinescope
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear `.env.local` en la raíz del proyecto, tomando como referencia `.env.example`:

```env
TMDB_ACCESS_TOKEN=tu_token_de_lectura
```

El token se obtiene desde https://www.themoviedb.org/settings/api.

4. Iniciar el servidor:

```bash
npm run dev
```

5. Abrir http://localhost:3000.

**Seguridad:** El archivo `.env.local` contiene credenciales privadas y no debe publicarse en GitHub.

## Rutas principales

| Ruta | Descripción |
|---|---|
| `/` | Inicio y películas populares |
| `/discover` | Exploración por género |
| `/search` | Búsqueda de películas |
| `/movies/[id]` | Detalles de una película |
| `/favorites` | Colección de favoritos |

La aplicación también incluye Route Handlers para consumir TMDB desde el servidor sin exponer el token de acceso.

## Validación

El proyecto fue comprobado localmente mediante:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Las tres comprobaciones finalizaron sin errores tras las correcciones realizadas durante el desarrollo.

## Vibe Coding

CineScope fue desarrollado mediante iteraciones guiadas por ChatGPT, incluyendo generación de código, revisión técnica, depuración, validación y control de versiones.

Los prompts principales, decisiones técnicas, problemas y soluciones se documentan en [VIBE_CODING.md](./VIBE_CODING.md).

## Despliegue

La aplicación está desplegada en **Vercel**.

**URL:** https://cinescope-nu-fawn.vercel.app/

La variable `TMDB_ACCESS_TOKEN` se configura en el entorno del proyecto en Vercel.

## Créditos y atribución

Este producto utiliza la API de TMDB, pero no está respaldado ni certificado por TMDB.

*This product uses the TMDB API but is not endorsed or certified by TMDB.*

Los datos e imágenes cinematográficas se obtienen de [The Movie Database (TMDB)](https://www.themoviedb.org/).

## Autoría

Proyecto académico individual desarrollado para el programa Full Stack Jr. de KODIGO.

**GitHub:** [KarenSSanchezP](https://github.com/KarenSSanchezP)