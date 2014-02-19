
/* ================================
   Global Elements
   ================================ */
var global = {
	"ismobile": /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase()),
	"istablet": /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()),
	"isandroid": /android|android 3.0/i.test(navigator.userAgent.toLowerCase()),
	"iswindows": /windows/i.test(navigator.userAgent.toLowerCase()),
	"viewport": {
		"height": 0,
		"width": 0,
		"refresh": function () {
			this["height"] = ((global["ismobile"]) ? (((orientation == 0) || (orientation == 180)) ? screen.height : screen.width) : Math.floor($(window).height()));
			this["width"] = ((global["ismobile"]) ? (((orientation == 0) || (orientation == 180)) ? screen.width : screen.height) : Math.floor($(window).width()));
		}
	},
	"regex_email_username": /^[_A-Za-z0-9àáâäãåèéêëìíîïòóôöõøùúûüÿýñçčšžÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÛÜŸÝÑßÇŒÆČŠŽ∂ð]+(([.])?([!#$%&'*+/=?^_`{|}~-][.]?)*([_A-Za-z0-9àáâäãåèéêëìíîïòóôöõøùúûüÿýñçčšžÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÛÜŸÝÑßÇŒÆČŠŽ∂ð]+))*$/i,
	"regex_email_domainname": /(([àáâäãåèéêëìíîïòóôöõøùúûüÿýñçčšžÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÛÜŸÝÑßÇŒÆČŠŽ∂ð\(\)\w!#$%&'*+\-\/=?\^_`{|}~]+\.)([.a-zA-Z]{1,3})+)$/i,
	"passwordRegex": /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/
};

if (typeof commerceSite === 'undefined') {
	commerceSite = true;
}
		
if (global["ismobile"]) {
	if (window.addEventListener) {
		window.addEventListener('orientationchange', function () {
			global["viewport"].refresh();
		}); // Add a live event for orientation change event
	} else {
		window.attachEvent('orientationchange', function () {
			global["viewport"].refresh();
		}); // Add a live event for orientation change event
	}
}

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

if (!Array.prototype.indexOf) {
    Array.method('indexOf',function(elt /*, from*/){
        var len = this.length;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
			from += len;
		}
        for (; from < len; from++) {
            if (this.hasOwnProperty(from) && this[from] === elt) {
				return from;
			}
        }
        return -1;
    });
}

Array.method('contains',function(value) {
	return this.indexOf(value) > -1;
});

/*
    setting this for Brighttag calls
    TODO: Sudhir is checking with BT to see if this can be removed, since no one knows what it is, or supposed to contain.
*/
var completeResponse = "";

//Add a language class to the document for language display differences.
$(document).ready(function () {
	var parser = document.createElement('a');
	parser.href = window.location;
	var pathstring = parser.pathname;
	if (pathstring[0] != '/' || pathstring[3] != '/') {
		$('html').addClass(readCookie('lang'));
	} else {
		$('html').addClass(pathstring[4] + pathstring[5]);
	}
});


/* =================================================
   Add the globals as classes to the documentElement
   ================================================= */

for (var key in global) {
	if (global[key] === true) {
		document.documentElement.classList += ' ' + key.replace(/is/i, '')
	}
}

/* ================================
   Modernizr - Additional tests for tablet.
   ================================ */

Modernizr.addTest('ipad', function () {
	return !!navigator.userAgent.match(/iPad/i);
});
Modernizr.addTest('android', function () {
	return !!navigator.userAgent.match(/android/i);
});


Modernizr.addTest('windows', function () {
	return !!navigator.userAgent.match(/windows/i);
});

/* ================================
   Global Functions and Options
   ================================ */

//Get URL parameters
function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || '';
}

//Global - Lightbox
window.fancyboxOptions = {
	height: 'auto',
	minWidth: 420,
	autoSize: false,
	autoCenter: false,
	scrolling: 'no',
	titleShow: false,
	closeEffect: 'elastic',
	helpers: {
		title: null
	}
};

/* Elevator adjustable */
// Needed to move this outside of DOM ready so it could be called from curve-fit-tools.js
function adjustElevatorTopRest() {
	var elevatorFloorsArr = $('[data-floor]');

	$('body').removeClass('top scrolling bottom').addClass('top');
	$('.top .elevator-control').css({
		'top': ($(elevatorFloorsArr[0]).position().top - window.topRestPos)
	});
}

/* ================================
   Runway : The DOM is ready
   ================================ */

$(function () {
	//========================================================
	// Global
	//========================================================

	//Fixing viewport resolution on Galaxy tablet
	if (/android/i.test(navigator.userAgent.toLowerCase())) {
		$('meta[name=viewport]').attr('content', 'width=1280');
	}

	$('body.collection-landing .flexslider').flexslider({
		animation: 'slide',
		slideshowSpeed: 10000,
		animationLoop: true,
		slideshow: false,
		pausePlay: true,
		directionNav: true,
		controlNav: true,
		useCSS: false
	});

	$('body.collection-detail .flexslider').flexslider({
		animation: 'slide',
		slideshowSpeed: 10000,
		animationLoop: true,
		slideshow: false,
		pausePlay: true,
		directionNav: true,
		controlNav: true,
		useCSS: false
	});

	$('body.featured-collection .flexslider').flexslider({
		animation: 'slide',
		slideshowSpeed: 10000,
		animationLoop: true,
		slideshow: false,
		pausePlay: true,
		directionNav: true,
		controlNav: true,
		useCSS: false
	});

	//Global - Tooltips
	$('.tooltip span').css({
		"display": "none"
	});

	if (global.ismobile || global.istablet) {

		$('.tooltip').live('click', function (e) {
			e.preventDefault();

			$('.tooltip').children('.details, .btm-arrow').fadeOut(function () {
				$('.tooltip').removeClass('active');
			});


			$(this).children('.details, .btm-arrow').fadeIn(function () {
				$(this).addClass('active');
			});

		});

		$(document).live('click touchstart', function (e) //trap ALL click and touchstart events, then we decide if we need to use them
		{
			if (!$(e.target).hasClass('tooltip')) {
				$('.tooltip').children('.details, .btm-arrow').fadeOut();
			}
		});

	} else {
		var is_IE7 = $.browser.msie && $.browser.version === '7.0';

		$('.tooltip').live('mouseenter', function (e) {
			//Hide all menu
			$('.tooltip').children('.details, .btm-arrow').stop(true, true).hide(function () {
				$('.tooltip').removeClass('active');
			});

			$(this).children('.details, .btm-arrow').fadeIn();
			$(this).addClass('active');

			if (is_IE7) {
				$(this).closest('li').css({
					position: 'relative',
					zIndex: '2000'
				})
			}

		}).live('mouseout', function () {
			$(this).children('.details, .btm-arrow').fadeOut(function () {
				$('.tooltip').removeClass('active');
			});


			if (is_IE7) {
				$(this).closest('li').css('z-index', '10')
			}

		}).live('click', function (e) {
			e.preventDefault();
		});
	}

	$('.link-lightbox').each(function () {
		var opts = $.extend({}, fancyboxOptions, {
			'width': 560,
			'height': 250,
			'scrolling': 'auto',
			'autoScale'     	: false,
        	'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
		});

		$(this).fancybox(opts);
	});

	$('.link-lightbox-video').each(function () {
		var opts = $.extend({}, fancyboxOptions, {
			'width': 660,
			'height': 370,
			'scrolling': 'auto',
			'autoScale'     	: false,
        	'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
		});

		$(this).fancybox(opts);
	});

	// modal for Linking Facebook acct with Hybris acct
	var linkAccountElement = '.link-lightbox[href="' + urlPrefix + '/social/linkaccount"]';
	$(linkAccountElement).each(function (e) {
		$(this).fancybox({
			width: 700,
			height: 600,
			hideOnOverlayClick: false,
			showCloseButton: false,
			type: 'iframe'
		});
	});

	if ($('a#link-facebook-acct').length > 0) {
		$(linkAccountElement).trigger('click');
	}

	// different initialization for email friend modal
	$('a.link-lightbox[href="#email-friend"]').each(function () {
		var opts = $.extend({}, fancyboxOptions, {
			width: 560
		});
		$(this).fancybox(opts);
	});

	$('.link-lightbox-scroll').each(function () {
		$(this).fancybox({
			width: 700,
			height: 600,
			autoSize: false,
			autoCenter: true,
			scrolling: 'auto',
			titleShow: false,
			title: null,
			centerOnScroll: true,
			margin: 0,
			padding: 30,
			type: 'iframe'
		});
	});

	$('.link-lightbox-scroll[href="login/pw/request"]').each(function () {
		$(this).fancybox({
			scrolling: 'no'
		});
	});

	$('#link-forgotpwd.link-lightbox-scroll').each(function () {
		$(this).fancybox({
			width: 700,
			height: 600,
			autoSize: false,
			autoCenter: true,
			scrolling: 'no',
			titleShow: false,
			title: null,
			centerOnScroll: true
		});
	});

	$('input, textarea').placeholder();

	// custom close button for fancy box
	$('.btn-close').click(function (e) {
		e.preventDefault();
		parent.$.fancybox.close();
	});

	// ANY INPUT OR TEXTAREA THAT HAS data-default will have the value loaded as a default.
	var loadFormDefaults = function () { // Loads in default values
		$('.form-validation input, .form-validation textarea').each(function () {
			if ($(this).data('default')) {
				$(this).val($(this).data('default'));
			}
		});
		/*$('#email-friend #subject').val($(this).data('default')); */
	}

	loadFormDefaults();

	// Smooth scrolling for hash links
	// Snippet from: http://snipplr.com/view/12510/
	$('a[href*=#]').not('.link-lightbox').click(function () {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var $target = $(this.hash);

			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

			if ($target.length) {

				var targetOffset = $target.offset().top;

				$('html,body').animate({
					scrollTop: targetOffset
				}, 500);

				return false;
			}
		}
	});

	//========================================================
	// Navigation
	//========================================================

	//Header - Active Nav Sub Menu
	$('#main-nav ul').navDynamic();
	$('#global-nav ul').navDynamic();
	$('.simple ul').navDynamic();

	//Header sign in/out states (NOTE: FOR Testing purposes)
	$('a#global-myaccount-cta').on('click', function (e) {
		$('#global-nav').addClass('logged-in');
	});
	$('a#global-myaccount-signout').on('click', function (e) {
		$('#global-nav').removeClass('logged-in');
	});

	//Header brand selection (NOTE: FOR Testing purposes)
	$('#global-nav ul:first a').on('click', function () {
		$('#global-nav ul:first a').removeClass('selected');
		$(this).addClass('selected');
	});

	//Checks My Bag Items and add/remove menu functionality
	var checkMyBagItems = function () {
		var numItems = $('.global-bag span').html();
		if (numItems) {
			if (numItems.substring(1, numItems.length - 1) == '0') {
				//Take out menu functionality
				$('.global-bag').unbind();
			} else {
				$('.global-bag').unbind();
				//Call Menu again
				$('#global-nav ul').navDynamic({
					ignore: $('#global-lang-cta')
				});
			}
		}
	}

	// remove click functionality to keep it from scrolling to top.
	$('.global-bag').live('click', function (e) {
		var numItems = $('.global-bag span').html();
		if (numItems) {
			if (numItems.substring(1, numItems.length - 1) == '0') {
				e.preventDefault();
			}
		}
	});

	//Checks bag items on doc load
	checkMyBagItems();

	//Header - My bag close btn
	$('.nav-close').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.sub-nav').fadeOut();
	});

	//Header - Promo Rotation
	if ($('.nav-notice').find('li').length > 1) {
 		$('.nav-notice').customGallery({
			tag: 'li'
		});
	 } else {
	 	$('.nav-notice').find('li').css({'display':'block'})
	 }

	//Header - Instantiate Search autocomplete

	//Get Search strings
	var getSearchJSON = function () {
		$.ajax({
			dataType: 'json',
			url: urlPrefix + '/includes/search-results.json',
			success: function (data) {
				if (!$('body').is('.sitemap, .checkout, .thank-you')) {
					$("#input-search").autocomplete({
						source: data.pages,
						minLength: 2,
						position: {
							offset: "-2 2"
						}
					});
				}
			}
		});
	}
	//getSearchJSON();

	//Trigger form submit whenever a autocomplete item is clicked
	$('.ui-autocomplete li a').live('click', function () {
		$('#global-nav form').trigger('submit');
	});

	/*
    //Second method of retreiving list via backend
    //Only getting the list of results based on letters typed in
    $( "#input-search" ).autocomplete({
        source: availableTags

        //This method requires filtering on the backend based on the passed in request.term
        source: function( request, response ) {
                $.ajax({
                    dataType: 'json',
                    url: '../../includes/search-results.json',
                    data: {
                        maxRows: 12,
                        name_startsWith: request.term
                    },
                    success: function(data) {
                        response( $.map(data.pages, function(item) {
                            return item;
                        }) );
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
        }
    });
    */

	//Header - add searching class if search input is focused - works on header and search fields with .search-form-input and .search-cancel classes
	$("#input-search, .search-form-input").focus(function () {
		var $this = $(this);
		$this.parents('form').addClass('searching');
		setTimeout(function () {
			if ($this.val().length > 0) {
				$this.siblings('#global-search-cancel, .search-cancel').css('display', 'block');
			}
		}, 200);
	}).blur(function () {
		var $this = $(this);
		$this.parents('form').removeClass('searching');
		setTimeout(function () {
			$this.siblings('#global-search-cancel, .search-cancel').css('display', 'none');
		}, 200);
	});

	//Header - add "x" anchor is there is chars typed in search input - works on header and search fields with .search-form-input and .search-cancel classes
	$("#input-search, .search-form-input").keyup(function (e) {
		if ($(this).val().length > 0) {
			$(this).siblings('#global-search-cancel, .search-cancel').css('display', 'block');
		} else {
			$(this).siblings('#global-search-cancel, .search-cancel').css('display', 'none');
		}
	});

	//Header - Clear search input when "x" clicked - works on header and search fields with .search-form-input and .search-cancel classes
	$('#global-search-cancel, .search-cancel').on('click', function (e) {
		e.preventDefault();
		$(this).siblings('#input-search, .search-form-input').val('');
		$(this).css('display', 'none');
		$(this).siblings('#input-search, .search-form-input').focus();
	});

	//Email Validation Function
	var submitSubscribe = function (email, form) {
		var emailExists = false;
		var emailList = ['tester@test.com'];
		var emailTokenized = email.split('@'),
			emailUserName = emailTokenized[0],
			emailDomainName = emailTokenized[1];

		// Reset things
		$('.email-msg').hide();
		$('footer label[for="links-privacy-terms"]').removeClass('error');

		if (!validateAgeTerms()) { // check if the checkbox is clicked
			$('footer #age-check').fadeIn();
			$('footer label[for="links-privacy-terms"]').addClass('error');
			return;
		}

		if (global.regex_email_username.test(emailUserName) && global.regex_email_domainname.test(emailDomainName) && emailUserName.length <= 64) {
			//Try submitting and get response
			$.ajax({
				url: form.attr('action'),
				type: 'POST',
				data: form.serialize(),
				dataType: 'json',
				success: function (data) {
					if (data.success) {
						$(window).trigger("subscribeToEmail", [email, completeResponse]);
						$('#input-email, #link-email').hide();
						$('#email-success').html(data.message);
						$('#email-success').fadeIn();
					} else {
						$('#input-email, #link-email').hide();
						$('#email-fail').html(data.message);
						$('#email-fail').fadeIn();
					}
					// Brighttag call
					// console.log('Brighttag: subscribeToEmail');
				},
				error: function () {
					$('#email-fail').fadeIn();
				}
			});
		} else {
			$('#email-fail').fadeIn();
		}
	}

	// validates footer age gate
	var validateAgeTerms = function () {
		if ($('#links-privacy-terms').length === 0) {
			/* Not present */
			return true;
		}
		if ($('#links-privacy-terms').is(':checked')) {
			return true;
		} else {
			return false;
		}
	}
	//Footer - Subscribe email
	$('#input-email').keydown(function (e) {
		//When user hits enter
		if (e.which == 13) {
			e.preventDefault();
			submitSubscribe($(this).val(), $(this).closest('form'));
		}
	});
	$('#link-email').on('click', function (e) {
		e.preventDefault();
		submitSubscribe($('#input-email').val(), $(this).closest('form'));
	});

	//========================================================
	// Shopping Bag
	//========================================================

	/*$('#promo-btn').on('click', function(e) {
        e.preventDefault();
        var code= $('#promo-input').val();

        //Hide all messages (if any)
        $('.promo-msg').hide();

        if (code.length <= 0) {
            $('#promo-error').fadeIn();
        } else if (code == '12345') {
            $('#promo-notqualify').fadeIn();
        } else {
            $('#promo-success').fadeIn();
        }
    });*/

	if ($('body.shopping-bag').length > 0) {
		$('#promo-btn').on('click', function (e) {
			var form = $('#promo-input').closest('form');
			$(form).submit();
			/*
            $.ajax({
                type: 'GET',
                url: form.attr('action'),
                data: form.serialize(),
                dataType: 'json',
                success: function (data) {
                    $('#promo-success').fadeOut();
                    $('#promo-error').fadeOut();
                    $('#promo-notqualify').fadeOut();
                    if (data.message == 'promo-success') {
                        $('#promo-success').fadeIn();
                    } else if (data.message == 'promo-error') {
                        $('#promo-error').fadeIn();
                    } else if (data.message == 'promo-notqualify') {
                        $('#promo-notqualify').fadeIn();
                    }
                }
            });
*/
		})

		// Cart - enter a promo code
		$('#promo-input').keydown(function (e) {
			// When user hits enter
			if (e.which === 13) {
				e.preventDefault();
				$('#promo-btn').trigger('click');
			}
		});
	}

	//========================================================
	// Thank You
	//========================================================
	//Remove background from checkout/thankyou pages
	/* TODO: This is a bad solution - RSO */
	if ($('body').is('.checkout, #thank-you')) {
		$('html').css('background', 'none');
	}

	//Temporary Workaround for the print issue (Opening up a second print window on cancel)
	/* TODO: Review this - RSO */
	$("#thank-you #right-col .btn-dbbdr").attr('onClick', 'window.print(); return false;');

	//========================================================
	// My Account
	//========================================================
	// disable submission of form to stop refresh until actions and methods added
	$('#myaccount form').submit(function (event) {
		event.preventDefault();
	});

	//========================================================
	// Search
	//========================================================
	if ($('body').is('.search-results')) {

		//Add search term to search input (This is only for QA testing purposes)
		var searchTerm = getURLParameter('search');
		if (searchTerm.length > 0) {
			$('#input-search').siblings('label').removeClass('empty');
			$('#input-search').val(searchTerm);
			$('header p').text('"' + searchTerm + '"');
			$('#found-another-container p:first span').text('"' + searchTerm + '"');
		}
	}

	// TABLET HOVER FUNCTIONS
	if (global.istablet) {
		$('.prod-list ul li').live('touchstart', function () {
			$(this).parent().find('li').removeClass('hover');
			$(this).addClass('hover');
		});
	} else {
		// REGULAR HOVER FUNCTIONS
		$('.prod-list ul li').live({
			mouseenter: function () {
				$(this).addClass('hover');
			},
			mouseleave: function () {
				$(this).removeClass('hover');
			}
		});
	}

	// TABLET HOVER FUNCTIONS
	if (global.istablet) {
		$('.prod-list li.badge-item').live('touchstart', function (evt) {
			if ($(this).hasClass('selected')) {
				$('.prod-list ul li').removeClass('selected');
			} else {
				$('.prod-list ul li').removeClass('selected');
				$(this).addClass('selected');
			}
			return true;
		});
	} else {
		// REGULAR HOVER FUNCTIONS
		$('.prod-list ul li').live({
			mouseenter: function (evt) {
				$(this).addClass('selected');
			},
			mouseleave: function () {
				$(this).removeClass('selected');
			}
		});

	}

	//========================================================
	// Contact Us
	//========================================================
	$('.contact-us-template select.dropdown').dropkick();

	//========================================================
	// About - Size Charts
	//========================================================

	//Instantiate the selectbox
	$('.size-chart .dropdown').dropkick({
		change: function (value, label) {
			//Determine the type selected
			var url = value;

			//Fetch content
			$.ajax(url, {
				cache: false,
				success: function (data) {
					$('.garment-container').html($(data));

					//Check unit selection (only show the one selected)
					sizeChart.radioSelected = $('input[name=unit]:checked', '.size-chart form').val();
					sizeChart.checkUnits();

					//Reset selectivzr (fix for IE 8/7)
					selectivzrRedraw();
				}
			});
		}
	});

	//Add highlighting to table cells
	$('.size-chart table td').live('mouseover mouseout touchstart', function (e) {
		if ((e.type == 'mouseover') || (e.type == 'mouseover')) {
			$(this).addClass("hover");
			$(this).parent().addClass("hover");
			$(this).parents("table").find("colgroup").eq($(this).index()).addClass("hover");
			$(this).parents("table").find("th").eq($(this).index()).addClass("hover");
		} else {
			$(this).removeClass("hover");
			$(this).parent().removeClass("hover");
			$(this).parents("table").find("colgroup").eq($(this).index()).removeClass("hover");
			$(this).parents("table").find("th").eq($(this).index()).removeClass("hover");
		}
	});

	//Set default unit selected
	$('.centimeters-radio').attr('checked', 'checked');
	$('.inches-container').hide();

	var sizeChart = {
		radioSelected: $('input[name=unit]:checked', '.size-chart form').val(),
		checkUnits: function (product) {
			if (sizeChart.radioSelected == 'centimeters') {
				product.find('.inches-container').hide();
				product.find('.centimeters-container').show();
			} else {
				product.find('.centimeters-container').hide();
				product.find('.inches-container').show();
			}
		}
	}

	//Handle unit selection
	$('.size-chart form label').live("click", function () {
		sizeChart.radioSelected = $(this).prev('input[type="radio"]').attr("value");
		sizeChart.checkUnits($(this).parents('.garment-container'));
	});

	//Remove background image for pop-ups
	if ($('body').is('.pop-up-template')) {
		$('html').css('background', 'none');
		$('html').css('overflow', 'scroll');
	}

	var openPopupWindow = function (url, h, w) {
		var h = h || 600,
			w = w || 660;
		if (getURLParameter("lang") == "de") {
			url = url + "?lang=de";
		}
		windowHandle = window.open(url, '', 'status=1, width=' + w + ', height=' + h + ', resizable=1, scrollbars=yes');
		windowHandle.focus();
		selectivzrRedraw();
	}

	/* 
	 * Any link which should open in a popup window. 
	 * Add to regular link (A) tag: target="_blank" data-popup="600,660"
	 * Where value format is H,W. Target attr is for graceful degradation.
	 * 
	 */
	$('[data-popup]').live('click', function (e) {
		e.preventDefault();
		var url = $(this).attr('href'),
			size = $(this).attr('data-popup').split(',');
		openPopupWindow(url, size[0], size[1]);
	});
	
	


	//INFINITE SCROLL - ONLY FOR SUB-CATEGORY PAGE
	function getNextResults(callback) {
		var nao = resultsBox.find('> li').length;
		var url = $('#sort-select option:selected').val();

		if (allowInfiniteLoad) {
			allowInfiniteLoad = false; // Prevent double loading
			$.ajax({
				dataType: 'html',
				url: urlPrefix + '/includes/searchResultsScroll/?nao=' + nao + '&url=' + encodeURIComponent(url),
				async: false,
				success: function (data) {
					$('#new-fragment').empty().append(data);
					allowInfiniteLoad = true;
				}
			});
		}

		if (typeof callback !== 'undefined') {
			callback();
		}
	}

	/** Begin load infinite scroll **/
	var $window = $(window),
		facetBox = $('#facets-products'),
		resultsBox = $('#container_results'),
		loadBox = $('.load-box-inner'),
		footContainer = $('.footer-container'),
		allowInfiniteLoad = true,
		checkLoadMore = function () {
			if ($window.scrollTop() + 1500 > footContainer.position().top) {
				loadInfiniteScroll();
			}
		}

		// if there's a facets box
	if (facetBox.length) {
		// bind the window events
		$window.on('scroll.infiniteScroll', checkLoadMore)

		// the actual loader
		function loadInfiniteScroll() {

			var page_count = 0,
				show_count = resultsBox.find('> li').length;

			facets.resultCount = $(".facets-wrapper .facets span.productCount").html();

			// disable the window listener
			$window.off('.infiniteScroll');

			// check if there are products left to reveal
			if (show_count < facets.resultCount) {

				// show the loader
				loadBox.clone().appendTo(resultsBox);

				// timeout to mimic loading
				setTimeout(function () {

					// increment the page count
					page_count += 1;

					// rebuild the query with the new page count
					facets.rebuildQuery(page_count);

					// get the results
					getNextResults(function () {

						// add the new results
						resultsBox.append($('#new-fragment #replacement-products').html());

						//Show/Hide image (so that images show up properly)
						$('#facets-products img').load(function () {
							$('#facets-products img').hide().show();
						});

						// re-bind the window events
						$window.on('scroll.infiniteScroll', checkLoadMore);

					})

					// remove the loader
					resultsBox.find('.load-box-inner').remove();

				}, 500);

			}

		}

	}


	//========================================================
	// Facets
	//========================================================

	var facets = {
		//array of users selection
		query: "", // STORING THE QUERY
		resultCount: 0, //STORE NUMBER OF TOTAL PRODUCTS TO DISPLAY
		reboot: function () { // PACAKGE OF FUNCTIONS TO LOAD WHENEVER THE FACET MENU LOADS OR IS REPLACED
			facets.checkActive();
			facets.clickLoad();
			facets.checkHeight();
			if (global.istablet) {
				facets.touchLoad();
			} else {
				facets.hoverLoad();
			}
		},

		// LOADS TABLET INTERACTIONS ************
		touchLoad: function () {

			// add listener for tablet scroll
			document.addEventListener("touchmove", scrollStart, false);

			/// close facets on scroll
			function scrollStart() {
				facets.closeAllFacets(function () {});
			}

			// Facet link behavior for tablet
			$('.facet-menu .facet-links').live('touchstart click',

			function () {
				var clicked = $(this);
				// CLOSE ANY OPEN ONES
				facets.closeAllFacets(function () {
					// OPEN THE ONE THAT WAS TAPPED, add the active class, and append a touchSensor - the touch Sensor is so we can detect touches outside of the facet menu. this only exists when a facet menu is open
					clicked.parent().addClass('active').parent().append("<div class='touchSensor'></div>");
					clicked.parent().children('ul').children('li').each(function () {
						$(this).slideDown();

					});
				});
				return false;
			});
			// Touching facet variables    
			$('.facet-menu ul li label').live('touchstart click', function () {
				if (!$(this).parents('.facet-menu').hasClass('active') && global.istablet) {
					$(this).parent().slideUp().removeClass('selected');
					$(this).find('input').attr('checked', false);
				}
			});
		},


		// CLOSES ALL FACETS - strictly for tabelets ************
		closeAllFacets: function (callback) {
			$('.touchSensor').remove();
			//if there is a facet open.
			if ($('.facet-menu.active').length != 0) {
				// determine how many unchecked list items there are in the open facet.
				var total = $('.facet-menu.active').find('input[type="checkbox"]').not(':checked').length;
				var count = 0;
				// console.log(total);
				// close the one that is open
				$('.facet-menu.active').find('li').each(function () {
					// if the facet has a checkbox that is checked, don't do anything with it (leave it open)
					if ($(this).find('input[type="checkbox"]').is(':checked')) {

					} else {
						// collapse the ones that are open.
						$(this).parents('.facet-menu').removeClass('active');
						$(this).slideUp(function () {
							count++;
							if (total == count) { // this ensures the callback is only called once 
								if (facets.clicked == true) {
									//facets.updateFacetMenu(); 
									facets.testCase();
									facets.clicked = false;
								}
								facets.checkHeight();
								callback();
							}
						});
					}
				});
			} else {
				callback();
			}
		},


		// CLICK INTERACTIONS ****************
		clickLoad: function () {
			//Remove event handlers in case it's already there
			$(document).off('click', '.facet-menu ul li label');

			$('.facet-menu ul li label').live('click', function (evt) {
				evt.preventDefault();
				var url = $(this).attr("data-url"),
					value = $(this).text(),
					type = $(this).parents('.facet-menu').attr('data-type');
				
				if (!url) return;
				
				/* Set cookie to persist fact selection */
				createCookie(type, value, 0); //create the waist value cookie
				
				window.location  = url; /* Do not use replace() as it will not allow proper history for back button */
			});
		},


		// LOADS THE HOVER BEHAVIORS for non-tablet *********
		hoverLoad: function () {
			$('.facet-menu .facet-links').hoverIntent(function () {
				$(this).parent().addClass('active');
				$(this).parent().children('ul').children('li').each(function () {
					$(this).slideDown();
				});
			},

			function () {
				// hover out is handled sperately below         
			});


			$('.facet-menu').hoverIntent(function () {
				// hover on is handled seperately above
			}, function () {
				// determine number of items UNCHECKED in the list.
				var total = $(this).children('ul').find('input').not(':checked').length;
				var count = 0;
				$(this).children('ul').children('li').each(function () {
					if ($(this).find('input[type="checkbox"]').is(':checked')) {
						// do nothing
					} else {
						$(this).slideUp(function () {
							count++;
							// the count + total comparison is so the callback only fires once all list items have slideUp
							if (count == total) {
								// REMove active class AFTER animation is done.
								$(this).parents('.facet-menu').removeClass('active');
								if (facets.clicked == true) {
									//facets.updateFacetMenu(); 
									facets.testCase();
									facets.checkHeight();
									facets.clicked = false;
								}
							}
						});
					}
				});
			});

			//Prevent page from going to the top
			$('.facet-menu .facet-links').live('click', function (e) {
				e.preventDefault();
			});

		},

		// CHECKS WHICH FACETS ARE ACTIVE - adds class accordingly ********
		checkActive: function () {
			$('.facet-menu ul li input[type="checkbox"]').each(function () {
				if ($(this).attr('checked') == 'checked') {
					$(this).parent().parent().addClass('selected');
					$(this).parent().parent().show();
					var allButton = $(this).parents('.facet-menu ul').find('input[type="radio"]');
					$(allButton).removeAttr('checked').parent().parent().addClass('inactive');
				}
			})
		},

		// BUILDS QUERY BASED ON CHECKED CHECKBOXES *************
		rebuildQuery: function (page, callback) {

			// console.log('BUILDING QUERY: ');
			facets.query = '';
			// parse through facet menu to determine which facets have active variables and load to an array
			$('.facets>ul>li').each(function () {
				var activeFacet = "";
				var activeFacetVariables = [];
				if ($(this).find('input[type="checkbox"]').is(':checked')) {
					activeFacet = $(this).find('.facet-menu').attr('id');
					$(this).find('input[type="checkbox"]').each(function () {
						if ($(this).is(':checked')) {
							activeFacetVariables.push(($(this).parent().text().toLowerCase().replace(/ /g, '-').replace("'", "")));
						}
					})
				}


				if (activeFacet) {
					facets.query += "&facets=" + activeFacet + "_" + activeFacetVariables + "_";
				}


			});
			// This is the sort indicator
			facets.query += '&sort=' + $('#sort-select').val().replace(/ /g, '-').toLowerCase();

			// This is the page indicator
			if (page) {
				facets.query += "&page=" + page;
			} else {
				facets.query += "&page=0";
			}
			// console.log(facets.query);                                         



		},
		// this is a test function to just show the client what it might look like with proudct swaping on click.
		testLoadProducts: function () {
			$('#facets-products .load-box').show(0).delay(100); //was 1500
			$('#facets-products ul').empty()
			facets.loadHtmlProducts(function () {
				$('#facets-products .load-box').hide(0);
			});
		},

		loadHtmlProducts: function (callback) {
			facets.resultCount = $(".facets-wrapper .facets span.productCount").html();
			facets.updateProductCount(facets.resultCount); //trips the counter at the top to count TO the new number of products

			$('#facets-products ul').empty().append($('#new-fragment #replacement-products').html());
			$('#facets-products img').hide().show();

			//Show/Hide image (So that image shows up properly)
			$('#facets-products img').load(function () {
				$('#facets-products img').hide().show();
			});

			if (typeof callback !== 'undefined') {
				callback();
			}
		},
		updateProductCount: function (num) {
			$('.facets .productCount').countTo({
				from: parseInt($('.facets .productCount').text()),
				to: num
			}); //trips the counter at the top to count TO the new number of products       
		},

		// TESTCASE OF MENU REPLACEMENT **********
		updateFacetMenu: function () {
			var replacement = $('#new-fragment #replacement-facets').html();
			$('.facets ul').replaceWith(replacement);
			facets.reboot();
		},

		// THIS replaces the facets with the default state version **********
		resetFacets: function () {
			$('.facets #btn-reset').click(function () {

				var url = $(this).attr("data-url");
				window.location.replace(url);

			});
		},

		// This replaces the facets with the test case. **************
		testCase: function () {
			$('.facets>ul>li input[type="checkbox"]').each(function () {
				var clicked = $(this).parent().text().toLowerCase();
				if (clicked == 'skinny' && $(this).is(':checked')) {
					facets.updateFacetMenu();
				}
			});
		},

		//clear facet/query - this is an unneeded function - just for testing - ***********
		clearQuery: function () {
			// console.log('clearQuery');
		},

		// Automatically adjusts the margin below the facet menu when several facet variables are selected increasing the height of the facet menu.
		checkHeight: function () {
			var facetSectionHeight = $('.facets-wrapper').height()
				facetMenuHeight = 0,
				allowedSpacing = 100;
			
			$('.facets .facet-menu ul').each(function() {
				facetMenuHeight = facetMenuHeight > $(this).height() ? facetMenuHeight : $(this).height();
			});
		   
			if (facetMenuHeight > (facetSectionHeight - allowedSpacing)) {
				var newHeight = facetSectionHeight + (facetMenuHeight - (facetSectionHeight - allowedSpacing));
				$('.facets-wrapper').animate({
					height: newHeight
				});
			} else {
				$('.facets-wrapper').animate({
					height: facetMenuHeight + allowedSpacing
				});
			}
		},
		clicked: false

	}; // END facets

	facets.reboot();
	facets.resetFacets();


	// CLose facets when the touchsensor is clicked.    
	$('.touchSensor').live('click touchstart', function () {
		facets.closeAllFacets(function () {});
	});
	$('#sort-select').dropkick({
		change: function () {
			//facets.rebuildQuery(0,function() {
			//  facets.testLoadProducts();
			//  loadInfiniteScroll();
			//});
			var url = $(this).val();
			window.location.replace(url);
		}
	});



	//========================================================
	// Product Listing
	//========================================================

	// Peek-a-boo control for Listings
	$('a.more, a.less').on('click', function (event) {

		event.preventDefault();

		var parentElement = $(this).parent(),
			sectionSecondary = $(this).parent().children('.secondary') || '';

		if (sectionSecondary.length) {

			if (parentElement.hasClass('peek')) {
				sectionSecondary.slideDown();
			} else {
				sectionSecondary.slideUp();
			}
		}

		//Shopping Bag specific animation
		if ($(this).parents('.shopping-bag, .search-results-template').length) {
			var section = $(this).parent();
			var container = section.children('ul');
			if (section.hasClass('peek')) {
				//Hack to find the container's height
				var origHeight = container.height();
				container.css('visibility', 'hidden');
				container.css('height', 'auto');
				var newHeight = container.height();
				container.css('height', origHeight);
				container.css('visibility', 'visible');
				container.attr('data-height', origHeight);
				container.animate({
					'height': newHeight
				}, function () {
					$(this).css('height', 'auto');
				});
			} else {
				container.animate({
					'height': container.attr('data-height')
				});

				//Scroll page to top of section
				/*$('html, body').animate({
                    scrollTop: $(section).offset().top
                });*/

			}
		}

		parentElement.toggleClass('peek');

		this.innerHTML = $(this).attr("data-" + ((parentElement.hasClass('peek')) ? "more" : "less"));
	});


	//========================================================
	// Product Hover
	//========================================================
	$('.product-images .stage').productHover();


	//========================================================
	// Page elevator : Scroll+Boundary Aware JumpNav|Menu .IO
	//========================================================
	var elevatorThreshold = 150;
	var topRestPos = 0;

	if ($('div#elevator-data').attr('data-topRestPos')) {
		window.topRestPos = $('div#elevator-data').attr('data-topRestPos');
	}

	if ($('div#elevator-data').attr('data-elevatorThreshold')) {
		elevatorThreshold = $('div#elevator-data').attr('data-elevatorThreshold');
	}

	$('div#elevator-data[data-elevator="enable"]').pageScroller({
		windowPositionThreshold: elevatorThreshold,
		topRestPos: window.topRestPos
	});


	//==============================
	// Page scroll featurette
	//==============================
	if (location.hash) {
		var hash = location.hash;

		window.scroll(0, 0);
		$('.elevator-control a[href=' + hash + ']').click();
	}

	//==============================
	// Flexslider
	//==============================      
	$('.flexslider.carousel-component').flexslider({
		animation: 'slide',
		slideshowSpeed: 10000,
		animationLoop: true,
		slideshow: false,
		pausePlay: true,
		directionNav: true,
		controlNav: true,
		useCSS: false,
		selector: '.slides > .content-tile',
		start: function (slider) {
			adjustElevatorTopRest();
			slider.play();
		},
		after: function (slider) {
			if (slider.playing) { // Continuous mode
				slider.find('.flex-prev').show();
				slider.find('.flex-next').show();
			} else { // Manual (or "slide show") mode
				if (slider.currentSlide === 0) {
					slider.find('.flex-prev').hide();
				} else {
					slider.find('.flex-prev').show();
				}

				if (slider.currentSlide === slider.count - 1) {
					slider.find('.flex-next').hide();
				} else {
					slider.find('.flex-next').show();
				}
			}
		}
	});

	//========================================================
	// Product Detail
	//========================================================
	//Zoom Flexslider
	if ($('.flexslider.zoom-slider').length) {

		//setup object for flexslide object
		var thisZoomSlider = [],

			//find the number of slides before flexslider is initiated
			heroSlideCount = $('.flexslider.zoom-slider .slides li').length,

			//building scaffolding to insert into flexslider before it renders
			manualControlsScaffolding = '<ol class="product-flex-control-nav">',

			//var for holding product-photo-controller while in IE7 zooming in/out
			photoControlContainer,

			//checks whether user is tablet || mobile
			eventType = (global["ismobile"] == true || global["istablet"] == true) ? 'touchstart' : 'click';

		//this for loop will add an image and build the list items for the manual flexslider controls
		for (var i = 0; i < heroSlideCount; i++) {

			//finding the flexslider slide image source
			var slideImage = $($('.flexslider.zoom-slider .slides .content-tile, .flexslider.zoom-slider .slides li')[i]).find('img').attr('data-thumb');
			var zoomImage = $($('.flexslider.zoom-slider .slides .content-tile, .flexslider.zoom-slider .slides li')[i]).find('img').attr('data-zoom');

			//building the list item for manual control and adding the image
			manualControlsScaffolding += '<li>' + '<a href="#"><img src="' + slideImage + '" width="40" height="40" data-zoom="' + zoomImage + '" /></a>' + '</li>';
		}

		//closing the manual controls and adding zoom markup
		manualControlsScaffolding += '</ol>';

		//appending manual controls
		$('.flexslider.zoom-slider .product-photo-controller').prepend($('.flexslider.zoom-slider .product-photo-controller .link-lightbox-video'));
		$('.flexslider.zoom-slider .product-photo-controller').prepend(manualControlsScaffolding);
		

		//initialize flexslider
		$('.flexslider.zoom-slider').flexslider({
			animation: 'slide',
			slideshowSpeed: 10000,
			animationLoop: true,
			slideshow: false,
			pauseOnAction: true,
			pauseOnHover: true,
			directionNav: false,
			controlNav: true,
			manualControls: '.product-flex-control-nav li a',
			start: function (slider) {
				//setup thisZoomSlider for use later
				thisZoomSlider = slider;
			},
			useCSS: false
		});

		//adding click and touch event to the zoom button
		$('.flexslider.zoom-slider .product-zoom-btn .open').on(eventType, function (e) {

			//This needed to be place here as an interaction with the manual controls did not seem to pause flexslider as expected
			thisZoomSlider.manualPause = true;

			//finding the current slide
			var zoomCurrentSlide = thisZoomSlider.currentSlide,
				//flexslider slide count, finds the number of slides
				zoomSliderCount = thisZoomSlider.count,

				//element that was found to have a class of "active"
				$element = $($('.product-flex-control-nav li')[zoomCurrentSlide]).find('a.flex-active'),
				//get the image from the <img> tag in the manual control
				imageSource = $element.find('img').attr('data-zoom');

			var box_height = $(window).outerHeight(true) - 100;
			//initialize fancybox
			$.fancybox({
				type: 'html',
				//              content: '<div class="zoomed-product" style="height: ' + box_height + 'px;background: url(' + imageSource + ') no-repeat center top;">&nbsp;</div>',
				content: '<div class="zoomed-product" style="height: ' + box_height + 'px;"><img src="' + imageSource + '" alt=""/></div>',
				scrolling: 'no',
				wrapCSS: 'levis-product-zoom',
				'afterShow': function () {
					if (!photoControlContainer) {
						photoControlContainer = $('.product-photo-controller').detach();
					}
					photoControlContainer.appendTo('body').addClass('on-top-all');

					$('.product-zoom-btn .open').hide();
					$('.product-zoom-btn .closed').show().css({
						display: 'block'
					});

					$(function () {
						$('.zoomed-product img').draggable({
							containment: [-60, 10, 60, 170]
						});
					});
				},
				'afterClose': function () {

					if (!photoControlContainer) {
						photoControlContainer = $('.product-photo-controller').detach();
					}
					photoControlContainer.prependTo('.flexslider.zoom-slider').removeClass('on-top-all');

					$('.product-zoom-btn .open').show();
					$('.product-zoom-btn .closed').hide();
				}
			});

			return false;
		});

		$('.product-photo-controller .product-zoom-btn .closed').on(eventType, function (e) {
			$.fancybox.close(true);
			thisZoomSlider.manualPause = false;
		});

		//This listens for a click on the manual control images and closes the fancybox then initilizes another with the users selection
		$('.on-top-all.product-photo-controller .product-flex-control-nav li a').live(eventType, function (e) {

			$.fancybox.close(true);

			//get the image from the <img> tag in the manual control
			var imageSource = $(this).find('img').attr('data-zoom');

			var box_height = $(window).outerHeight(true) - 100;
			//initialize fancybox
			$.fancybox({
				type: 'html',
				//              content: '<div class="zoomed-product" style="background: url(' + imageSource + ') no-repeat center top;">&nbsp;</div>',
				content: '<div class="zoomed-product" style="height: ' + box_height + 'px;"><img src="' + imageSource + '" alt=""/></div>',
				scrolling: 'no',
				wrapCSS: 'levis-product-zoom',
				'afterShow': function () {

					if (!photoControlContainer) {
						photoControlContainer = $('.product-photo-controller').detach();
					}
					photoControlContainer.appendTo('body').addClass('on-top-all');

					$('.product-zoom-btn .open').hide();
					$('.product-zoom-btn .closed').show().css({
						display: 'block'
					});

					$(function () {
						$('.zoomed-product img').draggable({
							containment: [-60, 10, 60, 170]
						});
					});
				},
				'afterClose': function () {

					if (!photoControlContainer) {
						photoControlContainer = $('.product-photo-controller').detach();
					}
					photoControlContainer.prependTo('.flexslider.zoom-slider').removeClass('on-top-all');

					$('.product-zoom-btn .open').show();
					$('.product-zoom-btn .closed').hide();
				}
			});

			return false;
		});

	}

    $('#product-outfits .flexslider').flexslider({
        animation: 'slide',
        slideshowSpeed: 10000,
        animationLoop: true,
        slideshow: false,
        pausePlay: true,
        directionNav: true,
        controlNav: true,
        useCSS: false,
        start: function(slider){
            slider.play();
        }
    });


	//========================================================
	//  Outfits Landing
	//========================================================
	$('.outfits-landing .looks-stage, .outfit-list .outfit-sibling-tile .looks-stage').each(function () {
		var $imageSet = $(this).children('img');

		//On mouseenter: show second image, on mouseleave: show original image
		$(this).on('mouseenter', function () {
			if ($imageSet.size() > 1) {
				$imageSet.hide();
				//$imageSet.last().show();

				$imageSet.last().css('display', 'block');

			}
		}).on('mouseleave', function () {
			if ($imageSet.size() > 1) {
				$imageSet.hide();
				//$imageSet.first().show();

				$imageSet.first().css('display', 'block');
			}
		});
	});

});

