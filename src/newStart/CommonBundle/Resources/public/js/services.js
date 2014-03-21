angular.module('wlgServices', ['ngResource']).
    factory('Product', function($resource){
	  return $resource('../api/v1/product/:method/:id', {}, {
	    listMine: {method:'GET', params:{method:'list-mine'}, isArray:true},
	    list: {method:'GET', params:{method:'list'}, isArray:true},
	    add: {method:'POST', params:{method:'add'}, isArray:true},
	    show: {method:'GET', params:{method:'show'}},
	    edit: {method:'GET', params:{method:'edit'}},
	    remove: {method:'GET', params:{method:'remove'}, isArray:true},
	    buy: {method:'GET', params:{method:'bought'}}
	  });
	}).factory('Friend', function($resource){
	  return $resource('../api/v1/friends/:method/:id', {}, {
	    listMine: {method:'GET', params:{method:'list-mine'}, isArray:true},
	    favorize: {method:'GET', params:{method:'favorize'}}
	  });
	});
