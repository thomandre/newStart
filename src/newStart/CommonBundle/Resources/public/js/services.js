angular.module('havefyveServices', ['ngResource']).
    factory('Product', function($resource){
  return $resource('../api/v1/product/:method/:id', {}, {
    listMine: {method:'GET', params:{method:'list-mine'}, isArray:true},
    list: {method:'GET', params:{method:'list'}, isArray:true},
    add: {method:'GET', params:{method:'add'}, isArray:true},
    show: {method:'GET', params:{method:'show'}},
    remove: {method:'GET', params:{method:'remove'}, isArray:true}
  });
});
