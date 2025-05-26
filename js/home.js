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

        const player = document.querySelector('dotlottie-player');

            player.addEventListener('ready', () => {
            const shadow = player.shadowRoot;
            const svg = shadow.querySelector('svg');

            if (svg) {
                svg.style.height = '100%';
                svg.style.width = 'auto';
                svg.style.minWidth = '100vw';
                svg.style.transform = 'translateX(-50%)';
                svg.style.position = 'absolute';
                svg.style.left = '50%';
            }
            });


        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: ''
        });
});