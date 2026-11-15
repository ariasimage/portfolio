// NUEVO: menú hamburguesa
const btnHamburguesa = document.querySelector(".nav__hamburguer")
const menuNavegacion = document.querySelector("#nav-principal")
const navLinks = document.querySelectorAll(".nav__links--li a")

const cerrarMenu = () => {
  menuNavegacion.classList.remove("nav__main--open")
  btnHamburguesa.setAttribute("aria-expanded", "false")
  btnHamburguesa.setAttribute("aria-label", "Abrir menú")
}

// Abrir y cerrar con el botón hamburguesa
btnHamburguesa.addEventListener("click", () => {
  const abierto = menuNavegacion.classList.toggle("nav__main--open")
  btnHamburguesa.setAttribute("aria-expanded", abierto)
  btnHamburguesa.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú")
})

// Cerrar al pulsar un enlace
navLinks.forEach((link) => link.addEventListener("click", cerrarMenu))

// Cerrar al pulsar fuera del menú
document.addEventListener("click", (e) => {
  if (!menuNavegacion.contains(e.target) && !btnHamburguesa.contains(e.target)) {
    cerrarMenu()
  }
})
