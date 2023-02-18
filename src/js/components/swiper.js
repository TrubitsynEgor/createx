// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
import { Swiper, Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([EffectFade, Navigation, Pagination, Thumbs]);



Swiper.use([Navigation, Pagination]);
const portfolioSlider = new Swiper('.portfolio-section__slider', {
  slidesPerView: 'auto',
  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  }
});

const testimonialsSlider = new Swiper('.testimonials__slider', {
  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.testimonials-section__next',
    prevEl: '.testimonials-section__prev',
  }
});

const sliderWorkElement = document.querySelector('.work-slider');

if (sliderWorkElement) {
  const workSliderNav = new Swiper('.work-slider-2', {
    spaceBetween: 0,
    slidesPerView: 10.25,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,

  });
  const workSlider = new Swiper(sliderWorkElement, {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
      nextEl: ".work-slider__next",
      prevEl: ".work-slider__prev",
    },
    thumbs: {
      swiper: workSliderNav,
    },

  });

}



const sliderHistoryEl = document.querySelector('.history__slider-body');

if (sliderHistoryEl) {
  const historySliderNav = new Swiper('.history__slider-nav', {
    spaceBetween: 0,
    slidesPerView: 9,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,

  });
  const historySliderBody = new Swiper(sliderHistoryEl, {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev",
    },
    thumbs: {
      swiper: historySliderNav,
    },

  });

}


const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  navigation: {
    prevEl: '.hero__prev',
    nextEl: '.hero__next',
  },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll('.hero__pagination .swiper-pagination-bullet');
      paginationBullets.forEach(el => {
        el.innerHTML = `<span class="hero__bar"></span>`
      });
    }
  }
});



