(function($) { // Use $ to mean jQuery
	
	//// HELPER FUNCTIONS
	
	// http://13thparallel.com/archive/viewport/
	ess.getViewportScrollY = function() {
		var scrollY = 0;
		if (document.documentElement && document.documentElement.scrollTop) {
			scrollY = document.documentElement.scrollTop;
		} else if (document.body && document.body.scrollTop) {
			scrollY = document.body.scrollTop;
		} else if (window.pageYOffset) {
			scrollY = window.pageYOffset;
		} else if (window.scrollY) {
			scrollY = window.scrollY;
		}
		return scrollY;
	};
	
	ess.capitalizeFirstLetter = function(string){
	    return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	//// COLOR / SIZE UI FUNCTIONS
	
	// clear drop down passing optional default text
	ess.clearSelectField = function(fieldId, defaultText) {
		var defaultText = defaultText || "";
		$(fieldId).find('option').remove(); // remove all select options
		if (defaultText != "") {
			$(fieldId).append('<option>' + defaultText + "</option>");
		}
	};
	
	// originally commented out for QC 96084
	// removed "sale" and money additions from prices
	// needed in getSkuByColorAndSize and getQuantityByColorAndSize
	ess.filterSizeColorValue = function(text) {
		if (text === undefined) return '';
	    // remove sale text from color
		var saleIndex = text.indexOf("- " + ess.locale.sale);
	    if (saleIndex > -1) {
	        text = text.substr(0, saleIndex - 1);
	    }
	    // remove money value from price
        var pricePattern = /(([ -]+)?([\u00a3\u20ac$\?]|\w{3}|&\w*?;)?[\d ,.]+[., ]\d{2,4}( &\w*?;|[ \u00a3\u20ac$\?]+)?)?/ig;
	    text = text.replace(pricePattern, "");
	    
		return text;
	};
	ess.getSkuByColorAndSize = function(colorCode, size) {
		var skuCode = '';
		if (ess.productJSON.superPid == true) {
		    var skus = ess.productJSON.childPids[ess.poloCustomProduct.selectedChildPid].skus;
		} else {
		    var skus = ess.productJSON.skus;
		}
		$.each(skus, function(i, sku) {
			if (sku !== null && sku.colorCode == colorCode && (sku.size == size || ess.filterSizeColorValue(sku.size) == size)) { // size may need filtering
				skuCode = sku.sku_id;
			}
		});
		return skuCode;
	};
	
	// returns an array of sku objects
	ess.getSkusBySize = function(size) {
		var skuArray = [];
		$.each(ess.productJSON.skus, function(i, sku) {
			if (sku !== null && ess.filterSizeColorValue(sku.size) == size) { 
				skuArray.push(sku);
			}
		});
		return skuArray;
	}
	
	// returns an array of sku objects
	ess.getSkusByColor = function(colorCode) {
		var skuArray = [];
		$.each(ess.productJSON.skus, function(i, sku) {
			if (sku !== null && sku.colorCode == colorCode) {
				skuArray.push(sku);
			}
		});
		return skuArray;
	}
	
	ess.getQuantityByColorAndSize = function(colorCode, size) {
		var skuQtyOnHand = "";
		size = ess.filterSizeColorValue(size);        
		$.each(ess.productJSON.skus, function(i, sku) {
			if (sku !== null && sku.colorCode == colorCode && ess.filterSizeColorValue(sku.size) == size) { // filter out price
				skuQtyOnHand = sku.quantOnHand;
			}
		});
		return skuQtyOnHand;
	};

	// return array of available color codes for the size provided
	ess.getColorsBySize = function(size) {
		var colorCodeArray = [];
		if (ess.poloCustomProduct != undefined && ess.productJSON.superPid == true) {
			var sizeMap = ess.sizeMap[ess.poloCustomProduct.selectedChildPid];
		} else {
			var sizeMap = ess.sizeMap;
		}
		$.each(sizeMap[size].colors, function(i, color) {
			colorCodeArray.push(color.code.toString());
		});
		return colorCodeArray;
	};
	
	ess.getColorsByGenericName = function(genColor) {
		var colorCodeArray = [];
		for (color in ess.allColors) {
			if ($.inArray(genColor, ess.allColors[color].genericColors) > -1) {
				colorCodeArray.push(ess.allColors[color].code.toString());
			}
		}
		return colorCodeArray;
	};
	
	ess.getColorsBySizeAndGenericName = function(size, genColor) {
		var colorCodeArray = [];
		$.each(ess.sizeMap[size].colors, function(i, color) {
			if ($.inArray(genColor, color.genericColors) > -1) {
				colorCodeArray.push(color.code.toString());
			}
		});
		return colorCodeArray;
	};
	
	ess.removeDefaultOption = function(field) {
		$(field + " option").each(function (i, opt) {
			if (opt.text == ess.locale.selectColor || opt.text == ess.locale.selectSize) {
				$(this).remove();
			}
		});
	};
	
	// turns dropdown into single unselectable span
	// restore color/size select dropdown if no value passed
	ess.toggleSingleSelection = function(field, value) {
		if (value !== undefined) {
			ess.removeDefaultOption(field);
			if (field == "#size") {
				ess.setSizeSelection(value);
			} else if (field == "#color") {
				ess.setColorSelection(value);
				jQuery("#color-group .cmfilter").hide();
			}
			$(field).siblings("span.single").remove(); 
			$(field).addClass("single"); // add class to hide select
			$(field).before('<span class="single">' + value + '</span>'); // add text
		} else {
			// todo: add the default value back?
			if ($(field).siblings("span.single").length) {
				$(field).siblings("span.single").remove();
				$(field).removeClass("single");
			}
		}
	};

	ess.allSkusOnSale = function() {
		for (var k = 0; k < ess.productJSON.skus.length; k++) {
			if (ess.productJSON.skus[k].price.base == ess.productJSON.skus[k].price.current) {
				return false;
			}
		}
		return true;
	}
	
	ess.selectedSkusOnSale = function() {
		for (var k = 0; k < ess.productJSON.skus.length; k++) {
			if (ess.productJSON.skus[k].price.base != ess.productJSON.skus[k].price.current) {
				return true;
			}
		}
		return false;
	}

	// optional filter argument (array) only displays those in the filter
	// consolidates the following functions: updateSwatches, showAllColors
	ess.updateColorOptions = function(colorFilter) {
		var colorFilter = colorFilter || [];
		var allSkusOnSale = ess.allSkusOnSale();
		
		if ($("#color").length) {
			
			// show "select color" if the following..
			// once the default text is removed it should not appear again
			// product is sliced by size, not a CYO product, more than one size and the default size is selected
			if (!ess.defaultRemoved && ess.slicedBy == "size" && ess.poloCustomProduct === undefined && (ess.sizes.length > 1 && $("#size").attr("selectedIndex") == 0)) {
				defaultText = ess.locale.selectColor;
			} else {
				ess.defaultRemoved = true;
				defaultText = null;
			}
			ess.clearSelectField("#color", defaultText); // clear drop down
			$(".swatches li").remove(); // clear swatches
			
			var lastColor = "";
			var colorCounter = 0;
			
			// re-populate drop down and swatches
			if (ess.poloCustomProduct != undefined && ess.productJSON.superPid == true) {
				var swatchListSorted = ess.swatchListSorted[ess.poloCustomProduct.selectedChildPid];
			} else {
				var swatchListSorted = ess.swatchListSorted;
			}
			$.each(swatchListSorted, function(k, swatch) {
				
				// if a filter is provided make sure the colorCode matches
				if ((colorFilter.length > 0 && $.inArray(swatch.colorCode, colorFilter) > -1) || (colorFilter.length == 0 && swatch.color !== undefined)) {
					
					// when sliced by size only display sale prices if a size is selected
					if (ess.slicedBy == "color" || (ess.slicedBy == "size" && $("#size").attr("selectedIndex") != 0)) {
						var sale = false;
						var skus = (ess.slicedBy == "color") ? ess.productJSON.skus : ess.getSkusBySize($("#size option:selected").text());
						$(skus).each(function (i, sku) {
							if (swatch.color.toLowerCase() == sku.color.toLowerCase()) {
								sale = (sku.price.base !== sku.price.current);
							}
						});
					}
					
					// populate color dropdown
					// do not show "SALE" if VP ("VALUE") level pricing or ALL skus on sale 
					// do not populate on CYO pages
					if (ess.poloCollection == undefined) {
                        if (sale && ess.displayHintType != "VALUE" && !allSkusOnSale && swatch.color !== undefined) { 
                            $("#color").append('<option value="' + swatch.colorCode + '">' + swatch.color + " - "+ ess.locale.sale + "</option>");
                        } else {
                            $("#color").append('<option value="' + swatch.colorCode + '">' + swatch.color + "</option>");
                        }
					}
					
					// populate swatch images
					selectedClass="";
					if(swatch.colorCode == jQuery("#color").val()) {
						selectedClass="selected";
						ess.updateCustomDropdown(jQuery("#color-group .cmfilter"),swatch.colorCode);
					}
					var li = $('<li class="swatch '+selectedClass+'" value="' + swatch.colorCode + '" style="display:list-item">');
					li.append('<img src="' + swatch.src +'" title="' + swatch.color + '" alt="' + swatch.color + '" />');
					$(".swatches").append(li);
					
					lastColor = swatch.color;
					colorCounter++;
				}
			});
			
			// replace with text if only one color available
			// add || ess.swatchListSorted.length == 1?
			if (ess.slicedBy == "color" && !$("#narrow-by-select").length && colorCounter == 1 && ess.poloCustomProduct === undefined) {
				ess.toggleSingleSelection("#color", lastColor);
			}
			
			// apply click handler
			$(".swatches li").click(function() {
				var colorCode = $(this).attr("value");
				ess.setColorSelection(colorCode);
				ess.updateCustomDropdown(jQuery("#color-group .cmfilter"),colorCode);
				ess.swapSelectedSwatch(jQuery(this));
				if($("#content-wrap").hasClass("dns-page") && !$("#size").hasClass("single")){
					$("#sizeContainer .cmfilter ").remove();
					ess.createCustomDropdown($("#size"));
				}
			});
		}
	};

	ess.swapSelectedSwatch = function(selectedSwatch){
		if(selectedSwatch.parent("ul.swatches").find("li.selected")){
			selectedSwatch.parent("ul.swatches").find("li.selected").removeClass("selected");
			selectedSwatch.addClass("selected");
		}
	};
	
	ess.updateSizeOptions = function(override) {
		var lastSize = "";
		var sizeCounter = 0;
		
		// 84965 - Update Sizes if sliced by color (Issue 89166) 
		// 95835 - removed || ess.slicedBy == 'size' (clicking swatch ALWAYS reset sizes).. added back in.
		if (ess.slicedBy == "color" || ess.slicedBy == "size" || override) {
			
			// get the selected (and filtered) color name
			var selectedColor = jQuery('#color').val();
			if (selectedColor != ess.locale.selectColor) {
				var colorName = ess.filterSizeColorValue(ess.getColorNameFromCode(selectedColor)).toLowerCase();
			} else {
				var colorName = selectedColor.toLowerCase();
			}
			
			if (colorName != ess.locale.selectColor.toLowerCase() && ess.slicedBy != "size" && ess.sizesByColor !== undefined) {
				ess.clearSelectField("#size", ess.locale.selectSize);
				if (colorName !== "") {
					// check if product only has one size
					for (var i = 0; i < ess.sizesByColor[colorName].length; i++) {
						var sizeText = ess.sizesByColor[colorName][i].sizeText;
						// remove price from single size products
						if (ess.sizes.length == 1) {
							sizeText = ess.filterSizeColorValue(sizeText); 
						}
						$("#size").append('<option value="' + ess.sizesByColor[colorName][i].value + '">' + sizeText + '</option>');
						lastSize = sizeText;
						sizeCounter++;
					}
				}
			// populate sizes with sizes from ess.sizes
			} else if (ess.slicedBy == "size" || ess.sizesByColor === undefined) {
				ess.clearSelectField("#size", ess.locale.selectSize);
				if (ess.poloCustomProduct != undefined && ess.productJSON.superPid == true) {
					var sizes = ess.sizes[ess.poloCustomProduct.selectedChildPid];
				} else {
					var sizes = ess.sizes;
				}
				for (var i = 0; i < sizes.length; i++) {
					// only display size if it has colors available
					if (ess.getColorsBySize(sizes[i]).length) { 
						$("#size").append('<option>' + sizes[i] + '</option>');
						lastSize = sizes[i];
						sizeCounter++;
					}
				}
			}

			// if only one is available and shared by all colors
			// if by color then replace when one size is available for all colors 
			// should be this: if ((ess.slicedBy == "size" && sizeCounter == 1 && ess.poloCustomProduct === undefined) || (ess.sizes.length == 1 && ess.poloCustomProduct === undefined)) {
			if ((ess.slicedBy == "size" && sizeCounter == 1 && ess.poloCustomProduct === undefined) || ess.sizes.length == 1) {
				ess.toggleSingleSelection("#size", lastSize);
			}
		}
		ess.fixSizeUtilsLayout();
	};
	
	// clear and re-populate the generic colors drop down
	ess.updateNarrowByOptions = function() {

		// get the selected size
		var size = ess.filterSizeColorValue($("#size option:selected").text());
		if (ess.slicedBy == "size" && size != ess.locale.selectSize) {
			// create list of generic names based on size
			var genericColorArray = ess.sizeMap[size].genericColors;
		} else {  
			// create list of all generic names available
			var genericColorArray = ess.genericColors
		}
		
		ess.clearSelectField("#narrow-by-select", ess.locale.allColors);
		$.each(genericColorArray, function(i, color) {
			$("#narrow-by-select").append('<option>' + color + '</option>');
		});
		
		$("#narrow-by-select").unbind("change");
		$("#narrow-by-select").bind("change", function() {
			ess.setNarrowBySelection($(this).val());
		});
	};

	// select color by code or name
	// todo: if no color is passed use the first available color
	ess.setColorSelection = function(color) {
		var color = color.toString();
		var value;

		// has color select
		if ($('#color option').length) { 
			$("#color option").each(function(i, colorOption) {
				if (color.match(/^\d+$/)) { // match colorCode integer
					value = $(colorOption).val();
				} else { // otherwise assume a color name is passed
					value = ess.filterSizeColorValue($(colorOption).text());
				}
				if (color == value) {
					var selectedColor = $("#color option").eq(i);
					// IE 6: http://csharperimage.jeremylikness.com/2009/05/jquery-ie6-and-could-not-set-selected.html
					setTimeout(function() { $(selectedColor).attr("selected", "selected"); }, 1);
					ess.changeColor(selectedColor.val());
				}
			});

		// no color select
		} else { 
			ess.changeColor(color);
		}
		
	};
	
	// select size by name
	ess.setSizeSelection = function(size) {
		$("#size option").each(function(i, sizeOption) {
			var text = ess.filterSizeColorValue($(sizeOption).text());
			if (size == text) {
				var selectedSize = $("#size option").eq(i);
				try { // IE 6: http://csharperimage.jeremylikness.com/2009/05/jquery-ie6-and-could-not-set-selected.html
					$(selectedSize).attr("selected", "selected");
				} catch(e) {
					setTimeout(function() { $(selectedSize).attr("selected", "selected"); } ,1);
				}
			}
		});
		ess.changeSize();
	};
	
	// todo: more refactoring
	ess.setNarrowBySelection = function(genColor) {
		var genColor = genColor || $("#narrow-by-select").val();
		
		// (sliced by size and a size is selected) or default color is passed
		if (($("#size").length > 0 && $("#size").attr("selectedIndex") > 0 && ess.slicedBy != "color") || ess.size !== undefined) {
			
			// get the selected size
			var size = $("#size option:selected").text();
			if (size == ess.locale.selectSize) {
				size = ess.sizes[0]; // sets to first listed size; not sure why this is done
			}
			
			// if all colors are selected to show
			if (genColor === ess.locale.allColors) { // && ess.slicedBy == "color") {
				ess.updateColorOptions();
			} else {
				var filter = ess.getColorsBySizeAndGenericName(size, genColor);
				ess.updateColorOptions(filter);
				
				/*
				// 79279: Select the first of the filtered colors
				var selectedColor = "";
				if ($("select#color option").length > 1) {
					$("select#color option").eq(1).attr("selected", "selected");
					selectedColor = $("select#color option").eq(1).val();
				} else {
					selectedColor = $("select#color option").eq(0).val(); // When only one color
				}
				ess.product.changeColor(selectedColor);

				$("#color option").eq(0).attr("selected", "selected");
				selectedColor = $("select#color option").eq(0).val();
				ess.product.changeColor(selectedColor);
				*/
				
				/*
				if (ess.sizesByColor[selectedColor] === undefined) { // This happens if value is a number rather than the color name
					if ($("select#color option").length > 1) {
						selectedColor = $("select#color option")[1].text.toLowerCase();
					} else {
						selectedColor = $("select#color option")[0].text.toLowerCase();
					}
				}
				// 90854: Do not clear out sizes when sliced by size
				if (ess.slicedBy != "size") {
					// clear out the size drop down
					ess.clearSelectField("#size", ess.locale.selectSize);
					for (var i = 0; i < ess.sizesByColor[selectedColor].length; i++) {
						// Add default option
						$("#size").append('<option value="' + ess.sizesByColor[selectedColor][i].value  +'">' + ess.sizesByColor[selectedColor][i].sizeText + '</option>');
					}
					ess.updateSizeOptions();
				}
				*/
			}
			
		// sliced by color
		} else {
			if (genColor == ess.locale.allColors) {
				ess.updateColorOptions();
			} else {
				var filter = ess.getColorsByGenericName(genColor);
				ess.updateColorOptions(filter);
			}
			
			/*
			$("#color option").eq(0).attr("selected", "selected");
			ess.product.changeColor();
			ess.updateSizeOptions();
			*/
		}
		
		// select the first color
		ess.setColorSelection($("#color option").eq(0).val());
		
		/*
		// retained from old function, what is ess.colorCode ???
		// if colorColor is set select that color?
		if (ess.colorCode !== undefined) {
			$("#color option").each(function(i, option) {
				if (option.value == ess.colorCode || option.text == ess.colorCode) {
					$(option).attr("selected", true);
				}
			});
		}
		*/
		
	};
	
	/**
	 * Finds the most recently added item in the cartItem array by timestamp and returns the array position
	 * @param {Object} dwrCartSummaryResponse
	 * @return {Integer}
	 */
	ess.getLastAddedItemFromCartResponse = function(dwrCartSummaryResponse) {
		earliestTimestamp = dwrCartSummaryResponse.cartItems[0].addedDate.getTime();
		earliestPosition = 0;
		for (i = 0; i < dwrCartSummaryResponse.cartItems.length; i++) {
			thisTimestamp = dwrCartSummaryResponse.cartItems[i].addedDate.getTime();
			if (earliestTimestamp < thisTimestamp) {
				earliestTimestamp = thisTimestamp;
				earliestPosition = i;
			}
		}
		return earliestPosition;
	}
	
	/**
	 * Returns the price of an item in the cart (with applicable discount applied)
	 * @param {Object} cartItem
	 * @return {Float}
	 */
	ess.getItemPriceFromCartResponse = function(cartItem) {
		if (cartItem.pricing.itemLevelDiscountedPrice == null) {
            // no discount
            itemPrice = cartItem.pricing.unitPrice.amount;
        } else {
            // discount
            itemPrice = cartItem.pricing.itemLevelDiscountedPrice.amount/cartItem.quantity;
        }
		return itemPrice;
	}
	
	/**
	 * Adds locale strings to non-english known image types.
	 * @param {string} imageName
	 * @param {string} locale
	 * @param {string} type
	 */
	ess.localizeImageName = function(imageName, locale, type) {
		if (locale.match(/^en/i)) { // images are by default english so short-circuit
			return imageName;
		}
		
		var localizedName = '';
		
		// locale string cleanup
		locale = locale || Store.vars.locale;
		locale = locale.toLowerCase();
		locale = locale.replace('_','');
		
		switch(type) {
			case 'font':
				localizedName = imageName.replace(/_(font\d*)_/i,'_$1'+locale+'_');
				break;
			case 'mode':
				if (imageName.match(/_pony(on|off)_/i)) {
					localizedName = imageName.replace(/_(pony(on|off))_/i, '_$1'+locale+'_');
				} else if (imageName.match(/_mon(on|off)_/i)) {
					localizedName = imageName.replace(/_(mon(on|off))_/i, '_$1'+locale+'_');
				}
				break;
			default:
				// default
				return undefined;
		}
		return localizedName;
	}
	
	ess.fixSizeUtilsLayout = function() {
		// size chart/fit guide button layout fix when the container is width-constrained
		try {
			if ((document.getElementById('#sizeLabel').offsetWidth+document.getElementById('#size').offsetWidth)>=165) {
				$('#size-utils').addClass('single-line');
			} else {
				$('#size-utils').removeClass('single-line');
			}
		} catch(e) {
			// eat errors
		}
	}

	ess.initEnhancedZoom = function () {
		if (jQuery('#enhanced-zoom').length) {
			var colorTemplates = ['poloColor', 'poloSolidHome', 'poloBedCollection'];
			if (jQuery.inArray(ess.productTemplate, colorTemplates) != -1) {
				zoomColor = ess.getColorSliceArray()[0].colorId;
			} else {
				zoomColor = '';
			}
			ess.setZoomColor(zoomColor);
			jQuery('#enhanced-zoom').click(function (e) {
				e.preventDefault();
				if (this.className != 'disabled') {
					var colorCode = jQuery(this).attr('rel');
					var altIndex = jQuery('ul#alternate-images li').length ? jQuery('ul#alternate-images li.active').index() : 0;
					openEnhancedZoom(ess.productJSON.productId, colorCode, altIndex);
				}
			});
		}
	}

	// set enhanced zoom color
	ess.setZoomColor = function (colorCode) {
		var isDisabled = true;
		if (colorCode) { // check if color has a zoom image
			jQuery.each(ess.getColorSliceArray(), function () {
				if (this.colorId == colorCode && this.zoomImageURL) {
					isDisabled = false;
				}
			})
		} else { // check if product has a zoom image
			if (ess.productJSON.zoomImageURL) {
				isDisabled = false;
			}
		}
		jQuery('#enhanced-zoom')
			.attr({
				'class': isDisabled ? 'disabled' : '',
				'rel': colorCode
			});
	}

	// standardizes standard/super PID slice output
	ess.getColorSliceArray = function () {
		if (ess.productJSON.superPid) {
			var colorSliceArray = [];
			jQuery.each(ess.productJSON.colorSliceValues, function () {
				colorSliceArray.push(this[0]);
			});
			return colorSliceArray; 
		} else {
			return ess.productJSON.colorSliceValues;
		}
	}

	//// DOM READY
			
	$(document).ready(function() {
	
		//// DATA FUNCTIONS
		
		// ess.sizeSlices, if it exists, contains a size/sku associate array which should be used in place of the data in ess.sizes and ess.productJSON.sku.size. Often this will be for localized size data.
		if (ess.sizeSlices != undefined) {
			ess.sizes = [];
			for (i=0;i<ess.allStyles.length;i++) {
				ess.allStyles[i].size = [];
			}
			$.each(ess.sizeSlices, function(sizeName, skus) {
				ess.sizes.push(sizeName);
				for (i=0;i<ess.productJSON.skus.length;i++) {
					if ($.inArray(ess.productJSON.skus[i].sku_id,skus) != -1) {
						ess.productJSON.skus[i].size = sizeName;
						
						for (si=0;si<ess.allStyles.length;si++) {
							if (ess.productJSON.skus[i].colorCode == ess.allStyles[si].colorCode && $.inArray(ess.productJSON.skus[i].size,ess.allStyles[si].size) == -1) {
								ess.allStyles[si].size.push(sizeName);
							}
						}
					}
				}
			});
		}
		
		// Validating product layouts for CYO-type templates
		// Products w/out valid layouts will have their colors removed from ess.sortedSwatchList
		if (ess.poloCustomProduct != undefined) {
			if (ess.poloCustomProduct.templateName == 'poloCustomFlagOutfit') {
				$.each(ess.poloCustomProduct.childPids, function(childPid,value){
					ess.swatchListSortedCopy = [];
					$.extend(true, ess.swatchListSortedCopy, ess.swatchListSorted[childPid]);
					for (i = 0; i < ess.swatchListSortedCopy.length; i++) {
						if (ess.poloCustomProduct[ess.swatchListSortedCopy[i].colorCode] == undefined) {
							for (x = 0; x < ess.swatchListSorted.length; x++) {
								if (ess.swatchListSortedCopy[i].colorCode == ess.swatchListSorted[childPid][x].colorCode) {
									ess.swatchListSorted[childPid].splice(x, 1);
								}
							}
						}
					}
				});
			} else {
				ess.swatchListSortedCopy = [];
				$.extend(true, ess.swatchListSortedCopy, ess.swatchListSorted);
				for (i = 0; i < ess.swatchListSortedCopy.length; i++) {
					if (ess.poloCustomProduct[ess.swatchListSortedCopy[i].colorCode] == undefined) {
						for (x = 0; x < ess.swatchListSorted.length; x++) {
							if (ess.swatchListSortedCopy[i].colorCode == ess.swatchListSorted[x].colorCode) {
								ess.swatchListSorted.splice(x, 1);
							}
						}
					}
				}
			}
			delete ess.swatchListSortedCopy;
		}

		// For each size, determine if the style is available in this size
		// Create associative array for each size
		ess.sizeMap = [];		
		if (ess.poloCustomProduct != undefined && ess.productJSON.superPid == true) {
			$.each(ess.poloCustomProduct.childPids, function(childPid,value){
				ess.sizeMap[childPid] = {};
				for (i = 0; i < ess.sizes[childPid].length; i++) {
					ess.sizeMap[childPid][ess.sizes[childPid][i]] = {
						colors: [],
						genericColors: []
					};
				}
			});
		} else {
			$.each(ess.sizes, function(i, size) {   
				ess.sizeMap[size] = {
					colors: [],
					genericColors: []
				};
			});
		}
			
		// Iterate over ess.productJSON.skus
		if (ess.productJSON.superPid != true) {
			$.each(ess.sizes, function(i, size) {
				$.each(ess.allStyles, function(j, style) {
					if (style !== null) {
						if ($.inArray(size, style.size) > -1) {
							// Add this styles color info to the size map
							// Issue 90838 - Only add the color to the size map if it's SKU availability is IN_STOCK
							var addColor = false;
							for (var i = 0; i < ess.productJSON.skus.length; i++) {
								if (ess.productJSON.skus[i] !== null && ess.productJSON.skus[i].colorCode == style.colorCode 
									&& ess.productJSON.skus[i].size == size && ess.productJSON.skus[i].avail == "IN_STOCK") {
									addColor = true;
								}
							}
							if (addColor) {
								ess.sizeMap[size].colors.push({
									code: style.colorCode,
									name: style.colorName,
									genericColors: style.genericColors
								});
							}
							$.each(style.genericColors, function(k, genericColor) {
								if ($.inArray(genericColor, ess.sizeMap[size].genericColors) == -1) {
									ess.sizeMap[size].genericColors.push(genericColor);
								}
							});
						}
					}
				}); // end each style			
			}); // end each size
		} else if (ess.productJSON.superPid == true) {
			$.each(ess.productJSON.childPids, function(childPid,childPidSkus) {
				$.each(ess.sizes[childPid], function(i, size) {
					$.each(ess.allStyles[childPid], function(j, style) {
						if (style !== null) {
							if ($.inArray(size, style.size) > -1) {
								// Add this styles color info to the size map
								// Issue 90838 - Only add the color to the size map if it's SKU availability is IN_STOCK
								var addColor = false;
								for (var i = 0; i < ess.productJSON.childPids[childPid].skus.length; i++) {
									if (ess.productJSON.childPids[childPid].skus[i] !== null && ess.productJSON.childPids[childPid].skus[i].colorCode == style.colorCode 
										&& ess.productJSON.childPids[childPid].skus[i].size == size && ess.productJSON.childPids[childPid].skus[i].avail == "IN_STOCK") {
										addColor = true;
									}
								}
								if (addColor) {
									ess.sizeMap[childPid][size].colors.push({
										code: style.colorCode,
										name: style.colorName,
										genericColors: style.genericColors
									});
								}
								$.each(style.genericColors, function(k, genericColor) {
									if ($.inArray(genericColor, ess.sizeMap[childPid][size].genericColors) == -1) {
										ess.sizeMap[childPid][size].genericColors.push(genericColor);
									}
								});
							}
						}
					}); // end each style			
				}); // end each size
			});
		}
		
		// generate unique list of all colors and generic colors
		ess.allColors = [];
		ess.genericColors = [];
		
		if (ess.productJSON.superPid != true) {
		$.each(ess.allStyles, function(i, style) {
			if (style !== null) {
				ess.allColors[style.colorName] = {
					code: style.colorCode,
					genericColors: style.genericColors
				}; // This only works if the colors in different sizes for the same PID have the same generic colors			
				
				$.each(style.genericColors, function(j, genericColor) {
					if ($.inArray(genericColor, ess.genericColors) == -1) {
						ess.genericColors.push(genericColor);
					}
				});
			}
		});
		} else if (ess.productJSON.superPid == true) {
			// TODO: superPID ess.allColors & ess.genericColors population
		}
		
		// Issue 84965 - If sliced by color, generate a list of all sizes per each color
		ess.sizesByColor = [];
		if ((ess.poloCustomProduct != undefined && ess.poloCustomProduct.templateName != 'poloCustomFlagOutfit') || ess.poloCustomProduct == undefined) {
			$.each(ess.allStyles, function(i, style) {
				if (style !== null) {
					var colorName = style.colorName.toLowerCase();
					
					// Issue 90291 - If only a single color AND ends in " - SALE", remove " - SALE" from color name
					if ($("div#colorName").length == 1) {
						var saleIndex = colorName.indexOf(" - sale");
						if (saleIndex > -1) {
							colorName = colorName.substr(0, saleIndex);
						}
					}
					
					// create colorName entry if it doesn't exist
					// secondary check because the "in" operator also returns true for functions (ex. the color "clear" returns true)
					if (!(colorName in ess.sizesByColor) || typeof(ess.sizesByColor[colorName]) == "function") {
						ess.sizesByColor[colorName] = [];
					}
					
					$.each(style.size, function(j, size) {
						var alreadyExists = false;
						for (var k = 0; k < j; k++) {
							if (ess.sizesByColor[colorName][k] && ess.sizesByColor[colorName][k].sizeText == size) {
								alreadyExists = true;
							}
						}
						if (!alreadyExists) {
							ess.sizesByColor[colorName].push({
								sizeText: size,
								value: ess.productJSON.productId + '|' + ess.getSkuByColorAndSize(style.colorCode, size)
							});
						}
					}); // end $.each size
				}
			}); // end $.each style
		}
		
		//// END DATA FUNCTIONS
		
		// size and color dropdowns are hidden until js loads
		// this prevents the select fields from being seen before swapping with text (when applicable)
		$("#size,#color,#narrow-by-select").css("visibility", "visible");
		
		// For CYO Flag the calls to ess.updateColorOptions and ess.updateSizeOptions are made in product-page-cyo-flag.js
		// This guarantees that page-load childPid selection logic has run
		if (ess.poloCustomProduct == undefined || (ess.poloCustomProduct != undefined && ess.poloCustomProduct.templateName != 'poloCustomFlagOutfit')) {
			ess.updateColorOptions();
			
			// Only run the size updater if rendering a non-collection product
			if (ess.poloCollection == undefined) {
				ess.updateSizeOptions(true);
			}
		}
		
		// run/reset narrow-by functionality
		if ($("#narrow-by-select").length) {
			ess.updateNarrowByOptions();
		}
		
		// check for size/color filtering from the family grid
		if (ess.selectedColor !== undefined || ess.size !== undefined) {

			// set the narrow by selection
			if (ess.selectedColor !== undefined) {
				ess.setNarrowBySelection(ess.selectedColor);
			}
			// hide select-by if it exists
			if ($("#narrow-by-select").length > 0) {
				$("#narrow-by-group").css("display", "none");
			}
			// display "full assortment available" message
			if (ess.size === undefined || ess.slicedBy == "size" || (ess.slicedBy == "color" && ess.size !== undefined)) {
				$("#colorFilterMessage").css("display", "block");
				$("#colorFilterMessage a").click(function(e) {
					e.preventDefault();
					if ($("#narrow-by-group").length > 0) {
						$("#narrow-by-group").css("display", "block");
					}
					// make sure select field is displayed if more than one color available
					if (ess.swatchListSorted.length > 1) {
						ess.toggleSingleSelection("#color");
					}
					// hide filter message
					$("#colorFilterMessage").css("display", "none");
					ess.updateColorOptions();
					ess.changeColor();
				});
				if (ess.size !== undefined) {
					ess.setSizeSelection(ess.size);
				}
			} else {
				ess.setSizeSelection(ess.size);
			}
			ess.changeColor();
		}

		// initialize Enhanced Zoom
		ess.initEnhancedZoom();
		
		// Customer Assistance
		
		// Fix for disabled scrollbars in Safari and Chrome:
		// http://stackoverflow.com/questions/1617638/scrollbar-problem-with-jquery-ui-dialog-in-chrome-and-safari
		ess.safariFix = function() {
			window.setTimeout(function() { 
				$(document)
				.unbind('mousedown.dialog-overlay')
				.unbind('mouseup.dialog-overlay'); 
			}, 100);
		};
		
		function toggleTab(tabId) {
			var tabId = tabId.replace("#", "");
			$("#ca-lightbox ul.ui-tabs-nav li").each(function(index, value) {
				if ($(this).attr("id") == tabId) {
					$("#ca-lightbox").tabs('select', index);
				} 
			});
		}
		
		// Click handler to open lightbox
		function openLightBox(evt, lightBoxId, tabId, href) {
			if (lightBoxId == '#ca-lightbox') {
				var link = $(href + " a").first().attr("href");
				$(tabId).tabs('select', link);
			} else {
				$(tabId).tabs('select', href);
			}
			
			evt.preventDefault();
			$(lightBoxId).dialog('open');
			
			$("select:not(.single)").css("display", "none"); // workaround for IE6 select rendering bug
			
			if (lightBoxId == "#ca-lightbox") { // Don't hide the select in the ca-lightbox
				$("#contactTitleSelect,#subjectSelect,#countryCode").css("display", "inline");
			}
		}
		
		// add tooltip markup
		$("body").append('<div id="tooltip_outer"><div id="tooltip_inner"></div></div>');
		
		//initTooltip();
		$("#tabs").tabs();
		$("#ca-lightbox").tabs();
		$("#tabs-zoom").tabs();	
		$("#tabs").tabs('select', 0);
		
		// Unhide tabs
		$(".hide-tab-on-load").css('display', 'block');
		
		// Initialize lightboxes
		$("#promo-lightbox").dialog({autoOpen: false, modal: true, width: 435, position: ['center','top']});
		$("#ca-lightbox").dialog({autoOpen: false, modal: true, width: 800, position: ['center','top']});
		if (!ess.productPopup) {
			$("#zoom-lightbox").dialog({autoOpen: false, modal: true, width: 850, draggable: false, position: 'center', resizable: false});	
		}
		$("#flashPopup-lightbox").dialog({autoOpen: false, modal: true, width: 850, draggable: false, position: 'center', resizable: false});	
		
		$(".ui-dialog-titlebar-close").click(function() { 
			$("#zoom-lightbox").dialog('close');
			$("#ca-lightbox").dialog('close');
			if(!$("#content-wrap").hasClass("dns-page")) { 
				$("select:not(.single)").css("display", "inline");
			}
		});
		

		
		$("#promo-lightbox").dialog({
			close: function(event, ui) {
				if (!ess.unavailable && !$("#content-wrap").hasClass("dns-page")) {
					$("select:not(.single)").css("display", "inline");
				}
			},
			open: function(event, ui) {
				$('.ui-widget-overlay').css("height", "2000px");
				$('#promo-header').css("display","block");
				
				$('#promo-close').click(function() { 
					$('#promo-lightbox').dialog('close');
				});
				
				$('html, body').animate({scrollTop:0}, 'slow');
				ess.safariFix();
				$(".lightbox-container").css("top", "40px"); // Hack to prevent lightbox from jumping around - make it appear at a fixed position.
			}
		});
		
		if (!ess.productPopup) {
			$("#zoom-lightbox").dialog({
				close: function(event, ui) {
					if (!ess.unavailable && !$("#content-wrap").hasClass("dns-page")) {
						$("select:not(.single)").css("display", "inline");
					}
					/*if(ess.product !== undefined && ess.poloCustomProduct == undefined) {
						ess.product.changeView(0); // Revert to main image view on lightbox close
					}*/
				},
				open: function(event, ui) {
					$('.ui-widget-overlay').css("height", "2000px");
					$('html, body').animate({scrollTop:0}, 1000); // 1000 ms = 1 sec
					ess.safariFix();
					$(".lightbox-container").css("top", "40px"); // Hack to prevent lightbox from jumping around - make it appear at a fixed position.
				}
			});
		}
		
		$("#ca-lightbox").dialog({
			close: function(event, ui) {
				if(!$("#content-wrap").hasClass("dns-page")) { 
					$("select:not(.single)").css("display", "inline");
				}
			},
			open: function(event, ui) {					
				$('html, body').animate({scrollTop:0}, 'slow');
				//var offset = ess.getViewportScrollY() + 150;					
				//$(".lightbox-container").css("top", offset + "px"); // Hack to prevent lightbox from jumping around - make it appear at a fixed position.
				ess.safariFix();
				$(".lightbox-container").css("top", "40px"); // Hack to prevent lightbox from jumping around - make it appear at a fixed position.
			}
		});
		
		$(".ca-link").click(function(evt) {	
			toggleTab($(this).attr("href"));
			openLightBox(evt, "#ca-lightbox", "#tabs-lightbox", $(this).attr("href"));
		});	

		$("#styleGuidePopup").click(function(evt) {		
			toggleTab("#tab-style");
			openLightBox(evt, "#zoom-lightbox", "#tabs-zoom", $(this).attr("href"));			
		});
		$("#size-chart").click(function(evt) {
			toggleTab("#tab-size");
			openSizeChart(evt, this);
		});
		$("#fit-guide").click(function(evt) {
			toggleTab("#tab-fit");
			openSizeChart(evt, this, true);
		});
		
		function openSizeChart(event, object, fitGuide) {
			event.preventDefault();
			
			if ($('#tab-zoom-2').children().length == 0) {
				$('#tab-zoom-2').append($(ess.sizeChart)); // Delay loading of size chart - Issue 92806
			}
			
			toggleTab($(object).attr("href"));
			
			$("#tabs-zoom").tabs('select', 'tab-zoom-2');
			if (fitGuide) {
				$("#tabs-zoom").tabs('select', 'tab-zoom-3');
			}
			
			if (ess.IE6) {
				window.setTimeout(function() {
					$("select").css("display", "none"); // workaround for IE6 select rendering bug
					$("#zoom-lightbox").dialog('open'); 
				}, 500);
			} else {
				$("#zoom-lightbox").dialog('open');
			}
			
			toggleTab($(object).attr("href"));
		}
		
		$("a.more-details-closed").click(function() {
	        runEffect($(this));
	        return false;
	    });
		
		// Load the quantity drop down based on query string
		if (ess.quantity !== undefined) {
			$("#quantity option")[ess.quantity - 1]['selected'] = true; // Subtract 1 because of 0-based array index
		}
	    
	    function runEffect(link){                
	        var hiddenElement = $(link).siblings(".more-details-hidden");
	        if($(hiddenElement).is(":visible")) {
	        	$(hiddenElement).hide('blind');     
	        	$(link).text(ess.locale.moreDetails);           
	        }
	        else {
	        	$(hiddenElement).show('blind');
	        	$(link).text(ess.locale.close);
	        }
	        $(link).toggleClass("more-details-open");
	    }
	    
	    var alt = "";
	    var title = "";
	    var image;
	    
	    $('.tooltip a img').tooltip({
	    	 bodyHandler: function() {
	    		//image = $(this).find('img');
	    		image = $(this);
	    		var parent_id = $(this).parents('ul').attr('id');
	    		
	    		//var index = $(this).parent().children().index(this);
	    		var index = 0;
	    		for(i = 0; i < $('#' + parent_id + " li a img").length ; i++) {
	    			var imageIterator = $('#' + parent_id + " li a img")[i];
	    			if($(imageIterator).attr("src") == image.attr("src")) {
	    				break;
	    			}
	    			index++;
	    		}
	    		
	    		// store then clear title and alt	    	    
	    		if (image.attr('title')) {	    	        
	    	    	image.attr('title','');
	    	    }
	    	    
	    	    if (image.attr('alt')) {
	    	        alt = image.attr('alt');
	    	        image.removeAttr('alt');
	    	    }	    	    
	    	    
	    	    if (parent_id == 'recently-viewed-items') {
	    	    	title = ess.recentlyViewed[index].brand + "<br /><br />" + ess.recentlyViewed[index].description;
	    	    } else {
	    	    	title = ess.relatedProducts[index].brand + "<br /><br />" + ess.relatedProducts[index].description;
	    	    }
	    		
	    	
	        	return title; 
	    	}, 
	    	showURL: false,
	    	track: true,
	    	top:-50,
	    	left:0
	    });
	    
	    $('.tooltip a img').mouseout(function(){
	    	//image = $(this).find('img');
	    	image = $(this);

	    	// Restore alt and title attributes	    	    
    	    image.attr('alt', alt);
	    });
		
		// additional analytics for recently viewed and cross sells
		$("ul#recently-viewed-items a").click(function() {
			this.href += "&" + this.rel;
		});
		$("ul#cross-sell-items a").click(function() {
			this.href += "&" + this.rel;
		});

		// brand ID for denim and supply = 1000995
	    if($("#brand-wrap").hasClass("1000995") && !$("#content-wrap").hasClass("dns-page")){
		    $("#content-wrap").addClass("dns-page")
		    ess.initializeCustomDropdowns();
		}
		if($(".dns-page #colorContainer span.single").length>0){
		    $("#colorContainer .cmfilter").css("display","none");
		}
		if($(".dns-page #sizeContainer span.single").length>0){
		    $("#sizeContainer .cmfilter").css("display","none");
		}	    
	});
})(jQuery);
