angular.module('wlgServices', ['ngResource']).
    factory('Product', function($resource){
	  return $resource('api/v1/product/:method/:id', {}, {
	    listMine: {method:'GET', params:{method:'list-mine'}},
	    list: {method:'GET', params:{method:'list'}},
	    add: {method:'POST', params:{method:'add'}},
	    show: {method:'GET', params:{method:'show'}},
	    edit: {method:'GET', params:{method:'edit'}},
	    remove: {method:'GET', params:{method:'remove'}},
	    buy: {method:'GET', params:{method:'bought'}},
	    suggest: {method:'GET', params:{method:'suggestions'}, isArray:true},
	  });
	}).factory('Friend', function($resource){
	  return $resource('api/v1/friends/:method/:id?order=:order&filter=:filter', {}, {
	    listMine: {method:'GET', params:{method:'list-mine'}},
	    favorize: {method:'GET', params:{method:'favorize'}}
	  });
	}).factory('Feed', function($resource){
	  return $resource('api/v1/feed/', {}, {
	    read: {method:'GET'}
	  });
	});
