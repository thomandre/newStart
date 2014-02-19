/************************************
 * Additional new code
 * 
 ************************************/
if ($('body.checkout-template').length > 0) {
	// For Global Collect iFrame
	$('.card-type-options input').change(function(e) { 
		var form = $(this).closest('form'),
			iframe = $('.payconfirm-container iframe'),
			formtarget = $(this).attr('data-target');
			
		$.ajax({
			type: 'GET',
			cache: false,
			url: form.attr('data-json'),
			data: form.serialize(),
			dataType: 'json',
			success: function(data){
				var url = data.URL.replace(/\&amp;/g,'&');
				//iframe.attr('src',url);
				form.attr('action',url);
				form.attr('target',formtarget);
				form.submit();
				iframe.css('display', 'block');
				$('#completePurchase').css('display', 'block');
			}
		});
	});
	
	// For giftwrap checkbox
	$('#giftwrap-chkbox').change(function(){
		target = $('#giftwrap-note');
		
		if($('#giftwrap-chkbox').is(':checked'))
		{
			target.css('display','block');
		}
		else
		{
			target.css('display','none');
		}
	});

	
	/*************************************
	 * Existing hybris code
	 * 
	 *************************************/
	// checkoutSummaryPage.jsp
	function placeOrderWithSecurityCode() {
		var securityCode = $("#SecurityCode").val();
		$(".securityCodeClass").val(securityCode);
		document.getElementById("placeOrderForm1").submit();
	}
	
	$(document).ready(function() {
		$("#Terms1").click(function() {
			var terms1disabled = $('#Terms1').attr("checked");
			if (terms1disabled == true) {
				$('#Terms2').attr("checked", true);
			} else {
				$('#Terms2').attr("checked", false);
			}
		});
	
		$("#Terms2").click(function() {
			var terms2disabled = $('#Terms2').attr("checked");
			if (terms2disabled == true) {
				$('#Terms1').attr("checked", true);
			} else {
				$('#Terms1').attr("checked", false);
			}
		});

		updatePlaceOrderButton();
	});
	
	function updatePlaceOrderButton() {
		var deliveryAddress = $("#checkout_summary_deliveryaddress_div").hasClass("complete");
		var deliveryMode = $("#checkout_summary_deliverymode_div").hasClass("complete");
		var paymentDetails = $("#checkout_summary_payment_div").hasClass("complete")
	
		if (deliveryAddress && deliveryMode && paymentDetails) {
			$(".place-order").removeAttr('disabled');
		} else {
			$(".place-order").attr('disabled', true);
		}
	}
	
	// summaryFlow.tag
	/*
	$.blockUI.defaults.overlayCSS = {};
	$.blockUI.defaults.css = {};
	/*
	function refreshCartTotals(checkoutCartData) {
		$('#cart_totals_div').html($('#cartTotalsTemplate').tmpl(checkoutCartData));
	}
	
	function refreshPage(checkoutCartData) {
		//update delivery address, delivery method and payment sections, and cart totals section
		refreshDeliveryAddressSection(checkoutCartData);
		refreshDeliveryMethodSection(checkoutCartData);
		refreshPaymentDetailsSection(checkoutCartData);
		refreshCartTotals(checkoutCartData);
		updatePlaceOrderButton();
	}
	
	function getCheckoutCartDataAndRefreshPage() {
		$.getJSON('${getCheckoutCartUrl}', function(checkoutCartData) {
			refreshPage(checkoutCartData);
		});
	}
	
	// summaryFlowPayment.tag
	$(document).ready(function() {
		bindEditPaymentMethodButton();
		bindSecurityCodeWhatIs();
	});
	
	function bindSecurityCodeWhatIs() {
		var securityWhatText = "<spring:message code='checkout.summary.paymentMethod.securityCode.whatIsThis.description'/>";
		$('.security_code_what').bt(securityWhatText, {
			trigger : 'click',
			positions : 'bottom',
			fill : '#efefef',
			cssStyles : {
				fontSize : '11px'
			}
		});
	}
	
	function bindEditPaymentMethodButton() {
		$('div.checkout_summary_flow_c .change_payment_method_button').click(function() {
	
			var paymentId = $(this).attr('payment_id');
			var options = {
				url : '${getPaymentDetailsFormUrl}',
				data : {
					paymentId : paymentId,
					createUpdateStatus : ''
				},
				target : '#popup_checkout_add_edit_payment_method',
				type : 'GET',
				success : function(data) {
					//alert(data);
					bindCreateUpdatePaymentDetailsForm();
	
					// Show the payment method popup
					$.colorbox({
						inline : true,
						href : "#popup_checkout_add_edit_payment_method",
						height : false,
						overlayClose : false
					});
				},
				error : function(xht, textStatus, ex) {
					alert("Failed to get payment details. Error details [" + xht + ", " + textStatus + ", " + ex + "]");
				}
			};
	
			$(this).ajaxSubmit(options);
	
			return false;
		});
	}
	
	function bindUseSavedCardButton() {
		$('button.use_saved_card_button').click(function() {
	
			$.ajax({
				url : '${getSavedCardsUrl}',
				type : 'POST',
				dataType : 'json',
				success : function(data) {
	
					// Fill the available saved cards
					$('#saved_cards_tbody').html($('#savedCardsTemplate').tmpl({
						savedCards : data
					}));
					bindUseThisSavedCardButton();
					bindEnterNewPaymentButton();
	
					// Show the saved cards popup
					$.colorbox({
						inline : true,
						href : "#popup_checkout_saved_payment_method",
						height : false,
						innerHeight : "530px"
					});
				},
				error : function(xht, textStatus, ex) {
					alert("Failed to get saved cards. Error details [" + xht + ", " + textStatus + ", " + ex + "]");
				}
			});
	
			return false;
		});
	}
	
	function bindEnterNewPaymentButton() {
		$('button.enter_new_payment_button').click(function() {
	
			// Show the payment method popup
			$.colorbox({
				inline : true,
				href : "#popup_checkout_add_edit_payment_method",
				height : false,
				innerHeight : "930px"
			});
			return false;
		});
	}
	
	function bindCreateUpdatePaymentDetailsForm() {
		bindUseSavedCardButton();
	
		$('.create_update_payment_form').each(function() {
			var options = {
				type : 'POST',
				beforeSubmit : function() {
					$('#popup_checkout_add_edit_payment_method').block({
						message : "<img src='${spinnerUrl}' />"
					});
				},
				success : function(data) {
					//alert(data);
					$('#popup_checkout_add_edit_payment_method').html(data);
					var status = $('.create_update_payment_id').attr('status');
					if (status != null && "success" == status.toLowerCase()) {
						getCheckoutCartDataAndRefreshPage();
						parent.$.colorbox.close();
					} else {
						bindCreateUpdatePaymentDetailsForm();
					}
				},
				error : function(xht, textStatus, ex) {
					alert("Failed to create/update payment details. Error details [" + xht + ", " + textStatus + ", " + ex + "]");
				},
				complete : function() {
					$('#popup_checkout_add_edit_payment_method').unblock();
				}
			};
	
			$(this).ajaxForm(options);
	
		});
	
	}
	
	function bindUseThisSavedCardButton() {
		$('.use_this_saved_card_button').click(function() {
	
			var paymentId = $(this).attr('payment_id');
			$.postJSON('${setPaymentDetailsUrl}', {
				paymentId : paymentId
			}, handleSelectSavedCardSuccess);
			return false;
		});
	}
	
	var handleSelectSavedCardSuccess = function(data) {
		if (data != null) {
			refreshPage(data);
	
			parent.$.colorbox.close();
		} else {
			alert("Failed to set payment details");
		}
	};
	
	function refreshPaymentDetailsSection(data) {
		$('#checkout_summary_payment_div').replaceWith($('#paymentSummaryTemplate').tmpl(data));
	
		//bind edit payment details button
		bindEditPaymentMethodButton();
		bindSecurityCodeWhatIs();
	}
	
	// summaryFlowDeliveryAddress
	
	/* Extend jquery with a postJSON method */
	jQuery.extend({
		postJSON : function(url, data, callback) {
			return jQuery.post(url, data, callback, "json");
		}
	});
	
	var handleChangeAddressButtonClick = function() {
		$.postJSON('${getDeliveryAddressesUrl}', handleAddressDataLoad);
		return false;
	};
	
	var handleAddressDataLoad = function(data) {
		// Fill the available delivery addresses
		$('.delivery_addresses_list').html($('#deliveryAddressesTemplate').tmpl({
			addresses : data
		}));
	
		// Handle selection of address
		$('.delivery_addresses_list button.use_address').click(handleSelectExistingAddressClick);
		// Handle edit address
		$('.delivery_addresses_list button.edit').click(handleEditAddressClick);
		// fill form fields
		fillAddressForm();
	
		// Show the delivery address popup
		$.colorbox({
			inline : true,
			href : "#popup_checkout_delivery_address",
			height : false,
			overlayClose : false
		});
	};
	
	function fillAddressForm() {
		var addressId = $('.change_address_button').attr('address-id');
		var options = {
			url : '${getDeliveryAddressFormUrl}',
			data : {
				addressId : addressId,
				createUpdateStatus : ''
			},
			type : 'GET',
			success : function(data) {
				$('#create_update_address_form_container_div').html(data);
				bindCreateUpdateAddressForm();
			}
		};
	
		$.ajax(options);
	}
	
	var handleSelectExistingAddressClick = function() {
		var addressId = $(this).attr('address-id');
		$.postJSON('${setDeliveryAddressUrl}', {
			addressId : addressId
		}, handleSelectExitingAddressSuccess);
		return false;
	};
	
	var handleEditAddressClick = function() {
		var addressId = $(this).attr('address-id');
		var options = {
			url : '${getDeliveryAddressFormUrl}',
			data : {
				addressId : addressId,
				createUpdateStatus : ''
			},
			target : '#create_update_address_form_container_div',
			type : 'GET',
			success : function(data) {
				//alert(data);
				bindCreateUpdateAddressForm();
			},
			error : function(xht, textStatus, ex) {
				alert("Failed to update cart. Error details [" + xht + ", " + textStatus + ", " + ex + "]");
			}
		};
	
		$(this).ajaxSubmit(options);
		return false;
	};
	
	var handleSelectExitingAddressSuccess = function(data) {
		if (data != null) {
			//alert("delivery address set successfully");
	
			refreshPage(data);
			parent.$.colorbox.close();
		} else {
			alert("Failed to set delivery address");
		}
	};
	
	$(document).ready(function() {
		$('div.checkout_summary_flow_a .change_address_button').click(handleChangeAddressButtonClick);
		bindCreateUpdateAddressForm();
	});
	
	function bindCreateUpdateAddressForm() {
		$('.create_update_address_form').each(function() {
			var options = {
				type : 'POST',
				beforeSubmit : function() {
					$('#checkout_delivery_address').block({
						message : "<img src='${spinnerUrl}' />"
					});
				},
				success : function(data) {
					//alert(data);
					$('#create_update_address_form_container_div').html(data);
					var status = $('.create_update_address_id').attr('status');
					if (status != null && "success" == status.toLowerCase()) {
						getCheckoutCartDataAndRefreshPage();
						parent.$.colorbox.close();
					} else {
						bindCreateUpdateAddressForm();
					}
				},
				error : function(xht, textStatus, ex) {
					alert("Failed to update cart. Error details [" + xht + ", " + textStatus + ", " + ex + "]");
				},
				complete : function() {
					$('#checkout_delivery_address').unblock();
				}
			};
	
			$(this).ajaxForm(options);
		});
	}
	
	function refreshDeliveryAddressSection(data) {
		$('#checkout_summary_deliveryaddress_div').replaceWith($('#deliveryAddressSummaryTemplate').tmpl(data));
		//bind change address button
		$('div.checkout_summary_flow_a .change_address_button').click(handleChangeAddressButtonClick);
	}
	
	// summaryFlowDeliveryMode.tag
	$(document).ready(function() {
		bindEditDeliveryMethodButton();
	});
	
	function bindEditDeliveryMethodButton() {
		$('div.checkout_summary_flow_b .change_mode_button').click(function() {
	
			$.ajax({
				url : '${getDeliveryModesUrl}',
				type : 'POST',
				dataType : 'json',
				success : function(data) {
					// Fill the available delivery addresses and select button
					$('#delivery_modes_dl').html($('#deliveryModesTemplate').tmpl({
						deliveryModes : data
					}));
					$('#delivery_modes_button').html($('#deliveryModeButton').tmpl({
						deliveryModes : data
					}));
	
					// Show the delivery modes popup
					$.colorbox({
						inline : true,
						href : "#popup_checkout_delivery_modes",
						height : false,
						overlayClose : false
					});
	
					bindUseThisDeliveryMode();
				},
				error : function(xht, textStatus, ex) {
					alert("Failed to get delivery modes. Error details [" + xht + ", " + textStatus + ", " + ex + "]");
				}
			});
			return false;
		});
	}
	
	function bindUseThisDeliveryMode() {
		$('#use_this_delivery_method').click(function() {
			var selectedCode = $('input:radio[name=delivery]:checked').val();
			if (selectedCode) {
				$.ajax({
					url : '${setDeliveryModeUrl}',
					type : 'POST',
					dataType : 'json',
					data : {
						modeCode : selectedCode
					},
					success : function(data) {
						if (data != null) {
							//alert("delivery mode set successfully");
							refreshPage(data);
							parent.$.colorbox.close();
						} else {
							alert("Failed to set delivery mode");
						}
					},
					error : function(xht, textStatus, ex) {
						alert("Ajax call failed while trying to set delivery mode. Error details [" + xht + ", " + textStatus + ", " + ex + "]");
					}
				});
			}
			return false;
		});
	}
	
	function refreshDeliveryMethodSection(data) {
		$('#checkout_summary_deliverymode_div').replaceWith($('#deliveryModeSummaryTemplate').tmpl(data));
		bindEditDeliveryMethodButton();
	}
	
} /* End body.checkout functions */