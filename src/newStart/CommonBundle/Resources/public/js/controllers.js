var havefyveControllers = angular.module('havefyveControllers', []);



function FriendCtrl($scope, Friend, $rootScope) {
	$('#search').focus();
	$scope.favorize = function () {
		Friend.favorize({id: $scope.friend.facebookId}, function (data) {
			$scope.friend.favorite = data.favorized;
		});	
	}
}

function MyFriendsListCtrl($scope, $timeout, Friend, $rootScope) {
	var timer = false;
    $scope.autoFriendsSearch = function () {
        if(timer) {
            $timeout.cancel(timer);
        }
        timer = $timeout(function () {
			$scope.updateFriends();
        }, 300);
    }

	$scope.updateFriends = function () {
		$rootScope.friends = Friend.listMine({'id':$scope.name}, function (data) {
		});
    }
    $scope.updateFriends();
}


function ProductDetailCtrl($scope, $routeParams, Product, $rootScope) {
	$scope.editModeName = false;
	$scope.product = Product.show({id: $routeParams.productId}, function () {
	});
	$scope.productId = $routeParams.productId;


	$scope.editName = function () {
		$scope.editModeName = true;
	};
	$scope.cancelEditName = function () {
		$scope.editModeName = false;
	};	
	$scope.saveName = function () {
	 	Product.edit({'id':$scope.product.id, 'name':$scope.product.name, 'price':$scope.product.price, 'comment':$scope.product.comment}, function(data) {});
		$scope.editModeName = false;
	};

	$scope.editPrice = function () {
		$scope.editModePrice = true;
	};
	$scope.cancelEditPrice = function () {
		$scope.editModePrice = false;
	};	
	$scope.savePrice = function () {
	 	Product.edit({'id':$scope.product.id, 'name':$scope.product.name, 'price':$scope.product.price, 'comment':$scope.product.comment}, function(data) {});
		$scope.editModePrice = false;
	};

	$scope.editComment = function () {
		$scope.editModeComment = true;
	};
	$scope.cancelEditComment = function () {
		$scope.editModeComment = false;
	};	
	$scope.saveComment = function () {
	 	Product.edit({'id':$scope.product.id, 'name':$scope.product.name, 'price':$scope.product.price, 'comment':$scope.product.comment}, function(data) {});
		$scope.editModeComment = false;
	};
}

function ProductItemCtrl($scope, Product, $rootScope) {
	$scope.delete = function () {
		if(confirm('Voulez-vous supprimer ' + $scope.product.name + ' ?')) {
			Product.remove({id: $scope.product.id}, function (data) {
		      $rootScope.products = data;
	    	  $scope.countProducts();
			});	
		}
	}
}

function ProductListCtrl($scope, Product, $timeout, $location, $rootScope, $routeParams) {
	$scope.updateProducts = function () {
      $rootScope.products = Product.list({id: $routeParams.userId});
	}
	if($routeParams.userId != undefined) {
	    $scope.updateProducts();
	}

}

function MyProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope) {

	$scope.warning = false;
	$scope.imageIndex = 0;
	$scope.editModeTitle = false;
	$scope.editModePrice = false;
	$('#url').focus();

	$scope.nextImg = function () {
		if($scope.imageIndex < $scope.scrappedProduct.images.length-1) {
			$scope.imageIndex++;
		} else {
			$scope.imageIndex = 0;
		}
		$scope.scrappedProduct.imgThumb = $scope.scrappedProduct.imagesThumb[$scope.imageIndex];  	
	}

	$scope.prevImg = function () {
		if($scope.imageIndex > 0) {
			$scope.imageIndex--;
		} else {
			$scope.imageIndex = $scope.scrappedProduct.images.length-1;
		}
		$scope.scrappedProduct.imgThumb = $scope.scrappedProduct.imagesThumb[$scope.imageIndex];
	}

	$scope.editTitle = function () {
		$scope.editModeTitle = true;
		$scope.oldTitle = $scope.scrappedProduct.title;
	};

	$scope.cancelEditTitle = function () {
		$scope.scrappedProduct.title = $scope.oldTitle;
		$scope.editModeTitle = false;
	};

	$scope.saveTitle = function () {
		$scope.editModeTitle = false;
	};

	$scope.editPrice = function () {
		$scope.editModePrice = true;
		$scope.oldPrice = $scope.scrappedProduct.price;
	};

	$scope.cancelEditPrice = function () {
		$scope.scrappedProduct.price = $scope.oldPrice;
		$scope.editModePrice = false;
	};

	$scope.savePrice = function () {
		$scope.editModePrice = false;
	};

  	$scope.productScrape = function(name) {
  		$scope.scrappedProduct = null;
  		$scope.editModeTitle = false;
		$scope.editModePrice = false;
  		$scope.imageIndex = 0;

  		if($scope.url != undefined) {
	  		$scope.scrapeLoading = true;
	  		$('#go_btn .lbl').html('');
			$http.get('../api/v1/product/scrape?url=' + $scope.url).success(function (data) {
				$scope.scrappedProduct = data;
				$http.get('../api/v1/image/scrape?url=' + $scope.url).success(function (data) {
					if(data.imgNumber > 0) {
						$scope.scrappedProduct.imgThumb = data.imagesThumb[$scope.imageIndex];
						$scope.scrappedProduct.imagesThumb = data.imagesThumb;
						$scope.scrappedProduct.imgNumber = data.imgNumber;
						$scope.scrappedProduct.images = data.images;
					} else {
						$scope.scrappedProduct.imgThumb = '../../bundles/newstartcommon/images/imageNotFound.jpg';
					}
					$scope.scrappedProduct.price = data.price;
				});
				$scope.scrappedProduct.imgNumber = 1;
		  		$scope.scrappedProduct.imgThumb = '../../bundles/newstartcommon/images/loader.gif';
				$scope.scrapeLoading = false;
				$scope.scrappedProduct.images = null;
		  		$('#go_btn .lbl').html('Go !');
			});
  		}
	}

  	$scope.productScrapeCancel = function(name) {
  		$scope.scrappedProduct = null;
		$scope.url = null;
  		$scope.scrapeLoading = false;
	}

  	$scope.productSave = function(scrappedProduct) {
  	  if($rootScope.nbProducts < 5) {
	  	  $scope.productLoading = true;
	  	  if($scope.scrappedProduct.images != undefined) {
	  		  $scope.scrappedProduct.img = $scope.scrappedProduct.images[$scope.imageIndex];
	  	  } else {
	  		  $scope.scrappedProduct.img   = null;
	  		  $scope.scrappedProduct.price = null;
	  	  }

		  Product.add(scrappedProduct, function(data) {
			$scope.scrappedProduct = null;
			$scope.url = null;
			$rootScope.products = data;
			$scope.countProducts();
			$scope.productLoading = false;
	   	  });
  	  } else {
   		  $scope.scrappedProduct = null;
	   	  $scope.warning = 'Vous avez déjà 5 cadeaux, pour ajouter ' + scrappedProduct.title + ', vous devez supprimer un cadeau.';
	   	  $timeout(function () {
 			$scope.warning = null;
		  }, 10000);
  	  }
	}

	$scope.countProducts = function () {
		$rootScope.nbProducts = 0;
		while($rootScope.products.length && $rootScope.nbProducts < 5 && $rootScope.products[$rootScope.nbProducts]['name'] != undefined) {
			$rootScope.nbProducts++;
		}
	}

	$scope.updateProducts = function () {
      $rootScope.products = Product.listMine(function (response) {
		$scope.countProducts();
      });

	  //console.log( $('.viewed-profile img').attr('src'));
	}
    $scope.updateProducts();
}


ProductListCtrl.$inject = ['$scope', 'Product', '$timeout', '$location', '$rootScope', '$routeParams'];
MyProductListCtrl.$inject = ['$scope', '$http','Product', '$timeout', '$location', '$rootScope'];
ProductDetailCtrl.$inject = ['$scope', '$routeParams', 'Product', '$rootScope'];
ProductItemCtrl.$inject = ['$scope', 'Product', '$rootScope'];
MyFriendsListCtrl.$inject = ['$scope', '$timeout', 'Friend', '$rootScope'];
FriendCtrl.$inject = ['$scope', 'Friend', '$rootScope'];

