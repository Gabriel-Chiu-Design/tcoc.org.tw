$(document).ready(function () {
    
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    breakpoints: {
      1366: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 24,
      },
      414: {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 12,
      },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

});