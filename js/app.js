/* ==========================================================================
   MATEMÁTICA 1 · TRES CÁPSULAS
   Navegación, progreso, microactividades, taller, bitácora y multimedia.
   Incluye reprocesamiento de fórmulas mediante MathJax.
   ========================================================================== */

'use strict';

/* ==========================================================================
   DATOS DE LOS TALLERES Y VIDEOS
   Las fórmulas LaTeX dentro de JavaScript llevan doble barra:
   \\( ... \\)
   ========================================================================== */

const CONFIG = {
  reales: {
    nombre: 'Habitar la recta real',

    casos: [
      {
        id: 'R-TP-01',
        titulo: 'Clasificar antes de operar',
        enunciado:
          '¿Cuál es la clasificación más específica de \\(\\sqrt{7}\\)?',
        opciones: [
          'Racional',
          'Irracional',
          'Entero'
        ],
        correcta: 1,
        bien:
          '\\(\\sqrt{7}\\) no puede escribirse como cociente de enteros. Es irracional y, por inclusión, también real.',
        mal:
          'No toda raíz es irracional, pero \\(7\\) no es un cuadrado perfecto. La clasificación más específica es irracional.'
      },

      {
        id: 'R-TP-02',
        titulo: 'Propiedades y prioridades',
        enunciado:
          'Calculá \\(\\frac{2^5}{2^3}+3^{-1}-\\sqrt{2}\\,\\sqrt{2}+\\left(\\frac12\\right)^{-2}\\).',
        opciones: [
          '\\(\\frac{19}{3}\\)',
          '\\(\\frac{13}{3}\\)',
          '\\(6\\)'
        ],
        correcta: 0,
        bien:
          '\\(2^2+\\frac13-2+4=6+\\frac13=\\frac{19}{3}\\). La clave es aplicar las propiedades antes de sumar.',
        mal:
          'Revisá cuatro pasos: cociente de potencias, exponente negativo, producto de raíces y prioridad de operaciones.'
      },

      {
        id: 'R-TP-03',
        titulo: 'Riesgo y logaritmo decimal',
        enunciado:
          'En \\(R=\\log_{10}(PDC)\\), con \\(P=0{,}001\\), \\(D=100\\) y \\(C=0{,}1\\), ¿cuál es \\(R\\)?',
        opciones: [
          '\\(-2\\)',
          '\\(2\\)',
          '\\(-1\\)'
        ],
        correcta: 0,
        bien:
          'El producto es \\(0{,}01=10^{-2}\\); por definición, \\(\\log_{10}(0{,}01)=-2\\).',
        mal:
          'Calculá primero el producto y escribilo como potencia de \\(10\\).'
      }
    ],

    videos: [
      {
        id: '5uA06WqOktc',
        titulo: 'Potenciación, radicación y logaritmación',
        descripcion:
          'Recurso externo para repasar la relación entre las tres operaciones. Contrastá la notación con la del apunte.'
      },
      {
        id: 'pZTuEHrnOMg',
        titulo: 'Logaritmos: conceptos básicos',
        descripcion:
          'Ampliación opcional sobre la definición de logaritmo y el significado del exponente.'
      },
      {
        id: 'tA94S33kxm8',
        titulo: 'Propiedades de la potenciación',
        descripcion:
          'Repaso externo de propiedades. Usalo para comparar procedimientos, no para reemplazar la teoría de la cátedra.'
      }
    ]
  },

  ecuaciones: {
    nombre: 'Equilibrar sin perder soluciones',

    casos: [
      {
        id: 'E-TP-01',
        titulo: 'Eliminar denominadores con uniformidad',
        enunciado:
          'Resolvé \\(\\frac{3a-2}{3}+\\frac{a-3}{2}=\\frac56\\).',
        opciones: [
          '\\(a=2\\)',
          '\\(a=-2\\)',
          '\\(a=1\\)'
        ],
        correcta: 0,
        bien:
          'Multiplicar ambos miembros por \\(6\\) da \\(2(3a-2)+3(a-3)=5\\); de allí \\(9a-13=5\\) y \\(a=2\\).',
        mal:
          'Usá \\(6\\) como denominador común y aplicá la multiplicación a todos los términos.'
      },

      {
        id: 'E-TP-02',
        titulo: 'Simplificar sin olvidar la restricción',
        enunciado:
          '¿Cuál es la solución de \\(\\frac{(x+1)(x-1)}{x-1}=0\\)?',
        opciones: [
          '\\(x=-1\\)',
          '\\(x=1\\)',
          '\\(x=-1\\) o \\(x=1\\)'
        ],
        correcta: 0,
        bien:
          'La condición inicial es \\(x\\ne1\\). Al simplificar queda \\(x+1=0\\), por lo tanto \\(x=-1\\).',
        mal:
          'Calculá la condición inicial antes de cancelar \\(x-1\\).'
      },

      {
        id: 'E-TP-03',
        titulo: 'Identidad con condiciones iniciales',
        enunciado:
          'En \\(\\frac{1}{x-1}+\\frac{2}{x-3}=\\frac{3x-5}{(x-1)(x-3)}\\), ¿cuál es el conjunto solución?',
        opciones: [
          '\\(\\mathbb{R}\\)',
          '\\(\\mathbb{R}\\setminus\\{1,3\\}\\)',
          '\\(\\varnothing\\)'
        ],
        correcta: 1,
        bien:
          'La igualdad se reduce a una identidad, pero \\(x=1\\) y \\(x=3\\) estaban excluidos por los denominadores.',
        mal:
          'Una identidad no borra las condiciones iniciales de la expresión original.'
      }
    ],

    videos: [
      {
        id: '3HaZPMcZfzE',
        titulo: 'Ecuaciones de primer y segundo grado',
        descripcion:
          'Repaso externo de procedimientos con paréntesis, denominadores y ecuaciones cuadráticas.'
      },
      {
        id: '0CHXpRvop8E',
        titulo: 'Ecuaciones logarítmicas y condiciones de existencia',
        descripcion:
          'Ampliación opcional para observar cómo se controlan las condiciones antes y después de resolver.'
      },
      {
        id: 'acxwuPdHVeo',
        titulo: 'Existencia de expresiones logarítmicas',
        descripcion:
          'Recurso externo centrado en el dominio del logaritmo, útil para revisar condiciones iniciales.'
      }
    ]
  },

  inecuaciones: {
    nombre: 'Pensar en regiones',

    casos: [
      {
        id: 'I-TP-01',
        titulo: 'Inecuación lineal',
        enunciado:
          'Resolvé \\(2(x+1)-3(x-2)<x+1\\).',
        opciones: [
          '\\(x>\\frac72\\)',
          '\\(x<\\frac72\\)',
          '\\(x>7\\)'
        ],
        correcta: 0,
        bien:
          'La desigualdad queda \\(-x+8<x+1\\), luego \\(7<2x\\) y \\(x>\\frac72\\).',
        mal:
          'Aplicá distributiva, agrupá \\(x\\) en un miembro y controlá el signo del factor por el que dividís.'
      },

      {
        id: 'I-TP-02',
        titulo: 'Producto y signos',
        enunciado:
          'Resolvé \\((2x-3)(x+1)\\ge0\\).',
        opciones: [
          '\\([-1,\\frac32]\\)',
          '\\(( -\\infty,-1]\\cup[\\frac32,\\infty)\\)',
          '\\(( -\\infty,-1)\\cup(\\frac32,\\infty)\\)'
        ],
        correcta: 1,
        bien:
          'El producto es no negativo fuera de las raíces y las incluye porque el símbolo es \\(\\ge\\).',
        mal:
          'Marcá las raíces \\(-1\\) y \\(\\frac32\\), analizá signos por intervalos y revisá si los extremos se incluyen.'
      },

      {
        id: 'I-TP-03',
        titulo: 'Valor absoluto como intervalo',
        enunciado:
          'Resolvé \\(|3x+4|\\le1\\).',
        opciones: [
          '\\([-\\frac53,-1]\\)',
          '\\([-1,\\frac53]\\)',
          '\\(( -\\infty,-\\frac53]\\cup[-1,\\infty)\\)'
        ],
        correcta: 0,
        bien:
          '\\(-1\\le3x+4\\le1\\) conduce a \\(-5\\le3x\\le-3\\) y finalmente \\(-\\frac53\\le x\\le-1\\).',
        mal:
          'Usá la propiedad del menor: convertí el valor absoluto en una doble desigualdad.'
      }
    ],

    videos: [
      {
        id: '7riQbRBy1sw',
        titulo:
          'Números reales: inecuaciones, intervalos y valor absoluto',
        descripcion:
          'Recurso universitario externo para comparar la organización conceptual con la propuesta de la cátedra.'
      },
      {
        id: 'yPSuv-CoZ3g',
        titulo: 'Inecuaciones de primer grado',
        descripcion:
          'Repaso externo paso a paso con representación gráfica e intervalo.'
      },
      {
        id: 'va07JYlfP3I',
        titulo: 'Inecuaciones con valor absoluto',
        descripcion:
          'Ampliación opcional sobre casos de menor y mayor que.'
      }
    ]
  }
};

