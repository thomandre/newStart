var wlgControllers = angular.module('wlgControllers', []);

function MyFeedCtrl($scope, $timeout, Feed, $rootScope) {
	$scope.filter = 'all';

	$scope.updateFeed = function () {
		$rootScope.loading = true;
		$rootScope.feed = Feed.read({'filter':$scope.filter}, function (data) {
			$rootScope.loading = false;
		});
    }
    $scope.updateFeed();
}

function FriendCtrl($scope, Friend, $rootScope, $window) {
	if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
		$('#search').focus();
	}
	$scope.favorize = function () {
		Friend.favorize({id: $scope.friend.facebookId}, function (data) {
			$scope.friend.favorite = data.favorized;
		});	
	}
}

function MyFriendsListCtrl($scope, $timeout, Friend, $rootScope, $modal) {
	var timer = false;
	$scope.order = 'name';
	$scope.filter = 'all';
    
    $scope.autoFriendsSearch = function () {
        if(timer) {
            $timeout.cancel(timer);
        }
        timer = $timeout(function () {
			$scope.updateFriends();
        }, 300);
    }

    $scope.welcomeFriends = function() {
    	var modalInstance = $modal.open({
	      templateUrl: 'welcomeFriends.html',
	      controller: WelcomeCtrl
	    });
    } 

	$scope.updateFriends = function () {
		$rootScope.loading = true;
		$rootScope.friends = Friend.listMine({'id':$scope.name, 'order':$scope.order, 'filter':$scope.filter}, function (data) {
			$rootScope.loading = false;
			if($rootScope.friends.user.displayPopinFriends == true) {
				$scope.welcomeFriends();
		    }
		});
		//
    }
    $scope.updateFriends();
}


