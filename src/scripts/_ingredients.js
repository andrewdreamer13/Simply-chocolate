// rotate card on click

const cardBox = document.querySelector('.ingredients__cards');
const igredientCardButtons = document.querySelectorAll('.ingredients__card-button');
const igredientCards = document.querySelectorAll('.ingredients__card');

function rotateCard() {

  cardBox.addEventListener('click', function (e) {
    if (e.target.closest('.ingredients__card-button')) {
      igredientCards.forEach((card) => {
        card.classList.remove('ingredients__card--rotated');
      })
      e.target.closest('.ingredients__card').classList.add('ingredients__card--rotated');
    }
  })
}
rotateCard();

// rotate card on scroll

function backRotateCard() {
  igredientCards.forEach((card) => {
    card.classList.remove('ingredients__card--rotated');
  })
}
document.addEventListener('scroll', backRotateCard);

// show card button on scroll

function showCardButton() {
  let windowCenter = (window.innerHeight / 2) + window.scrollY; 

  igredientCardButtons.forEach((button) => {
    let cardTop = button.closest('.ingredients__card').offsetTop;
    if (windowCenter >=  cardTop) {
      button.classList.add('ingredients__card-button--visible');
    } else {
      button.classList.remove('ingredients__card-button--visible');
    }
  });
}
document.addEventListener('scroll', showCardButton);