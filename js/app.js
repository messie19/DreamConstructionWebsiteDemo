/**
 * Change Nav styles on window scroll
 */
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

/**
 * NAV
 */
const navMenu = document.querySelector(".nav__menu");
const navMenuOpen = document.querySelector(".nav__menu--open");
const navMenuClose = document.querySelector(".nav__menu--close");

function openNavMenu() {
  navMenu.style.display = "flex";
  navMenuOpen.style.display = "none";
  navMenuClose.style.display = "inline-block";
}

function closeNavMenu() {
  navMenu.style.display = "none";
  navMenuOpen.style.display = "inline-block";
  navMenuClose.style.display = "none";
}

/**
 * Menu Show
 */
navMenuOpen.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
  openNavMenu();
});

/**
 * Menu Hide
 */
navMenuClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  closeNavMenu();
});

/**
 * Remove menu
 */
const navMenuLink = document.querySelectorAll(".nav__menu--link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navMenuLink.forEach((navLink) => navLink.addEventListener("click", linkAction));

const navLinkContact = document.querySelector(".btn--outline");
navLinkContact.addEventListener("click", linkAction);