/* ==========================================================================
   AUDIOS DE LA PAUSA
   ========================================================================== */

const AUDIOS = [
  {
    titulo: 'Respirar y leer signos',
    archivo: '../assets/audio/pausa-respirar.mp3'
  },
  {
    titulo: 'Patrones en la recta',
    archivo: '../assets/audio/pausa-patron.mp3'
  },
  {
    titulo: 'Pausa de verificación',
    archivo: '../assets/audio/pausa-foco.mp3'
  }
];

/* ==========================================================================
   FUNCIONES DE ALMACENAMIENTO
   ========================================================================== */

const memoriaTemporal = new Map();

function storageGet(clave, respaldo = '') {
  try {
    return localStorage.getItem(clave) ?? respaldo;
  } catch (error) {
    return memoriaTemporal.get(clave) ?? respaldo;
  }
}

function storageSet(clave, valor) {
  try {
    localStorage.setItem(clave, valor);
  } catch (error) {
    memoriaTemporal.set(clave, valor);
  }
}

function storageRemove(clave) {
  try {
    localStorage.removeItem(clave);
  } catch (error) {
    memoriaTemporal.delete(clave);
  }
}

function leerJSON(clave, respaldo) {
  try {
    return JSON.parse(
      storageGet(clave, JSON.stringify(respaldo))
    );
  } catch (error) {
    return respaldo;
  }
}

