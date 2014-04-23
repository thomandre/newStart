var wlgApp = angular.module('wlgApp', ['ngRoute', 'wlgServices', 'ui.keypress', 'ui.bootstrap']);


wlgApp.config(
  function($routeProvider, $locationProvider, $provide) {
    $routeProvider.
      when('/me/', {
        templateUrl: '../partials/product-list.html',
        controller: 'MyProductListCtrl'
      }).
      when('/me/product/:productId', {
        templateUrl: '../partials/product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      when('/profile/:userId', {
        templateUrl: '../partials/user-product-list.html',
        controller: 'ProductListCtrl'
      }).      
      when('/profile/:userId/product/:productId', {
        templateUrl: '../partials/user-product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      when('/friends/', {
        templateUrl: '../partials/friends-list.html',
        controller: 'MyFriendsListCtrl'
      }).
      when('/feed/', {
        templateUrl: '../partials/feed.html',
        controller: 'MyFeedCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }
);
