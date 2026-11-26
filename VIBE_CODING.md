# CineScope — Registro de Vibe Coding

## Descripción del proyecto

CineScope es una aplicación web de exploración cinematográfica desarrollada con **Next.js 16, TypeScript y Tailwind CSS**, utilizando la API de TMDB para consultar películas.

El proyecto utiliza **ChatGPT como copiloto de desarrollo**, siguiendo un proceso iterativo de generación de código, revisión, corrección de errores y validación.

**Repositorio:** https://github.com/KarenSSanchezP/cinescope

---

## Iteración 01 — Inicialización del proyecto

**Objetivo:** Configurar Next.js 16 con App Router, TypeScript, Tailwind CSS y GitHub.

**Prompt principal:** Se solicitó a ChatGPT orientar la creación del proyecto desde cero, priorizando una arquitectura limpia, componentes reutilizables y buenas prácticas.

**Actividades realizadas:**
- Creación del repositorio público en GitHub.
- Inicialización mediante `create-next-app`.
- Configuración y validación del entorno.
- Ejecución de TypeScript, ESLint y build de producción.

**Problema:** El generador detectó un conflicto con el archivo `README.md` existente.

**Solución:** Se resolvió el conflicto y se repitió la inicialización.

**Resultado:** Proyecto funcionando localmente, sin errores de TypeScript ni ESLint y con compilación exitosa.

**Commit:** `ee788f1`

---

## Iteración 02 — Diseño de interfaz

**Objetivo:** Crear la identidad visual de CineScope y una portada responsive.

**Prompt principal:** Se solicitó una interfaz editorial cinematográfica, con negro obsidiana, marfil, rojo óxido, tipografía serif y componentes reutilizables.

**Decisiones técnicas:**
- Variables CSS para colores y estilos globales.
- Server Components para elementos estáticos.
- Componentes independientes para encabezado y pie de página.
- Diseño responsive mediante Tailwind CSS.
- HTML semántico y mejoras de accesibilidad.

**Validación:** TypeScript, ESLint y build exitosos. Se verificó visualmente la interfaz en escritorio y móvil.

**Resultado:** Portada funcional con identidad visual consistente y componentes reutilizables.

**Commit:** `1239b2b`

---

## Iteración 03 — Integración con TMDB API

**Objetivo:** Consultar películas populares desde TMDB y mostrarlas en la página principal.

**Prompt principal:** Se solicitó integrar TMDB API v3 mediante servicios de servidor, interfaces TypeScript, componentes reutilizables, Route Handlers y manejo de estados de carga y error.

**Decisiones técnicas:**
- Token protegido mediante `.env.local`.
- Solicitudes centralizadas en `src/lib/tmdb.ts`.
- Endpoint interno `/api/movies/popular`.
- Componentes `MovieCard` y `PopularMovies`.
- Uso de `Suspense` para la carga de datos.

### Problemas encontrados y soluciones

**1. Error de ESLint: `react-hooks/error-boundaries`**

El código generado por IA construía JSX dentro de `try/catch`.

**Solución:** Se separó la consulta a TMDB del renderizado de componentes, manteniendo los estados de error, vacío y éxito fuera del bloque `try/catch`.

**2. Error de conexión con TMDB (502)**

Durante el build, una solicitud a TMDB falló.

**Solución:** Se realizaron pruebas con `Test-NetConnection`, `curl.exe` y `fetch()` de Node.js. Posteriormente, el endpoint interno respondió HTTP 200. La causa exacta del fallo inicial no se determinó.

**3. Error de prerenderizado: `Date.now()`**

Next.js 16 detectó una operación temporal inestable durante el prerenderizado de `PopularMovies`.

**Solución:** Se incorporó `await connection()` desde `next/server`, manteniendo el componente dentro de `Suspense`.

### Resultado

- Conexión autenticada con TMDB funcionando.
- Endpoint interno respondiendo HTTP 200.
- Películas reales mostradas con pósteres, títulos, años y calificaciones.
- Error de prerenderizado corregido.

**Validación final:** Pendiente de confirmar con TypeScript, ESLint y build después de las correcciones.

**Commit:** `d332aa7`.

## Iteración 04 — Implementación de funcionalidades del MVP

**Objetivo:** Completar las funcionalidades principales de CineScope mediante nuevas rutas, búsqueda de películas, filtros por género y gestión de favoritos.

**Prompt principal:** Se solicitó a ChatGPT implementar las funcionalidades restantes de CineScope con Next.js 16 y TypeScript, reutilizando la integración con TMDB, manteniendo la identidad visual y cumpliendo los requisitos técnicos de la actividad.

**Funcionalidades implementadas:**
- Ruta dinámica `/movies/[id]` para consultar detalles de películas.
- Página `/discover` con exploración y filtros por género.
- Página `/search` para buscar películas por título.
- Página `/favorites` para administrar películas favoritas.
- Persistencia de favoritos mediante `localStorage`.
- Uso de Client Components con `useState` y `useEffect`.
- Route Handlers para consultar TMDB desde el servidor.
- Manejo de estados de carga, errores y resultados vacíos.

**Decisiones técnicas:**
- Reutilizar los servicios y componentes existentes.
- Mantener el token de TMDB protegido en `.env.local`.
- Utilizar rutas dinámicas mediante App Router.
- Almacenar los favoritos localmente para evitar una base de datos innecesaria.
- Conservar el diseño responsive y los estilos de CineScope.

### Problema encontrado y solución

**1. Error de prerenderizado: `new Date()`**

Next.js 16 detectó un valor temporal inestable en `SiteFooter.tsx`, debido al uso de `new Date().getFullYear()`.

El error afectaba varias rutas y provocaba que `npm run build` fallara durante la generación de páginas.

**Solución:** Se reemplazó el cálculo dinámico del año por el valor estático `2026`. También se agregó `data-scroll-behavior="smooth"` al elemento `<html>` para resolver una advertencia de navegación.

### Resultado

- Cinco páginas o rutas de interfaz implementadas.
- Consulta de detalles de películas funcionando.
- Búsqueda y filtros por género funcionando.
- Gestión de favoritos implementada.
- Endpoints internos respondiendo correctamente.
- Error de prerenderizado corregido.
- Validaciones `npx tsc --noEmit`, `npm run lint` y `npm run build` completadas exitosamente.

**Commit:** Pendiente de registrar.

---

## Lecciones aprendidas

- El código generado por IA debe revisarse y validarse antes de utilizarse.
- Separar la lógica de datos de los componentes visuales facilita el mantenimiento.
- Una compilación exitosa no garantiza que las API externas funcionen.
- Las herramientas de depuración permiten identificar y corregir problemas reales.
- Next.js 16 requiere comprender el comportamiento de `Suspense`, Cache Components y el prerenderizado.

---

## Estado del proyecto

| Iteración | Estado |
|---|---|
| 01. Inicialización | Completada |
| 02. Identidad visual | Completada |
| 03. Integración TMDB | Validación final pendiente |
| 04. Detalles de películas | Pendiente |
| 05. Búsqueda y filtros | Pendiente |
| 06. Favoritos | Pendiente |
| 07. Pruebas y despliegue | Pendiente |

*Este documento se actualizará conforme avance el desarrollo de CineScope.*