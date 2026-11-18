import { header, footer } from './templates/template.js';
import menu from './utils/menu.js';

// Cargar templates de header y footer
const siteHeader = document.querySelector('header');
const siteFooter = document.querySelector('footer');

if (siteHeader) {
  siteHeader.innerHTML = header;
}

if (siteFooter) {
  siteFooter.innerHTML = footer;
}

// Inicializar funcionalidades (el menú, después de cargar el header)
menu();
