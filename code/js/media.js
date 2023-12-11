$(document).ready(function () {
  const goodnewsswiper = new Swiper('.goodnews .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
  
    breakpoints: {
      1024: {
        slidesPerGroup:3,
        slidesPerView: 3,
        freeMode: false,
      },
      768: {
        spaceBetween: 16,
      },
      300: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.media.goodnews .swiper-container .button-next',
      prevEl: '.media.goodnews .swiper-container .button-prev',
    },
  });

  const sermonswiper = new Swiper('.sermon .swiper', {
    // Optional parameters
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
  
    breakpoints: {
      1024: {
        slidesPerGroup:3,
        slidesPerView: 3,
        freeMode: false,
      },
      768: {
        spaceBetween: 16,
      },
      300: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.media.sermon .swiper-container .button-next',
      prevEl: '.media.sermon .swiper-container .button-prev',
    },

  });

  const communionswiper = new Swiper('.communion .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
  
    breakpoints: {
      1024: {
        slidesPerGroup:3,
        slidesPerView: 3,
        freeMode: false,
      },
      768: {
        spaceBetween: 16,
      },
      300: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.media.communion .swiper-container .button-next',
      prevEl: '.media.communion .swiper-container .button-prev',
    },

  });

  const musicswiper = new Swiper('.worship .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
  
    breakpoints: {
      1024: {
        slidesPerGroup:3,
        slidesPerView: 3,
        freeMode: false,
      },
      768: {
        spaceBetween: 16,
      },
      300: {
        slidesPerView: "auto",
        spaceBetween: 12,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.media.worship .swiper-container .button-next',
      prevEl: '.media.worship .swiper-container .button-prev',
    },

  });
});