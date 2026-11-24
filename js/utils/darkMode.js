const darkMode = () => {
  const toggle = document.querySelector('.theme__toggle');

  function applyDarkMode() {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (toggle) toggle.setAttribute('aria-label', 'Activar modo claro');
    } else {
      document.body.classList.remove('dark-mode');
      if (toggle) toggle.setAttribute('aria-label', 'Activar modo oscuro');
    }
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggle.setAttribute('aria-label', 'Activar modo claro');
      } else {
        localStorage.setItem('theme', 'light');
        toggle.setAttribute('aria-label', 'Activar modo oscuro');
      }
    });
  }
  applyDarkMode();
};

export default darkMode;
