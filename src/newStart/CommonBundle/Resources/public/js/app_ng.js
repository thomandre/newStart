var havefyveApp = angular.module('havefyveApp', ['havefyveServices']);


havefyveApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../partials/product-list.html',
        controller: 'MyProductListCtrl'
      }).
      when('/product/:productId', {
        templateUrl: '../../partials/product-detail.html',
        controller: 'MyProductDetailCtrl'
      }).
      when('/profile/:userId', {
        templateUrl: '../../partials/user-product-list.html',
        controller: 'ProductListCtrl'
      }).      
      when('/profile/:userId/product/:productId', {
        templateUrl: '../../partials/user-product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