/***************************************************/
/* Quick Buy
 /***************************************************/
$('a.btn-quickview').live('click touchstart', function (evt) { //quickbutton is built when the user clicks on the quickbuy button (with class a.quickview)
	evt.preventDefault(); //preventing the propogation of the quickbuy button
	//if ($(this).parent().attr('data-product-id') != quickbuy.initialized_product_i) {

    var qvLimitedAttrib = evt.currentTarget.attributes.getNamedItem("data-quickViewLimited");
    if(qvLimitedAttrib != null && qvLimitedAttrib.nodeValue == "true")
    {
        quickbuy.init(this,true);
    }


	quickbuy.init(this); //initialize the quickbuy object and display the quickbuy menu
	//}
	return false;
});

$('a.lnk-quickview').live('click touchstart', function (evt) { //quickbutton is built when the user clicks on the quickbuy button (with class a.quickview)
	evt.preventDefault(); //preventing the propogation of the quickbuy button
	//if ($(this).parent().attr('data-product-id') != quickbuy.initialized_product_i) {
	quickbuy.init(this); //initialize the quickbuy object and display the quickbuy menu
	//}
	return false;
});
var quickbuyInitializing = false;

var quickbuy = {

	product_id: null, //Product ID is the unique identifier for the product offered
	initialized_product_id: null, //This determines is the specific product ID has already been displayed, in order not to display duplicate quickbuy menus
	clicked_button: null, //This is the element in the DOM that was clicked to create the quickbuy menu
	json: null, //This contains the JSON data for the products
	menu: null, //This is the element in the DOM that contains the quickbuy menu
	click_away: null,
	selected_color: null, //This is the color that is currently selected from the color menu
	available_colors: {}, //this is the colors that are available. When we draw the colors, if they don't exist in the available_colors
	//variable, we display an x on top and we don't let the user select them.
	selected_size: null, //this is the size that has been selected
	selected_waist: null, //this is the waist that has been selected
	selected_length: null, //this is the waist that has been selected
	selected_sku: null, //this is the sku of the product one we select color, waist, length, size, or whatever is needed to get a unique sku
	parent_element: null, //This is so that we can restore the subcategory item if we change it.
	parent_element_archive: null, //this is an archive of the html of the parent element that had the quickbuy button
	//We store the content of that element, because we want to return that element to normal once we exit out of the quickbuy menu
	parent_element_current: null, //This is an archive of the parent element after it has been filled with the data of the product where we clicked quickbuy
	emailUrl: urlPrefix + "/emailOptIn", //This is the email script that will be used to sign up for stock information on a product
	already_open: false,
	selected_qty: 0,
	selected_entry_number: null,
	product_url: null,
	hovered_product_id: null,
	hovered_waist: null,
	hovered_length: null,
	hovered_size: null,

	//This is the initialization of the object that we do before we actually construct the DOM object that holds the quickbuy menu
	init: function (button,doLimited) {

		if (quickbuyInitializing) return;

		quickbuyInitializing = true;

		//below we hide the error messages, because on reinitialization no errors will be displayed
		$('div#quickbuy-waist-error').hide();
		$('div#quickbuy-length-error').hide();
		$('div#quickbuy-size-error').hide();

		quickbuy.hide(); //If there is an existing quickbuy menu, we need to remove it to create a new one

		//we need to recreate the parent element only if the quickbuy menu is for a new product, otherwise we keep that product.
		if ($(button).parent().attr('data-product-id') != quickbuy.initialized_product_id) {
			$(quickbuy.parent_element).html(quickbuy.parent_element_archive);
		}

		quickbuy.product_id = $(button).parent().attr('data-product-id'); //we get the product-id from the parent li element.
		quickbuy.selected_sku = $(button).parent().attr('data-sku');

		if ($(button).parent().attr('data-sku-size')) {
			quickbuy.selected_size = $(button).parent().attr('data-sku-size');
		}

		if ($(button).parent().attr('data-sku-waist')) {
			quickbuy.selected_waist = parseInt($(button).parent().attr('data-sku-waist'));
		}

		if ($(button).parent().attr('data-sku-length')) {
			quickbuy.selected_length = parseInt($(button).parent().attr('data-sku-length'));
		}

		if ($(button).parent().attr('data-qty')) {
			quickbuy.selected_qty = parseInt($(button).parent().attr('data-qty'));
		}

		quickbuy.selected_entry_number = $(button).parent().attr('data-entry-number');
		quickbuy.product_url = $(button).parent().attr('data-product-url');

		quickbuy.clicked_button = button; //this stores the clicked element for future use
		quickbuy.initialized_product_id = quickbuy.product_id; //We store the initialized value of the product id, because the product id can change on selecting a new swatch

		quickbuy.parent_element = $(button).parents('.product-tile'); //store the parent element to restore later
		quickbuy.parent_element_archive = $(quickbuy.parent_element).html(); //store the html of the parent element.

		var lang = readCookie('lang'); //quickbuy_template sets a cookie called 'lang' that stores the language value

		//jQuery gets and automaticly parses the JSON file. Please note that if the JSON has any errors, the entire parsing will fail!
		//the URL from which we are loading the JSON file includes the 'id=' and the colorid or product id, with the assumption that the Accuity Group will
		//set something up on the server that will load the JSON file specifically for that product.

		$.ajaxSetup({
			cache: false
		}); //Always get the latest json file

        var subURL = '/includes/pdp-color-new.json?id=';
        if(doLimited)
            subURL = '/includes/pdp-color-new-limited.json?id=';

		$.getJSON(urlPrefix + subURL + quickbuy.product_id, function (data) {
			quickbuy.json = data; //JSON is where the object stores the JSON file that it loaded
			
			/* Prevent issues when a JSON object is returned properly, but completely empty (bad data) */
			if ($.isEmptyObject(quickbuy.json.sku)) {
				quickbuyInitializing = false;
				return;
			}
			
			//$('body').prepend('<div></div>'); //prepend the element that is the background for the modal effect of the window.
			$.get(urlPrefix + '/includes/quickbuy/?edit=' + (quickbuy.selected_sku != null), function (data) {
				$('body').prepend(data);
				if (typeof initAddToCart === 'function') {
					initAddToCart();
				} else {
					$('form#quickbuy-form').submit(function(evt) {
						return quickbuy.processForm(evt);
					});
				}
				
				
				//sets the position of the quickbuy menu next to the quickbuy button that was clicked

				$(window).resize(function () { //on a resize of the window, the quickbuy menu needs to be repositioned next to the quickbuy button.
					quickbuy.setPosition();
				});

				quickbuy.createStyle(quickbuy.product_id); //put in the style data of the selected product
				quickbuy.createColors(quickbuy.product_id); //draw the color swatches based on the products in the color JSON file
				quickbuy.createSizes(quickbuy.product_id); //draw the sizes of the products available
				quickbuy.createPurchase(); //draws the purchase menu, in a state depending on if stock is avialable and if sizes have been selected
				quickbuy.createRating(quickbuy.product_id);
				quickbuy.setPosition(); //Set the position of the quickbuy menu
				quickbuy.getBV(quickbuy.product_id);
				
				quickbuy.parent_element_current = quickbuy.parent_element_archive; // Generate the preview of the offer on the left or the right of the subcatorgy

				//$(quickbuy.parent_element).html(quickbuy.parent_element_current); //draw the preview in the parent element

				$("a#quickbuy-view-details").attr("href", quickbuy.product_url);
				
				//There is a bug on some platforms that prevents a click of the button from submitting the quickbuy form - We need to explicitly trigger a quickbuy event
				$('button#quickbuy-bag').click(function (evt) {
					$('form#quickbuy-form').submit();
					evt.preventDefault();
				});
	
				//This is the clickable icon that lets the user submit the form from the email submission section of the quickbuy
				$('a#quickbuy-email').click(function (evt) {
					$('form#quickbuy-form').submit();
					evt.preventDefault();
				});
				
				quickbuyInitializing = false;
			});

			$('li.quickbuy-swatch').live('click', function () { //execute if someone clicks on an active color swatch element
				var color = $(this).attr('data-colorid'),
					url = $(this).attr('data-product-url');
				quickbuy.selectColor(color); //we execute the selectColor function, which changes the current product/color to the new specified on... the value comes from the list item clicked
				quickbuy.createStyle(quickbuy.product_id); //When the product_id changes to a different color, we also need to change the style
				quickbuy.createSizes(color); //draw the sizes section of the quickbuy menu
				quickbuy.createPurchase(); //draw the purchase section of the quickbuy menu

				quickbuy.parent_element_current = quickbuy.createPreview(color); //create the preview, and set it to the current preview, so that it can be restored on a mouseoff of a swatch
				$(quickbuy.parent_element).empty();
				$(quickbuy.parent_element).append(quickbuy.parent_element_current); //set the content of the parent element to display the preview content
				
				$("a#quickbuy-view-details").attr("href", url);
			});

			//According to the IDD, if someone clicks off the menu, we need to close the menu item.
			//The menu is contained in a transparent div called quickbuy-click-away, with a width of 100%, height of 100%, and transparent background.
			//Below, we remove the quickbuy elements from the dom with the user click quickbuy-click away.
			/*$('div#quickbuy-click-away').live('click', function(evt) {
                $(quickbuy.parent_element).html(quickbuy.parent_element_archive); //restore the parent element to the original state before it was changed by the script
                $('div#quickbuy').remove(); //remove the quickbuy menu section
            });*/

			$('a.quickbuy-close').live('click touchstart', function (evt) { //close the quickbuy if someone clicks the close option
				$(quickbuy.parent_element).html(quickbuy.parent_element_archive); //restore the parent element to the original state before it was changed by the script
				$(quickbuy.parent_element).find('.product-images .stage').productHover(); //call product hover again because elements are recreated
				quickbuy.hide(); //remove the quickbuy menu section
				$('div#quickbuy-waist-error').hide(); //hide quickbuy error messages when the quickbuy is closed
				$('div#quickbuy-length-error').hide();
				$('div#quickbuy-size-error').hide();
				evt.preventDefault(); //prevent the default behavior, so clicks don't propogate for the conner x that closes the menu
			});

			$('a#quickbuy-view-details').live('click touchstart', function (evt) {
				evt.preventDefault();
				window.location = this.href;
			});

			/* $('html').live('click', function(evt) {
                $(quickbuy.parent_element).html(quickbuy.parent_element_archive); //restore the parent element to the original state before it was changed by the script
                $('div#quickbuy').remove(); //remove the quickbuy menu section
                //evt.preventDefault(); //prevent the default behavior, so clicks don't propogate for the conner x that closes the menu
            });*/


			if (quickbuy.selected_waist == null && readCookie('waist') != null) {
				quickbuy.selected_waist = readCookie('waist');
			} //if a waist cookie exists, load the waist value
			if (quickbuy.selected_length == null && readCookie('length') != null) {
				quickbuy.selected_length = readCookie('length');
			} //if a length cookie exists, load the length value
			if (quickbuy.selected_size == null && readCookie('size') != null) {
				quickbuy.selected_size = readCookie('size');
			} //if the size cookie exists, load the size value


			//We need to close the quickbuy menu if there is some interaction with something else outside the quickbuy menu

			$("body").live('click touchstart', function (e) //trap ALL click and touchstart events, then we decide if we need to use them
			{
				/*
                if (window.dropkick_change_event != 0) {
                    return false;
                }
                */

				var container = $("div#quickbuy"); //We store the quickbuy menu in container

				if (container.has(e.target).length === 0) { //We determine if the clicked element is in the container quickbuy menu
					$(quickbuy.parent_element).html(quickbuy.parent_element_archive); //restore the parent element to the original state before it was changed by the script
					//Hide the error messages
					$('div#quickbuy-waist-error').hide();
					$('div#quickbuy-length-error').hide();
					$('div#quickbuy-size-error').hide();
					quickbuy.hide(); //remove the quickbuy menu from the dom
				}
			});

			$('div#quickbuy').live('click', function () {
				return false; //We need to set the quickbuy menu not to propogate click events to its parent element (quickbuy-click-away), so as not to remove the menu every time someone clicks in it
			});

			//Below we process the click event if the user clicks on a pants length button
			$('ul#quickbuy-length-values li').live('click', function () {
				quickbuy.selected_size = null; //If the user selects length, that precludes selecting size

				if (quickbuy.selected_length == $(this).attr('data-size') || $(this).attr('data-size') === undefined) { //if waist is selected twice, we deselect the waist
					eraseCookie('length'); //erase the waist cookie
					quickbuy.selected_length = null; //set the waist as unselected
				} else {
					quickbuy.selected_length = $(this).attr('data-size'); //the data-size attribute contains the numberical value of the pants length size selected
					createCookie('length', quickbuy.selected_length, 0); //create the waist value cookie
					$('div#quickbuy-length-error').hide(); //hide the waist error message if the user has selected a waist value
				}
				eraseCookie('size');

				quickbuy.selected_length = $(this).attr('data-size'); //the data-size attribute contains the numberical value of the pants length size selected
				quickbuy.createSizes(quickbuy.product_id); //we create the new sizes highlighting the size that has been clicked
				quickbuy.selectColor(quickbuy.product_id); //we update the swatch stock graphics to reflect what is available with that waist
				quickbuy.createPurchase(); //update the purchase section to reflect changes in the quantity of the selected item
				$('div#quickbuy-length-error').hide(); //when the user selects the length, there is no longer a need to display an error message telling them they haven't selected a length
				quickbuy.setPosition(); //this resizes the quickbuy menu if length and waist is selected, so we need to reposition the quickbuy
			});

			$('ul#quickbuy-waist-values li').live('click', function () {
				quickbuy.selected_size = null; //if the user selects waist, that precludes selecting size

				if (quickbuy.selected_waist == $(this).attr('data-size') || $(this).attr('data-size') === undefined) { //if waist is selected twice, we deselect the waist
					eraseCookie('waist'); //erase the waist cookie
					quickbuy.selected_waist = null; //set the waist as unselected
				} else {
					quickbuy.selected_waist = $(this).attr('data-size'); //the data-size attribute contains the numberical value of the pants length size selected
					createCookie('waist', quickbuy.selected_waist, 0); //create the waist value cookie
					$('div#quickbuy-waist-error').hide(); //hide the waist error message if the user has selected a waist value
				}
				eraseCookie('size');

				quickbuy.selected_waist = $(this).attr('data-size'); //get the value of the waist that the user has clicked
				quickbuy.createSizes(quickbuy.product_id); //update the sizes div to style the waist just selected
				quickbuy.selectColor(quickbuy.product_id); //update the color in order to reflect stock levels for that waist
				quickbuy.createPurchase(); //create a new purchase option based on the stock levels of the new size
				$('div#quickbuy-waist-error').hide(); //the waist error message is not needed if the user selects the waist
				quickbuy.setPosition(); //this can resize the quickbuy menu in some cases, so we need to reposition the quickbuy


			});

			$('ul#quickbuy-size-values li').live('click', function () {

				if (quickbuy.selected_size == $(this).attr('data-size') || $(this).attr('data-size') === undefined) { //if selecting the already selected size, deselect the size
					eraseCookie('size'); //when we deselect the size, erase the size cookie
					quickbuy.selected_size = null;
				} else {
					quickbuy.selected_size = $(this).attr('data-size'); //the data-size attribute contains the numberical value of the pants length size selected
					createCookie('size', quickbuy.selected_size, 0); //set the size cookie
					$('div#quickbuy-size-error').hide(); //if the user has selected their size, then we don't have to display the size error.
				}
				eraseCookie('length'); //selecting size precludes selecting a length or waist. Erase the length and waist cookie
				eraseCookie('waist');

				quickbuy.selected_waist = null; //if the user selects size, that precludes waist and length, so we set those to null
				quickbuy.selected_length = null;
				quickbuy.selected_size = $(this).attr('data-size'); //get the size that the user has just clicked
				quickbuy.createSizes(quickbuy.product_id); //update the sizes div in order to reflect the size selection
				quickbuy.selectColor(quickbuy.product_id); //update the color div in order to reflect stock amounts for each color with that size
				quickbuy.createPurchase(); //present purchase options based on the stock available for that size
				$('div#quickbuy-size-error').hide();
				quickbuy.setPosition();
			});

			/* Hover States (don't enable for mobile/tablets) */
			/*if (!global['ismobile'] && !global['istablet']) {
                $('ul#quickbuy-waist-values li').live('mouseenter', function() {
                    //Add the hover class to display hover state
                    $(this).addClass('hover');
                    //Only trigger previews if current item is not selected
                    if (!$(this).is('.quickbuy-waist-selected') && !$(this).is('.quickbuy-waist-not-available')) {
                        quickbuy.showSizesPerWaist($(this).attr('data-size'));
                    }
                });
                $('ul#quickbuy-waist-values li').live('mouseleave', function() {
                    //Remove hover state
                    $(this).removeClass('hover');
                    //Remove previews
                    $('ul#quickbuy-length-values li').removeClass('quickbuy-preview quickbuy-preview-unavailable');
                    //Show original swatch state
                    $('#quickbuy-swatch ul li').find('.out-of-stock').show();
                    $('#quickbuy-swatch ul li').find('.out-of-stock-preview').remove();
                });
                $('ul#quickbuy-length-values li').live('mouseenter', function() {
                    //Add the hover class to display hover state
                    $(this).addClass('hover');
                    //Only trigger previews if current item is not selected
                    if (!$(this).is('.quickbuy-length-selected') && !$(this).is('.quickbuy-length-not-available')) {
                        quickbuy.showSizesPerLength($(this).attr('data-size'));
                    }
                });
                $('ul#quickbuy-length-values li').live('mouseleave', function() {
                    //Remove hover state
                    $(this).removeClass('hover');
                    //Remove previews
                    $('ul#quickbuy-waist-values li').removeClass('quickbuy-preview quickbuy-preview-unavailable');
                    //Show original swatch state
                    $('#quickbuy-swatch ul li').find('.out-of-stock').show();
                    $('#quickbuy-swatch ul li').find('.out-of-stock-preview').remove();
                });

                $('ul#quickbuy-size-values li').live('mouseenter', function() {
                    //Add the hover class to display hover state
                    $(this).addClass('hover');
                    //Only trigger previews if current item is not selected
                    if (!$(this).is('.quickbuy-size-selected') && !$(this).is('.quickbuy-size-not-available')) {
                        quickbuy.showSizesPerSize($(this).attr('data-size'));
                        console.log('test');
                    }
                });
                $('ul#quickbuy-size-values li').live('mouseleave', function() {
                    //Remove hover state
                    $(this).removeClass('hover');
                    //Show original swatch state
                    $('#quickbuy-swatch ul li').find('.out-of-stock').show();
                    $('#quickbuy-swatch ul li').find('.out-of-stock-preview').remove();
                });
            }*/

			/* killroy

            /* Hover States (don't enable for mobile/tablets) */
			if (!global['ismobile'] && !global['istablet']) {
				$('body').on('mouseenter', '#quickbuy ul#quickbuy-waist-values li', function () {
					//Add the hover class to display hover state
					$(this).addClass('hover');
					//Only trigger previews if current item is not selected
					if (!$(this).is('.quickbuy-waist-selected') && !$(this).is('.quickbuy-waist-not-available')) {
						quickbuy.showSizesPerWaist($(this).attr('data-size'));
						quickbuy.hovered_waist = $(this).attr('data-size');
						quickbuy.hovered_length = quickbuy.selected_length;
						quickbuy.hovered_product_id = quickbuy.product_id;
						quickbuy.createPurchase('hovered');
						$(quickbuy.parent_element).html(quickbuy.createPreview(quickbuy.product_id)); //draw the preview section to reflect the information about the mouseover
					}
				});
				$('body').on('mouseleave', '#quickbuy ul#quickbuy-waist-values li', function () {
					//Remove hover state
					$(this).removeClass('hover');
					//Remove previews
					$('ul#quickbuy-length-values li').removeClass('quickbuy-preview quickbuy-preview-unavailable');
					//Show original swatch state
					$('#quickbuy-swatch ul li').find('.out-of-stock').show();
					$('#quickbuy-swatch ul li').find('.out-of-stock-preview').remove();

					quickbuy.hovered_waist = null;

					quickbuy.createPurchase();
					$(quickbuy.parent_element).html(quickbuy.createPreview(quickbuy.product_id)); //draw the preview section to reflect the information about the mouseleave
				});
				$('body').on('mouseenter', '#quickbuy ul#quickbuy-length-values li', function () {
					//Add the hover class to display hover state
					$(this).addClass('hover');
					//Only trigger previews if current item is not selected
					if (!$(this).is('.quickbuy-length-selected') && !$(this).is('.quickbuy-length-not-available')) {
						quickbuy.showSizesPerLength($(this).attr('data-size'));
						quickbuy.hovered_length = $(this).attr('data-size');
						quickbuy.hovered_waist = quickbuy.selected_waist;
						quickbuy.hovered_product_id = quickbuy.product_id;
						quickbuy.createPurchase('hovered');
						$(quickbuy.parent_element).html(quickbuy.createPreview(quickbuy.product_id)); //draw the preview section to reflect the information about the mouseover
					}
				});
				$('body').on('mouseleave', '#quickbuy ul#quickbuy-length-values li', function () {
					//Remove hover state
					$(this).removeClass('hover');
					//Remove previews
					$('ul#quickbuy-waist-values li').removeClass('quickbuy-preview quickbuy-preview-unavailable');
					//Show original swatch state
					$('#quickbuy-swatch ul li').find('.out-of-stock').show();
					$('#quickbuy-swatch ul li').find('.out-of-stock-preview').remove();

					quickbuy.hovered_length = null;

					quickbuy.createPurchase();
					$(quickbuy.parent_element).html(quickbuy.createPreview(quickbuy.product_id)); //draw the preview section to reflect the information about the mouseleave
				});

				$('body').on('mouseenter', '#quickbuy ul#quickbuy-size-values li', function () {
					//Add the hover class to display hover state
					$(this).addClass('hover');
					//Only trigger previews if current item is not selected
					if (!$(this).is('.quickbuy-size-selected') && !$(this).is('.quickbuy-size-not-available')) {
						quickbuy.showSizesPerSize($(this).attr('data-size'));
						quickbuy.hovered_size = $(this).attr('data-size');
						quickbuy.hovered_product_id = quickbuy.product_id;
						quickbuy.createPurchase('hovered');
						$(quickbuy.parent_element).html(quickbuy.createPreview(quickbuy.product_id)); //draw the preview section to reflect the information about the mouseover
					}
				});
				$('body').on('mouseleave', '#quickbuy ul#quickbuy-size-values li', function () {
					//Remove hover state
					$(this).removeClass('hover');
					//Show original swatch state
					$('#quickbuy-swatch ul li').find('.out-of-stock').show();
					$('#quickbuy-swatch ul li').find('.out-of-stock-preview').remove();

					quickbuy.hovered_size = null;

					quickbuy.createPurchase();
					$(quickbuy.parent_element).html(quickbuy.createPreview(quickbuy.product_id)); //draw the preview section to reflect the information about the mouseleave
				});
			}

			//below we display the out of stock hoverstate for the quickbuy menu
			$('div#quickbuy div#quickbuy-no-quantity div.warning h1').live('mouseover', function () {
				var offset_quickbuy = $('div#quickbuy').offset(); //get the offset of the quickbuy menu
				var offset_swatch = $(this).offset(); //get the offset of the swatch
				var body_margin = parseInt($('body').css('margin-left') + 0) + parseInt($('body').css('padding-left') + 0); //normalize for the margin on the page body
				var body_width = $('body').outerWidth(true);

				//in Firefox, with a margin setting of auto, it does not list a pixel value, margin's value remains at zero... thus, we need a different way to calculate margin value
				if (body_margin == 0 || body_margin == null || body_margin === undefined || isNaN(body_margin)) {
					body_margin = ($(window).width() - body_width) / 2; //subtract the width of the body from the width of the window to determine the total margin/padding... then divide by 2 to get the left padding
					if (body_margin < 0) { //sometimes the window can be set to a value less that the width of the body
						body_margin = 0; //in this case, we need to set the margin to zero, as opposed to pushing the quickbuy menu to the far left
					}
				}

				$('div#quickbuy-out-of-stock').css('left', $(this).offset().left - body_margin - $('div#quickbuy-out-of-stock').outerWidth() - 8); //set the left to the left side of the quickbuy menu
				$('div#quickbuy-out-of-stock').css('top', $(this).offset().top - ($(this).outerHeight() / 4)); //set the top so that the midpoint is at the top of the swatch
				$('div#quickbuy-out-of-stock').show(); //show the out of stock message
			});

			//when the mouse moves off of an out of stock swatch, we need to hide the out of stock hoverstate
			$('div#quickbuy div#quickbuy-no-quantity div.warning h1').live('mouseout', function () {
				$('div#quickbuy-out-of-stock').hide(); //hide the out of stock hoverstate
			});



			/*
            initAddToCart();
*/
			//this processes the form when the user submits the quickbuy menu form.
			/*$('form#quickbuy-form').live('submit', function (evt) {
				quickbuy.processForm(evt);
			});*/
		})
			.error(function () {
			// console.log("ERROR: Can not load and parse."); //display an error message if we cant read and parse the pdp-color value.
		});
	},
	
	processForm: function() {
		$('input#quickbuy-form-entry-number').val(quickbuy.selected_entry_number);
		var email = $('input#quickbuy-email').val(); //email option presented if an item is out of stock
		////From Dockers
		if ($('input#quickbuy-email').is(":visible") == true && email == "") {
			email = "fail";
		}
		////End From Dockers
		var sku = $('input#quickbuy-form-sku').val(); //the sku for the item selected

		if (email && email != "") { //if the out-of-stock email has been set, we need to process an email signup instead of a form submit
			var emailTokenized = email.split('@'),
				emailUserName = emailTokenized[0],
				emailDomainName = emailTokenized[1];

			//evt.preventDefault(); //prevent the form from submiting
			if (!global.regex_email_username.test(emailUserName) || !global.regex_email_domainname.test(emailDomainName) || emailUserName.length > 64) {
				$('form#quickbuy-form div.email p.error').show(); //if the user hasn't entered a valid email, show the error message
			} else { //otherwise, if they have entered a valid email
				$('form#quickbuy-form div.email p.error').hide(); //hide the error message
				$('form#quickbuy-form div.email').hide(); //hide the email entry section of the form
				$('form#quickbuy-form div.email-sent').show(); //show the email submission section of the form
				$.get(quickbuy.emailUrl + '?email=' + email + '&sku=' + sku); //go to the email signup script.
				$('input#quickbuy-email').val(""); //after they have submitted an email, erase the email value
			}
			return false; //redundant - just trying to make sure the form is not submitted
		}

		//if the user hasn't entered the proper sizes
		var waistlength = quickbuy.isPants(quickbuy.product_id);
		if (
			(waistlength & (quickbuy.selected_length == null || quickbuy.selected_waist == null)) ||
			(!waistlength && quickbuy.selected_size == null)
			) {
				
			//evt.preventDefault(); //prevent the form from submitting

			//hide error messages, because we are going to recalculate what error messages are going to be visible
			$('div#quickbuy-waist-error').hide();
			$('div#quickbuy-length-error').hide();
			$('div#quickbuy-size-error').hide();

			//if size values exist, show the size error... otherwise show waist and length error
			// if (quickbuy.getSizes(quickbuy.product_id).length) {
			//if (quickbuy.getSizes(quickbuy.product_id).length && quickbuy.getSizes(quickbuy.product_id)[0] != 'null') {
			if (!quickbuy.isPants(quickbuy.product_id)) {
				$('div#quickbuy-size-error').show();

			} else {
				if (quickbuy.selected_waist == null) {
					$('div#quickbuy-waist-error').show();
				}
				if (quickbuy.selected_length == null) {
					$('div#quickbuy-length-error').show();
				}
			}

			var offset_quickbuy = $('div#quickbuy').offset(); //get the offset of the quickbuy menu
			var offset_waist = $('ul#quickbuy-waist-values').offset(); //get the offset of the swatch
			var offset_length = $('ul#quickbuy-length-values').offset(); //get the offset of the swatch
			var offset_size = $('ul#quickbuy-size-values').offset(); //get the offset of the swatch

			var body_margin = parseInt($('body').css('margin-left') + 0) + parseInt($('body').css('padding-left') + 0); //normalize for the margin on the page body
			var body_width = $('body').outerWidth(true);

			//in Firefox, with a margin setting of auto, it does not list a pixel value, margin's value remains at zero... thus, we need a different way to calculate margin value
			if (body_margin == 0 || body_margin == null || body_margin === undefined || isNaN(body_margin)) {
				body_margin = ($(window).width() - body_width) / 2; //subtract the width of the body from the width of the window to determine the total margin/padding... then divide by 2 to get the left padding
				if (body_margin < 0) { //sometimes the window can be set to a value less that the width of the body
					body_margin = 0; //in this case, we need to set the margin to zero, as opposed to pushing the quickbuy menu to the far left
				}
			}

			$('div#quickbuy-waist-error').css('left', offset_quickbuy.left - $('div#quickbuy-waist-error').width() - body_margin - 18); //set the left to the left side of the quickbuy menu
			$('div#quickbuy-waist-error').css('top', offset_waist.top - 7 + ($('ul#quickbuy-waist-values').outerHeight() / 2)); //set the top so that the midpoint is at the top of the swatch

			$('div#quickbuy-length-error').css('left', offset_quickbuy.left + $('div#quickbuy').outerWidth() - body_margin + 8); //set the left to the left side of the quickbuy menu
			$('div#quickbuy-length-error').css('top', offset_length.top - 7 + ($('ul#quickbuy-length-values').outerHeight() / 2)); //set the top so that the midpoint is at the top of the swatch

			$('div#quickbuy-size-error').css('left', offset_quickbuy.left - $('div#quickbuy-size-error').width() - body_margin - 18); //set the left to the left side of the quickbuy menu
			$('div#quickbuy-size-error').css('top', offset_size.top - 7 + ($('ul#quickbuy-size-values').outerHeight() / 2)); //set the top so that the midpoint is at the top of the swatch

			return false;
		}

		// Brighttag call
		$(window).trigger("editCart", [sku, completeResponse]);
		
		return true;
	},
	
	hide: function() {
		$('#quickbuy_container').remove();
	},
	
	getBV: function(productid) {
		if (typeof $BV !== 'object') {
			return;
		}
		try {
			$BV.ui('rr', 'show_summary', {
				secondarySummaryContainerDiv: 'BVRRSummaryContainer',
				productId : productid
			});
		} catch (bv_err) {}
	},
	
	createRating: function (color) {
		var ratingsHTML = quickbuy['json']['colorid'][color]['ratings'];
		var ratingsStars = Number(quickbuy['json']['colorid'][color]['rating-stars']);
		var ratingsCount = quickbuy['json']['colorid'][color]['rating-count'];
		var ratingsURL = quickbuy['json']['colorid'][color]['rating-url'];
		var HTML = "<span class=\"ratingValue\" itemprop=\"ratingValue\">" + ratingsStars + "</span>";

		if (ratingsHTML != null) {
			$('#quickbuy-rating').html(ratingsHTML);
			return;
		}

		if (ratingsStars == null) {
			return;
		}

		for (x = 1; x <= 5; x++) {
			if (ratingsStars >= x) {
				HTML = HTML + "<span ratingValue class=\"highlight\">*</span>";
			} else {
				HTML = HTML + "<span>*</span>";
			}
		}

		$('#quickbuy-rating li').first().html(HTML);
		$('.prod-info-review-count').html(ratingsCount);
		$('#quickbuy-rating li a').attr('href', ratingsURL);
	},

	//this gets the waist sizes that exist for the specified color, and returns them as an array
	getWaists: function (color, length) {
		var waists = new Array();
		for (var sku in quickbuy['json']['sku']) {
			if (quickbuy['json']['sku'][sku]['colorid'] == color && (quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0)) {
				if ((parseInt(quickbuy['json']['sku'][sku]['length']) == length) || (length == null)) {
					waists.push(quickbuy['json']['sku'][sku]['waist']);
				}
			}
		}
		waists.sort();
		return waists.distinct();
	},

	//this gets the length sizes that exist for the specified color, and returns them as an array
	getLengths: function (color, waist) {
		var lengths = new Array();
		for (var sku in quickbuy['json']['sku']) {
			if (quickbuy['json']['sku'][sku]['colorid'] == color && (quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0)) {
				if ((parseInt(quickbuy['json']['sku'][sku]['waist']) == waist) || (waist == null)) {
					lengths.push(quickbuy['json']['sku'][sku]['length']);
				}
			}
		}
		lengths.sort();
		return lengths.distinct();
	},

	getColors: function (type, value) {
		var colors = new Array();
		for (var sku in quickbuy['json']['sku']) {
			if ((type == 'waist') && (parseInt(quickbuy['json']['sku'][sku]['waist']) == value) && (quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0)) {
				colors.push(quickbuy['json']['sku'][sku]['colorid']);
			} else if ((type == 'length') && (parseInt(quickbuy['json']['sku'][sku]['length']) == value) && (quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0)) {
				colors.push(quickbuy['json']['sku'][sku]['colorid']);
			} else if ((type == 'size') && (quickbuy['json']['sku'][sku]['size'] == value) && (quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0)) {
				colors.push(quickbuy['json']['sku'][sku]['colorid']);
			}
		}
		return colors.distinct();
	},

	//this gets the sizes (XL, L, S, etc.), but not the pants length or waist, that exist for the specified color
	getSizes: function (color) {
		var sizes = new Array();
		for (var sku in quickbuy['json']['sku']) {
			if (quickbuy['json']['sku'][sku]['colorid'] == color && (quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0)) {
				sizes.push(quickbuy['json']['sku'][sku]['size']);
			}
		}
		return sizes.distinct();
	},


	allColors: function () {
		var all_colors = new Array();
		for (var colorid in quickbuy['json']['colorid']) {
			all_colors.push(colorid);
		}
		return all_colors.distinct();
	},

	//This returns all the waist sizes of every garment in the json data file, it is used for generating the list of all sizes in the size selection part of the quickbuy menu
	allWaists: function () {
		var all_waists = new Array();
		for (var sku in quickbuy['json']['sku']) {
			all_waists.push(quickbuy['json']['sku'][sku]['waist']);
		}
		all_waists.sort();
		return all_waists.distinct();
	},

	//This returns all the length sizes of every garment in the json data file, it is used for generating the list of sizes
	allLengths: function () {
		var all_lengths = new Array();
		for (var sku in quickbuy['json']['sku']) {
			all_lengths.push(quickbuy['json']['sku'][sku]['length']);
		}
		all_lengths.sort();
		return all_lengths.distinct();
	},

	//this gets the sizes (XL, L, S, etc.), but not the pants length or waist, that exist for the specified color
	getSizes: function (color) {
		var sizes = new Array();
		for (var sku in quickbuy['json']['sku']) {
			if (quickbuy['json']['sku'][sku]['colorid'] == color && (quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0)) {
				sizes.push(quickbuy['json']['sku'][sku]['size']);
			}
		}

		return sizes.distinct();
	},

	//this returns all the sizes available for all garments in the json file
	allSizes: function () {
		var all_sizes = new Array();
		for (var sku in quickbuy['json']['sku']) {
			all_sizes.push(quickbuy['json']['sku'][sku]['size']);
		}

		return all_sizes.distinct();
	},

	//Sets the position of the quickbuy menu
	setPosition: function () { //test
		$('div#quickbuy').css('left', 0);
		$('div#quickbuy').css('top', 0);

		var body_width = $('body').outerWidth(true); //we need to determine the with of the parent item, because it can change with reactive design
		if (body_width == 0) {
			body_width = $('body').width();
		} //outWidth doesn't work properly in some browsers, so we need to use the plain width command if we get a width of zero
		var offset = $(quickbuy.parent_element).offset(); //use offset to calculate the left and the top of the parent element
		var picture_offset = $(quickbuy.parent_element).find('img').first().offset();
		var picture_height = $(quickbuy.parent_element).find('img').first().height();
		var width = $(quickbuy.parent_element).outerWidth(); // //use innWidth to calculate the width of the parent element
		var quickbuy_width = $('div#quickbuy').outerWidth(true);
		var quickbuy_height = $('div#quickbuy').outerHeight(true);
		if (width == 0) {
			width = $(quickbuy.parent_element).width();
		}
		var height = $(quickbuy.parent_element).innerHeight();
		if (height == 0) {
			height = $(quickbuy.parent_element).height()
		}
		var body_margin = parseInt($('body').css('margin-left')) + parseInt($('body').css('padding-left')); //we need to offset for the left margin and padding

		//in Firefox, with a margin setting of auto, it does not list a pixel value, margin's value remains at zero... thus, we need a different way to calculate margin value
		if (body_margin == 0 || body_margin == null || body_margin === undefined || isNaN(body_margin)) {
			body_margin = ($(window).width() - body_width) / 2; //subtract the width of the body from the width of the window to determine the total margin/padding... then divide by 2 to get the left padding
			if (body_margin < 0) { //sometimes the window can be set to a value less that the width of the body
				body_margin = 0; //in this case, we need to set the margin to zero, as opposed to pushing the quickbuy menu to the far left
			}
		}

		if (offset == null) {
			return;
		} //if the dom elements that we are manipulating don't exist, don't bother going further

		//Below is a fix to how Internet Explorer rounds numbers for fraction widths. IE rounds down, leaving a 1px gap.
		var ie_percentage = $(quickbuy.parent_element).css('width');
		var ie_pixel = 0;
		if (parseInt(ie_percentage) > 23.2) {
			ie_pixel = 1;
		}

		//Below, we need to determine which side is the inside of the parent element in relation to the page
		if (offset.left > (body_width / 2)) {

			////From Dockers
			$('img.right-pointer').show();
			$('img.left-pointer').hide();
			////End From Dockers

			$('div#quickbuy').css('left', offset.left - quickbuy_width - body_margin + 'px'); //place the quickbuy menu to the left of the item
			//$('div#quickbuy').css('top', offset.top + 'px'); // place the quickbuy menu at the same level as the element
			$('div#quickbuy').css('top', offset.top + (height / 2) - (quickbuy_height / 2) + 'px');
			$('div#quickbuy').addClass('left-pointer'); //add the left pointer error class, since the quickbuy menu is to the right of the product
			$('div#quickbuy').removeClass('right-pointer'); //remove the right pointer if it exists
			$('div#quickbuy').addClass('shadow-left'); //add the shadow on the left, since the quickbuy is on the right of the product
			$('div#quickbuy').removeClass('shadow-right'); //remove the right shadow if it exists
		} else {

			////From Dockers
			$('img.left-pointer').show();
			$('img.right-pointer').hide();
			////End From Dockers

			$('div#quickbuy').css('left', offset.left + width - ie_pixel - body_margin + 'px'); //place the quickbuy menu to the left of the item
			//$('div#quickbuy').css('top', offset.top + 'px'); // place the quickbuy menu at the same level as the element
			$('div#quickbuy').css('top', offset.top + (height / 2) - (quickbuy_height / 2) + 'px');
			$('div#quickbuy').addClass('right-pointer');
			$('div#quickbuy').removeClass('left-pointer');
			$('div#quickbuy').addClass('shadow-right');
			$('div#quickbuy').removeClass('shadow-left');
		}

		if (parseInt($('div#quickbuy').css('top')) < 0) {
			$('div#quickbuy').css('top', '25px');
		}
	},

	//Below is the code that creates the preview that is displayed in the parent element, on a swatch click or mousover
	createPreview: function (color) {
		var was_copy = priceLabels['was'];
		var then_copy = priceLabels['then'];
		var now_copy = priceLabels['now'];
		var sale_copy = priceLabels['sale'];

		//Set waist/length/size based on hovered selection, selected selection oherwise null
		var product_waist = quickbuy.hovered_waist || quickbuy.selected_waist || null;
		var product_length = quickbuy.hovered_length || quickbuy.selected_length || null;
		var product_size = quickbuy.hovered_size || quickbuy.selected_size || null;
 
		var preview_string = "";
		preview_string = preview_string + ' <div class="product-images">';
		preview_string = preview_string + '     <a href="#path/to/product_details_page/" rel="product" class="stage">';
		preview_string = preview_string + '         <img src="' + quickbuy['json']['colorid'][color]['gridUrl'] + '" alt="preview image" />';
		preview_string = preview_string + '     </a>';
		preview_string = preview_string + ' </div>';
		preview_string = preview_string + ' <div class="product-details">';
		preview_string = preview_string + '     <a href="#path/to/product_details_page/">';
		preview_string = preview_string + '         <p class="name">';
		preview_string = preview_string + '             <strong>' + quickbuy['json']['colorid'][color]['productName'] + '</strong>';
		preview_string = preview_string + '         </p>';
		preview_string = preview_string + '         <p class="finish">' + quickbuy['json']['colorid'][color]['finish']['title'] + '</p>';
		preview_string = preview_string + '         <p class="pricing">';

		var productArray = quickbuy['json']['colorid'][color]['price']; //Used to store either color price array or sku price array
		var sku = null; //Used to store the sku value

		//Determine if user has sizes selected/hovered
		if ((product_waist != null && product_length != null && quickbuy.isPants(color)) || (product_size != null && !quickbuy.isPants(color))) {
			//If all size options are selected, we get the sku
			sku = quickbuy.getSKU(color, product_waist, product_length, product_size); //set the sku based on the size and color
			if (sku != null) {
				productArray = quickbuy['json']['sku'][sku]['price'];

				//if the save value does exist
				if (quickbuy['json']['sku'][sku]['save'] != undefined || quickbuy['json']['sku'][sku]['save'] != null) {
					preview_string = '<span class="promo-quarter-circle">' + quickbuy['json']['sku'][sku]['save'] + '</span>' + preview_string;
				} else if (quickbuy['json']['colorid'][color]['save'] != undefined || quickbuy['json']['colorid'][color]['save'] != null) {
					preview_string = '<span class="promo-quarter-circle">' + quickbuy['json']['colorid'][color]['save'] + '</span>' + preview_string;
				}
			}
			//If there are no prices set for the specific sku, then use the swatch prices
			if (productArray.length < 1) {
				productArray = quickbuy['json']['colorid'][color]['price'];
			}
		} else {
			//Not all the size options are selected, so we use the default prices for the swatch
			//Keep productArray pointing to the swatches

		}



		//Update the pricing display with correct values
		if ($.isArray(productArray)) {
			var was, then, nnow, sale;

			if ($.isArray(productArray)) {

				for (var price in productArray) {
					if (productArray === Object(productArray)) {
						if (productArray[price]['il8n'] == 'was') {
							was = productArray[price]['amount'];
						}
						if (productArray[price]['il8n'] == 'then') {
							then = productArray[price]['amount'];
						}
						if (productArray[price]['il8n'] == 'now') {
							nnow = productArray[price]['amount'];
						}
						if (productArray[price]['il8n'] == 'sale') {
							sale = productArray[price]['amount'];
						}
						if (!was) {
							was = productArray[price]['was'];
						}
						if (!then) {
							then = productArray[price]['then'];
						}
						if (!nnow) {
							nnow = productArray[price]['now'];
						}
						if (!sale) {
							sale = productArray[price]['now'];
						}
					} else {
						nnow = productArray[price];
					}
				}
			} else {
				nnow = productArray;
			}
			if (was) {
				preview_string = preview_string + '             <span class="was">' + was_copy + ' ' + was + '</span>';
			}
			if (then) {
				preview_string = preview_string + '             <span class="then">' + then_copy + ' ' + then + '</span>';
			}
			if (was || then) {
				if (nnow) {
					if ((sku != null) && (quickbuy['json']['sku'][sku]['finalsale'] == true)) {
						//If final sale, use "sale" copy
						preview_string = preview_string + '             <span class="now">' + sale_copy + ' ' + nnow + '</span>';
					} else {
						//If not, use "now" copy
						preview_string = preview_string + '             <span class="now">' + now_copy + ' ' + nnow + '</span>';
					}
				} else if (sale) {
					if ((sku != null) && (quickbuy['json']['sku'][sku]['finalsale'] == true)) {
						//If final sale, use "sale" copy
						preview_string = preview_string + '             <span class="now">' + sale_copy + ' ' + sale + '</span>';
					} else {
						//If not, use "now" copy
						preview_string = preview_string + '             <span class="now">' + sale_copy + ' ' + sale + '</span>';
					}
				}
			} else {
				preview_string = preview_string + '             <span>' + nnow + '</span>';
			}
		} else {
			preview_string = preview_string + '             <span>' + productArray + '</span>';
		}

		preview_string = preview_string + '         </p>';
		preview_string = preview_string + '     </a>';
		preview_string = preview_string + ' </div>';
		return preview_string;
	},

	//This displays the options available for purchasing an item
	createPurchase: function (state) {
		
		var quantity = 0,
			sku = null,
			not_selected = true, //not_select is used to determine if we should show "Add to Bag" because sizes haven't been added yet, or if we should show "Add to Bag" because there is stock
			maxSelectQty = window.maxQuantity || 6, // maxQuantity is a value from the back-end, passed to JS as a global var
			product_id = quickbuy.product_id,
			product_waist = quickbuy.selected_waist,
			product_length = quickbuy.selected_length,
			product_size = quickbuy.selected_size;

		//If preview is for hovered state, then update the variables with hovered items
		if (state == 'hovered') {
			product_id = quickbuy.hovered_product_id;
			product_waist = quickbuy.hovered_waist;
			product_length = quickbuy.hovered_length;
			product_size = quickbuy.hovered_size;
		}
		
		//var quantity = 0; //this is what we use to store the quantity of the item available
		//var sku = null; //this is the unique identifier for the product one the size and color is selected
		//var size_selected = false; //by default, we assume no size has been selected

		$('form#quickbuy-form div.email').show(); //if the item is out of stock, we need to make sure we are showing the option to enter email for an update of when it comes back in stock
		$('form#quickbuy-form div.email-sent').hide(); //if an email has already been submitted for a different product, we need to hide the previous thank-you message
		$('input#quickbuy-email').val(''); //we set the email value to nothing, because if the email is set the form will not submit.

		//Disable button first (in case it was enabled)
		$('#quickbuy-bag').removeClass('enabled');

		//if ((quickbuy.selected_waist && quickbuy.selected_length) || quickbuy.selected_size) { //we display purchase options only if the size has been selected, because you cant purchase clothing without a size
		//    size_selected = true; //set the size selected to true
		if ((product_waist != null && product_length != null && quickbuy.isPants(product_id)) || (product_size != null && !quickbuy.isPants(product_id))) {
			not_selected = false; //set variable to show sizes have been selected.
			sku = quickbuy.getSKU(product_id, product_waist, product_length, product_size); //set the sku based on the size and color
			$('input#quickbuy-form-sku').val(sku); //set the hidden field that stores the sku of the product selected
			if (sku != null) { //if there is a valid sku for a product
				var stock = quickbuy['json']['sku'][sku]['stock']; //get the number of items in stock for an item
				if ((typeof (stock) == 'boolean' && stock == true) || (stock == 'true')) {
					quantity = maxSelectQty;
				} else if (stock < maxSelectQty) { //if there is stock available, we set the quantity
					quantity = stock;
				} else if (stock >= maxSelectQty) { //if the stock is set to true, it means there is more than enough stock to cover all orders. We set the quantity to 6 (the maximum quantity that someone can purchase at once)
					quantity = maxSelectQty;
				} else {
					quantity = 0; //otherwise, no quantity is avialable
				}

				//Enable buy button if it is in stock
				if (quantity != 0) {
					$('#quickbuy-bag').addClass('enabled');
				}
			}
			$('div#quickbuy-purchase').show(); //if sizes have been set to get a sku, we display the purchase options
		} else {
			$('input#pdp-buystack-form-sku').val(''); // set sku to null

			var stock = maxSelectQty;

			//Update preview if we know it's out of stock for the selected waist or length
			if ((product_waist != null && product_length == null && quickbuy.isPants(product_id)) || (product_waist == null && product_length != null && quickbuy.isPants(product_id))) {
				not_selected = false; //set variable to show sizes have been selected.
				if (product_waist != null) {
					if ($.inArray(product_id, quickbuy.getColors('waist', product_waist)) > -1) {
						quantity = 6;
					}
				} else if (product_length != null) {
					if ($.inArray(product_id, quickbuy.getColors('length', product_length)) > -1) {
						quantity = 6;
					}
				}
			}
		}
		$('div#quickbuy-purchase').show();

		if (quantity < 1 && not_selected == false) { //if there is no quantity we show the out of stock message, and give the option to sign up for updates with email
			$('div#quickbuy-no-quantity').show(); //show the out of stock message

			if (quickbuy['json']['colorid'][product_id]['notifiable'] == false) {
				$('#quickbuy-no-quantity .email').hide();
			} else {
				$('#quickbuy-no-quantity .email').show();
			}

			$('button#quickbuy-bag').hide(); //hide the purchase button
			$('div#quickbuy-quantity').hide(); //hide the quantity button
		} else { //otherwise we show the options for purchasing
			$('div#quickbuy-no-quantity').hide(); //make sure the out of stock message is hidden
			$('button#quickbuy-bag').show(); //display the purchase button
			$('div#quickbuy-quantity').show(); //display the quantity selection

			var purchase;

			//Reset quantity if options are not selected
			if (quantity < maxSelectQty && not_selected == false) {
				quantity = maxSelectQty;
			}

			for (x = 1; x <= quantity; x++) {
				if (x == quickbuy.selected_qty) {
					purchase = purchase + '<option selected="selected">' + x + '</option>';
				} else {
					purchase = purchase + '<option>' + x + '</option>'; //iterate through quantity values, and create a option for the dropdown to select
				}
			}
			$('select#quickbuy-amount').html(purchase); // take the purchase amount html we have created, and insert it into the amount selection

			if (readCookie('quantity') != null) {
				/* quickbuy.selected_qty = readCookie('quantity'); */
				$('select#quickbuy-amount').val(quickbuy.selected_qty);
			} //if a qty cookie exists, load the qty value

			if (!$.browser.msie || $.browser.version >= 7) {
				$('select#quickbuy-amount').dropkick({
					theme: 'small',
					change: function (value, label) {
						createCookie('quantity', value, 0); //create the qty value cookie
					}
				});
			}
		}

		return purchase;
	},

	//if we know the color, and size or waist and length, we get the sku of that product
	getSKU: function (in_color, in_waist, in_length, in_size) {
		for (var sku in quickbuy['json']['sku']) {
			if (quickbuy['json']['sku'][sku]['colorid'] == in_color && ((quickbuy['json']['sku'][sku]['waist'] == in_waist && quickbuy['json']['sku'][sku]['length'] == in_length && in_waist != null && in_length != null) || (quickbuy['json']['sku'][sku]['size'] == in_size && in_size != null))) {
				return sku;
			}
		};
	},

	showSizesPerWaist: function (waist) {
		waist = waist || readCookie('waist');
		var available_lengths = quickbuy.getLengths(quickbuy.product_id, waist); //get all in-stock lengths for hovered waist
		var total_lengths = quickbuy.allLengths(); //get all length sizes for all colors

		var available_colors = quickbuy.getColors('waist', waist); //get all in-stock colors for hovered waist
		var total_colors = quickbuy.allColors(); //get all colors

		//If length is selected then display the available colors based on both waist and length
		if (typeof quickbuy.selected_length !== 'undefined') {
			var available_colors2 = quickbuy.getColors('length', quickbuy.selected_length);
			var temp = new Array();
			for (var sku in quickbuy['json']['sku']) {
				if ((quickbuy['json']['sku'][sku]['waist'] == waist) && (quickbuy['json']['sku'][sku]['length'] == quickbuy.selected_length) && ((quickbuy['json']['sku'][sku]['stock'] == true) || (quickbuy['json']['sku'][sku]['stock'] > 0))) {
					temp.push(quickbuy['json']['sku'][sku]['colorid']);
				}
			}
			available_colors = temp;
		}

		//lengths
		for (var x = 0; x < total_lengths.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_lengths[x], available_lengths) > -1) { //if the current waist size is in stock
				$('#quickbuy-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('quickbuy-preview');
			} else {
				$('#quickbuy-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('quickbuy-preview-unavailable');
				if ($('#quickbuy-length-values').find('li[data-size=' + total_lengths[x] + ']').length == 0) {
					$('#quickbuy-length-values').find('li:not([data-size])').addClass('quickbuy-preview-unavailable');
				}
			}
		}

		//Colors
		var swatch_text = '<img class="out-of-stock-preview" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock"  />';
		$('#quickbuy-swatch ul li').find('.out-of-stock').hide();
		for (var x = 0; x < total_colors.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_colors[x], available_colors) > -1) { //if the current waist size is in stock
				//Do nothing
			} else {
				$('#quickbuy-swatch').find('li[data-colorid=' + total_colors[x] + ']').prepend(swatch_text);
				if ($('li[data-colorid=' + total_colors[x] + ']').length == 0) {
					$('#quickbuy-swatch').find('li:not([data-colorid])').prepend(swatch_text);
				}
			}
		}

	},

	showSizesPerLength: function (length) {
		length = length || readCookie('length');
		var available_waists = quickbuy.getWaists(quickbuy.product_id, length); //get all in-stock widths for hovered length
		var total_waists = quickbuy.allWaists(); //get all width sizes for all colors

		var available_colors = quickbuy.getColors('length', length); //get all in-stock colors for hovered length
		var total_colors = quickbuy.allColors(); //get all colors

		//If waist is selected then display the available colors based on both waist and length
		if (typeof quickbuy.selected_waist !== 'undefined') {
			var available_colors2 = quickbuy.getColors('waist', quickbuy.selected_waist);
			var temp = new Array();
			for (var sku in quickbuy['json']['sku']) {
				if ((quickbuy['json']['sku'][sku]['length'] == length) && (quickbuy['json']['sku'][sku]['waist'] == quickbuy.selected_waist) && ((quickbuy['json']['sku'][sku]['stock'] == true) || (quickbuy['json']['sku'][sku]['stock'] > 0))) {
					temp.push(quickbuy['json']['sku'][sku]['colorid']);
				}
			}
			available_colors = temp;
		}

		//Widths
		for (var x = 0; x < total_waists.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_waists[x], available_waists) > -1) { //if the current waist size is in stock
				$('#quickbuy-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('quickbuy-preview');
			} else {
				$('#quickbuy-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('quickbuy-preview-unavailable');
				if ($('#quickbuy-waist-values').find('li[data-size=' + total_waists[x] + ']').length == 0) {
					$('#quickbuy-waist-values').find('li:not([data-size])').addClass('quickbuy-preview-unavailable');
				}
			}
		}

		//Colors
		var swatch_text = '<img class="out-of-stock-preview" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock"  />';
		
		$('#quickbuy-swatch ul li').find('.out-of-stock').hide();
		for (var x = 0; x < total_colors.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_colors[x], available_colors) > -1) { //if the current waist size is in stock
				//Do nothing
			} else {
				$('#quickbuy-swatch').find('li[data-colorid=' + total_colors[x] + ']').prepend(swatch_text);
				if ($('li[data-colorid=' + total_colors[x] + ']').length == 0) {
					$('#quickbuy-swatch').find('li:not([data-colorid])').prepend(swatch_text);
				}
			}
		}

	},

	showSizesPerSize: function (size) {
		size = size || readCookie('size');

		var available_colors = quickbuy.getColors('size', size); //get all in-stock colors for hovered size
		var total_colors = quickbuy.allColors(); //get all colors

		//Colors
		var swatch_text = '<img class="out-of-stock-preview" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock"  />';
		$('#quickbuy-swatch ul li').find('.out-of-stock').hide();
		for (var x = 0; x < total_colors.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_colors[x], available_colors) > -1) { //if the current waist size is in stock
				//Do nothing
			} else {
				$('#quickbuy-swatch').find('li[data-colorid=' + total_colors[x] + ']').prepend(swatch_text);
				if ($('li[data-colorid=' + total_colors[x] + ']').length == 0) {
					$('#quickbuy-swatch').find('li:not([data-colorid])').prepend(swatch_text);
				}
			}
		}

	},

	showSizesPerColor: function (color) {
		color = color || quickbuy.product_id;

		var available_waists = quickbuy.getWaists(color); //get all in-stock widths for hovered color
		var total_waists = quickbuy.allWaists(); //get all width sizes for all colors

		var available_lengths = quickbuy.getLengths(color); //get all in-stock lengths for hovered color
		var total_lengths = quickbuy.allLengths(); //get all lengths sizes for all colors

		var available_sizes = quickbuy.getSizes(color); //get all in-stock sizes for selected color
		var total_sizes = quickbuy.allSizes(); //get all sizes for all colors

		//If waist is selected then display the available lengths
		if (typeof quickbuy.selected_waist !== 'undefined') {
			available_lengths = quickbuy.getLengths(color, quickbuy.selected_waist);
		}
		//If length is selected then update the available waists
		if (typeof quickbuy.selected_length !== 'undefined') {
			available_waists = quickbuy.getWaists(color, quickbuy.selected_length);
		}

		//Widths
		for (var x = 0; x < total_waists.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_waists[x], available_waists) > -1) { //if the current waist size is in stock
				$('#quickbuy-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('quickbuy-preview');
			} else {
				$('#quickbuy-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('quickbuy-preview-unavailable');
				if ($('#quickbuy-waist-values').find('li[data-size=' + total_waists[x] + ']').length == 0) {
					$('#quickbuy-waist-values').find('li:not([data-size])').addClass('quickbuy-preview-unavailable');
				}
			}
		}

		//lengths
		for (var x = 0; x < total_lengths.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_lengths[x], available_lengths) > -1) { //if the current waist size is in stock
				$('#quickbuy-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('quickbuy-preview');
			} else {
				$('#quickbuy-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('quickbuy-preview-unavailable');
				if ($('#quickbuy-length-values').find('li[data-size=' + total_lengths[x] + ']').length == 0) {
					$('#quickbuy-length-values').find('li:not([data-size])').addClass('quickbuy-preview-unavailable');
				}
			}
		}

		//sizes
		for (var x = 0; x < total_sizes.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_sizes[x], available_sizes) > -1) { //if the current waist size is in stock
				$('#quickbuy-size-values').find('li[data-size=' + total_sizes[x] + ']').addClass('quickbuy-preview');
			} else {
				$('#quickbuy-size-values').find('li[data-size=' + total_sizes[x] + ']').addClass('quickbuy-preview-unavailable');
				if ($('#quickbuy-size-values').find('li[data-size=' + total_sizes[x] + ']').length == 0) {
					$('#quickbuy-size-values').find('li:not([data-size])').addClass('quickbuy-preview-unavailable');
				}
			}
		}

	},

	//this creates the section where the user can select sizes
	createSizes: function () {
		var available_waists = quickbuy.getWaists(quickbuy.product_id); //this is where we get the waists that are in stock for a color
		var available_lengths = quickbuy.getLengths(quickbuy.product_id); //we get the lengths that are in stock for a color
		var available_sizes = quickbuy.getSizes(quickbuy.product_id); //we get the sizes that are in stock for a color

		var total_waists = quickbuy.allWaists(); //we get all waist sizes available in the JSON file
		var total_lengths = quickbuy.allLengths(); //get all lengths available in the JSON file
		var total_sizes = quickbuy.allSizes(); //get all sizes available in the JSON file


		var waist_string = ""; //This is where we store the procedurally created waist menu

		if (quickbuy.selected_waist !== null) {
			available_lengths = quickbuy.getLengths(quickbuy.product_id, quickbuy.selected_waist);
		}
		if (quickbuy.selected_length !== null) {
			available_waists = quickbuy.getWaists(quickbuy.product_id, quickbuy.selected_length);
		}

		//waists
		for (var x = 0; x < total_waists.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_waists[x], available_waists) > -1) { //determine if the waist size is in the list of waist sizes that are in stok
				if (total_waists[x] == quickbuy.selected_waist) { //determine if the waist size has already been selected
					waist_string = waist_string + '<li class="quickbuy-waist-selected">' + total_waists[x] + '</li>'; //if the waist has been selected, display the item circled
				} else {
					waist_string = waist_string + '<li class="quickbuy-waist" data-size="' + total_waists[x] + '">' + total_waists[x] + '</li>'; //otherwise, display the waist as selectable
				}
			} else {
				if (total_waists[x] == quickbuy.selected_waist) {
					waist_string = waist_string + '<li class="quickbuy-waist-not-available">' + total_waists[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				} else {
					waist_string = waist_string + '<li data-size="' + total_waists[x] + '">' + total_waists[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				}
			}
		}
		$('ul#quickbuy-waist-values').html(waist_string); //put the waist menu in the waist section of the quickbuy menu

		var length_string = ""; //the procedurally created length menu is stored here
		//lengths
		for (var x = 0; x < total_lengths.length; x++) { //iterate through all the possible length values
			if ($.inArray(total_lengths[x], available_lengths) > -1) { //if the length value exists in the list of lengths in stock
				if (total_lengths[x] == quickbuy.selected_length) {
					length_string = length_string + '<li class="quickbuy-length-selected">' + total_lengths[x] + '</li>'; //draw the length value as selected
				} else {
					length_string = length_string + '<li class="quickbuy-length" data-size="' + total_lengths[x] + '">' + total_lengths[x] + '</li>'; //draw the length value as available
				}
			} else {
				if (total_lengths[x] == quickbuy.selected_length) {
					length_string = length_string + '<li class="quickbuy-length-not-available">' + total_lengths[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				} else {
					length_string = length_string + '<li data-size="' + total_lengths[x] + '">' + total_lengths[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				}
			}
		}
		$('ul#quickbuy-length-values').html(length_string); //write the length menu string to the length div

		//sizes
		var size_string = ""; //string stores the procedurally created size menu
		for (var x = 0; x < total_sizes.length; x++) { //iterate through all sizes of all garments
			if ($.inArray(total_sizes[x], available_sizes) > -1) { //if the specific size exists in the list of available sizes
				if (total_sizes[x] == quickbuy.selected_size) {
					size_string = size_string + '<li class="quickbuy-size-selected">' + total_sizes[x] + '</li>'; //the size was selected
				} else {
					size_string = size_string + '<li class="quickbuy-size" data-size="' + total_sizes[x] + '">' + total_sizes[x] + '</li>'; //the size is in stock and available
				}
			} else {
				if (total_sizes[x] == quickbuy.selected_size) {
					size_string = size_string + '<li class="quickbuy-size-not-available">' + total_sizes[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				} else {
					size_string = size_string + '<li data-size="' + total_sizes[x] + '">' + total_sizes[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				}
			}
		}
		$('ul#quickbuy-size-values').html(size_string); //write the size menu text to the size div


		if (quickbuy.isPants(quickbuy.product_id)) { //if the size doesn't have a waist and a length
			$('div#quickbuy-length').show(); //show the length selection
			$('div#quickbuy-waist').show(); //show waist selection
			$('div#quickbuy-size').hide(); //hide the size
		} else { //otherwise it does have a length and a waist
			$('div#quickbuy-length').hide(); //hide length
			$('div#quickbuy-waist').hide(); //hide waist
			$('div#quickbuy-size').show(); //show size
		}
	},

	//This determines if the item has a length and waist.
	isPants: function (color) {
		for (var sku in quickbuy['json']['sku']) {
			if (quickbuy['json']['sku'][sku]['colorid'] == color && (quickbuy['json']['sku'][sku]['waist'] === undefined || quickbuy['json']['sku'][sku]['waist'] == null)) { //if size is undefined, it means it must be pants
				return false; //return false if the item is pants
			}
		}

		return true; //returns true if the item does not have a length and waist
	},

	//This draws the style information about the specified color/product... usually it is passed the product_id
	createStyle: function (color) {
		if (!quickbuy['json']['colorid'][color]) {
			return;
		}
		$('p#quickbuy-product-description').html(quickbuy['json']['colorid'][color]['name']);
		$('span#quickbuy-style-number').html(color);
		$('div#quickbuy-reviews').html(quickbuy['json']['colorid'][color]['ratings']);
		//$('div#quickbuy-reviews').html('<div id="BVSummary"><div id="BVRRSummaryContainer"></div></div>');
	},

	//creates the string that is used to draw the color swatch for selection, and the header and description of the JSON data
	createColors: function (color) {
		var sorted_keys = quickbuy.json.colorids,
			swatch_text = "", //this string is used to hold the HTML for those elements
			swatch = {};
			
		if (!quickbuy['json']['colorid'][color]) {
			return;
		}
		$('h1#quickbuy-finish-title').html(quickbuy['json']['colorid'][color]['finish']['title']); //draw the title of the finish
		$('p#quickbuy-finish-description').html(quickbuy['json']['colorid'][color]['name']);

		swatch_text = swatch_text + "<ul>";
		
		for (var i = 0; i < sorted_keys.length; i++) {
			swatch = sorted_keys[i];
			if (swatch == color) {
				//if the color is selected, then we draw the selected graphic around it
				swatch_text = swatch_text + '<li>';
				if (commerceSite && !quickbuy.isColorAvailable(swatch)) {
					swatch_text = swatch_text + '<img class="out-of-stock" src="' + siteImageUrlPrefix + '/img/quickbuy/swatches/out-of-stock.png" alt="Out of Stock"  />';
				}
				swatch_text = swatch_text + '<img class="selected" src="' + siteImageUrlPrefix + '/img/quickbuy/swatches/selected.png" alt="selected" /><img class="quickbuy-color-select" src="' + quickbuy['json']['colorid'][swatch]['swatch'] + '" alt="' + quickbuy['json']['colorid'][swatch]['name'] + '" />';
				swatch_text = swatch_text + '</li>';
			} else if (!quickbuy.isColorAvailable(swatch)) { //Right here we are going to determine if there are any sizes available
				//if the color is not available, then we draw the out-of-stock image over the graphics
				swatch_text = swatch_text + '<li class="quickbuy-swatch" data-colorid="' + swatch + '" data-product-url="'+ urlPrefix +'/p/' + swatch + '">';
				swatch_text = swatch_text + '   <img class="out-of-stock" src="' + siteImageUrlPrefix + '/img/quickbuy/swatches/out-of-stock.png" alt="Out of Stock" /><img class="quickbuy-color-select" src="' + quickbuy['json']['colorid'][swatch]['swatch'] + '" alt="' + quickbuy['json']['colorid'][swatch]['name'] + '" />';
				swatch_text = swatch_text + '</li>';
			} else {
				//we draw the color swatch here if the the item is in stock, and if the item is not selected
				swatch_text = swatch_text + '<li class="quickbuy-swatch" data-colorid="' + swatch + '" data-product-url="'+ urlPrefix +'/p/' + swatch + '">';
				swatch_text = swatch_text + '   <img class="quickbuy-color-select" src="' + quickbuy['json']['colorid'][swatch]['swatch'] + '" alt="' + quickbuy['json']['colorid'][swatch]['name'] + '" />';
				swatch_text = swatch_text + '</li>';
			}
		}
		swatch_text = swatch_text + "</ul>";

		$('div#quickbuy-swatch').html(swatch_text);

		$('li.quickbuy-swatch').live('mouseover', function () {
			var color = $(this).attr('data-colorid'); //get the color value from the swatch that has been mouseovered
			$(quickbuy.parent_element).html(quickbuy.createPreview(color)); //draw the preview section to reflect the information about the mouseover
			$(quickbuy.parent_element).find('.product-images .stage img').hide().show(); //Hide/Show image to fix image not showing in IE8/7.             

			quickbuy.createRating(color);

			$('#quickbuy-finish-title').html(quickbuy['json']['colorid'][color]['finish']['title']); //Update the title of the finish
			$('#quickbuy-finish-description').html(quickbuy['json']['colorid'][color]['name']); //Update the description of the finish
			$('p#quickbuy-product-description').html(quickbuy['json']['colorid'][color]['name']);
			
			//Only trigger previews if current item is not selected
			quickbuy.showSizesPerColor($(this).attr('data-colorid'));
		});


		$('li.quickbuy-swatch').live('mouseout', function () {
			$(quickbuy.parent_element).html(quickbuy.parent_element_current); //on mouseout, return the preview section to its original state from the last click
			$(quickbuy.parent_element).find('.product-images .stage').productHover(); //call product hover again because elements are recreated

			quickbuy.createRating(quickbuy.product_id);

			$('#quickbuy-finish-title').html(quickbuy['json']['colorid'][quickbuy.product_id]['finish']['title']); //Update the title of the finish
			$('#quickbuy-finish-description').html(quickbuy['json']['colorid'][quickbuy.product_id]['name']); //Update the description of the finish
			$('p#quickbuy-product-description').html(quickbuy['json']['colorid'][color]['name']);
			//Remove previews
			$('ul#quickbuy-waist-values li').removeClass('quickbuy-preview quickbuy-preview-unavailable');
			$('ul#quickbuy-length-values li').removeClass('quickbuy-preview quickbuy-preview-unavailable');
			$('ul#quickbuy-size-values li').removeClass('quickbuy-preview quickbuy-preview-unavailable');
		});

		/* var hoverIntentConfig = {
            over: function() {
                var color = $(this).attr('data-colorid'); //get the color value from the swatch that has been mouseovered
                $(quickbuy.parent_element).html(quickbuy.createPreview(color)); //draw the preview section to reflect the information about the mouseover
            },
            timeout: 500,
            out: function() {
                $(quickbuy.parent_element).html(quickbuy.parent_element_current); //on mouseout, return the preview section to its original state from the last click
            }
        }

        $("li.quickbuy-swatch").hoverIntent(hoverIntentConfig); */
	},

	//this selects the color/product that we are to currently display
	selectColor: function (color) {
		quickbuy.product_id = color; //the internal procuctid is a color id
		$('div#quickbuy-colors').html(quickbuy.createColors(color));
	},

	//This is used to determine if a specific color is available, for drawing swatches
	isColorAvailable: function (color) {
		//iterate through every item with an sku
		for (var sku in quickbuy['json']['sku']) {


			//below we check to see if the stock is true, 'true', or greater than zero
			if ((quickbuy['json']['sku'][sku]['stock'] == true || quickbuy['json']['sku'][sku]['stock'] > 0) && quickbuy['json']['sku'][sku]['colorid'] == color) {
				//If the product is a pant
				if (quickbuy.isPants(color)) {
					//Below we want to check if the item is a specific size, if the size/waist/length is set. Size is ignored if not set

					if (quickbuy.selected_waist != null && quickbuy.selected_length != null) { //are there sizes set for both waist and length
						if (quickbuy.selected_waist == quickbuy['json']['sku'][sku]['waist'] && quickbuy.selected_length == quickbuy['json']['sku'][sku]['length']) {
							//does the waist and length of the sku match the selected waist and length
							return true;
						}
					} else if (quickbuy.selected_waist != null) { //else if the waist size exists, we need to compare it
						if (quickbuy.selected_waist == quickbuy['json']['sku'][sku]['waist']) {
							//if the selected waist size matches the waist of the sku item, return true
							return true;
						}
					} else if (quickbuy.selected_length != null) { //else if the length size exists, we need to compare it
						if (quickbuy.selected_length == quickbuy['json']['sku'][sku]['length']) {
							//if the selected length size matches the waist of the sku item, return true
							return true;
						}
					} else {
						return true; //if we match on stock and color, but there are no selected sizes, we return true
					}
					//Else if the product is a product that only have sizes
				} else {
					//below we check if size is set, otherwise we ignore the size
					if (quickbuy.selected_size != null) {
						if (quickbuy.selected_size == quickbuy['json']['sku'][sku]['size']) { //does the current sku match the size selected by the user?
							return true;
						}
					} else {
						return true; //if we match on stock and color, but there are no selected sizes, we return true
					}
				}
			}
		}
		return false;
	}
}

//Helper function to remove duplicate elements from an array. Useful when we have arrays of sizes in the quickbuy.
Array.prototype.distinct = function () {
	var o = {};
	var a = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] === undefined) {

		} else {
			o[this[i]] = 1;
		}
	}
	for (var e in o) {
		a.push(e);
	}
	return a;
}

