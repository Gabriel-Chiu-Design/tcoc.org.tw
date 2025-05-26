$(document).ready(function () {

        //other-event-swiper Settings
        const coverswiper = new Swiper('.swiper', {
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

        // const player = document.querySelector('dotlottie-player');

        //     player.addEventListener('ready', () => {
        //     const shadow = player.shadowRoot;
        //     const svg = shadow.querySelector('svg');

        //     if (svg) {
        //         svg.style.height = '100%';
        //         svg.style.width = 'auto';
        //         svg.style.minWidth = '100vw';
        //         svg.style.transform = 'translateX(-50%)';
        //         svg.style.position = 'absolute';
        //         svg.style.left = '50%';
        //     }
        //     });

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