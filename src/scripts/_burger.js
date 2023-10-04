/* burger */
import {mainPage} from './_vars';

// header burger menu
burger();

function burger() {

  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const navItems = document.querySelectorAll('.nav__item');
  

  //open menu

  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('untranslate');
    document.querySelector('.burger__span-one').classList.toggle('span-one-transform');
    document.querySelector('.burger__span-two').classList.toggle('span-two-transform');
    document.querySelector('.burger__span-three').classList.toggle('span-three-transform');
    document.body.classList.toggle('no-scroll');
    // navItems.forEach((item) => {
    //   item.classList.toggle('nav__item-untransform');
    // })
  })

  /* close menu */

  navItems.forEach((item) => {
    item.addEventListener('click', function () {
      menu.classList.remove('untranslate');
      document.querySelector('.burger__span-one').classList.remove('span-one-transform');
      document.querySelector('.burger__span-two').classList.remove('span-two-transform');
      document.querySelector('.burger__span-three').classList.remove('span-three-transform');
      document.querySelector('body').classList.remove('no-scroll');
    });
  });

} // End of burger
