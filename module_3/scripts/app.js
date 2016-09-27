(function() {
  'use strict';

  angular
    .module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItems)
    .constant('API', {
      url: 'https://davids-restaurant.herokuapp.com',
      endpoint: {
        items: '/menu_items.json'
      }
    });

  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http', '$filter', 'API'];

  function foundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundList.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

  function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;

    narrowItDown.searchTerm = '';
    narrowItDown.found = [];

    narrowItDown.doSearchTerm = function() {
      MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
        .then(function(response) {
          narrowItDown.found = response;
        });
    };

    narrowItDown.removeItem = function(itemIndex) {
      console.log(itemIndex);
      narrowItDown.found.splice(itemIndex, 1);
    };
  }

  function MenuSearchService($http, $filter, API) {
    var menuSearch = this;

    menuSearch.getMatchedMenuItems = function(searchTerm) {
      return $http.get(API.url + API.endpoint.items)
        .then(function(response) {
          var foundItems = $filter('filter')(response.data.menu_items, {description: searchTerm});
          foundItems = $filter('orderBy')(foundItems, 'name');
          return foundItems;
        });
    };
  }
})();
