var havefyveApp = angular.module('havefyveApp', ['havefyveServices']);


havefyveApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../partials/product-list.html',
        controller: 'ProductListCtrl'
      }).
      when('/product/:productId', {
        templateUrl: '../../partials/product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);