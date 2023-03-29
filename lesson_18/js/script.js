const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');
let menuVisible = false;

const mq = window.matchMedia('(min-width: 679.98px)');

function handleBurgerClick() {
  if (!menuVisible) {
    menu.style.display = 'block';
    menuVisible = true;
  } else {
    menu.style.display = 'none';
    menuVisible = false;
  }
}

function handleMediaQuery(mq) {
  if (mq.matches) {
    menu.style.display = 'block';
    menuBurger.removeEventListener('click', handleBurgerClick);
  } else {
    menu.style.display = 'none';
    menuBurger.addEventListener('click', handleBurgerClick);
  }
}

mq.addListener(handleMediaQuery);
handleMediaQuery(mq);