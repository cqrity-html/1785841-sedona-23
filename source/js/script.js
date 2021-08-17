let mainNav = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.main-nav__toggle');
let mainNavClose = document.querySelector('.main-nav__close-button');

let modal = document.querySelector('.modal');
let modalError = document.querySelector('.modal--error');
let modalSuccess = document.querySelector('.modal--success');
let modalButtonClose = document.querySelector('.modal__button--close');
let modalButtonOk = document.querySelector('.modal__button--ok');

let feedbackButton = document.querySelector('.feedback-form__button');
let feedbackForm = document.querySelector(".feedback-form");
let feedbackName = document.querySelector(".feedback-form__label--first-name");
let feedbackFamilyName = document.querySelector(".feedback-form__label--family-name");
let feedbackPhone = document.querySelector(".feedback-form__field--phone");
let feedbackEmail = document.querySelector(".feedback-form__field--email");

//MAIN-NAV

if (mainNav && mainNavToggle && mainNavClose) {

  mainNavToggle.addEventListener('click', function (event) {
    event.preventDefault();
    mainNav.classList.remove('visually-hidden');
  });

  mainNavClose.addEventListener('click', function () {
    mainNav.classList.add('visually-hidden');
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (!mainNav.classList.contains("visually-hidden")) {
        evt.preventDefault();
        mainNav.classList.add("visually-hidden");
      }
    }
  });
}

//MODAL

if (modal && modalError && modalSuccess && modalButtonClose && modalButtonOk && feedbackButton && feedbackForm && feedbackName && feedbackPhone && feedbackEmail && feedbackFamilyName) {

  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackPhone.value) {
      evt.preventDefault();
      modalError.classList.remove("visually-hidden");
      modalFeedback.offsetWidth = feedbackForm.offsetWidth;
    }
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (feedbackName.value || feedbackEmail.value || feedbackPhone.value) {
      evt.preventDefault();
      modalSuccess.classList.remove("visually-hidden");
      modalError.classList.add("visually-hidden");
      modalFeedback.offsetWidth = feedbackForm.offsetWidth;
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (!modal.classList.contains("visually-hidden")) {
        evt.preventDefault();
        modal.classList.add("visually-hidden");
      }
    }
  });

  modalButtonClose.addEventListener('click', function () {
    modalSuccess.classList.add('visually-hidden');
  });

  modalButtonOk.addEventListener('click', function () {
    modalError.classList.add('visually-hidden');
  });

}
