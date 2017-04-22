'use strict';

(function drawWiz() {
  var wizConst = window.wizardConstants;
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wiz = document.querySelector('.wizard');
  var wizardCoat = wiz.querySelector('.wizard-coat');
  var wizardEyes = wiz.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.getRandomItem(wizConst.COAT_COLOR);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.getRandomItem(wizConst.EYE_COLOR);
  });


  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = window.getRandomItem(wizConst.FIREBALL_COLOR);
  });

  // Создайте массив, состоящий из 4 сгенерированных из JS объектов
  function setupWizards() {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      wizards[i] = {
        name: window.getRandomName(),
        coatColor: window.getRandomItem(wizConst.COAT_COLOR),
        eyeColor: window.getRandomItem(wizConst.EYE_COLOR)
      };
    }
    return wizards;
  }

  // На основе данных, созданных в предыдущем пункте
  // и шаблона #similar-wizard-template создайте DOM-элементы,
  // соответствующие случайно сгенерированным волшебникам
  // и заполните их данными из массива
  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

    return wizardElement;
  }

  // Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list.
  // Для вставки элементов используйте DocumentFragment
  window.showWizardsList = function () {
    var fragment = document.createDocumentFragment();

    var wizards = setupWizards();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  };

})();
