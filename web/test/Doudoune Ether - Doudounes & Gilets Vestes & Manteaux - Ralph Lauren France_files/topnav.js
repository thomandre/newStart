(function (jQuery) {
	var device = navigator.userAgent.toLowerCase();
	var ios = device.match(/(iphone|ipod|ipad)/);
	
	var hp = {
	    init: function () {
			var self = hp;
			globalNav = jQuery('#rl-globalnav');
			utilityNav = jQuery('#rl-utility-container');
			if (ios) {
				jQuery('body').removeClass('no-touch').addClass('touch');
				// hover fix for iPad
				var preventDef = true;
				jQuery('#rl-container').click(function () { 
					jQuery('.navitem').removeClass('navactive').find('.rl-more-pop').css({'height':'0px'});
				});
				// division link
				jQuery('#rl-globalnav li.more > a')
					.on('click', function () {
						preventDef = jQuery(this).parent().hasClass('navactive') ? false : true;
					});

				// subnav brand link
				jQuery('#rl-globalnav .rl-more-pop-nav').each(function () {
				jQuery(this).find('a:first').addClass('touched'); // one click for shop all
				});
				jQuery('#rl-globalnav .rl-more-pop-nav a')
					.on('click', function () { 
						if (jQuery(this).hasClass('touched')) { // continue to link
						preventDef = false;
						} else { // prevent default link
							jQuery('#rl-globalnav .rl-more-pop-nav a').removeClass('touched');
							jQuery(this).addClass('touched');
						preventDef = true;
					}
					})

				jQuery('#rl-globalnav li.more > a, #rl-globalnav .rl-more-pop-nav a, .tab-panel ul li').click(function (e) {
					if(preventDef){
						return false;
					}
				});

				// reposition country selector
				jQuery(parent.window).bind('orientationchange', function (e) {
					if (jQuery('#rl-countrysel-more[rel="footer"]').is(':visible')) {
					
						//added for custom positioning of the lightbox when in landscape mode 
						var lsModeTop = 0;
						if (jQuery.inArray(parent.window.orientation, [90, -90]) >= 0) {
							if (jQuery('#tab-explore').hasClass('active')) {
							    lsModeTop = 40;
							}
						}
						var height = jQuery('#rl-countrysel-more').height();
						var width = jQuery('#rl-countrysel-more').width();
						jQuery('.blockMsg').css({
							'top': (jQuery(window).height() - height) / 2 + lsModeTop + 'px',
							'left': (jQuery(window).width() - width) / 2 + 'px'
				});
			} 
				});

			} 
			
	    // top global flyout nav

			function showBrand() {
				jQuery(this).addClass('active'); // for IE
				if (jQuery(this).is('.more')) {
					var pos = jQuery(this).position();
					// set default brand card
					var brandLink = jQuery(this).find('.rl-more-pop-nav li:first a').attr('href');
				var defaultImg = '/images/' + config.lang + '/3d-' + jQuery(this).find('.rl-more-pop-nav li:first a').parent().attr('rel') + '_912x174.jpg';
					jQuery(this).find('.rl-more-pop')
						.css('left','-'+pos.left+'px')
						.find('.rl-more-pop-img a').attr('href', brandLink)
						.find('img').attr('src', defaultImg);
					jQuery(this).addClass('navactive').find('.rl-more-pop').animate({'height':'225px'},300);

				}
			}
			
			function hideBrand() {
				jQuery(this)
					.removeClass('active') // for IE
					.find('.rl-more-pop').animate({ 'height': '0px' }, 300, function () { // close banner container
						jQuery(this).parent().removeClass('navactive'); // remove active class from li (sets height)
					});
			}
			jQuery('#rl-globalnav')
				.hoverIntent({
			    over: showBrand,
			    out: hideBrand,
					selector: '.navitem',
					interval: 150,
					timeout: 70
					//sensitivity: 10
			});	
			jQuery('.rl-more-pop-nav a').hover(function(){
				var brandLink = jQuery(this).attr('href');
				var defaultImg = '/images/' + config.lang + '/3d-'+jQuery(this).parent().attr('rel') + '_912x174.jpg';
					jQuery(this).parents('.rl-more-pop')
					.find('.rl-more-pop-img a').attr('href', brandLink)
					.find('img').attr('src', defaultImg);
			});
			jQuery('#search-box')
				.val(jQuery('#search-box').attr('value'))
				.focus(function(){
					if (jQuery(this).val()==jQuery('#search-box').attr('value')){
						jQuery(this).val('');	
				}
			})
			.blur(function(){
				if (jQuery(this).val()==''){
					jQuery(this).val(jQuery('#search-box').attr('value'));	
				}
			});


		// utility navigation

			var utilPos = utilityNav.position(0);
			jQuery('#rl-countrysel-more').find('.tabs a').click(function(e){
				e.preventDefault();
				var sibTab = jQuery(this).attr('rel');
				jQuery('#rl-countrysel-more').find('.tabs li').removeClass('active');
				jQuery('.tab-panel').removeClass('active');
				jQuery(this).parents('li').addClass('active');
				jQuery('#'+sibTab).addClass('active');
				if (jQuery(this).parents('#rl-countrysel-more').attr('rel') == 'header') {
					utilityNav.addClass('active').css('height',jQuery('#rl-utilitynav li').height()+jQuery('.rl-more-pop:visible').height());
				}
			});
			// Utility Nav 
			jQuery('#rl-utilitynav li').hover(function(e){
				e.preventDefault();
				jQuery('#tab-shop').css('margin-bottom','68px');
				jQuery('#rl-utilitynav li').removeClass('active');
				utilityNav.find('.rl-more-pop').hide();
				jQuery(this).addClass('active');
				jQuery('#'+jQuery(this).attr('id')+ '-more').show();
				utilityNav.addClass('active').css('height',jQuery('#rl-utilitynav li').height()+jQuery('#rl-utility-container .rl-more-pop:visible').height());
				if (jQuery(this).is('#rl-countrysel')) {}
			});
			utilityNav.mouseleave(function(){
				jQuery(this).removeClass('active').css('height','auto').find('.rl-more-pop').hide();
			});
			jQuery('.tab-panel').each(function(){
				var f = jQuery(this).find('> ul:eq(0) > li').length;
				var s = jQuery(this).find('> ul:eq(1) > li').length;
				if (f != s) {
					jQuery(this).find('> ul:eq(1)').addClass('unequal');
				}
			});
			jQuery('#tab-shop').find('a').click(function(e){
				e.preventDefault();
				var selectedCountry = jQuery(this).parent('li').attr('rel');
				var headerShopEvar1 = 'global_cs_shop_' + selectedCountry;
				if (jQuery('#rl-countrysel-more').attr('rel')=='footer'){
					headerShopEvar1 = 'footer_cs_shop_' + selectedCountry;
				}
				var headerShopHref = jQuery(this).attr('href');
				if (jQuery('#rl-countrysel-more').attr('rel')=='footer'){
					headerShopHref = headerShopHref.replace("global_cs", "footer_cs");
				}
				// fire omniture event
				cstmlnktrk.createHdrFtrPxl(headerShopEvar1,'Country Selector');
				if (jQuery(this).attr('class') != 'active'){
				location.href= headerShopHref;
				//setInterval(function(){location.href= headerShopHref},1000);
				}
			});
			jQuery('#tab-explore').find('a').click(function(e){
				e.preventDefault();
				var selectedCountry = jQuery(this).parent('li').attr('rel');
				var headerExploreEvar1 = 'global_cs_explore_' + selectedCountry;
				if (jQuery('#rl-countrysel-more').attr('rel')=='footer'){
					headerExploreEvar1 = 'footer_cs_explore_' + selectedCountry;
				}
				var headerExploreHref = jQuery(this).attr('href');
				if (jQuery('#rl-countrysel-more').attr('rel')=='footer'){
					headerExploreHref = headerExploreHref.replace("global_cs", "footer_cs");
				}
				// fire omniture event
				cstmlnktrk.createHdrFtrPxl(headerExploreEvar1,'Country Selector');

				location.href= headerExploreHref;
			});
			//highlight default country tab

			if(config.locale=='en_GB') {
				jQuery('#li-country-GB').addClass('active');
			}else if(config.locale=='en_DE') {
				jQuery('#li-country-DE, #a-country-en_DE').addClass('active');
			}else if(config.locale=='de_DE') {
				jQuery('#li-country-DE, #a-country-de_DE').addClass('active');
			}else if(config.locale=='en_FR') {
				jQuery('#li-country-FR, #a-country-en_FR').addClass('active');
			}else if(config.locale=='fr_FR') {
				jQuery('#li-country-FR, #a-country-fr_FR').addClass('active');
			}else if(config.locale=='it_FR') {
				jQuery('#li-country-FR, #a-country-it_FR').addClass('active');
			}
	    }
	};

	// DL Box functionality

	var DLBox = {

		init: function () {
			var self = DLBox;
			var DLBTimer;

			self.dlCloseDelay = 4000; // 4 sec
			self.dlBox = jQuery('#rl-dlbox');
			self.dlBox.prependTo('body').css('display','block');
			self.dlHeight = self.dlBox.find('.rl-dlbox-img').height() + 10;

			if (self.doAutoDisplay()) {
				self.dlBox.addClass('open');
			}
			if(jQuery.trim(jQuery('#rl-dl-prev-content').text()).length > 0) {
				jQuery('#rl-dl-prev-content').addClass('rl-prev-active');
			}

			jQuery('#rl-dlbox, #rl-dl-prev-content, .handle, .rl-dlbox-img').click(function (e) {
				e.stopPropagation();
				self.dlBox.removeClass('loading');
				window.clearTimeout(DLBTimer);
				if (e.target != this) return; // only continue if the target itself has been clicked
				self.toggle(true);
			});

			if (self.dlBox.is('.open')) {
				self.dlBox.css('margin-top', '0px');

				// check for hover
				self.timeOut = false;
				self.isFocus = false;

				jQuery('#rl-dlbox')
					.mouseenter(function () {
						self.isFocus = true;
					})
					.mouseleave(function () {
						self.isFocus = false;
						if (self.timeOut) {
							self.timeOut = false;
							self.dlBox.addClass('ready').removeClass('loading');
							self.toggle(false);
						}
					});

				DLBTimer = window.setTimeout(function() {
					self.timeOut = true;
					if (!self.isFocus && self.dlBox.is('.loading')) {
						self.timeOut = false;
						self.dlBox.addClass('ready').removeClass('loading');
						self.toggle(false);
					}
				}, self.dlCloseDelay);

			} else {
				self.dlBox.removeClass('loading').css('margin-top', '-' + self.dlHeight + 'px').removeClass('open');
			}		

			return;
		},

		toggle: function (f) {
		var fireOmniture = f;
			var self = DLBox;
			self.dlBox.addClass('ready');
			if (self.dlBox.is('.open')) {
				if (fireOmniture) {
				// fire omniture event
				cstmlnktrk.createHdrFtrPxl('global_promo_close','Promo Dropdown');
				}	
				if (device.indexOf("msie") > -1) {
					self.dlBox.animate({'margin-top': '-' + self.dlHeight + 'px'}, 300).removeClass('open');
				}else{	
				self.dlBox.css('margin-top', '-' + self.dlHeight + 'px').removeClass('open');
				}
			} else {
				if (fireOmniture) {
				// fire omniture event
				cstmlnktrk.createHdrFtrPxl('global_promo_open','Promo Dropdown');
				}
				if (device.indexOf("msie") > -1) {
					self.dlBox.animate({'margin-top': '0px'}, 300).addClass('open');
				}else{	
				self.dlBox.css('margin-top', '0px').addClass('open');
			}
			}
			return;
		},

		doAutoDisplay: function () {
			var self = DLBox;

			var cookieName = 'DL-Box-Promo';
			var campaignId = 'Untitled';

			if (jQuery('input[name="campaignId"]').length) {
				campaignId = jQuery('input[name="campaignId"]').val();
			}

			if (Cookie.read(cookieName) == null) { // cookie doesn't exist
				Cookie.create(cookieName, campaignId);
				return true;
			} else { // cookie does exist
				if (Cookie.read(cookieName) == campaignId) {
					return false;
				} else {
					Cookie.create(cookieName, campaignId); // set the new campaign
					return true;
				}
			}
		}
	};

	// Cookie Util

	var Cookie = {

		create: function (name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			}
			else var expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
		},

		read: function (name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		},

		erase: function (name) {
			createCookie(name, "", -1);
		}
	}

	jQuery(document).ready(function () {
		jQuery(document).scrollTop(0);
		jQuery('#rl-utility-container').css('visibility','visible');
		hp.init();
	});
	jQuery(window).load(function() {
		if (jQuery('#rl_header_promo').length) {
		DLBox.init();
		}
	});

})($j); // using jQuery 1.10.2

