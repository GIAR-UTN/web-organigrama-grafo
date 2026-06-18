/**
 * data.js — Fuente de verdad del organigrama
 *
 * Estructura de 3 jerarquías:
 *   GIAR → proyectos → subproyectos → personas
 *
 * Las personas pueden pertenecer a cualquier nivel via el campo `pertenece`.
 * Los proyectos y subproyectos aceptan un objeto `meta` con pares clave-valor
 * que se muestran en el panel de detalle como "*clave*: valor".
 *
 * ─── CAMPOS DE PERSONA ──────────────────────────────────────────────────────
 *   rol        — título / cargo mostrado en el panel
 *   linkedin   — URL al perfil de LinkedIn (null si no aplica)
 *   meta       — objeto clave-valor: Especialidad, Institución, etc.
 *   pertenece  — [{id, rol}] donde rol ∈ Director | Co-Director |
 *                Lider de Proyecto | Lider de Sub-Proyecto | Integrante | Oyente
 *
 * ─── COLORES DISPONIBLES ────────────────────────────────────────────────────
 *   var(--c-amber)  var(--c-coral)  var(--c-sage)
 *   var(--c-plum)   var(--c-olive)  var(--c-steel)
 *   O cualquier hex: '#e07b54'
 */

export const DATA = {

  // ── Nodo raíz ──────────────────────────────────────────────────────────────
  giar: {
    id:     'giar',
    nombre: 'GIAR',
    color:  '#0E68D8',
    meta: {
      'Institución': 'UTN.BA',
      'Grupo':        'Inteligencia Artificial y Robótica',
    },
  },

  // ── Proyectos (con subproyectos opcionales) ────────────────────────────────
  proyectos: [
    {
      id:     'nanosats',
      nombre: 'Nanosatélites',
      color:  'var(--c-amber)',
      meta: {
        'Título del proyecto': 'Diseño e implementación del sistema de una computadora de a bordo destinada a nanosatélites',
        'Código': 'BACCEC748',
        'Categoría': 'Electrónica, Computación y Comunicaciones',
        'Año de inicio': '2026',
        'Año de finalización': '2029',
      },
      subproyectos: [
        {
          id:     'HW',
          nombre: 'Hardware',
          color:  'var(--c-coral)',
          meta:   { 'Objetivo': 'Diseño, implementación y validación del circuito impreso de la OBC' },
        },
        {
          id:     'SW',
          nombre: 'Flight Software',
          color:  'var(--c-sage)',
          meta:   { 'Objetivo': 'Migración de cFS al micro seleccionado' },
        },
        {
          id:     'payload',
          nombre: 'Dosimeter Payload',
          color:  'var(--c-olive)',
          meta:   {
            'Objetivo': 'Diseño, implementación y validación de una carga útil basada en dosimetría gamma y detección de SEUs',
            'Colaboración': 'FiUBA'
          },
        },
        {
          id:     'rf',
          nombre: 'RF',
          color:  'var(--c-plum)',
          meta:   { 'Objetivo': 'Sin definir.' },
        },
        {
          id:     'concurso',
          nombre: 'CubeDesign',
          color:  'var(--c-amber)',
          meta:   { 'Objetivo': 'Ganar concurso CubeDesign y capacitar a los estudiantes involucrados en sistemas aeroespaciales' },
        },
        {
          id:     'antartida',
          nombre: 'Antártida',
          color:  'var(--c-steel)',
          meta:   {
            'Objetivo': 'Desarrollo de sistema autónomo para la captura y transmisión de datos científicos de mediante LoRaWAN',
            'Colaboración': 'Instituto Antártico Argentino (IAA)'
          },
        },
      ],
    },
    {
      id:     'EspANLI-UTN',
      nombre: 'EspANLI-UTN',
      color:  'var(--c-steel)',
      meta: {
        'Título del proyecto': 'Desarrollo de evaluaciones adversariales de razonamiento para modelos de lenguaje',
        'Tipo de proyecto': 'UTN PID EC',
        'Código': 'BASIEC916',
        'Categoría': 'Sistemas de Información e Informática',
        'Año de inicio': '2026',
        'Año de finalización': '2028',
      },
    },
  ],

  // ── Personas ───────────────────────────────────────────────────────────────
  personas: [
    {
      id: 'p1', nombre: 'Matias', apellido: 'Hampel',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'PhD', 'Año de incorporación': '2023' },
      pertenece: [{ id: 'nanosats', rol: 'Oyente' }],
    },
    {
      id: 'p2', nombre: 'Agustin', apellido: 'Diaz Antuña',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2024' },
      pertenece: [{ id: 'nanosats', rol: 'Oyente' }],
    },
    {
      id: 'p3', nombre: 'Juan', apellido: 'Alarcón',
      rol: 'Electrónica',
      imagen: 'p3.jpeg',
      linkedin: 'https://www.linkedin.com/in/juan-alarc%C3%B3n-aa553612a/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2023' },
      pertenece: [{ id: 'nanosats', rol: 'Co-Director' }],
    },
    {
      id: 'p4', nombre: 'Lucio', apellido: 'Colautti',
      rol: 'Mecánica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Mecánica', 'Nivel': 'Tesista Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'nanosats', rol: 'Oyente' }],
    },
    {
      id: 'p5', nombre: 'Manuel Elias', apellido: 'Garcia Redondo',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'PhD', 'Año de incorporación': '2023' },
      pertenece: [{ id: 'nanosats', rol: 'Oyente' }],
    },
    {
      id: 'p6', nombre: 'Felipe', apellido: 'Nirino',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2023' },
      pertenece: [{ id: 'nanosats', rol: 'Oyente' }],
    },
    {
      id: 'p7', nombre: 'Joaquin', apellido: 'Cibeira',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Tesista Grado', 'Año de incorporación': '2024' },
      pertenece: [{ id: 'nanosats', rol: 'Oyente' }],
    },
    {
      id: 'p8', nombre: 'Uriel', apellido: 'Madias',
      rol: 'Mecánica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Mecánica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'concurso', rol: 'Integrante' }],
    },
    {
      id: 'p9', nombre: 'Constanza', apellido: 'Bianco',
      rol: 'Sistemas',
      imagen: null,
      linkedin: 'https://www.linkedin.com/in/constanza-bianco-aa5980204/',
      meta: { 'Especialidad': 'Ing. Sistemas', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'concurso', rol: 'Integrante' }],
    },
    {
      id: 'p10', nombre: 'Ana', apellido: 'Luna Elizalde',
      rol: 'Electrónica',
      imagen: 'p10.jpeg',
      linkedin: 'https://www.linkedin.com/in/ana-luna-elizalde',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'concurso', rol: 'Integrante' }],
    },
    {
      id: 'p11', nombre: 'Ramiro', apellido: 'Molina Gonzalez',
      rol: 'Electrónica',
      imagen: null,
      linkedin: 'https://www.linkedin.com/in/ramiro-molina-gonzalez-b5767432b/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'concurso', rol: 'Integrante' }],
    },
    {
      id: 'p12', nombre: 'Jeanette Maricel', apellido: 'Molina Ramirez',
      rol: 'Industrial',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Industrial', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'concurso', rol: 'Lider de Sub-Proyecto' }],
    },
    {
      id: 'p13', nombre: 'Juan Manuel', apellido: 'Rodríguez Aguado',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'concurso', rol: 'Integrante' }],
    },
    {
      id: 'p14', nombre: 'Francisco', apellido: 'Dominguez',
      rol: 'Electrónica',
      imagen: null,
      linkedin: 'https://www.linkedin.com/in/francisco-andr%C3%A9s-dominguez-89a65826b/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2024' },
      pertenece: [{ id: 'payload', rol: 'Integrante' }],
    },
    {
      id: 'p15', nombre: 'Sebastian', apellido: 'Verrastro',
      rol: 'Electrónica',
      imagen: 'p15,jpeg',
      linkedin: 'https://www.linkedin.com/in/sebastian-verrastro/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Master', 'Año de incorporación': '2023' },
      pertenece: [{ id: 'giar', rol: 'Director' }, { id: 'nanosats', rol: 'Director' }],
    },
    {
      id: 'p16', nombre: 'Facundo Daniel', apellido: 'Repetto',
      rol: 'Electrónica',
      imagen: 'p16.jpeg',
      linkedin: 'https://www.linkedin.com/in/facundo-d-repetto/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Tesista Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'HW', rol: 'Lider de Sub-Proyecto' }],
    },
    {
      id: 'p17', nombre: 'Alessandro', apellido: 'Ghezzo',
      rol: 'Electrónica',
      imagen: 'p17.jpeg',
      linkedin: 'https://www.linkedin.com/in/alessandro-ghezzo/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Tesista Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'rf', rol: 'Lider de Sub-Proyecto' }],
    },
    {
      id: 'p18', nombre: 'Lucas', apellido: 'Liaño',
      rol: 'Electrónica',
      imagen: 'p18.jpg',
      linkedin: 'https://www.linkedin.com/in/lucasliano/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Tesista Grado', 'Año de incorporación': '2023' },
      pertenece: [{ id: 'nanosats', rol: 'Co-Director' }],
    },
    {
      id: 'p19', nombre: 'Ezequiel', apellido: 'Maceda',
      rol: 'Sistemas',
      imagen: 'p19.jpeg',
      linkedin: 'https://www.linkedin.com/in/gabriel-ezequiel-maceda/',
      meta: { 'Especialidad': 'Ing. Sistemas', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'SW', rol: 'Integrante' }],
    },
    {
      id: 'p20', nombre: 'Federico', apellido: 'Albero',
      rol: 'Electrónica',
      imagen: 'p20.jpeg',
      linkedin: 'https://www.linkedin.com/in/albero-federico/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'HW', rol: 'Integrante' }],
    },
    {
      id: 'p21', nombre: 'Manuel', apellido: 'Cortes',
      rol: 'Electrónica',
      imagen: 'p21.jpeg',
      linkedin: 'https://www.linkedin.com/in/manuelcortess/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'HW', rol: 'Integrante' }, { id: 'antartida', rol: 'Integrante' }],
    },
    {
      id: 'p22', nombre: 'Guido', apellido: 'Cucciniello',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'HW', rol: 'Integrante' }],
    },
    {
      id: 'p23', nombre: 'Fausto', apellido: 'Mongini',
      rol: 'Electrónica',
      imagen: 'p23.jpeg',
      linkedin: 'https://www.linkedin.com/in/fausto-mongini-16a716157/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'antartida', rol: 'Lider de Sub-Proyecto' }, { id: 'HW', rol: 'Integrante' }],
    },
    {
      id: 'p24', nombre: 'Geronimo', apellido: 'Santano',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'HW', rol: 'Integrante' }],
    },
    {
      id: 'p25', nombre: 'Lucas', apellido: 'Sasson',
      rol: 'Electrónica',
      imagen: 'p25.jpeg',
      linkedin: 'https://www.linkedin.com/in/lucas-sasson-08bb14230/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'HW', rol: 'Integrante' }],
    },
    {
      id: 'p26', nombre: 'Nicolas', apellido: 'Trombetta',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'HW', rol: 'Integrante' }],
    },
    {
      id: 'p27', nombre: 'Fernando', apellido: 'Fiamberti',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Master', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'rf', rol: 'Integrante' }],
    },
    {
      id: 'p28', nombre: 'Francisco', apellido: 'Sthal',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'rf', rol: 'Integrante' }],
    },
    {
      id: 'p29', nombre: 'Claudio', apellido: 'Grasso',
      rol: 'Otro',
      imagen: 'p29.jpeg',
      linkedin: 'https://www.linkedin.com/in/claudio-grasso-a211116/',
      meta: { 'Especialidad': 'Otro', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2025' },
      pertenece: [{ id: 'SW', rol: 'Integrante' }],
    },
    {
      id: 'p30', nombre: 'Pablo', apellido: 'Maiolo',
      rol: 'Electrónica',
      imagen: null,
      linkedin: 'https://www.linkedin.com/in/pablo-maiolo-193622116/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Ingeniero/Grado', 'Año de incorporación': '2024' },
      pertenece: [{ id: 'SW', rol: 'Integrante' }],
    },
    {
      id: 'p31', nombre: 'Santiago Puebla', apellido: 'Paris',
      rol: 'Sistemas',
      imagen: 'p31.jpeg',
      linkedin: 'www.linkedin.com/in/santiago-paris-puebla',
      meta: { 'Especialidad': 'Ing. Sistemas', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'SW', rol: 'Integrante' }],
    },
    {
      id: 'p32', nombre: 'José Antonio', apellido: 'Quispealaya',
      rol: 'Sistemas',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Sistemas', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2023' },
      pertenece: [{ id: 'SW', rol: 'Integrante' }],
    },
    {
      id: 'p33', nombre: 'Aylen', apellido: 'Mendiolar Colombo',
      rol: 'Electrónica',
      imagen: 'p33.jpg',
      linkedin: 'https://www.linkedin.com/in/aylen-27-mc/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'antartida', rol: 'Integrante' }],
    },
    {
      id: 'p34', nombre: 'Matias', apellido: 'Armando Palma',
      rol: 'Electrónica',
      imagen: 'p34.jpeg',
      linkedin: 'http://www.linkedin.com/in/matias-armando-palma-870b2727b',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'antartida', rol: 'Integrante' }],
    },
    {
      id: 'p35', nombre: 'Valentin Anibal', apellido: 'Dorrego',
      rol: 'Electrónica',
      imagen: 'p35.jpeg',
      linkedin: 'https://www.linkedin.com/in/valentin-anibal-dorrego-a881a523a/',
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'antartida', rol: 'Integrante' }],
    },
    {
     id: 'p36', nombre: 'Delfina', apellido: 'Bianco',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'concurso', rol: 'Integrante' }],
    },
    {
      id: 'p37', nombre: 'Joaquín', apellido: 'Toranzo Calderón',
      rol: 'Filosofía',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Prof. de Filosofía', 'Nivel': 'Tesista Doctoral', 'Año de incorporación': '2013', },
      pertenece: [{ id: 'EspANLI-UTN', rol: 'Director' },],
    },
    {
      id: 'p38', nombre: 'Mariano', apellido: 'Avola',
      rol: 'Electrónica',
      imagen: null,
      linkedin: null,
      meta: { 'Especialidad': 'Ing. Electrónica', 'Nivel': 'Estudiante Grado', 'Año de incorporación': '2026' },
      pertenece: [{ id: 'concurso', rol: 'Integrante' }],
    },
  ],
};