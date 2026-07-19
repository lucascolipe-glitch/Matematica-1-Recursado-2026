# Validación técnica del proyecto corregido

Fecha de revisión: 18 de julio de 2026.

## Problemas encontrados y corregidos

- `js/app.js` contenía texto explicativo y etiquetas HTML pegadas después del cierre del programa. Eso producía un **error de sintaxis** y detenía toda la navegación, las actividades, el progreso, la bitácora y los videos.
- `css/estilos.css` correspondía parcialmente a otro proyecto —todavía aparecía la referencia «Del plano al espacio»— y no contenía las reglas necesarias para varias clases del portal y de las cápsulas.
- El portal cargaba MathJax aunque no contiene fórmulas. Se retiró esa carga de `index.html` para acelerar la portada; MathJax se conserva en las tres cápsulas.
- Se agregó una versión a las rutas de CSS y JavaScript para evitar que GitHub Pages o el navegador sigan mostrando archivos anteriores almacenados en caché.
- Se eliminó `capsulas-config.json` porque el proyecto no lo utiliza: los casos están en `js/app.js` y los contenidos teóricos en los HTML.
- La navegación por hash ahora tiene un respaldo para los navegadores que restringen `history.replaceState` al abrir archivos locales.
- Los videos de YouTube ya no se cargan mientras la sección multimedia permanece oculta; se cargan al entrar en ella.

## Comprobaciones realizadas

- **Estructura HTML:** se analizaron `index.html` y las tres páginas de cápsula.
- **Identificadores:** no se detectaron valores `id` duplicados.
- **Pantalla inicial:** cada cápsula contiene exactamente una sección con las clases `pantalla activa`.
- **Navegación interna:** todos los controles con `data-ir` apuntan a una sección existente de su misma página.
- **Rutas locales:** se comprobaron **52 referencias locales** de imágenes, hojas de estilo, scripts, documentos, audios, videos y subtítulos. Todas existen dentro del proyecto.
- **JavaScript:** `node --check js/app.js` finalizó sin errores.
- **Elementos usados por JavaScript:** los **29 identificadores** consultados mediante `getElementById` existen en las tres cápsulas.
- **CSS:** las llaves de apertura y cierre están balanceadas. No requiere frameworks ni preprocesadores.
- **Accesibilidad básica:** las imágenes tienen texto alternativo, los `iframe` tienen título, existe enlace para saltar al contenido y las devoluciones utilizan `aria-live`.
- **Multimedia local:** los tres audios son archivos MP3 válidos y los tres microvideos son MP4 válidos; las pistas de subtítulos `.vtt` están presentes.
- **GitHub Pages:** todas las rutas locales son relativas a la estructura del repositorio.

## Responsive del portal

- **Computadora:** hero en dos columnas, tres tarjetas en una fila, orientaciones en dos columnas y bloque de materiales al final, conservando la distribución de la primera versión.
- **Tablet:** hero en una columna; las cápsulas se organizan en dos columnas y la tercera ocupa todo el ancho.
- **Celular:** navegación compacta, hero, tarjetas, orientaciones, botones y pie en una sola columna.

## Alcance de la validación

La comprobación automática cubre archivos y rutas internas. Los recursos de YouTube y Google Drive dependen de conexión a Internet, permisos y disponibilidad del proveedor; se conservaron sus enlaces alternativos.

## Prueba manual recomendada después de publicar

1. Esperar a que GitHub Pages termine el despliegue y recargar con `Ctrl + F5`.
2. Abrir el portal en computadora y reducir progresivamente el ancho de la ventana.
3. Entrar a las tres cápsulas y comprobar **Comenzar**, **Propósito**, **Mapa**, **Taller**, **Multimedia** y **Créditos**.
4. Recorrer los cuatro nodos y regresar siempre al mapa.
5. Responder una microactividad y los tres casos del taller.
6. Guardar, borrar y exportar una entrada de bitácora.
7. Reproducir audio, microvideo local y un recurso externo.
