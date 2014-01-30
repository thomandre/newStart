var havefyveApp = angular.module('havefyveApp', ['havefyveServices', 'ui.keypress', 'ui.bootstrap']);


havefyveApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../partials/product-list.html'
      }).
      when('/product/:productId', {
        templateUrl: '../../partials/product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      when('/profile/:userId', {
        templateUrl: '../../partials/user-product-list.html',
        controller: 'ProductListCtrl'
      }).      
      when('/profile/:userId/product/:productId', {
        templateUrl: '../../partials/user-product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      when('/friends/', {
        templateUrl: '../../partials/friends-list.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
