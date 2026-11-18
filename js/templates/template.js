export const header = `
<header class="header__main">
  <a href="index.html" class="logo">JA</a>

  <nav class="nav__main" id="nav-principal" aria-label="Navegación principal">
    <ul class="nav__links">
      <li class="nav__links--li"><a href="about.html">About</a></li>
      <li class="nav__links--li"><a href="index.html#skills">Skills</a></li>
      <li class="nav__links--li"><a href="index.html#projects">Projects</a></li>
      <li class="nav__links--li"><a href="index.html#recursos">Recursos</a></li>
      <li class="nav__links--li"><a href="contacto.html">Contact</a></li>
    </ul>
  </nav>

  <div class="header__actions">
    <button
      class="theme__toggle"
      type="button"
      aria-label="Activar modo oscuro"
    >
      <svg
        class="theme__icon theme__icon--sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg
        class="theme__icon theme__icon--moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>

    <button
      class="nav__hamburguer"
      type="button"
      aria-label="Abrir menú"
      aria-expanded="false"
      aria-controls="nav-principal"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
`

export const footer = `
<footer class="footer">
  <nav class="footer__nav" aria-label="Enlaces del pie de página">
    <a
      href="https://github.com/ariasimage"
      target="_blank"
      rel="noopener noreferrer"
      >GitHub</a
    >
    <a
      href="https://www.linkedin.com/in/javier-arias-frontend/"
      target="_blank"
      rel="noopener noreferrer"
      >LinkedIn</a
    >
    <a href="contacto.html">Contacto</a>
  </nav>
  <p>
    Hecho con <span class="heart" aria-hidden="true">❤</span> por Javier
    Arias
  </p>
  <p>© 2026 Javier Arias · Frontend Developer · Madrid</p>
</footer>
`
