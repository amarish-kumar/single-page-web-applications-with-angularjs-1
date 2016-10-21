(function() {
  'use strict';

  angular
    .module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', 'MenuService', 'SessionStorage'];

  function SignUpController($scope, MenuService, SessionStorage) {
    var signUpCtrl = this;

    signUpCtrl.user = {};
    signUpCtrl.userInfoSaved = false;
    signUpCtrl.invalidMenuNumber = false;

    signUpCtrl.submitForm = function() {
      if ($scope.signUpForm.$valid) {
        signUpCtrl.invalidMenuNumber = false;
        var shortName = signUpCtrl.user.menuNumber.toUpperCase();
        MenuService.getMenuItemsByShortName(shortName)
          .then(function(response) {
            signUpCtrl.user.menuNumber = response;
            SessionStorage.storeObject('userinfo', signUpCtrl.user);
            signUpCtrl.userInfoSaved = true;
            $scope.signUpForm.$setPristine();
            $scope.signUpForm.$setUntouched();
            signUpCtrl.user = {};
          })
          .catch(function(response) {
            signUpCtrl.invalidMenuNumber = true;
          });
      } else {
        if (signUpCtrl.userInfoSaved) {
          signUpCtrl.userInfoSaved = false;
        }
      }
    }

  }
})();
