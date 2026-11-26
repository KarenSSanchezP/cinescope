# CineScope — Registro de Vibe Coding

## Descripción del proyecto

CineScope es una aplicación web de exploración cinematográfica desarrollada con **Next.js 16, TypeScript y Tailwind CSS**, utilizando TMDB API para consultar información de películas.

El proyecto utiliza **ChatGPT como copiloto de desarrollo**, mediante un proceso iterativo de generación de código, revisión técnica, corrección de errores y validación.

**Repositorio:** https://github.com/KarenSSanchezP/cinescope

**Aplicación:** https://cinescope-nu-fawn.vercel.app/

---

## Iteración 01 — Inicialización del proyecto

**Objetivo:** Configurar Next.js 16 con App Router, TypeScript, Tailwind CSS y GitHub.

### Prompt principal

> Actúa como Senior Frontend Engineer especializado en Next.js 16+, TypeScript, React y Tailwind CSS. Vamos a construir desde cero CineScope, una aplicación de exploración cinematográfica. Guíame paso a paso para inicializar el proyecto, configurar las tecnologías, organizar el repositorio y verificar que el entorno funcione correctamente. Trabajaremos por iteraciones, validando cada etapa antes de continuar.

*Prompt representativo de las instrucciones iniciales.*

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

### Prompt principal

> Implementar la identidad visual de CineScope con Next.js 16, TypeScript y Tailwind CSS, utilizando una estética editorial cinematográfica con negro obsidiana, marfil, rojo óxido y tipografía serif. Crear componentes reutilizables para encabezado y pie de página, así como una portada responsive, sin integrar todavía TMDB.

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

### Prompt principal

> Integra TMDB API v3 en CineScope para consultar películas populares y mostrarlas en la página principal. Utiliza TypeScript para definir los modelos de datos, centraliza las solicitudes HTTP, protege el token mediante variables de entorno y crea componentes reutilizables. Implementa un Route Handler interno, estados de carga con Suspense y manejo de errores. Conserva la identidad visual existente.

*Prompt reconstruido a partir de los requisitos de la iteración.*

**Decisiones técnicas:**

- Token protegido mediante `.env.local`.
- Solicitudes centralizadas en `src/lib/tmdb.ts`.
- Endpoint interno `/api/movies/popular`.
- Componentes `MovieCard` y `PopularMovies`.
- Uso de `Suspense` para la carga de datos.

### Problemas encontrados y soluciones

**1. Error de ESLint: `react-hooks/error-boundaries`**

La IA generó JSX dentro de un bloque `try/catch`.

**Solución:** Se separó la consulta a TMDB del renderizado de componentes, colocando los estados de error, vacío y éxito fuera del bloque.

**2. Error de conexión con TMDB (502)**

Durante una compilación, una solicitud a TMDB falló.

**Solución:** Se realizaron pruebas mediante `Test-NetConnection`, `curl.exe` y `fetch()` de Node.js. Posteriormente, el endpoint interno respondió HTTP 200. No se determinó la causa exacta del fallo inicial.

**3. Error de prerenderizado: `Date.now()`**

Next.js 16 detectó una operación temporal inestable durante el prerenderizado de `PopularMovies`.

**Solución:** Se incorporó `await connection()` desde `next/server`, manteniendo el componente dentro de `Suspense`.

### Resultado

- Autenticación con TMDB funcionando.
- Endpoint interno respondiendo HTTP 200.
- Películas reales mostradas con pósteres y calificaciones.
- Error de prerenderizado corregido.
- Integración validada localmente.

**Commit:** `d332aa7`

---

## Iteración 04 — Funcionalidades del MVP

**Objetivo:** Completar las rutas y funcionalidades principales de CineScope.

### Prompt principal

