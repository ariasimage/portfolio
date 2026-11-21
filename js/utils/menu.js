const menu = () => {
  const hamburger = document.querySelector('.nav__hamburguer');
  const navLinks = document.querySelector('#nav-principal');

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

    // Un único listener (delegación de eventos) que cierra el menú
    // al pulsar un enlace o al pulsar fuera del menú
    document.addEventListener('click', (e) => {
      const isLink = e.target.closest('.nav__links--li a');
      const isOutside =
        !navLinks.contains(e.target) && !hamburger.contains(e.target);

      if (isLink || isOutside) {
        closeMenu();
      }
    });
  }
};

export default menu;
