'use strict';

window.helpers = (function () {
  var getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomName = function () {
    return getRandomItem(window.wizardConstants.WIZARD_NAMES) + ' ' +
        getRandomItem(window.wizardConstants.WIZARD_LAST_NAMES);
  };

  return {
    getRandomItem,
    getRandomName
  };
})();
