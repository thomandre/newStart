var havefyveControllers = angular.module('havefyveControllers', []);



function ProductDetailCtrl($scope, $routeParams) {
	$scope.productId = $routeParams.productId;
}

function ProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope) {

  	$scope.productScrape = function(name) {

		$http.get('../api/v1/product/scrape?url=' + $('#url').val()).success(function (data) {
			$scope.scrappedProduct = data;
			$scope.scrappedProduct.img = data.images[0];
		});
	}

  	$scope.productCancel = function(name) {
  		$scope.scrappedProduct = null;
	}

  	$scope.productSave = function(scrappedProduct) {
	  Product.add(scrappedProduct, function(data) {
		$scope.scrappedProduct = null;
		$scope.updateProducts();
   	  });
	}

	$scope.updateProducts = function () {
      $rootScope.products = Product.query();
	}

    $scope.updateProducts();
}


ProductListCtrl.$inject = ['$scope', '$http', 'Product', '$timeout', '$location', '$rootScope'];
