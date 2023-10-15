const productsSlider = new Swiper('.products__slider',{
  loop:true,
  slidesPerView: "auto",
  spaceBetween: 18,
  speed: 500,
  grabCursor:true,
 
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  }
});