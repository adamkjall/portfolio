const hamburgerElement = document.querySelector("nav .hamburger");
const menuElement = document.querySelector("nav .menu");
const projectsElement = document.querySelector(".menu .projects");
const accordionElement = document.querySelector(".menu .accordion");

hamburgerElement.addEventListener("click", toggleMenu);
projectsElement.addEventListener("click", toggleAccordion);


function toggleMenu() {
  menuElement.classList.toggle("menu-hide");
  hamburgerElement.classList.toggle("is-active");
}

function toggleAccordion() {
  projectsElement.classList.toggle("open")
  accordionElement.classList.toggle("show");

}
