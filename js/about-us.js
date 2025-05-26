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

    lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://raw.githubusercontent.com/Gabriel-Chiu-Design/tcoc.org.tw/refs/heads/main/element/Hero%20entry%20animation%20(1).json'
    });

    // ✅ Modify SVG after it loads
    animation.addEventListener('DOMLoaded', () => {
        const svg = document.querySelector('#lottie-container svg');
        if (svg) {
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.removeAttribute('style');
        }
    });

});