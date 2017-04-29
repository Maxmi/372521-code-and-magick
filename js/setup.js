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
    window.dialog.openPopup();
  });

  setupClose.addEventListener('click', function () {
    window.dialog.closePopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.dialog.ENTER_KEY_CODE) {
      window.dialog.openPopup();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.dialog.ENTER_KEY_CODE) {
      window.dialog.closePopup();
    }
  });

  username.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.dialog.ESC_KEY_CODE) {
      evt.stopPropagation();
    }
  });


  // Покажите блок .setup-similar, удалив у него CSS-класс hidden.
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  window.drawWiz.showWizardsList();


})();
