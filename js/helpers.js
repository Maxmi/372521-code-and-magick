'use strict';

(function () {
  window.getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.getRandomName = function () {
    return window.getRandomItem(window.wizardConstants.WIZARD_NAMES) + ' ' +
        window.getRandomItem(window.wizardConstants.WIZARD_LAST_NAMES);
  };

})();
