var havefyveControllers = angular.module('havefyveControllers', []);



function ProductDetailCtrl($scope, $routeParams) {
	$scope.productId = $routeParams.productId;
}

function ProductListCtrl($scope, Product) {
    $scope.products = Product.query();

  	$scope.productScrape = function(name) {
		$http.get('../api/v1/product/scrape?url=' + $('#url').val()).success(function (data) {
			$scope.scrappedProduct = data;
		});
	}

  	$scope.productScrapeCancel = function(name) {
  		$scope.scrappedProduct = null;
	}

  	$scope.productSave = function(name) {
	/*		$http.get('../api/v1/product/add' + $scope.scrappedProduct).success(function (data) {
			$scope.scrappedProduct = null;
		});
	*/
	    Products.add($scope.scrappedProduct, function() {
	      $timeout(function() { $location.path('/'); });
	    });

	}

}


ProductListCtrl.$inject = ['$scope', 'Product'];