> Completemos las funcionalidades restantes de CineScope en una sola iteración, priorizando los requisitos de la actividad. Implementa detalles de películas mediante rutas dinámicas, búsqueda por título, exploración con filtros por género y una sección de favoritos. Reutiliza la integración con TMDB, conserva el diseño actual e incluye Client Components, useState, useEffect y manejo de errores. Necesitamos terminar el proyecto en el tiempo disponible.

*Prompt representativo de la solicitud de completar el MVP en aproximadamente una hora.*

**Funcionalidades implementadas:**

- Ruta `/movies/[id]` para detalles de películas.
- Página `/discover` con filtros por género.
- Página `/search` para búsqueda por título.
- Página `/favorites` con almacenamiento local.
- Client Components con `useState` y `useEffect`.
- Route Handlers y estados de carga, errores y resultados vacíos.

**Decisiones técnicas:**

- Reutilizar servicios y componentes existentes.
- Mantener las credenciales exclusivamente en el servidor.
- Utilizar App Router para las rutas.
- Implementar favoritos mediante `localStorage`, sin base de datos adicional.

### Problema encontrado y solución

**Error de prerenderizado: `new Date()`**

Next.js detectó un valor temporal inestable en `SiteFooter.tsx`, que impedía completar el build de producción.

**Solución:** Se reemplazó `new Date().getFullYear()` por el valor estático `2026`. También se agregó `data-scroll-behavior="smooth"` al elemento `<html>` para resolver una advertencia de navegación.

### Resultado

- Cinco rutas de interfaz implementadas.
- Búsqueda, filtros, detalles y favoritos funcionando localmente.
- Errores de prerenderizado corregidos.
- TypeScript, ESLint y build de producción exitosos.

**Commit:** `b0e88e3`

---

## Iteración 05 — Despliegue y entrega

**Objetivo:** Publicar CineScope en Vercel y preparar los entregables finales.

### Prompt principal

> Continuemos con la publicación de CineScope. Guíame para desplegar la aplicación en Vercel desde el repositorio de GitHub, configurar correctamente la variable de entorno de TMDB y verificar que las páginas funcionen en producción. También necesitamos actualizar README.md y VIBE_CODING.md para dejar el proyecto listo para entregar.

*Prompt representativo de las solicitudes de despliegue y revisión documental.*

**Actividades realizadas:**

- Publicación del MVP en GitHub.
- Importación del repositorio en Vercel.
- Configuración de `TMDB_ACCESS_TOKEN` en el entorno de despliegue.
- Ejecución de la compilación de producción.
- Obtención de una URL pública.

**Resultado:** Vercel confirmó el despliegue en estado `READY`, correspondiente al commit `b0e88e3`.

**Validación final:** Se comprobó el acceso público a CineScope mediante una ventana InPrivate de Microsoft Edge, sin necesidad de iniciar sesión. Asimismo, se verificó el funcionamiento de las rutas principales, la búsqueda de películas, los filtros por género, las fichas de detalles y la gestión de favoritos en producción.

**URL:** https://cinescope-nu-fawn.vercel.app/

---

## Lecciones aprendidas

- El código generado por IA debe revisarse y validarse antes de utilizarse.
- Separar los datos de la presentación facilita el mantenimiento.
- Una compilación exitosa no garantiza el funcionamiento de una API externa.
- La depuración mediante pruebas ayuda a identificar problemas reales.
- Next.js 16 requiere comprender `Suspense`, Cache Components y el prerenderizado.
- Git permite evidenciar el desarrollo iterativo y las correcciones realizadas.

---

## Estado del proyecto

| Iteración | Estado |
|---|---|
| 01. Inicialización | Completada |
| 02. Diseño de interfaz | Completada |
| 03. Integración TMDB | Completada |
| 04. Funcionalidades del MVP | Completada |
| 05. Despliegue y entrega | Completada |

**Nota metodológica:** Se documentan las instrucciones principales utilizadas durante el desarrollo. Algunos prompts se presentan como reconstrucciones representativas, conservando los requisitos y objetivos originales. Los resultados, errores y correcciones corresponden al proceso real de implementación.