function guardarJSON(clave, valor) {
  storageSet(clave, JSON.stringify(valor));
}

/*
 * Protege los textos que se insertan mediante innerHTML.
 * Las barras y comandos de LaTeX no se modifican.
 */
function escaparHTML(texto = '') {
  return String(texto).replace(
    /[&<>'"]/g,
    caracter => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    })[caracter]
  );
}

/* ==========================================================================
   FUNCIONES PARA MATHJAX
   ========================================================================== */

/*
 * Borra el procesamiento anterior de MathJax antes de reemplazar
 * dinámicamente el contenido de un elemento.
 */
function limpiarMathJax(elementos) {
  if (!window.MathJax?.typesetClear) {
    return;
  }

  const elementosValidos = elementos.filter(Boolean);

  try {
    window.MathJax.typesetClear(elementosValidos);
  } catch (error) {
    console.warn(
      'No se pudo limpiar el contenido anterior de MathJax:',
      error
    );
  }
}

/*
 * Procesa las fórmulas LaTeX del elemento indicado.
 * Si MathJax todavía no terminó de cargar, espera startup.promise.
 */
function renderizarMathJax(elemento = document) {
  if (!window.MathJax) {
    return Promise.resolve();
  }

  const ejecutar = () => {
    if (!window.MathJax.typesetPromise) {
      return Promise.resolve();
    }

    return window.MathJax
      .typesetPromise([elemento])
      .catch(error => {
        console.warn(
          'No se pudo renderizar MathJax:',
          error
        );
      });
  };

  if (window.MathJax.startup?.promise) {
    return window.MathJax.startup.promise.then(ejecutar);
  }

  return ejecutar();
}

