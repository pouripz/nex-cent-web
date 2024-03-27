// hamburger menu | nav list
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-menu--active");
  navList.classList.toggle("nav-list--open");
});

// swiper

var swiper = new Swiper(".register", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

