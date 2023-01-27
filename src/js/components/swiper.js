// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';



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


