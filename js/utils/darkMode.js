const darkMode = () => {
  const toggle = document.querySelector('.theme__toggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      // toggle devuelve true si la clase se ha añadido
      const isDark = document.body.classList.toggle('dark-mode');
      toggle.setAttribute(
        'aria-label',
        isDark ? 'Activar modo claro' : 'Activar modo oscuro'
      );
    });
  }
};

export default darkMode;
