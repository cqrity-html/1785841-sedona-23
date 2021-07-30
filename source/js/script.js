let mainNav = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.main-nav__toggle');
let mainNavClose = document.querySelector('.main-nav__close');

//MAIN-NAV

if (mainNav && mainNavToggle && mainNavClose) {

  mainNavToggle.addEventListener('click', function (event) {
    event.preventDefault();
    mainNav.classList.remove('visually-hidden');
    mainNav.classList.add('modal-appear');
  });

  mainNavClose.addEventListener('click', function () {
    mainNav.classList.add('visually-hidden');
    mainNav.classList.remove('modal-appear');
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (!mainNav.classList.contains("visually-hidden")) {
        evt.preventDefault();
        mainNav.classList.add("visually-hidden");
        mainNav.classList.remove('modal-appear');
      }
    }
  });
}