$.fn.vAlign = function () {
	return this.each(function (i) {
		var h = $(this).height();
		var oh = $(this).outerHeight();
		var mt = (h + (oh - h)) / 2;
		$(this).css("margin-top", "-" + mt + "px");
		$(this).css("top", "50%");
		$(this).css("position", "absolute");
	});
}

// Helper functions for writing and reading cookies. We use cookies for passing the language to the script.
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else var expires = "";

	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}


/*********************************************************************************/
/* Holiday Gift Guide */
/*********************************************************************************/

var sparkleObject = {
	zones: new Array(),
	sprites: new Image(),
	sparkleCount: 40,
	sparkles: new Array(45),
	i: 0,

	init: function () {
		sparkleObject.sprites = new Image();
		sparkleObject.sprites.src = "/_ui/common/images/sparkle-sprites.png";

		$('img.sparkleMotion').each(function () {
			sparkleObject.zones[sparkleObject.i] = new Object();
			var image_src = $(this).attr('src');
			sparkleObject.zones[sparkleObject.i].canvas = sparkleObject.img2canvas(this);
			sparkleObject.zones[sparkleObject.i].context = sparkleObject.zones[sparkleObject.i].canvas.get(0).getContext("2d");
			sparkleObject.zones[sparkleObject.i].image = new Image();
			sparkleObject.zones[sparkleObject.i].image.src = image_src; //sparkleObject.zones[sparkleObject.i].canvas.attr('data-img-src');
			sparkleObject.i = sparkleObject.i + 1;
		});

		for (x = 0; x < sparkleObject.sparkles.length; x++) {
			sparkleObject.sparkles[x] = new Object();
			sparkleObject.sparkles[x].x = Math.floor(Math.random() * 1366);
			sparkleObject.sparkles[x].y = Math.floor(Math.random() * 768);
			sparkleObject.sparkles[x].life = Math.random();
			sparkleObject.sparkles[x].image = Math.floor(Math.random() * 4);
			sparkleObject.sparkles[x].increase = true;
		}
	},

	img2canvas: function (img) {
		var image_id = $(img).attr('id');
		var image_src = $(img).attr('src');
		var image_parent = $(img).parent();
		$(img).remove();
		$(image_parent).prepend('<canvas id="' + image_id + '" width="1366" height="768" class="sparkleMotion" data-img-src="' + image_src + '"></canvas>');
		var canvas = $('canvas#' + image_id);
		return canvas;
	},

	draw: function () {
		for (x = 0; x < sparkleObject.zones.length; x++) {
			sparkleObject.zones[x].context.clearRect(0, 0, 1366, 768);
			sparkleObject.zones[x].context.globalAlpha = 1;
			sparkleObject.zones[x].context.drawImage(sparkleObject.zones[x].image, 0, 0);

			if ($(sparkleObject.zones[x].canvas).css('display') != 'none') {
				for (y = 0; y < sparkleObject.sparkleCount; y++) {

					sparkleObject.drawSparkle(x, sparkleObject.sparkles[y].x, sparkleObject.sparkles[y].y, sparkleObject.sparkles[y].image, x, sparkleObject.sparkles[y].life);


					if (sparkleObject.sparkles[y].increase == true) {
						sparkleObject.sparkles[y].life = sparkleObject.sparkles[y].life + 0.015;
						if (sparkleObject.sparkles[y].life > 1) {
							sparkleObject.sparkles[y].increase = false;
							sparkleObject.sparkles[y].life = 0.999999999
						}
					} else {
						sparkleObject.sparkles[y].life = sparkleObject.sparkles[y].life - 0.015;

						if (sparkleObject.sparkles[y].life < 0) {
							sparkleObject.sparkles[y].x = Math.floor(Math.random() * 1366);
							sparkleObject.sparkles[y].y = Math.floor(Math.random() * 768);
							sparkleObject.sparkles[y].image = Math.floor(Math.random() * 5);
							sparkleObject.sparkles[y].increase = true;
							sparkleObject.sparkles[y].life = 0.0000000001
						}
					}
				}
			}
		}

		setTimeout(function () {
			sparkleObject.draw();
		}, 50);
	},

	drawSparkle: function (zn, x, y, sx, sy, alpha) {
		if (zn == 0) {
			if (sparkleObject.inbox(x, y, 677, 79, 802, 180)) {
				return;
			}
			if (sparkleObject.inbox(x, y, 414, 182, 906, 552)) {
				return;
			}
			if (sparkleObject.inbox(x, y, 962, 116, 1185, 762)) {
				return;
			}
		}

		if (zn == 1) {
			if (sparkleObject.inbox(x, y, 390, 98, 973, 798)) {
				return;
			}
		}

		if (zn == 3) {
			if (sparkleObject.inbox(x, y, 115, 280, 636, 596)) {
				return;
			}
		}

		if (zn == 2) {
			if (sparkleObject.inbox(x, y, 465, 262, 820, 577)) {
				return;
			}
		}

		sparkleObject.zones[zn].context.globalAlpha = alpha;

		sx = (sx * 64);
		sy = (sy * 64);

		if (sy == 192) {
			sy = 128;
		} else if (sy == 128) {
			sy = 192;
		}

		try {
			sparkleObject.zones[zn].context.drawImage(sparkleObject.sprites, sx, sy, 64, 64, x, y, 64, 64);
		} catch (e) {

		}
	},

	inbox: function (x, y, x1, y1, x2, y2) {
		x1 = x1 - 32;
		x2 = x2 + 32;
		y1 = y1 - 32;
		y2 = y2 + 32;
		if ((x > x1) && (x < x2) && (y > y1) && (y < y2)) {
			return true;
		}
		return false;
	}
}

