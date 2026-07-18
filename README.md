# Tres cápsulas interactivas · Matemática 1 · FaCiAS · UNCo

Proyecto estático en HTML, CSS y JavaScript, listo para abrir localmente o publicar en GitHub Pages.

## Estructura

- `index.html`: portal de entrada a las tres cápsulas.
- `capsulas/reales.html`: números reales, recta, potencias, raíces y logaritmos.
- `capsulas/ecuaciones.html`: equivalencia, métodos y condiciones iniciales.
- `capsulas/inecuaciones.html`: intervalos, signos y valor absoluto.
- `css/estilos.css`: identidad visual y diseño responsive.
- `js/app.js`: navegación, actividades, progreso, bitácora, audio y videos.
- `assets/img/`: ilustraciones y mapas conceptuales en SVG.
- `assets/audio/`: tres pistas originales para la pausa reflexiva.
- `assets/video/`: tres microvideos creados para las cápsulas y subtítulos `.vtt`.
- `assets/documentos/`: materiales de la cátedra utilizados como fuente.

## Abrir y comprobar

1. Descomprimí el proyecto.
2. Abrí `index.html` con Firefox, Chrome o Chromium.
3. Entrá a cada cápsula y comprobá:
   - botones **Comenzar**, **Propósito**, **Mapa**, **Taller**, **Multimedia** y **Créditos**;
   - cuatro nodos y sus decisiones rápidas;
   - tres casos del taller y sus devoluciones;
   - guardado, borrado y exportación de la bitácora;
   - reproducción de audio y video.

Para una prueba más parecida a GitHub Pages, desde la carpeta ejecutá:

```bash
python3 -m http.server 8000
```

Luego abrí `http://localhost:8000`.

## Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub.
2. Subí **todo el contenido** de esta carpeta, conservando las rutas.
3. En el repositorio, abrí **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. Seleccioná la rama `main` y la carpeta `/ (root)`.
6. Guardá. GitHub mostrará la dirección pública cuando termine la publicación.

## Reemplazar imágenes

Las ilustraciones están en `assets/img/`. Podés reemplazar un SVG manteniendo exactamente el mismo nombre. También podés cambiar la ruta en el atributo `src` del HTML correspondiente.

- Portadas: `hero-portal.svg`, `hero-reales.svg`, `hero-ecuaciones.svg`, `hero-inecuaciones.svg`.
- Esquemas: `mapa-reales.svg`, `mapa-ecuaciones.svg`, `mapa-inecuaciones.svg`.

Conservá un texto alternativo descriptivo en `alt`.

## Reemplazar audios

Los audios están en `assets/audio/`. Para mantener la configuración actual, reemplazá:

- `pausa-respirar.mp3`
- `pausa-patron.mp3`
- `pausa-foco.mp3`

Para usar otros nombres, editá el arreglo `AUDIOS` al comienzo de `js/app.js`.

## Reemplazar videos locales

Los microvideos están en `assets/video/`. Cada página incluye una ruta `.mp4` y una pista de subtítulos `.vtt`.

- `01_reales_potencias_raices_logaritmos.mp4` + `01_reales.vtt`
- `02_ecuaciones_condiciones_iniciales.mp4` + `02_ecuaciones.vtt`
- `03_inecuaciones_intervalos_valor_absoluto.mp4` + `03_inecuaciones.vtt`

Mantené los nombres o modificá los elementos `<source>` y `<track>` en la cápsula correspondiente.

## Cambiar videos de YouTube

En `js/app.js`, buscá `videos:` dentro de cada configuración (`reales`, `ecuaciones`, `inecuaciones`). Cada video usa:

```js
{id: 'ID_DE_YOUTUBE', titulo: 'Título', descripcion: 'Función pedagógica'}
```

Usá únicamente el ID: en `https://www.youtube.com/watch?v=ABC123`, el ID es `ABC123`.

Los videos originales de la cátedra enlazados mediante Google Drive están escritos directamente en el HTML de las cápsulas de ecuaciones e inecuaciones.

## Cambiar títulos y textos

- Portal: `index.html`.
- Textos teóricos y microactividades: archivos dentro de `capsulas/`.
- Casos del taller y devoluciones: objeto `CONFIG` en `js/app.js`.

Los bloques están comentados y tienen identificadores claros.

## Cambiar colores

Abrí `css/estilos.css` y editá las variables de `:root`:

```css
--azul: #1f4e8c;
--azul-oscuro: #17365f;
--fondo: #f4f7fb;
--texto: #1f2937;
```

## Bitácora y privacidad

La bitácora y el progreso usan `localStorage`. Los datos:

- quedan en el navegador y el dispositivo del estudiante;
- no se envían a un servidor;
- pueden borrarse desde la configuración del navegador;
- pueden exportarse como archivo `.txt` desde el taller.

## Decisiones de diseño

La consigna conservaba referencias a “cónicas” y “cuádricas”, temas de una cápsula anterior. Como los materiales proporcionados corresponden a números reales, ecuaciones, inecuaciones y valor absoluto, el control de navegación se adaptó a **cuatro nodos pertinentes en cada cápsula**. Se mantuvieron la estructura no lineal, la navegación por `data-ir`, el progreso, la bitácora, el laboratorio audiovisual y los recursos originales.

## Uso de inteligencia artificial generativa

El proyecto fue elaborado con asistencia de IA generativa para organizar los contenidos, redactar paráfrasis, programar las interacciones y producir recursos audiovisuales. La propuesta se basa en los materiales de la cátedra incluidos en `assets/documentos/`. La revisión disciplinar, la adecuación a la cursada y la publicación final corresponden al equipo docente.


## Fórmulas matemáticas con MathJax

Las cuatro páginas HTML cargan MathJax desde un CDN. Las fórmulas en línea se escriben entre `\\(` y `\\)`, por ejemplo:

```html
<p>La propiedad es \\(a(b+c)=ab+ac\\).</p>
```

Las fórmulas centradas se escriben entre `\\[` y `\\]`. Cuando JavaScript cambia un caso o una devolución, `js/app.js` vuelve a ejecutar MathJax automáticamente. Para ver las fórmulas al abrir los archivos localmente hace falta conexión a Internet; una vez publicado en GitHub Pages funciona del mismo modo.
