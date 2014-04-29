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


function ProductDetailCtrl($scope, $routeParams, Product, $rootScope, $modal, $window) {
	$scope.editModeName = false;
	$rootScope.loading = true;

	$scope.productSuggest = function () {
		if($rootScope.suggestions == undefined) {
			$rootScope.suggestions = Product.suggest(function (response) {

			});
			//console.log($rootScope.suggestions);
		} else {
			$rootScope.suggestions = undefined;
		}
	};

	$scope.suggestionTest = function (event, suggestion) {
		$scope.imageLoading = true;
		$scope.scrappedProductHide = false;
		if(event) event.stopPropagation();
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

			$window.onclick = function (event) {
				//$window.onclick = null;
				var target = $(event.target);
				if(!target) return;
				if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
	  			$scope.productScrapeCancel();
	  			$scope.$apply();
				}
		};
		$scope.imageLoading = false;
		if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
			$('#url').focus();
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
		if($scope.scrappedProduct != null && $scope.url == $scope.scrappedProduct.url) {
			$scope.scrappedProductHide = false;
			if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
				$('#url').focus();
			}
		} else {
			$scope.scrappedProductHide = false;
			if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
	 			$('#url').focus();
	 		}
	  		$scope.scrappedProduct = null;
	  		$scope.editModeTitle = false;
			$scope.editModePrice = false;
			$scope.imageLoading = true;
	  		$scope.imageIndex = 0;
	  			
			//console.log($scope);
			if($scope.url != null && $scope.url.substr(0, 3) == 'www') {
				$scope.url = 'http://' + $scope.url;
			}

	  		if($scope.url != undefined) {
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

	  		  		$window.onclick = function (event) {
			  			//$window.onclick = null;
			  			var target = $(event.target);
			  			if(!target) return;
			  			if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
				  			$scope.productScrapeCancel();
				  			$scope.$apply();
			   			}
					};
					if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
						$('#url').focus();
					}
				});
	  		}
  		}
	};

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
	   	  $('.alerts').show();
	   	  $timeout(function () {
 			$scope.warning = null;
		  }, 10000);
  	  }
	};

	$scope.countProducts = function () {
		$rootScope.nbProducts = 0;
		while($rootScope.products.products.length && $rootScope.nbProducts < 5 && $rootScope.products.products[$rootScope.nbProducts]['name'] != undefined) {
			$rootScope.nbProducts++;
		}
		//console.log($rootScope.nbProducts);
	};

	$scope.product = Product.show({id: $routeParams.productId}, function () {
		$rootScope.loading = false;
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

function ProductListCtrl($scope, Product, $timeout, $location, $rootScope, $routeParams) {
	$rootScope.loading = true;
	$scope.updateProducts = function () {
      $rootScope.products = Product.list({id: $routeParams.userId}, function (){
      	$rootScope.loading = false;
      });
	}
	if($routeParams.userId != undefined) {
	    $scope.updateProducts();
	}

}

function WelcomeCtrl($scope, $modalInstance) {
	$scope.close = function () {
	    $modalInstance.close('close');
  	};
}

function MyProductListCtrl($scope, $http, Product, $timeout, $location, $rootScope, $modal, $window) {
	$scope.warning = false;
	$scope.imageIndex = 0;
	$scope.editModeTitle = false;
	$scope.editModePrice = false;

	if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
		$('#url').focus();
	}


	$scope.productSuggest = function () {
		if($rootScope.suggestions == undefined) {
			$rootScope.suggestions = Product.suggest(function (response) {

			});
			//console.log($rootScope.suggestions);
		} else {
			$rootScope.suggestions = undefined;
		}
	};

	$scope.suggestionTest = function (event, suggestion) {
		$scope.imageLoading = true;
		$scope.scrappedProductHide = false;
		if(event) event.stopPropagation();
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

  		$window.onclick = function (event) {
  			//$window.onclick = null;
  			var target = $(event.target);
  			if(!target) return;
  			if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
	  			$scope.productScrapeCancel();
	  			$scope.$apply();
   			}
		};
		$scope.imageLoading = false;
		if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
			$('#url').focus();
		}
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
  		if($scope.scrappedProduct != null && $scope.url == $scope.scrappedProduct.url) {
  			$scope.scrappedProductHide = false;
			if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
				$('#url').focus();
			}
  		} else {
  			$scope.scrappedProductHide = false;
			if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
	 			$('#url').focus();
	 		}
	  		$scope.scrappedProduct = null;
	  		$scope.editModeTitle = false;
			$scope.editModePrice = false;
			$scope.imageLoading = true;
	  		$scope.imageIndex = 0;
	  			
			//console.log($scope);
			if($scope.url != null && $scope.url.substr(0, 3) == 'www') {
				$scope.url = 'http://' + $scope.url;
			}

	  		if($scope.url != undefined) {
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

	  		  		$window.onclick = function (event) {
			  			//$window.onclick = null;
			  			var target = $(event.target);
			  			if(!target) return;
			  			if(target.parents('#complete').length == 0 && target.parents('.input-group.url.input-lg').length == 0) {
				  			$scope.productScrapeCancel();
				  			$scope.$apply();
			   			}
					};
					if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) == null) {
						$('#url').focus();
					}
				});
	  		}
	  	}
	};

  	$scope.productScrapeCancel = function(name) {
  		if($scope.scrapeLoading == false) {
	  		$scope.scrappedProductHide = true;
  		}
	};

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
	   	  $('.alerts').show();
	   	  $timeout(function () {
 			$scope.warning = null;
		  }, 10000);
  	  }
	};

	$scope.countProducts = function () {
		$rootScope.nbProducts = 0;
		while($rootScope.products.products.length && $rootScope.nbProducts < 5 && $rootScope.products.products[$rootScope.nbProducts]['name'] != undefined) {
			$rootScope.nbProducts++;
		}
		//console.log($rootScope.nbProducts);
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


ProductListCtrl.$inject = ['$scope', 'Product', '$timeout', '$location', '$rootScope', '$routeParams'];
MyProductListCtrl.$inject = ['$scope', '$http','Product', '$timeout', '$location', '$rootScope', '$modal', '$window'];
ProductDetailCtrl.$inject = ['$scope', '$routeParams', 'Product', '$rootScope', '$modal', '$window'];
ProductItemCtrl.$inject = ['$scope', 'Product', '$rootScope'];
MyFriendsListCtrl.$inject = ['$scope', '$timeout', 'Friend', '$rootScope', '$modal'];
MyFeedCtrl.$inject = ['$scope', '$timeout', 'Feed', '$rootScope'];
FriendCtrl.$inject = ['$scope', 'Friend', '$rootScope', '$window'];

