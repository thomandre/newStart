var havefyveControllers = angular.module('havefyveControllers', []);



function ProductDetailCtrl($scope, $routeParams) {
	$scope.productId = $routeParams.productId;
}

function ProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope) {

	var timer = false;
	$scope.warning = false;

	$scope.autoProductScrape = function () {
		if(timer) {
			$timeout.cancel(timer);
		}
		timer = $timeout(function () {
 			$scope.productScrape();
		}, 300);
	}

  	$scope.productScrape = function(name) {
  		$scope.scrapeLoading = true;
		$http.get('../api/v1/product/scrape?url=' + $scope.url).success(function (data) {
			$scope.scrappedProduct = data;
			$scope.scrappedProduct.img = data.images[0];
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
      $rootScope.products = Product.query();
	}

    $scope.updateProducts();
}


ProductListCtrl.$inject = ['$scope', '$http', 'Product', '$timeout', '$location', '$rootScope'];