jQuery(function () { // using jQuery 1.4.2
	var device = navigator.userAgent.toLowerCase();
	var ios = device.match(/(iphone|ipod|ipad)/);
	
	jQuery('.countryselector-footer').click(function() {
		//added for custom positioning of the lightbox when in landscape mode 
		var lsModeTop = 0;
		if (ios) {
			if (jQuery('#tab-explore').hasClass('active')) {
			    lsModeTop = 40;
			}
		}
		var width = 407;
		jQuery('#tab-shop').css('margin-bottom','5px');
		jQuery('#rl-countrysel-header').css('display','block');
		jQuery('#rl-countrysel-more').attr('rel', 'footer');
		jQuery.blockUI({ 
			message: jQuery('#rl-countrysel-more'),
			css: {
				left: (jQuery(window).width() - width) / 2 + 'px',
				width: width + 'px',
				height: 'auto',
				cursor: 'default',
				border: 'none'
			},
			overlayCSS:  { 
				backgroundColor: '#000', 
				opacity: 0.1, 
				cursor: 'default' 
			},
			centerX: true,
			centerY: true,
			baseZ: 2500
		}); 
		//jQuery 10 is used due to conflicts of jQuery 1.4 and prototype
		var height = $j('#rl-countrysel-more').height();
		if (jQuery('#rl-countrysel-more').attr('rel')=='footer'){
			jQuery('.blockMsg').css('top', (jQuery(window).height() - height) / 2 + lsModeTop + 'px');
		}
		jQuery('#rl-countrysel-header span.close, .blockOverlay').click(function() { 
			jQuery.unblockUI(); 
			jQuery('#rl-countrysel-more').attr('rel', 'header');
			jQuery('#rl-countrysel-header').css('display','none');
		}); 		
		// fire omniture event
		cstmlnktrk.createHdrFtrPxl('footer_cs','Country Selector');

	});
	// reposition lightbox when switching tabs
	jQuery('#rl-countrysel-more .tabs a').click(function (e) {
		//jQuery 10 is used due to conflicts of jQuery 1.4 and prototype
		var height = $j('#rl-countrysel-more').height();
		if (jQuery('#rl-countrysel-more').attr('rel')=='footer'){
			jQuery('.blockMsg').css('top', (jQuery(window).height() - height) / 2 + lsModeTop + 'px');
		}	
	});
});