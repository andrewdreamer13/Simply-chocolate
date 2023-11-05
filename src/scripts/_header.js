// header logo animation
logoAnimate();
function logoAnimate() {

  window.addEventListener('load', () => {

    const logoLetters = document.querySelectorAll('.logo__letter');
    const logoSvg = document.querySelector('.logo .svg');
    
    logoLetters.forEach((letter) => {
      letter.classList.add('logo__letter--animate')
    });
    logoSvg.classList.add('svg--animate')

  })
  
  
};


// header burger menu
burger();

function burger() {

  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const navItems = document.querySelectorAll('.nav__item');
  const navSocialsLinks = document.querySelectorAll('.nav__social-link');
  const navLinks = document.querySelectorAll('.nav__link')

  //open menu

  burgerBtn.addEventListener('click', () => {

    menu.classList.toggle('untranslate');
    document.querySelector('.burger__span-one').classList.toggle('span-one-transform');
    document.querySelector('.burger__span-two').classList.toggle('span-two-transform');
    document.querySelector('.burger__span-three').classList.toggle('span-three-transform');
    document.body.classList.toggle('no-scroll');
    navItems.forEach((item) => {
      item.classList.toggle('nav__item--animate');
    })
    navSocialsLinks.forEach((link) => {
      link.classList.toggle('nav__social-link--animate');
    })
  })

  /* close menu */

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navItems.forEach((item) => {
        item.classList.remove('nav__item--animate');
      })
      menu.classList.remove('untranslate');
      document.querySelector('.burger__span-one').classList.remove('span-one-transform');
      document.querySelector('.burger__span-two').classList.remove('span-two-transform');
      document.querySelector('.burger__span-three').classList.remove('span-three-transform');
      document.querySelector('body').classList.remove('no-scroll');
      navSocialsLinks.forEach((socialLink) => {
        socialLink.classList.remove('nav__social-link--animate');
      })
    });
  });

} // End of burger
