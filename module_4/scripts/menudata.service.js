(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'API'];

  function MenuDataService($http, API) {
    var menuData = this;

    menuData.getAllCategories = function() {
      return $http.get(API.url + API.endpoint.categories)
        .then(function(response) {
          console.dir(response.data);
          return response.data;
        });
    }

    menuData.getItemsForCategory = function(category) {
      return $http.get(API.url + API.endpoint.items, { params: {category: category} })
        .then(function(response) {
          console.dir(response.data.menu_items);
          return response.data.menu_items;
        });
    }

  }

})();
