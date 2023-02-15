import './js/modal'
import Swiper1, { Navigation } from 'swiper';
import Swiper2, { Navigation } from 'swiper';

// import styles bundle

// configure Swiper to use modules
Swiper1.use([Navigation]);

// init Swiper:
const swiper = new Swiper1('.swiper-hero', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next, .every-arrow-prev',
    prevEl: '.swiper-button-prev, .every-arrow-next',
  },

  slidesPerView: 1,
});

Swiper2.use([Navigation]);

// init Swiper:
const swiper1 = new Swiper2('.swiper-restaurant', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.every-arrow-prev',
    prevEl: '.every-arrow-next',
  },

  freeMode: true,
  slidesPerView: 1.2,

  speed: 200,
});





