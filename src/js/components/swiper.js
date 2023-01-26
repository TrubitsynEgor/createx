// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';

const portSlider = document.querySelector('.portfolio-section__slider')

Swiper.use([Navigation, Pagination]);
const portfolioSlider = new Swiper(portSlider, {
  slidesPerView: 'auto',
  loop: true,
  watchSlidesProgress: true,
  // on: {
  //   init: function () {

  //     const activeSlide = portSlider.querySelector('.swiper-slide-active');
  //     const nextActiveSlide = activeSlide.nextElementSibling;
  //     const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
  //     activeSlide.classList.add('slider-visible');
  //     nextActiveSlide.classList.add('slider-visible');
  //     nextNextActiveSlide.classList.add('slider-visible');

  //   }
  // },
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  }
});

// portfolioSlider.on('slideChange', function () {
//   const activeSlide = portSlider.querySelector('.swiper-slide-next');
//   const nextActiveSlide = activeSlide.nextElementSibling;
//   const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

//   document.querySelectorAll('.portfolio-section__slider .swiper-slide').forEach(el => {
//     el.classList.remove('slider-visible')
//   })
//   activeSlide.classList.add('slider-visible');
//   nextActiveSlide.classList.add('slider-visible');
//   nextNextActiveSlide.classList.add('slider-visible');

// })
