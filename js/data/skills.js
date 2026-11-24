const skills = [
  {
    name: 'HTML5',
    icon: './assets/img/html.svg',
    state: 'dominada',
    level: 'avanzado',
    description:
      'Estructura semántica, accesibilidad web y buenas bases de SEO on-page.',
    tags: ['HTML semántico', 'Accesibilidad', 'SEO'],
  },
  {
    name: 'CSS3',
    icon: './assets/img/css.svg',
    state: 'dominada',
    level: 'avanzado',
    description:
      'Maquetación responsive, layouts modernos, transiciones y animaciones CSS.',
    tags: ['Flexbox', 'Grid', 'Responsive'],
  },
  {
    name: 'JavaScript',
    icon: './assets/img/javascript.svg',
    state: 'dominada',
    level: 'básico',
    description:
      'Sintaxis ES6+, manipulación del DOM, consumo de APIs con fetch, async/await y módulos.',
    tags: ['ES6+', 'DOM', 'Fetch API', 'Async/Await'],
  },
  {
    name: 'Git',
    icon: './assets/img/git.svg',
    state: 'dominada',
    level: 'intermedio',
    description:
      'Control de versiones, flujo de ramas y gestión de historial en proyectos.',
    tags: ['Control de versiones', 'Ramas', 'Commits'],
  },
  {
    name: 'GitHub',
    icon: './assets/img/github.svg',
    state: 'dominada',
    level: 'intermedio',
    description:
      'Trabajo con repositorios remotos, pull requests, issues y colaboración en equipo.',
    tags: ['Repositorios', 'Pull Requests', 'Issues'],
  },
  {
    name: 'WordPress',
    icon: './assets/img/wordpress.svg',
    state: 'dominada',
    level: 'intermedio',
    description:
      'Administración, actualización y mantenimiento de sitios web y gestión de contenidos.',
    tags: ['CMS', 'Contenidos', 'Plugins', 'Multisitio'],
  },
  {
    name: 'Figma',
    icon: './assets/img/figma.svg',
    state: 'dominada',
    level: 'intermedio',
    description:
      'Interpretación de diseños UI, inspección de estilos y prototipado de interfaces.',
    tags: ['UI', 'Prototipado', 'Diseño web'],
  },
  {
    name: 'Cool Tabs',
    icon: './assets/img/cooltabs.png',
    state: 'dominada',
    level: 'avanzado',
    description:
      'Maquetación personalizada con HTML y CSS para concursos, sorteos y dinámicas interactivas de campaña.',
    tags: ['HTML', 'CSS', 'Campañas', 'Interactivos'],
  },
  {
    name: 'React',
    icon: './assets/img/react.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Desarrollo de interfaces con componentes funcionales, hooks, manejo de estado, props y renderizado condicional.',
    tags: ['Componentes', 'Hooks', 'Estado', 'SPA'],
  },
  {
    name: 'Node.js',
    icon: './assets/img/nodedotjs.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Entorno JavaScript en servidor para crear servicios backend, rutas HTTP y APIs.',
    tags: ['Backend', 'APIs', 'HTTP'],
  },
  {
    name: 'Express',
    icon: './assets/img/express.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Framework ligero para Node.js orientado al enrutamiento, middlewares y construcción de APIs.',
    tags: ['APIs', 'Middleware', 'Routing'],
  },
  {
    name: 'SQL',
    icon: './assets/img/mysql.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Diseño de esquemas relacionales, consultas, relaciones y joins en bases de datos.',
    tags: ['Consultas', 'Joins', 'Relacional'],
  },
  {
    name: 'MongoDB',
    icon: './assets/img/mongodb.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Almacenamiento de datos NoSQL basado en documentos y modelado con esquemas.',
    tags: ['NoSQL', 'Documentos', 'Mongoose'],
  },
  {
    name: 'Astro',
    icon: './assets/img/astro.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Framework web enfocado en sitios rápidos, bajo peso de JavaScript y arquitectura de islas.',
    tags: ['Islas', 'Rendimiento', 'Sitios estáticos'],
  },
  {
    name: 'TypeScript',
    icon: './assets/img/typescript.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Tipado estático sobre JavaScript para mejorar la legibilidad, el autocompletado y el mantenimiento.',
    tags: ['Tipos', 'Interfaces', 'Genéricos'],
  },
  {
    name: 'REST API',
    icon: './assets/img/postman.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Consumo y diseño de endpoints RESTful con métodos HTTP y formato JSON.',
    tags: ['HTTP', 'Endpoints', 'JSON'],
  },
  {
    name: 'Docker',
    icon: './assets/img/docker.svg',
    state: 'en-progreso',
    level: 'básico',
    description:
      'Uso de contenedores e imágenes para estandarizar entornos de desarrollo y ejecución.',
    tags: ['Contenedores', 'Imágenes', 'Entornos'],
  },
  {
    name: 'Vite',
    icon: './assets/img/vite.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Empaquetador y servidor de desarrollo rápido para aplicaciones frontend modernas.',
    tags: ['Build', 'Dev Server', 'Bundler'],
  },
  {
    name: 'SASS/SCSS',
    icon: './assets/img/sass.svg',
    state: 'dominada',
    level: 'intermedio',
    description:
      'Preprocesador CSS para organizar estilos mediante variables, mixins, partials y anidación.',
    tags: ['Preprocesador', 'Mixins', 'Variables'],
  },
  {
    name: 'Bootstrap',
    icon: './assets/img/bootstrap.svg',
    state: 'dominada',
    level: 'intermedio',
    description:
      'Maquetación ágil con sistema de rejilla, componentes predefinidos y utilidades responsive.',
    tags: ['Grid', 'Componentes', 'Responsive'],
  },
  {
    name: 'Next.js',
    icon: './assets/img/nextdotjs.svg',
    state: 'en-progreso',
    level: 'intermedio',
    description:
      'Framework sobre React con enrutado basado en archivos, renderizado en servidor y optimización web.',
    tags: ['SSR', 'Routing', 'React'],
  },
  {
    name: 'Redux',
    icon: './assets/img/redux.svg',
    state: 'en-progreso',
    level: 'básico-intermedio',
    description:
      'Gestión centralizada y predecible del estado global en aplicaciones React.',
    tags: ['Estado global', 'Store'],
  },
  {
    name: 'Jest',
    icon: './assets/img/jest.svg',
    state: 'en-progreso',
    level: 'básico',
    description:
      'Pruebas unitarias en JavaScript para verificar el comportamiento de funciones y lógica.',
    tags: ['Testing', 'Pruebas unitarias'],
  },
];

export default skills;
