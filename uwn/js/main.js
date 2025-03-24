'use strict';

// TABS
$('.tab').on('click', function () {
    const elem = $(this).closest('.wrapper');
    const id = $(this).attr('data-id');
    $(elem).find('.tab').removeClass('active');
    $(this).addClass('active');
    $(elem).find('.tab-item').removeClass('active-tab').hide();
    $(elem).find('#' + id).addClass('active-tab').fadeIn();
});

$('.header__btn').on('click', function () {
    const headerHeight = $('.header__top').innerHeight();

    $(this).toggleClass('open');
    $('body').toggleClass('hide-800');
    $('.header__bottom').toggleClass('show');
    $('.header__bottom').css('height', window.innerHeight - headerHeight + 'px');
})

let yy = false;

console.log(`${yy ? '77' : '99'} 'hhhh'`);