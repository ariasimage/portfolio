const menu = () => {
  const hamburger = document.querySelector('.nav__hamburguer');
  const navLinks = document.querySelector('#nav-principal');
  const links = document.querySelectorAll('.nav__links--li a');

  if (hamburger && navLinks) {
    const closeMenu = () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Abrir menú');
    };

    hamburger.addEventListener('click', () => {
      // Toggle clase activa en hamburguesa y en menú de navegación
      const isOpen = navLinks.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar menú al hacer click en un enlace (mejor UX en mobile)
    links.forEach((link) => link.addEventListener('click', closeMenu));

    // Cerrar al pulsar fuera del menú
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });
  }
};

export default menu;
