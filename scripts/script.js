const hamburgerElement = document.querySelector("nav .hamburger");
const menuElement = document.querySelector("nav .menu");
const projectsElement = document.querySelector(".menu .projects");
const accordionElement = document.querySelector(".menu .accordion");
const linkElements = document.querySelectorAll(".menu li a");
const navElement = document.querySelector("nav");

hamburgerElement.addEventListener("click", toggleMenu);
projectsElement.addEventListener("click", toggleAccordion);

linkElements.forEach(el => {
  el.addEventListener("click", toggleMenu)
})


function toggleMenu() {
  menuElement.classList.toggle("menu-hide");
  hamburgerElement.classList.toggle("is-active");
}

function toggleAccordion() {
  projectsElement.classList.toggle("open")
  accordionElement.classList.toggle("show");
}

function showNavOnScroll() {
  window.onscroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      navElement.classList.add("nav-background")
    }
    else {
      navElement.classList.remove("nav-background");
    }
  }
}

showNavOnScroll();


