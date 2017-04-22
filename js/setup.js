'use strict';

(function () {

// Окно .setup должно открываться по нажатию на блок .setup-open.
// Открытие окна производится удалением класса hidden у блока
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var username = userDialog.querySelector('.setup-user-name');
  username.required = true;
  username.maxlength = 50;


  setupOpen.addEventListener('click', function () {
    window.openPopup();
  });

  setupClose.addEventListener('click', function () {
    window.closePopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ENTER_KEY_CODE) {
      window.openPopup();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ENTER_KEY_CODE) {
      window.closePopup();
    }
  });

  username.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ESC_KEY_CODE) {
      evt.stopPropagation();
    }
  });


  // Покажите блок .setup-similar, удалив у него CSS-класс hidden.
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  window.showWizardsList();


})();
