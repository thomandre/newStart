var havefyveControllers = angular.module('havefyveControllers', []);



function FriendCtrl($scope, Friend, $rootScope) {
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
		$rootScope.friends = Friend.listMine({'id':$scope.name});
    }
    $scope.updateFriends();
}


function ProductDetailCtrl($scope, $routeParams, Product, $rootScope) {
	$scope.product = Product.show({id: $routeParams.productId}, function () {
		$('body').append('<style>body:before{background:url(' + $scope.product.imgUrl + '); background-size: cover;filter: url("#blur-effect");</style>');
	});
	$scope.productId = $routeParams.productId;
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
	  $('body').append('<style>body:before{background:url(' + $('.viewed-profile img').attr('src') + '); background-size: cover;filter: url("#blur-effect");</style>');
	}
	if($routeParams.userId != undefined) {
	    $scope.updateProducts();
	}

}

function MyProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope) {

	$scope.warning = false;
	$scope.imageIndex = 0;

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

  	$scope.productScrape = function(name) {
  		$scope.scrappedProduct = null;
  		$scope.imageIndex = 0;

  		if($scope.url != undefined) {
	  		$scope.scrapeLoading = true;
	  		$('#go_btn .lbl').html('');
			$http.get('../api/v1/product/scrape?url=' + $scope.url).success(function (data) {
				$scope.scrappedProduct = data;
				$http.get('../api/v1/image/scrape?url=' + $scope.url).success(function (data) {
					$scope.scrappedProduct.imgThumb = data.imagesThumb[$scope.imageIndex];
					$scope.scrappedProduct.imagesThumb = data.imagesThumb;
					$scope.scrappedProduct.imgNumber = data.imgNumber;
					$scope.scrappedProduct.images = data.images;
				});
				$scope.scrappedProduct.imgNumber = 1;
		  		$scope.scrappedProduct.imgThumb = '../../bundles/newstartcommon/images/loader.gif';
				$scope.scrapeLoading = false;
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
	  		  $scope.scrappedProduct.img = null;
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

	  $('body').append('<style>body:before{background:url(' + $('.viewed-profile img').attr('src') + '); background-size: cover;filter: url("#blur-effect");</style>');
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