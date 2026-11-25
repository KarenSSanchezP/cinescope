## Iteración 01 — Inicialización del entorno

**Objetivo:** Crear la estructura inicial de CineScope utilizando Next.js 16, TypeScript, Tailwind CSS y App Router, con un repositorio público en GitHub.

**Herramienta de IA:** ChatGPT.

### Actividades realizadas

- Creación y clonación del repositorio público.
- Inicialización mediante `create-next-app`.
- Instalación de Next.js 16.4.6 y React 19.3.0.
- Verificación de la configuración de Git.
- Ejecución de comprobaciones de TypeScript y ESLint.
- Ejecución del servidor local y comprobación de la respuesta HTTP 200.

**Dificultad encontrada:** El primer intento de inicialización detectó un conflicto con un archivo `README.md` existente.

**Solución:** Se resolvió el conflicto y se repitió la inicialización dentro del repositorio.

**Resultado:** Aplicación inicial de Next.js 16.4.6 funcionando localmente, sin errores de TypeScript ni ESLint. Compilación de producción exitosa y código publicado en GitHub.

### Commit realizado 

`chore: inicializar Next.js 16 con TypeScript y Tailwind CSS` - (`ee788f1`).

---

## Iteración 02 — Identidad visual e interfaz base

**Objetivo:** Implementar una portada editorial cinematográfica, un sistema de diseño reutilizable y un layout responsive.

**Herramienta de IA:** ChatGPT.

### Prompt utilizado

Implementar la identidad visual de CineScope con Next.js 16, TypeScript y Tailwind CSS, utilizando una estética editorial cinematográfica con negro obsidiana, marfil, rojo óxido y tipografía serif. Crear componentes reutilizables para encabezado y pie de página, así como una portada responsive, sin integrar todavía TMDB.

### Decisiones técnicas

- Definir tokens de diseño mediante variables CSS.
- Utilizar Server Components en los componentes estáticos.
- Crear componentes independientes para el encabezado y el pie de página.
- Evitar librerías adicionales.
- No crear enlaces hacia rutas que todavía no existen.
- Utilizar elementos semánticos y mejoras de accesibilidad.

### Archivos modificados

- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`

### Archivos creados

- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/SiteFooter.tsx`

### Validación

Pendiente de ejecutar las pruebas locales de TypeScript, ESLint, compilación y responsive.

### Problemas y correcciones

Pendiente de registrar los resultados reales.

### Commit previsto

`feat: implementar identidad visual y portada de CineScope`