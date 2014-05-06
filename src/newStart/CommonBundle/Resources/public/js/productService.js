wlgApp.service('ProductService', function() {

	this.suggestionTest = function (suggestion, $scope, $rootScope) {
			$scope.imageLoading = true;
			$scope.scrappedProductHide = false;
			$scope.url = suggestion.url;
			$scope.editModeTitle = false;
			$scope.editModePrice = false;
			$scope.imageIndex = 0;
			$scope.scrapeLoading = true;
			$('#go_btn .lbl').html('');
			$scope.scrappedProduct = suggestion;

			$scope.scrappedProduct.title = suggestion.name;
			$scope.scrappedProduct.imgThumb = suggestion.imagesThumb[$scope.imageIndex];
			$scope.scrapeLoading = false;
			$('#go_btn .lbl').html('Go !');
			$rootScope.suggestions = undefined;	

			$scope.imageLoading = false;
	};


	this.productScrape = function ($scope, $rootScope, $http) {
		if($scope.scrappedProduct != null && $scope.url == $scope.scrappedProduct.url) {
			$scope.scrappedProductHide = false;
			//if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
			//	$('#url').focus();
			//}
		} else {
			$scope.scrappedProductHide = false;
			//if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
	 		//	$('#url').focus();
	 		//}
	  		$scope.scrappedProduct = null;
	  		$scope.editModeTitle = false;
			$scope.editModePrice = false;
			$scope.imageLoading = true;
	  		$scope.imageIndex = 0;
	  			
			if($scope.url != null && $scope.url.substr(0, 3) == 'www') {
				$scope.url = 'http://' + $scope.url;
			}

	  		if($scope.url != undefined && $scope.url != '') {
		  		$scope.scrapeLoading = true;
		  		$('#go_btn .lbl').html('');
				$http.get('../api/v1/product/scrape?url=' + $scope.url).success(function (data) {
					$scope.scrappedProduct = data;
					if(data.imgNumber > 0) {
						$scope.scrappedProduct.imgThumb = data.imagesThumb[$scope.imageIndex];
					} else {
						$scope.scrappedProduct.imgThumb = '../../bundles/newstartcommon/images/imageNotFound.jpg';
					}
					$scope.scrapeLoading = false;
					$scope.imageLoading = false;
			  		$('#go_btn .lbl').html('Go !');
				});
	  		}
		}
	}

	this.productSave = function ($scope, $rootScope, scrappedProduct, Product, $timeout, showMsg) {
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
			if(showMsg == true) {
				$scope.warning = '' + scrappedProduct.title + ', a été ajouté à votre liste.';
				$('.alerts').show();
				$timeout(function () {
					$scope.warning = null;
				}, 10000);
			}
		} else {
			$scope.scrappedProduct = null;
			$scope.warning = 'Vous avez déjà 5 cadeaux, pour ajouter ' + scrappedProduct.title + ', vous devez supprimer un cadeau.';
			$('.alerts').show();
			$timeout(function () {
				$scope.warning = null;
			}, 10000);
		}
	}

	this.countProducts = function ($rootScope) {
		var nbProducts = 0;
		while($rootScope.products.products.length && nbProducts < 5 && $rootScope.products.products[nbProducts]['name'] != undefined) {
			nbProducts++;
		}
		$rootScope.nbProducts = nbProducts;
	}

});