var glowObject = {
	zones: new Array(),
	glowbox: new Image(),
	i: 0,
	t: 0,

	init: function () {
		glowObject.glowbox = new Image();
		glowObject.glowbox.src = "/_ui/common/images/boxglow.png";
		glowObject.i = 0;

		$('img.glowMotion').each(function () {
			if (glowObject.i < 2) {
				glowObject.zones[glowObject.i] = new Object();
				glowObject.zones[glowObject.i].canvas = glowObject.img2canvas(this);
				glowObject.zones[glowObject.i].context = glowObject.zones[glowObject.i].canvas.get(0).getContext("2d");
				glowObject.zones[glowObject.i].image = new Image();
				glowObject.zones[glowObject.i].image.src = glowObject.zones[glowObject.i].canvas.attr('data-img-src');
				glowObject.i = glowObject.i + 1;
			}
		});

	},

	img2canvas: function (img) {
		var image_id = $(img).attr('id');
		var image_src = $(img).attr('src');
		var image_parent = $(img).parent();
		$(img).remove();
		$(image_parent).prepend('<canvas id="' + image_id + '" width="1366px" height="768px" class="glowMotion" data-img-src="' + image_src + '"></canvas>');
		var canvas = $('canvas#' + image_id);
		return canvas;
	},

	draw: function () {
		for (x = 0; x < glowObject.zones.length; x++) {
			glowObject.zones[x].context.clearRect(0, 0, 1366, 768);
			glowObject.zones[x].context.globalAlpha = 1;
			glowObject.zones[x].context.drawImage(glowObject.zones[x].image, 0, 0);
			glowObject.t++;
			glowObject.zones[x].context.globalAlpha = Math.abs(Math.cos(glowObject.t * 0.025));
			if (x == 0) {
				glowObject.zones[x].context.drawImage(glowObject.glowbox, 220, 15);
			} else {
				glowObject.zones[x].context.drawImage(glowObject.glowbox, 220, -15);
			}
		}

		setTimeout(function () {
			glowObject.draw();
		}, 50);
	}
}

