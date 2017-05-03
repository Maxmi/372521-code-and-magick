'use strict';

(function () {

  // Окно .setup должно открываться по нажатию на блок .setup-open.
  // Открытие окна производится удалением класса hidden у блока
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');

  var username = userDialog.querySelector('.setup-user-name');
  username.required = true;
  username.maxlength = 50;

  shopElement.addEventListener('dragstart', function (evt) {
    var target = evt.target;
    if (target.tagName.toLowerCase() === 'img') {
      artifactsElement.style.outline = '2px dashed red';
      draggedItem = target;
      evt.dataTransfer.setData('text/plain', target.alt);
    }
  });

  shopElement.addEventListener('dragend', function (evt) {
    artifactsElement.style.outline = '';
    evt.preventDefault();
  });


  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    artifactsElement.style.outline = '';
    return false; // instead of stop Propagation
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = '';
    evt.target.appendChild(draggedItem);
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });


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
