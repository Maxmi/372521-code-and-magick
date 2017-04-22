'use strict';
(function () {
  var userDialog = document.querySelector('.setup');

  window.ESC_KEY_CODE = 27;
  window.ENTER_KEY_CODE = 13;

  window.onEscPress = function (evt) {
    if (evt.keyCode === window.ESC_KEY_CODE) {
      window.closePopup();
    }
  };

  window.openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', window.onEscPress);
  };

  window.closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', window.onEscPress);
  };

})();
