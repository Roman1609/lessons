"use strict"


// ============== MENU ================
// Отримати всі пункти головного меню
const menuPoints = document.querySelectorAll('.main-menu__point');

// Додати обробник події для кожного пункту меню
menuPoints.forEach(function(point) {
    point.addEventListener('click', function(e) {
        // Заборонити перехід посиланням
        e.preventDefault();
        
        // Знайти підменю, яке відповідає натиснутому пункту меню
        const subMenu = point.querySelector('.sub-menu');

        // Закрити всі інші підменю
        closeOtherSubMenus(subMenu);
        
        // Змінити видимість підменю
        subMenu.classList.toggle('sub-menu_open');
    });
});

// Функція для закриття всіх інших підменю, крім поточного
function closeOtherSubMenus(currentSubMenu) {
    const allSubMenus = document.querySelectorAll('.sub-menu');
    
    allSubMenus.forEach(function(subMenu) {
      if (subMenu !== currentSubMenu && subMenu.classList.contains('sub-menu_open')) {
        subMenu.classList.remove('sub-menu_open');
      }
    });
};
// ============== MENU ================


document.addEventListener("click", documentClicks);

const menuBurger = document.querySelector('.menu-burger');
const mainMenuWrapper = document.querySelector('.main-menu');
const categoriesMenu = document.querySelector('.categories__menu');
const colOptions3 = document.querySelector('.col-options__3-column');
const colOptions4 = document.querySelector('.col-options__4-column');
const categoriesItems = document.querySelector('.items');

function documentClicks(e) {
    const targetElement = e.target;

    if (targetElement.closest('.menu-burger')) {
        menuBurger.classList.toggle('burger-open');
        mainMenuWrapper.classList.toggle('menu-open');
        e.preventDefault();
    }
    else if (targetElement.closest('.categories__selector')) {
        categoriesMenu.classList.toggle('categories__menu_in-view');
        e.preventDefault();
    } 
    else if (targetElement.closest('.col-options__3-column')) {
        colOptions4.classList.remove('chosen');
        colOptions3.classList.add('chosen');
        categoriesItems.classList.remove('columns-4');
        e.preventDefault();
    }
    else if (targetElement.closest('.col-options__4-column')) {
        colOptions3.classList.remove('chosen');
        colOptions4.classList.add('chosen');
        categoriesItems.classList.add('columns-4');
        e.preventDefault();
    }
        // Запуск ф-ції закривання меню якщо клік на інший об'єкт
    else if (!e.target.closest('.main-menu__point') && !e.target.closest('.sub-menu') && !targetElement.closest('.categories')) {
        closeOtherSubMenus(null);
    }
    else {
        // Видалення класу для інших об'єктів
        menuBurger.classList.remove('burger-open');
        mainMenuWrapper.classList.remove('menu-open');
        categoriesMenu.classList.remove('categories__menu_in-view');
    }
};

// ========= Slider =============

new Swiper('.home-slider', {
    pagination: {
        el: '.slider-pagination',
        type: 'fraction',
    },
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    speed: 1000,
    loop: true,
});

new Swiper('.topics-slider', {
    pagination: {
        el: '.topics-slider__pagination',
        type: 'fraction',
    },
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    speed: 1000,
    loop: true,
});

// === MENU BG SHOW =====

const header = document.querySelector('.header');
const categories = document.querySelector('.categories');

function changeHeaderClass() {
        
    let categoriesOffset = categories.offsetTop - 70;
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition >= categoriesOffset) {
      header.classList.add('background');
    } else {
      header.classList.remove('background');
    }
}
  
window.addEventListener('scroll', changeHeaderClass);

// === MENU BG SHOW =====