// animation for header nav links

function activateLink() {

  const sections = document.querySelectorAll('.target-section');
  const links = document.querySelectorAll('.header__nav .nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          let id = link.getAttribute('href').replace('#', '');
          if (id === entry.target.id) {
            link.classList.add('nav__link--active');
          } else {
            link.classList.remove('nav__link--active');
          }
        })
      }
      if (!entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.remove('nav__link--active');
        })
      }
    })
  }, {
    threshold: 0.8
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
};

activateLink();

// animation for spans in section titles

function activeTitles() {

  const allSections = document.querySelectorAll('section');
  const sectionTitles = document.querySelectorAll('.section-title .section-title__span');

  document.addEventListener('scroll', () => {


    sectionTitles.forEach((title) => {

      let windowCenter = (window.innerHeight / 2) + window.scrollY;
      let scrollOffSet = title.offsetTop + (title.offsetHeight * 2);

      if (windowCenter >= scrollOffSet) {
        title.classList.add('title-animated');

      } else {
        title.classList.remove('title-animated');

      }

    })

  })
};
activeTitles();