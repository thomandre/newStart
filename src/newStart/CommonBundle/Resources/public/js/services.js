angular.module('havefyveServices', ['ngResource']).
    factory('Product', function($resource){
  return $resource('../api/v1/product/:productId', {}, {
    query: {method:'GET', params:{productId:'show'}, isArray:true}
  });
});
