$(document).ready(function () {

    //other-event-swiper Settings
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        speed: 400,
        loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

});