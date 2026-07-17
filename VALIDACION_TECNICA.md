# Validación técnica del proyecto

Fecha de revisión: 17 de julio de 2026.

## Comprobaciones realizadas

- **Estructura HTML:** se analizaron `index.html` y las tres páginas de cápsula. Todas contienen `html`, `head`, `body` y etiquetas correctamente anidadas según el analizador utilizado.
- **Identificadores:** no se detectaron identificadores `id` duplicados.
- **Pantalla inicial:** cada cápsula contiene exactamente una sección con las clases `pantalla activa`.
- **Navegación:** todos los botones con `data-ir` apuntan a una sección existente de la misma página.
- **Nodos y actividades:** cada cápsula contiene cuatro nodos temáticos, cuatro microactividades y un taller integrador de tres casos definido en `js/app.js`.
- **Accesibilidad básica:** todas las imágenes tienen `alt`; todos los `iframe` tienen `title`; existe enlace para saltar al contenido y las devoluciones usan regiones `aria-live`.
- **Rutas locales:** se comprobaron **52** referencias locales (`src` y `href`); todas existen dentro del proyecto.
- **JavaScript:** `node --check js/app.js` finalizó sin errores de sintaxis. Los **29** identificadores consultados con `getElementById` existen en las tres cápsulas.
- **CSS:** el archivo mantiene balance entre llaves de apertura y cierre y no requiere preprocesadores ni frameworks.
- **Multimedia:** los tres microvideos contienen video H.264, audio AAC y subtítulos WebVTT; las tres pistas musicales son MP3 y duran más de veinte segundos.
- **Publicación:** todas las rutas son relativas y funcionan desde la raíz del repositorio, por lo que el proyecto es compatible con GitHub Pages.

## Microvideos incluidos

- `01_reales_potencias_raices_logaritmos.mp4`: 78.6 s, 1280×720.
- `02_ecuaciones_condiciones_iniciales.mp4`: 73.0 s, 1280×720.
- `03_inecuaciones_intervalos_valor_absoluto.mp4`: 91.0 s, 960×540.

## Prueba manual recomendada después de publicar

1. Abrir el portal y entrar a las tres cápsulas.
2. Recorrer los cuatro nodos de cada una y volver siempre al mapa.
3. Responder una microactividad y los tres casos del taller.
4. Guardar, borrar y exportar una entrada de bitácora.
5. Reproducir las tres pistas, el microvideo local y un recurso externo.
6. Repetir la prueba en computadora y celular.
