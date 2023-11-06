

  const productsSlider = new Swiper('.products__slider',{
  loop:true,
  slidesPerView: 1.3,
   centeredSlides: true,
  spaceBetween: 18,
  speed: 500,
  grabCursor:true,
 
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  },
  breakpoints: {
    390: {
      slidesPerView: 1.5,
      spaceBetween: 18,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    715: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

