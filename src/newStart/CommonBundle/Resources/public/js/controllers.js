var havefyveControllers = angular.module('havefyveControllers', []);



function ProductDetailCtrl($scope, $routeParams) {
	$scope.productId = $routeParams.productId;
}

function ProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope) {

	$scope.autoProductScrape = function () {
		$timeout(function () {
 			$scope.productScrape();
		}, 200);
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
	}

  	$scope.productSave = function(scrappedProduct) {
  	  $scope.productLoading = true;
	  Product.add(scrappedProduct, function(data) {
		$scope.scrappedProduct = null;
		$scope.updateProducts();
		$scope.productLoading = false;
   	  });
	}

	$scope.updateProducts = function () {
      $rootScope.products = Product.query();
	}

    $scope.updateProducts();
}


ProductListCtrl.$inject = ['$scope', '$http', 'Product', '$timeout', '$location', '$rootScope'];
