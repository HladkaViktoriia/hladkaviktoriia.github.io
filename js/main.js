'use strict';

// MAIN SLIDER
if ($('.main-slider').length) {
  new Swiper('.main-slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
};

if ($('.article__img-swiper').length && $(window).width() < 501) {
  new Swiper('.article__img-swiper', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      '500': {
        loop: false,
        spaceBetween: 0,
      },
    },
  });
}

$('.popup').magnificPopup({});
$('.pop-language__close, .pop__close-white').on('click', function () {
  $.magnificPopup.close()
})

// // HEADER MENU 
$('.header__mob-nav-menu button').on('click', function () {
  $(this).next().addClass('active');
});

$('.header__menu.active > ul > li > button').on('click', function () {
  $(this).next().addClass('active');
});

$('.header__menu-close').on('click', function () {
  $('.header__menu').removeClass('active');
});

$('.header__menu-top button').on('click', function () {
  $(this).closest('.header__menu').removeClass('active');
});

// TABS
$('.tab').on('click', function () {
  const elem = $(this).closest('.wrapper');
  const id = $(this).attr('data-id');
  $(elem).find('.tab-item').removeClass('active-tab').hide();
  $(elem).find('#' + id).addClass('active-tab').fadeIn();
  $(elem).find('.tab').removeClass('active');
  $(this).addClass('active');
});

// TABS SCROLL
const activeScroll = (item) => {
  if ($('.wrapper-scroll').length) {
    const widthWrapElem = $(item).find('.wrapper-scroll').outerWidth();
    const widthElem = $(item).find('.tabs')[0].scrollWidth;

    if (widthElem > widthWrapElem) {
      $(item).find('.wrapper-scroll').touchFlow({
        axis: "x",
      });
    }
  }
}
activeScroll($('.rates'));

// TABLE CONTENT
$('.table-content__btn').on('click', function (e) {
  if ($(e.target).hasClass('hide')) {
    $(this).closest('.table-content__inner').find('.table-content__list').hide(300);
  } else {
    $(this).closest('.table-content__inner').find('.table-content__list').show(300);
  }

  $('.table-content__btn span').removeClass('d-none');
  $(e.target).addClass('d-none');
})


// FAQ
$('.faq__item').on('click', function () {
  $(this).toggleClass('active');
  $(this).find('.faq__answer').slideToggle();

  $('.scroll').removeClass('scroll');
})

// SCROLL
$('.scroll-table').touchFlow({
  axis: "x",
  scrollbar: true,
  initComplete: function (e) {
    if (this.list[0].offsetWidth > this.target.offsetWidth) {
      $(this.target).removeClass('disabled');
    } else {
      $(this.target).addClass('disabled');
    }
  },
  resizeend: function (e) {
    if (this.list[0].offsetWidth > this.target.offsetWidth) {
      $(this.target).removeClass('disabled');
    } else {
      $(this.target).addClass('disabled');
    }
  }
});

if ($('.rateyo').length) {
  $('.rateyo').raty({});
}



$(window).resize(function () {
  activeScroll($('.rates'));
});