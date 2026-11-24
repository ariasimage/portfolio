import cheatsheetsData from '../data/cheatsheets.js';

const cheatsheetsList = () => {
  const cheatsheetsContainer = document.getElementById('cheatsheets-list');
  if (!cheatsheetsContainer) return;

  const cheatsheetsHTML = cheatsheetsData
    .map(
      (cheatsheet) => `
        <a class="cheatsheet__card" href="${cheatsheet.link}">
          <img
            class="cheatsheet__icon"
            src="${cheatsheet.icon}"
            alt=""
          />
          <h3 class="cheatsheet__name">${cheatsheet.name}</h3>
          <p>Guía rápida de referencia</p>
        </a>
    `,
    )
    .join('');

  cheatsheetsContainer.innerHTML = cheatsheetsHTML;
};

export default cheatsheetsList;
