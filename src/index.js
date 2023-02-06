import './js/modal'
import Swiper, { Navigation, Pagination } from 'swiper';

// import styles bundle

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper('.swiper-hero', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});