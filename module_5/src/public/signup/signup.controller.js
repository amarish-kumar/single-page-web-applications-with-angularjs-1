(function() {
  'use strict';

  angular
    .module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SessionStorage'];

  function SignUpController(MenuService, SessionStorage) {
    var signUpCtrl = this;

    signUpCtrl.user = {};

    signUpCtrl.submitForm = function() {
      if ($scope.signUpForm.$valid) {
        MenuService.getMenuItemsByShortName(signUpCtrl.user.menuNumber)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(response) {
            console.log(response);
          });
      }
    }

  }
})();
