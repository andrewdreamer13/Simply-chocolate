const testimonialsSlider = new Swiper('.testimonials__slider',{
  loop:true,
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 500,
  grabCursor:true,
 
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  },
  breakpoints: {
    768: {
      spaceBetween: 28
    }
  }
});