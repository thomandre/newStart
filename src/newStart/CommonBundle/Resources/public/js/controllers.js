var havefyveControllers = angular.module('havefyveControllers', []);



function ProductDetailCtrl($scope, $routeParams, Product, $rootScope) {
	$scope.product = Product.show({id: $routeParams.productId});
	$scope.productId = $routeParams.productId;
}

function ProductItemCtrl($scope, Product, $rootScope) {
	$scope.delete = function () {
		if(confirm('Voulez-vous supprimer ' + $scope.product.name + ' ?')) {
			Product.remove({id: $scope.product.id}, function (data) {
		      $rootScope.products = data;
		      //$scope.product = null;
			});	

		}
	}
}

function ProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope, $routeParams) {
	$scope.updateProducts = function () {
      $rootScope.products = Product.list({id: $routeParams.userId});
	}
	if($routeParams.userId != undefined) {
	    $scope.updateProducts();
	}

}

function MyProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope) {

	var timer = false;
	$scope.warning = false;
	$scope.imageIndex = 0;

	$scope.autoProductScrape = function () {
		if(timer) {
			$timeout.cancel(timer);
		}
		timer = $timeout(function () {
 			$scope.productScrape();
		}, 300);
	}

	$scope.nextImg = function () {
		if($scope.imageIndex < $scope.scrappedProduct.images.length) {
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
			$scope.imageIndex = $scope.scrappedProduct.images.length;
		}
		$scope.scrappedProduct.imgThumb = $scope.scrappedProduct.imagesThumb[$scope.imageIndex];
	}

  	$scope.productScrape = function(name) {
  		$scope.scrapeLoading = true;
		$http.get('../api/v1/product/scrape?url=' + $scope.url).success(function (data) {
			$scope.scrappedProduct = data;
			$scope.scrappedProduct.imgThumb = data.imagesThumb[$scope.imageIndex];
	  		$scope.scrapeLoading = false;
		});
	}

  	$scope.productCancel = function(name) {
  		$scope.scrappedProduct = null;
		$scope.url = null;
	}

  	$scope.productSave = function(scrappedProduct) {
  	  if($rootScope.products.length < 5) {
	  	  $scope.productLoading = true;
  		  $scope.scrappedProduct.img = $scope.scrappedProduct.images[$scope.imageIndex];

		  Product.add(scrappedProduct, function(data) {
			$scope.scrappedProduct = null;
			$scope.url = null;
			$rootScope.products = data;
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

	$scope.updateProducts = function () {
      $rootScope.products = Product.listMine();
	}
    $scope.updateProducts();
}


ProductListCtrl.$inject = ['$scope', '$http', 'Product', '$timeout', '$location', '$rootScope', '$routeParams'];
MyProductListCtrl.$inject = ['$scope', '$http', 'Product', '$timeout', '$location', '$rootScope'];
ProductDetailCtrl.$inject = ['$scope', '$routeParams', 'Product', '$rootScope'];
ProductItemCtrl.$inject = ['$scope', 'Product', '$rootScope'];
