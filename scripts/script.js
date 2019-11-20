const navElement = document.querySelector("nav");
const hamburgerElement = document.querySelector("nav .hamburger");
const menuElement = document.querySelector("nav .menu");

const accordionElement = document.querySelector(".menu .accordion");
const linkElements = document.querySelectorAll(".menu li a");
const projectsElement = document.querySelector(".menu .projects");

const bandElements = document.querySelectorAll(".band");

/**
 * Initalize the event listeners
 */
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

  // Close menu if click is outside menu
  window.addEventListener("click", e => {
    if (navElement.contains(e.target)) {
      return;
    }
    closeMenu();
  })
}

/**
 * Toggle to menu to open or close
 */
function toggleMenu() {
  menuElement.classList.toggle("menu-hide");
  hamburgerElement.classList.toggle("is-active");
}

/**
 * Close the menu
 */
function closeMenu() {
  menuElement.classList.add("menu-hide");
  hamburgerElement.classList.remove("is-active");
}

/**
 * Toggle the accordion to open or close
 */
function toggleAccordion() {
  projectsElement.classList.toggle("open");
  accordionElement.classList.toggle("show");
}

/**
 * Give the navigation a background when user is not
 * at the top of the page
 */
function showNavOnScroll() {
  window.onscroll = () => {
    if (window.pageYOffset > 70) {
      navElement.classList.add("nav-background");
    } else {
      navElement.classList.remove("nav-background");
    }
  };
}

/**
 * Start the script when the load event fires
 */
window.addEventListener("load", () => {
  initListeners();
  showNavOnScroll();
})