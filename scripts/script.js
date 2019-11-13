const navElement = document.querySelector("nav");
const hamburgerElement = document.querySelector("nav .hamburger");
const menuElement = document.querySelector("nav .menu");

const accordionElement = document.querySelector(".menu .accordion");
const linkElements = document.querySelectorAll(".menu li a");
const projectsElement = document.querySelector(".menu .projects");

const bandElements = document.querySelectorAll(".band");

function initListeners() {
  hamburgerElement.addEventListener("click", toggleMenu);
  projectsElement.addEventListener("click", toggleAccordion);

  linkElements.forEach(el => {
    el.addEventListener("click", toggleMenu);
  });

  bandElements.forEach(el =>
    el.addEventListener("click", e => {
      el.classList.toggle("hide-animation");
    })
  );

  window.addEventListener("click", e => {
    if (navElement.contains(e.target)) {
      return;
    }
    closeMenu();
  })
}

function toggleMenu() {
  menuElement.classList.toggle("menu-hide");
  hamburgerElement.classList.toggle("is-active");
}

function closeMenu() {
  menuElement.classList.add("menu-hide");
  hamburgerElement.classList.remove("is-active");
}

function toggleAccordion() {
  projectsElement.classList.toggle("open");
  accordionElement.classList.toggle("show");
}

function showNavOnScroll() {
  window.onscroll = () => {
    if (window.pageYOffset > window.innerHeight - 5) {
      navElement.classList.add("nav-background");
    } else {
      navElement.classList.remove("nav-background");
    }
  };
}

initListeners();
showNavOnScroll();
