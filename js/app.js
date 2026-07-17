/* ========================================================================== 
   MATEMÁTICA 1 · TRES CÁPSULAS
   Navegación, progreso, microactividades, taller, bitácora y multimedia.
   No requiere bibliotecas externas.
   ========================================================================== */
'use strict';

const CONFIG = {
  reales: {
    nombre: 'Habitar la recta real',
    casos: [
      {id:'R-TP-01', titulo:'Clasificar antes de operar', enunciado:'¿Cuál es la clasificación más específica de √7?', opciones:['Racional','Irracional','Entero'], correcta:1, bien:'√7 no puede escribirse como cociente de enteros. Es irracional y, por inclusión, también real.', mal:'No toda raíz es irracional, pero 7 no es un cuadrado perfecto. La clasificación más específica es irracional.'},
      {id:'R-TP-02', titulo:'Propiedades y prioridades', enunciado:'Calculá 2⁵/2³ + 3⁻¹ − √2·√2 + (1/2)⁻².', opciones:['19/3','13/3','6'], correcta:0, bien:'2² + 1/3 − 2 + 4 = 6 + 1/3 = 19/3. La clave es aplicar las propiedades antes de sumar.', mal:'Revisá cuatro pasos: cociente de potencias, exponente negativo, producto de raíces y prioridad de operaciones.'},
      {id:'R-TP-03', titulo:'Riesgo y logaritmo decimal', enunciado:'En R = log₁₀(P·D·C), con P = 0,001, D = 100 y C = 0,1, ¿cuál es R?', opciones:['−2','2','−1'], correcta:0, bien:'El producto es 0,01 = 10⁻²; por definición, log₁₀(0,01) = −2.', mal:'Calculá primero el producto y escribilo como potencia de 10.'}
    ],
    videos: [
      {id:'5uA06WqOktc', titulo:'Potenciación, radicación y logaritmación', descripcion:'Recurso externo para repasar la relación entre las tres operaciones. Contrastá la notación con la del apunte.'},
      {id:'pZTuEHrnOMg', titulo:'Logaritmos: conceptos básicos', descripcion:'Ampliación opcional sobre la definición de logaritmo y el significado del exponente.'},
      {id:'tA94S33kxm8', titulo:'Propiedades de la potenciación', descripcion:'Repaso externo de propiedades. Usalo para comparar procedimientos, no para reemplazar la teoría de la cátedra.'}
    ]
  },
  ecuaciones: {
    nombre: 'Equilibrar sin perder soluciones',
    casos: [
      {id:'E-TP-01', titulo:'Eliminar denominadores con uniformidad', enunciado:'Resolvé (3a − 2)/3 + (a − 3)/2 = 5/6.', opciones:['a = 2','a = −2','a = 1'], correcta:0, bien:'Multiplicar ambos miembros por 6 da 2(3a−2)+3(a−3)=5; de allí 9a−13=5 y a=2.', mal:'Usá 6 como denominador común y aplicá la multiplicación a todos los términos.'},
      {id:'E-TP-02', titulo:'Simplificar sin olvidar la restricción', enunciado:'¿Cuál es la solución de (x + 1)(x − 1)/(x − 1) = 0?', opciones:['x = −1','x = 1','x = −1 o x = 1'], correcta:0, bien:'La condición inicial es x ≠ 1. Al simplificar queda x + 1 = 0, por lo tanto x = −1.', mal:'Calculá la condición inicial antes de cancelar x−1.'},
      {id:'E-TP-03', titulo:'Identidad con condiciones iniciales', enunciado:'En 1/(x−1) + 2/(x−3) = (3x−5)/((x−1)(x−3)), ¿cuál es el conjunto solución?', opciones:['ℝ','ℝ − {1,3}','∅'], correcta:1, bien:'La igualdad se reduce a una identidad, pero x = 1 y x = 3 estaban excluidos por los denominadores.', mal:'Una identidad no borra las condiciones iniciales de la expresión original.'}
    ],
    videos: [
      {id:'3HaZPMcZfzE', titulo:'Ecuaciones de primer y segundo grado', descripcion:'Repaso externo de procedimientos con paréntesis, denominadores y ecuaciones cuadráticas.'},
      {id:'0CHXpRvop8E', titulo:'Ecuaciones logarítmicas y condiciones de existencia', descripcion:'Ampliación opcional para observar cómo se controlan las condiciones antes y después de resolver.'},
      {id:'acxwuPdHVeo', titulo:'Existencia de expresiones logarítmicas', descripcion:'Recurso externo centrado en el dominio del logaritmo, útil para revisar condiciones iniciales.'}
    ]
  },
  inecuaciones: {
    nombre: 'Pensar en regiones',
    casos: [
      {id:'I-TP-01', titulo:'Inecuación lineal', enunciado:'Resolvé 2(x + 1) − 3(x − 2) < x + 1.', opciones:['x > 7/2','x < 7/2','x > 7'], correcta:0, bien:'La desigualdad queda −x + 8 < x + 1, luego 7 < 2x y x > 7/2.', mal:'Aplicá distributiva, agrupá x en un miembro y controlá el signo del factor por el que dividís.'},
      {id:'I-TP-02', titulo:'Producto y signos', enunciado:'Resolvé (2x − 3)(x + 1) ≥ 0.', opciones:['[−1,3/2]','(−∞,−1] ∪ [3/2,∞)','(−∞,−1) ∪ (3/2,∞)'], correcta:1, bien:'El producto es no negativo fuera de las raíces y las incluye porque el símbolo es ≥.', mal:'Marcá las raíces −1 y 3/2, analizá signos por intervalos y revisá si los extremos se incluyen.'},
      {id:'I-TP-03', titulo:'Valor absoluto como intervalo', enunciado:'Resolvé |3x + 4| ≤ 1.', opciones:['[−5/3,−1]','[−1,5/3]','(−∞,−5/3] ∪ [−1,∞)'], correcta:0, bien:'−1 ≤ 3x+4 ≤ 1 conduce a −5 ≤ 3x ≤ −3 y finalmente −5/3 ≤ x ≤ −1.', mal:'Usá la propiedad del menor: convertí el valor absoluto en una doble desigualdad.'}
    ],
    videos: [
      {id:'7riQbRBy1sw', titulo:'Números reales: inecuaciones, intervalos y valor absoluto', descripcion:'Recurso universitario externo para comparar la organización conceptual con la propuesta de la cátedra.'},
      {id:'yPSuv-CoZ3g', titulo:'Inecuaciones de primer grado', descripcion:'Repaso externo paso a paso con representación gráfica e intervalo.'},
      {id:'va07JYlfP3I', titulo:'Inecuaciones con valor absoluto', descripcion:'Ampliación opcional sobre casos de menor y mayor que.'}
    ]
  }
};

