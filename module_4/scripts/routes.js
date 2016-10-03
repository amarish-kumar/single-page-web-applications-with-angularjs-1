(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig)

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'views/categories.html',
        controller: 'CategoriesController as menuCategories'
      })
      .state('items', {
        url: '/items?category',
        templateUrl: 'views/items.html',
        controller: 'ItemsController as menuItems'
      });
  }
})();