function ModalInstanceCtrl($scope, $modalInstance, firstName) {
  $scope.firstName = firstName;
  $scope.ok = function () {
    $modalInstance.close('ok');
  };

  $scope.buy = function () {
    $modalInstance.close('buy');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};


function ProductDetailCtrl($scope, $http, $routeParams, Product, $rootScope, $modal, $window, ProductService, $timeout) {
	$scope.editModeName = false;
	$rootScope.loading = true;
	
	$scope.suggestionTest = function (event, suggestion) {
		if(event) {
			event.stopPropagation();
		}

		ProductService.suggestionTest(suggestion, $scope, $rootScope);
		
		if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null && $scope.$root.$$phase != '$apply') {
			$('#url').focus();
		}

		$window.onclick = function (event) {
			var target = $(event.target);
			if(!target) return;
			if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
				$scope.productScrapeCancel();
				if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					$scope.$apply();
				}
			}
		};
	};
	
	$scope.productSuggest = function () {
		if($rootScope.suggestions == undefined) {
			$rootScope.suggestions = Product.suggest(function (response) {});
		} else {
			$rootScope.suggestions = undefined;
		}
	};

	$scope.mobileEmpty = function () {
		if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
			$scope.url = '';
			$scope.productScrapeCancel();
		}
	}

	$scope.productScrapeCancel = function(name) {
		if($scope.scrapeLoading == false) {
  			$scope.scrappedProductHide = true;
		}
	};

	$scope.productScrape = function(event, name) {
		ProductService.productScrape($scope, $rootScope, $http);
  		$window.onclick = function (event) {
			//$window.onclick = null;
			var target = $(event.target);
			if(!target) return;
			if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
				$scope.productScrapeCancel();
				$scope.$apply();
			}
		};
	};

  	$scope.productSave = function(scrappedProduct) {
		ProductService.productSave($scope, $rootScope, scrappedProduct, Product, $timeout, true);
	};

	$scope.countProducts = function () {
		if($rootScope.products != undefined) {
			ProductService.countProducts($rootScope);
		} else {
			$rootScope.nbProducts = $scope.product.nbProducts;
		}
	};

	
	$scope.product = Product.show({id: $routeParams.productId}, function () {
		$rootScope.loading = false;
		$scope.countProducts();
	});

	$scope.productId = $routeParams.productId;

	$scope.editName = function () {
		$scope.oldName = $scope.product.name;
		$scope.editModeName = true;
	};
	$scope.cancelEditName = function () {
		setTimeout(function(){ 
			$scope.$apply(function(){
				$scope.product.name = $scope.oldName;
				$scope.editModeName = false;
			});
		});
	};
	$scope.saveName = function () {
		if($scope.product.name != '') {
		 	Product.edit({'id':$scope.product.id, 'name':$scope.product.name, 'price':$scope.product.price, 'comment':$scope.product.comment}, function(data) {});			
		} else {
			$scope.product.name = $scope.oldName;
		}
		$scope.editModeName = false;
	};
	
	$scope.editTitle = function () {
		$scope.editModeTitle = true;
		$scope.oldTitle = $scope.scrappedProduct.title;
	};

	$scope.cancelEditTitle = function () {
		$scope.scrappedProduct.title = $scope.oldTitle;
		$scope.editModeTitle = false;
	};

	$scope.saveTitle = function () {
		if($scope.scrappedProduct.title == '') {
			$scope.scrappedProduct.title = $scope.oldTitle;
		}
		$scope.editModeTitle = false;
	};

	$scope.editPrice = function () {
		$scope.oldPrice = $scope.product.price;
		$scope.editModePrice = true;
	};
	$scope.cancelEditPrice = function () {
		setTimeout(function(){ 
			$scope.$apply(function(){
				$scope.product.price = $scope.oldPrice;
				$scope.editModePrice = false;
			});
		});
	};
	$scope.savePrice = function () {
		if($scope.product.price != '') {
		 	Product.edit({'id':$scope.product.id, 'name':$scope.product.name, 'price':$scope.product.price, 'comment':$scope.product.comment}, function(data) {});
		} else {
			$scope.product.price = $scope.oldPrice;
		}
		$scope.editModePrice = false;
	};

	$scope.open = function () {
		var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,
	      resolve: {
	        firstName: function () {
	          return $scope.product.firstName;
	        }, 
	      }
	    });

	    modalInstance.result.then(function (clickedBtn) {
		  if(clickedBtn == 'ok') {
			Product.remove({id: $scope.product.id}, function (data) {
			  $rootScope.products = data;
	  	      //$scope.countProducts();

			  $('#boughtModal').modal('hide');
			  $rootScope.notice = 'Génial !';
			  $('.alert-notice, .alerts').show();
  		    });
		  } else {
			Product.buy({id: $scope.product.id}, function (data) {
			  $rootScope.products = data;

			  $('#boughtModal').modal('hide');
			  $rootScope.notice = 'Génial ! ' + $scope.product.fullName + ' sera forcément aux anges !';
			  $('.alert-notice, .alerts').show();
  		    });
		  }
	      
	    }, function () {

	    });
	};

	$scope.editComment = function () {
		$scope.oldComment = $scope.product.comment;
		$scope.editModeComment = true;
	};
	$scope.cancelEditComment = function () {
		setTimeout(function(){ 
			$scope.$apply(function(){
				$scope.product.comment = $scope.oldComment;
				$scope.editModeComment = false;
			});
		});
	};
	$scope.saveComment = function () {
	 	Product.edit({'id':$scope.product.id, 'name':$scope.product.name, 'price':$scope.product.price, 'comment':$scope.product.comment}, function(data) {});
		$scope.editModeComment = false;
	};

}

function ProductItemCtrl($scope, Product, $rootScope) {
	$scope.remove = function () {
		if(confirm('Voulez-vous supprimer ' + $scope.product.name + ' ?')) {
			Product.remove({id: $scope.product.id}, function (data) {
		      $rootScope.products = data;
	    	  $scope.countProducts();
			});
		}
	}
}

function ProductListCtrl($scope, Product, $timeout, $location, $rootScope, $routeParams, Friend) {
	$rootScope.loading = true;
	$scope.updateProducts = function () {
      $rootScope.products = Product.list({id: $routeParams.userId}, function (){
      	$rootScope.loading = false;
	    $scope.friend = $rootScope.products.user;
      });
	}
	if($routeParams.userId != undefined) {
	    $scope.updateProducts();
	}
	$scope.favorize = function () {
		Friend.favorize({id: $scope.friend.facebookId}, function (data) {
			$scope.friend.favorite = data.favorized;
		});
	}
}

function WelcomeCtrl($scope, $modalInstance) {
	$scope.close = function () {
	    $modalInstance.close('close');
  	};
}

function MyProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope, $modal, $window, ProductService) {
	$scope.warning = false;
	$scope.imageIndex = 0;
	$scope.editModeTitle = false;
	$scope.editModePrice = false;

	if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
		$('#url').focus();
	}


	$scope.productSuggest = function () {
		if($rootScope.suggestions == undefined) {
			$rootScope.suggestions = Product.suggest(function (response) {});
		} else {
			$rootScope.suggestions = undefined;
		}
	};

	$scope.suggestionTest = function (event, suggestion) {
		if(event) {
			event.stopPropagation();
		}

		ProductService.suggestionTest(suggestion, $scope, $rootScope);
		
		if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null && $scope.$root.$$phase != '$apply') {
			$('#url').focus();
		}

		$window.onclick = function (event) {
			var target = $(event.target);
			if(!target) return;
			if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
				$scope.productScrapeCancel();
				if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					$scope.$apply();
				}
			}
		};
	};

	$scope.mobileEmpty = function () {
		if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
			$scope.url = '';
			$scope.productScrapeCancel();
		}
	}
	$scope.welcome = function () {
		var modalInstance = $modal.open({
	      templateUrl: 'welcome.html',
	      controller: WelcomeCtrl
	    });
	};

	$scope.nextImg = function () {
		if($scope.imageIndex < $scope.scrappedProduct.images.length-1) {
			$scope.imageIndex++;
		} else {
			$scope.imageIndex = 0;
		}
		$scope.scrappedProduct.imgThumb = $scope.scrappedProduct.imagesThumb[$scope.imageIndex];  	
	};

	$scope.prevImg = function () {
		if($scope.imageIndex > 0) {
			$scope.imageIndex--;
		} else {
			$scope.imageIndex = $scope.scrappedProduct.images.length-1;
		}
		$scope.scrappedProduct.imgThumb = $scope.scrappedProduct.imagesThumb[$scope.imageIndex];
	};

	$scope.editTitle = function () {
		$scope.editModeTitle = true;
		$scope.oldTitle = $scope.scrappedProduct.title;
	};

	$scope.cancelEditTitle = function () {
		$scope.scrappedProduct.title = $scope.oldTitle;
		$scope.editModeTitle = false;
	};

	$scope.saveTitle = function () {
		if($scope.scrappedProduct.title == '') {
			$scope.scrappedProduct.title = $scope.oldTitle;
		}
		$scope.editModeTitle = false;
	};

	$scope.editPrice = function () {
		$scope.editModePrice = true;
		$scope.oldPrice = $scope.scrappedProduct.price;
	};

	$scope.cancelEditPrice = function () {
		setTimeout(function(){ 
			$scope.$apply(function(){
				$scope.scrappedProduct.price = $scope.oldPrice;
				$scope.editModePrice = false;
			});
		});
	};

	$scope.savePrice = function () {
		if($scope.scrappedProduct.price == '') {
			$scope.scrappedProduct.price = $scope.oldPrice;
		}
		$scope.editModePrice = false;
	};

	$scope.productScrape = function(event, name) {
		ProductService.productScrape($scope, $rootScope, $http);

  		$window.onclick = function (event) {
			var target = $(event.target);
			if(!target) return;
			if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
				$scope.productScrapeCancel();
				$scope.$apply();
			}
		};
	};

  	$scope.productScrapeCancel = function(name) {
  		if($scope.scrapeLoading == false) {
	  		$scope.scrappedProductHide = true;
  		}
	};

  	$scope.productSave = function(scrappedProduct) {
		ProductService.productSave($scope, $rootScope, scrappedProduct, Product, $timeout);
	};

	$scope.countProducts = function () {
		ProductService.countProducts($rootScope);
	};

	$scope.updateProducts = function () {
      $rootScope.loading = true;
      $rootScope.products = Product.listMine(function (response) {
		$scope.countProducts();
	    $rootScope.loading = false;
	    if($rootScope.products.user.displayPopinProfile == true) {
			$scope.welcome();
	    }
      });
	};

    $scope.updateProducts();
}


ProductListCtrl.$inject = ['$scope', 'Product', '$timeout', '$location', '$rootScope', '$routeParams', 'Friend'];
MyProductListCtrl.$inject = ['$scope', '$http', 'Product', '$timeout', '$location', '$rootScope', '$modal', '$window', 'ProductService'];
ProductDetailCtrl.$inject = ['$scope', '$http', '$routeParams', 'Product', '$rootScope', '$modal', '$window', 'ProductService', '$timeout'];
ProductItemCtrl.$inject = ['$scope', 'Product', '$rootScope'];
MyFriendsListCtrl.$inject = ['$scope', '$timeout', 'Friend', '$rootScope', '$modal'];
MyFeedCtrl.$inject = ['$scope', '$timeout', 'Feed', '$rootScope'];
FriendCtrl.$inject = ['$scope', 'Friend', '$rootScope', '$window'];


