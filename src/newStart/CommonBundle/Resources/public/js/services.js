angular.module('havefyveServices', ['ngResource']).
    factory('Product', function($resource){
  return $resource('../api/v1/product/:method', {}, {
    query: {method:'GET', params:{method:'show'}, isArray:true},
    add: {method:'GET', params:{method:'add'}, isArray:true}
  });
});