const AUDIOS = [
  {titulo:'Respirar y leer signos', archivo:'../assets/audio/pausa-respirar.mp3'},
  {titulo:'Patrones en la recta', archivo:'../assets/audio/pausa-patron.mp3'},
  {titulo:'Pausa de verificación', archivo:'../assets/audio/pausa-foco.mp3'}
];

const memoriaTemporal = new Map();
function storageGet(clave, respaldo='') { try { return localStorage.getItem(clave) ?? respaldo; } catch { return memoriaTemporal.get(clave) ?? respaldo; } }
function storageSet(clave, valor) { try { localStorage.setItem(clave, valor); } catch { memoriaTemporal.set(clave, valor); } }
function storageRemove(clave) { try { localStorage.removeItem(clave); } catch { memoriaTemporal.delete(clave); } }
function leerJSON(clave, respaldo) { try { return JSON.parse(storageGet(clave, JSON.stringify(respaldo))); } catch { return respaldo; } }
function guardarJSON(clave, valor) { storageSet(clave, JSON.stringify(valor)); }
function escaparHTML(texto='') { return String(texto).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

const pagina = document.body.dataset.page;
if (pagina === 'capsula') iniciarCapsula();

function iniciarCapsula() {
  const slug = document.body.dataset.capsula;
  const config = CONFIG[slug];
  if (!config) return;
  const STORAGE = {
    progreso:`m1_${slug}_progreso_v1`, bitacora:`m1_${slug}_bitacora_v1`, taller:`m1_${slug}_taller_v1`
  };
  const estado = {caso:0, respondidos:leerJSON(STORAGE.taller, {}), video:0, pregunta:0};

  // Navegación por pantallas -------------------------------------------------
  function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    const destino = document.getElementById(id);
    if (!destino) return;
    destino.classList.add('activa');
    history.replaceState(null, '', `#${id}`);
    window.scrollTo({top:0, behavior:'smooth'});
    const main = document.getElementById('contenido-principal');
    main?.focus({preventScroll:true});
    if (destino.dataset.nodeId) marcarVisitado(destino.dataset.nodeId);
    if (id === 'mapa') actualizarProgreso();
  }
  document.addEventListener('click', e => {
    const boton = e.target.closest('[data-ir]');
    if (!boton) return;
    e.preventDefault(); mostrarPantalla(boton.dataset.ir);
  });
  const hash = location.hash.slice(1);
  if (hash && document.getElementById(hash)) mostrarPantalla(hash);

  // Progreso -----------------------------------------------------------------
  function progresoActual() { return leerJSON(STORAGE.progreso, {visitados:[]}); }
  function marcarVisitado(id) {
    const p = progresoActual();
    if (!p.visitados.includes(id)) { p.visitados.push(id); guardarJSON(STORAGE.progreso, p); }
    actualizarProgreso();
  }
  function actualizarProgreso() {
    const total = document.querySelectorAll('[data-node-id]').length || 4;
    const cantidad = progresoActual().visitados.length;
    const texto = document.getElementById('texto-progreso');
    const barra = document.getElementById('barra-progreso');
    if (texto) texto.textContent = `${cantidad} de ${total} nodos`;
    if (barra) barra.style.width = `${Math.min(100, (cantidad/total)*100)}%`;
    document.querySelectorAll('.nodo-card').forEach(card => {
      const boton = card.querySelector('[data-ir]');
      card.classList.toggle('completado', boton && progresoActual().visitados.includes(boton.dataset.ir));
    });
  }
  document.getElementById('reiniciar-progreso')?.addEventListener('click', () => {
    if (!confirm('¿Querés reiniciar el progreso y las respuestas de esta cápsula? La bitácora no se borrará.')) return;
    storageRemove(STORAGE.progreso); storageRemove(STORAGE.taller); estado.respondidos={}; estado.caso=0; actualizarProgreso(); renderCaso();
  });
  actualizarProgreso();

  // Microactividades ---------------------------------------------------------
  document.querySelectorAll('[data-microquiz]').forEach(bloque => {
    bloque.addEventListener('click', e => {
      const opcion = e.target.closest('[data-opcion]');
      if (!opcion) return;
      const elegida = Number(opcion.dataset.opcion);
      const correcta = Number(bloque.dataset.correcta);
      bloque.querySelectorAll('[data-opcion]').forEach((b,i) => {
        b.disabled = true; b.classList.toggle('correcta', i===correcta); b.classList.toggle('incorrecta', i===elegida && i!==correcta);
      });
      bloque.querySelector('.devolucion').textContent = elegida===correcta ? bloque.dataset.bien : bloque.dataset.mal;
    });
  });

  // Taller de tres casos -----------------------------------------------------
  const casos = config.casos;
  const elId = document.getElementById('caso-identificador');
  const elProg = document.getElementById('caso-progreso');
  const elTitulo = document.getElementById('caso-titulo');
  const elEnunciado = document.getElementById('caso-enunciado');
  const elOpciones = document.getElementById('caso-opciones');
  const elDev = document.getElementById('caso-devolucion');
  function renderCaso() {
    const c = casos[estado.caso];
    if (!c || !elOpciones) return;
    elId.textContent = c.id; elProg.textContent = `${estado.caso+1} de ${casos.length}`; elTitulo.textContent = c.titulo; elEnunciado.textContent = c.enunciado;
    const previo = estado.respondidos[c.id];
    elOpciones.innerHTML = c.opciones.map((o,i)=>`<button type="button" data-caso-opcion="${i}" ${previo!==undefined?'disabled':''}>${escaparHTML(o)}</button>`).join('');
    if (previo !== undefined) aplicarEstiloCaso(previo); else elDev.textContent='';
    document.getElementById('caso-anterior').disabled = estado.caso===0;
    document.getElementById('caso-siguiente').textContent = estado.caso===casos.length-1 ? 'Volver al primer caso' : 'Siguiente caso';
    sincronizarBitacora(c.id);
  }
  function aplicarEstiloCaso(elegida) {
    const c=casos[estado.caso];
    elOpciones.querySelectorAll('[data-caso-opcion]').forEach((b,i)=>{b.disabled=true;b.classList.toggle('correcta',i===c.correcta);b.classList.toggle('incorrecta',i===elegida&&i!==c.correcta);});
    elDev.textContent = elegida===c.correcta ? c.bien : c.mal;
  }
  elOpciones?.addEventListener('click', e=>{
    const b=e.target.closest('[data-caso-opcion]'); if(!b) return;
    const elegida=Number(b.dataset.casoOpcion); const c=casos[estado.caso]; estado.respondidos[c.id]=elegida; guardarJSON(STORAGE.taller, estado.respondidos); aplicarEstiloCaso(elegida);
  });
  document.getElementById('caso-anterior')?.addEventListener('click',()=>{estado.caso=Math.max(0,estado.caso-1);renderCaso();});
  document.getElementById('caso-siguiente')?.addEventListener('click',()=>{estado.caso=(estado.caso+1)%casos.length;renderCaso();});
  document.getElementById('reiniciar-taller')?.addEventListener('click',()=>{estado.respondidos={};guardarJSON(STORAGE.taller,{});renderCaso();});

  // Bitácora -----------------------------------------------------------------
  const selectBit = document.getElementById('bitacora-id');
  const textoBit = document.getElementById('bitacora-texto');
  const ids = [...document.querySelectorAll('[data-node-id]')].map((el,i)=>({id:el.dataset.nodeId, nombre:`Nodo ${String(i+1).padStart(2,'0')}`})).concat(casos.map(c=>({id:c.id,nombre:c.titulo})));
  if (selectBit) selectBit.innerHTML=ids.map(i=>`<option value="${i.id}">${i.id} · ${escaparHTML(i.nombre)}</option>`).join('');
  function bitacoraActual(){return leerJSON(STORAGE.bitacora,{});}
  function sincronizarBitacora(id){if(!selectBit||!textoBit)return; if(id) selectBit.value=id; textoBit.value=bitacoraActual()[selectBit.value]?.texto||''; renderListaBitacora();}
  selectBit?.addEventListener('change',()=>sincronizarBitacora());
  document.getElementById('guardar-bitacora')?.addEventListener('click',()=>{
    const datos=bitacoraActual(); const texto=textoBit.value.trim(); const id=selectBit.value;
    if(!texto){document.getElementById('mensaje-bitacora').textContent='Escribí una nota antes de guardar.';return;}
    datos[id]={texto,fecha:new Date().toLocaleString('es-AR')}; guardarJSON(STORAGE.bitacora,datos); document.getElementById('mensaje-bitacora').textContent='Nota guardada en este dispositivo.'; renderListaBitacora();
  });
  function renderListaBitacora(){
    const datos=bitacoraActual(); const lista=document.getElementById('lista-bitacora'); if(!lista)return;
    lista.innerHTML=Object.entries(datos).map(([id,v])=>`<article class="entrada-bitacora"><header><strong>${escaparHTML(id)}</strong><button type="button" data-borrar-entrada="${escaparHTML(id)}" aria-label="Borrar nota ${escaparHTML(id)}">×</button></header><p>${escaparHTML(v.texto).replace(/\n/g,'<br>')}</p><small>${escaparHTML(v.fecha)}</small></article>`).join('');
  }
  document.getElementById('lista-bitacora')?.addEventListener('click',e=>{const b=e.target.closest('[data-borrar-entrada]');if(!b)return;const d=bitacoraActual();delete d[b.dataset.borrarEntrada];guardarJSON(STORAGE.bitacora,d);sincronizarBitacora();});
  document.getElementById('exportar-bitacora')?.addEventListener('click',()=>{
    const d=bitacoraActual(); const contenido=[`BITÁCORA · ${config.nombre}`,'',...Object.entries(d).map(([id,v])=>`${id}\n${v.texto}\nGuardado: ${v.fecha}\n`)].join('\n');
    const blob=new Blob([contenido],{type:'text/plain;charset=utf-8'}); const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`bitacora-${slug}.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  });
  sincronizarBitacora(casos[0].id); renderCaso();

  // Audio y preguntas --------------------------------------------------------
  const audio=document.getElementById('audio-pausa'); const listaAud=document.getElementById('lista-audios');
  function elegirAudio(i){if(!audio)return;audio.src=AUDIOS[i].archivo;listaAud?.querySelectorAll('[data-audio]').forEach((b,j)=>b.classList.toggle('activo',i===j));}
  if(listaAud){listaAud.innerHTML=AUDIOS.map((a,i)=>`<button type="button" data-audio="${i}">${a.titulo}</button>`).join('');listaAud.addEventListener('click',e=>{const b=e.target.closest('[data-audio]');if(!b)return;elegirAudio(Number(b.dataset.audio));audio.play().catch(()=>{});});elegirAudio(0);}
  const preguntas=[...document.querySelectorAll('.pregunta-pausa')].length ? (slug==='reales' ? ['¿Qué condición debería revisar antes de aplicar una propiedad?','¿Podrías justificar el paso sin decir “pasa para el otro lado”?','¿Qué conjunto numérico contiene el resultado?','¿La notación ayuda a ver la estructura?'] : slug==='ecuaciones' ? ['¿Cada paso mantiene el mismo conjunto solución?','¿Qué condición inicial podría desaparecer?','¿Verificaste en la ecuación original?','¿El método responde a la estructura?'] : ['¿En qué paso podría cambiar el sentido?','¿La respuesta está como intervalo y gráfico?','¿La condición usa intersección o unión?','¿Podés leer el resultado como distancia?']) : [];
  const preguntaEl=document.getElementById('texto-pregunta-pausa'); if(preguntaEl) preguntaEl.textContent=preguntas[0];
  document.getElementById('cambiar-pregunta')?.addEventListener('click',()=>{estado.pregunta=(estado.pregunta+1)%preguntas.length;preguntaEl.textContent=preguntas[estado.pregunta];});

  // YouTube ------------------------------------------------------------------
  const videos=config.videos;
  function renderVideo(){const v=videos[estado.video];const iframe=document.getElementById('youtube-iframe');if(!iframe)return;document.getElementById('youtube-titulo').textContent=v.titulo;document.getElementById('youtube-descripcion').textContent=v.descripcion;iframe.src=`https://www.youtube-nocookie.com/embed/${v.id}`;document.getElementById('youtube-enlace').href=`https://www.youtube.com/watch?v=${v.id}`;}
  document.getElementById('youtube-siguiente')?.addEventListener('click',()=>{estado.video=(estado.video+1)%videos.length;renderVideo();});
  document.getElementById('youtube-anterior')?.addEventListener('click',()=>{estado.video=(estado.video-1+videos.length)%videos.length;renderVideo();});
  renderVideo();
}