var slider;
var clicked_action = false;
var menu_timeout = false;

$(document).ready(function () {
	slider = $('.flexslider.gift-guide').flexslider({
		animation: 'slide',
		slideshowSpeed: 10000,
		animationLoop: false,
		slideshow: false,
		pausePlay: false,
		directionNav: true,
		controlNav: true,
		useCSS: false,
		selector: '.slides > .content-tile',
		manualControls: '.gift-menu li',
		after: function (slider) {
			$('.gift-guide .slide-buttons a').removeClass('selected');
			$('.gift-menu li').removeClass('selected');

			$('.gift-guide .slide-buttons li:nth-child(' + (slider.currentSlide + 1) + ') a').addClass('selected');
			$('.gift-menu li:nth-child(' + (slider.currentSlide + 1) + ')').addClass('selected');
		}
	});

	$('.gift-guide .slide-buttons a').on('click touchstart', function () {
		var newSlide = $(this).attr('data-flexslider-double-button');
		//$('.gift-menu li:nth-child(' + newSlide + ')').trigger('click');
		//alert(parseInt(newSlide) - 1);
		$('div.gift-guide').flexslider(parseInt(newSlide) - 1); //.flexAnimate(newSlide);

		clicked_action = true;
		return false;
	});

	$('.gift-menu a').on('click touchstart', function () {
		clicked_action = true;
	});

	$('.gift-guide .flex-next, .gift-guide .flex-prev').on('click touchstart', function () {
		if ((clicked_action == false) && (menu_timeout == false)) {
			$('.gift-nav .close-buttons a').click();
		}
	});

	$('.gift-guide .menu-buttons a').on('click touchstart', function () {
		$('.gift-menu').fadeIn();
		$('.gift-guide .menu-buttons').fadeOut();
		$('.gift-nav .slide-buttons').fadeOut(function () {
			$('.gift-nav .close-buttons').fadeIn();
		});
		clicked_action = true;
		return false;
	});

	$('.gift-nav .close-buttons').on('click touchstart', function () {
		$('.gift-menu').fadeOut();
		$(this).fadeOut(function () {
			$('.gift-nav .slide-buttons').fadeIn();
			$('.gift-nav .menu-buttons').fadeIn();
		});
		clicked_action = true;
		return false;
	});

	if ($('html').hasClass('no-canvas') || $('.sparkleMotion').length == 0) {
		//alert('IE');
	} else {
		sparkleObject.init();
		sparkleObject.draw();
		glowObject.init();
		glowObject.draw();
	}

	setTimeout(function () {
		menu_timeout = true;
		if (clicked_action == false) {
			$('.gift-nav .close-buttons a').click();
		}
	}, 4000);
});

/*********************************************************************************/

/***************************************************/
/* PDP-Buystack 
 /***************************************************/

$(document).ready(function () {
	if ($("div#pdp-buystack").length > 0) { //here we determine if the pdp-buystack exists, and if then and only then do we process the buystack code
		pdpBuyStack.init();
	}
});

