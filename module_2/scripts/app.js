(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

  ToBuyShoppingController.$inject = ['$scope'];
  AlreadyBoughtShoppingController.$inject = ['$scope'];

  function ToBuyShoppingController($scope) {

  }

  function AlreadyBoughtShoppingController($scope) {
  }

})();
