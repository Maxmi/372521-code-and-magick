'use strict';
// Окно .setup должно открываться по нажатию на блок .setup-open.
// Открытие окна производится удалением класса hidden у блока
var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

var wiz = document.querySelector('.wizard');
var wizardCoat = wiz.querySelector('.wizard-coat');
var wizardEyes = wiz.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

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

var ESC_KEY_CODE = 27;

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
};


var ENTER_KEY_CODE = 13;

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    openPopup();
  }
});


setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closePopup();
  }
});


wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomItem(COAT_COLOR);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomItem(EYE_COLOR);
});


fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = getRandomItem(FIREBALL_COLOR);
});


var username = userDialog.querySelector('.setup-user-name');
username.required = true;
username.maxlength = 50;

username.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
});


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

