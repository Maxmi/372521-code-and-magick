'use strict';
window.dialog = (function dialogModule() {
  var userDialog = document.querySelector('.setup');

  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  };

  return {
    ESC_KEY_CODE,
    ENTER_KEY_CODE,
    openPopup,
    closePopup,
    onEscPress
  };
})();
