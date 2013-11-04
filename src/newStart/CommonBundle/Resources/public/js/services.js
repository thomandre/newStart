angular.module('havefyveServices', ['ngResource']).
    factory('Product', function($resource){
  return $resource('../api/v1/product/:method/:productId', {}, {
    query: {method:'GET', params:{method:'show'}, isArray:true},
    add: {method:'GET', params:{method:'add'}, isArray:true},
    show: {method:'GET', params:{method:'show'}},
    remove: {method:'GET', params:{method:'remove'}, isArray:true}
  });
});