/* ==========================================================================
   INICIO DE LA APLICACIÓN
   ========================================================================== */

const pagina = document.body.dataset.page;

if (pagina === 'capsula') {
  iniciarCapsula();
}

/* ==========================================================================
   FUNCIONES DE CADA CÁPSULA
   ========================================================================== */

function iniciarCapsula() {
  const slug = document.body.dataset.capsula;
  const config = CONFIG[slug];

  if (!config) {
    console.warn(
      `No se encontró la configuración de la cápsula: ${slug}`
    );
    return;
  }

  const STORAGE = {
    progreso: `m1_${slug}_progreso_v1`,
    bitacora: `m1_${slug}_bitacora_v1`,
    taller: `m1_${slug}_taller_v1`
  };

  const estado = {
    caso: 0,
    respondidos: leerJSON(STORAGE.taller, {}),
    video: 0,
    pregunta: 0
  };

  /* ========================================================================
     NAVEGACIÓN ENTRE PANTALLAS
     ======================================================================== */

  function mostrarPantalla(id) {
    document
      .querySelectorAll('.pantalla')
      .forEach(pantalla => {
        pantalla.classList.remove('activa');
      });

    const destino = document.getElementById(id);

    if (!destino) {
      console.warn(
        `No existe una pantalla con el identificador: ${id}`
      );
      return;
    }

    destino.classList.add('activa');

    history.replaceState(
      null,
      '',
      `#${id}`
    );

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const main = document.getElementById(
      'contenido-principal'
    );

    main?.focus({
      preventScroll: true
    });

    if (destino.dataset.nodeId) {
      marcarVisitado(destino.dataset.nodeId);
    }

    if (id === 'mapa') {
      actualizarProgreso();
    }

    /*
     * Cada pantalla estaba oculta con display:none.
     * Por eso se vuelve a ejecutar MathJax cuando aparece.
     */
    renderizarMathJax(destino);
  }

  document.addEventListener('click', evento => {
    const boton = evento.target.closest('[data-ir]');

    if (!boton) {
      return;
    }

    evento.preventDefault();
    mostrarPantalla(boton.dataset.ir);
  });

  const hashInicial = location.hash.slice(1);

  if (
    hashInicial &&
    document.getElementById(hashInicial)
  ) {
    mostrarPantalla(hashInicial);
  }

  /* ========================================================================
     PROGRESO
     ======================================================================== */

  function progresoActual() {
    return leerJSON(
      STORAGE.progreso,
      { visitados: [] }
    );
  }

  function marcarVisitado(id) {
    const progreso = progresoActual();

    if (!progreso.visitados.includes(id)) {
      progreso.visitados.push(id);
      guardarJSON(
        STORAGE.progreso,
        progreso
      );
    }

    actualizarProgreso();
  }

  function actualizarProgreso() {
    const total =
      document.querySelectorAll('[data-node-id]').length || 4;

    const progreso = progresoActual();
    const cantidad = progreso.visitados.length;

    const texto = document.getElementById(
      'texto-progreso'
    );

    const barra = document.getElementById(
      'barra-progreso'
    );

    if (texto) {
      texto.textContent =
        `${cantidad} de ${total} nodos`;
    }

    if (barra) {
      barra.style.width =
        `${Math.min(100, (cantidad / total) * 100)}%`;
    }

    document
      .querySelectorAll('.nodo-card')
      .forEach(tarjeta => {
        const boton = tarjeta.querySelector('[data-ir]');

        const completado =
          boton &&
          progreso.visitados.includes(
            boton.dataset.ir
          );

        tarjeta.classList.toggle(
          'completado',
          Boolean(completado)
        );
      });
  }

  document
    .getElementById('reiniciar-progreso')
    ?.addEventListener('click', () => {
      const confirmar = window.confirm(
        '¿Querés reiniciar el progreso y las respuestas de esta cápsula? La bitácora no se borrará.'
      );

      if (!confirmar) {
        return;
      }

      storageRemove(STORAGE.progreso);
      storageRemove(STORAGE.taller);

      estado.respondidos = {};
      estado.caso = 0;

      actualizarProgreso();
      renderCaso();
    });

  actualizarProgreso();

  /* ========================================================================
     MICROACTIVIDADES DE LOS NODOS
     ======================================================================== */

  document
    .querySelectorAll('[data-microquiz]')
    .forEach(bloque => {
      bloque.addEventListener('click', evento => {
        const opcion =
          evento.target.closest('[data-opcion]');

        if (!opcion) {
          return;
        }

        const elegida =
          Number(opcion.dataset.opcion);

        const correcta =
          Number(bloque.dataset.correcta);

        bloque
          .querySelectorAll('[data-opcion]')
          .forEach((boton, indice) => {
            boton.disabled = true;

            boton.classList.toggle(
              'correcta',
              indice === correcta
            );

            boton.classList.toggle(
              'incorrecta',
              indice === elegida &&
              indice !== correcta
            );
          });

        const devolucion =
          bloque.querySelector('.devolucion');

        if (!devolucion) {
          return;
        }

        limpiarMathJax([devolucion]);

        devolucion.textContent =
          elegida === correcta
            ? bloque.dataset.bien
            : bloque.dataset.mal;

        renderizarMathJax(bloque);
      });
    });

  /* ========================================================================
     TALLER DE TRES CASOS
     ======================================================================== */

  const casos = config.casos;

  const elId =
    document.getElementById('caso-identificador');

  const elProg =
    document.getElementById('caso-progreso');

  const elTitulo =
    document.getElementById('caso-titulo');

  const elEnunciado =
    document.getElementById('caso-enunciado');

  const elOpciones =
    document.getElementById('caso-opciones');

  const elDev =
    document.getElementById('caso-devolucion');

  function renderCaso() {
    const caso = casos[estado.caso];

    if (
      !caso ||
      !elOpciones ||
      !elEnunciado
    ) {
      return;
    }

    /*
     * Se limpia el procesamiento anterior antes de reemplazar
     * enunciados, opciones y devoluciones.
     */
    limpiarMathJax([
      elEnunciado,
      elOpciones,
      elDev
    ]);

    if (elId) {
      elId.textContent = caso.id;
    }

    if (elProg) {
      elProg.textContent =
        `${estado.caso + 1} de ${casos.length}`;
    }

    if (elTitulo) {
      elTitulo.textContent = caso.titulo;
    }

    elEnunciado.textContent =
      caso.enunciado;

    const respuestaPrevia =
      estado.respondidos[caso.id];

    elOpciones.innerHTML =
      caso.opciones
        .map((opcion, indice) => {
          const deshabilitado =
            respuestaPrevia !== undefined
              ? 'disabled'
              : '';

          return `
            <button
              type="button"
              data-caso-opcion="${indice}"
              ${deshabilitado}
            >
              ${escaparHTML(opcion)}
            </button>
          `;
        })
        .join('');

    if (respuestaPrevia !== undefined) {
      aplicarEstiloCaso(respuestaPrevia);
    } else if (elDev) {
      elDev.textContent = '';
    }

    const anterior =
      document.getElementById('caso-anterior');

    const siguiente =
      document.getElementById('caso-siguiente');

    if (anterior) {
      anterior.disabled = estado.caso === 0;
    }

    if (siguiente) {
      siguiente.textContent =
        estado.caso === casos.length - 1
          ? 'Volver al primer caso'
          : 'Siguiente caso';
    }

    sincronizarBitacora(caso.id);

    const tarjeta =
      elOpciones.closest('.caso-card') ||
      document.querySelector('.caso-card');

    renderizarMathJax(tarjeta || document);
  }

  function aplicarEstiloCaso(elegida) {
    const caso = casos[estado.caso];

    if (!caso || !elOpciones) {
      return;
    }

    elOpciones
      .querySelectorAll('[data-caso-opcion]')
      .forEach((boton, indice) => {
        boton.disabled = true;

        boton.classList.toggle(
          'correcta',
          indice === caso.correcta
        );

        boton.classList.toggle(
          'incorrecta',
          indice === elegida &&
          indice !== caso.correcta
        );
      });

    if (elDev) {
      limpiarMathJax([elDev]);

      elDev.textContent =
        elegida === caso.correcta
          ? caso.bien
          : caso.mal;
    }

    const tarjeta =
      elOpciones.closest('.caso-card') ||
      document.querySelector('.caso-card');

    renderizarMathJax(tarjeta || document);
  }

  elOpciones?.addEventListener(
    'click',
    evento => {
      const boton =
        evento.target.closest('[data-caso-opcion]');

      if (!boton) {
        return;
      }

      const elegida =
        Number(boton.dataset.casoOpcion);

      const caso = casos[estado.caso];

      estado.respondidos[caso.id] =
        elegida;

      guardarJSON(
        STORAGE.taller,
        estado.respondidos
      );

      aplicarEstiloCaso(elegida);
    }
  );

  document
    .getElementById('caso-anterior')
    ?.addEventListener('click', () => {
      estado.caso =
        Math.max(0, estado.caso - 1);

      renderCaso();
    });

  document
    .getElementById('caso-siguiente')
    ?.addEventListener('click', () => {
      estado.caso =
        (estado.caso + 1) % casos.length;

      renderCaso();
    });

  document
    .getElementById('reiniciar-taller')
    ?.addEventListener('click', () => {
      estado.respondidos = {};

      guardarJSON(
        STORAGE.taller,
        {}
      );

      renderCaso();
    });

  /* ========================================================================
     BITÁCORA
     ======================================================================== */

  const selectBit =
    document.getElementById('bitacora-id');

  const textoBit =
    document.getElementById('bitacora-texto');

  const idsNodos = [
    ...document.querySelectorAll('[data-node-id]')
  ].map((elemento, indice) => ({
    id: elemento.dataset.nodeId,
    nombre:
      `Nodo ${String(indice + 1).padStart(2, '0')}`
  }));

  const idsCasos = casos.map(caso => ({
    id: caso.id,
    nombre: caso.titulo
  }));

  const ids = idsNodos.concat(idsCasos);

  if (selectBit) {
    selectBit.innerHTML =
      ids
        .map(item => `
          <option value="${escaparHTML(item.id)}">
            ${escaparHTML(item.id)} ·
            ${escaparHTML(item.nombre)}
          </option>
        `)
        .join('');
  }

  function bitacoraActual() {
    return leerJSON(
      STORAGE.bitacora,
      {}
    );
  }

  function sincronizarBitacora(id) {
    if (!selectBit || !textoBit) {
      return;
    }

    if (id) {
      selectBit.value = id;
    }

    const datos = bitacoraActual();

    textoBit.value =
      datos[selectBit.value]?.texto || '';

    renderListaBitacora();
  }

  selectBit?.addEventListener(
    'change',
    () => sincronizarBitacora()
  );

  document
    .getElementById('guardar-bitacora')
    ?.addEventListener('click', () => {
      if (!selectBit || !textoBit) {
        return;
      }

      const datos = bitacoraActual();

      const texto =
        textoBit.value.trim();

      const id =
        selectBit.value;

      const mensaje =
        document.getElementById(
          'mensaje-bitacora'
        );

      if (!texto) {
        if (mensaje) {
          mensaje.textContent =
            'Escribí una nota antes de guardar.';
        }

        return;
      }

      datos[id] = {
        texto,
        fecha:
          new Date().toLocaleString('es-AR')
      };

      guardarJSON(
        STORAGE.bitacora,
        datos
      );

      if (mensaje) {
        mensaje.textContent =
          'Nota guardada en este dispositivo.';
      }

      renderListaBitacora();
    });

  function renderListaBitacora() {
    const datos = bitacoraActual();

    const lista =
      document.getElementById(
        'lista-bitacora'
      );

    if (!lista) {
      return;
    }

    lista.innerHTML =
      Object.entries(datos)
        .map(([id, valor]) => `
          <article class="entrada-bitacora">
            <header>
              <strong>
                ${escaparHTML(id)}
              </strong>

              <button
                type="button"
                data-borrar-entrada="${escaparHTML(id)}"
                aria-label="Borrar nota ${escaparHTML(id)}"
              >
                ×
              </button>
            </header>

            <p>
              ${escaparHTML(valor.texto).replace(/\n/g, '<br>')}
            </p>

            <small>
              ${escaparHTML(valor.fecha)}
            </small>
          </article>
        `)
        .join('');
  }

  document
    .getElementById('lista-bitacora')
    ?.addEventListener('click', evento => {
      const boton =
        evento.target.closest(
          '[data-borrar-entrada]'
        );

      if (!boton) {
        return;
      }

      const datos = bitacoraActual();

      delete datos[
        boton.dataset.borrarEntrada
      ];

      guardarJSON(
        STORAGE.bitacora,
        datos
      );

      sincronizarBitacora();
    });

  document
    .getElementById('exportar-bitacora')
    ?.addEventListener('click', () => {
      const datos = bitacoraActual();

      const entradas =
        Object.entries(datos).map(
          ([id, valor]) =>
            `${id}\n${valor.texto}\nGuardado: ${valor.fecha}\n`
        );

      const contenido = [
        `BITÁCORA · ${config.nombre}`,
        '',
        ...entradas
      ].join('\n');

      const archivo = new Blob(
        [contenido],
        {
          type: 'text/plain;charset=utf-8'
        }
      );

      const enlace =
        document.createElement('a');

      enlace.href =
        URL.createObjectURL(archivo);

      enlace.download =
        `bitacora-${slug}.txt`;

      enlace.click();

      setTimeout(() => {
        URL.revokeObjectURL(enlace.href);
      }, 1000);
    });

  sincronizarBitacora(casos[0].id);
  renderCaso();

  /* ========================================================================
     AUDIO Y PREGUNTAS DE PAUSA
     ======================================================================== */

  const audio =
    document.getElementById('audio-pausa');

  const listaAud =
    document.getElementById('lista-audios');

  function elegirAudio(indice) {
    if (!audio) {
      return;
    }

    audio.src =
      AUDIOS[indice].archivo;

    listaAud
      ?.querySelectorAll('[data-audio]')
      .forEach((boton, posicion) => {
        boton.classList.toggle(
          'activo',
          indice === posicion
        );
      });
  }

  if (listaAud) {
    listaAud.innerHTML =
      AUDIOS
        .map((item, indice) => `
          <button
            type="button"
            data-audio="${indice}"
          >
            ${escaparHTML(item.titulo)}
          </button>
        `)
        .join('');

    listaAud.addEventListener(
      'click',
      evento => {
        const boton =
          evento.target.closest('[data-audio]');

        if (!boton) {
          return;
        }

        elegirAudio(
          Number(boton.dataset.audio)
        );

        audio
          ?.play()
          .catch(() => {
            /*
             * Algunos navegadores bloquean la reproducción
             * automática. No se considera un error.
             */
          });
      }
    );

    elegirAudio(0);
  }

  let preguntas = [];

  if (slug === 'reales') {
    preguntas = [
      '¿Qué condición debería revisar antes de aplicar una propiedad?',
      '¿Podrías justificar el paso sin decir “pasa para el otro lado”?',
      '¿Qué conjunto numérico contiene el resultado?',
      '¿La notación ayuda a ver la estructura?'
    ];
  } else if (slug === 'ecuaciones') {
    preguntas = [
      '¿Cada paso mantiene el mismo conjunto solución?',
      '¿Qué condición inicial podría desaparecer?',
      '¿Verificaste en la ecuación original?',
      '¿El método responde a la estructura?'
    ];
  } else if (slug === 'inecuaciones') {
    preguntas = [
      '¿En qué paso podría cambiar el sentido?',
      '¿La respuesta está expresada como intervalo y gráfico?',
      '¿La condición usa intersección o unión?',
      '¿Podés leer el resultado como una distancia?'
    ];
  }

  const preguntaEl =
    document.getElementById(
      'texto-pregunta-pausa'
    );

  if (
    preguntaEl &&
    preguntas.length > 0
  ) {
    preguntaEl.textContent =
      preguntas[0];
  }

  document
    .getElementById('cambiar-pregunta')
    ?.addEventListener('click', () => {
      if (
        !preguntaEl ||
        preguntas.length === 0
      ) {
        return;
      }

      estado.pregunta =
        (estado.pregunta + 1) %
        preguntas.length;

      preguntaEl.textContent =
        preguntas[estado.pregunta];
    });

  /* ========================================================================
     SELECTOR DE VIDEOS DE YOUTUBE
     ======================================================================== */

  const videos = config.videos;

  function renderVideo() {
    const video =
      videos[estado.video];

    const iframe =
      document.getElementById(
        'youtube-iframe'
      );

    if (!video || !iframe) {
      return;
    }

    const titulo =
      document.getElementById(
        'youtube-titulo'
      );

    const descripcion =
      document.getElementById(
        'youtube-descripcion'
      );

    const enlace =
      document.getElementById(
        'youtube-enlace'
      );

    if (titulo) {
      titulo.textContent =
        video.titulo;
    }

    if (descripcion) {
      descripcion.textContent =
        video.descripcion;
    }

    iframe.src =
      `https://www.youtube-nocookie.com/embed/${video.id}`;

    if (enlace) {
      enlace.href =
        `https://www.youtube.com/watch?v=${video.id}`;
    }
  }

  document
    .getElementById('youtube-siguiente')
    ?.addEventListener('click', () => {
      estado.video =
        (estado.video + 1) %
        videos.length;

      renderVideo();
    });

  document
    .getElementById('youtube-anterior')
    ?.addEventListener('click', () => {
      estado.video =
        (
          estado.video -
          1 +
          videos.length
        ) % videos.length;

      renderVideo();
    });

  renderVideo();

  /*
   * Procesa las fórmulas que ya estaban escritas
   * en el HTML cuando termina de iniciarse la cápsula.
   */
  renderizarMathJax(document);
}

Además, en cada archivo HTML de las cápsulas verificá que dentro de <head> aparezca esto:

<!-- Configuración de MathJax -->
<script>
  window.MathJax = {
    tex: {
      inlineMath: [
        ['\\(', '\\)']
      ],
      displayMath: [
        ['\\[', '\\]']
      ],
      processEscapes: true
    },
    svg: {
      fontCache: 'global'
    }
  };
</script>

<!-- Biblioteca MathJax -->
<script
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
  defer>
</script>