var pdpBuyStack = {
	product_id: null, //Product ID is the unique identifier for the product offered
	json: null, //This contains the JSON data for the products
	selected_size: null, //this is the size that has been selected
	selected_waist: null, //this is the waist that has been selected
	selected_length: null, //this is the waist that has been selected
	selected_sku: null, //this is the sku that is selected from the swatches
	hovered_size: null, //this is the size that has been hovered on
	hovered_waist: null, //this is the waist that has been hovered on
	hovered_length: null, //this is the waist that has been hovered on
	hovered_product_id: null, //this is the color that has been hovered on
	old_flexslider: null, //we store the old flexslider information, as this is where we are going to be
	emailUrl: urlPrefix + "/emailOptIn", //This is a script where we submit the email value.
	proportion: null,
	timeout: null,

	init: function () { //initialize the pdp buystack
		pdpBuyStack.product_id = $('form#pdp-buystack-form').attr('data-productid'); //Get the product id from the productid value in the form

		if (readCookie('quantity') != null) {
			quickbuy.selected_qty = readCookie('quantity');
			$('select#pdp-buystack-amount').val(quickbuy.selected_qty);
		} //if a qty cookie exists, load the qty value

		////From Dockers
		if (!$.browser.msie || $.browser.version >= 7) {
			$('select#pdp-buystack-amount').dropkick({
				theme: 'small'
			});
		}
		////End From Dockers

		$.ajaxSetup({
			cache: false
		}); //Always get the latest json file

		$.getJSON(urlPrefix + '/includes/pdp-color-2.json?id=' + pdpBuyStack.product_id, function (data) { //load the json file, padding the product id
			if (readCookie('waist') != null) {
				pdpBuyStack.selected_waist = readCookie('waist');
			} //if a waist cookie exists, load the waist value
			if (readCookie('length') != null) {
				pdpBuyStack.selected_length = readCookie('length');
			} //if a length cookie exists, load the length value
			if (readCookie('size') != null) {
				pdpBuyStack.selected_size = readCookie('size');
			} //if the size cookie exists, load the size value

			pdpBuyStack.json = data;
			pdpBuyStack.createColors(pdpBuyStack.product_id); //we draw the color watches based on the colors we have recieved in the JSON file
			pdpBuyStack.createSizes(); //we create the available sizes from the selected color
			pdpBuyStack.createPurchase(); //We create the purchase options
			$('div#pdp-buystack').show(); //once we have the buystack set up, display it
			pdpBuyStack.setClearance();
			$('#pdp-buystack-size-chart').attr('href', pdpBuyStack['json']['colorid'][pdpBuyStack.product_id]['sizechart']); //update the finish description
			$('p#pdp-buystack-finish-description').html(pdpBuyStack['json']['colorid'][pdpBuyStack.product_id]['finish']['description']);
			
			pdpBuyStack.createRating(pdpBuyStack.product_id);

			$('#pdp-style-number').html(pdpBuyStack.product_id); //update the style number

			//Below we process the click event if the user clicks on a pants length button
			$('ul#pdp-buystack-length-values li').live('click', function () {
				pdpBuyStack.selected_size = null; //if the user selects a length, that precludes them selecting a width

				if (pdpBuyStack.selected_length == $(this).attr('data-size') || $(this).attr('data-size') === undefined) { //if they are selecting the previously selected size, we unselect the size
					eraseCookie('length'); //erase the length value cookie
					pdpBuyStack.selected_length = null;
				} else {
					pdpBuyStack.selected_length = $(this).attr('data-size'); //the data-size attribute contains the numberical value of the pants length size selected
					createCookie('length', pdpBuyStack.selected_length, 0); //create cookie to store the selected length
					$('div#pdp-buystack-length-error').hide(); //if the user has selected the length, we do not need to store the length value
				}
				eraseCookie('size'); //if the user has selected length, that precludes selecting a size. Erase the size cookie.
				pdpBuyStack.createSizes(); //update the size div in order to display the change of the size state
				pdpBuyStack.selectColor(pdpBuyStack.product_id); //update the color swatches, in order to displayed the newest availability state for quickbuy
				pdpBuyStack.createPurchase(); //update the purchase section to reflect changes in the quantity of the selected item
				$('div#pdp-buystack-length-error').hide(); //if the user has selected length, hide the length select error.
				$('p.error').hide();
				pdpBuyStack.setClearance();
				//pdpBuyStack.setFormError();
			});

			$('ul#pdp-buystack-waist-values li').live('click', function () { //if the user selects a waist size
				pdpBuyStack.selected_size = null; //selecting a waist precludes selecting a length

				if (pdpBuyStack.selected_waist == $(this).attr('data-size') || $(this).attr('data-size') === undefined) { //if waist is selected twice, we deselect the waist
					eraseCookie('waist'); //erase the waist cookie
					pdpBuyStack.selected_waist = null; //set the waist as unselected
				} else {
					pdpBuyStack.selected_waist = $(this).attr('data-size'); //the data-size attribute contains the numberical value of the pants length size selected
					createCookie('waist', pdpBuyStack.selected_waist, 0); //create the waist value cookie
					$('div#pdp-buystack-waist-error').hide(); //hide the waist error message if the user has selected a waist value
				}
				eraseCookie('size'); //if the user has selected a waist, it precludes selecting a size. Erase the size cookie.
				pdpBuyStack.createSizes(); //draw the size values to reflect the change in selected size
				pdpBuyStack.selectColor(pdpBuyStack.product_id); //change the color swatches to reflect the availability status of the selected size
				pdpBuyStack.createPurchase(); //create the purchase options based on the availability status of the selected size
				$('div#pdp-buystack-waist-error').hide(); //hide the waist error message if the user has selected a waist size
				$('p.error').hide();
				pdpBuyStack.setClearance();
				//pdpBuyStack.setFormError();

			});


			$('ul#pdp-buystack-size-values li').live('click', function () {
				if (pdpBuyStack.selected_size == $(this).attr('data-size') || $(this).attr('data-size') === undefined) { //if selecting the already selected size, deselect the size
					eraseCookie('size'); //when we deselect the size, erase the size cookie
					pdpBuyStack.selected_size = null;
				} else {
					pdpBuyStack.selected_size = $(this).attr('data-size'); //the data-size attribute contains the numberical value of the pants length size selected
					createCookie('size', pdpBuyStack.selected_size, 0); //set the size cookie
					$('div#pdp-buystack-size-error').hide(); //if the user has selected their size, then we don't have to display the size error.
				}
				eraseCookie('length'); //selecting size precludes selecting a length or waist. Erase the length and waist cookie
				eraseCookie('waist');
				pdpBuyStack.selected_width = null; // selecting size precludes selecting a length or waist. clease the waist and length value.
				pdpBuyStack.selected_length = null;
				pdpBuyStack.createSizes(); //Update the availabe sizes to reflect the currently selected size
				pdpBuyStack.selectColor(pdpBuyStack.product_id); //update the color values to reflect the quantity of the size selected
				pdpBuyStack.createPurchase(); //create the purchase options, depending on the quantity of the size selected
				$('div#pdp-buystack-size-error').hide(); //if the size is selected, we don't have to display the size error message
				$('p.error').hide();
				pdpBuyStack.setClearance();
				//pdpBuyStack.setFormError();
			});

			/* Hover States (don't enable for mobile/tablets) */
			if (!global['ismobile'] && !global['istablet']) {
				$('ul#pdp-buystack-waist-values').on('mouseenter', 'li', function () {
					//Add the hover class to display hover state
					$(this).addClass('hover');
					//Only trigger previews if current item is not selected
					if (!$(this).is('.pdp-buystack-waist-selected') && !$(this).is('.pdp-buystack-waist-not-available')) {
						pdpBuyStack.showSizesPerWaist($(this).attr('data-size'));
						pdpBuyStack.hovered_waist = $(this).attr('data-size');
						pdpBuyStack.hovered_length = readCookie('length');
						pdpBuyStack.hovered_product_id = pdpBuyStack.product_id;
						pdpBuyStack.createPurchase('hovered');
					}
				});
				$('ul#pdp-buystack-waist-values').on('mouseleave', 'li', function () {
					//Remove hover state
					$(this).removeClass('hover');
					//Remove previews
					$('ul#pdp-buystack-length-values li').removeClass('pdp-buystack-preview pdp-buystack-preview-unavailable');
					//Show original swatch state
					$('#pdp-buystack-swatch ul li').find('.out-of-stock').show();
					$('#pdp-buystack-swatch ul li').find('.out-of-stock-preview').remove();

					pdpBuyStack.createPurchase();
				});
				$('ul#pdp-buystack-length-values').on('mouseenter', 'li', function () {
					//Add the hover class to display hover state
					$(this).addClass('hover');
					//Only trigger previews if current item is not selected
					if (!$(this).is('.pdp-buystack-length-selected') && !$(this).is('.pdp-buystack-length-not-available')) {
						pdpBuyStack.showSizesPerLength($(this).attr('data-size'));
						pdpBuyStack.hovered_length = $(this).attr('data-size');
						pdpBuyStack.hovered_waist = readCookie('waist');
						pdpBuyStack.hovered_product_id = pdpBuyStack.product_id;
						pdpBuyStack.createPurchase('hovered');
					}
				});
				$('ul#pdp-buystack-length-values').on('mouseleave', 'li', function () {
					//Remove hover state
					$(this).removeClass('hover');
					//Remove previews
					$('ul#pdp-buystack-waist-values li').removeClass('pdp-buystack-preview pdp-buystack-preview-unavailable');
					//Show original swatch state
					$('#pdp-buystack-swatch ul li').find('.out-of-stock').show();
					$('#pdp-buystack-swatch ul li').find('.out-of-stock-preview').remove();

					pdpBuyStack.createPurchase();
				});

				$('ul#pdp-buystack-size-values').on('mouseenter', 'li', function () {
					//Add the hover class to display hover state
					$(this).addClass('hover');
					//Only trigger previews if current item is not selected
					if (!$(this).is('.pdp-buystack-size-selected') && !$(this).is('.pdp-buystack-size-not-available')) {
						pdpBuyStack.showSizesPerSize($(this).attr('data-size'));
						pdpBuyStack.hovered_size = $(this).attr('data-size');
						pdpBuyStack.hovered_product_id = pdpBuyStack.product_id;
						pdpBuyStack.createPurchase('hovered');
					}
				});
				$('ul#pdp-buystack-size-values').on('mouseleave', 'li', function () {
					//Remove hover state
					$(this).removeClass('hover');
					//Show original swatch state
					$('#pdp-buystack-swatch ul li').find('.out-of-stock').show();
					$('#pdp-buystack-swatch ul li').find('.out-of-stock-preview').remove();

					pdpBuyStack.createPurchase();
				});
			}

			//this handles the event if the user moves their mouse over a specific swatch
			$('li.pdp-buystack-swatch').live('mouseover', function () {
				clearTimeout(pdpBuyStack.timeout);
				pdpBuyStack.old_flexslider = $('div#pdp-buystack-preview-target').html(); //we store the flexslider values in a variable, so that we can always return the flexslider to its original value
				var color = $(this).attr('data-colorid'); //get the color id of the item that has been mouseovered

				$('.prod-info .finish').html(pdpBuyStack['json']['colorid'][color]['productName']); //load the finish of the item that has been mouse overed
				$('.prod-info .finish-desc').html(pdpBuyStack['json']['colorid'][color]['name']); //load the finish description of the item that has been mouse overed
				$('p#pdp-buystack-finish-description').html(pdpBuyStack['json']['colorid'][color]['finish']['description']); //load the finish description of the item that has been mouse overed
				$('#pdp-style-number').html(color); //change the style number to reflect the item that has been mouse overed.
				pdpBuyStack.createRating(color);

				//create image that will be added to the flexslider carosel in order to display product preview
				var flexslider = '<img class="ui-draggable" id="pdp-buystack-preview-image" style="display: none !important;" src="' + pdpBuyStack['json']['colorid'][color]['url'] + '" alt="swatch preview" data-thumb="../img/pdp/demo-slide-04-small.jpg" data-zoom="../img/pdp/demo-slide-04-large.jpg" />';

				$('img#pdp-buystack-preview-image').addClass('remove-old-image');
				$('div#pdp-buystack-preview-target').prepend(flexslider); //add the selected item image to the carosel
				$('#pdp-buystack-preview-image').load(function () {
					$('.remove-old-image').hide();
					$('#pdp-buystack-preview-image').show();
					$('li.delete-me').hide();
					$('.remove-old-image').remove();
				});
				//hide the items in the current carosel, in order to show the selected item.
				//$('ul#pdp-buystack-preview-target').append(flexslider);
				//$('li.delete-me').css('visibility', 'hidden');

				//Only trigger previews if current item is not selected
				pdpBuyStack.showSizesPerColor($(this).attr('data-colorid'));
				pdpBuyStack.hovered_product_id = $(this).attr('data-colorid');
				pdpBuyStack.hovered_waist = readCookie('waist');
				pdpBuyStack.hovered_length = readCookie('length');
				pdpBuyStack.hovered_size = readCookie('size');
				pdpBuyStack.createPurchase('hovered');

				//Fixed the height for swatch container so that it doesn't change sizes when swatches are hovered
				$('#pdp-buystack-swatch').css('height', $('#pdp-buystack-swatch').height());

				//Smooth size transition
				$(this).find('img').stop(true, true).animate({
					width: '-=4px',
					height: '-=4px',
					'padding-left': '3px',
					'padding-right': '3px',
					'padding-top': '3px',
					'padding-bottom': '3px'
				}, 100, 'linear');


			});

			//mouse out event when user moves off of color swatches.
			$('li.pdp-buystack-swatch').live('mouseout', function () {
				pdpBuyStack.timeout = setTimeout(function () {
					$('img#pdp-buystack-preview-image').remove(); //remove the preview image.
					$('li.delete-me').show();
					$('#pdp-buystack-out-of-stock').hide();
					$('.prod-info .finish').html(pdpBuyStack['json']['colorid'][pdpBuyStack.product_id]['productName']); //load the finish of the item that has been mouse overed
					$('.prod-info .finish-desc').html(pdpBuyStack['json']['colorid'][pdpBuyStack.product_id]['name']); //load the finish description of the item that has been mouse overed
					$('p#pdp-buystack-finish-description').html(pdpBuyStack['json']['colorid'][pdpBuyStack.product_id]['finish']['description']); //return the description to the originally selected item
					$('#pdp-style-number').html(pdpBuyStack.product_id); //return the style number to the currently selected product id

					pdpBuyStack.createRating(pdpBuyStack.product_id);
				}, 200);

				//Remove previews
				$('ul#pdp-buystack-waist-values li').removeClass('pdp-buystack-preview pdp-buystack-preview-unavailable');
				$('ul#pdp-buystack-length-values li').removeClass('pdp-buystack-preview pdp-buystack-preview-unavailable');
				$('ul#pdp-buystack-size-values li').removeClass('pdp-buystack-preview pdp-buystack-preview-unavailable');
				pdpBuyStack.createPurchase();

				//Smooth size transition
				$(this).find('img').stop(true, true).animate({
					width: '+=4px',
					height: '+=4px',
					'padding-left': '1px',
					'padding-right': '1px',
					'padding-top': '1px',
					'padding-bottom': '1px'
				}, 100, 'linear', function () {
					//Changed the height of swatch container back to auto
					$('#pdp-buystack-swatch').css('height', 'auto');
				});


			});


			//process when the user submits the pdp-buystack form
			/*
			$('form#pdp-buystack-form').submit(function (evt) {
				pdpBuyStack.processForm();
			});
			*/

			//if the user clicks on the save element, then create the promo page.
			$('div#pdp-buystack-save').click(function () {
				pdpBuyStack.createPromo();
			});

			//when the window is resized, we need to recalculate the location of the error messages
			$(window).resize(function () { //on a resize of the window, the quickbuy menu needs to be repositioned next to the quickbuy button.
				pdpBuyStack.setClearance();
				//pdpBuyStack.setFormError();
				pdpBuyStack.positionFormError();
			});

			$('div#pdp-buystack').live('resize', function () {
				pdpBuyStack.setClearance();
			});

			//when the user clicks the email submit icon, submit the quickbuy form
			// http://stackoverflow.com/questions/6710339/jquery-live-click-function-doesnt-work
			$('a#pdp-email').click(function (e) {
				e.preventDefault();
				submitOptIn();
			});

			/* Prevent enter button from submitting form. Handled by click event instead. */
			$('#pdp-buystack-email').keydown(function (event) {
				if (event.which == 13) {
					event.preventDefault();
					submitOptIn();
				}
			});

			submitOptIn = function () {
				var email = $('input#pdp-buystack-email').val();
				var sku = $('input#pdp-buystack-form-sku').val();
				var emailTokenized = email.split('@'),
					emailUserName = emailTokenized[0],
					emailDomainName = emailTokenized[1];

				//evt.preventDefault(); //prevent the form from displaying
				if (!global.regex_email_username.test(emailUserName) || !global.regex_email_domainname.test(emailDomainName) || emailUserName.length > 64) { //if the email is not a valid email
					$('div#pdp-buystack-no-quantity p.error').show();
					//show the email error message
				} else {
					$('div#pdp-buystack-no-quantity p.error').hide();
					//hide the email error message
					$('form#pdp-buystack-form div.email').hide();
					//hide the email message
					$('form#pdp-buystack-form div.email-sent').show();
					//show the message sent div
					$('input#pdp-buystack-email').val("");
					//reset the email value to null
					$.get(pdpBuyStack.emailUrl + '?email=' + email + '&sku=' + sku);
					//send the email and sku to the server
				}

			};

			//when the user mouseovers the out-of-stock swatch, display the out-of-stock error message
			$('div#pdp-buystack div#pdp-buystack-no-quantity div.warning h1, ').live('mouseover', function () {
				var offset_quickbuy = $('div#pdp-buystack').offset(); //get the offset of the quickbuy menu
				var offset_swatch = $(this).offset(); //get the offset of the swatch
				var body_margin = parseInt($('body').css('margin-left') + 0) + parseInt($('body').css('padding-left') + 0); //normalize for the margin on the page body
				var body_width = $('body').outerWidth(true);

				//in Firefox, with a margin setting of auto, it does not list a pixel value, margin's value remains at zero... thus, we need a different way to calculate margin value
				if (body_margin == 0 || body_margin == null || body_margin === undefined || isNaN(body_margin)) {
					body_margin = ($(window).width() - body_width) / 2; //subtract the width of the body from the width of the window to determine the total margin/padding... then divide by 2 to get the left padding
					if (body_margin < 0) { //sometimes the window can be set to a value less that the width of the body
						body_margin = 0; //in this case, we need to set the margin to zero, as opposed to pushing the quickbuy menu to the far left
					}
				}

				$('div#pdp-buystack-out-of-stock').css('left', $(this).offset().left - body_margin - $('div#pdp-buystack-out-of-stock').outerWidth() - 25); //set the left to the left side of the quickbuy menu
				$('div#pdp-buystack-out-of-stock').css('top', $(this).offset().top - $('div#pdp-buystack-out-of-stock').outerHeight()); //set the top so that the midpoint is at the top of the swatch
				$('div#pdp-buystack-out-of-stock').show(); //show the out of stock message
			});

			//when the user mouseovers the out-of-stock swatch, display the out-of-stock error message
			$('.out-of-stock').live('mouseover', function () {
				var offset_buystack = $('div#pdp-buystack').offset(); //get the offset of the quickbuy menu
				var offset_swatch = $(this).offset(); //get the offset of the swatch
				var body_margin = parseInt($('body').css('margin-left') + 0) + parseInt($('body').css('padding-left') + 0); //normalize for the margin on the page body
				var body_width = $('body').outerWidth(true);
				var outOfStockNotice = $('div#pdp-buystack-out-of-stock');
				
				//in Firefox, with a margin setting of auto, it does not list a pixel value, margin's value remains at zero... thus, we need a different way to calculate margin value
				if (body_margin == 0 || body_margin == null || body_margin === undefined || isNaN(body_margin)) {
					body_margin = ($(window).width() - body_width) / 2; //subtract the width of the body from the width of the window to determine the total margin/padding... then divide by 2 to get the left padding
					if (body_margin < 0) { //sometimes the window can be set to a value less that the width of the body
						body_margin = 0; //in this case, we need to set the margin to zero, as opposed to pushing the quickbuy menu to the far left
					}
				}
				
				outOfStockNotice.css('left', offset_swatch.left - body_margin - outOfStockNotice.width() - 25 + "px"); //set the left to the left side of the quickbuy menu
				outOfStockNotice.css('top', $('div#pdp-buystack').position().top + $(this).position().top); //set the top so that the midpoint is at the top of the swatch
				outOfStockNotice.show(); //show the out of stock message
			});

			$('.out-of-stock').live('mouseout', function () {
				$('div#pdp-buystack-out-of-stock').hide();
			});

			//when the mouse moves off of an out of stock swatch, we need to hide the out of stock hoverstate
			$('div#pdp-buystack div#pdp-buystack-no-quantity div.warning h1').live('mouseout', function () {
				$('div#pdp-buystack-out-of-stock').hide(); //hide the out of stock hoverstate
			});



		}).error(function () {
			// console.log("ERROR: Can not load and parse."); //display an error message if we cant read and parse the pdp-color value.
		});
	},

	processForm: function() {
		var email = $('input#pdp-buystack-email').val(); //get the value of the email field

		////From Dockers
		if ($('input#pdp-buystack-email').is(":visible") == true && email == "") {
			email = "fail";
		}
		////End From Dockers

		var sku = $('input#pdp-buystack-form-sku').val(); //get the value of the selected sku (based on size) if it exists
		if (email && email != "") { //if email has not been entered
			//evt.preventDefault(); //prevent the form from displaying
			if (!global.emailRegex.test(email)) { //if the email is not a valid email
				$('div#pdp-buystack-no-quantity p.error').show(); //show the email error message
			} else {
				$('div#pdp-buystack-no-quantity p.error').hide(); //hide the email error message
				$('form#pdp-buystack-form div.email').hide(); //hide the email message
				$('form#pdp-buystack-form div.email-sent').show(); //show the message sent div
				$('input#pdp-buystack-email').val(""); //reset the email value to null
				$.get(pdpBuyStack.emailUrl + '?email=' + email + '&sku=' + sku); //send the email and sku to the server
			}
			return false;
		}

		//if the user hasn't selected all the sizes, display the errors
		var waistlength = pdpBuyStack.isPants(pdpBuyStack.product_id);
		if (
			(waistlength & (pdpBuyStack.selected_length == null || pdpBuyStack.selected_waist == null)) ||
			(!waistlength && pdpBuyStack.selected_size == null)
			) {
			pdpBuyStack.setFormError();
			return false;
		}
		
		return true;
	},
	
	//if there is an error with the form (most likely the user did not enter in all the sizes to purchase an item), display a form error
	setFormError: function () {
		//hide error message
		$('div#pdp-buystack-waist-error').hide();
		$('div#pdp-buystack-length-error').hide();
		$('div#pdp-buystack-size-error').hide();
		$('button#pdp-buystack-bag').removeClass('error');

		//if there are available sizes for an item...
		if (pdpBuyStack.getSizes(pdpBuyStack.product_id).length && pdpBuyStack.isPants(pdpBuyStack.product_id) == false) {
			$('div#pdp-buystack-size-error').show(); //show the size error
		} else { //otherwise show waist/length errors
			if (pdpBuyStack.selected_waist == null) {
				$('div#pdp-buystack-waist-error').show();
			}
			if (pdpBuyStack.selected_length == null) {
				$('div#pdp-buystack-length-error').show();
			}
			if (pdpBuyStack.selected_waist == null || pdpBuyStack.selected_length == null) {
				$('button#pdp-buystack-bag').addClass('error');
			}
		}

		pdpBuyStack.positionFormError();
	},

	positionFormError: function () {
		var offset_buystack = $('div#pdp-buystack').offset(); //get the offset of the quickbuy menu
		var offset_waist = $('ul#pdp-buystack-waist-values li').first().offset(); //get the offset of the swatch
		var offset_length = $('ul#pdp-buystack-length-values li').first().offset(); //get the offset of the swatch
		var offset_size = $('div#pdp-buystack-size ul li').first().offset(); //get the offset of the swatch

		var body_margin = parseInt($('body').css('margin-left') + 0) + parseInt($('body').css('padding-left') + 0); //normalize for the margin on the page body
		var body_width = $('body').outerWidth(true);

		//in Firefox, with a margin setting of auto, it does not list a pixel value, margin's value remains at zero... thus, we need a different way to calculate margin value
		if (body_margin == 0 || body_margin == null || body_margin === undefined || isNaN(body_margin)) {
			body_margin = ($(window).width() - body_width) / 2; //subtract the width of the body from the width of the window to determine the total margin/padding... then divide by 2 to get the left padding
			if (body_margin < 0) { //sometimes the window can be set to a value less that the width of the body
				body_margin = 0; //in this case, we need to set the margin to zero, as opposed to pushing the quickbuy menu to the far left
			}
		}


		if (offset_waist) {
			var waistError = $('div#pdp-buystack-waist-error');
			waistError.css('left', offset_buystack.left - body_margin - waistError.width() - 20 + "px"); //set the left to the left side of the quickbuy menu
			waistError.css('top', $('#pdp-buystack').position().top + $('#pdp-buystack-waist-values').position().top - 10 + "px"); //set the top so that the midpoint is at the top of the swatch
		}

		if (offset_length) {
			var lengthError = $('div#pdp-buystack-length-error');
			lengthError.css('left', offset_buystack.left - body_margin - lengthError.width() - 20 + "px"); //set the left to the left side of the quickbuy menu
			lengthError.css('top', $('#pdp-buystack').position().top + $('#pdp-buystack-length-values').position().top - 10 + "px"); //set the top so that the midpoint is at the top of the swatch
		}

		if (offset_size) {
			var sizeError = $('div#pdp-buystack-size-error');
			sizeError.css('left', offset_buystack.left - body_margin - sizeError.width() - 20 + "px"); //set the left to the left side of the quickbuy menu
			sizeError.css('top', $('#pdp-buystack').position().top + $('#pdp-buystack-size-values').position().top - 10 + "px"); //set the top so that the midpoint is at the top of the swatch
		}
	},

	//this function was used if the buystack was larger than the flexslider... However, changes to the css have made this no longer relevent.
	setClearance: function () {
		var clearance = 50;
		if ($('div#pdp-buystack').parent().innerHeight() < $('div#pdp-buystack').outerHeight() + clearance) {
			/* $('div#pdp-buystack').addClass('small-version'); */
		} else {

		}
	},

	createRating: function (color) {
		var ratingsHTML = pdpBuyStack['json']['colorid'][color]['ratings'];
		var ratingsStars = Number(pdpBuyStack['json']['colorid'][color]['rating-stars']);
		var ratingsCount = pdpBuyStack['json']['colorid'][color]['rating-count'];
		var ratingsURL = pdpBuyStack['json']['colorid'][color]['rating-url'];
		var HTML = "<span itemprop=\"ratingValue\">" + ratingsStars + "</span>";

		if (ratingsHTML != null) {
			$('#pdp-rating').html(ratingsHTML);
			return;
		}

		for (x = 1; x <= 5; x++) {
			if (ratingsStars >= x) {
				HTML = HTML + "<span class=\"highlight\">*</span>";
			} else {
				HTML = HTML + "<span>*</span>";
			}
		}

		$('#pdp-rating li').first().html(HTML);
		$('.prod-info-review-count').html(ratingsCount);
		$('#pdp-rating li a').attr('href', ratingsURL);
	},

	//there is a modal dialog that displays a promo message (i.e. save 30%)... if the user clicks on the promo message, they get the full promo
	createPromo: function () {
		var sku = pdpBuyStack.getSKU(pdpBuyStack.product_id, pdpBuyStack.selected_waist, pdpBuyStack.selected_length, pdpBuyStack.selected_size); //get the sku based on the selected items

		//display a modal dialog with the details based on sku
		$.fancybox({
			type: 'html',
			content: '<div id="pdp-buystack-promo">' + pdpBuyStack['json']['sku'][sku]['savedetails'] + '</div>', //get save details from the JSON file
			//wrapCSS : 'levis-product-zoom',
			'afterLoad': function () {
				//load stuff here
			},
			'afterClose': function () {
				//close stuff here
			}
		});
	},

	//creates the string that is used to draw the color swatch for selection, and the header and description of the JSON data
	createColors: function (color) {
		var sorted_keys = pdpBuyStack.json.colorids,
			swatch_text = "", //this string is used to hold the HTML for those elements
			swatch = {};

		swatch_text = swatch_text + "<ul>"; //swatch elements will be in an unordered list
		
		for (var i = 0; i < sorted_keys.length; i++) {
			swatch = sorted_keys[i];
			//console.log(swatch + " " + pdpBuyStack.isColorAvailable(swatch));
			if (swatch == color) {
				//if the color is selected, then we draw the selected graphic around it
				swatch_text = swatch_text + '<li>';
				if (commerceSite && !pdpBuyStack.isColorAvailable(swatch)) { //if the color is not available to the sku, we display an out-of-stock image
					swatch_text = swatch_text + '<img class="out-of-stock" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock"  />';
				}
				//draw the selected graphic, and then the swatch graphic
				/* title="' + pdpBuyStack['json']['colorid'][swatch]['finish']['description'] + '" */
				swatch_text = swatch_text + '<img class="selected" src="' + siteImageUrlPrefix + '/img/pdp/selected.png" alt="selected" /><img class="pdp-buystack-color-select" src="' + pdpBuyStack['json']['colorid'][swatch]['swatch'] + '"  />';
				swatch_text = swatch_text + '</li>';
			} else if (!pdpBuyStack.isColorAvailable(swatch)) { //Right here we are going to determine if there are any sizes available
				//if the color is not available, then we draw the out-of-stock image over the graphics
				swatch_text = swatch_text + '<li class="pdp-buystack-swatch" data-colorid="' + swatch + '">';
				swatch_text = swatch_text + '   <a href="?productid=' + swatch + '">';
				if (commerceSite) {
					swatch_text = swatch_text + '		<img class="out-of-stock" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock" />';	
				}
				swatch_text = swatch_text + '		<img class="pdp-buystack-color-select" src="' + pdpBuyStack['json']['colorid'][swatch]['swatch'] + '" /></a>';
				swatch_text = swatch_text + '</li>';
			} else {
				//we draw the color swatch here if the the item is in stock, and if the item is not selected
				swatch_text = swatch_text + '<li class="pdp-buystack-swatch" data-colorid="' + swatch + '">';
				/* title="' + pdpBuyStack['json']['colorid'][swatch]['finish']['description'] + '"  */
				swatch_text = swatch_text + '   <a href="?productid=' + swatch + '"><img class="pdp-buystack-color-select" src="' + pdpBuyStack['json']['colorid'][swatch]['swatch'] + '" /></a>';
				swatch_text = swatch_text + '</li>';
			}
		}
		swatch_text = swatch_text + "</ul>";

		$('div#pdp-buystack-swatch').html(swatch_text);
	},

	//This is used to determine if a specific color is available, for drawing swatches
	isColorAvailable: function (color) {
		//iterate through every item with an sku
		for (var sku in pdpBuyStack['json']['sku']) {
			//below we check to see if the stock is true, 'true', or greater than zero
			if ((pdpBuyStack['json']['sku'][sku]['stock'] == true || pdpBuyStack['json']['sku'][sku]['stock'] > 0) && pdpBuyStack['json']['sku'][sku]['colorid'] == color) {

				//If we are on a pants page
				if (pdpBuyStack.isPants(color)) {
					//below we check if waist/length is set, otherwise we ignore them
					if (pdpBuyStack.selected_waist != null && pdpBuyStack.selected_length != null) { //are there sizes set for both waist and length
						if (pdpBuyStack.selected_waist == pdpBuyStack['json']['sku'][sku]['waist'] && pdpBuyStack.selected_length == pdpBuyStack['json']['sku'][sku]['length']) {
							//does the waist and length of the sku match the selected waist and length
							return true;
						}
					} else if (pdpBuyStack.selected_waist != null) { //else if the waist size exists, we need to compare it
						if (pdpBuyStack.selected_waist == pdpBuyStack['json']['sku'][sku]['waist']) {
							//if the selected waist size matches the waist of the sku item, return true
							return true;
						}
					} else if (pdpBuyStack.selected_length != null) { //else if the length size exists, we need to compare it
						if (pdpBuyStack.selected_length == pdpBuyStack['json']['sku'][sku]['length']) {
							//if the selected length size matches the waist of the sku item, return true
							return true;
						}
					} else {
						return true; //if we match on stock and color, but there are no selected sizes, we return true
					}
					//Else we only check the size
				} else {
					//below we check if size is set, otherwise we ignore the size
					if (pdpBuyStack.selected_size != null) {
						if (pdpBuyStack.selected_size == pdpBuyStack['json']['sku'][sku]['size']) { //does the current sku match the size selected by the user?
							return true;
						}
					} else {
						return true; //if we match on stock and color, but there are no selected sizes, we return true
					}
				}
			}
		}
		return false;
	},

	showSizesPerWaist: function (waist) {
		waist = waist || readCookie('waist');
		var available_lengths = pdpBuyStack.getLengths(pdpBuyStack.product_id, waist); //get all in-stock lengths for hovered waist
		var total_lengths = pdpBuyStack.allLengths(); //get all length sizes for all colors

		var available_colors = pdpBuyStack.getColors('waist', waist); //get all in-stock colors for hovered waist
		var total_colors = pdpBuyStack.allColors(); //get all colors

		//If length is selected then display the available colors based on both waist and length
		if (readCookie('length') !== null) {
			var available_colors2 = pdpBuyStack.getColors('length', readCookie('length'));
			var temp = new Array();
			for (var sku in pdpBuyStack['json']['sku']) {
				if ((pdpBuyStack['json']['sku'][sku]['waist'] == waist) && (pdpBuyStack['json']['sku'][sku]['length'] == readCookie('length')) && ((pdpBuyStack['json']['sku'][sku]['stock'] == true) || (pdpBuyStack['json']['sku'][sku]['stock'] > 0))) {
					temp.push(pdpBuyStack['json']['sku'][sku]['colorid']);
				}
			}
			available_colors = temp;
		}

		//lengths
		for (var x = 0; x < total_lengths.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_lengths[x], available_lengths) > -1) { //if the current waist size is in stock
				$('#pdp-buystack-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('pdp-buystack-preview');
			} else {
				$('#pdp-buystack-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('pdp-buystack-preview-unavailable');
				if ($('#pdp-buystack-length-values').find('li[data-size=' + total_lengths[x] + ']').length == 0) {
					$('#pdp-buystack-length-values').find('li:not([data-size])').addClass('pdp-buystack-preview-unavailable');
				}
			}
		}

		//Colors
		var swatch_text = '<img class="out-of-stock-preview" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock"  />';
		$('#pdp-buystack-swatch ul li').find('.out-of-stock').hide();
		for (var x = 0; x < total_colors.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_colors[x], available_colors) > -1) { //if the current waist size is in stock
				//Do nothing
			} else {
				$('#pdp-buystack-swatch').find('li[data-colorid=' + total_colors[x] + ']').prepend(swatch_text);
				if ($('li[data-colorid=' + total_colors[x] + ']').length == 0) {
					$('#pdp-buystack-swatch').find('li:not([data-colorid])').prepend(swatch_text);
				}
			}
		}

	},

	showSizesPerLength: function (length) {
		length = length || readCookie('length');
		var available_waists = pdpBuyStack.getWaists(pdpBuyStack.product_id, length); //get all in-stock widths for hovered length
		var total_waists = pdpBuyStack.allWaists(); //get all width sizes for all colors

		var available_colors = pdpBuyStack.getColors('length', length); //get all in-stock colors for hovered length
		var total_colors = pdpBuyStack.allColors(); //get all colors

		//If waist is selected then display the available colors based on both waist and length
		if (readCookie('waist') !== null) {
			var available_colors2 = pdpBuyStack.getColors('waist', readCookie('waist'));
			var temp = new Array();
			for (var sku in pdpBuyStack['json']['sku']) {
				if ((pdpBuyStack['json']['sku'][sku]['length'] == length) && (pdpBuyStack['json']['sku'][sku]['waist'] == readCookie('waist')) && ((pdpBuyStack['json']['sku'][sku]['stock'] == true) || (pdpBuyStack['json']['sku'][sku]['stock'] > 0))) {
					temp.push(pdpBuyStack['json']['sku'][sku]['colorid']);
				}
			}
			available_colors = temp;
		}

		//Widths
		for (var x = 0; x < total_waists.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_waists[x], available_waists) > -1) { //if the current waist size is in stock
				$('#pdp-buystack-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('pdp-buystack-preview');
			} else {
				$('#pdp-buystack-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('pdp-buystack-preview-unavailable');
				if ($('#pdp-buystack-waist-values').find('li[data-size=' + total_waists[x] + ']').length == 0) {
					$('#pdp-buystack-waist-values').find('li:not([data-size])').addClass('pdp-buystack-preview-unavailable');
				}
			}
		}

		//Colors
		var swatch_text = '<img class="out-of-stock-preview" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock"  />';
		$('#pdp-buystack-swatch ul li').find('.out-of-stock').hide();
		for (var x = 0; x < total_colors.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_colors[x], available_colors) > -1) { //if the current waist size is in stock
				//Do nothing
			} else {
				$('#pdp-buystack-swatch').find('li[data-colorid=' + total_colors[x] + '] a').prepend(swatch_text);
				if ($('li[data-colorid=' + total_colors[x] + ']').length == 0) {
					$('#pdp-buystack-swatch').find('li:not([data-colorid])').prepend(swatch_text);
				}
			}
		}

	},

	showSizesPerSize: function (size) {
		size = size || readCookie('size');

		var available_colors = pdpBuyStack.getColors('size', size); //get all in-stock colors for hovered size
		var total_colors = pdpBuyStack.allColors(); //get all colors

		//Colors
		var swatch_text = '<img class="out-of-stock-preview" src="' + siteImageUrlPrefix + '/img/pdp/out-of-stock.png" alt="Out of Stock"  />';
		$('#pdp-buystack-swatch ul li').find('.out-of-stock').hide();
		for (var x = 0; x < total_colors.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_colors[x], available_colors) > -1) { //if the current waist size is in stock
				//Do nothing
			} else {
				$('#pdp-buystack-swatch').find('li[data-colorid=' + total_colors[x] + ']').prepend(swatch_text);
				if ($('li[data-colorid=' + total_colors[x] + ']').length == 0) {
					$('#pdp-buystack-swatch').find('li:not([data-colorid])').prepend(swatch_text);
				}
			}
		}

	},

	showSizesPerColor: function (color) {
		color = color || $('#pdp-buystack-form').attr('data-productid');

		var available_waists = pdpBuyStack.getWaists(color); //get all in-stock widths for hovered color
		var total_waists = pdpBuyStack.allWaists(); //get all width sizes for all colors

		var available_lengths = pdpBuyStack.getLengths(color); //get all in-stock lengths for hovered color
		var total_lengths = pdpBuyStack.allLengths(); //get all lengths sizes for all colors

		var available_sizes = pdpBuyStack.getSizes(color); //get all in-stock sizes for selected color
		var total_sizes = pdpBuyStack.allSizes(); //get all sizes for all colors

		//If waist is selected then display the available lengths
		if (readCookie('waist') !== null) {
			available_lengths = pdpBuyStack.getLengths(color, readCookie('waist'));
		}
		//If length is selected then update the available waists
		if (readCookie('length') !== null) {
			available_waists = pdpBuyStack.getWaists(color, readCookie('length'));
		}

		//Widths
		for (var x = 0; x < total_waists.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_waists[x], available_waists) > -1) { //if the current waist size is in stock
				$('#pdp-buystack-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('pdp-buystack-preview');
			} else {
				$('#pdp-buystack-waist-values').find('li[data-size=' + total_waists[x] + ']').addClass('pdp-buystack-preview-unavailable');
				if ($('#pdp-buystack-waist-values').find('li[data-size=' + total_waists[x] + ']').length == 0) {
					$('#pdp-buystack-waist-values').find('li:not([data-size])').addClass('pdp-buystack-preview-unavailable');
				}
			}
		}

		//lengths
		for (var x = 0; x < total_lengths.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_lengths[x], available_lengths) > -1) { //if the current waist size is in stock
				$('#pdp-buystack-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('pdp-buystack-preview');
			} else {
				$('#pdp-buystack-length-values').find('li[data-size=' + total_lengths[x] + ']').addClass('pdp-buystack-preview-unavailable');
				if ($('#pdp-buystack-length-values').find('li[data-size=' + total_lengths[x] + ']').length == 0) {
					$('#pdp-buystack-length-values').find('li:not([data-size])').addClass('pdp-buystack-preview-unavailable');
				}
			}
		}

		//sizes
		for (var x = 0; x < total_sizes.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_sizes[x], available_sizes) > -1) { //if the current waist size is in stock
				$('#pdp-buystack-size-values').find('li[data-size=' + total_sizes[x] + ']').addClass('pdp-buystack-preview');
			} else {
				$('#pdp-buystack-size-values').find('li[data-size=' + total_sizes[x] + ']').addClass('pdp-buystack-preview-unavailable');
				if ($('#pdp-buystack-size-values').find('li[data-size=' + total_sizes[x] + ']').length == 0) {
					$('#pdp-buystack-size-values').find('li:not([data-size])').addClass('pdp-buystack-preview-unavailable');
				}
			}
		}

	},



	//display the sizes depending on the buy stack state
	createSizes: function () {
		var available_waists = pdpBuyStack.getWaists(pdpBuyStack.product_id); //get all in-stock waists for selected color
		var available_lengths = pdpBuyStack.getLengths(pdpBuyStack.product_id); //get all in-stock lengths for selected color
		var available_sizes = pdpBuyStack.getSizes(pdpBuyStack.product_id); //get all in-stock sizes for selected color

		var total_waists = pdpBuyStack.allWaists(); //get all waist sizes for all colors
		var total_lengths = pdpBuyStack.allLengths(); //get all length sizes for all colors
		var total_sizes = pdpBuyStack.allSizes(); //get all sizes for all colors

		var waist_string = ""; //string where the HTML for the waist sizes are stored
		
		var cookieWaist = readCookie('waist'),
			cookieLength = readCookie('length'),
			cookieSize = readCookie('size');
		
		if (cookieWaist !== null && total_waists.contains(cookieWaist)) {
			available_lengths = pdpBuyStack.getLengths(pdpBuyStack.product_id, cookieWaist);
			
		} else {
			pdpBuyStack.selected_waist = null;
			eraseCookie('waist');
		}
		if (cookieLength !== null && total_lengths.contains(cookieLength)) {
			available_waists = pdpBuyStack.getWaists(pdpBuyStack.product_id, cookieLength);
		} else {
			pdpBuyStack.selected_length = null;
			eraseCookie('length');
		}
		if (cookieSize !== null && total_sizes.contains(cookieSize)) {
			available_sizes = pdpBuyStack.getSizes(pdpBuyStack.product_id, cookieSize);
		} else {
			pdpBuyStack.selected_size = null;
			eraseCookie('size');
		}

		//waists
		for (var x = 0; x < total_waists.length; x++) { //iterate through all possible waist sizes
			if ($.inArray(total_waists[x], available_waists) > -1) { //if the current waist size is in stock
				if (total_waists[x] == pdpBuyStack.selected_waist) { //if waist is selected
					waist_string = waist_string + '<li class="pdp-buystack-waist-selected">' + total_waists[x] + '</li>'; //add selected waist
				} else {
					waist_string = waist_string + '<li class="pdp-buystack-waist" data-size="' + total_waists[x] + '">' + total_waists[x] + '</li>'; //add in-stock waist
				}
			} else {
				if (total_waists[x] == pdpBuyStack.selected_waist) { //if out-of stock waist is selected
					waist_string = waist_string + '<li class="pdp-buystack-waist-not-available" data-size="' + total_waists[x] + '">' + total_waists[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				} else {
					waist_string = waist_string + '<li data-size="' + total_waists[x] + '">' + total_waists[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				}
			}
		}
		$('ul#pdp-buystack-waist-values').html(waist_string); //update the unordered list that contains the waist

		var length_string = ""; //string where the HTML for the length sizes are stored
		//lengths
		for (var x = 0; x < total_lengths.length; x++) { //iterate through all length sizes for all colors
			if ($.inArray(total_lengths[x], available_lengths) > -1) { //if the length is available
				if (total_lengths[x] == pdpBuyStack.selected_length) { //if the length is selected
					length_string = length_string + '<li class="pdp-buystack-length-selected">' + total_lengths[x] + '</li>'; //draw selected available length
				} else {
					length_string = length_string + '<li class="pdp-buystack-length" data-size="' + total_lengths[x] + '">' + total_lengths[x] + '</li>'; //draw available length
				}
			} else {
				if (total_lengths[x] == pdpBuyStack.selected_length) {
					length_string = length_string + '<li class="pdp-buystack-length-not-available" data-size="' + total_lengths[x] + '">' + total_lengths[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				} else {
					length_string = length_string + '<li data-size="' + total_lengths[x] + '">' + total_lengths[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				}
			}
		}
		$('ul#pdp-buystack-length-values').html(length_string); //update unordered list that contains length

		//sizes
		var size_string = "";
		for (var x = 0; x < total_sizes.length; x++) {
			if ($.inArray(total_sizes[x], available_sizes) > -1) {
				if (total_sizes[x] == pdpBuyStack.selected_size) {
					size_string = size_string + '<li class="pdp-buystack-size-selected">' + total_sizes[x] + '</li>';
				} else {
					size_string = size_string + '<li class="pdp-buystack-size" data-size="' + total_sizes[x] + '">' + total_sizes[x] + '</li>';
				}
			} else {
				if (total_sizes[x] == pdpBuyStack.selected_size) {
					size_string = size_string + '<li class="pdp-buystack-size-not-available" data-size="' + total_sizes[x] + '">' + total_sizes[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				} else {
					size_string = size_string + '<li data-size="' + total_sizes[x] + '">' + total_sizes[x] + '</li>'; //here the waist is out of stock, display it as unclickable
				}
			}
		}
		$('ul#pdp-buystack-size-values').html(size_string);

		//if the current item has a size, as opposed to having a length and waist
		if (!pdpBuyStack.isPants(pdpBuyStack.product_id)) {
			//hide length and waist and show sizes
			$('div#pdp-buystack-length').hide();
			$('div#pdp-buystack-waist').hide();
			$('div#pdp-buystack-size').show();
		} else {
			//show the waist and length and hide sizes
			$('div#pdp-buystack-length').show();
			$('div#pdp-buystack-waist').show();
			$('div#pdp-buystack-size').hide();
		}

	},

	//this gets the waist sizes that exist for the specified color, and returns them as an array
	getWaists: function (color, length) {
		var waists = new Array();
		for (var sku in pdpBuyStack['json']['sku']) {
			if (pdpBuyStack['json']['sku'][sku]['colorid'] == color && (pdpBuyStack['json']['sku'][sku]['stock'] == true || pdpBuyStack['json']['sku'][sku]['stock'] > 0)) {
				if ((parseInt(pdpBuyStack['json']['sku'][sku]['length']) == length) || (length == null)) {
					waists.push(pdpBuyStack['json']['sku'][sku]['waist']);
				}
			}
		}
		waists.sort();
		return waists.distinct();
	},

	//this gets the length sizes that exist for the specified color, and returns them as an array
	getLengths: function (color, waist) {
		var lengths = new Array();
		for (var sku in pdpBuyStack['json']['sku']) {
			if (pdpBuyStack['json']['sku'][sku]['colorid'] == color && (pdpBuyStack['json']['sku'][sku]['stock'] == true || pdpBuyStack['json']['sku'][sku]['stock'] > 0)) {
				if ((parseInt(pdpBuyStack['json']['sku'][sku]['waist']) == waist) || (waist == null)) {
					lengths.push(pdpBuyStack['json']['sku'][sku]['length']);
				}
			}
		}
		lengths.sort();
		return lengths.distinct();
	},

	getColors: function (type, value) {
		var colors = new Array();
		for (var sku in pdpBuyStack['json']['sku']) {
			if ((type == 'waist') && (parseInt(pdpBuyStack['json']['sku'][sku]['waist']) == value) && (pdpBuyStack['json']['sku'][sku]['stock'] == true || pdpBuyStack['json']['sku'][sku]['stock'] > 0)) {
				colors.push(pdpBuyStack['json']['sku'][sku]['colorid']);
			} else if ((type == 'length') && (parseInt(pdpBuyStack['json']['sku'][sku]['length']) == value) && (pdpBuyStack['json']['sku'][sku]['stock'] == true || pdpBuyStack['json']['sku'][sku]['stock'] > 0)) {
				colors.push(pdpBuyStack['json']['sku'][sku]['colorid']);
			} else if ((type == 'size') && (pdpBuyStack['json']['sku'][sku]['size'] == value) && (pdpBuyStack['json']['sku'][sku]['stock'] == true || pdpBuyStack['json']['sku'][sku]['stock'] > 0)) {
				colors.push(pdpBuyStack['json']['sku'][sku]['colorid']);
			}
		}
		return colors.distinct();
	},

	//this gets the sizes (XL, L, S, etc.), but not the pants length or waist, that exist for the specified color
	getSizes: function (color) {
		var sizes = new Array();
		for (var sku in pdpBuyStack['json']['sku']) {
			if (pdpBuyStack['json']['sku'][sku]['colorid'] == color && (pdpBuyStack['json']['sku'][sku]['stock'] == true || pdpBuyStack['json']['sku'][sku]['stock'] > 0)) {
				sizes.push(pdpBuyStack['json']['sku'][sku]['size']);
			}
		}
		return sizes.distinct();
	},

	allWaists: function () {
		var all_waists = new Array();
		for (var sku in pdpBuyStack['json']['sku']) {
			all_waists.push(pdpBuyStack['json']['sku'][sku]['waist']);
		}
		all_waists.sort();
		return all_waists.distinct();
	},

	allLengths: function () {
		var all_lengths = new Array();
		for (var sku in pdpBuyStack['json']['sku']) {
			all_lengths.push(pdpBuyStack['json']['sku'][sku]['length']);
		}
		all_lengths.sort();
		return all_lengths.distinct();
	},

	allColors: function () {
		var all_colors = new Array();
		for (var colorid in pdpBuyStack['json']['colorid']) {
			all_colors.push(colorid);
		}
		return all_colors.distinct();
	},

	allSizes: function () {
		var all_sizes = new Array();
		for (var sku in pdpBuyStack['json']['sku']) {
			all_sizes.push(pdpBuyStack['json']['sku'][sku]['size']);
		}
		return all_sizes.distinct();
	},

	isPants: function (color) {
		for (var sku in pdpBuyStack['json']['sku']) {
			if (pdpBuyStack['json']['sku'][sku]['colorid'] == color && pdpBuyStack['json']['sku'][sku]['waist'] !== null) {
				return true;
			}
		}
		return false;
	},

	//Create the purchasing/checkout section of the buystack
	createPurchase: function (state) {
		var quantity = 0,
			sku = null,
			not_selected = true, //not_select is used to determine if we should show "Add to Bag" because sizes haven't been added yet, or if we should show "Add to Bag" because there is stock
			maxSelectQty = window.maxQuantity || 6, // maxQuantity is a value from the back-end, passed to JS as a global var
			product_id = pdpBuyStack.product_id,
			product_waist = pdpBuyStack.selected_waist,
			product_length = pdpBuyStack.selected_length,
			product_size = pdpBuyStack.selected_size;

		//If preview is for hovered state, then update the variables with hovered items
		if (state == 'hovered') {
			product_id = pdpBuyStack.hovered_product_id;
			product_waist = pdpBuyStack.hovered_waist;
			product_length = pdpBuyStack.hovered_length;
			product_size = pdpBuyStack.hovered_size;
		}

		$('form#pdp-buystack-form div.email').show(); //if the item is out of stock, we need to make sure we are showing the option to enter email for an update of when it comes back in stock        
		$('form#pdp-buystack-form div.email-sent').hide(); //if an email has already been submitted for a different product, we need to hide the previous thank-you message
		$('input#pdp-buystack-email').val(''); //set the email value to null

		//Hide any price-display divs that might have been show with the previous size selection
		$('div#pdp-buystack-final-sale').hide();
		$('div#pdp-buystack-remaining').hide();
		$('div#pdp-buystack-was').hide();
		$('div#pdp-buystack-was-strike').hide();
		$('div#pdp-buystack-then').hide();
		$('div#pdp-buystack-now').hide();
		$('div#pdp-buystack-now-strike').hide();
		$('div#pdp-buystack-sale').hide();
		$('div#pdp-buystack-price').hide();

		//Disable button first (in case it was enabled and it only applied on click and not when user hovers over sizes)
		if (state != 'hovered') {
			$('#pdp-buystack-bag').removeClass('enabled');
		}

		//if sizes have been selected (and that they are on the respective product page)
		if ((product_waist != null && product_length != null && pdpBuyStack.isPants(product_id)) || (product_size != null && !pdpBuyStack.isPants(product_id))) {
			not_selected = false; //set variable to show sizes have been selected.
			sku = pdpBuyStack.getSKU(product_id, product_waist, product_length, product_size); //get sku based on selected sizes

			if (sku != null) { //if the sku for the selected size exists
				$('input#pdp-buystack-form-sku').val(sku); //put the sku in a hidden element on the form to record it if someone makes a purchase
				var stock = pdpBuyStack['json']['sku'][sku]['stock'];
				if ((typeof (stock) == 'boolean' && stock == true) || (stock == 'true')) {
					quantity = maxSelectQty;
				} else if (stock < maxSelectQty) { //if there is stock available, we set the quantity
					quantity = stock;
				} else if (stock >= maxSelectQty) { //if the stock is set to true, it means there is more than enough stock to cover all orders. We set the quantity to 6 (the maximum quantity that someone can purchase at once)
					quantity = maxSelectQty;
				} else {
					quantity = 0;
				}

				//Enable buy button if it is in stock (only applied on click and not when user hovers over sizes)
				if ((quantity != 0) && (state != 'hovered')) {
					$('#pdp-buystack-bag').addClass('enabled');
				}

				//if the save value does not exist
				if (pdpBuyStack['json']['sku'][sku]['save'] === undefined || pdpBuyStack['json']['sku'][sku]['save'] === null) {
					$('div#pdp-buystack-save').hide(); //hide the save display
				} else {
					$('div#pdp-buystack-save').html(pdpBuyStack['json']['sku'][sku]['save']); //add the save message to the save div
					$('div#pdp-buystack-save').show(); //show the save message
				}

				//if the final sale value exists in the JSOn file, show the final sale div
				if (pdpBuyStack['json']['sku'][sku]['finalsale'] == true || pdpBuyStack['json']['sku'][sku]['finalsale'] == 'true') {
					$('div#pdp-buystack-final-sale').show();
				}

				//if the "only a few remaining" value exists in the JSON file, show the remaing div
				if (pdpBuyStack['json']['sku'][sku]['remaining'] == true || pdpBuyStack['json']['sku'][sku]['remaining'] == 'true') {
					$('div#pdp-buystack-remaining').show();
				}

				//if the price is an array, we set up was/then/now pricing.
				if ($.isArray(pdpBuyStack['json']['sku'][sku]['price']) && pdpBuyStack['json']['sku'][sku]['price'].length > 1) {
					var was, then, now, sale;

					//iterate through all the prices for the product
					for (var price in pdpBuyStack['json']['sku'][sku]['price']) {
						if (pdpBuyStack['json']['sku'][sku]['price'][price] === Object(pdpBuyStack['json']['sku'][sku]['price'][price])) { //if the price is an object
							if (pdpBuyStack['json']['sku'][sku]['price'][price]['il8n'] == 'was') {
								was = pdpBuyStack['json']['sku'][sku]['price'][price]['amount'];
							} //if it is the "was" price
							if (pdpBuyStack['json']['sku'][sku]['price'][price]['il8n'] == 'then') {
								then = pdpBuyStack['json']['sku'][sku]['price'][price]['amount'];
							} //if it is the "then" price
							if (pdpBuyStack['json']['sku'][sku]['price'][price]['il8n'] == 'now') {
								now = pdpBuyStack['json']['sku'][sku]['price'][price]['amount'];
							} //if it is the "now" price
							if (pdpBuyStack['json']['sku'][sku]['price'][price]['il8n'] == 'sale') {
								sale = pdpBuyStack['json']['sku'][sku]['price'][price]['amount'];
							}
							//if the price element is not set, get the price directly from was/then/now
							if (!was) {
								was = pdpBuyStack['json']['sku'][sku]['price'][price]['was'];
							}
							if (!then) {
								then = pdpBuyStack['json']['sku'][sku]['price'][price]['then'];
							}
							if (!now) {
								now = pdpBuyStack['json']['sku'][sku]['price'][price]['now'];
							}
							if (!sale) {
								sale = pdpBuyStack['json']['sku'][sku]['price'][price]['sale'];
							}
						} else {
							now = pdpBuyStack['json']['sku'][sku]['price'][price];
						}
					}

					if (was && then) {
						$('div#pdp-buystack-was').show();
						$('div#pdp-buystack-was span').html(was);
					} else if (was) {
						$('div#pdp-buystack-was-strike').show();
						$('div#pdp-buystack-was-strike span').html(was);
					}

					if (then) {
						$('div#pdp-buystack-then').show();
						$('div#pdp-buystack-then span').html(then);
					}

					if (now && then) {
						$('div#pdp-buystack-now').show();
						$('div#pdp-buystack-now span').html(now);
					} else if (now) {
						$('div#pdp-buystack-now-strike').show();
						$('div#pdp-buystack-now-strike span').html(now);
					}

					if (sale) {
						$('div#pdp-buystack-sale').show();
						$('div#pdp-buystack-sale span').html(sale);
					}
				} else if (pdpBuyStack['json']['sku'][sku]['price'].length === 1) {
					$('div#pdp-buystack-price').show();
					$('div#pdp-buystack-price span').html(pdpBuyStack['json']['sku'][sku]['price'][0]['amount']);

				} else {
					//Handle the case where there's no price listed for the sku
					if (pdpBuyStack['json']['colorid'][product_id] != undefined && $.isArray(pdpBuyStack['json']['colorid'][product_id]['price']) && pdpBuyStack['json']['colorid'][product_id]['price'].length > 1) {

						for (var price in pdpBuyStack['json']['colorid'][product_id]['price']) {
							if (pdpBuyStack['json']['colorid'][product_id]['price'][price] === Object(pdpBuyStack['json']['colorid'][product_id]['price'][price])) {
								if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'was') {
									was = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
								}
								if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'then') {
									then = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
								}
								if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'now') {
									now = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
								}
								if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'sale') {
									sale = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
								}
								if (!was) {
									was = pdpBuyStack['json']['colorid'][product_id]['price'][price]['was'];
								}
								if (!then) {
									then = pdpBuyStack['json']['colorid'][product_id]['price'][price]['then'];
								}
								if (!now) {
									now = pdpBuyStack['json']['colorid'][product_id]['price'][price]['now'];
								}
								if (!sale) {
									sale = pdpBuyStack['json']['colorid'][product_id]['price'][price]['sale'];
								}
							} else {
								now = pdpBuyStack['json']['colorid'][pdpBuyStack.product_id]['price'][price];
							}
						}

						if (was && then) {
							$('div#pdp-buystack-was').show();
							$('div#pdp-buystack-was span').html(was);
						} else if (was) {
							$('div#pdp-buystack-was-strike').show();
							$('div#pdp-buystack-was-strike span').html(was);
						}



						if (then) {
							$('div#pdp-buystack-then').show();
							$('div#pdp-buystack-then span').html(then);
						}
						if (now) {
							$('div#pdp-buystack-now').show();
							$('div#pdp-buystack-now span').html(now);
						}

						if (sale) {
							$('div#pdp-buystack-sale').show();
							$('div#pdp-buystack-sale span').html(sale);
						}
					} else {
						$('div#pdp-buystack-price').show();
						if (pdpBuyStack['json']['colorid'][product_id]['price'].length > 0) {
							$('div#pdp-buystack-price span').html(pdpBuyStack['json']['colorid'][product_id]['price'][0]['amount']);
						}
					}
				}
			} else {
				$('input#pdp-buystack-form-sku').val(null); // set sku to null
			}

		} else {
			$('input#pdp-buystack-form-sku').val(''); // set sku to null

			var stock = 6;

			//Update preview if we know it's out of stock for the selected waist or length
			if ((product_waist != null && product_length != null && pdpBuyStack.isPants(product_id))) {
				not_selected = false; //set variable to show sizes have been selected.
				if (product_waist != null) {
					if ($.inArray(product_id, pdpBuyStack.getColors('waist', product_waist)) > -1) {
						quantity = 6;
					}
				} else if (product_length != null) {
					if ($.inArray(product_id, pdpBuyStack.getColors('length', product_length)) > -1) {
						quantity = 6;
					}
				}
			}

			if (pdpBuyStack['json']['colorid'][product_id] === undefined || pdpBuyStack['json']['colorid'][product_id]['save'] === undefined || pdpBuyStack['json']['colorid'][product_id]['save'] === null) {
				$('div#pdp-buystack-save').hide();
			} else {
				$('div#pdp-buystack-save').html(pdpBuyStack['json']['colorid'][product_id]['save']);
				$('div#pdp-buystack-save').show();
			}

			if (pdpBuyStack['json']['colorid'][product_id] != undefined && (pdpBuyStack['json']['colorid'][product_id]['finalsale'] == true || pdpBuyStack['json']['colorid'][product_id]['finalsale'] == 'true')) {
				$('div#pdp-buystack-final-sale').show();
			}

			if (pdpBuyStack['json']['colorid'][product_id] != undefined && (pdpBuyStack['json']['colorid'][product_id]['remaining'] == true || pdpBuyStack['json']['colorid'][product_id]['remaining'] == 'true')) {
				$('div#pdp-buystack-remaining').show();
			}

			if (pdpBuyStack['json']['colorid'][product_id] != undefined && $.isArray(pdpBuyStack['json']['colorid'][product_id]['price']) && pdpBuyStack['json']['colorid'][product_id]['price'].length > 1) {
				var was, then, now;
				for (var price in pdpBuyStack['json']['colorid'][product_id]['price']) {
					if (pdpBuyStack['json']['colorid'][product_id]['price'][price] === Object(pdpBuyStack['json']['colorid'][product_id]['price'][price])) {
						if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'was') {
							was = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
						}
						if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'then') {
							then = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
						}
						if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'now') {
							now = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
						}
						if (pdpBuyStack['json']['colorid'][product_id]['price'][price]['il8n'] == 'sale') {
							sale = pdpBuyStack['json']['colorid'][product_id]['price'][price]['amount'];
						}
						if (!was) {
							was = pdpBuyStack['json']['colorid'][product_id]['price'][price]['was'];
						}
						if (!then) {
							then = pdpBuyStack['json']['colorid'][product_id]['price'][price]['then'];
						}
						if (!now) {
							now = pdpBuyStack['json']['colorid'][product_id]['price'][price]['now'];
						}
						if (!sale) {
							sale = pdpBuyStack['json']['colorid'][product_id]['price'][price]['sale'];
						}
					} else {
						now = pdpBuyStack['json']['colorid'][product_id]['price'][price];
					}
				}

				if (was && then) {
					$('div#pdp-buystack-was').show();
					$('div#pdp-buystack-was span').html(was);
				} else if (was) {
					$('div#pdp-buystack-was-strike').show();
					$('div#pdp-buystack-was-strike span').html(was);
				}


				if (then) {
					$('div#pdp-buystack-then').show();
					$('div#pdp-buystack-then span').html(then);
				}
				if (now) {
					$('div#pdp-buystack-now').show();
					$('div#pdp-buystack-now span').html(now);
				}

				if (sale) {
					$('div#pdp-buystack-sale').show();
					$('div#pdp-buystack-sale span').html(sale);
				}
			} else {
				$('div#pdp-buystack-price').show();
				if (pdpBuyStack['json']['colorid'][product_id]['price'].length > 0) {
					$('div#pdp-buystack-price span').html(pdpBuyStack['json']['colorid'][product_id]['price'][0]['amount']);
				}
			}

		}


		var purchase;

		if (quantity < 1 && not_selected == false) {
			$('div#pdp-buystack-no-quantity').show();
			$('button#pdp-buystack-bag').hide();
			$('div#pdp-buystack-quantity').hide();
			$('div#pdp-buystack-prices').hide();

			if (pdpBuyStack['json']['colorid'][product_id]['notifiable'] == false) {
				$('#pdp-buystack-no-quantity .email').hide();
			} else {
				$('#pdp-buystack-no-quantity .email').show();
			}

		} else {
			$('div#pdp-buystack-no-quantity').hide();
			$('button#pdp-buystack-bag').show();
			$('div#pdp-buystack-quantity').show();
			$('div#pdp-buystack-prices').show();

			//Reset quantity if options are not selected
			if (quantity < 6 && not_selected == true) {
				quantity = 6;
			}

			for (x = 1; x <= quantity; x++) {
				purchase = purchase + '<option>' + x + '</option>';
			}

			$('select#pdp-buystack-amount').html(purchase);

			if (!$.browser.msie || $.browser.version >= 7) {
				$("#dk_container_pdp-buystack-amount").remove();

				/* Repaint Dropkick select */
				$('select#pdp-buystack-amount')
					.removeData('dropkick')
					.dropkick({
					theme: 'small',
					width: 5
				});
			}
		}

	},

	//this selects the color/product that we are to currently display
	selectColor: function (color) {
		pdpBuyStack.product_id = color; //the internal procuctid is a color id
		$('div#pdp-buystack-colors').html(pdpBuyStack.createColors(color));
	},

	getSKU: function (in_color, in_waist, in_length, in_size) {
		for (var sku in pdpBuyStack['json']['sku']) {
			if (pdpBuyStack['json']['sku'][sku]['colorid'] == in_color && ((pdpBuyStack['json']['sku'][sku]['waist'] == in_waist && pdpBuyStack['json']['sku'][sku]['length'] == in_length && in_waist != null && in_length != null) || (pdpBuyStack['json']['sku'][sku]['size'] == in_size && in_size != null))) {
				return sku;
			}
		}
	}

}

