const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const mediaQuery = window.matchMedia('(max-width: 37.49875em)');

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function handleMediaChange(e) {
  if (e.matches) {
    burgerMenu.addEventListener("click", toggleMenu);
  } else {
    burgerMenu.removeEventListener("click", toggleMenu);
    menu.style.display = "";
  }
}

handleMediaChange(mediaQuery);
mediaQuery.addListener(handleMediaChange);


