import './js/modal'
import SwiperHeroHotel, { Navigation } from 'swiper';
import Swiper2, { Navigation } from 'swiper';
import Swiper3, { Navigation } from 'swiper';
import Swiper4, { Navigation } from 'swiper';
// import styles bundle


// configure Swiper to use modules
SwiperHeroHotel.use([Navigation]);
// init Swiper:
const swiper = new SwiperHeroHotel('.swiper-hero', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});

// Swiper2-swiperRestaurant
Swiper2.use([Navigation]);
const swiperRestaurant = new Swiper2('.swiper-restaurant', {
  loop: true,
  navigation: {
    nextEl: '.every-arrow-prev',
    prevEl: '.every-arrow-next',
  },
  freeMode: true,
  slidesPerView: 1.2,
  speed: 200,
  lazy: {
    loadPrevNext: true,
  },
});

// Swiper3-swiperHotel
Swiper3.use([Navigation]);

const swiperHotel = new Swiper3('.swiper-hotel', {
  loop: true,
  navigation: {
    nextEl: '.every-arrow-next-hotel',
    prevEl: '.every-arrow-prev-hotel',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    1023: {
      slidesPerView: 2, spaceBetween: 40,
    },
  },
  freeMode: true,
  speed: 200,
  lazy: { loadPrevNext: true, },
});

Swiper4.use([Navigation]);

const swiperHotelReverse = new Swiper4('.swiper-hotel-revers', {
  loop: true,
  navigation: {
    nextEl: '.every-arrow-next-hotel-revers',
    prevEl: '.every-arrow-prev-hotel-revers',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    1023: {
      slidesPerView: 2, spaceBetween: 40,
    },
  },
  initialSlide: 2,
  freeMode: true,
  speed: 200,
  lazy: { loadPrevNext: true, },
});







