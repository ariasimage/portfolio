import resourcesData from '../data/resources.js';

const resourcesGenerator = () => {
  const tabsContainer = document.getElementById('resources-tabs');
  if (!tabsContainer) return;

  // 1. Botones de las tabs (la primera nace activa)
  const tabsHTML = resourcesData
    .map(
      (group, index) => `
        <button
          class="tabs__btn${index === 0 ? ' active' : ''}"
          type="button"
          role="tab"
          id="tab-${index}"
          aria-selected="${index === 0}"
          aria-controls="panel-${index}"
          tabindex="${index === 0 ? 0 : -1}"
        >
          ${group.category}
        </button>
    `,
    )
    .join('');

  // 2. Paneles con los recursos de cada categoría
  const panelsHTML = resourcesData
    .map(
      (group, index) => `
        <div
          class="tabs__panel${index === 0 ? ' active' : ''}"
          role="tabpanel"
          id="panel-${index}"
          aria-labelledby="tab-${index}"
        >
          <ul class="resources__list">
            ${group.items
              .map(
                (item) => `
              <li class="resources__item">
                <a
                  class="resources__link"
                  href="${item.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="resources__name">${item.title}</span>
                  <p class="resources__note">${item.note}</p>
                </a>
              </li>
            `,
              )
              .join('')}
          </ul>
        </div>
    `,
    )
    .join('');

  tabsContainer.innerHTML = `
    <div class="tabs__list" role="tablist" aria-label="Categorías de recursos">
      ${tabsHTML}
    </div>
    ${panelsHTML}
  `;

  // 3. Cambio de pestaña: activa/desactiva clases y muestra/oculta paneles
  const tabs = tabsContainer.querySelectorAll('.tabs__btn');
  const panels = tabsContainer.querySelectorAll('.tabs__panel');

  const activateTab = (activeIndex) => {
    tabs.forEach((tab, index) => {
      const isActive = index === activeIndex;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive);
      tab.tabIndex = isActive ? 0 : -1;
      panels[index].classList.toggle('active', isActive);
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(index));
  });

  // Teclado: flechas izquierda/derecha para moverse entre tabs
  tabsContainer
    .querySelector('.tabs__list')
    .addEventListener('keydown', (event) => {
      const current = [...tabs].findIndex((tab) =>
        tab.classList.contains('active'),
      );
      let next;

      if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
      else if (event.key === 'ArrowLeft')
        next = (current - 1 + tabs.length) % tabs.length;
      else return;

      activateTab(next);
      tabs[next].focus();
    });
};

export default resourcesGenerator;