$('div.global-splash ul.global h2').live('touchstart', function () {
	if ($(this).parent().children('ul').children().css('display') == 'none') {
		$(this).parent().children('ul').addClass('open', 100);
		$(this).parent().children('ul').children().slideDown(200);
	} else {
		$(this).parent().children('ul').removeClass('open', 100);
		$(this).parent().children('ul').children().slideUp(200);
	}
});
$('div.global-splash ul.global li').live('mouseover', function () {
	$(this).children('ul').addClass('open', 100);
	$(this).children('ul').children().slideDown(200);
});

$('div.global-splash ul.global li').live('mouseleave', function () {
	$(this).children('ul').removeClass('open', 100);
	$(this).children('ul').children().slideUp(200);
});

//Pop up window for password change link
$('a.change-password-cta').live('click', function (evt) {
	evt.preventDefault();
	window_handle = window.open($(this).attr('href'), "", 'status=1, width=660, height=600, resizable=1, scrollbars=yes');
	window_handle.focus();
	/* selectivzrRedraw(); */
});







/* ==========================================================================

  Page events and bindings

========================================================================== */


/* */
(function ($, window, document, undefined) {
	/* */


	'use strict'


	/*
        APP stuff
    ========================================================================== */

	var APP = {


		start: function () {
			var self = this


			// store the content elem
			self.$content = $(document.body)

			self.$content

			// map each form to a validator
			.find('.js-form').map(self.validation)
				.end().end()

			// bind the character counter
			.find('.js-text-counter').each(self.characterCount)
				.end()

			// bind dropkick to `select`
			.find('.js-dropkick').dropkick()


			return self
		}, // start



		/*
            Bind a the character counter
        ========================================================================== */

		characterCount: function () {

			var $field = $(this)

			$field.charCounter({
				maxChars: 700,
				maxCharsWarning: 988,
				msgCharsLeft: $field.data('chars-left')
			})

			// trigger it once to show
			.trigger('keyup')
		},



		/*

            Map form Validation
            -------------------

            Forms can have custom validation events. To bind these events,
            add a `data-type` attribute to the form. Example:
                `data-type="__FORM_TYPE_HERE__"`


            Custom events can be attached to the form by checking the form type:
                `
                    if ( form.dataset.type === '__FORM_TYPE_HERE__' ) {
                        // start binding events here
                        // ...
                    }
                `

            The following functions are available to bind for custom form events:


            options.onLoad
            --------------

                A function to call on page load. The validator object is
                in the scope. Example:
                    `
                        options.onLoad = function( thisValidator ) {
                            // function goes here
                            // ...
                            console.log( thisValidator )
                        }
                    `


            options.onError
            ---------------

                A function to call on an error. The validator object is
                in the scope. Example:
                    `
                        options.onError = function( thisValidator ) {
                            // function goes here
                            // ...
                            console.log( thisValidator )
                        }
                    `


            options.onFieldError
            --------------------

                A function to call on a field error. The field itself
                and the validator object are in the scope. Example:
                    `
                        options.onFieldError = function( $field, thisValidator ) {
                            // function goes here
                            // ...
                            console.log( $field, thisValidator )
                        }
                    `


            options.beforeSubmit
            --------------------

                A function to call before a successful submit. The validator
                object is in the scope. Example:
                    `
                        options.onLoad = function( thisValidator ) {
                            // function goes here
                            // ...
                            console.log( thisValidator )

                            return ( true | false )
                        }
                    `

                This function can prevent form submission based on the
                `return` value.


            options.bindEvent
            -----------------

                A function that binds events to fields with `data-bind`. The
                field and the validator object are in scope. Example:
                    `
                        options.bindEvent = function( $field, thisValidator ) {
                            // function goes here
                            // ...
                            console.log( $field, $field.intent, thisValidator )
                        }
                    `


            options.callback
            ----------------

                A callback function called after a successful validation and
                the validator object is in scope. Example:
                    `
                        options.callback = function( thisValidator ) {
                            // function goes here
                            // ...
                            console.log( thisValidator )
                        }
                    `


            options.customValidate
            ----------------------

                A literal object that can be set up to validate a field with
                custom parameters. Example:
                    `
                        options.customValidate = {

                            __FIELD_DATA_TYPE__: function( $field, thisValidator ) {
                                
                                // function goes here
                                // ...
                                console.log( $field, thisValidator )

                                return ( true | false )
                            }
                        }
                    `

                The `return` value determines whether or not the field is valid.



            Scroll window position
            ----------------------

                Function `scrollPageTo` can be utilized for callbacks, etc. The
                function accepts two optional parameters: `position` & `speed`
                Example:
                    `
                        // scroll page to top at default speed
                        scrollPageTo()

                        // scroll page to 400px from top at 1000ms speed
                        scrollPageTo( 400, 1000 )

                        // scroll page to a jQuery object at default speed
                        scrollPageTo( $(__SOME_SELECTOR__) )
                    `


        ======================================================================== */

		forms: {


			//========================================================
			// Compare if new and confirm passwords match
			//========================================================

			compare_passwords: function (options) {

				options.onLoad = function (thisValidator) {
					var $field

					// go through the fields collection
					for (var i = 0, len = thisValidator.collection.length; i < len; i++) {

						$field = thisValidator.collection[i]

						// store the password fields
						if ($field[0].name === 'pwd' || $field[0].name === 'newPassword') {
							thisValidator.$passwordNew = $field
						} else if ($field[0].name === 'checkPwd' || $field[0].name === 'checkNewPassword') {
							thisValidator.$passwordConfirm = $field
						} else if ($field[0].name === 'currentPassword') {
							thisValidator.$password = $field
						}
					}

					// if thisValidator.[jQuery object] is NOT undefined proceed
					if (typeof thisValidator.$passwordNew !== 'undefined') {
						thisValidator.bindInlineValidation(thisValidator.$passwordNew, 'focusout.warningInline')
					}

					if (typeof thisValidator.$passwordConfirm !== 'undefined') {
						thisValidator.bindInlineValidation(thisValidator.$passwordConfirm, 'focusout.warningInline')
					}

					if (typeof thisValidator.$password !== 'undefined') {
						thisValidator.bindInlineValidation(thisValidator.$password, 'focusout.warningInline')
					}

				}


				options.customValidate = {
					password_confirm: function ($field, thisValidator) {
						return $field.val() === thisValidator.$passwordNew.val()
					}
				}

			}, // compare_passwords


			//========================================================
			// Generic success method
			//========================================================

			generic_success: function () {

				APP.$content.find('.js-box-content').addClass('hidden').end()
					.find('.js-box-success').removeClass('hidden')
				scrollPageTo(0)
			}, // generic_success



			//========================================================
			// Checkout
			//========================================================

			form_checkout_signin: function (options) {
				
				options.customValidate = {
					postalCode: function ($field, thisValidator) {
						var thisValue = $field.val(),
							len = 0,
							i = 0;
							
						if (typeof postalRegex === 'undefined') {
							/* If no mathing patterns are present, allow to pass */
							return true;
						}
						
						/* Look through negative patterns first */
						len = postalRegex.reject.length;
						for (i = 0;i<len;i++){
							if (thisValue.match(postalRegex.reject[i])) { 
								return false; 
							}
						}
						
						/* Now see if it matches any of the accepted patterns */
						len = postalRegex.accept.length;
						for (i = 0;i<len;i++){
							if (thisValue.match(postalRegex.accept[i])) { 
								return true; 
							}
						}
						
						/* If no valid matches, return false */
						return false;
					}
				}
				
				//Checkout - Toggle Address form based on checkbox
				var checkSameAddressCheckbox = function (reset) {
					if ($('#addrsame-chkbox').is(':checked')) {
						$('.billing ul').filter(":first").addClass('same-address');

						//Handle Selectbox (Get the same value selected in shipping)
						$("#billing-saved-addresses").val($("#shipping-saved-addresses").val());
						if ($("#shipping-saved-addresses").val() == 'add') {
							$(".billing .dk_label").html('Add a new billing address');
							$(".billing .nickname").show();
						} else {
							$(".billing .dk_label").html($(".shipping .dk_label").html());
							$(".billing .nickname").hide();
							$(".shipping .nickname").hide();
						}
						$(".billing .dk_options_inner li").each(function () {
							$(this).removeClass('dk_option_current');
							if ($(this).text() == $(".billing .dk_label").text()) {
								$(this).addClass('dk_option_current');
							}
						});

						//Copy all val from billing form
						$('.shipping ul input').each(function () {
							var field = $(this).attr('id').substring($(this).attr('id').indexOf('-') + 1);
							$('#billing-' + field).val($(this).val());
							//self.validateField($('#billing-' + field),true,true);
						});

						//Set fields to disable and update styles
						$('.billing ul input').each(function () {
							$(this).attr('disabled', 'disabled');

							if ($(this).val().length > 0) {
								$(this).addClass('entered');
							}
						});

					} else {
						$('.billing ul').filter(":first").removeClass('same-address');

						$('.billing ul input').each(function () {
							$(this).removeAttr('disabled');
							$(this).removeClass('entered');
							if (reset) {
								$(this).attr('value', '');

								var $option = $('#dk_container_billing-saved-addresses .dk_options a[data-dk-dropdown-value="add"]');
								$option.trigger("click");
							}
						});

					}
				}

				//  Checkout - Toggle Address field values based on Saved Addresses Selection
				var updateFieldsFromSavedAddresses = function (parentNode, addressName) {
					var parentNodeClass = $(parentNode).attr('class'),
						jsonChosenObject = jsonObject[parentNodeClass],
						inputFields = $(parentNode).find('input[type="text"]'),
						jsonChosenAddress;

					$(jsonChosenObject).each(function (index, element) {
						if (element.id === addressName) {
							jsonChosenAddress = element;
						}
					});

					$(inputFields).each(function (index, element) {
						$(element).val(jsonChosenAddress[$(element).data('updateref')]);
					});
				}

				//  Checkout - Toggle Address field values based on Saved Addresses Selection
				var clearFieldsAddAddresses = function (parentNode) {
					var inputFields = $(parentNode).find('input[type="text"]');
					$(inputFields).each(function (index, element) {
						$(element).val('');
					});
				}

				//Checkout - Custom Select Dropdown
				$('.nickname inputshipping-saved-addresses').val($('#shipping-saved-addresses').val());
				$('#shipping-saved-addresses.dropdown,#billing-saved-addresses.dropdown').dropkick({
					change: function (value, label) {
						if (value == 'add') {
							$(this).parents('fieldset').find('.nickname').show();
							$(this).parents('fieldset').find('.nickname input').val($('.nickname input').attr('data-value'));
							clearFieldsAddAddresses($(this).parents('fieldset'));
							checkSameAddressCheckbox(false);
						} else {
							$(this).parents('fieldset').find('.nickname').hide();
							clearFieldsAddAddresses($(this).parents('fieldset'));
							updateFieldsFromSavedAddresses($(this).parents('fieldset'), $(this).val());
							checkSameAddressCheckbox(false);
						}
					}
				});


				//Checkout - Same Address checkbox
				checkSameAddressCheckbox(false);

				$('#addrsame-chkbox').live('click', function () {
					checkSameAddressCheckbox(true);
				});

				//Checkout - Copy inputs from shipping to billing
				$('.shipping input').live('keyup change', function (e,self) {
					if ($('#addrsame-chkbox').is(':checked')) {
						var field = $(this).attr('id').substring($(this).attr('id').indexOf('-') + 1);
						$('#billing-' + field).val($(this).val());
					}
				});

				//Change styles of inputs based on input/focus/blur
				$('.checkout .sendbill input, .checkout .contact input').live('focus', function () {
					$(this).removeClass('entered');
				}).live('blur', function () {
					if ($(this).val().length > 0) {
						//Change style of current input
						$(this).addClass('entered');
					}

					//If same address checked, change the corresponding billing input style
					if ($('#addrsame-chkbox').is(':checked')) {
						var field = $(this).attr('id').substring($(this).attr('id').indexOf('-') + 1);
						if ($(this).val().length > 0) {
							$('#billing-' + field).addClass('entered');
						} else {
							$('#billing-' + field).removeClass('entered');
						}
					}
				});

				//Checkout - Gift wrap checkbox
				function showGiftWrap() {
					if ($('#giftwrap-chkbox').is(':checked')) {
						$('#giftwrap-note-label, #giftwrap-note').css('display', 'block');
					} else {
						$('#giftwrap-note-label, #giftwrap-note').css('display', 'none');
					}
				}
				$('#giftwrap-chkbox').live('click', function () {
					showGiftWrap();
				});
				if ($('#giftwrap-chkbox').is(':checked')) {
					showGiftWrap();
				}
			}, // form_checkout_signin



			//========================================================
			// Checkout
			//========================================================

			form_checkout: function (options) {

				//// console.log( options )
			},



			//========================================================
			// Forgot Password
			//========================================================

			form_forgot_password: function (options) {

				var self = this

				options.callback = function () {
					self.generic_success()
				}
			},


			//========================================================
			// Feedback
			//========================================================

			form_feedback: function (options) {

				var self = this

				options.bindEvent = function ($field, thisValidator) {

					var $form = thisValidator.$form

					// intention is to make the email required

					if ($field.intent.action === 'email_required') {

						// store the target
						$field.$target = $field.$target || $form.find('[data-type=email]')

						// bind the event to the field
						$field.on('change.intent', function () {

							var is_required = $field.intent.value

							$field.$target[0].dataset.required = is_required

							if (is_required === 'false') {
								thisValidator.warningRemove($field.$target)
							}
						})
					}
				}

				options.callback = function () {
					self.generic_success()
				}
			}, // form_feedback



			//========================================================
			// Profile
			//========================================================

			form_update_profile: function (options) {

				options.callback = function (thisValidator) {

					thisValidator.$form.find('.js-success').show()
					scrollPageTo(0)
				}
			}, // form_update_profile



			//========================================================
			// Track order
			//========================================================

			form_track_order: function (options) {

				options.onError = function (thisValidator) {
					scrollPageTo($('#track-order'))
				}

				options.callback = function () {
					APP.$content.find('.generic-success').show()
				}
			}, // form_track_order



			//========================================================
			// Email a friend
			//========================================================

			form_email_friend: function (options) {

				options.onLoad = function (thisValidator) {

					// initialization for email friend modal
					APP.$content.find('.link-lightbox-email').each(function () {
						var opts = $.extend({}, window.fancyboxOptions, {
							width: 560,
							closeEffect: 'elastic',
							afterClose: function () {
								// reset the form
								thisValidator.resetForm()

								// hide the success and show the form
								APP.$content.find('.js-box-content').removeClass('hidden').end()
									.find('.js-box-success').addClass('hidden');
							}
						})
						$(this).fancybox(opts)
					})
				}

				options.callback = function (thisValidator) {

					// show the success and hide the form
					APP.$content.find('.js-box-content').addClass('hidden').end()
						.find('.js-box-success').removeClass('hidden');

					// scroll up to the success message
					scrollPageTo($('#email-success'))
				}
			}, // form_email_friend



			//========================================================
			// Change password
			//========================================================

			form_password_change: function (options) {
				this.compare_passwords(options)
			}, // form_password_change



			//========================================================
			// Post-purchase confirmation
			//========================================================

			form_post_purchase: function (options) {

				this.compare_passwords(options)
			}, // form_post_purchase



			//========================================================
			// Register now
			//========================================================

			form_register_now: function (options) {

				this.compare_passwords(options)

				options.onError = function () {
					scrollPageTo($('#registerForm'))
				}
				/* Not necessary, since we want the form to POST
                                            options.callback = function() {
                                                APP.$content.find('.generic-success').show()
                                                scrollPageTo( $('#create-account') )
                                            }
                                            */

				options.callback = function () {
					// Brighttag call
					// console.log('Brighttag: createAccount');
					$(window).trigger("createAccount", ['', completeResponse]);
				}
			}, // form_register_now



			//========================================================
			// Account profile
			//========================================================

			form_account_profile: function (options) {
				/* Not necessary, since we want the form to POST
                                            options.callback = function( thisValidator ) {
                                                APP.$content.find('.generic-success').show()
                                                scrollPageTo( $('.nav-myaccount') )
                                            }
                                            */
			}, // form_account_profile



			//========================================================
			// Contact form
			//========================================================

			form_contact: function (options) {

				var self = this

				options.onLoad = function (thisValidator) {

					// find all the dropkicks and bind change events

					thisValidator.$form.find('.js-dropkick').dropkick({
						change: function (value, label) {
							if (this[0].value !== '-1') {

								thisValidator
								// remove the warning from the select
								.warningRemove(this)

								// remove the warning from the dropkick
								.warningRemove(this.siblings('.dk_container'))
							}
						}
					})
				}

				options.onFieldError = function ($field, thisValidator) {

					// if the dropkick plugin has been attached to `select`
					if ($field[0].type === 'select-one') {
						$field.siblings('.dk_container').addClass('warning')
					}
				}

				options.callback = function () {
					self.generic_success()
				}
			} // form_contact



		}, // forms

		validation: function (i) {

			var options = {},
			form = this,
				validate = Validator


				// for IE
				form.dataobj = form.dataset || $(form).data()


				// bind validations based on form type
			if (!form.dataobj.type) {
				console.warn('Form `data-type` has not been declared.')
			} else {
				try {
					APP.forms[form.dataobj.type](options)
				} catch (e) {
					//console.log('good')
				}
			}


			// let the validation begin
			validate(form, options)
		} // validation


	}, // APP




	/* ==========================================================================

        Form validation
        ===============

        • Forms should have the class `js-form`
        • Submit buttons do not need an additional class

        • The validator accepts 2 arguments: `form` and `options`
            - form: the actual form element (not the jQuery object)
            - options: can contain options for specific forms


        Form errors
        -----------

        • General form error should have the class `js-form-warning hidden`
        • Fields with inline errors should have the following attribute:
            `data-warning="__WARNING_MESSAGE_HERE__"`


        Multiple errors
        ---------------

        • Fields can have a multiple warnings based on `data-type`. Example:
            `data-type="__DATA_TYPE_HERE__"`
            `data-warning="__WARNING_MESSAGE_HERE__"`

        • Check `self.validateField` for more info


        Form fields
        -----------

        • Required fields should have the attribute `data-required="true"`
        • Optional fields that require validation if filled in (eg email),
            should have the attribute `data-type="__DATA_TYPE_HERE__"`

        • Check `self.validateField` for more info


        Bind events to fields
        ---------------------

        • Bind events to fields with the attribute `data-bind` with the
            following format (without line breaks & spaces):
                `
                    data-bind='{
                        "type":     "form_intent",    // required
                        "action":   "__UNIQUE_ACTION_NAME_HERE__",
                        "value":    "__VALUE_HERE__"
                    }'
                `

        • Check `options.bindEvent` for more info


    ========================================================================== */

	Validator = function (form, options) {
		var self = {}



		/* 

            Validate required fields
            ------------------------

            • Validated using the attribute `data-required="true"`
            • Required fields can be:
                - textarea
                - input[type=text]
                - input[type=password]
                - input[type=checkbox]
                - select


            Validate optional fields
            ------------------------

            • Validated using the attribute `data-type="__FIELD_TYPE_HERE__"`
            • Optional fields can be:
                - input[type=text]

            • If field is empty, it passes through. Otherwise it will validate
                using the `data-type` as a reference. Example:
                    `
                        data-type="email"   // validated against email regEx
                    `


            Select drop-downs
            -----------------

            • If a `select` element is required, the option(s) triggering
                an error would look something like this:
                    `
                        <option value="-1">__DEFAULT_VALUE_HERE__</option>
                    `


            Multiple emails
            ---------------

            • Validate multiple emails with `data-type` attribute:
                `
                    data-type="emails"      // emails separated by comma
                `


        ======================================================================== */

		self.validateField = function ($field, validity, forceCheck) {

			var fieldType = $field[0].type,
				fieldValue = (fieldType === 'checkbox' || fieldType === 'radio') ? $field[0].checked : $field[0].value,
				fieldDataType = $field.data('type'),
				fieldDataWarning = $field.data('type-warning'),
				fieldCheck



				// if the field has a value and there's a custom field validator
			if (fieldValue && self.options.customValidate && self.options.customValidate[fieldDataType]) {

				try {

					// check if the field matches custom validation
					fieldCheck = self.options.customValidate[fieldDataType]($field, self)

					if (!fieldCheck) {
						self.warningInlineShow($field, fieldDataWarning)
						return false
					} else {
						self.warningInlineRemove($field)
					}
				} catch (e) {
					// console.log( e, fieldCheck )
				}
			}


			/** Textareas **/

			if (fieldType === 'textarea' && !fieldValue) {
				self.warningShow($field)
				return false
			}


			/** Input fields **/

			else if (fieldType === 'text') {

				// if there's no value and no data-type
				if (!fieldValue && !fieldDataType) {
					self.warningShow($field, null, true)
					return false
				}

				// if there's no value but has a data-type
				else if (!fieldValue && fieldDataType) {
					self.warningShow($field)
					return false
				}

				// if there's a value and a data-type
				else if (fieldValue && fieldDataType) {

					if (fieldDataType === 'email') {
						var fieldValueTokenized = fieldValue.split('@'),
							fieldValueUserName = fieldValueTokenized[0],
							fieldValueDomainName = fieldValueTokenized[1];

						// validate it against regex and less than 256 chars in length
						if (!global.regex_email_username.test(fieldValueUserName) || !global.regex_email_domainname.test(fieldValueDomainName) || fieldValueUserName.length > 64 || fieldValue.length > 256) {
							self.warningInlineShow($field, fieldDataWarning, forceCheck)
							return false
						}
					} else if (fieldDataType === 'emails') {
						var emails = fieldValue.split(',');

						for (var i = 0, len = emails.length; i < len; i += 1) {
							email = $.trim(emails[i]);
							var emailTokenized = email.split('@'),
								emailUserName = emailTokenized[0],
								emailDomainName = emailTokenized[1];

							// console.log( email )

							// validate it against regex
							if (email && !global.regex_email_username.test(emailUserName) || !global.regex_email_domainname.test(emailDomainName) || emailUserName.length > 64) {
								self.warningInlineShow($field, fieldDataWarning, forceCheck)
								return false
							}
						}
					} else {
						// console.log( fieldDataType )
					}
				} else {
					// console.log( 'some other text type', fieldDataType, $field )
				}

			} // fieldType = text



			/** Passwords **/

			else if (fieldType === 'password') {


				// if there's no value
				if (!fieldValue) {
					self.warningShow($field)
					return false
				}


				// if a new password is too short
				else if (fieldValue.length < 8 && fieldDataType === 'password_new') {
					self.warningShow($field, fieldDataWarning.password_short, forceCheck)
					return false
				}


				// if password length is fine
				else {

					// if it's a new password and doesn't match regex
					if (fieldDataType === 'password_new' && !regEx.password.test(fieldValue)) {
						self.warningShow($field, fieldDataWarning.password_insecure, forceCheck)
						return false
					} else {
						//////console.log( $field )
					}

				}


			} // fieldType = password



			/** Checkboxes **/

			else if (fieldType === 'checkbox') {

				if (!fieldValue) {
					self.warningShow($field)
					return false
				}
			}



			/** Select drop-downs **/

			else if (fieldType === 'select-one') {

				if (fieldValue === "-1") {
					self.warningShow($field)
					return false
				}
			} else {

				// by now, either the field is valid
				// or a validation method hasn't been written


				//////console.log( 'this field seems valid' )
				//////console.dir( $field )
			}

			self.warningInlineRemove($field)
			return validity

		} // self.validateField



		/** Warning template **/

		self.$warningTemplate = (function () {
			return $('<div class="form-error-box error js-error"><span class="arrow"></span><p class="desc js-msg"></p></div>')
		})()



		/** Show form warning and invoke onError **/
		self.warn = function () {

			// Clear away any previous success messages
			APP.$content.find('.generic-success').hide();

			// show the form warning
			self.$formWarning.show()

			// call the on error function
			if (self.options.onError) {
				self.options.onError(self)
			}

			// otherwise scroll to the form warning
			else {
				scrollPageTo(self.$formWarning)
			}

			return self
		}



		/** Show warning on given field **/

		self.warningShow = function ($field, dataWarning, forceWarning) {

			var origMessage = dataWarning || $field.data('warning'),
				dataType = $field.data('type'),
				warning = self.$warningTemplate.clone()

			var message = $('<div />').html(origMessage).text(); // Decode HTML entities
			
			// if there is already an error
			if ($field.prev('.js-error').length || $field.parents('.same-address').length) {

				// if there's a need to force update a warning message only
				if (forceWarning) {
					$field.prev('.js-error').find('.js-msg').text(message)
				}

				return self
			}


			// check if there's a warning message to show
			if (!message) {
				//console.error( 'Validation fail: `' + $field[0].type + '` for `' + $field[0].name + '` has no `data-warning`.' )
				return self
			}


			// call the on field warning function
			if (self.options.onFieldError) {
				self.options.onFieldError($field, self)
			}


			// bind the warning remover
			warning.remover = function () {
				self.warningRemove($field)
			}


			warning
			// put the message in the warning
			.find('.js-msg').text(message)
				.end()

			// paint the warning before the field
			.insertBefore($field)


			// check if there needs to be inline check & x marks
			if (dataType && dataWarning) {

				//console.log( 'inserting here', dataType, dataWarning )

				/* This causes an infinite loop, since it calls self.warningShow()
				 * self.warningInlineShow($field, warning)
				 */
			}


			// if no inline warning icons needed
			else {

				// bind listener to remove warning
				$field.addClass('warning').on('keydown.warning change.warning', warning.remover)
			}

			return self
		}


		/** Remove the warning for a given field **/

		self.warningRemove = function ($field) {

			$field
			// remove the warning class
			.removeClass('warning')

			// switch off the listner
			.off('.warning')

			// remove the error
			.prev('.js-error').remove()


			// hide the general form warning
			self.$formWarning.hide()

			return self
		}



		/** Show the inline warning for a given field **/

		self.warningInlineShow = function ($field, warning, forceCheck) {

			// bind the inline warning remover
			$field.removerInline = function () {
				self.bindInlineValidation($field)
			}


			$field
			// add the warning state
			.addClass('warning')

			// switch off other warning listeners
			.off('.warning .warningInline')

			// bind the inline validator listeners
			.on('validate.warningInline', $field.removerInline).trigger('validate')


			// show the warning icon
			if ($field.next('.js-field-icon').length) {
				$field.next('.js-field-icon').removeClass('icon-valid').addClass('icon-warning')
			}

			// add the warning icon if it's not there
			else {
				$field.after('<span class="js-field-icon icon-warning"></span>')
			}


			self.warningShow($field, warning)

			return self
		}


		/** Remove the inline warning for a given field **/

		self.warningInlineRemove = function ($field) {

			// bind the warning remover
			$field.warningRemover = function () {
				self.warningRemove($field)
			}


			$field
			// bind the warning listeners
			.on('keydown.warning change.warning', $field.warningRemover)

			// change the status indicator
			.next('.js-field-icon').removeClass('icon-warning'); //.addClass('icon-valid')


			self.warningRemove($field)

			return self
		}



		/** Reset the form fields and errors **/

		self.resetForm = function () {


			// remove all warnings and errors
			self.$form.find('.warning').removeClass('warning').end()
				.find('[type=text], [type=password], textarea').prop('value', function () {
				this.value = this.defaultValue
			}).end()
				.find('[type=checkbox], [type=radio]').prop('checked', function () {
				this.checked = this.defaultChecked
			}).end()
				.find('.form-error-box').remove()

			self.$formWarning.hide()

			return self
		}



		/** Bind the validation to the submit buttons **/

		self.bindValidation = function ($button, form) {


			var beginValidation = function (e) {

				var options = self.options,
					doSubmit = true,
					is_valid = true

					e.preventDefault()

					// recollect the fields
					self.collectCycle(self.$form[0])


					// go through each field in the collection and validate
				for (var i = 0, len = self.collection.length; i < len; i += 1) {
					is_valid = self.validateField(self.collection[i], is_valid)
				}


				// if not valid in the end
				if (!is_valid) {

					// call the warning function
					self.warn()
				}

				// if the form is valid
				else {


					// check if there's a call to make before submit
					if (options.beforeSubmit) {
						doSubmit = options.beforeSubmit(self)
					}


					// if it's no longer safe to submit

					if (!doSubmit) {

						// call the warning function
						self.warn()
					}


					// otherwise start submission
					else {

						//console.log( 'ready to submit :)', self.$form );

						// call the callback function
						if (options.callback) {
							options.callback(self)
						}

						/* Removed. Can't see how this logic is ever true, since
                         * there's no data('post') defined in JS or on the form tag.

                            // do a post submit if needed
                            if ( self.$form.data('post') === true ) {
                                self.$form.submit();
                            }
                            
                        */
						self.$form.submit();
					}
				}

			} // beginValidation


			$button
			// set validation binding to true
			.data('validatorBinding', true)

			// begin validation on click
			.on('click', beginValidation)

			return self
		} // bindValidation



		/** Bind the inline validation for a given field **/

		self.bindInlineValidation = function ($field, events) {

			var beginInlineValidation = function () {

				$field.is_valid = self.validateField($field, true, true)

				if ($field.is_valid) {
					self.warningInlineRemove($field)
				} else {
					self.warningInlineShow($field)
				}
			}

			// initially set field as valid
			$field.is_valid = true

			// check which events to bind
			events = events || 'keyup.warningInline change.warningInline'

			// bind the events
			$field.on(events, beginInlineValidation)

			return self
		} // bindInlineValidation

		self.displayAlertsFromServerValidation = function () {
			var target = {},
				origMsg = '',
				errStr = '';

			/* If we have a JSON string present from server-side validation errors, we have to parse it */
			if (typeof (errorsStr) != 'undefined' && errorsStr != null && errorsStr.length > 0) {
				var errorsJSON = JSON.parse(errorsStr);
				for (var errorField in errorsJSON) {
					target = $('[name="' + errorField + '"]');

					/* Save the inline warning message for later client-side validation */
					origMsg = target.data('warning');

					/* Switch warning message to the message supplied in the JSON obj */
					errStr = $('<div />').html(errorsJSON[errorField]).text(); // Decode HTML entities
					target.data('warning',errStr);

					/* Trigger the field's validation routine */
					self.warningInlineShow(target)

					/* Swap out the server-side message for the original client-side message */
					target.data('warning', origMsg);
				}
			}
		}



		/** Cycle through the fields to find those with bindings **/

		self.bindIntents = function (form) {

			var $field


			// cycle through all the form fields
			for (var i = 0, len = form.length; i < len; i += 1) {

				$field = $(form[i])
				$field.intent = $field.data('bind')

				// bind events the fields with a bind request
				if (self.options.bindEvent && $field.intent) {
					self.options.bindEvent($field, self)
				}
			}


			return self
		}




		/** Add a field to the collection **/

		self.collectAdd = function ($field) {
			self.collection.push($field)
			return self
		}



		/** Check if a field needs to be collected **/

		self.collectCheck = function ($field) {
			var addField = false


			// if the field is required, add to collection
			if ($field.data('required') === true) {
				addField = true
			}

			// if field isn't required, but has a value and a data type
			else if ($field[0].value && $field.data('type')) {
				addField = true
			}

			// bind events to the submit button
			else if ($field[0].type === 'submit' || $field[0].type === 'button') {

				// if the button doesn't have a binding, then bind validation
				if (!$field.data('validatorBinding')) {
					self.bindValidation($field, form)
					self.$buttons = self.$buttons.add($field)
				}
			}


			// if the field needs to be added
			if (addField) {
				self.collectAdd($field)
			}


			return self
		}



		/** Cycle through the fields in a form to add to collection **/

		self.collectCycle = function (form) {

			var $field

			// create an emtpy collection for this form
			self.collection = []

			// create an empty jQuery collection for buttons
			self.$buttons = self.$buttons || $()


			// cycle through all the form fields
			for (var i = 0, len = form.length; i < len; i += 1) {

				$field = $(form[i])

				// check and collect the fields
				self.collectCheck($field)
			}

			return self
		}



		/** Initialize the Validator **/

		self.initialize = (function () {

			// store the form
			self.$form = $(form)

			// store the general form warning
			self.$formWarning = self.$form.find('.js-form-warning')

			// store the options
			self.options = options


			// cycle through all the fields in this form to collect
			self.collectCycle(form)

			// do the bindings on the form fields
			self.bindIntents(form)

			// invoke anything that needs to be called on load
			if (self.options.onLoad) {
				self.options.onLoad(self)
			}

			return self
		})()


		//console.log( 'Validator', self )
		self.displayAlertsFromServerValidation();

		return self

	}, // Validator



	/** Some regex **/

	regEx = {
		email_username: /^[_A-Za-z0-9àáâäãåèéêëìíîïòóôöõøùúûüÿýñçčšžÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÛÜŸÝÑßÇŒÆČŠŽ∂ð]+(([.])?([!#$%&'*+/=?^_`{|}~-][.]?)*([_A-Za-z0-9àáâäãåèéêëìíîïòóôöõøùúûüÿýñçčšžÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÛÜŸÝÑßÇŒÆČŠŽ∂ð]+))*$/i,
		email_domainname: /^((([àáâäãåèéêëìíîïòóôöõøùúûüÿýñçčšžÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÛÜŸÝÑßÇŒÆČŠŽ∂ð\w!#$%&'*+\-/=?\^_`{|}~]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$/i,
		password: /(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])((?=[^!@#\$%]*[!@#\$%])|(?=[^0-9]*[0-9]))/

	},



	/*
        Scroll the page to a specific vertical position
    ======================================================================== */

	scrollPageTo = function (position, speed) {

		// set the defaults
		position = position || 0
		speed = (speed === undefined || speed === null) ? 250 : speed


		// if it's an object, get the top position
		if (typeof position === 'object') {
			position = position.first().offset().top - 40
		}


		// begin the scrolling
		$('body, html').animate({
			scrollTop: position
		}, speed)
	};



	/*
        Start 'er up
    ========================================================================== */

	APP.start();

	/* */
})(jQuery, window, document);
/* */




/* ================================
   Runway : The DOM is ready
   ================================ */

$(function () {

	//========================================================
	// Fit Tool
	//========================================================

	if ($('#elevator-data[data-elevator]').length > 0 && $('.fit-tool-cover, .curve-id-static-header ').length > 0) {
		adjustElevatorTopRest();
	}

	if ($('body').find('.fit-tool').length) {

		var womensFitToolSlideCount = ($('.fit-tool-dynamic.womens-fit-tool ul.slides > li').length - 1) | 0;

		$('.fit-tool-dynamic.womens-fit-tool').flexslider({
			animation: 'slide',
			slideshowSpeed: 10000,
			animationLoop: true,
			slideshow: false,
			directionNav: true,
			controlNav: true,
			useCSS: false,
			manualControls: ".flex-control-nav li a",
			startAt: womensFitToolSlideCount,
			ignoreEventBug: true,
			start: function (slider) {

				if ($('#elevator-data[data-elevator]').length > 0) {
					adjustElevatorTopRest();
				}

				$('.flex-direction-nav a').addClass('hidden');
			},
			after: function (slider) {

				$('.flex-direction-nav a').removeClass('hidden');
				$('.flex-control-nav').addClass('activated');

				var sliderCount = (slider.count - 1);

				//Sees if initial slide exists
				if ($(slider.slides[sliderCount]).find('.fit-tool-cover').length > 0) {
					//removed initial slide. We always know that initial slide is the one removed
					slider.removeSlide(slider.slides[sliderCount]);

					//flexslider does not help remove manual controls so we needed to do this manually
					var manualControlsLength = ($(slider.manualControls).length - 1);
					$($(slider.manualControls)[manualControlsLength]).parent().remove();
					slider.update();

					$('.fit-tool-dynamic').removeClass('initialize');
					//$('.flex-control-nav').removeClass('hidden');
				}

			}
		});


		$('.fit-tool .mens-fit-tool').yassa({
			manualControls: '.manual-control-nav > li a',
			hasCoverSlide: true,
			init: function () {
				if ($('#elevator-data[data-elevator]').length > 0) {
					adjustElevatorTopRest();
				}
			}
		});
	}


	//========================================================
	// Curve ID
	//========================================================

	if ($('body').find('.curve-id-initial').length) {

		var curveID = {

			allPanels: $('#waist-hip-seat form .curve-id-steps .fieldset-content'),
			allPanelContainers: $('#waist-hip-seat form .curve-id-steps'),

			init: function () {

				$('.lt-ie9 label img, .ie9 label img').on('click', function () {
					var labelID = $(this).parent().attr('for');
					$('input#' + labelID).prop('checked', true);
					//console.log('images clicked');

					//IE9 seems to not like the event(s) 'change/propertychange' so this if statement below was needed to proceed through each step
					if ($('input#' + labelID).attr('checked') && $('html').hasClass('ie9')) {
						if ($('input#' + labelID).attr('name') == 'waist') {
							curveID.stepTo($('input#' + labelID), 'change', 'stepOne');
						} else if ($('input#' + labelID).attr('name') == 'seat') {
							curveID.stepTo($('input#' + labelID), 'change', 'stepTwo');
						}
					}
				});

				//using javascript to enchance/ alter radio buttons. Makes the form degrade gracefully
				$('.curve-id-steps input[type="radio"], #your-curve-id input[type="submit"]').addClass('js-enhanced');

				//hide elements that are not marked .active
				curveID.allPanelContainers.not('.active')
					.find('.fieldset-content')
					.hide();


				//this is used to understand the locale of the curve-id page and propagate it through to the results page
				//grabs hidden element
				var localeCode = document.getElementsByName("localeCode") || 'no locale set',
					//grabs pathname either '/package/' || '/[xx]/[xx]_[xx]'
					curvePath = window.location.pathname.substr(0, 9); // '/package/' || '/[xx]/[xx]_[xx]'

				//if page is in production
				if (curvePath !== '/package/') {

					//regex for '/[xx]/[xx]_[xx]'
					var re = '(\\/)((?:[a-zA-Z][a-zA-Z]+))(\\/)((?:[a-zA-Z][a-zA-Z]+))(_)((?:[a-zA-Z][a-zA-Z]+))';

					//match pathname.substr(0,9) with regex
					var found = curvePath.match(re) || '';

					//if match is found
					if (found.length > 0 && found[0].length > 0) {

						//format pathname.substr(0,9) from '/[xx]/[xx]_[xx]' to '[xx]_[xx]_[xx]'
						curvePath = curvePath.substr(1); // remove 0
						curvePath = curvePath.substr(0, 2) + '_' + curvePath.substr(3); // remove 2

						//replace value of hidden input with curvePath
						$(localeCode).attr('value', curvePath);

					}
				}

				//listen for user's waist/seat anwser
				$('input[name="waist"], input[name="seat"]').on($.browser.msie ? 'propertychange' : 'change', function (event) {

					//console.log(event.type);

					if ($(this).attr('name') == 'waist') {
						curveID.stepTo(this, event, 'stepOne');
					} else if ($(this).attr('name') == 'seat') {
						curveID.stepTo(this, event, 'stepTwo');
					}
				});

				$('#step-1-waist-to-hips h2').on('click', function () {
					if (!$(this).hasClass('active')) {
						curveID.transition(0);
					}
				});

			},

			clearForm: function () {

				$('.fieldset-content ul li').removeClass('active-selection');

				$(':input').each(function () {
					this.checked = false
				});
			},


			transition: function (step) {

				if (step == 0 || step == '0') {
					curveID.clearForm();

					var replacementText = $('#step-1-waist-to-hips h2').attr('data-title');

					$('#step-1-waist-to-hips h2 span').fadeOut(function () {

						$(this).text(replacementText);

						$(this).fadeIn();

					});

				}

				if (!$(curveID.allPanels[step]).parent().hasClass('active')) {

					curveID.allPanelContainers.removeClass('active')
						.addClass('disabled')
						.find('.fieldset-content')
						.slideUp();

					$(curveID.allPanels[step])
						.slideDown()
						.parent()
						.addClass('active')
						.removeClass('disabled');
				}


			},

			stepTo: function (target, event, whereTo) {

				var $this = $(target);
				var event = event || '';

				//STEP 1
				if (whereTo == 'stepOne') {

					var allInputParents = $('#step-1-waist-to-hips .fieldset-content ul li'),
						replacementText = $this.parent().find('label span').text();

					$('#step-1-waist-to-hips h2 span').fadeOut(function () {

						$(this).text(replacementText)

						$(this).fadeIn();

					});



					highlight();
					curveID.transition(1);

					//STEP 2
				} else if (whereTo == 'stepTwo') {

					var allInputParents = $('#step-2-seat .fieldset-content ul li');

					highlight();
					curveID.submitCurve();
				}

				function highlight() {
					allInputParents.removeClass('active-selection');
					$this.parent().addClass('active-selection');
				}

			},

			submitCurve: function () {
				$('#your-curve-id').submit();
			}

		};

		curveID.init();

	}

	if ($('body').find('.curve-id-result').length) {

		function getParameterByName(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#]*)",
				regex = new RegExp(regexS),
				results = regex.exec(window.location.search);
			if (results == null) {
				return "";
			} else {
				return decodeURIComponent(results[1].replace(/\+/g, " "));
			}
		}

		//grabs pathname either '/package/' || '/[xx]/[xx]_[xx]'
		var curvePath = window.location.pathname.substr(0, 9), // '/package/' || '/[xx]/[xx]_[xx]'
			localeCode = '';

		//if page is in production
		if (curvePath !== '/package/') {

			//regex for '/[xx]/[xx]_[xx]'
			var re = '(\\/)((?:[a-zA-Z][a-zA-Z]+))(\\/)((?:[a-zA-Z][a-zA-Z]+))(_)((?:[a-zA-Z][a-zA-Z]+))';

			//match pathname.substr(0,9) with regex
			var found = curvePath.match(re) || '';

			//if match is found
			if (found.length > 0 && found[0].length > 0) {

				//format pathname.substr(0,9) from '/[xx]/[xx]_[xx]' to '[xx]_[xx]_[xx]'
				curvePath = curvePath.substr(1); // remove 0
				curvePath = curvePath.substr(0, 2) + '_' + curvePath.substr(3); // remove 2

				//set localeCode to curvePath
				localeCode = curvePath.toLowerCase();

			}

		} else {

			localeCode = getParameterByName('localeCode').toLowerCase(); //localeCode

		}

		var resultObj = {
			"0": ["c1", "c2", "c2", "c3"],
			"1": ["c2", "c2", "c3", "c3"],
			"2": ["c2", "c3", "c3", "c4"],
			"3": ["c3", "c3", "c4", "c4"]
		},

		userWaist = getParameterByName('waist').substr(1) || '',
			userSeat = getParameterByName('seat').substr(1) || '',
			userCurveID = resultObj[userWaist][userSeat] || '';
		userCurveResult = resultShop[localeCode][userCurveID]["curve"] || 'Undefined';

		switch (userCurveID) {
			case 'c1':
				$('.curve-result#slight-curve').show();
				break;
			case 'c2':
				$('.curve-result#demi-curve').show();
				break;
			case 'c3':
				$('.curve-result#bold-curve').show();
				break;
			case 'c4':
				$('.curve-result#supreme-curve').show();
				break;
			default:
				//do nothing
		}

		//using javascript to enchance/ alter radio buttons. Makes the form degrade gracefully
		$('.shop-options input[type="radio"]').addClass('js-enhanced');

		var shopCurve = {

			$shopOptions: $('.shop-options li'),
			userShopOptionsObj: resultShop[localeCode][userCurveID]["shopOptions"],
			visibleTank: [],
			optionsTank: [],
			selectedOptions: [],
			riseTank: [],
			stylesTank: [],
			holdingTank: [],
			shopURL: $('#shop-now-form').attr('action') + userCurveResult + 'curve/',


			init: function () {

				//Hide all options
				shopCurve.$shopOptions.hide();

				//Count in case no shop results available for locale
				noShopOptionsCount = 0;

				//set form action
				$('#shop-now-form').attr('action', shopCurve.shopURL);

				//Add listener to options
				$('input[name="curveOptions"]').on($.browser.msie ? 'propertychange' : 'change', function (event) {

					var $this = $(this);
					var $parent = $(this).parent();

					$('input[name="curveOptions"]').parent().removeClass('checked');
					$this.attr('checked') ? $parent.addClass('checked') : $parent.removeClass('checked');

					shopCurve.selection($parent, $this.attr('data-name'));

				});
				
				$('input[name="riseOptions"]').on($.browser.msie ? 'propertychange click' : 'change click', function (event) {

					var $this = $(this);
					var $parent = $(this).parent();

					$('input[name="riseOptions"]').parent().removeClass('checked');
					$this.attr('checked') ? $parent.addClass('checked') : $parent.removeClass('checked');

					shopCurve.selection($parent, $this.attr('data-name'));

				});

				//IE doesn't like images to be clickable in <label> tags, this is a work-around
				$('.lt-ie9 .shop-options label img, .lt-ie9 .shop-options label .grayOut, .ie9 .shop-options label img, .ie9 .shop-options label p, .ie9 .shop-options .notAvailable .grayOut').on('click', function () {

					var labelID = $(this).parent().attr('for');

					$('input#' + labelID).prop('checked', true);

					//IE9 seems to not like the event(s) 'change/propertychange' so this if statement below was needed to proceed through each step
					if ($('input#' + labelID).attr('checked') && $('html').hasClass('ie9')) {

						$('input[name="curveOptions"]').parent().removeClass('checked');
						$('input#' + labelID).attr('checked') ? $('input#' + labelID).parent().addClass('checked') : $('input#' + labelID).parent().removeClass('checked');

						shopCurve.selection($('input#' + labelID).parent(), $('input#' + labelID).attr('data-name'));
					}
				});

				//IE didn't seem to like the .grayOut span sitting in the label. The span made everything unclickable. This was determined the best work around
				$('.ie9 .shop-options li').on('click', function (e) {

					if ($(this).hasClass('notAvailable')) {

						var labelID = $(this).find('label').attr('for');

						$('input#' + labelID).prop('checked', true);

						if ($('input#' + labelID).attr('checked')) {

							$('input[name="curveOptions"]').parent().removeClass('checked');
							$('input#' + labelID).attr('checked') ? $('input#' + labelID).parent().addClass('checked') : $('input#' + labelID).parent().removeClass('checked');

							shopCurve.selection($('input#' + labelID).parent(), $('input#' + labelID).attr('data-name'));
						}
					}
				});



				$('#shop-now-form input[type="submit"]').on('click', function (evt) {

					var $inputChecked = $('input[name="curveOptions"]:checked,input[name="riseOptions"]:checked'),
						local_shopURL = shopCurve.shopURL,
						dataName = '',
						dataValue = '';
						
					$inputChecked.each(function(){
						dataName = $(this).attr('data-name');
						dataValue = shopCurve.createValue($(this).attr('data-value'), dataName);
						local_shopURL += dataValue;
					});

					$('#shop-now-form').attr('action', local_shopURL);
					console.log(local_shopURL);
					setTimeout('$("#shop-now-form").submit()', 500);
					return false;
				});



				//Display available options for Curve ID
				for (var key in shopCurve.userShopOptionsObj) {

					if (shopCurve.userShopOptionsObj[key].length <= 0) {
						noShopOptionsCount++;
					}

					if (shopCurve.userShopOptionsObj[key].length > 0) {

						shopCurve.optionsTank.push(key);
						shopCurve.visibleTank.push(key);
						shopCurve.riseTank.push(key);

						//Rise
						for (var i = 0; i < shopCurve.$shopOptions.length; i++) {
							if ($(shopCurve.$shopOptions[i]).attr('id') === 'rise-' + key) {
								$(shopCurve.$shopOptions[i]).show();
							}
						}

						//Styles
						for (var t = 0; t < shopCurve.userShopOptionsObj[key].length; t++) {
							for (var i = 0; i < shopCurve.$shopOptions.length; i++) {
								if ($(shopCurve.$shopOptions[i]).attr('id') === 'style-' + shopCurve.userShopOptionsObj[key][t]) {

									shopCurve.optionsTank.push(shopCurve.userShopOptionsObj[key][t]);
									shopCurve.visibleTank.push(shopCurve.userShopOptionsObj[key][t]);
									shopCurve.stylesTank.push(shopCurve.userShopOptionsObj[key][t]);

									$(shopCurve.$shopOptions[i]).show();
								}
							}
						}

					} else if (noShopOptionsCount >= 3) {
						$('#shop-your-curve .shop-results').hide();
						$('#shop-your-curve .no-shop-results span').text(resultShop[localeCode][userCurveID]["curve"]);
						$('#shop-your-curve .no-shop-results').show();
					}
				}

				//removing duplicates that snuck in
				shopCurve.optionsTank = shopCurve.removeDuplicates(shopCurve.optionsTank);
				shopCurve.stylesTank = shopCurve.removeDuplicates(shopCurve.stylesTank);
				shopCurve.visibleTank = shopCurve.removeDuplicates(shopCurve.visibleTank);

			},

			selection: function (element, group) {

				var userSelection = element.attr('id').replace(group + '-', '');

				if ($(element).hasClass('checked')) {

					shopCurve.selectedOptions = [];

					shopCurve.selectedOptions.push(userSelection);

					shopCurve.arrayBusiness(group);

				}
			},

			arrayBusiness: function (group) {
				//group = rise/styles

				//empty holdingTank
				shopCurve.holdingTank = [];

				if (group === 'rise') {

					//fill holdingTank with Rise styles
					for (var i = 0; i < shopCurve.userShopOptionsObj[shopCurve.selectedOptions[0]].length; i++) {
						shopCurve.holdingTank.push(shopCurve.userShopOptionsObj[shopCurve.selectedOptions[0]][i]);
					}

					//remove duplicates from holdingTank
					shopCurve.holdingTank = shopCurve.removeDuplicates(shopCurve.holdingTank);

					//remove matchedItems in holdingTank from stylesTank
					shopCurve.holdingTank = shopCurve.removeMatchedItems(shopCurve.stylesTank, shopCurve.holdingTank);

					//reset visibleTank before calling updateVisibleTank
					shopCurve.visibleTank = shopCurve.optionsTank;

					//update items that should be shown
					shopCurve.updateVisibleTank();


				} else if (group === 'style') {

					//fill holdingTank with Styles rises
					for (var key in shopCurve.userShopOptionsObj) {
						for (var i = 0; i < shopCurve.userShopOptionsObj[key].length; i++) {
							if ($.inArray(shopCurve.userShopOptionsObj[key][i], shopCurve.selectedOptions) > -1) {
								var arrItem = key;
							}
							shopCurve.holdingTank.push(arrItem);
						}
					}

					//remove duplicates from holdingTank
					shopCurve.holdingTank = shopCurve.removeDuplicates(shopCurve.holdingTank);

					//remove matchedItems in holdingTank from riseTank
					shopCurve.holdingTank = shopCurve.removeMatchedItems(shopCurve.riseTank, shopCurve.holdingTank);

					//reset visibleTank before calling updateVisibleTank
					shopCurve.visibleTank = shopCurve.optionsTank;

					//update items that should be shown
					shopCurve.updateVisibleTank();
				}
			},

			updateVisibleTank: function () {

				shopCurve.holdingTank = shopCurve.removeDuplicates(shopCurve.holdingTank);

				shopCurve.visibleTank = shopCurve.removeMatchedItems(shopCurve.visibleTank, shopCurve.holdingTank);


				//Hide all options
				$('.shop-options li .grayOut').remove();
				shopCurve.$shopOptions.addClass('notAvailable').find('label').prepend('<span class="grayOut">&nbsp;</span>');

				//Loop through visibleTank to find all elements that should be available
				for (var i = 0; i < shopCurve.visibleTank.length; i++) {

					//Rise
					if ($.inArray(shopCurve.visibleTank[i], shopCurve.riseTank) > -1) {
						for (var k = 0; k < shopCurve.$shopOptions.length; k++) {
							if ($(shopCurve.$shopOptions[k]).attr('id') === 'rise-' + shopCurve.visibleTank[i]) {
								$(shopCurve.$shopOptions[k]).removeClass('notAvailable');
								$('.shop-options li#' + $(shopCurve.$shopOptions[k]).attr('id') + ' .grayOut').remove();
							}
						}
					}

					//Styles
					if ($.inArray(shopCurve.visibleTank[i], shopCurve.stylesTank) > -1) {
						for (var t = 0; t < shopCurve.$shopOptions.length; t++) {
							if ($(shopCurve.$shopOptions[t]).attr('id') === 'style-' + shopCurve.visibleTank[i]) {
								$(shopCurve.$shopOptions[t]).removeClass('notAvailable');
								$('.shop-options li#' + $(shopCurve.$shopOptions[t]).attr('id') + ' .grayOut').remove();
							}
						}
					}
				}
			},

			removeMatchedItems: function (firstArr, secondArr) {
				var newArr = [];
				var returnArr = [];

				$.map(firstArr, function (v, i) {
					if ($.inArray(v, secondArr) < 0) {
						var arrItem = v;
					}

					newArr.push(arrItem);
				});


				for (var k = 0; k < newArr.length; k++) {
					if (newArr[k]) {
						returnArr.push(newArr[k]);
					}
				}

				return returnArr;
			},

			removeDuplicates: function (ar) {
				var f = {},
				i = 0,
					l = ar.length,
					r = [];
				while (i < l) {
					!f[ar[i]] && r.push(ar[i]);
					f[ar[i++]] = 1;
				}
				return r;
			},

			removeItem: function (array, item) {
				for (var i in array) {
					if (array[i] == item) {
						array.splice(i, 1);
						break;
					}
				}
				return array;
			},

			createValue: function (str, type) {
				//str = data-value
				//type = rise | style

				var a = str.split('&'),
					r = '';

				for (var i = 0; i < a.length; i++) {
					r += type + '/' + a[i] + '/';
				}

				return r;
			}

		};

		shopCurve.init();

	}
});

$('.dontlink').click(function(e){
	e.preventDefault();
	parent.location = $(this).attr('href');
});

if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
 
    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
 
      var result = [];
 
      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }
 
      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    }
  })()
};
