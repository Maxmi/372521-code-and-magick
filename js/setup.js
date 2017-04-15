'use strict';
// Покажите блок .setup, убрав у него класс .hidden.
var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYE_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];


function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomName() {
  return getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_LAST_NAMES);
}


// Создайте массив, состоящий из 4 сгенерированных из JS объектов

function setupWizards() {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: getRandomName(),
      coatColor: getRandomItem(COAT_COLOR),
      eyeColor: getRandomItem(EYE_COLOR)
    };
  }
  return wizards;
}

// На основе данных, созданных в предыдущем пункте
// и шаблона #similar-wizard-template создайте DOM-элементы,
// соответствующие случайно сгенерированным волшебникам
// и заполните их данными из массива

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

// Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list.
// Для вставки элементов используйте DocumentFragment
function showWizardsList() {
  var fragment = document.createDocumentFragment();

  var wizards = setupWizards();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
}

showWizardsList();


// Покажите блок .setup-similar, удалив у него CSS-класс hidden.
userDialog.querySelector('.setup-similar').classList.remove('hidden');

