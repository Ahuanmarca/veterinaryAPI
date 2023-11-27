export default [
  {
    _id: '1',
    category: 'html', // html, css, javascript
    level: 'easy', // easy, medium, hard
    description: '¿Para qué se utiliza la etiqueta <iframe>?',
    answers: {
      a: 'Para incrustar contenido',
      b: 'Para dibujar gráficos',
      c: 'Para enmarcar un grupo de elementos',
      d: 'Para crear una etiqueta condicional',
    },
    correctAnswer: 'a',
    feedback:
      'El elemento HTML <iframe> (de inline frame) representa un contexto de navegación anidado, el cual permite incrustar otra página HTML en la página actual.',
    deleted: false,
    __v: 0,
  },
  {
    _id: '2',
    category: 'html', // html, css, javascript
    level: 'medium', // easy, medium, hard
    description: '¿Cuál de estas no es una etiqueta semántica?',
    answers: {
      a: '<section>',
      b: '<aside>',
      c: '<footer>',
      d: '<content>',
    },
    correctAnswer: 'd',
    deleted: false,
    __v: 0,
  },
  {
    _id: '3',
    category: 'javascript', // html, css, javascript
    level: 'hard', // easy, medium, hard
    description: '¿Cuál de estos no es un array method?',
    answers: {
      a: '.forEach()',
      b: '.join()',
      c: '.contains()',
      d: '.includes()',
    },
    correctAnswer: 'b',
    deleted: false,
    __v: 0,
  },
];