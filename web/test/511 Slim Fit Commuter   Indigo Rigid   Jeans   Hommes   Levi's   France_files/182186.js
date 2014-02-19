var flxpxlObj = (function() {
	var obj = {};

	obj.version = '373';

	obj.execute = function() {

		var bodyHTML = '';
		var bodyText = '';
		var bodyNormalized = '';
		var currentQueryTemp = '';
		var currentFunction = function(){};

		// Page group: Light in The Box FR
		var conditions_301574 = {};
		setTimeout(function() {
		function pageGroup_301574() {
			obj.placeAppNexusSegmentScript('seg?add=923897&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301574[queryId]=true);if(checkConditions(conditions_301574)){pageGroup_301574();}});};
		if(
			(window.location.href.indexOf('lightinthebox.com/fr') != -1)
		) {
			if(checkConditions(conditions_301574)){pageGroup_301574();}
		}
		}, 1);

		// Page group: Disneyland Paris FR
		var conditions_301575 = {};
		setTimeout(function() {
		function pageGroup_301575() {
			obj.placeAppNexusSegmentScript('seg?add=923899&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301575[queryId]=true);if(checkConditions(conditions_301575)){pageGroup_301575();}});};
		if(
			(window.location.href.indexOf('disneylandparis.com/fr') != -1)
		) {
			if(checkConditions(conditions_301575)){pageGroup_301575();}
		}
		}, 1);

		// Page group: Toner Services FR
		var conditions_301576 = {};
		setTimeout(function() {
		function pageGroup_301576() {
			obj.placeAppNexusSegmentScript('seg?add=923915&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301576[queryId]=true);if(checkConditions(conditions_301576)){pageGroup_301576();}});};
		if(
			(window.location.href.indexOf('toner.fr') != -1)
		) {
			if(checkConditions(conditions_301576)){pageGroup_301576();}
		}
		}, 1);

		// Page group: Center Parcs FR
		var conditions_301577 = {};
		setTimeout(function() {
		function pageGroup_301577() {
			obj.placeAppNexusSegmentScript('seg?add=923917&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301577[queryId]=true);if(checkConditions(conditions_301577)){pageGroup_301577();}});};
		if(
			(window.location.href.indexOf('centerparcs.fr') != -1)
		) {
			if(checkConditions(conditions_301577)){pageGroup_301577();}
		}
		}, 1);

		// Page group: MyPIX.com FR
		var conditions_301578 = {};
		setTimeout(function() {
		function pageGroup_301578() {
			obj.placeAppNexusSegmentScript('seg?add=923934&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301578[queryId]=true);if(checkConditions(conditions_301578)){pageGroup_301578();}});};
		if(
			(window.location.href.indexOf('mypix.com/fr') != -1)
		) {
			if(checkConditions(conditions_301578)){pageGroup_301578();}
		}
		}, 1);

		// Page group: McAfee FR
		var conditions_301579 = {};
		setTimeout(function() {
		function pageGroup_301579() {
			obj.placeAppNexusSegmentScript('seg?add=923943&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301579[queryId]=true);if(checkConditions(conditions_301579)){pageGroup_301579();}});};
		if(
			(window.location.href.indexOf('mcafee.com/fr/') != -1)
		) {
			if(checkConditions(conditions_301579)){pageGroup_301579();}
		}
		}, 1);

		// Page group: Easy Lunettes FR
		var conditions_301580 = {};
		setTimeout(function() {
		function pageGroup_301580() {
			obj.placeAppNexusSegmentScript('seg?add=923949,1435636&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301580[queryId]=true);if(checkConditions(conditions_301580)){pageGroup_301580();}});};
		if(
			(window.location.href.indexOf('easylunettes.fr') != -1)
		) {
			if(checkConditions(conditions_301580)){pageGroup_301580();}
		}
		}, 1);

		// Page group: Protigourmand
		var conditions_301581 = {};
		setTimeout(function() {
		function pageGroup_301581() {
			obj.placeAppNexusSegmentScript('seg?add=926227&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301581[queryId]=true);if(checkConditions(conditions_301581)){pageGroup_301581();}});};
		if(
			(window.location.href.indexOf('protigourmand.com') != -1)
		) {
			if(checkConditions(conditions_301581)){pageGroup_301581();}
		}
		}, 1);

		// Page group: Stoffkontor
		var conditions_301582 = {};
		setTimeout(function() {
		function pageGroup_301582() {
			obj.placeAppNexusSegmentScript('seg?add=926252&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-stoffkontor'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('form.article_order_form table tbody tr td table tbody tr td a img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div form.article_order_form table tbody tr td h1'), 					// product name
			prodPrice: getValue('div#main_column form.article_order_form table tbody tr td table tbody tr td span.Price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div#head div.topheaderlinks div.logo', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};

		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301582[queryId]=true);if(checkConditions(conditions_301582)){pageGroup_301582();}});};
		if(
			(window.location.href.indexOf('stoffkontor.eu') != -1)
		) {
			if(checkConditions(conditions_301582)){pageGroup_301582();}
		}
		}, 1);

		// Page group: Aubert FR FLX
		var conditions_301583 = {};
		setTimeout(function() {
		function pageGroup_301583() {
			obj.placeAppNexusSegmentScript('seg?add=928969&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301583[queryId]=true);if(checkConditions(conditions_301583)){pageGroup_301583();}});};
		if(
			(window.location.href.indexOf('aubert.com') != -1)
		) {
			if(checkConditions(conditions_301583)){pageGroup_301583();}
		}
		}, 1);

		// Page group: Macway FR FLX
		var conditions_301584 = {};
		setTimeout(function() {
		function pageGroup_301584() {
			obj.placeAppNexusSegmentScript('seg?add=928992&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301584[queryId]=true);if(checkConditions(conditions_301584)){pageGroup_301584();}});};
		if(
			(window.location.href.indexOf('macway.com') != -1)
		) {
			if(checkConditions(conditions_301584)){pageGroup_301584();}
		}
		}, 1);

		// Page group: Decitre FR FLX
		var conditions_301585 = {};
		setTimeout(function() {
		function pageGroup_301585() {
			obj.placeAppNexusSegmentScript('seg?add=928994&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-decitre'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: '', 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: '', 					// product name
			prodPrice: '', 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: '', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301585[queryId]=true);if(checkConditions(conditions_301585)){pageGroup_301585();}});};
		if(
			(window.location.href.indexOf('decitre.fr') != -1)
		) {
			if(checkConditions(conditions_301585)){pageGroup_301585();}
		}
		}, 1);

		// Page group: Rugby Center FR FLX
		var conditions_301586 = {};
		setTimeout(function() {
		function pageGroup_301586() {
			obj.placeAppNexusSegmentScript('seg?add=928995&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301586[queryId]=true);if(checkConditions(conditions_301586)){pageGroup_301586();}});};
		if(
			(window.location.href.indexOf('rugbycenter.fr') != -1)
		) {
			if(checkConditions(conditions_301586)){pageGroup_301586();}
		}
		}, 1);

		// Page group: Micro Application FR FLX
		var conditions_301587 = {};
		setTimeout(function() {
		function pageGroup_301587() {
			obj.placeAppNexusSegmentScript('seg?add=928999&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301587[queryId]=true);if(checkConditions(conditions_301587)){pageGroup_301587();}});};
		if(
			(window.location.href.indexOf('microapp.com') != -1)
		) {
			if(checkConditions(conditions_301587)){pageGroup_301587();}
		}
		}, 1);

		// Page group: Cap Universe DE
		var conditions_301588 = {};
		setTimeout(function() {
		function pageGroup_301588() {
			obj.placeAppNexusSegmentScript('seg?add=929001&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301588[queryId]=true);if(checkConditions(conditions_301588)){pageGroup_301588();}});};
		if(
			(window.location.href.indexOf('capuniverse.de') != -1)
		) {
			if(checkConditions(conditions_301588)){pageGroup_301588();}
		}
		}, 1);

		// Page group: Avinos Wine DE
		var conditions_301589 = {};
		setTimeout(function() {
		function pageGroup_301589() {
			obj.placeAppNexusSegmentScript('seg?add=929003&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301589[queryId]=true);if(checkConditions(conditions_301589)){pageGroup_301589();}});};
		if(
			(window.location.href.indexOf('avinos-wein.de') != -1)
		) {
			if(checkConditions(conditions_301589)){pageGroup_301589();}
		}
		}, 1);

		// Page group: Foot Center FR FLX
		var conditions_301590 = {};
		setTimeout(function() {
		function pageGroup_301590() {
			obj.placeAppNexusSegmentScript('seg?add=929005&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301590[queryId]=true);if(checkConditions(conditions_301590)){pageGroup_301590();}});};
		if(
			(window.location.href.indexOf('footcenter.fr') != -1)
		) {
			if(checkConditions(conditions_301590)){pageGroup_301590();}
		}
		}, 1);

		// Page group: Neobuy DE
		var conditions_301591 = {};
		setTimeout(function() {
		function pageGroup_301591() {
			obj.placeAppNexusSegmentScript('seg?add=929007&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301591[queryId]=true);if(checkConditions(conditions_301591)){pageGroup_301591();}});};
		if(
			(window.location.href.indexOf('neobuy.de') != -1)
		) {
			if(checkConditions(conditions_301591)){pageGroup_301591();}
		}
		}, 1);

		// Page group: Defimode FR FLX
		var conditions_301592 = {};
		setTimeout(function() {
		function pageGroup_301592() {
			obj.placeAppNexusSegmentScript('seg?add=929008&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301592[queryId]=true);if(checkConditions(conditions_301592)){pageGroup_301592();}});};
		if(
			(window.location.href.indexOf('defimode.com') != -1)
		) {
			if(checkConditions(conditions_301592)){pageGroup_301592();}
		}
		}, 1);

		// Page group: Music and More Store DE
		var conditions_301593 = {};
		setTimeout(function() {
		function pageGroup_301593() {
			obj.placeAppNexusSegmentScript('seg?add=929009&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301593[queryId]=true);if(checkConditions(conditions_301593)){pageGroup_301593();}});};
		if(
			(window.location.href.indexOf('musicandmorestore.de') != -1)
		) {
			if(checkConditions(conditions_301593)){pageGroup_301593();}
		}
		}, 1);

		// Page group: Heliades FR FLX
		var conditions_301594 = {};
		setTimeout(function() {
		function pageGroup_301594() {
			obj.placeAppNexusSegmentScript('seg?add=929010&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301594[queryId]=true);if(checkConditions(conditions_301594)){pageGroup_301594();}});};
		if(
			(window.location.href.indexOf('heliades.fr') != -1)
		) {
			if(checkConditions(conditions_301594)){pageGroup_301594();}
		}
		}, 1);

		// Page group: Coffeethek DE
		var conditions_301595 = {};
		setTimeout(function() {
		function pageGroup_301595() {
			obj.placeAppNexusSegmentScript('seg?add=929011&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301595[queryId]=true);if(checkConditions(conditions_301595)){pageGroup_301595();}});};
		if(
			(window.location.href.indexOf('coffeethek.de') != -1)
		) {
			if(checkConditions(conditions_301595)){pageGroup_301595();}
		}
		}, 1);

		// Page group: Atelier Prive FR FLX
		var conditions_301596 = {};
		setTimeout(function() {
		function pageGroup_301596() {
			obj.placeAppNexusSegmentScript('seg?add=929018&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301596[queryId]=true);if(checkConditions(conditions_301596)){pageGroup_301596();}});};
		if(
			(window.location.href.indexOf('atelierprive.com') != -1)
		) {
			if(checkConditions(conditions_301596)){pageGroup_301596();}
		}
		}, 1);

		// Page group: Erste Nachhilfe DE
		var conditions_301597 = {};
		setTimeout(function() {
		function pageGroup_301597() {
			obj.placeAppNexusSegmentScript('seg?add=929019&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301597[queryId]=true);if(checkConditions(conditions_301597)){pageGroup_301597();}});};
		if(
			(window.location.href.indexOf('erstenachhilfe.de') != -1)
		) {
			if(checkConditions(conditions_301597)){pageGroup_301597();}
		}
		}, 1);

		// Page group: Corine de Farme FR FLX
		var conditions_301598 = {};
		setTimeout(function() {
		function pageGroup_301598() {
			obj.placeAppNexusSegmentScript('seg?add=929023&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-corinedefarme'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product_addtocart_form > div:nth-child(3) > a:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product_addtocart_form > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > h1:nth-child(1) > span:nth-child(1)'), 					// product name
			prodPrice: getValue('#product-price-1611 > span:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#header > div:nth-child(1) > span:nth-child(2) > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301598[queryId]=true);if(checkConditions(conditions_301598)){pageGroup_301598();}});};
		if(
			(window.location.href.indexOf('corinedefarme.fr') != -1)
		) {
			if(checkConditions(conditions_301598)){pageGroup_301598();}
		}
		}, 1);

		// Page group: Coriolis FR FLX
		var conditions_301599 = {};
		setTimeout(function() {
		function pageGroup_301599() {
			obj.placeAppNexusSegmentScript('seg?add=929024&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301599[queryId]=true);if(checkConditions(conditions_301599)){pageGroup_301599();}});};
		if(
			(window.location.href.indexOf('coriolis.com') != -1)
		) {
			if(checkConditions(conditions_301599)){pageGroup_301599();}
		}
		}, 1);

		// Page group: Levis FR FLX
		var conditions_301600 = {};
		setTimeout(function() {
		function pageGroup_301600() {
			obj.placeAppNexusSegmentScript('seg?add=929030&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301600[queryId]=true);if(checkConditions(conditions_301600)){pageGroup_301600();}});};
		if(
			(window.location.href.indexOf('levi.com') != -1)
		) {
			if(checkConditions(conditions_301600)){pageGroup_301600();}
		}
		}, 1);

		// Page group: AstroNutrition 
		var conditions_301601 = {};
		setTimeout(function() {
		function pageGroup_301601() {
			obj.placeAppNexusSegmentScript('seg?add=1359826&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#gallery_target', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product_section > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#price_area > form:nth-child(1) > li:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301601[queryId]=true);if(checkConditions(conditions_301601)){pageGroup_301601();}});};
		if(
			(window.location.href.indexOf('astronutrition.com') != -1)
		) {
			if(checkConditions(conditions_301601)){pageGroup_301601();}
		}
		}, 1);

		// Page group: Laminat Kontor
		var conditions_301602 = {};
		setTimeout(function() {
		function pageGroup_301602() {
			obj.placeAppNexusSegmentScript('seg?add=929622&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-laminat'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('form#product_addtocart_form div.product-img-box a img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('form#product_addtocart_form div.product-shop div.product-name h1'), 					// product name
			prodPrice: getValue('form#product_addtocart_form div.product-shop div.price-box span.regular-price span.price')?getValue('form#product_addtocart_form div.product-shop div.price-box span.regular-price span.price'):getValue('form#product_addtocart_form div.product-shop div.price-box span.special-price span.price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div.header-container div.header a.logo img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301602[queryId]=true);if(checkConditions(conditions_301602)){pageGroup_301602();}});};
		if(
			(window.location.href.indexOf('laminat-kontor.de') != -1)
		) {
			if(checkConditions(conditions_301602)){pageGroup_301602();}
		}
		}, 1);

		// Page group: MovieMail
		var conditions_301603 = {};
		setTimeout(function() {
		function pageGroup_301603() {
			obj.placeAppNexusSegmentScript('seg?add=929647,1421232&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-moviemail'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div#wrapper div#maincolumn div.box div.blockraised img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#wrapper div#maincolumn div.box h1.breaded'), 					// product name
			prodPrice: getValue('div#wrapper div#maincolumn div.box div.blockraised div p.pricebig'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://www.moviemail.com/MMgraphics/moviemail-logo.jpg', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301603[queryId]=true);if(checkConditions(conditions_301603)){pageGroup_301603();}});};
		if(
			(window.location.href.indexOf('moviemail.com') != -1)
		) {
			if(checkConditions(conditions_301603)){pageGroup_301603();}
		}
		}, 1);

		// Page group: Kleidoo
		var conditions_301604 = {};
		setTimeout(function() {
		function pageGroup_301604() {
			obj.placeAppNexusSegmentScript('seg?add=936562&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-kleidoo'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(1)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301604[queryId]=true);if(checkConditions(conditions_301604)){pageGroup_301604();}});};
		if(
			(window.location.href.indexOf('kleidoo.de') != -1)
		) {
			if(checkConditions(conditions_301604)){pageGroup_301604();}
		}
		}, 1);

		// Page group: Energievergelijker.nl
		var conditions_301605 = {};
		setTimeout(function() {
		function pageGroup_301605() {
			obj.placeAppNexusSegmentScript('seg?add=941587&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301605[queryId]=true);if(checkConditions(conditions_301605)){pageGroup_301605();}});};
		if(
			(window.location.href.indexOf('energievergelijker.nl/') != -1)
		) {
			if(checkConditions(conditions_301605)){pageGroup_301605();}
		}
		}, 1);

		// Page group: MeMarmelade.de
		var conditions_301606 = {};
		setTimeout(function() {
		function pageGroup_301606() {
			obj.placeAppNexusSegmentScript('seg?add=941594&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#image', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#actions-in-9782266233040 > span:nth-child(1) > span:nth-child(3) > span:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301606[queryId]=true);if(checkConditions(conditions_301606)){pageGroup_301606();}});};
		if(
			(window.location.href.indexOf('memarmelade.de') != -1)
		) {
			if(checkConditions(conditions_301606)){pageGroup_301606();}
		}
		}, 1);

		// Page group: Dream Place Hotels UK
		var conditions_301607 = {};
		setTimeout(function() {
		function pageGroup_301607() {
			obj.placeAppNexusSegmentScript('seg?add=942876,1435387&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product_addtocart_form > div:nth-child(3) > a:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product_addtocart_form > div:nth-child(2) > div:nth-child(1) > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#product-price-12772 > span:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > img:nth-child(2)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301607[queryId]=true);if(checkConditions(conditions_301607)){pageGroup_301607();}});};
		if(
			(window.location.href.indexOf('dreamplacehotels.com') != -1)
		) {
			if(checkConditions(conditions_301607)){pageGroup_301607();}
		}
		}, 1);

		// Page group: Instant Law Line
		var conditions_301608 = {};
		setTimeout(function() {
		function pageGroup_301608() {
			obj.placeAppNexusSegmentScript('seg?add=942884&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301608[queryId]=true);if(checkConditions(conditions_301608)){pageGroup_301608();}});};
		if(
			(window.location.href.indexOf('instantlawline.co.uk') != -1)
		) {
			if(checkConditions(conditions_301608)){pageGroup_301608();}
		}
		}, 1);

		// Page group: Lomography 
		var conditions_301609 = {};
		setTimeout(function() {
		function pageGroup_301609() {
			obj.placeAppNexusSegmentScript('seg?add=943029&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#maincolumn > div:nth-child(2) > div:nth-child(7) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#maincolumn > div:nth-child(2) > h1:nth-child(5)'), 					// product name
			prodPrice: getValue('#maincolumn > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > p:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#mastheadmain > a:nth-child(2) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301609[queryId]=true);if(checkConditions(conditions_301609)){pageGroup_301609();}});};
		if(
			(window.location.href.indexOf('shop.lomography.com/gb') != -1)
		) {
			if(checkConditions(conditions_301609)){pageGroup_301609();}
		}
		}, 1);

		// Page group: Galaxy Perfume 
		var conditions_301610 = {};
		setTimeout(function() {
		function pageGroup_301610() {
			obj.placeAppNexusSegmentScript('seg?add=943072&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#maincolumn > div:nth-child(2) > div:nth-child(7) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#maincolumn > div:nth-child(2) > h1:nth-child(5)'), 					// product name
			prodPrice: getValue('#maincolumn > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > p:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#mastheadmain > a:nth-child(2) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301610[queryId]=true);if(checkConditions(conditions_301610)){pageGroup_301610();}});};
		if(
			(window.location.href.indexOf('galaxyperfume.com.au') != -1)
		) {
			if(checkConditions(conditions_301610)){pageGroup_301610();}
		}
		}, 1);

		// Page group: livefootballtickets.com
		var conditions_301611 = {};
		setTimeout(function() {
		function pageGroup_301611() {
			obj.placeAppNexusSegmentScript('seg?add=943201&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#maincolumn > div:nth-child(2) > div:nth-child(7) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#maincolumn > div:nth-child(2) > h1:nth-child(5)'), 					// product name
			prodPrice: getValue('#maincolumn > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > p:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#mastheadmain > a:nth-child(2) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301611[queryId]=true);if(checkConditions(conditions_301611)){pageGroup_301611();}});};
		if(
			(window.location.href.indexOf('livefootballtickets.com') != -1)
		) {
			if(checkConditions(conditions_301611)){pageGroup_301611();}
		}
		}, 1);

		// Page group: liverugbytickets.co.uk
		var conditions_301612 = {};
		setTimeout(function() {
		function pageGroup_301612() {
			obj.placeAppNexusSegmentScript('seg?add=943202&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301612[queryId]=true);if(checkConditions(conditions_301612)){pageGroup_301612();}});};
		if(
			(window.location.href.indexOf('liverugbytickets.co.uk') != -1)
		) {
			if(checkConditions(conditions_301612)){pageGroup_301612();}
		}
		}, 1);

		// Page group: Aromatherapy Associates
		var conditions_301613 = {};
		setTimeout(function() {
		function pageGroup_301613() {
			obj.placeAppNexusSegmentScript('seg?add=943209&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-aromatherapyassociates'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.product-img-box p.product-image img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('form#product_addtocart_form table tbody tr td div.product-name h1'), 					// product name
			prodPrice: getValue('tbody tr td div.price-box span.regular-price span.price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div.header-container div.header a.logo img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301613[queryId]=true);if(checkConditions(conditions_301613)){pageGroup_301613();}});};
		if(
			(window.location.href.indexOf('aromatherapyassociates.com') != -1)
		) {
			if(checkConditions(conditions_301613)){pageGroup_301613();}
		}
		}, 1);

		// Page group: Breathing Relief
		var conditions_301614 = {};
		setTimeout(function() {
		function pageGroup_301614() {
			obj.placeAppNexusSegmentScript('seg?add=943625&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301614[queryId]=true);if(checkConditions(conditions_301614)){pageGroup_301614();}});};
		if(
			(window.location.href.indexOf('breathingrelief.com') != -1)
		) {
			if(checkConditions(conditions_301614)){pageGroup_301614();}
		}
		}, 1);

		// Page group: Butlers UK
		var conditions_301615 = {};
		setTimeout(function() {
		function pageGroup_301615() {
			obj.placeAppNexusSegmentScript('seg?add=945571&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301615[queryId]=true);if(checkConditions(conditions_301615)){pageGroup_301615();}});};
		if(
			(window.location.href.indexOf('butlers-online.co.uk') != -1)
		) {
			if(checkConditions(conditions_301615)){pageGroup_301615();}
		}
		}, 1);

		// Page group: Treat Republic 
		var conditions_301616 = {};
		setTimeout(function() {
		function pageGroup_301616() {
			obj.placeAppNexusSegmentScript('seg?add=945684&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301616[queryId]=true);if(checkConditions(conditions_301616)){pageGroup_301616();}});};
		if(
			(window.location.href.indexOf('treatrepublic.co.uk') != -1)
		) {
			if(checkConditions(conditions_301616)){pageGroup_301616();}
		}
		}, 1);

		// Page group: Megagadgets.nl
		var conditions_301617 = {};
		setTimeout(function() {
		function pageGroup_301617() {
			obj.placeAppNexusSegmentScript('seg?add=947117&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-megagadgets'; // place domain you want to use here, leave default if not sure

		var price = getValue('div.product-essential form#product_addtocart_form div.product-shop div.price-box span.regular-price span.price')?getValue('div.product-essential form#product_addtocart_form div.product-shop div.price-box span.regular-price span.price'):getValue('div.product-essential form div.product-shop div.product-options div#super-attribute-option div.price-box p.special-price span.price');
		price = price.replace('.','');
		var subprice = price.substr(price.length - 2);
		price = price.replace(subprice,'.'+subprice);

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.product-essential form#product_addtocart_form div.product-img-box p.product-image a.mediabox img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div.product-essential form#product_addtocart_form div.product-name h1'), 					// product name
			prodPrice: price, 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div.header div.all a.logo img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};

		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301617[queryId]=true);if(checkConditions(conditions_301617)){pageGroup_301617();}});};
		if(
			(window.location.href.indexOf('megagadgets.nl') != -1)
		) {
			if(checkConditions(conditions_301617)){pageGroup_301617();}
		}
		}, 1);

		// Page group: phones.co.uk FLX
		var conditions_301618 = {};
		setTimeout(function() {
		function pageGroup_301618() {
			obj.placeAppNexusSegmentScript('seg?add=947134&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-phones'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('section#left_container div#handset_image a img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('section#right_container h2.title span'), 					// product name
			prodPrice: getValue('div#top_deal_price_container span'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('h1#header_logo a span', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301618[queryId]=true);if(checkConditions(conditions_301618)){pageGroup_301618();}});};
		if(
			(window.location.href.indexOf('phones.co.uk') != -1)
		) {
			if(checkConditions(conditions_301618)){pageGroup_301618();}
		}
		}, 1);

		// Page group: KGB Deals Public IDEAs
		var conditions_301619 = {};
		setTimeout(function() {
		function pageGroup_301619() {
			obj.placeAppNexusSegmentScript('seg?add=963741&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301619[queryId]=true);if(checkConditions(conditions_301619)){pageGroup_301619();}});};
		if(
			(window.location.href.indexOf('kgbdeals.fr') != -1)
		) {
			if(checkConditions(conditions_301619)){pageGroup_301619();}
		}
		}, 1);

		// Page group: Dein Torte DE
		var conditions_301620 = {};
		setTimeout(function() {
		function pageGroup_301620() {
			obj.placeAppNexusSegmentScript('seg?add=963845&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-deinetort'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#image', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product_addtocart_form > div:nth-child(2) > h1:nth-child(3)'), 					// product name
			prodPrice: getValue('#product-price-1740 > span:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301620[queryId]=true);if(checkConditions(conditions_301620)){pageGroup_301620();}});};
		if(
			(window.location.href.indexOf('deinetorte.de') != -1)
		) {
			if(checkConditions(conditions_301620)){pageGroup_301620();}
		}
		}, 1);

		// Page group: Mysite.com
		var conditions_301621 = {};
		setTimeout(function() {
		function pageGroup_301621() {
			obj.placeAppNexusSegmentScript('seg?add=965218&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301621[queryId]=true);if(checkConditions(conditions_301621)){pageGroup_301621();}});};
		if(
			(window.location.href.indexOf('mysite.com') != -1)
		) {
			if(checkConditions(conditions_301621)){pageGroup_301621();}
		}
		}, 1);

		// Page group: Armadillo Pepper
		var conditions_301622 = {};
		setTimeout(function() {
		function pageGroup_301622() {
			obj.placeAppNexusSegmentScript('seg?add=965222&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301622[queryId]=true);if(checkConditions(conditions_301622)){pageGroup_301622();}});};
		if(
			(window.location.href.indexOf('armadillopepper.com') != -1)
		) {
			if(checkConditions(conditions_301622)){pageGroup_301622();}
		}
		}, 1);

		// Page group: promocionesfarma
		var conditions_301623 = {};
		setTimeout(function() {
		function pageGroup_301623() {
			obj.placeAppNexusSegmentScript('seg?add=965610&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301623[queryId]=true);if(checkConditions(conditions_301623)){pageGroup_301623();}});};
		if(
			(window.location.href.indexOf('promocionesfarma.com') != -1)
		) {
			if(checkConditions(conditions_301623)){pageGroup_301623();}
		}
		}, 1);

		// Page group: Aftershock
		var conditions_301624 = {};
		setTimeout(function() {
		function pageGroup_301624() {
			obj.placeAppNexusSegmentScript('seg?add=967090&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301624[queryId]=true);if(checkConditions(conditions_301624)){pageGroup_301624();}});};
		if(
			(window.location.href.indexOf('aftershockplc.com') != -1)
		) {
			if(checkConditions(conditions_301624)){pageGroup_301624();}
		}
		}, 1);

		// Page group: Envie de Fraises
		var conditions_301625 = {};
		setTimeout(function() {
		function pageGroup_301625() {
			obj.placeAppNexusSegmentScript('seg?add=967231&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301625[queryId]=true);if(checkConditions(conditions_301625)){pageGroup_301625();}});};
		if(
			(window.location.href.indexOf('enviedefraises.fr') != -1)
		) {
			if(checkConditions(conditions_301625)){pageGroup_301625();}
		}
		}, 1);

		// Page group: Energieprijzenvergelijken.com
		var conditions_301626 = {};
		setTimeout(function() {
		function pageGroup_301626() {
			obj.placeAppNexusSegmentScript('seg?add=969930&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301626[queryId]=true);if(checkConditions(conditions_301626)){pageGroup_301626();}});};
		if(
			(window.location.href.indexOf('energieprijzenvergelijken.com') != -1)
		) {
			if(checkConditions(conditions_301626)){pageGroup_301626();}
		}
		}, 1);

		// Page group: FYSIKI
		var conditions_301627 = {};
		setTimeout(function() {
		function pageGroup_301627() {
			obj.placeAppNexusSegmentScript('seg?add=970053&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301627[queryId]=true);if(checkConditions(conditions_301627)){pageGroup_301627();}});};
		if(
			(window.location.href.indexOf('fysiki.com') != -1)
		) {
			if(checkConditions(conditions_301627)){pageGroup_301627();}
		}
		}, 1);

		// Page group: Savoir Maigrir
		var conditions_301628 = {};
		setTimeout(function() {
		function pageGroup_301628() {
			obj.placeAppNexusSegmentScript('seg?add=970055&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301628[queryId]=true);if(checkConditions(conditions_301628)){pageGroup_301628();}});};
		if(
			(window.location.href.indexOf('savoir-maigrir.aujourdhui.com') != -1)
		) {
			if(checkConditions(conditions_301628)){pageGroup_301628();}
		}
		}, 1);

		// Page group: Maxicours
		var conditions_301629 = {};
		setTimeout(function() {
		function pageGroup_301629() {
			obj.placeAppNexusSegmentScript('seg?add=970058&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301629[queryId]=true);if(checkConditions(conditions_301629)){pageGroup_301629();}});};
		if(
			(window.location.href.indexOf('maxicours.com') != -1)
		) {
			if(checkConditions(conditions_301629)){pageGroup_301629();}
		}
		}, 1);

		// Page group: Auto Ici
		var conditions_301630 = {};
		setTimeout(function() {
		function pageGroup_301630() {
			obj.placeAppNexusSegmentScript('seg?add=970060&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-autoici'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#contenu_principal > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#contenu_principal > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(2) > span:nth-child(1)'), 					// product name
			prodPrice: getValue('#contenu_principal > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301630[queryId]=true);if(checkConditions(conditions_301630)){pageGroup_301630();}});};
		if(
			(window.location.href.indexOf('auto-ici.fr') != -1)
		) {
			if(checkConditions(conditions_301630)){pageGroup_301630();}
		}
		}, 1);

		// Page group: Hugavenue
		var conditions_301631 = {};
		setTimeout(function() {
		function pageGroup_301631() {
			obj.placeAppNexusSegmentScript('seg?add=970062&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301631[queryId]=true);if(checkConditions(conditions_301631)){pageGroup_301631();}});};
		if(
			(window.location.href.indexOf('hugavenue.com') != -1)
		) {
			if(checkConditions(conditions_301631)){pageGroup_301631();}
		}
		}, 1);

		// Page group: SOA
		var conditions_301632 = {};
		setTimeout(function() {
		function pageGroup_301632() {
			obj.placeAppNexusSegmentScript('seg?add=970067&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301632[queryId]=true);if(checkConditions(conditions_301632)){pageGroup_301632();}});};
		if(
			(window.location.href.indexOf('soassure.fr') != -1)
		) {
			if(checkConditions(conditions_301632)){pageGroup_301632();}
		}
		}, 1);

		// Page group: Elite Auto
		var conditions_301633 = {};
		setTimeout(function() {
		function pageGroup_301633() {
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301633[queryId]=true);if(checkConditions(conditions_301633)){pageGroup_301633();}});};
		if(
			(window.location.href.indexOf('elite-auto.fr') != -1)
		) {
			if(checkConditions(conditions_301633)){pageGroup_301633();}
		}
		}, 1);

		// Page group: Rollasole
		var conditions_301634 = {};
		setTimeout(function() {
		function pageGroup_301634() {
			obj.placeAppNexusSegmentScript('seg?add=971854&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301634[queryId]=true);if(checkConditions(conditions_301634)){pageGroup_301634();}});};
		if(
			(window.location.href.indexOf('rollasole.com') != -1)
		) {
			if(checkConditions(conditions_301634)){pageGroup_301634();}
		}
		}, 1);

		// Page group: Harper and Lewis Vintage
		var conditions_301635 = {};
		setTimeout(function() {
		function pageGroup_301635() {
			obj.placeAppNexusSegmentScript('seg?add=971878&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301635[queryId]=true);if(checkConditions(conditions_301635)){pageGroup_301635();}});};
		if(
			(window.location.href.indexOf('harperandlewisvintage.co.uk') != -1)
		) {
			if(checkConditions(conditions_301635)){pageGroup_301635();}
		}
		}, 1);

		// Page group: Shore
		var conditions_301636 = {};
		setTimeout(function() {
		function pageGroup_301636() {
			obj.placeAppNexusSegmentScript('seg?add=971893&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-shore'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div#productcolone.product-img-box div.product-clicktozoom-image div.product-clicktozoom-image-main a.jqzoom div.zoomPad img#mainimage', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#productcoltwo.product-shop form#product_addtocart_form div.product-name h1'), 					// product name
			prodPrice: getValue('form#product_addtocart_form div.price-box span.regular-price span.price')?getValue('form#product_addtocart_form div.price-box span.regular-price span.price'):getValue('form#product_addtocart_form div.price-box p.special-price span.price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://dzdmo5k9lk8wf.cloudfront.net/FlxAds-images/shore/shore_logo.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301636[queryId]=true);if(checkConditions(conditions_301636)){pageGroup_301636();}});};
		if(
			(window.location.href.indexOf('shore.co.uk') != -1)
		) {
			if(checkConditions(conditions_301636)){pageGroup_301636();}
		}
		}, 1);

		// Page group: My Life Adviser
		var conditions_301637 = {};
		setTimeout(function() {
		function pageGroup_301637() {
			obj.placeAppNexusSegmentScript('seg?add=972041&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301637[queryId]=true);if(checkConditions(conditions_301637)){pageGroup_301637();}});};
		if(
			(window.location.href.indexOf('mylifeadviser.co.uk') != -1)
		) {
			if(checkConditions(conditions_301637)){pageGroup_301637();}
		}
		}, 1);

		// Page group: My Wallsticker.de
		var conditions_301638 = {};
		setTimeout(function() {
		function pageGroup_301638() {
			obj.placeAppNexusSegmentScript('seg?add=972163&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301638[queryId]=true);if(checkConditions(conditions_301638)){pageGroup_301638();}});};
		if(
			(window.location.href.indexOf('my-wallsticker.de') != -1)
		) {
			if(checkConditions(conditions_301638)){pageGroup_301638();}
		}
		}, 1);

		// Page group: EDF ENR
		var conditions_301639 = {};
		setTimeout(function() {
		function pageGroup_301639() {
			obj.placeAppNexusSegmentScript('seg?add=972643&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301639[queryId]=true);if(checkConditions(conditions_301639)){pageGroup_301639();}});};
		if(
			(window.location.href.indexOf('edfenr.com') != -1)
		) {
			if(checkConditions(conditions_301639)){pageGroup_301639();}
		}
		}, 1);

		// Page group: Edition Atlas
		var conditions_301640 = {};
		setTimeout(function() {
		function pageGroup_301640() {
			obj.placeAppNexusSegmentScript('seg?add=972646&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-editionsatlas'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#contentPageHeader > div:nth-child(2) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#discoverProduct > div:nth-child(1) > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#orderForm > article:nth-child(6) > footer:nth-child(3) > p:nth-child(1) > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#headerLogo > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301640[queryId]=true);if(checkConditions(conditions_301640)){pageGroup_301640();}});};
		if(
			(window.location.href.indexOf('editionsatlas.fr') != -1)
		) {
			if(checkConditions(conditions_301640)){pageGroup_301640();}
		}
		}, 1);

		// Page group: Harlem Stores DE
		var conditions_301641 = {};
		setTimeout(function() {
		function pageGroup_301641() {
			obj.placeAppNexusSegmentScript('seg?add=973829&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-harlemstores'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#img1 > div:nth-child(1) > img:nth-child(2)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#content > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > h2:nth-child(2)'), 					// product name
			prodPrice: getValue('#content > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(4) > div:nth-child(1) > p:nth-child(3) > span:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#hd1 > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301641[queryId]=true);if(checkConditions(conditions_301641)){pageGroup_301641();}});};
		if(
			(window.location.href.indexOf('harlem-stores.de') != -1)
		) {
			if(checkConditions(conditions_301641)){pageGroup_301641();}
		}
		}, 1);

		// Page group: Seniorenland
		var conditions_301642 = {};
		setTimeout(function() {
		function pageGroup_301642() {
			obj.placeAppNexusSegmentScript('seg?add=973837&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-seniorenland'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product_img_200916', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#tabs_product > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#tabs_product > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(5) > div:nth-child(14)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#headerlogocon > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301642[queryId]=true);if(checkConditions(conditions_301642)){pageGroup_301642();}});};
		if(
			(window.location.href.indexOf('seniorenland.com') != -1)
		) {
			if(checkConditions(conditions_301642)){pageGroup_301642();}
		}
		}, 1);

		// Page group: Me Me Me Cosmetics
		var conditions_301643 = {};
		setTimeout(function() {
		function pageGroup_301643() {
			obj.placeAppNexusSegmentScript('seg?add=974020,1421883&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301643[queryId]=true);if(checkConditions(conditions_301643)){pageGroup_301643();}});};
		if(
			(window.location.href.indexOf('mememecosmetics.co.uk') != -1)
		) {
			if(checkConditions(conditions_301643)){pageGroup_301643();}
		}
		}, 1);

		// Page group: Pace n Style
		var conditions_301644 = {};
		setTimeout(function() {
		function pageGroup_301644() {
			obj.placeAppNexusSegmentScript('seg?add=990327&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301644[queryId]=true);if(checkConditions(conditions_301644)){pageGroup_301644();}});};
		if(
			(window.location.href.indexOf('pacenstyle.com') != -1)
		) {
			if(checkConditions(conditions_301644)){pageGroup_301644();}
		}
		}, 1);

		// Page group: Aquarelle
		var conditions_301645 = {};
		setTimeout(function() {
		function pageGroup_301645() {
			obj.placeAppNexusSegmentScript('seg?add=992370&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301645[queryId]=true);if(checkConditions(conditions_301645)){pageGroup_301645();}});};
		if(
			(window.location.href.indexOf('aquarelle.be') != -1)
		) {
			if(checkConditions(conditions_301645)){pageGroup_301645();}
		}
		}, 1);

		// Page group: mysalonlooks
		var conditions_301646 = {};
		setTimeout(function() {
		function pageGroup_301646() {
			obj.placeAppNexusSegmentScript('seg?add=992421,1421909&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301646[queryId]=true);if(checkConditions(conditions_301646)){pageGroup_301646();}});};
		if(
			(window.location.href.indexOf('mysalonlooks.com') != -1)
		) {
			if(checkConditions(conditions_301646)){pageGroup_301646();}
		}
		}, 1);

		// Page group: Teknosa TR Digitouch
		var conditions_301647 = {};
		setTimeout(function() {
		function pageGroup_301647() {
			obj.placeAppNexusSegmentScript('seg?add=992857&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-teknosa'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#zoom1 > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#body_spnProductName'), 					// product name
			prodPrice: getValue('div.productDetails div#divPriceBoxContainer span#body_wc_priceBoxWebControl div.priceBox table tbody tr td').split(' TL')[0].replace('.',' ').replace(' ','') + ' TL', 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://www.teknosa.com/assets/images/logo.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301647[queryId]=true);if(checkConditions(conditions_301647)){pageGroup_301647();}});};
		if(
			(window.location.href.indexOf('teknosa.com') != -1)
		) {
			if(checkConditions(conditions_301647)){pageGroup_301647();}
		}
		}, 1);

		// Page group: Butlers ES
		var conditions_301648 = {};
		setTimeout(function() {
		function pageGroup_301648() {
			obj.placeAppNexusSegmentScript('seg?add=993155&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301648[queryId]=true);if(checkConditions(conditions_301648)){pageGroup_301648();}});};
		if(
			(window.location.href.indexOf('butlers.es') != -1)
		) {
			if(checkConditions(conditions_301648)){pageGroup_301648();}
		}
		}, 1);

		// Page group: Altincicadde TR Digitouch
		var conditions_301649 = {};
		setTimeout(function() {
		function pageGroup_301649() {
			obj.placeAppNexusSegmentScript('seg?add=993489&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301649[queryId]=true);if(checkConditions(conditions_301649)){pageGroup_301649();}});};
		if(
			(window.location.href.indexOf('altincicadde.com') != -1)
		) {
			if(checkConditions(conditions_301649)){pageGroup_301649();}
		}
		}, 1);

		// Page group: Firsat.me TR Digitouch
		var conditions_301650 = {};
		setTimeout(function() {
		function pageGroup_301650() {
			obj.placeAppNexusSegmentScript('seg?add=993496&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301650[queryId]=true);if(checkConditions(conditions_301650)){pageGroup_301650();}});};
		if(
			(window.location.href.indexOf('Firsat.me') != -1)
		) {
			if(checkConditions(conditions_301650)){pageGroup_301650();}
		}
		}, 1);

		// Page group: Sporcum TR Digitouch
		var conditions_301651 = {};
		setTimeout(function() {
		function pageGroup_301651() {
			obj.placeAppNexusSegmentScript('seg?add=993502&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301651[queryId]=true);if(checkConditions(conditions_301651)){pageGroup_301651();}});};
		if(
			(window.location.href.indexOf('sporcum.com') != -1)
		) {
			if(checkConditions(conditions_301651)){pageGroup_301651();}
		}
		}, 1);

		// Page group: Morhipo TR Digitouch
		var conditions_301652 = {};
		setTimeout(function() {
		function pageGroup_301652() {
			obj.placeAppNexusSegmentScript('seg?add=993507&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-details > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > span:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-details > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logolink > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301652[queryId]=true);if(checkConditions(conditions_301652)){pageGroup_301652();}});};
		if(
			(window.location.href.indexOf('morhipo.com') != -1)
		) {
			if(checkConditions(conditions_301652)){pageGroup_301652();}
		}
		}, 1);

		// Page group: Regalfrei DE
		var conditions_301653 = {};
		setTimeout(function() {
		function pageGroup_301653() {
			obj.placeAppNexusSegmentScript('seg?add=1000501&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301653[queryId]=true);if(checkConditions(conditions_301653)){pageGroup_301653();}});};
		if(
			(window.location.href.indexOf('regalfrei.de') != -1)
		) {
			if(checkConditions(conditions_301653)){pageGroup_301653();}
		}
		}, 1);

		// Page group: Flightstore
		var conditions_301654 = {};
		setTimeout(function() {
		function pageGroup_301654() {
			obj.placeAppNexusSegmentScript('seg?add=1003861,1421837&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301654[queryId]=true);if(checkConditions(conditions_301654)){pageGroup_301654();}});};
		if(
			(window.location.href.indexOf('flightstore.co.uk') != -1)
		) {
			if(checkConditions(conditions_301654)){pageGroup_301654();}
		}
		}, 1);

		// Page group: SA Camera
		var conditions_301655 = {};
		setTimeout(function() {
		function pageGroup_301655() {
			obj.placeAppNexusSegmentScript('seg?add=1004497&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301655[queryId]=true);if(checkConditions(conditions_301655)){pageGroup_301655();}});};
		if(
			(window.location.href.indexOf('sacamera.co.za') != -1)
		) {
			if(checkConditions(conditions_301655)){pageGroup_301655();}
		}
		}, 1);

		// Page group: Shopty
		var conditions_301656 = {};
		setTimeout(function() {
		function pageGroup_301656() {
			obj.placeAppNexusSegmentScript('seg?add=1006881&t=1', null, null, null, 'None', '');

$(document).ready(function(){

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-shoptyit'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('article#main_content.prod_details section.prod_gallery figure.main_image img.main', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('article#main_content.prod_details header.title_bar_prod h1.prod_title'), 					// product name
			prodPrice: getValue('article#main_content.prod_details section.pagamento p.prezzo strong.valore'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('header#page_header h2#logo a img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();
});


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301656[queryId]=true);if(checkConditions(conditions_301656)){pageGroup_301656();}});};
		if(
			(window.location.href.indexOf('shopty.com/ita/') != -1)
		) {
			if(checkConditions(conditions_301656)){pageGroup_301656();}
		}
		}, 1);

		// Page group: Goldsmiths
		var conditions_301657 = {};
		setTimeout(function() {
		function pageGroup_301657() {
			obj.placeAppNexusSegmentScript('seg?add=1009378&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-goldsmiths'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.product-detail div.product-image div.product-view img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div.product-detail div.product-spec h1'), 					// product name
			prodPrice: getValue('div.product-detail div.product-spec div p#productPrice.product-price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://dzdmo5k9lk8wf.cloudfront.net/FlxAds-images/goldsmiths/Goldsmiths1.jpeg', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301657[queryId]=true);if(checkConditions(conditions_301657)){pageGroup_301657();}});};
		if(
			(window.location.href.indexOf('goldsmiths.co.uk') != -1)
		) {
			if(checkConditions(conditions_301657)){pageGroup_301657();}
		}
		}, 1);

		// Page group: Flowerfete.co.uk
		var conditions_301658 = {};
		setTimeout(function() {
		function pageGroup_301658() {
			obj.placeAppNexusSegmentScript('seg?add=1009714,1421912&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-flowerfete'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#mf138', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#mf198'), 					// product name
			prodPrice: getValue('#mf201'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#mf24', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301658[queryId]=true);if(checkConditions(conditions_301658)){pageGroup_301658();}});};
		if(
			(window.location.href.indexOf('flowerfete.co.uk') != -1)
		) {
			if(checkConditions(conditions_301658)){pageGroup_301658();}
		}
		}, 1);

		// Page group: Ihampers.co.uk
		var conditions_301659 = {};
		setTimeout(function() {
		function pageGroup_301659() {
			obj.placeAppNexusSegmentScript('seg?add=1009717,1421863&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-ihampers'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#ProductPic', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(6) > div:nth-child(1)'), 					// product name
			prodPrice: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301659[queryId]=true);if(checkConditions(conditions_301659)){pageGroup_301659();}});};
		if(
			(window.location.href.indexOf('ihampers.co.uk') != -1)
		) {
			if(checkConditions(conditions_301659)){pageGroup_301659();}
		}
		}, 1);

		// Page group: EmailerGo.com
		var conditions_301660 = {};
		setTimeout(function() {
		function pageGroup_301660() {
			obj.placeAppNexusSegmentScript('seg?add=1010124&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301660[queryId]=true);if(checkConditions(conditions_301660)){pageGroup_301660();}});};
		if(
			(window.location.href.indexOf('emailergo.com/') != -1)
		) {
			if(checkConditions(conditions_301660)){pageGroup_301660();}
		}
		}, 1);

		// Page group: Ski.Sunweb.co.uk FLX
		var conditions_301661 = {};
		setTimeout(function() {
		function pageGroup_301661() {
			obj.placeAppNexusSegmentScript('seg?add=1011881&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301661[queryId]=true);if(checkConditions(conditions_301661)){pageGroup_301661();}});};
		if(
			(window.location.href.indexOf('ski.sunweb.co.uk/') != -1)
		) {
			if(checkConditions(conditions_301661)){pageGroup_301661();}
		}
		}, 1);

		// Page group: Crucerosnet ES
		var conditions_301662 = {};
		setTimeout(function() {
		function pageGroup_301662() {
			obj.placeAppNexusSegmentScript('seg?add=1012286&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301662[queryId]=true);if(checkConditions(conditions_301662)){pageGroup_301662();}});};
		if(
			(window.location.href.indexOf('pi.crucerosnet.com/') != -1) ||
			(window.location.href.indexOf('crucerosnet.com/') != -1)
		) {
			if(checkConditions(conditions_301662)){pageGroup_301662();}
		}
		}, 1);

		// Page group: MyWinePortal DE
		var conditions_301663 = {};
		setTimeout(function() {
		function pageGroup_301663() {
			obj.placeAppNexusSegmentScript('seg?add=1014844&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301663[queryId]=true);if(checkConditions(conditions_301663)){pageGroup_301663();}});};
		if(
			(window.location.href.indexOf('mywineportal.com/') != -1)
		) {
			if(checkConditions(conditions_301663)){pageGroup_301663();}
		}
		}, 1);

		// Page group: Proporta
		var conditions_301664 = {};
		setTimeout(function() {
		function pageGroup_301664() {
			obj.placeAppNexusSegmentScript('seg?add=1015860,1421846&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};
		
		function getPrice(){
			var fields = ['div.product-shop div.price-box-bundle div.price-box span.price', 'div.product-shop div div.price-box span.regular-price span.price', 'div.product-shop div div.price-box p.special-price span.price'];
			for (var x = 0; x < fields.length; x++ )
			{
				var field = fields[x];
				var price =  getValue(field);
				if (price.length > 0){
					return price;
				}
			}
		}
		
		iatDomain = '182186-proporta'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.product-img-box a.prozoom-image img#image', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div.product-name h1'), 					// product name
			prodPrice: getPrice(), // getValue('div.product-shop div.price-box-bundle div.price-box span.price')?getValue('div.product-shop div.price-box-bundle div.price-box span.price'):getValue('div.product-shop div div.price-box p.special-price span.price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301664[queryId]=true);if(checkConditions(conditions_301664)){pageGroup_301664();}});};
		if(
			(window.location.href.indexOf('proporta.co.uk') != -1)
		) {
			if(checkConditions(conditions_301664)){pageGroup_301664();}
		}
		}, 1);

		// Page group: Events Retail
		var conditions_301665 = {};
		setTimeout(function() {
		function pageGroup_301665() {
			obj.placeAppNexusSegmentScript('seg?add=1018720&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301665[queryId]=true);if(checkConditions(conditions_301665)){pageGroup_301665();}});};
		if(
			(window.location.href.indexOf('eventsretail.com.au') != -1)
		) {
			if(checkConditions(conditions_301665)){pageGroup_301665();}
		}
		}, 1);

		// Page group: Base Fashion
		var conditions_301666 = {};
		setTimeout(function() {
		function pageGroup_301666() {
			obj.placeAppNexusSegmentScript('seg?add=1018834&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#imageLink', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#productPrice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > p:nth-child(1) > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301666[queryId]=true);if(checkConditions(conditions_301666)){pageGroup_301666();}});};
		if(
			(window.location.href.indexOf('basefashion.co.uk') != -1)
		) {
			if(checkConditions(conditions_301666)){pageGroup_301666();}
		}
		}, 1);

		// Page group: Spicystyles
		var conditions_301667 = {};
		setTimeout(function() {
		function pageGroup_301667() {
			obj.placeAppNexusSegmentScript('seg?add=1019026&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#imageLink', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > img:nth-child(2)'), 					// product name
			prodPrice: getValue('#productPrice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301667[queryId]=true);if(checkConditions(conditions_301667)){pageGroup_301667();}});};
		if(
			(window.location.href.indexOf('spicystyles.com') != -1)
		) {
			if(checkConditions(conditions_301667)){pageGroup_301667();}
		}
		}, 1);

		// Page group: autoteile-guenstig.de
		var conditions_301668 = {};
		setTimeout(function() {
		function pageGroup_301668() {
			obj.placeAppNexusSegmentScript('seg?add=1019221&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301668[queryId]=true);if(checkConditions(conditions_301668)){pageGroup_301668();}});};
		if(
			(window.location.href.indexOf('autoteile-guenstig.de/') != -1)
		) {
			if(checkConditions(conditions_301668)){pageGroup_301668();}
		}
		}, 1);

		// Page group: Vitalabo
		var conditions_301669 = {};
		setTimeout(function() {
		function pageGroup_301669() {
			obj.placeAppNexusSegmentScript('seg?add=1019802&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#imageLink', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > img:nth-child(2)'), 					// product name
			prodPrice: getValue('#productPrice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301669[queryId]=true);if(checkConditions(conditions_301669)){pageGroup_301669();}});};
		if(
			(window.location.href.indexOf('vitalabo.de') != -1)
		) {
			if(checkConditions(conditions_301669)){pageGroup_301669();}
		}
		}, 1);

		// Page group: Phonehero
		var conditions_301670 = {};
		setTimeout(function() {
		function pageGroup_301670() {
			obj.placeAppNexusSegmentScript('seg?add=1019863&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#imageLink', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > img:nth-child(2)'), 					// product name
			prodPrice: getValue('#productPrice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301670[queryId]=true);if(checkConditions(conditions_301670)){pageGroup_301670();}});};
		if(
			(window.location.href.indexOf('phonehero.co.uk') != -1)
		) {
			if(checkConditions(conditions_301670)){pageGroup_301670();}
		}
		}, 1);

		// Page group: Subside Sports NL
		var conditions_301671 = {};
		setTimeout(function() {
		function pageGroup_301671() {
			obj.placeAppNexusSegmentScript('seg?add=1020283&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301671[queryId]=true);if(checkConditions(conditions_301671)){pageGroup_301671();}});};
		if(
			(window.location.href.indexOf('ubsidesports.nl/') != -1)
		) {
			if(checkConditions(conditions_301671)){pageGroup_301671();}
		}
		}, 1);

		// Page group: Riccardo UK
		var conditions_301672 = {};
		setTimeout(function() {
		function pageGroup_301672() {
			obj.placeAppNexusSegmentScript('seg?add=1024426&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301672[queryId]=true);if(checkConditions(conditions_301672)){pageGroup_301672();}});};
		if(
			(window.location.href.indexOf('riccardo.pl/en/') != -1)
		) {
			if(checkConditions(conditions_301672)){pageGroup_301672();}
		}
		}, 1);

		// Page group: Screwfix Bathrooms
		var conditions_301673 = {};
		setTimeout(function() {
		function pageGroup_301673() {
			obj.placeAppNexusSegmentScript('seg?add=1025852,1421920&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301673[queryId]=true);if(checkConditions(conditions_301673)){pageGroup_301673();}});};
		if(
			(window.location.href.indexOf('screwfixbathrooms.com/') != -1)
		) {
			if(checkConditions(conditions_301673)){pageGroup_301673();}
		}
		}, 1);

		// Page group: Elite Auto
		var conditions_301674 = {};
		setTimeout(function() {
		function pageGroup_301674() {
			obj.placeAppNexusSegmentScript('seg?add=970078&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301674[queryId]=true);if(checkConditions(conditions_301674)){pageGroup_301674();}});};
		if(
			(window.location.href.indexOf('elite-auto.fr') != -1)
		) {
			if(checkConditions(conditions_301674)){pageGroup_301674();}
		}
		}, 1);

		// Page group: SOA Assurance
		var conditions_301675 = {};
		setTimeout(function() {
		function pageGroup_301675() {
			obj.placeAppNexusSegmentScript('seg?add=970067&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301675[queryId]=true);if(checkConditions(conditions_301675)){pageGroup_301675();}});};
		if(
			(window.location.href.indexOf('soassure.fr') != -1)
		) {
			if(checkConditions(conditions_301675)){pageGroup_301675();}
		}
		}, 1);

		// Page group: Pets Pyjamas
		var conditions_301676 = {};
		setTimeout(function() {
		function pageGroup_301676() {
			obj.placeAppNexusSegmentScript('seg?add=1027856,1421831&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301676[queryId]=true);if(checkConditions(conditions_301676)){pageGroup_301676();}});};
		if(
			(window.location.href.indexOf('petspyjamas.com') != -1)
		) {
			if(checkConditions(conditions_301676)){pageGroup_301676();}
		}
		}, 1);

		// Page group: Vita Apotheke DE
		var conditions_301677 = {};
		setTimeout(function() {
		function pageGroup_301677() {
			obj.placeAppNexusSegmentScript('seg?add=1027892&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301677[queryId]=true);if(checkConditions(conditions_301677)){pageGroup_301677();}});};
		if(
			(window.location.href.indexOf('vitaapotheke.eu') != -1)
		) {
			if(checkConditions(conditions_301677)){pageGroup_301677();}
		}
		}, 1);

		// Page group: Sexy Avenue ES
		var conditions_301678 = {};
		setTimeout(function() {
		function pageGroup_301678() {
			obj.placeAppNexusSegmentScript('seg?add=1028311&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301678[queryId]=true);if(checkConditions(conditions_301678)){pageGroup_301678();}});};
		if(
			(window.location.href.indexOf('sexyavenue.com/es') != -1)
		) {
			if(checkConditions(conditions_301678)){pageGroup_301678();}
		}
		}, 1);

		// Page group: Rosemary Conley
		var conditions_301679 = {};
		setTimeout(function() {
		function pageGroup_301679() {
			obj.placeAppNexusSegmentScript('seg?add=1028331,1404717&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301679[queryId]=true);if(checkConditions(conditions_301679)){pageGroup_301679();}});};
		if(
			(window.location.href.indexOf('osemaryconley.com/') != -1)
		) {
			if(checkConditions(conditions_301679)){pageGroup_301679();}
		}
		}, 1);

		// Page group: Selectcamp
		var conditions_301680 = {};
		setTimeout(function() {
		function pageGroup_301680() {
			obj.placeAppNexusSegmentScript('seg?add=1030471&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301680[queryId]=true);if(checkConditions(conditions_301680)){pageGroup_301680();}});};
		if(
			(window.location.href.indexOf('selectcamp.co.uk') != -1)
		) {
			if(checkConditions(conditions_301680)){pageGroup_301680();}
		}
		}, 1);

		// Page group: Campingselection
		var conditions_301681 = {};
		setTimeout(function() {
		function pageGroup_301681() {
			obj.placeAppNexusSegmentScript('seg?add=1030472&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301681[queryId]=true);if(checkConditions(conditions_301681)){pageGroup_301681();}});};
		if(
			(window.location.href.indexOf('campingselection.co.uk') != -1)
		) {
			if(checkConditions(conditions_301681)){pageGroup_301681();}
		}
		}, 1);

		// Page group: Gonser CH
		var conditions_301682 = {};
		setTimeout(function() {
		function pageGroup_301682() {
			obj.placeAppNexusSegmentScript('seg?add=1030524&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301682[queryId]=true);if(checkConditions(conditions_301682)){pageGroup_301682();}});};
		if(
			(window.location.href.indexOf('gonser.ch') != -1)
		) {
			if(checkConditions(conditions_301682)){pageGroup_301682();}
		}
		}, 1);

		// Page group: Zedlighting
		var conditions_301683 = {};
		setTimeout(function() {
		function pageGroup_301683() {
			obj.placeAppNexusSegmentScript('seg?add=1031071&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301683[queryId]=true);if(checkConditions(conditions_301683)){pageGroup_301683();}});};
		if(
			(window.location.href.indexOf('zedlighting.fr') != -1)
		) {
			if(checkConditions(conditions_301683)){pageGroup_301683();}
		}
		}, 1);

		// Page group: Foffa Bikes 
		var conditions_301684 = {};
		setTimeout(function() {
		function pageGroup_301684() {
			obj.placeAppNexusSegmentScript('seg?add=1033068&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product-gallery-large > ul:nth-child(1) > li:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-content > header:nth-child(1) > h1:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-price > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#top-logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301684[queryId]=true);if(checkConditions(conditions_301684)){pageGroup_301684();}});};
		if(
			(window.location.href.indexOf('foffabikes.com') != -1)
		) {
			if(checkConditions(conditions_301684)){pageGroup_301684();}
		}
		}, 1);

		// Page group: Mobile Phones Direct
		var conditions_301685 = {};
		setTimeout(function() {
		function pageGroup_301685() {
			obj.placeAppNexusSegmentScript('seg?add=1033084&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-mpd'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.product div.product-detail div.hero-shot img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div.product div.product-detail h1.product-title'), 					// product name
			prodPrice: getValue('div.hero-tabs div.hero-tabs-container div.scroller div.hero-tab p.main-price'), 					// product price (optional)
			desc: 'per month', 						// additional short description (optional)
			logo: getValue('header.header a.logo img', true), 						// product brand logo (optional)
			custom1: 'FREE from', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301685[queryId]=true);if(checkConditions(conditions_301685)){pageGroup_301685();}});};
		if(
			(window.location.href.indexOf('mobilephonesdirect.co.uk') != -1)
		) {
			if(checkConditions(conditions_301685)){pageGroup_301685();}
		}
		}, 1);

		// Page group: Working Class Heroes 
		var conditions_301686 = {};
		setTimeout(function() {
		function pageGroup_301686() {
			obj.placeAppNexusSegmentScript('seg?add=1033107&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product-gallery-large > ul:nth-child(1) > li:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-content > header:nth-child(1) > h1:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-price > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#top-logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301686[queryId]=true);if(checkConditions(conditions_301686)){pageGroup_301686();}});};
		if(
			(window.location.href.indexOf('workingclassheroes.co.uk') != -1)
		) {
			if(checkConditions(conditions_301686)){pageGroup_301686();}
		}
		}, 1);

		// Page group: Webprint.nl
		var conditions_301687 = {};
		setTimeout(function() {
		function pageGroup_301687() {
			obj.placeAppNexusSegmentScript('seg?add=1033417&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301687[queryId]=true);if(checkConditions(conditions_301687)){pageGroup_301687();}});};
		if(
			(window.location.href.indexOf('webprint.nl') != -1)
		) {
			if(checkConditions(conditions_301687)){pageGroup_301687();}
		}
		}, 1);

		// Page group: 121doc UK
		var conditions_301688 = {};
		setTimeout(function() {
		function pageGroup_301688() {
			obj.placeAppNexusSegmentScript('seg?add=1033428&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product-gallery-large > ul:nth-child(1) > li:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-content > header:nth-child(1) > h1:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-price > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#top-logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301688[queryId]=true);if(checkConditions(conditions_301688)){pageGroup_301688();}});};
		if(
			(window.location.href.indexOf('121doc.co.uk') != -1)
		) {
			if(checkConditions(conditions_301688)){pageGroup_301688();}
		}
		}, 1);

		// Page group: Ki Ski FR
		var conditions_301689 = {};
		setTimeout(function() {
		function pageGroup_301689() {
			obj.placeAppNexusSegmentScript('seg?add=1034831&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301689[queryId]=true);if(checkConditions(conditions_301689)){pageGroup_301689();}});};
		if(
			(window.location.href.indexOf('ki-ski.fr') != -1)
		) {
			if(checkConditions(conditions_301689)){pageGroup_301689();}
		}
		}, 1);

		// Page group: One Honey Boutique
		var conditions_301690 = {};
		setTimeout(function() {
		function pageGroup_301690() {
			obj.placeAppNexusSegmentScript('seg?add=1036877&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-onehoneyboutique'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div#bigimage.desktop-10 img#img_01', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#product-description.desktop-10 h1'), 					// product name
			prodPrice: getValue('span.product-price span.money'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://cdn.shopify.com/s/files/1/0065/4132/t/7/assets/logo.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301690[queryId]=true);if(checkConditions(conditions_301690)){pageGroup_301690();}});};
		if(
			(window.location.href.indexOf('onehoneyboutique.com') != -1)
		) {
			if(checkConditions(conditions_301690)){pageGroup_301690();}
		}
		}, 1);

		// Page group: 121 Doc IT
		var conditions_301691 = {};
		setTimeout(function() {
		function pageGroup_301691() {
			obj.placeAppNexusSegmentScript('seg?add=1036985&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301691[queryId]=true);if(checkConditions(conditions_301691)){pageGroup_301691();}});};
		if(
			(window.location.href.indexOf('it.121doc.net/') != -1)
		) {
			if(checkConditions(conditions_301691)){pageGroup_301691();}
		}
		}, 1);

		// Page group: Outlet Inn IT
		var conditions_301692 = {};
		setTimeout(function() {
		function pageGroup_301692() {
			obj.placeAppNexusSegmentScript('seg?add=1036990&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301692[queryId]=true);if(checkConditions(conditions_301692)){pageGroup_301692();}});};
		if(
			(window.location.href.indexOf('outletinn.com/offerte') != -1)
		) {
			if(checkConditions(conditions_301692)){pageGroup_301692();}
		}
		}, 1);

		// Page group: Bakker IT
		var conditions_301693 = {};
		setTimeout(function() {
		function pageGroup_301693() {
			obj.placeAppNexusSegmentScript('seg?add=1036993&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301693[queryId]=true);if(checkConditions(conditions_301693)){pageGroup_301693();}});};
		if(
			(window.location.href.indexOf('bakker-it.com') != -1)
		) {
			if(checkConditions(conditions_301693)){pageGroup_301693();}
		}
		}, 1);

		// Page group: Homair IT
		var conditions_301694 = {};
		setTimeout(function() {
		function pageGroup_301694() {
			obj.placeAppNexusSegmentScript('seg?add=1036994&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301694[queryId]=true);if(checkConditions(conditions_301694)){pageGroup_301694();}});};
		if(
			(window.location.href.indexOf('homair.com/it') != -1)
		) {
			if(checkConditions(conditions_301694)){pageGroup_301694();}
		}
		}, 1);

		// Page group: Seven Acorns
		var conditions_301695 = {};
		setTimeout(function() {
		function pageGroup_301695() {
			obj.placeAppNexusSegmentScript('seg?add=1037029&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301695[queryId]=true);if(checkConditions(conditions_301695)){pageGroup_301695();}});};
		if(
			(window.location.href.indexOf('sevenacorns.co.uk') != -1)
		) {
			if(checkConditions(conditions_301695)){pageGroup_301695();}
		}
		}, 1);

		// Page group: Eenvakantiehuisje.nl
		var conditions_301696 = {};
		setTimeout(function() {
		function pageGroup_301696() {
			obj.placeAppNexusSegmentScript('seg?add=1037036&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301696[queryId]=true);if(checkConditions(conditions_301696)){pageGroup_301696();}});};
		if(
			(window.location.href.indexOf('eenvakantiehuisje.nl') != -1)
		) {
			if(checkConditions(conditions_301696)){pageGroup_301696();}
		}
		}, 1);

		// Page group: Misspera TR Digitouch 2
		var conditions_301697 = {};
		setTimeout(function() {
		function pageGroup_301697() {
			obj.placeAppNexusSegmentScript('seg?add=1037361&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product-gallery-large > ul:nth-child(1) > li:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-content > header:nth-child(1) > h1:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-price > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#top-logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301697[queryId]=true);if(checkConditions(conditions_301697)){pageGroup_301697();}});};
		if(
			(window.location.href.indexOf('misspera.com') != -1)
		) {
			if(checkConditions(conditions_301697)){pageGroup_301697();}
		}
		}, 1);

		// Page group: Tradeinn IT
		var conditions_301698 = {};
		setTimeout(function() {
		function pageGroup_301698() {
			obj.placeAppNexusSegmentScript('seg?add=1037422&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301698[queryId]=true);if(checkConditions(conditions_301698)){pageGroup_301698();}});};
		if(
			(window.location.href.indexOf('scubastore.com/immersione') != -1) ||
			(window.location.href.indexOf('swiminn.com/nuoto') != -1) ||
			(window.location.href.indexOf('trekkinn.com/montagna') != -1) ||
			(window.location.href.indexOf('snowinn.com/sci') != -1) ||
			(window.location.href.indexOf('bikeinn.com/negozio-ciclismo') != -1) ||
			(window.location.href.indexOf('runnerinn.com/corsa') != -1) ||
			(window.location.href.indexOf('smashinn.com/negozio-tennis') != -1) ||
			(window.location.href.indexOf('waveinn.com/negozio-nautica') != -1) ||
			(window.location.href.indexOf('motardinn.com/accessori-moto') != -1)
		) {
			if(checkConditions(conditions_301698)){pageGroup_301698();}
		}
		}, 1);

		// Page group: Scarlette
		var conditions_301699 = {};
		setTimeout(function() {
		function pageGroup_301699() {
			obj.placeAppNexusSegmentScript('seg?add=1039301&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301699[queryId]=true);if(checkConditions(conditions_301699)){pageGroup_301699();}});};
		if(
			(window.location.href.indexOf('scarlett.fr') != -1)
		) {
			if(checkConditions(conditions_301699)){pageGroup_301699();}
		}
		}, 1);

		// Page group: Ki Ski FR
		var conditions_301700 = {};
		setTimeout(function() {
		function pageGroup_301700() {
			obj.placeAppNexusSegmentScript('seg?add=1039302&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301700[queryId]=true);if(checkConditions(conditions_301700)){pageGroup_301700();}});};
		if(
			(window.location.href.indexOf('ki-ski.fr') != -1)
		) {
			if(checkConditions(conditions_301700)){pageGroup_301700();}
		}
		}, 1);

		// Page group: Artist Guitar
		var conditions_301701 = {};
		setTimeout(function() {
		function pageGroup_301701() {
			obj.placeAppNexusSegmentScript('seg?add=1039327&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '�').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-artistguitars'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('a.product_images div.zoom img#main-image', true), 					// url of the product image
			destUrl: window.location.href.replace("http://www.artistguitars.com.au/", "https://track.commissionfactory.com.au/t/11970/9729/"), 	// landing page url
			prodName: getValue('div.page-header h1'), 					// product name
			prodPrice: getValue('div#buy-child-list table.table tbody tr td div.child-price')?getValue('div#buy-child-list table.table tbody tr td div.child-price'):getValue('div#_jstl__nbuying_options_r div div.price-con div.price-right span.productprice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://dzdmo5k9lk8wf.cloudfront.net/FlxAds-images/artistguitars/logo.jpg', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();

		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301701[queryId]=true);if(checkConditions(conditions_301701)){pageGroup_301701();}});};
		if(
			(window.location.href.indexOf('artistguitars.com.au') != -1)
		) {
			if(checkConditions(conditions_301701)){pageGroup_301701();}
		}
		}, 1);

		// Page group: Design Seller DE
		var conditions_301702 = {};
		setTimeout(function() {
		function pageGroup_301702() {
			obj.placeAppNexusSegmentScript('seg?add=1039333&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301702[queryId]=true);if(checkConditions(conditions_301702)){pageGroup_301702();}});};
		if(
			(window.location.href.indexOf('designseller.de') != -1)
		) {
			if(checkConditions(conditions_301702)){pageGroup_301702();}
		}
		}, 1);

		// Page group: Biuky AT
		var conditions_301703 = {};
		setTimeout(function() {
		function pageGroup_301703() {
			obj.placeAppNexusSegmentScript('seg?add=1039337&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301703[queryId]=true);if(checkConditions(conditions_301703)){pageGroup_301703();}});};
		if(
			(window.location.href.indexOf('biuky.at') != -1)
		) {
			if(checkConditions(conditions_301703)){pageGroup_301703();}
		}
		}, 1);

		// Page group: Biuky BE
		var conditions_301704 = {};
		setTimeout(function() {
		function pageGroup_301704() {
			obj.placeAppNexusSegmentScript('seg?add=1039341&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301704[queryId]=true);if(checkConditions(conditions_301704)){pageGroup_301704();}});};
		if(
			(window.location.href.indexOf('biuky.be') != -1)
		) {
			if(checkConditions(conditions_301704)){pageGroup_301704();}
		}
		}, 1);

		// Page group: Biuky DE
		var conditions_301705 = {};
		setTimeout(function() {
		function pageGroup_301705() {
			obj.placeAppNexusSegmentScript('seg?add=1039345&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301705[queryId]=true);if(checkConditions(conditions_301705)){pageGroup_301705();}});};
		if(
			(window.location.href.indexOf('biuky.de') != -1)
		) {
			if(checkConditions(conditions_301705)){pageGroup_301705();}
		}
		}, 1);

		// Page group: Biuky NL
		var conditions_301706 = {};
		setTimeout(function() {
		function pageGroup_301706() {
			obj.placeAppNexusSegmentScript('seg?add=1039347&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301706[queryId]=true);if(checkConditions(conditions_301706)){pageGroup_301706();}});};
		if(
			(window.location.href.indexOf('biuky.nl') != -1)
		) {
			if(checkConditions(conditions_301706)){pageGroup_301706();}
		}
		}, 1);

		// Page group: Biuky PT
		var conditions_301707 = {};
		setTimeout(function() {
		function pageGroup_301707() {
			obj.placeAppNexusSegmentScript('seg?add=1039348&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301707[queryId]=true);if(checkConditions(conditions_301707)){pageGroup_301707();}});};
		if(
			(window.location.href.indexOf('biuky.pt') != -1)
		) {
			if(checkConditions(conditions_301707)){pageGroup_301707();}
		}
		}, 1);

		// Page group: Allseasonparks DE
		var conditions_301708 = {};
		setTimeout(function() {
		function pageGroup_301708() {
			obj.placeAppNexusSegmentScript('seg?add=1039408&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301708[queryId]=true);if(checkConditions(conditions_301708)){pageGroup_301708();}});};
		if(
			(window.location.href.indexOf('allseasonparks.de') != -1)
		) {
			if(checkConditions(conditions_301708)){pageGroup_301708();}
		}
		}, 1);

		// Page group: Ferienparkmirow DE
		var conditions_301709 = {};
		setTimeout(function() {
		function pageGroup_301709() {
			obj.placeAppNexusSegmentScript('seg?add=1039410&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301709[queryId]=true);if(checkConditions(conditions_301709)){pageGroup_301709();}});};
		if(
			(window.location.href.indexOf('ferienpark-mirow.de') != -1)
		) {
			if(checkConditions(conditions_301709)){pageGroup_301709();}
		}
		}, 1);

		// Page group: Ferienparkmueritz DE
		var conditions_301710 = {};
		setTimeout(function() {
		function pageGroup_301710() {
			obj.placeAppNexusSegmentScript('seg?add=1039412&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301710[queryId]=true);if(checkConditions(conditions_301710)){pageGroup_301710();}});};
		if(
			(window.location.href.indexOf('ferienparkmueritz.de') != -1)
		) {
			if(checkConditions(conditions_301710)){pageGroup_301710();}
		}
		}, 1);

		// Page group: Aparthotel Seepanorama DE
		var conditions_301711 = {};
		setTimeout(function() {
		function pageGroup_301711() {
			obj.placeAppNexusSegmentScript('seg?add=1039413&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301711[queryId]=true);if(checkConditions(conditions_301711)){pageGroup_301711();}});};
		if(
			(window.location.href.indexOf('aparthotel-seepanorama.de') != -1)
		) {
			if(checkConditions(conditions_301711)){pageGroup_301711();}
		}
		}, 1);

		// Page group: sevenacorns.com
		var conditions_301712 = {};
		setTimeout(function() {
		function pageGroup_301712() {
			obj.placeAppNexusSegmentScript('seg?add=1042793&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301712[queryId]=true);if(checkConditions(conditions_301712)){pageGroup_301712();}});};
		if(
			(window.location.href.indexOf('sevenacorns.com') != -1)
		) {
			if(checkConditions(conditions_301712)){pageGroup_301712();}
		}
		}, 1);

		// Page group: Belinda Jane's
		var conditions_301713 = {};
		setTimeout(function() {
		function pageGroup_301713() {
			obj.placeAppNexusSegmentScript('seg?add=1043232&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-belindajanes'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.ProductThumb div.ProductThumbImage a div.zoomPad img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#ProductDetails.Block div.BlockContent div.ProductMain h1'), 					// product name
			prodPrice: getValue('div.ProductPriceWrap div.DetailRow div.Value em.ProductPrice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://dzdmo5k9lk8wf.cloudfront.net/FlxAds-images/belindajanes/belinda-janes.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();

		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301713[queryId]=true);if(checkConditions(conditions_301713)){pageGroup_301713();}});};
		if(
			(window.location.href.indexOf('belindajanes.com') != -1)
		) {
			if(checkConditions(conditions_301713)){pageGroup_301713();}
		}
		}, 1);

		// Page group: Polstereibedarf DE
		var conditions_301714 = {};
		setTimeout(function() {
		function pageGroup_301714() {
			obj.placeAppNexusSegmentScript('seg?add=1044672&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301714[queryId]=true);if(checkConditions(conditions_301714)){pageGroup_301714();}});};
		if(
			(window.location.href.indexOf('polstereibedarf-online.de') != -1)
		) {
			if(checkConditions(conditions_301714)){pageGroup_301714();}
		}
		}, 1);

		// Page group: Trendbad24 DE
		var conditions_301715 = {};
		setTimeout(function() {
		function pageGroup_301715() {
			obj.placeAppNexusSegmentScript('seg?add=1044676&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301715[queryId]=true);if(checkConditions(conditions_301715)){pageGroup_301715();}});};
		if(
			(window.location.href.indexOf('trendbad24.de') != -1)
		) {
			if(checkConditions(conditions_301715)){pageGroup_301715();}
		}
		}, 1);

		// Page group: My Topia AU
		var conditions_301716 = {};
		setTimeout(function() {
		function pageGroup_301716() {
			obj.placeAppNexusSegmentScript('seg?add=1045954&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-mytopia'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('a.product_images div.zoom img#main-image', true), 					// url of the product image
			destUrl: window.location.href.replace("http://mytopia.co.au/", "https://track.commissionfactory.com.au/t/11970/10966/"), 	// landing page url
			prodName: getValue('div#_jstl__header_r div.page-header h1'), 					// product name
			prodPrice: getValue('div#_jstl__pricing div#_jstl__pricing_r div.productprice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://www.mytopia.com.au/assets/themes/default/img/logo.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();

		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301716[queryId]=true);if(checkConditions(conditions_301716)){pageGroup_301716();}});};
		if(
			(window.location.href.indexOf('mytopia.com.au') != -1)
		) {
			if(checkConditions(conditions_301716)){pageGroup_301716();}
		}
		}, 1);

		// Page group: Barbel Drexel
		var conditions_301717 = {};
		setTimeout(function() {
		function pageGroup_301717() {
			obj.placeAppNexusSegmentScript('seg?add=1046322&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301717[queryId]=true);if(checkConditions(conditions_301717)){pageGroup_301717();}});};
		if(
			(window.location.href.indexOf('shop.baerbel-drexel.com') != -1)
		) {
			if(checkConditions(conditions_301717)){pageGroup_301717();}
		}
		}, 1);

		// Page group: Erstenachhilfe DE
		var conditions_301718 = {};
		setTimeout(function() {
		function pageGroup_301718() {
			obj.placeAppNexusSegmentScript('seg?add=1046326&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301718[queryId]=true);if(checkConditions(conditions_301718)){pageGroup_301718();}});};
		if(
			(window.location.href.indexOf('erstenachhilfe.de') != -1)
		) {
			if(checkConditions(conditions_301718)){pageGroup_301718();}
		}
		}, 1);

		// Page group: Campus Gifts 
		var conditions_301719 = {};
		setTimeout(function() {
		function pageGroup_301719() {
			obj.placeAppNexusSegmentScript('seg?add=1047717&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product-gallery-large > ul:nth-child(1) > li:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-content > header:nth-child(1) > h1:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-price > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#top-logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301719[queryId]=true);if(checkConditions(conditions_301719)){pageGroup_301719();}});};
		if(
			(window.location.href.indexOf('campusgifts.co.uk') != -1)
		) {
			if(checkConditions(conditions_301719)){pageGroup_301719();}
		}
		}, 1);

		// Page group: Temptation Gifts
		var conditions_301720 = {};
		setTimeout(function() {
		function pageGroup_301720() {
			obj.placeAppNexusSegmentScript('seg?add=1047731&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product-gallery-large > ul:nth-child(1) > li:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-content > header:nth-child(1) > h1:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-price > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#top-logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301720[queryId]=true);if(checkConditions(conditions_301720)){pageGroup_301720();}});};
		if(
			(window.location.href.indexOf('temptationgifts.com') != -1)
		) {
			if(checkConditions(conditions_301720)){pageGroup_301720();}
		}
		}, 1);

		// Page group: Floraprima DE
		var conditions_301721 = {};
		setTimeout(function() {
		function pageGroup_301721() {
			obj.placeAppNexusSegmentScript('seg?add=1047825&t=1', null, null, null, 'None', '');

console.log('loading');
(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-floraprima'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div#content form#artikelForm div.artikeldarstellung a img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#content form#artikelForm div.artikeldetailbox div.artikeldetail h1'), 					// product name
			prodPrice: getValue('tbody tr td div#preisupdate'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div#kopf div#logo a img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301721[queryId]=true);if(checkConditions(conditions_301721)){pageGroup_301721();}});};
		if(
			(window.location.href.indexOf('floraprima.de') != -1)
		) {
			if(checkConditions(conditions_301721)){pageGroup_301721();}
		}
		}, 1);

		// Page group: Netzclub DE
		var conditions_301722 = {};
		setTimeout(function() {
		function pageGroup_301722() {
			obj.placeAppNexusSegmentScript('seg?add=1047843&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301722[queryId]=true);if(checkConditions(conditions_301722)){pageGroup_301722();}});};
		if(
			(window.location.href.indexOf('netzclub.net') != -1)
		) {
			if(checkConditions(conditions_301722)){pageGroup_301722();}
		}
		}, 1);

		// Page group: BikeInn (Belboon)
		var conditions_301723 = {};
		setTimeout(function() {
		function pageGroup_301723() {
			obj.placeAppNexusSegmentScript('seg?add=1048089&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301723[queryId]=true);if(checkConditions(conditions_301723)){pageGroup_301723();}});};
		if(
			(window.location.href.indexOf('bikeinn.com') != -1)
		) {
			if(checkConditions(conditions_301723)){pageGroup_301723();}
		}
		}, 1);

		// Page group: DiveInn (Belboon)
		var conditions_301724 = {};
		setTimeout(function() {
		function pageGroup_301724() {
			obj.placeAppNexusSegmentScript('seg?add=1048092&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301724[queryId]=true);if(checkConditions(conditions_301724)){pageGroup_301724();}});};
		if(
			(window.location.href.indexOf('scubastore.com') != -1)
		) {
			if(checkConditions(conditions_301724)){pageGroup_301724();}
		}
		}, 1);

		// Page group: Motardinn (Belboon)
		var conditions_301725 = {};
		setTimeout(function() {
		function pageGroup_301725() {
			obj.placeAppNexusSegmentScript('seg?add=1048094&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301725[queryId]=true);if(checkConditions(conditions_301725)){pageGroup_301725();}});};
		if(
			(window.location.href.indexOf('motardinn.com') != -1)
		) {
			if(checkConditions(conditions_301725)){pageGroup_301725();}
		}
		}, 1);

		// Page group: Outlet Inn (belboon)
		var conditions_301726 = {};
		setTimeout(function() {
		function pageGroup_301726() {
			obj.placeAppNexusSegmentScript('seg?add=1048096&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301726[queryId]=true);if(checkConditions(conditions_301726)){pageGroup_301726();}});};
		if(
			(window.location.href.indexOf('outletinn.com') != -1)
		) {
			if(checkConditions(conditions_301726)){pageGroup_301726();}
		}
		}, 1);

		// Page group: Smashinn (belboon)
		var conditions_301727 = {};
		setTimeout(function() {
		function pageGroup_301727() {
			obj.placeAppNexusSegmentScript('seg?add=1048097&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301727[queryId]=true);if(checkConditions(conditions_301727)){pageGroup_301727();}});};
		if(
			(window.location.href.indexOf('smashinn.com') != -1)
		) {
			if(checkConditions(conditions_301727)){pageGroup_301727();}
		}
		}, 1);

		// Page group: Swiminn (belboon)
		var conditions_301728 = {};
		setTimeout(function() {
		function pageGroup_301728() {
			obj.placeAppNexusSegmentScript('seg?add=1048102&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301728[queryId]=true);if(checkConditions(conditions_301728)){pageGroup_301728();}});};
		if(
			(window.location.href.indexOf('swiminn.com') != -1)
		) {
			if(checkConditions(conditions_301728)){pageGroup_301728();}
		}
		}, 1);

		// Page group: Trekkin (belboon)
		var conditions_301729 = {};
		setTimeout(function() {
		function pageGroup_301729() {
			obj.placeAppNexusSegmentScript('seg?add=1048110&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301729[queryId]=true);if(checkConditions(conditions_301729)){pageGroup_301729();}});};
		if(
			(window.location.href.indexOf('trekkinn.com') != -1)
		) {
			if(checkConditions(conditions_301729)){pageGroup_301729();}
		}
		}, 1);

		// Page group: Waveinn (belboon)
		var conditions_301730 = {};
		setTimeout(function() {
		function pageGroup_301730() {
			obj.placeAppNexusSegmentScript('seg?add=1048115&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301730[queryId]=true);if(checkConditions(conditions_301730)){pageGroup_301730();}});};
		if(
			(window.location.href.indexOf('waveinn.com') != -1)
		) {
			if(checkConditions(conditions_301730)){pageGroup_301730();}
		}
		}, 1);

		// Page group: Goodwheel DE
		var conditions_301731 = {};
		setTimeout(function() {
		function pageGroup_301731() {
			obj.placeAppNexusSegmentScript('seg?add=1048586&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-goodwheel'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.product-img-box div.clearfix a.jqzoom div.zoomPad img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div.product-shop div.product-name h1'), 					// product name
			prodPrice: getValue('div.product-shop div.price-box span.regular-price span.price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div.header-container div.header a.logo img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301731[queryId]=true);if(checkConditions(conditions_301731)){pageGroup_301731();}});};
		if(
			(window.location.href.indexOf('goodwheel.de') != -1)
		) {
			if(checkConditions(conditions_301731)){pageGroup_301731();}
		}
		}, 1);

		// Page group: Dokteronline SE
		var conditions_301732 = {};
		setTimeout(function() {
		function pageGroup_301732() {
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301732[queryId]=true);if(checkConditions(conditions_301732)){pageGroup_301732();}});};
		if(
			(window.location.href.indexOf('dokteronline.com/se/') != -1)
		) {
			if(checkConditions(conditions_301732)){pageGroup_301732();}
		}
		}, 1);

		// Page group: Graig Farm
		var conditions_301733 = {};
		setTimeout(function() {
		function pageGroup_301733() {
			obj.placeAppNexusSegmentScript('seg?add=1050562&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#product-gallery-large > ul:nth-child(1) > li:nth-child(1) > img:nth-child(1)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product-content > header:nth-child(1) > h1:nth-child(2)'), 					// product name
			prodPrice: getValue('#product-price > strong:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#top-logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301733[queryId]=true);if(checkConditions(conditions_301733)){pageGroup_301733();}});};
		if(
			(window.location.href.indexOf('graigfarm.co.uk') != -1)
		) {
			if(checkConditions(conditions_301733)){pageGroup_301733();}
		}
		}, 1);

		// Page group: Ysora
		var conditions_301734 = {};
		setTimeout(function() {
		function pageGroup_301734() {
			obj.placeAppNexusSegmentScript('seg?add=1054072&t=1', null, null, null, 'None', '');

(function(i) {
	  var u = navigator.userAgent.toLowerCase();
	  var ie = !!window.ActiveXObject;
	  if (/webkit/.test(u) || (/mozilla/.test(u) && !/(compatible)/.test(u)) ||
				 (/opera/.test(u))) {
		// all
		timeout = setTimeout(function(){
				if ( document.readyState == "loaded" || 
					document.readyState == "complete" ) {
					i();
				} else {
				  setTimeout(arguments.callee,10);
				}
			}, 10);
	  } else if (ie) {
		// IE
		(function (){
		  var tempNode = document.createElement('document:ready');
		  try {
			tempNode.doScroll('left');
			i();
			tempNode = null;
		  } catch(e) {
			setTimeout(arguments.callee, 10);
		  }
		})();
	  }
	})(function() {

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-ysora'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#bigpic', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#pb-right-column.grid_2 section.product_description header hgroup h1.fn'), 					// product name
			prodPrice: getValue('#our_price_display'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div.grid_2 a.site_title img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


});

		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301734[queryId]=true);if(checkConditions(conditions_301734)){pageGroup_301734();}});};
		if(
			(window.location.href.indexOf('ysora.com/fr/') != -1)
		) {
			if(checkConditions(conditions_301734)){pageGroup_301734();}
		}
		}, 1);

		// Page group: My vitibox
		var conditions_301735 = {};
		setTimeout(function() {
		function pageGroup_301735() {
			obj.placeAppNexusSegmentScript('seg?add=1054073&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301735[queryId]=true);if(checkConditions(conditions_301735)){pageGroup_301735();}});};
		if(
			(window.location.href.indexOf('myvitibox.com') != -1)
		) {
			if(checkConditions(conditions_301735)){pageGroup_301735();}
		}
		}, 1);

		// Page group: Signals FR 
		var conditions_301736 = {};
		setTimeout(function() {
		function pageGroup_301736() {
			obj.placeAppNexusSegmentScript('seg?add=1054076&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301736[queryId]=true);if(checkConditions(conditions_301736)){pageGroup_301736();}});};
		if(
			(window.location.href.indexOf('signals.fr') != -1)
		) {
			if(checkConditions(conditions_301736)){pageGroup_301736();}
		}
		}, 1);

		// Page group: Juritravail FR
		var conditions_301737 = {};
		setTimeout(function() {
		function pageGroup_301737() {
			obj.placeAppNexusSegmentScript('seg?add=1054078&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301737[queryId]=true);if(checkConditions(conditions_301737)){pageGroup_301737();}});};
		if(
			(window.location.href.indexOf('juritravail.com') != -1)
		) {
			if(checkConditions(conditions_301737)){pageGroup_301737();}
		}
		}, 1);

		// Page group: Pompe a biere
		var conditions_301738 = {};
		setTimeout(function() {
		function pageGroup_301738() {
			obj.placeAppNexusSegmentScript('seg?add=1054088&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301738[queryId]=true);if(checkConditions(conditions_301738)){pageGroup_301738();}});};
		if(
			(window.location.href.indexOf('pompe-a-biere.com') != -1)
		) {
			if(checkConditions(conditions_301738)){pageGroup_301738();}
		}
		}, 1);

		// Page group: Urech CH
		var conditions_301739 = {};
		setTimeout(function() {
		function pageGroup_301739() {
			obj.placeAppNexusSegmentScript('seg?add=1056271,1435772&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301739[queryId]=true);if(checkConditions(conditions_301739)){pageGroup_301739();}});};
		if(
			(window.location.href.indexOf('urech.com') != -1)
		) {
			if(checkConditions(conditions_301739)){pageGroup_301739();}
		}
		}, 1);

		// Page group: Medic Animal FR 
		var conditions_301740 = {};
		setTimeout(function() {
		function pageGroup_301740() {
			obj.placeAppNexusSegmentScript('seg?add=1056548&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-medicanimal'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#productImage', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#TopProductInfo > div:nth-child(2) > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301740[queryId]=true);if(checkConditions(conditions_301740)){pageGroup_301740();}});};
		if(
			(window.location.href.indexOf('medicanimal.com') != -1)
		) {
			if(checkConditions(conditions_301740)){pageGroup_301740();}
		}
		}, 1);

		// Page group: Tradeinn IT EFF (Runnerinn)
		var conditions_301741 = {};
		setTimeout(function() {
		function pageGroup_301741() {
			obj.placeAppNexusSegmentScript('seg?add=1057055&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301741[queryId]=true);if(checkConditions(conditions_301741)){pageGroup_301741();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301741)){pageGroup_301741();}
		}
		}, 1);

		// Page group: BigFatLottos
		var conditions_301742 = {};
		setTimeout(function() {
		function pageGroup_301742() {
			obj.placeAppNexusSegmentScript('seg?add=1058868&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301742[queryId]=true);if(checkConditions(conditions_301742)){pageGroup_301742();}});};
		if(
			(window.location.href.indexOf('bigfatlottos.com/ppclpeua') != -1)
		) {
			if(checkConditions(conditions_301742)){pageGroup_301742();}
		}
		}, 1);

		// Page group: All Season Parks DE
		var conditions_301743 = {};
		setTimeout(function() {
		function pageGroup_301743() {
			obj.placeAppNexusSegmentScript('seg?add=1059023&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301743[queryId]=true);if(checkConditions(conditions_301743)){pageGroup_301743();}});};
		if(
			(window.location.href.indexOf('allseasonparks.de') != -1)
		) {
			if(checkConditions(conditions_301743)){pageGroup_301743();}
		}
		}, 1);

		// Page group: Ferienpark-mirow DE
		var conditions_301744 = {};
		setTimeout(function() {
		function pageGroup_301744() {
			obj.placeAppNexusSegmentScript('seg?add=1059024&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301744[queryId]=true);if(checkConditions(conditions_301744)){pageGroup_301744();}});};
		if(
			(window.location.href.indexOf('ferienpark-mirow.de') != -1)
		) {
			if(checkConditions(conditions_301744)){pageGroup_301744();}
		}
		}, 1);

		// Page group: Kuoni CH
		var conditions_301745 = {};
		setTimeout(function() {
		function pageGroup_301745() {
			obj.placeAppNexusSegmentScript('seg?add=1059280,1437814&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301745[queryId]=true);if(checkConditions(conditions_301745)){pageGroup_301745();}});};
		if(
			(window.location.href.indexOf('kuoni.ch/') != -1)
		) {
			if(checkConditions(conditions_301745)){pageGroup_301745();}
		}
		}, 1);

		// Page group: Myparfum.de
		var conditions_301746 = {};
		setTimeout(function() {
		function pageGroup_301746() {
			obj.placeAppNexusSegmentScript('seg?add=1060671&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301746[queryId]=true);if(checkConditions(conditions_301746)){pageGroup_301746();}});};
		if(
			(window.location.href.indexOf('myparfum.de/') != -1)
		) {
			if(checkConditions(conditions_301746)){pageGroup_301746();}
		}
		}, 1);

		// Page group: Melt Chocolate
		var conditions_301747 = {};
		setTimeout(function() {
		function pageGroup_301747() {
			obj.placeAppNexusSegmentScript('seg?add=1060675&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301747[queryId]=true);if(checkConditions(conditions_301747)){pageGroup_301747();}});};
		if(
			(window.location.href.indexOf('meltchocolates.com') != -1)
		) {
			if(checkConditions(conditions_301747)){pageGroup_301747();}
		}
		}, 1);

		// Page group: Huggler
		var conditions_301748 = {};
		setTimeout(function() {
		function pageGroup_301748() {
			obj.placeAppNexusSegmentScript('seg?add=1060707&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301748[queryId]=true);if(checkConditions(conditions_301748)){pageGroup_301748();}});};
		if(
			(window.location.href.indexOf('huggler.com') != -1)
		) {
			if(checkConditions(conditions_301748)){pageGroup_301748();}
		}
		}, 1);

		// Page group: Pilot Clothing
		var conditions_301749 = {};
		setTimeout(function() {
		function pageGroup_301749() {
			obj.placeAppNexusSegmentScript('seg?add=1060715&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301749[queryId]=true);if(checkConditions(conditions_301749)){pageGroup_301749();}});};
		if(
			(window.location.href.indexOf('netclothing.net') != -1)
		) {
			if(checkConditions(conditions_301749)){pageGroup_301749();}
		}
		}, 1);

		// Page group: Neals Yard Remedies
		var conditions_301750 = {};
		setTimeout(function() {
		function pageGroup_301750() {
			obj.placeAppNexusSegmentScript('seg?add=1060964,1421856&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301750[queryId]=true);if(checkConditions(conditions_301750)){pageGroup_301750();}});};
		if(
			(window.location.href.indexOf('nealsyardremedies.com') != -1)
		) {
			if(checkConditions(conditions_301750)){pageGroup_301750();}
		}
		}, 1);

		// Page group: Mon Corner Deco
		var conditions_301751 = {};
		setTimeout(function() {
		function pageGroup_301751() {
			obj.placeAppNexusSegmentScript('seg?add=1061265&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301751[queryId]=true);if(checkConditions(conditions_301751)){pageGroup_301751();}});};
		if(
			(window.location.href.indexOf('moncornerdeco.com') != -1)
		) {
			if(checkConditions(conditions_301751)){pageGroup_301751();}
		}
		}, 1);

		// Page group: Locopramos
		var conditions_301752 = {};
		setTimeout(function() {
		function pageGroup_301752() {
			obj.placeAppNexusSegmentScript('seg?add=1062724&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301752[queryId]=true);if(checkConditions(conditions_301752)){pageGroup_301752();}});};
		if(
			(window.location.href.indexOf('locompramos.es') != -1)
		) {
			if(checkConditions(conditions_301752)){pageGroup_301752();}
		}
		}, 1);

		// Page group: iHampers
		var conditions_301753 = {};
		setTimeout(function() {
		function pageGroup_301753() {
			obj.placeAppNexusSegmentScript('seg?add=1060884&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-ihampers'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div#divProductPic img#ProductPic', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#main table tbody tr td table tbody tr td:eq(5) div'), 					// product name
			prodPrice: getValue('div#main table tbody tr td table tbody tr td span'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('tbody tr td table tbody tr td a img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301753[queryId]=true);if(checkConditions(conditions_301753)){pageGroup_301753();}});};
		if(
			(window.location.href.indexOf('ihampers.co.uk') != -1)
		) {
			if(checkConditions(conditions_301753)){pageGroup_301753();}
		}
		}, 1);

		// Page group: Wibber
		var conditions_301754 = {};
		setTimeout(function() {
		function pageGroup_301754() {
			obj.placeAppNexusSegmentScript('seg?add=1065014&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301754[queryId]=true);if(checkConditions(conditions_301754)){pageGroup_301754();}});};
		if(
			(window.location.href.indexOf('wibber.nl') != -1)
		) {
			if(checkConditions(conditions_301754)){pageGroup_301754();}
		}
		}, 1);

		// Page group: Stand-out.net
		var conditions_301755 = {};
		setTimeout(function() {
		function pageGroup_301755() {
			obj.placeAppNexusSegmentScript('seg?add=1065169&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301755[queryId]=true);if(checkConditions(conditions_301755)){pageGroup_301755();}});};
		if(
			(window.location.href.indexOf('stand-out.net') != -1)
		) {
			if(checkConditions(conditions_301755)){pageGroup_301755();}
		}
		}, 1);

		// Page group: TCS - ETI - FR
		var conditions_301756 = {};
		setTimeout(function() {
		function pageGroup_301756() {
			obj.placeAppNexusSegmentScript('seg?add=1122833,1437987&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301756[queryId]=true);if(checkConditions(conditions_301756)){pageGroup_301756();}});};
		if(
			(window.location.href.indexOf('eti.tcs.ch/fr/') != -1)
		) {
			if(checkConditions(conditions_301756)){pageGroup_301756();}
		}
		}, 1);

		// Page group: TCS - Car Legal & Home
		var conditions_301757 = {};
		setTimeout(function() {
		function pageGroup_301757() {
			obj.placeAppNexusSegmentScript('seg?add=1067358&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301757[queryId]=true);if(checkConditions(conditions_301757)){pageGroup_301757();}});};
		if(
			(window.location.href.indexOf('schule.tcs.ch/') != -1) ||
			(window.location.href.indexOf('ecole.tcs.ch/') != -1) ||
			(window.location.href.indexOf('scuola.tcs.ch/') != -1)
		) {
			if(checkConditions(conditions_301757)){pageGroup_301757();}
		}
		}, 1);

		// Page group: He-Shi
		var conditions_301758 = {};
		setTimeout(function() {
		function pageGroup_301758() {
			obj.placeAppNexusSegmentScript('seg?add=1067550,1421915&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-heshi'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.ProductThumbImage a img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#ProductDetails.Block div.BlockContent div.ProductMain h2'), 					// product name
			prodPrice: getValue('div#ProductDetails.Block div.BlockContent div.ProductMain div.PriceRow em.ProductPrice'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div#Header div#Logo a img#LogoImage', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301758[queryId]=true);if(checkConditions(conditions_301758)){pageGroup_301758();}});};
		if(
			(window.location.href.indexOf('he-shi.eu') != -1)
		) {
			if(checkConditions(conditions_301758)){pageGroup_301758();}
		}
		}, 1);

		// Page group: PaperShaker
		var conditions_301759 = {};
		setTimeout(function() {
		function pageGroup_301759() {
			obj.placeAppNexusSegmentScript('seg?add=1067600&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-papershaker'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.shadow-wrapper div.shadow-lifted img.main-image', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div#product-details div.sub-header div.three-segment-sub-header div.page-title h1'), 					// product name
			prodPrice: getValue('div#product-details div.page-main-content div.card-choice-accordion div.top div.quantity-and-price div.total-price h2') + ' for 10 cards', 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div#header-container div.nav a img.logo', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301759[queryId]=true);if(checkConditions(conditions_301759)){pageGroup_301759();}});};
		if(
			(window.location.href.indexOf('uk.paper-shaker.com/') != -1)
		) {
			if(checkConditions(conditions_301759)){pageGroup_301759();}
		}
		}, 1);

		// Page group: Helvetic Tours CH
		var conditions_301760 = {};
		setTimeout(function() {
		function pageGroup_301760() {
			obj.placeAppNexusSegmentScript('seg?add=1067691,1437821&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301760[queryId]=true);if(checkConditions(conditions_301760)){pageGroup_301760();}});};
		if(
			(window.location.href.indexOf('helvetictours.ch') != -1)
		) {
			if(checkConditions(conditions_301760)){pageGroup_301760();}
		}
		}, 1);

		// Page group: tlbde.com flx
		var conditions_301761 = {};
		setTimeout(function() {
		function pageGroup_301761() {
			obj.placeAppNexusSegmentScript('seg?add=1067951&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301761[queryId]=true);if(checkConditions(conditions_301761)){pageGroup_301761();}});};
		if(
			(window.location.href.indexOf('tlbde.com') != -1)
		) {
			if(checkConditions(conditions_301761)){pageGroup_301761();}
		}
		}, 1);

		// Page group: Energy Sistem
		var conditions_301762 = {};
		setTimeout(function() {
		function pageGroup_301762() {
			obj.placeAppNexusSegmentScript('seg?add=1068123&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301762[queryId]=true);if(checkConditions(conditions_301762)){pageGroup_301762();}});};
		if(
			(window.location.href.indexOf('http://store.energysistem.com/') != -1)
		) {
			if(checkConditions(conditions_301762)){pageGroup_301762();}
		}
		}, 1);

		// Page group: calorad.com flx
		var conditions_301763 = {};
		setTimeout(function() {
		function pageGroup_301763() {
			obj.placeAppNexusSegmentScript('seg?add=1068138&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301763[queryId]=true);if(checkConditions(conditions_301763)){pageGroup_301763();}});};
		if(
			(window.location.href.indexOf('www.calorad.com') != -1)
		) {
			if(checkConditions(conditions_301763)){pageGroup_301763();}
		}
		}, 1);

		// Page group: Ocean Lightingn FLX
		var conditions_301764 = {};
		setTimeout(function() {
		function pageGroup_301764() {
			obj.placeAppNexusSegmentScript('seg?add=1069813&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301764[queryId]=true);if(checkConditions(conditions_301764)){pageGroup_301764();}});};
		if(
			(window.location.href.indexOf('oceanlighting.co.uk') != -1)
		) {
			if(checkConditions(conditions_301764)){pageGroup_301764();}
		}
		}, 1);

		// Page group: Bike Inn 2 (BB)
		var conditions_301765 = {};
		setTimeout(function() {
		function pageGroup_301765() {
			obj.placeAppNexusSegmentScript('seg?add=1072204&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301765[queryId]=true);if(checkConditions(conditions_301765)){pageGroup_301765();}});};
		if(
			(window.location.href.indexOf('bikeinn.com') != -1)
		) {
			if(checkConditions(conditions_301765)){pageGroup_301765();}
		}
		}, 1);

		// Page group: Meine-moebelmanufaktur.de
		var conditions_301766 = {};
		setTimeout(function() {
		function pageGroup_301766() {
			obj.placeAppNexusSegmentScript('seg?add=1075009&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#fancy_bg_e', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)'), 					// product name
			prodPrice: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > em:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#LogoImage', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301766[queryId]=true);if(checkConditions(conditions_301766)){pageGroup_301766();}});};
		if(
			(window.location.href.indexOf('meine-moebelmanufaktur.de') != -1)
		) {
			if(checkConditions(conditions_301766)){pageGroup_301766();}
		}
		}, 1);

		// Page group: Payday Bank
		var conditions_301767 = {};
		setTimeout(function() {
		function pageGroup_301767() {
			obj.placeAppNexusSegmentScript('seg?add=1075775&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301767[queryId]=true);if(checkConditions(conditions_301767)){pageGroup_301767();}});};
		if(
			(window.location.href.indexOf('paydaybank.co.uk') != -1)
		) {
			if(checkConditions(conditions_301767)){pageGroup_301767();}
		}
		}, 1);

		// Page group: Smart Gift Solutions
		var conditions_301768 = {};
		setTimeout(function() {
		function pageGroup_301768() {
			obj.placeAppNexusSegmentScript('seg?add=1076243&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301768[queryId]=true);if(checkConditions(conditions_301768)){pageGroup_301768();}});};
		if(
			(window.location.href.indexOf('smartgiftsolutions.co.uk') != -1)
		) {
			if(checkConditions(conditions_301768)){pageGroup_301768();}
		}
		}, 1);

		// Page group: ferienpark-mirow.de
		var conditions_301769 = {};
		setTimeout(function() {
		function pageGroup_301769() {
			obj.placeAppNexusSegmentScript('seg?add=1077976&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301769[queryId]=true);if(checkConditions(conditions_301769)){pageGroup_301769();}});};
		if(
			(window.location.href.indexOf('ferienpark-mirow.de') != -1)
		) {
			if(checkConditions(conditions_301769)){pageGroup_301769();}
		}
		}, 1);

		// Page group: ferienparkmueritz.de
		var conditions_301770 = {};
		setTimeout(function() {
		function pageGroup_301770() {
			obj.placeAppNexusSegmentScript('seg?add=1077981&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301770[queryId]=true);if(checkConditions(conditions_301770)){pageGroup_301770();}});};
		if(
			(window.location.href.indexOf('ferienparkmueritz.de') != -1)
		) {
			if(checkConditions(conditions_301770)){pageGroup_301770();}
		}
		}, 1);

		// Page group: aparthotel-seepanorama.de
		var conditions_301771 = {};
		setTimeout(function() {
		function pageGroup_301771() {
			obj.placeAppNexusSegmentScript('seg?add=1077983&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301771[queryId]=true);if(checkConditions(conditions_301771)){pageGroup_301771();}});};
		if(
			(window.location.href.indexOf('aparthotel-seepanorama.de') != -1)
		) {
			if(checkConditions(conditions_301771)){pageGroup_301771();}
		}
		}, 1);

		// Page group: Price Right Home 
		var conditions_301772 = {};
		setTimeout(function() {
		function pageGroup_301772() {
			obj.placeAppNexusSegmentScript('seg?add=1080003&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#fancy_bg_e', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)'), 					// product name
			prodPrice: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > em:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#LogoImage', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301772[queryId]=true);if(checkConditions(conditions_301772)){pageGroup_301772();}});};
		if(
			(window.location.href.indexOf('pricerighthome.com') != -1)
		) {
			if(checkConditions(conditions_301772)){pageGroup_301772();}
		}
		}, 1);

		// Page group: Kinderlampe.de
		var conditions_301773 = {};
		setTimeout(function() {
		function pageGroup_301773() {
			obj.placeAppNexusSegmentScript('seg?add=1080177&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#fancy_bg_e', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)'), 					// product name
			prodPrice: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > em:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#LogoImage', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301773[queryId]=true);if(checkConditions(conditions_301773)){pageGroup_301773();}});};
		if(
			(window.location.href.indexOf('kinderlampe.de') != -1)
		) {
			if(checkConditions(conditions_301773)){pageGroup_301773();}
		}
		}, 1);

		// Page group: LE Domain AU
		var conditions_301774 = {};
		setTimeout(function() {
		function pageGroup_301774() {
			obj.placeAppNexusSegmentScript('seg?add=1080181&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-ledomain'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#main-image', true), 					// url of the product image
			destUrl: window.location.href.replace("http://www.ledomaine.com.au/", "https://track.commissionfactory.com.au/t/11970/592/"), // landing page url
			prodName: getValue('#pagetitle > h1:nth-child(1) > span:nth-child(1)'), 					// product name
			prodPrice: getValue('#prod-sell-price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://dzdmo5k9lk8wf.cloudfront.net/FlxAds-images/ledomaine/logo_ld.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301774[queryId]=true);if(checkConditions(conditions_301774)){pageGroup_301774();}});};
		if(
			(window.location.href.indexOf('ledomaine.com.au') != -1)
		) {
			if(checkConditions(conditions_301774)){pageGroup_301774();}
		}
		}, 1);

		// Page group: Sunuva
		var conditions_301775 = {};
		setTimeout(function() {
		function pageGroup_301775() {
			obj.placeAppNexusSegmentScript('seg?add=1080584&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#fancy_bg_e', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)'), 					// product name
			prodPrice: getValue('#ProductDetails > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > em:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#LogoImage', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301775[queryId]=true);if(checkConditions(conditions_301775)){pageGroup_301775();}});};
		if(
			(window.location.href.indexOf('sunuva.com') != -1)
		) {
			if(checkConditions(conditions_301775)){pageGroup_301775();}
		}
		}, 1);

		// Page group: Vision Direct AU
		var conditions_301776 = {};
		setTimeout(function() {
		function pageGroup_301776() {
			obj.placeAppNexusSegmentScript('seg?add=1085206&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-visiondirectau'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#big_image', true), 					// url of the product image
			destUrl: window.location.href.replace("http://www.visiondirect.com.au/", "https://track.commissionfactory.com.au/t/11970/1381/"), // landing page url
			prodName: getValue('#lens_type_form > div:nth-child(12) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1) > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#lens_type_form > div:nth-child(12) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1) > span:nth-child(1)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://www.visiondirect.com.au/en/images/logo/logo_4.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301776[queryId]=true);if(checkConditions(conditions_301776)){pageGroup_301776();}});};
		if(
			(window.location.href.indexOf('visiondirect.com.au') != -1)
		) {
			if(checkConditions(conditions_301776)){pageGroup_301776();}
		}
		}, 1);

		// Page group: Rue Des Puzzles FLX
		var conditions_301777 = {};
		setTimeout(function() {
		function pageGroup_301777() {
			obj.placeAppNexusSegmentScript('seg?add=1085340&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301777[queryId]=true);if(checkConditions(conditions_301777)){pageGroup_301777();}});};
		if(
			(window.location.href.indexOf('rue-des-puzzles.com') != -1)
		) {
			if(checkConditions(conditions_301777)){pageGroup_301777();}
		}
		}, 1);

		// Page group: Rue des Maquettes FLX
		var conditions_301778 = {};
		setTimeout(function() {
		function pageGroup_301778() {
			obj.placeAppNexusSegmentScript('seg?add=1085342&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301778[queryId]=true);if(checkConditions(conditions_301778)){pageGroup_301778();}});};
		if(
			(window.location.href.indexOf('rue-des-maquettes.com') != -1)
		) {
			if(checkConditions(conditions_301778)){pageGroup_301778();}
		}
		}, 1);

		// Page group: Avenue des jeux FLX
		var conditions_301779 = {};
		setTimeout(function() {
		function pageGroup_301779() {
			obj.placeAppNexusSegmentScript('seg?add=1085346&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301779[queryId]=true);if(checkConditions(conditions_301779)){pageGroup_301779();}});};
		if(
			(window.location.href.indexOf('avenuedesjeux.com') != -1)
		) {
			if(checkConditions(conditions_301779)){pageGroup_301779();}
		}
		}, 1);

		// Page group: Savile-Rogue
		var conditions_301780 = {};
		setTimeout(function() {
		function pageGroup_301780() {
			obj.placeAppNexusSegmentScript('seg?add=1085383&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#ProductPic', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(6) > div:nth-child(1)'), 					// product name
			prodPrice: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)'), 					// product price (optional)
			desc: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(6)'), 						// additional short description (optional)
			logo: getValue('tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: getValue('tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)'), 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301780[queryId]=true);if(checkConditions(conditions_301780)){pageGroup_301780();}});};
		if(
			(window.location.href.indexOf('savile-rogue.com') != -1)
		) {
			if(checkConditions(conditions_301780)){pageGroup_301780();}
		}
		}, 1);

		// Page group: Nature's Best Sport
		var conditions_301781 = {};
		setTimeout(function() {
		function pageGroup_301781() {
			obj.placeAppNexusSegmentScript('seg?add=1085856&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#ProductPic', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(6) > div:nth-child(1)'), 					// product name
			prodPrice: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)'), 					// product price (optional)
			desc: getValue('#main > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(6)'), 						// additional short description (optional)
			logo: getValue('tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: getValue('tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)'), 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301781[queryId]=true);if(checkConditions(conditions_301781)){pageGroup_301781();}});};
		if(
			(window.location.href.indexOf('naturesbest.co.uk/sports/') != -1)
		) {
			if(checkConditions(conditions_301781)){pageGroup_301781();}
		}
		}, 1);

		// Page group: Deborah Milano
		var conditions_301782 = {};
		setTimeout(function() {
		function pageGroup_301782() {
			obj.placeAppNexusSegmentScript('seg?add=1085916&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301782[queryId]=true);if(checkConditions(conditions_301782)){pageGroup_301782();}});};
		if(
			(window.location.href.indexOf('deborahmilano.co.uk') != -1)
		) {
			if(checkConditions(conditions_301782)){pageGroup_301782();}
		}
		}, 1);

		// Page group: Fansport24.de
		var conditions_301783 = {};
		setTimeout(function() {
		function pageGroup_301783() {
			obj.placeAppNexusSegmentScript('seg?add=1088945&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301783[queryId]=true);if(checkConditions(conditions_301783)){pageGroup_301783();}});};
		if(
			(window.location.href.indexOf('fansport24.de') != -1)
		) {
			if(checkConditions(conditions_301783)){pageGroup_301783();}
		}
		}, 1);

		// Page group: Smart Buy Glasses NZ
		var conditions_301784 = {};
		setTimeout(function() {
		function pageGroup_301784() {
			obj.placeAppNexusSegmentScript('seg?add=1092799&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301784[queryId]=true);if(checkConditions(conditions_301784)){pageGroup_301784();}});};
		if(
			(window.location.href.indexOf('smartbuyglasses.co.nz') != -1)
		) {
			if(checkConditions(conditions_301784)){pageGroup_301784();}
		}
		}, 1);

		// Page group: Tousergo
		var conditions_301785 = {};
		setTimeout(function() {
		function pageGroup_301785() {
			obj.placeAppNexusSegmentScript('seg?add=1092908&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301785[queryId]=true);if(checkConditions(conditions_301785)){pageGroup_301785();}});};
		if(
			(window.location.href.indexOf('tousergo.com') != -1)
		) {
			if(checkConditions(conditions_301785)){pageGroup_301785();}
		}
		}, 1);

		// Page group: Motoin
		var conditions_301786 = {};
		setTimeout(function() {
		function pageGroup_301786() {
			obj.placeAppNexusSegmentScript('seg?add=1092946&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301786[queryId]=true);if(checkConditions(conditions_301786)){pageGroup_301786();}});};
		if(
			(window.location.href.indexOf('motoin.de') != -1)
		) {
			if(checkConditions(conditions_301786)){pageGroup_301786();}
		}
		}, 1);

		// Page group: phD Supplements
		var conditions_301787 = {};
		setTimeout(function() {
		function pageGroup_301787() {
			obj.placeAppNexusSegmentScript('seg?add=1099957&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301787[queryId]=true);if(checkConditions(conditions_301787)){pageGroup_301787();}});};
		if(
			(window.location.href.indexOf('phd-supplements.com/') != -1)
		) {
			if(checkConditions(conditions_301787)){pageGroup_301787();}
		}
		}, 1);

		// Page group: JeuJouet
		var conditions_301788 = {};
		setTimeout(function() {
		function pageGroup_301788() {
			obj.placeAppNexusSegmentScript('seg?add=1100793&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#mf138', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#mf198'), 					// product name
			prodPrice: getValue('#mf201'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#mf24', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301788[queryId]=true);if(checkConditions(conditions_301788)){pageGroup_301788();}});};
		if(
			(window.location.href.indexOf('jeujouet.com') != -1)
		) {
			if(checkConditions(conditions_301788)){pageGroup_301788();}
		}
		}, 1);

		// Page group: London-Boutiques
		var conditions_301789 = {};
		setTimeout(function() {
		function pageGroup_301789() {
			obj.placeAppNexusSegmentScript('seg?add=1100937&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, 'â‚¬').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-londonboutiques'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.img-box div#productImage div#productImageSlides div#wrap a.cloud-zoom img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div.product-view form#product_addtocart_form div.product-shop div.short-description div.std'), 					// product name
			prodPrice: getValue('div.product-type-data div.price-box span.regular-price span.price')?getValue('div.product-type-data div.price-box span.regular-price span.price'):getValue('div.product-type-data div.price-box p.special-price span.price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: 'http://dzdmo5k9lk8wf.cloudfront.net/FlxAds-images/londonboutiques/LB_logo.png', 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301789[queryId]=true);if(checkConditions(conditions_301789)){pageGroup_301789();}});};
		if(
			(window.location.href.indexOf('london-boutiques.com') != -1)
		) {
			if(checkConditions(conditions_301789)){pageGroup_301789();}
		}
		}, 1);

		// Page group: Pet Tags
		var conditions_301790 = {};
		setTimeout(function() {
		function pageGroup_301790() {
			obj.placeAppNexusSegmentScript('seg?add=1103230&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301790[queryId]=true);if(checkConditions(conditions_301790)){pageGroup_301790();}});};
		if(
			(window.location.href.indexOf('pet-tags.com') != -1)
		) {
			if(checkConditions(conditions_301790)){pageGroup_301790();}
		}
		}, 1);

		// Page group: 1001 Bebes
		var conditions_301791 = {};
		setTimeout(function() {
		function pageGroup_301791() {
			obj.placeAppNexusSegmentScript('seg?add=1105704&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301791[queryId]=true);if(checkConditions(conditions_301791)){pageGroup_301791();}});};
		if(
			(window.location.href.indexOf('1000bebes.com') != -1)
		) {
			if(checkConditions(conditions_301791)){pageGroup_301791();}
		}
		}, 1);

		// Page group: Superdeal MAR FLX
		var conditions_301792 = {};
		setTimeout(function() {
		function pageGroup_301792() {
			obj.placeAppNexusSegmentScript('seg?add=1106066&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-superdeal'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#banners > div:nth-child(2) > img:nth-child(3)', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#desc > h2:nth-child(1) > a:nth-child(3) > span:nth-child(1)'), 					// product name
			prodPrice: '', 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > a:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301792[queryId]=true);if(checkConditions(conditions_301792)){pageGroup_301792();}});};
		if(
			(window.location.href.indexOf('superdeal.ma') != -1)
		) {
			if(checkConditions(conditions_301792)){pageGroup_301792();}
		}
		}, 1);

		// Page group: TCS - ETI - DE
		var conditions_301793 = {};
		setTimeout(function() {
		function pageGroup_301793() {
			obj.placeAppNexusSegmentScript('seg?add=1122823,1437988&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301793[queryId]=true);if(checkConditions(conditions_301793)){pageGroup_301793();}});};
		if(
			(window.location.href.indexOf('eti.tcs.ch/de/') != -1)
		) {
			if(checkConditions(conditions_301793)){pageGroup_301793();}
		}
		}, 1);

		// Page group: Crazy Sales AU
		var conditions_301794 = {};
		setTimeout(function() {
		function pageGroup_301794() {
			obj.placeAppNexusSegmentScript('seg?add=1108207&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-crazysalesau'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#gallery_target', true), 					// url of the product image
			destUrl: window.location.href.replace("http://www.crazysales.com.au/", "http://t.dgm-au.com/c/70648/103028/1482/"), 	// landing page url
			prodName: getValue('#product_section > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#price_area > form:nth-child(1) > li:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301794[queryId]=true);if(checkConditions(conditions_301794)){pageGroup_301794();}});};
		if(
			(window.location.href.indexOf('crazysales.com.au') != -1)
		) {
			if(checkConditions(conditions_301794)){pageGroup_301794();}
		}
		}, 1);

		// Page group: PHD Women
		var conditions_301795 = {};
		setTimeout(function() {
		function pageGroup_301795() {
			obj.placeAppNexusSegmentScript('seg?add=1108539&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301795[queryId]=true);if(checkConditions(conditions_301795)){pageGroup_301795();}});};
		if(
			(window.location.href.indexOf('phd-woman.co.uk') != -1)
		) {
			if(checkConditions(conditions_301795)){pageGroup_301795();}
		}
		}, 1);

		// Page group: hmizate.ma FLX
		var conditions_301796 = {};
		setTimeout(function() {
		function pageGroup_301796() {
			obj.placeAppNexusSegmentScript('seg?add=1108576&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301796[queryId]=true);if(checkConditions(conditions_301796)){pageGroup_301796();}});};
		if(
			(window.location.href.indexOf('hmizate.ma') != -1)
		) {
			if(checkConditions(conditions_301796)){pageGroup_301796();}
		}
		}, 1);

		// Page group: TCS - Automne - FR
		var conditions_301797 = {};
		setTimeout(function() {
		function pageGroup_301797() {
			obj.placeAppNexusSegmentScript('seg?add=1122838,1437989&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301797[queryId]=true);if(checkConditions(conditions_301797)){pageGroup_301797();}});};
		if(
			(window.location.href.indexOf('automne.tcs.ch/fr/') != -1)
		) {
			if(checkConditions(conditions_301797)){pageGroup_301797();}
		}
		}, 1);

		// Page group: TCS - Herbst - DE
		var conditions_301798 = {};
		setTimeout(function() {
		function pageGroup_301798() {
			obj.placeAppNexusSegmentScript('seg?add=1122842,1437991&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301798[queryId]=true);if(checkConditions(conditions_301798)){pageGroup_301798();}});};
		if(
			(window.location.href.indexOf('herbst.tcs.ch/de/') != -1)
		) {
			if(checkConditions(conditions_301798)){pageGroup_301798();}
		}
		}, 1);

		// Page group: Mencorner FR
		var conditions_301799 = {};
		setTimeout(function() {
		function pageGroup_301799() {
			obj.placeAppNexusSegmentScript('seg?add=1123167&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301799[queryId]=true);if(checkConditions(conditions_301799)){pageGroup_301799();}});};
		if(
			(window.location.href.indexOf('mencorner.com') != -1)
		) {
			if(checkConditions(conditions_301799)){pageGroup_301799();}
		}
		}, 1);

		// Page group: Decolia FR
		var conditions_301800 = {};
		setTimeout(function() {
		function pageGroup_301800() {
			obj.placeAppNexusSegmentScript('seg?add=1123168&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301800[queryId]=true);if(checkConditions(conditions_301800)){pageGroup_301800();}});};
		if(
			(window.location.href.indexOf('decolia.fr') != -1)
		) {
			if(checkConditions(conditions_301800)){pageGroup_301800();}
		}
		}, 1);

		// Page group: Bijourama FR
		var conditions_301801 = {};
		setTimeout(function() {
		function pageGroup_301801() {
			obj.placeAppNexusSegmentScript('seg?add=1123195&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301801[queryId]=true);if(checkConditions(conditions_301801)){pageGroup_301801();}});};
		if(
			(window.location.href.indexOf('bijourama.com') != -1)
		) {
			if(checkConditions(conditions_301801)){pageGroup_301801();}
		}
		}, 1);

		// Page group: Bow Wow
		var conditions_301802 = {};
		setTimeout(function() {
		function pageGroup_301802() {
			obj.placeAppNexusSegmentScript('seg?add=1125930&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301802[queryId]=true);if(checkConditions(conditions_301802)){pageGroup_301802();}});};
		if(
			(window.location.href.indexOf('bowwowinsurance.com.au') != -1)
		) {
			if(checkConditions(conditions_301802)){pageGroup_301802();}
		}
		}, 1);

		// Page group: Street-wear Collection FR
		var conditions_301803 = {};
		setTimeout(function() {
		function pageGroup_301803() {
			obj.placeAppNexusSegmentScript('seg?add=1175807&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301803[queryId]=true);if(checkConditions(conditions_301803)){pageGroup_301803();}});};
		if(
			(window.location.href.indexOf('streetwear-collection.com') != -1)
		) {
			if(checkConditions(conditions_301803)){pageGroup_301803();}
		}
		}, 1);

		// Page group: Alfred Et Compagnie
		var conditions_301804 = {};
		setTimeout(function() {
		function pageGroup_301804() {
			obj.placeAppNexusSegmentScript('seg?add=1179775&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301804[queryId]=true);if(checkConditions(conditions_301804)){pageGroup_301804();}});};
		if(
			(window.location.href.indexOf('alfredetcompagnie.com') != -1)
		) {
			if(checkConditions(conditions_301804)){pageGroup_301804();}
		}
		}, 1);

		// Page group: RunnerInn FR
		var conditions_301805 = {};
		setTimeout(function() {
		function pageGroup_301805() {
			obj.placeAppNexusSegmentScript('seg?add=1209846&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301805[queryId]=true);if(checkConditions(conditions_301805)){pageGroup_301805();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301805)){pageGroup_301805();}
		}
		}, 1);

		// Page group: RunnerInn NL
		var conditions_301806 = {};
		setTimeout(function() {
		function pageGroup_301806() {
			obj.placeAppNexusSegmentScript('seg?add=1209877&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301806[queryId]=true);if(checkConditions(conditions_301806)){pageGroup_301806();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301806)){pageGroup_301806();}
		}
		}, 1);

		// Page group: RunnerInn DE
		var conditions_301807 = {};
		setTimeout(function() {
		function pageGroup_301807() {
			obj.placeAppNexusSegmentScript('seg?add=1209878&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301807[queryId]=true);if(checkConditions(conditions_301807)){pageGroup_301807();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301807)){pageGroup_301807();}
		}
		}, 1);

		// Page group: RunnerInn PL
		var conditions_301808 = {};
		setTimeout(function() {
		function pageGroup_301808() {
			obj.placeAppNexusSegmentScript('seg?add=1209879&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301808[queryId]=true);if(checkConditions(conditions_301808)){pageGroup_301808();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301808)){pageGroup_301808();}
		}
		}, 1);

		// Page group: RunnerInn PT
		var conditions_301809 = {};
		setTimeout(function() {
		function pageGroup_301809() {
			obj.placeAppNexusSegmentScript('seg?add=1209881&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301809[queryId]=true);if(checkConditions(conditions_301809)){pageGroup_301809();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301809)){pageGroup_301809();}
		}
		}, 1);

		// Page group: RunnerInn SCAN
		var conditions_301810 = {};
		setTimeout(function() {
		function pageGroup_301810() {
			obj.placeAppNexusSegmentScript('seg?add=1209882&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301810[queryId]=true);if(checkConditions(conditions_301810)){pageGroup_301810();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301810)){pageGroup_301810();}
		}
		}, 1);

		// Page group: RunnerInn ES
		var conditions_301811 = {};
		setTimeout(function() {
		function pageGroup_301811() {
			obj.placeAppNexusSegmentScript('seg?add=1209883&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301811[queryId]=true);if(checkConditions(conditions_301811)){pageGroup_301811();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301811)){pageGroup_301811();}
		}
		}, 1);

		// Page group: RunnerInn SE
		var conditions_301812 = {};
		setTimeout(function() {
		function pageGroup_301812() {
			obj.placeAppNexusSegmentScript('seg?add=1209886&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301812[queryId]=true);if(checkConditions(conditions_301812)){pageGroup_301812();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301812)){pageGroup_301812();}
		}
		}, 1);

		// Page group: RunnerInn UK
		var conditions_301813 = {};
		setTimeout(function() {
		function pageGroup_301813() {
			obj.placeAppNexusSegmentScript('seg?add=1209888&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301813[queryId]=true);if(checkConditions(conditions_301813)){pageGroup_301813();}});};
		if(
			(window.location.href.indexOf('runnerinn.com') != -1)
		) {
			if(checkConditions(conditions_301813)){pageGroup_301813();}
		}
		}, 1);

		// Page group: Homair DE BB
		var conditions_301814 = {};
		setTimeout(function() {
		function pageGroup_301814() {
			obj.placeAppNexusSegmentScript('seg?add=1210130&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301814[queryId]=true);if(checkConditions(conditions_301814)){pageGroup_301814();}});};
		if(
			(window.location.href.indexOf('homair.com/de') != -1)
		) {
			if(checkConditions(conditions_301814)){pageGroup_301814();}
		}
		}, 1);

		// Page group: Homair NL BB
		var conditions_301815 = {};
		setTimeout(function() {
		function pageGroup_301815() {
			obj.placeAppNexusSegmentScript('seg?add=1210131&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301815[queryId]=true);if(checkConditions(conditions_301815)){pageGroup_301815();}});};
		if(
			(window.location.href.indexOf('homair.com/nl') != -1)
		) {
			if(checkConditions(conditions_301815)){pageGroup_301815();}
		}
		}, 1);

		// Page group: Biuky UK
		var conditions_301816 = {};
		setTimeout(function() {
		function pageGroup_301816() {
			obj.placeAppNexusSegmentScript('seg?add=1212402&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301816[queryId]=true);if(checkConditions(conditions_301816)){pageGroup_301816();}});};
		if(
			(window.location.href.indexOf('biuky.co.uk') != -1)
		) {
			if(checkConditions(conditions_301816)){pageGroup_301816();}
		}
		}, 1);

		// Page group: Dartington Crystal
		var conditions_301817 = {};
		setTimeout(function() {
		function pageGroup_301817() {
			obj.placeAppNexusSegmentScript('seg?add=430996&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '�').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186-dartington'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('div.product-img-box a.product-image img', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('div.product-shop div.product-name h1'), 					// product name
			prodPrice: getValue('div.price-box span.regular-price span.price')?getValue('div.price-box span.regular-price span.price'):getValue('div.price-box p.special-price span.price'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('div.header div.headerlogo a.logo img', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301817[queryId]=true);if(checkConditions(conditions_301817)){pageGroup_301817();}});};
		if(
			(window.location.href.indexOf('dartington.co.uk/') != -1)
		) {
			if(checkConditions(conditions_301817)){pageGroup_301817();}
		}
		}, 1);

		// Page group: Hai-end 
		var conditions_301818 = {};
		setTimeout(function() {
		function pageGroup_301818() {
			obj.placeAppNexusSegmentScript('seg?add=1317027&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#gallery_target', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product_section > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#price_area > form:nth-child(1) > li:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301818[queryId]=true);if(checkConditions(conditions_301818)){pageGroup_301818();}});};
		if(
			(window.location.href.indexOf('hai-end.com') != -1)
		) {
			if(checkConditions(conditions_301818)){pageGroup_301818();}
		}
		}, 1);

		// Page group: RDV Deco
		var conditions_301819 = {};
		setTimeout(function() {
		function pageGroup_301819() {
			obj.placeAppNexusSegmentScript('seg?add=1319298&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301819[queryId]=true);if(checkConditions(conditions_301819)){pageGroup_301819();}});};
		if(
			(window.location.href.indexOf('rendezvousdeco.com') != -1)
		) {
			if(checkConditions(conditions_301819)){pageGroup_301819();}
		}
		}, 1);

		// Page group: Other Shop 
		var conditions_301820 = {};
		setTimeout(function() {
		function pageGroup_301820() {
			obj.placeAppNexusSegmentScript('seg?add=1339958&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#gallery_target', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product_section > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#price_area > form:nth-child(1) > li:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301820[queryId]=true);if(checkConditions(conditions_301820)){pageGroup_301820();}});};
		if(
			(window.location.href.indexOf('other-shop.com') != -1)
		) {
			if(checkConditions(conditions_301820)){pageGroup_301820();}
		}
		}, 1);

		// Page group: Flightstore <10s
		var conditions_301821 = {};
		setTimeout(function() {
		function pageGroup_301821() {
			obj.placeAppNexusSegmentScript('seg?add=1359838&remove=1359865&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301821[queryId]=true);if(checkConditions(conditions_301821)){pageGroup_301821();}});};
		if(
			(window.location.href.indexOf('flightstore.co.uk') != -1) &&
			((conditions_301821['479918']=obj.getAndSetTimespent('301821', '10', currentFunction('479918')),true))
		) {
			if(checkConditions(conditions_301821)){pageGroup_301821();}
		}
		}, 1);

		// Page group: Flightstore <30s 
		var conditions_301822 = {};
		setTimeout(function() {
		function pageGroup_301822() {
			obj.placeAppNexusSegmentScript('seg?add=1359847&remove=1359838,1359865&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301822[queryId]=true);if(checkConditions(conditions_301822)){pageGroup_301822();}});};
		if(
			(window.location.href.indexOf('flightstore.co.uk') != -1) &&
			((conditions_301822['479920']=obj.getAndSetTimespent('301822', '30', currentFunction('479920')),true))
		) {
			if(checkConditions(conditions_301822)){pageGroup_301822();}
		}
		}, 1);

		// Page group: Flighstore >180s
		var conditions_301823 = {};
		setTimeout(function() {
		function pageGroup_301823() {
			obj.placeAppNexusSegmentScript('seg?add=1477995&remove=1359838,1359847&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301823[queryId]=true);if(checkConditions(conditions_301823)){pageGroup_301823();}});};
		if(
			(window.location.href.indexOf('flightstore.co.uk') != -1) &&
			((conditions_301823['479922']=obj.getAndSetTimespent('301823', '180', currentFunction('479922')),true))
		) {
			if(checkConditions(conditions_301823)){pageGroup_301823();}
		}
		}, 1);

		// Page group: MPD 30 or less AUD
		var conditions_301824 = {};
		setTimeout(function() {
		function pageGroup_301824() {
			obj.placeAppNexusSegmentScript('seg?add=1386746&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301824[queryId]=true);if(checkConditions(conditions_301824)){pageGroup_301824();}});};
		if(
			(window.location.href.indexOf('mobilephonesdirect.co.uk') != -1) &&
			((conditions_301824['479924']=obj.getAndSetTimespent('301824', '30', currentFunction('479924')),true))
		) {
			if(checkConditions(conditions_301824)){pageGroup_301824();}
		}
		}, 1);

		// Page group: MPD 30-60 seconds 
		var conditions_301825 = {};
		setTimeout(function() {
		function pageGroup_301825() {
			obj.placeAppNexusSegmentScript('seg?add=1386747&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301825[queryId]=true);if(checkConditions(conditions_301825)){pageGroup_301825();}});};
		if(
			(window.location.href.indexOf('mobilephonesdirect.co.uk') != -1) &&
			((conditions_301825['479926']=obj.getAndSetTimespent('301825', '60', currentFunction('479926')),true))
		) {
			if(checkConditions(conditions_301825)){pageGroup_301825();}
		}
		}, 1);

		// Page group: MPD 60 or more Sean
		var conditions_301826 = {};
		setTimeout(function() {
		function pageGroup_301826() {
			obj.placeAppNexusSegmentScript('seg?add=1386748&remove=1386747,1386746&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301826[queryId]=true);if(checkConditions(conditions_301826)){pageGroup_301826();}});};
		if(
			(window.location.href.indexOf('mobilephonesdirect.co.uk') != -1) &&
			((conditions_301826['479928']=obj.getAndSetTimespent('301826', '18000', currentFunction('479928')),true))
		) {
			if(checkConditions(conditions_301826)){pageGroup_301826();}
		}
		}, 1);

		// Page group: MPD 60 or more Harry
		var conditions_301827 = {};
		setTimeout(function() {
		function pageGroup_301827() {
			obj.placeAppNexusSegmentScript('seg?add=1386757&remove=1386747&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301827[queryId]=true);if(checkConditions(conditions_301827)){pageGroup_301827();}});};
		if(
			(window.location.href.indexOf('mobilephonesdirect.co.uk') != -1) &&
			((conditions_301827['479930']=obj.getAndSetTimespent('301827', '18000', currentFunction('479930')),true))
		) {
			if(checkConditions(conditions_301827)){pageGroup_301827();}
		}
		}, 1);

		// Page group: PhoneWear
		var conditions_301828 = {};
		setTimeout(function() {
		function pageGroup_301828() {
			obj.placeAppNexusSegmentScript('seg?add=1402491&t=1', null, null, null, 'None', '');

(function() {
	var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
	var waitUntilLoaded = function(toTest, callback) {
		var count = 0;
		var waitUntilLoadedInner = function(toTest, callback) {
			var val = toTest();
			if(!val) {
				count++;
				if(count < 100) { // 10 seconds
					setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
				}
				return;
			}
			callback(val);
		};
		waitUntilLoadedInner(toTest, callback);
	};
	function getValueInner($, cssPath, getImage) {
		if(cssPath) {
			var el = $(''+cssPath);
			if(el && el.length) {
				if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
					var f = el.attr('flashvars');
					if(f && f.indexOf('http') != -1) {
						return f.match(/(http|https)(?:(?!\&).)*/g)[0];
					}
				}
				if(el.attr('src')) { // this is probably an image
					return el[0].src;
				}
				if(getImage) { // we always want an image
					var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

					if(el.css('background-image') && el.css('background-image') != "none") {
						return el.css('background-image').replace(patt,'');
					} else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
						return $(el[0].parentNode).css('background-image').replace(patt,'');
					}
				}
				if(el.find('sup')) {
					el = el.clone();
					el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
				}
				if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
					var tmpEl = $('#' + el[0].id);
					var el2 = tmpEl.siblings('.sIFR-alternate');
					if(el2.length) {
						el = el2;
					}
				}
				var text = el[0].textContent||el[0].innerText;
				return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
			}
		}
		return '';
	};

	var exec = function($) {
		
		var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

		iatDomain = '182186'; // place domain you want to use here, leave default if not sure

		iatProd = {
			prodId: '', 						// product id
			imageUrl: getValue('#gallery_target', true), 					// url of the product image
			destUrl: window.location.href, 	// landing page url
			prodName: getValue('#product_section > h1:nth-child(1)'), 					// product name
			prodPrice: getValue('#price_area > form:nth-child(1) > li:nth-child(2)'), 					// product price (optional)
			desc: '', 						// additional short description (optional)
			logo: getValue('#logo > img:nth-child(1)', true), 						// product brand logo (optional)
			custom1: '', 						// custom value
			custom2: '', 						// custom value
			availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
			category: '', 					// product category (optional)
			useCookies: 1,				// if set to 0, it won't set any cookies
			remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
		};
		if(!iatProd.prodId) {
			if(iatProd.imageUrl) {
				iatProd.prodId = iatProd.imageUrl;
			} else if(iatProd.prodName && iatProd.prodPrice) {
				iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
			} else {
				iatProd.prodId = iatProd.destUrl;
			}
		}

		if(!iatProd.imageUrl) {
			return;
		}

		if(!iatProd.destUrl) {
			return;
		}

		if(!iatProd.prodPrice) {
			return;
		}


		(function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
		("//dq5tha3wemxik.cloudfront.net/prod.js");
	}

	if(window.jQuery) {
		exec(window.jQuery);
	} else {
		if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
            var tmpLib = $;
        }
		loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
			var jqNoConflict = jQuery.noConflict();
            if (typeof tmpLib != 'undefined' && tmpLib !== null) {
                $ = tmpLib;
                tmpLib = null;
            }
            if(jqNoConflict) {
                exec(jqNoConflict);
            }
		});
	}
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301828[queryId]=true);if(checkConditions(conditions_301828)){pageGroup_301828();}});};
		if(
			(window.location.href.indexOf('phonewear.fr') != -1)
		) {
			if(checkConditions(conditions_301828)){pageGroup_301828();}
		}
		}, 1);

		// Page group: energieprijzenvergelijken.com 0-10
		var conditions_301829 = {};
		setTimeout(function() {
		function pageGroup_301829() {
			obj.placeAppNexusSegmentScript('seg?add=1445313&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301829[queryId]=true);if(checkConditions(conditions_301829)){pageGroup_301829();}});};
		if(
			(window.location.href.indexOf('energieprijzenvergelijken.com') != -1) &&
			((conditions_301829['479933']=obj.getAndSetTimespent('301829', '10', currentFunction('479933')),true))
		) {
			if(checkConditions(conditions_301829)){pageGroup_301829();}
		}
		}, 1);

		// Page group: energieprijzenvergelijken.com 10-30
		var conditions_301830 = {};
		setTimeout(function() {
		function pageGroup_301830() {
			obj.placeAppNexusSegmentScript('seg?add=1445314&remove=1445313&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301830[queryId]=true);if(checkConditions(conditions_301830)){pageGroup_301830();}});};
		if(
			(window.location.href.indexOf('energieprijzenvergelijken.com') != -1) &&
			((conditions_301830['479935']=obj.getAndSetTimespent('301830', '30', currentFunction('479935')),true))
		) {
			if(checkConditions(conditions_301830)){pageGroup_301830();}
		}
		}, 1);

		// Page group: energieprijzenvergelijken.com 30+
		var conditions_301831 = {};
		setTimeout(function() {
		function pageGroup_301831() {
			obj.placeAppNexusSegmentScript('seg?add=1445316&remove=1445314&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301831[queryId]=true);if(checkConditions(conditions_301831)){pageGroup_301831();}});};
		if(
			(window.location.href.indexOf('energieprijzenvergelijken.com') != -1) &&
			((conditions_301831['479937']=obj.getAndSetTimespent('301831', '180', currentFunction('479937')),true))
		) {
			if(checkConditions(conditions_301831)){pageGroup_301831();}
		}
		}, 1);

		// Page group: Netzclub DE 0-10
		var conditions_301832 = {};
		setTimeout(function() {
		function pageGroup_301832() {
			obj.placeAppNexusSegmentScript('seg?add=1445402&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301832[queryId]=true);if(checkConditions(conditions_301832)){pageGroup_301832();}});};
		if(
			(window.location.href.indexOf('netzclub.net/') != -1) &&
			((conditions_301832['479939']=obj.getAndSetTimespent('301832', '10', currentFunction('479939')),true))
		) {
			if(checkConditions(conditions_301832)){pageGroup_301832();}
		}
		}, 1);

		// Page group: netzclub DE 10-30
		var conditions_301833 = {};
		setTimeout(function() {
		function pageGroup_301833() {
			obj.placeAppNexusSegmentScript('seg?add=1445408&remove=1445402&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301833[queryId]=true);if(checkConditions(conditions_301833)){pageGroup_301833();}});};
		if(
			(window.location.href.indexOf('netzclub.net/') != -1) &&
			((conditions_301833['479941']=obj.getAndSetTimespent('301833', '30', currentFunction('479941')),true))
		) {
			if(checkConditions(conditions_301833)){pageGroup_301833();}
		}
		}, 1);

		// Page group: netzclub DE 30+
		var conditions_301834 = {};
		setTimeout(function() {
		function pageGroup_301834() {
			obj.placeAppNexusSegmentScript('seg?add=1445411&remove=1445408&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301834[queryId]=true);if(checkConditions(conditions_301834)){pageGroup_301834();}});};
		if(
			(window.location.href.indexOf('netzclub.net/') != -1) &&
			((conditions_301834['479943']=obj.getAndSetTimespent('301834', '180', currentFunction('479943')),true))
		) {
			if(checkConditions(conditions_301834)){pageGroup_301834();}
		}
		}, 1);

		// Page group: Phones.co.uk 0-10
		var conditions_301835 = {};
		setTimeout(function() {
		function pageGroup_301835() {
			obj.placeAppNexusSegmentScript('seg?add=1452989&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301835[queryId]=true);if(checkConditions(conditions_301835)){pageGroup_301835();}});};
		if(
			(window.location.href.indexOf('phones.co.uk') != -1) &&
			((conditions_301835['479945']=obj.getAndSetTimespent('301835', '10', currentFunction('479945')),true))
		) {
			if(checkConditions(conditions_301835)){pageGroup_301835();}
		}
		}, 1);

		// Page group: Phones.co.uk 10-30
		var conditions_301836 = {};
		setTimeout(function() {
		function pageGroup_301836() {
			obj.placeAppNexusSegmentScript('seg?add=1452992&remove=1452989&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301836[queryId]=true);if(checkConditions(conditions_301836)){pageGroup_301836();}});};
		if(
			(window.location.href.indexOf('phones.co.uk') != -1) &&
			((conditions_301836['479947']=obj.getAndSetTimespent('301836', '30', currentFunction('479947')),true))
		) {
			if(checkConditions(conditions_301836)){pageGroup_301836();}
		}
		}, 1);

		// Page group: Phones.co.uk 30+ 
		var conditions_301837 = {};
		setTimeout(function() {
		function pageGroup_301837() {
			obj.placeAppNexusSegmentScript('seg?add=1452993&remove=1452992&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_301837[queryId]=true);if(checkConditions(conditions_301837)){pageGroup_301837();}});};
		if(
			(window.location.href.indexOf('phones.co.uk') != -1) &&
			((conditions_301837['479949']=obj.getAndSetTimespent('301837', '180', currentFunction('479949')),true))
		) {
			if(checkConditions(conditions_301837)){pageGroup_301837();}
		}
		}, 1);



	}; // end execute

	obj.placePixel = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var i = document.createElement("img");
		i.onload = function(){};
		i.src = obj.fixUrl((url + '')).replace('{iatRandom}', obj.randomId());
	};

	obj.placeCode = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var scriptCode = [];
		code = "" + code;
		if(code.toLowerCase().indexOf("<scr"+"ipt") > -1) {
			var d = document.createElement("div");
			d.innerHTML = "_" + code;
			var scripts = d.getElementsByTagName("script");
			for(var i=0, len=scripts.length; i < len; i++) {
				if(scripts[i].src) {
					scriptCode.push({url: scripts[i].src});
				} else {
					scriptCode.push({evalSrc: scripts[i].innerHTML});
				}
			}
			for(var j=scripts.length-1; j >= 0; j--) {
				scripts[j].parentNode.removeChild(scripts[j]);
			}
			code = d.innerHTML.substring(1);
		}
		obj.placeHtml(code);
		if(scriptCode.length) {
			 scriptsToPlace = scriptsToPlace.concat(scriptCode);
		}
		return scriptCode;
	};

	obj.placeScript = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = obj.fixUrl(url).replace('{iatRandom}', obj.randomId());
		document.getElementsByTagName('head')[0].appendChild(script);
	};

	obj.placeHtml = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		df.innerHTML += code.replace('{iatRandom}', obj.randomId());
	};

	obj.placeAppNexusScript = function(code, tagId, purchaseIntegration, scVariable) {
		code = window.location.protocol == 'https:' ? 'https://secure.adnxs.com/' + code : 'http://ib.adnxs.com/' + code;
		if(purchaseIntegration && purchaseIntegration != 'None') {
			code = code + obj.getIntegrationData(purchaseIntegration, scVariable);
		}
		obj.placeScript(code, tagId);
	};

	obj.placeAppNexusSegmentScript = function(code, tagId, purchaseIntegration, scVariable, keywordType, queryParam) {
		if(keywordType && keywordType == 'Organic') {
			if(flxKeywordHash) {
				code += '&other=' + escape(flxKeywordHash);
			}
		} else if(keywordType && keywordType == 'Custom') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}
			if(hash) {
				code += '&other=' + escape(hash);
			}
		} else if(keywordType && keywordType == 'Both') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}

			if(hash) {
				code += '&other=' + escape(hash);
			} else {
				if(flxKeywordHash) {
					code += '&other=' + escape(flxKeywordHash);
				}
			}
		}
		obj.placeAppNexusScript(code, tagId, purchaseIntegration, scVariable);
	};

	obj.getIntegrationData = function(purchaseIntegration, scVariable) {
		var ret = '';
		var orderId = '';
		var revenue = 0;
		if(purchaseIntegration == 'Google Analytics') {
			var html = document.body.innerHTML;
			//async
			if(html.indexOf('_gaq.push') != -1) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[1].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[3].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
				if(!revenue) {
					try {
						revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(/\,\s+.*/g)[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
					} catch(e){}
				}
			}

			//sync
			if(!orderId && !revenue) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[0].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
			}
		} else if(purchaseIntegration == 'Adobe SiteCatalyst') {
			try {
				if(!scVariable) {
					scVariable = 's';
				}
				if(window[scVariable]) {
					orderId = window[scVariable].purchaseID;
				}
			} catch(e){};
			try {
				if(window[scVariable]) {
					var productsVar = window[scVariable].products;
					if(productsVar) {
						var products = productsVar.split(',');
						for(var i=0; i<products.length; i++) {
							var items = products[i].split(';');
							if(items.length > 3 && items[3]) {
								revenue += parseFloat(items[3], 10);
							}
						}
					}
				}
			} catch(e){};
		} else if(purchaseIntegration == 'Qubit Universal Variable') {
			try {
				if(window.universal_variable && window.universal_variable.transaction) {
					orderId = window.universal_variable.transaction.order_id;
					revenue = window.universal_variable.transaction.total;
				}
			} catch(e){}
		}

		if(orderId) {
			ret += '&order_id=' + encodeURIComponent(orderId);
		}
		if(revenue) {
			ret += '&value=' + encodeURIComponent(revenue);
		}
		return ret;
	};

	obj.randomId = function() {
		return (new Date()).getTime() + '' + (Math.random() * 1e16);
	};

	obj.fixUrl = function(url) {
		if(url.substring(0, 5) === 'http:') {
			return url;
		}
		if(url.substring(0, 6) === 'https:') {
			return url;
		}
		return "//" + url;
	};

	obj.scriptEval = function(script) {
		if (window.execScript) {
			window.execScript(script);
		} else {
			var f = function () {
				eval.call(window, script);
			};
			f();
		}
	};

	obj.placeScripts = function(scripts) {
		for(var i=0, len=scripts.length; i<len; i++) {
			if(scripts[i].url) {
				obj.placeScript(scripts[i].url);
			} else if(scripts[i].evalSrc) {
				obj.scriptEval(scripts[i].evalSrc);
			}
		}
	};

	function getTextContentExceptScript(element) {
		var text = [];
		var self = arguments.callee;
		var el, els = element.childNodes;

		for (var i=0, iLen=els.length; i<iLen; i++) {
			el = els[i];
			if (el.nodeType == 1 && el.tagName && el.tagName.toLowerCase() != 'script' && el.tagName.toLowerCase() != 'noscript' && el.tagName.toLowerCase() != 'style') {
				text.push(self(el));
			} else if (el.nodeType == 3) {
				text.push(el.data);
			}
		}
		return text.join(' ').replace(/\s{2,}/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	}

	function checkConditions(conditions) {
		for(var i in conditions) {
			if(conditions.hasOwnProperty(i)) {
				if(!conditions[i]) {
					return false;
				}
			}
		}
		return true;
	}
    
    var visibilityObj = null;
    var flxKeyword = '';
    var flxCustomKeyword = '';
    var flxKeywordHash = '';
    var flxCustomKeywordHash = '';
    var flxRewriteDocumentWrite = true;

	function getVisiblityObj() {
	var eventObj = {};
	eventObj.hidden = false;
	function addEvent(obj, evType, fn, isCapturing) {
		if (isCapturing == null) isCapturing = false;
		if (obj.addEventListener) {
			// Firefox
			obj.addEventListener(evType, fn, isCapturing);
			return true;
		} else if (obj.attachEvent) {
			// MSIE
			var r = obj.attachEvent('on' + evType, fn);
			return r;
		} else {
			return false;
		}
	}

	// register to the W3C Page Visibility API
	var hidden = null;
	var visibilityChange = null;
	if (typeof document.mozHidden !== "undefined") {
		hidden = "mozHidden";
		visibilityChange = "mozvisibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
	} else if (typeof document.hidden !== "hidden") {
		hidden = "hidden";
		visibilityChange = "visibilitychange";
	}
	if (hidden != null && visibilityChange != null) {
		addEvent(document, visibilityChange, function (event) {
			if(document[hidden]) {
				eventObj.hidden = true;
			} else {
				eventObj.hidden = false;
			}
		});
	}

	// register to the potential page visibility change
	addEvent(document, "potentialvisilitychange", function (event) {
		if(eventObj.potentialHidden) {
			eventObj.hidden = true;
		} else {
			eventObj.hidden = false;
		}
	});



	var potentialPageVisibility = {
		pageVisibilityChangeThreshold: 3,
		// in seconds
		init: function () {
			function setAsNotHidden() {
				var dispatchEventRequired = eventObj.potentialHidden;
				eventObj.potentialHidden = false;
				eventObj.potentiallyHiddenSince = 0;
				if (dispatchEventRequired) dispatchPageVisibilityChangeEvent();
			}

			function initPotentiallyHiddenDetection() {
				// the window does not has the focus => check for  user activity in the window
				lastActionDate = new Date();
				if (timeoutHandler != null) {
					clearInterval(timeoutHandler);
				}
				timeoutHandler = setInterval(checkPageVisibility, potentialPageVisibility.pageVisibilityChangeThreshold * 1000 + 100); // +100 ms to avoid rounding issues under Firefox
			}

			function dispatchPageVisibilityChangeEvent() {
				unifiedVisilityChangeEventDispatchAllowed = false;
				if( document.createEvent ) {
					var evt = document.createEvent("Event");
					evt.initEvent("potentialvisilitychange", true, true);
					document.dispatchEvent(evt);
				}
			}

			function checkPageVisibility() {
				var potentialHiddenDuration = (lastActionDate == null ? 0 : Math.floor((new Date().getTime() - lastActionDate.getTime()) / 1000));
				eventObj.potentiallyHiddenSince = potentialHiddenDuration;
				if (potentialHiddenDuration >= potentialPageVisibility.pageVisibilityChangeThreshold && !eventObj.hidden) {
					// page visibility change threshold raiched => raise the even
					eventObj.potentialHidden = true;
					dispatchPageVisibilityChangeEvent();
				}
			}

			var lastActionDate = new Date();
			var hasFocusLocal = true;
			var hasMouseOver = true;
			eventObj.potentialHidden = false;
			eventObj.potentiallyHiddenSince = 0;
			var timeoutHandler = null;

			addEvent(document, "mousemove", function (event) {
				lastActionDate = new Date();
			});
			addEvent(document, "mouseover", function (event) {
				hasMouseOver = true;
				setAsNotHidden();
			});
			addEvent(document, "mouseout", function (event) {
				hasMouseOver = false;
			});
			addEvent(window, "blur", function (event) {
				hasFocusLocal = false;
				eventObj.potentialHidden = true;
				dispatchPageVisibilityChangeEvent();
			});
			addEvent(window, "focus", function (event) {
				hasFocusLocal = true;
				setAsNotHidden();
			});
			addEvent(window, "focusin", function (event) {
				hasFocusLocal = true;
				setAsNotHidden();
			});
			addEvent(window, "focusout", function (event) {
				hasFocusLocal = false;
				eventObj.potentialHidden = true;
				dispatchPageVisibilityChangeEvent();
			});
			setAsNotHidden();
			initPotentiallyHiddenDetection();
		}
	}

	potentialPageVisibility.pageVisibilityChangeThreshold = 15;
	potentialPageVisibility.init();
	return eventObj;
}
	
	
var Cookie = (function (document, undefined) {
		
	var Cookies = function (key, value, options) {
		return arguments.length === 1 ?
			Cookies.get(key) : Cookies.set(key, value, options);
	};
	
	Cookies.get = function (key) {
		if (document.cookie !== Cookies._cacheString) {
			Cookies._populateCache();
		}
		
		return Cookies._cache[key];
	};
	
	Cookies.defaults = {
		path: '/'
	};
	
	Cookies.set = function (key, value, options) {
		var options = {
			path: options && options.path || Cookies.defaults.path,
			domain: options && options.domain || Cookies.defaults.domain,
			expires: options && options.expires || Cookies.defaults.expires,
			secure: options && options.secure !== undefined ? options.secure : Cookies.defaults.secure
		};
		
		if (value === undefined) {
			options.expires = -1;
		}
		
		switch (typeof options.expires) {
			// If a number is passed in, make it work like 'max-age'
			case 'number': options.expires = new Date(new Date().getTime() + options.expires * 1000); break;
			// Allow multiple string formats for dates
			case 'string': options.expires = new Date(options.expires); break;
		}
	
		// Escape only the characters that should be escaped as defined by RFC6265
		var cookieString = encodeURIComponent(key) + '=' + (value + '').replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent);
		cookieString += options.path ? ';path=' + options.path : '';
		cookieString += options.domain ? ';domain=' + options.domain : '';
		cookieString += options.expires ? ';expires=' + options.expires.toGMTString() : '';
		cookieString += options.secure ? ';secure' : '';
		
		document.cookie = cookieString;
		
		return Cookies;
	};
	
	Cookies.expire = function (key, options) {
		return Cookies.set(key, undefined, options);
	};
	
	Cookies._populateCache = function () {
		Cookies._cache = {};
		Cookies._cacheString = document.cookie;
		
		var cookiesArray = Cookies._cacheString.split('; ');
		for (var i = 0; i < cookiesArray.length; i++) {
			// The cookie value can contain a '=', so cannot use 'split'
			var separatorIndex = cookiesArray[i].indexOf('=');
			var key = '';
			try {
				key = decodeURIComponent(cookiesArray[i].substr(0, separatorIndex));
			} catch(e) {
				key = unescape(cookiesArray[i].substr(0, separatorIndex));
			}
			var value = '';
			try {
				value = decodeURIComponent(cookiesArray[i].substr(separatorIndex + 1));
			} catch(e) {
				value = unescape(cookiesArray[i].substr(separatorIndex + 1));
			}
			
			if (Cookies._cache[key] === undefined) {
				Cookies._cache[key] = value;
			}
		}
	};
	
	Cookies.enabled = (function () {
		var isEnabled = Cookies.set('cookies.js', '1').get('cookies.js') === '1';
		Cookies.expire('cookies.js');
		return isEnabled;
	})();
	
	return Cookies;

})(document);

var timespentAdded = {};
var pagesviewedAdded = {};

obj.getAndSetTimespent = function(pageId, conditionSeconds, funcToExecute) {
	conditionSeconds = parseInt(conditionSeconds, 10);
	var alreadyFired = false;
	var lastTimestamp = new Date();
	if(!timespentAdded[pageId]) {
		timespentAdded[pageId] = setInterval(function() {
			if(!visibilityObj) {
				visibilityObj = getVisiblityObj();
			}
			var timespent = Cookie('flxpxlTs_' + pageId);
			if(!timespent) {
				timespent = 0;
			} else {
				timespent = timespent.split('|');
				if(timespent.length > 1) {
					alreadyFired = parseInt(timespent[1], 10);
				}
				timespent = parseInt(timespent[0], 10);
			}
			var newTimestamp = new Date();
			timespent += newTimestamp - lastTimestamp;
			lastTimestamp = newTimestamp;
			if(!visibilityObj.hidden) {
				if(!alreadyFired && timespent && timespent >= (conditionSeconds * 1000)) {
					Cookie('flxpxlTs_' + pageId, timespent + '|' + 1);
					clearInterval(timespentAdded[pageId]);
					alreadyFired = true;
					funcToExecute();
				} else {
					Cookie('flxpxlTs_' + pageId, timespent + '|' + 0);
				}
			}
		}, 2000);
	}
	return false;
};

obj.getAndSetPagesViewed = function(pageId, conditionNumberOfPages) {
	conditionNumberOfPages = parseInt(conditionNumberOfPages, 10);
	var alreadyFired = false;

	var pagesviewed = Cookie('flxpxlPv_' + pageId);
	if(!pagesviewed) {
		pagesviewed = 0;
	} else {
		pagesviewed = pagesviewed.split('|');
		if(pagesviewed.length > 1) {
			alreadyFired = parseInt(pagesviewed[1], 10);
		}
		pagesviewed = parseInt(pagesviewed[0], 10);
	}

	pagesviewed += 1;

	if(!alreadyFired && pagesviewed >= conditionNumberOfPages) {
		Cookie('flxpxlPv_' + pageId, pagesviewed + '|' + 1);
		alreadyFired = true;
		return true;
	} else {
		Cookie('flxpxlPv_' + pageId, pagesviewed + '|' + 0);
	}
	return false;
};

	
	
	
	
	
    
    
    
    
    
    
    
    
    
    

    function timeout(numberOfSeconds, funcToExec) {
    	window.setTimeout(funcToExec, numberOfSeconds * 1000);
    	return false;
    }
	
	var tagsPlaced = {};
	var docFragment = document.createDocumentFragment();
	var df = document.createElement('div');
	df.style.display = 'none';
	df.id = 'iatDivInsert';
	docFragment.appendChild(df);
	var scriptsToPlace = [];
	
	var main = function() {
		obj.execute();

		if(document.body) {
			document.body.appendChild(docFragment);
		}

		var dwCodes = [];
		var dw = document.write;
		var dwl = document.writeln;
		document.write = document.writeln = function(html){dwCodes.push(html)};
		obj.placeScripts(scriptsToPlace);
		scriptsToPlace = [];
		obj.placeCode(dwCodes.join(''));
		obj.placeScripts(scriptsToPlace);

		if(flxRewriteDocumentWrite) {
			document.write = document.writeln = function(html){var scriptsToPlace = obj.placeCode(html); obj.placeScripts(scriptsToPlace);};
		}

		if(window.location.href.indexOf('iatDev=1') != -1) {
			document.cookie = "iatDev=1; path=/";
		} else if(window.location.href.indexOf('iatDev=0') != -1) {
			document.cookie = "iatDev=0; path=/";
		}
	};

	(function(i) {
	  var u = navigator.userAgent.toLowerCase();
	  var ie = !!window.ActiveXObject;
	  if (/webkit/.test(u) || (/mozilla/.test(u) && !/(compatible)/.test(u)) ||
				 (/opera/.test(u))) {
		// safari
		timeout = setTimeout(function(){
				if ( document.readyState == "loaded" || document.readyState == "interactive" || 
					document.readyState == "complete" ) {
					i();
				} else {
				  setTimeout(arguments.callee,10);
				}
			}, 10);
	  } else if (ie) {
		// IE
		(function (){ 
		  var tempNode = document.createElement('document:ready'); 
		  try {
			tempNode.doScroll('left'); 
			i(); 
			tempNode = null; 
		  } catch(e) { 
			setTimeout(arguments.callee, 0); 
		  } 
		})();
	  } else {
		window.onload = i;
	  }
	})(main);

	return obj;
})();