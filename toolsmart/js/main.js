'use strict';

if ($('.slider--3').length) {
    new Swiper('.slider--3', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

if ($('.slider--6').length) {
    new Swiper('.slider--6', {
        slidesPerView: 2,
        spaceBetween: 12,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });
}

Fancybox.bind('.fancybox-link');

new WOW().init();

$('.btn-popup').magnificPopup();

$('.form__phone').mask('+7-000-000-0000'); 

// set position header
const setPaddingMain = () => {
    const heightHeader = $('.header').innerHeight();

    $('.header').css('position', 'absolute');
    $('.main .goods:first-child').css('padding-top', heightHeader + 'px');
};



$(window).on('resize', function () {
    // setPaddingMain();
});

$(window).on('load', function () {
    // setPaddingMain();
});