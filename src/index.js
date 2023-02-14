import './js/modal'
import Swiper, { Navigation, Pagination } from 'swiper';

// import styles bundle

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper('.swiper-hero, .swiper-restaurant', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next, .every-arrow-prev',
    prevEl: '.swiper-button-prev, .every-arrow-next',
  },
});



