'use strict';


window.dialog = (function () {
  var userDialog = document.querySelector('.setup');

  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  var defaultPos = {
    x: 0,
    y: 0
  };


  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
    userDialog.style.top = defaultPos.y + 'px';
    userDialog.style.left = defaultPos.x + 'px';
  };

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
    defaultPos = {
      x: userDialog.offsetLeft,
      y: userDialog.offsetTop
    };
  };


  var dialogHandle = userDialog.querySelector('.setup-user-pic');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  return {
    ESC_KEY_CODE,
    ENTER_KEY_CODE,
    openPopup,
    closePopup,
    onEscPress
  };
})();
