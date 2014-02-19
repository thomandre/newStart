var app = app || {};

app.Shopflow = (function () {
	
	/************************/
	/*** Events Callbacks ***/
	/************************/
	
	var onPressKeySubmitSuscribeNav = function(e) {
		//When user hits enter
		if (e.which == 13) {
			e.preventDefault();
			submitSubscribeNav($(this).val(), $(this).closest('form'));
		}
	};
	
	var onClickSubmitSuscribeNav = function(e) {
		e.preventDefault();
		submitSubscribeNav($('#input-email-nav').val(), $(this).closest('form'));
	};
	
	var onPressKeySubmitSuscribePopup = function(e) {
		//When user hits enter
		if (e.which == 13) {
			e.preventDefault();
			submitSubscribePopup($(this).val(), $(this).closest('form'));
		}
	};
	
	var onClickSubmitSuscribePopup = function(e) {
		e.preventDefault();
		submitSubscribePopup($('#input-email-popup').val(), $(this).closest('form'));
	};
	
	/*******************/
	/*** DOM Binding ***/
	/*******************/
	
	var bindSubmitSuscribeNav = function(){
		$('#input-email-nav').keydown(onPressKeySubmitSuscribeNav);
		$('#link-email-nav').on('click', onClickSubmitSuscribeNav);
		$(document).ready(function() {
			$('#input-email-popup').keydown(onPressKeySubmitSuscribePopup);
			$('#link-email-popup').on('click', onClickSubmitSuscribePopup);
		});
	};
	
	/*******************/
	/*** Aux Methods ***/
	/*******************/
	var submitSubscribeNav = function(email, form){
		var emailExistsNav = false;
		var emailTokenizedNav = email.split('@'),
			emailUserNameNav = emailTokenizedNav[0],
			emailDomainNameNav = emailTokenizedNav[1];

		// Reset things
		$('.email-msg-nav').hide();
		$('header input[name="ageCheck"]').removeClass('error');

		if (!validateAgeTermsNav()) { 
			$('header input[name="ageCheck"]').fadeIn();
			$('header input[name="ageCheck"]').addClass('error');
			$('#age-check-nav').show();
			return;
		}

		if (global.regex_email_username.test(emailUserNameNav) && global.regex_email_domainname.test(emailDomainNameNav) && emailUserNameNav.length <= 64) {
			// Try submitting and get response
			$.ajax({
				url: form.attr('action'),
				type: 'POST',
				data: form.serialize(),
				dataType: 'json',
				success: function (data) {
					if (data.success) {
						$(window).trigger("subscribeToEmail", [email, completeResponse]);
					}
					successFlashNav(data.message);
				},
				error: function () {
					$('#email-fail-nav').show();
				}
			});
		} 
		else {
			$('#email-fail-nav').show();
		}
	};
	
	var submitSubscribePopup = function(email, form){
		var emailExistsPopup = false;
		var emailTokenizedPopup = email.split('@'),
			emailUserNamePopup = emailTokenizedPopup[0],
			emailDomainNamePopup = emailTokenizedPopup[1];

		// Reset things
		$('div.email-signup input[name="ageCheck"]').removeClass('error');
		$('.email-msg-popup').hide();

		if (!validateAgeTermsPopup()) {
			$('div.email-signup input[name="ageCheck"]').addClass('error');
			$('#age-check-popup').show();
			return;
		}

		if (global.regex_email_username.test(emailUserNamePopup) && global.regex_email_domainname.test(emailDomainNamePopup) && emailUserNamePopup.length <= 64) {
			// Try submitting and get response
			$.ajax({
				url: form.attr('action'),
				type: 'POST',
				data: form.serialize(),
				dataType: 'json',
				success: function (data) {
					if (data.success) {
						$(window).trigger("subscribeToEmail", [email, completeResponse]);
					}
					successFlashPopup(data.message);
				},
				error: function () {
					$('.email-lightbox').fadeToggle();
				}
			});
		} 
		else {
			$('#email-fail-popup').show();
		}
	};
	
	var successFlashNav = function(message) {
		$('.email-tooltip.landing').find('form').remove();
		$('.email-tooltip.landing').find('h6').text('Thanks!');
		$('.email-tooltip.landing').find('.tooltip-wrapper').append('<p>' + message + '</p>');
		window.setTimeout(function(){
			$('.email-tooltip').fadeToggle();
			bindSubmitSuscribeNav;},
				ShopFlow.config.TOOLTIP_LONG_FADE_DELAY);
    };
    
    var successFlashPopup = function(message) {
		$('.email-lightbox .email-signup').find('form').remove();
		$('.email-lightbox .email-signup').height( '220px' );
		$('.email-lightbox .email-signup').find('h6').text('Thanks!');
		$('.email-lightbox .email-signup').find('.tooltip-wrapper').append('<p>' + message + '</p>');
    };
    
	// validates header navigation age gate
	var validateAgeTermsNav = function () {
		return $('#links-privacy-terms-nav').length === 0 || $('#links-privacy-terms-nav').is(':checked');
	};
	
	// validates popup navigation age gate
	var validateAgeTermsPopup = function () {
		return $('#links-privacy-terms-lightbox').length === 0 || $('#links-privacy-terms-lightbox').is(':checked');
	};
	
	//Show the promo banner if it is the first page the user visits during a browsing session
	var showLatestDeals = function () {
		$(document).ready(function() {
			if($('.latest-deal-details').attr('showLatestDeals') == "true"){
				$('.latest-deals-tab').click();
			}
		});
	}
	
	//Add click event to submit the search form 
	var addClickEventToSearhIcon = function() {
		$('#search-bar .search-icon').click(function(){
			$('#search-bar').submit();
		});
	}
	
	/***********************/
	/*** Public Methods ***/
	/*********************/
	var init = function(){
		bindSubmitSuscribeNav();
		showLatestDeals();
		addClickEventToSearhIcon();
	}
	
	return {
		"init": init 
	}
	
}());

//Initialize Checkout Page
(function (){
	app.Shopflow.init();	
}());