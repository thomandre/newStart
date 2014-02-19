/**
 * Alternate Images functionality
 */
var AltImages = {

	init: function (colorCode) {
		var self = AltImages;

		// create data object the first time
		if (!self.data) self.data = self.getDataFromProductJSON();

		self.activeProdImg = null; // used on CYO page
		self.isCYOProduct = (ess.poloCustomProduct != undefined) ? true : false;

		self.container = jQuery('#alternate-images');
		self.colorCode = colorCode || null;

		self.createSwatchArray();
		self.populateAltViews();
	},

	createSwatchArray: function () {
		var self = AltImages;
		
		self.swatchArray = [];

		// append color level alt views
		if (self.colorCode != null && self.data[self.colorCode] != undefined && self.data[self.colorCode].length) {
			jQuery.each(self.data[self.colorCode], function () {
				self.swatchArray.push(this);
			});
		}

		// append product level alt views
		var colorAltCount = self.swatchArray.length;
		if (colorAltCount <= 1) { // only display product alts if there 1 or less color alts
			jQuery.each(self.data.product, function (index, value) {
				if (index > (colorAltCount - 1)) { // start where color alts left off
					self.swatchArray.push(this);
				}
			});
		}

		// append main image thumbnail to array
		if (!self.isCYOProduct && self.swatchArray.length) {
			var colorData = {};
			if (self.colorCode != null) { // grab color swatch
				colorData = self.getDataFromColorCode(self.colorCode);
				colorData.name = 'color';
			} else { // grab product level swatch
				colorData.x50 = ess.productJSON.smallSwatchImageURL;
				colorData.zoom = ess.productJSON.zoomImageURL.substr(ess.productJSON.zoomImageURL.indexOf('sku=') + 4);
				colorData.name = 'product';
			}
			self.swatchArray.unshift(colorData);
		}
	},

	sortByName: function (a, b) {
		return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
	},

	populateAltViews: function () {
		var self = AltImages;

		self.container.attr('rel', self.colorCode); // set rel to active color code
		self.container.html('');

		jQuery.each(self.swatchArray, function () {
			self.container.append('<li class="swatch" rel="' + this.name + '"><a href="#"><img src="' + this.x50 + '" /></a></li>');
		});

		self.container.find('li.swatch')
			.click(function (e) {
				e.preventDefault();
				jQuery(this).siblings().removeClass('active');
				jQuery(this).addClass('active');

				var thisIndex = jQuery(this).index();
				var thisAlt = self.swatchArray[thisIndex];

				// flyout zoom for non-CYO if enabled
				if (scene7Enabled && !self.isCYOProduct && thisAlt.zoom) {
					constructFlyout(thisAlt.zoom);
				} else { // no scene 7
					if (scene7Enabled) {
						resetStaticImage();
					}
					jQuery('#mainProductImage').attr('src', thisAlt.main);
				}

				// fire engagement impression
				self.fireImpression('AltViews_P' + self.swatchArray.length + '_S' + (thisIndex + 1), 'AltViews');
				
				return false;
			});

		if (!self.isCYOProduct) {
			// set first alt as "active"
			self.container.find('li.swatch').eq(0).addClass('active');

		} else {
			// CYO rollover functionality
			self.container.find('li.swatch')
				.hover(
					function () {
						if (!jQuery(this).hasClass('active')) {
							self.activeProdImg = jQuery('#mainProductImage').attr('src');
							jQuery('#mainProductImage').attr('src', self.swatchArray[jQuery(this).index()].main);
						}
					},
					function () {
						if (!jQuery(this).hasClass('active')) {
							jQuery('#mainProductImage').attr('src', self.activeProdImg);
						}
					}
				);
		}
	},

	getDataFromProductJSON: function () {
		var self = AltImages;
		var altData = {};

		altData.altText = ess.productJSON.alternateViewsAltText;

		// get slice level alternate images
		jQuery.each(ess.getColorSliceArray(), function () {
			if (this.alternateViews.length) {
				var thisColorId = this.colorId;
				altData[thisColorId] = [];

				jQuery.each(this.alternateViews, function () {
					var sliceAltData = {};
					jQuery.each(this.otherImages, function () {
						if (this.type == 'T50') sliceAltData.x50 = this.url;
						if (this.type == 'V360x480') sliceAltData.main = this.url;
					});
					sliceAltData.zoom = this.zoomImageURL;
					sliceAltData.name = 'c-' + this.viewId;
					
					// only add color if it has at least swatch and main image
					if (sliceAltData.x50 != undefined && sliceAltData.main != undefined) {
						altData[thisColorId].push(sliceAltData);
					}
				});

				if (altData[thisColorId].length) {
					altData[thisColorId].sort(self.sortByName); // sort by alt name
				} else {
					delete altData[thisColorId]; // delete empty color array
				}
			}
		});

		// get product level alt image data
		altData.product = [];
		jQuery.each(ess.productJSON.alternateViews, function () {
			if (this.T50 != undefined && this.V360x480 != undefined) {
				var prodAltData = {};
				prodAltData.x50 = this.T50;
				prodAltData.main = this.V360x480;
				prodAltData.zoom = this.zoom;
				prodAltData.name = 'p-' + this.name;
				altData.product.push(prodAltData);
			}
		});

		// sort by alt name
		altData.product.sort(self.sortByName); 

		return altData;
	},

	getDataFromColorCode: function (colorCode) {
		var self = AltImages;
		var colorData = {};

		jQuery.each(ess.productJSON.colorSliceValues, function () {
			if (this.colorId == colorCode) {
				colorData.x50 = (this.v50ImageURL != '') ? this.v50ImageURL : this.minicartThumbnailImageURL; // V50 or T50 backup
				colorData.main = this.mainImageURL;
				colorData.zoom = this.zoomImageURL;
			}
		});

		return colorData;
	},

	fireImpression: function (evar47, pev2) {
		cstmlnktrk.createProdEngImpr(evar47, pev2);
	}
};

jQuery(document).ready(function() {
	var colorCode = null;
	if (ess.productTemplate == 'poloColor' || ess.productTemplate == 'poloSolidHome' || ess.productTemplate == 'poloBedCollection') {
		colorCode = ess.getColorSliceArray()[0].colorId;
	}
	AltImages.init(colorCode);
});