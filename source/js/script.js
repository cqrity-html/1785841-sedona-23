let modal = document.querySelector('.modal');
let modalError = document.querySelector('.modal--error');
let modalSuccess = document.querySelector('.modal--success');
let modalButtonClose = document.querySelector('.modal__button--close');
let modalButtonOk = document.querySelector('.modal__button--ok');

let feedbackButton = document.querySelector('.feedback-form__button');
let feedbackForm = document.querySelector('.feedback-form');
let feedbackName = document.querySelector('.feedback-form__label--first-name');
let feedbackFamilyName = document.querySelector('.feedback-form__label--family-name');
let feedbackPhone = document.querySelector('.feedback-form__field--phone');
let feedbackEmail = document.querySelector('.feedback-form__field--email');


let mainNav = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.page-header__menu-toggle');
let mainLogo = document.querySelector('.page-header__logo');

//MAIN-NAV

if (mainNav && mainNavToggle) {

  mainNavToggle.addEventListener('click', function () {
    if (mainNav.style.display = 'none') {
      mainNav.style.display = 'block';
      mainNavToggle.classList.remove('page-header__menu-toggle--open');
      mainNavToggle.classList.add('page-header__menu-toggle--close');
      mainLogo.style.bottom = '-84px';
    } else {
      mainNav.style.display = 'none';
      mainNavToggle.classList.remove('page-header__menu-toggle--close');
      mainNavToggle.classList.add('page-header__menu-toggle--open');
      mainLogo.style.bottom = 'none';
    }
  });
}

if (modal && modalError && modalSuccess && modalButtonClose && modalButtonOk && feedbackButton && feedbackForm && feedbackName && feedbackPhone && feedbackEmail && feedbackFamilyName) {

  feedbackForm.addEventListener('submit', function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackPhone.value) {
      evt.preventDefault();
      modalError.classList.remove('modal--mistake');
      modalError.classList.remove('visually-hidden');
      modalError.classList.add('modal--mistake');
    }
  });

  feedbackForm.addEventListener('submit', function (evt) {
    if (feedbackName.value || feedbackEmail.value || feedbackPhone.value) {
      evt.preventDefault();
      modalSuccess.classList.remove('modal--appear');
      modalSuccess.classList.remove('visually-hidden');
      modalSuccess.classList.add('modal--appear');
      modalError.classList.add('visually-hidden');
    }
  });

  modalButtonClose.addEventListener('click', function () {
    modalSuccess.classList.add('visually-hidden');
    modalSuccess.classList.remove('modal--appear');
  });

  modalButtonOk.addEventListener('click', function () {
    modalError.classList.add('visually-hidden');
    modal.classList.remove('modal--mistake');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (!modalError.classList.contains('visually-hidden')) {
      evt.preventDefault();
      modalError.classList.add('visually-hidden');
      modalError.classList.remove('modal--mistake');
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (!modalSuccess.classList.contains('visually-hidden')) {
      evt.preventDefault();
      modalSuccess.classList.add('visually-hidden');
      modalSuccess.classList.remove('modal--appear');
    }
  }
});
