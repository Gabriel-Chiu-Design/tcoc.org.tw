$(document).ready(function () {
    
    const swiper = new Swiper('.CHS.swiper', {
        speed: 400,
        spaceBetween: 16,
        slidesPerView: "auto",
        freeMode: true,
        mousewheel: true,

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
      });



});