/*
ADOBE CONFIDENTIAL
Copyright 2011 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  All information contained herein is, and remains the property of Adobe Systems Incorporated and its suppliers,
if any.  The intellectual and technical concepts contained herein are proprietary to Adobe Systems Incorporated and its
suppliers and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or 
copyright law. Dissemination of this information or reproduction of this material is strictly forbidden unless prior 
written permission is obtained from Adobe Systems Incorporated.
*/
s7js.flyout.Swatches = function(inParent) {
	this.parent = inParent;
	this.containerSize = {
		width : this.parent.offsetWidth,
		height : this.parent.offsetHeight
	};
	
	this.container = document.createElement('div');
	this.container.style.position = 'absolute';
	//this is due to weired IE7 behavior. For some reason it center-alignes this DIV if embedded into text-align:center container.
	this.container.style.left = '0px';
	this.container.style.webkitUserSelect = 'none';
	this.parent.appendChild(this.container);
	
	this.swatchSize = s7js.flyout.Utils.measureDivSize(this.container, 's7flyoutSwatch');
	this.innerSpacer = s7js.flyout.Utils.measureDivSize(this.container, 's7flyoutSwatchInnerSpacer').width; 
	this.outerSpacer = s7js.flyout.Utils.measureDivSize(this.container, 's7flyoutSwatchOuterSpacer').width; 

	this.backgroundLeft = document.createElement('div');
	this.backgroundLeft.className = 's7flyoutSwatchesBackgroundLeft'
	this.backgroundLeft.style.position = 'absolute';
	this.backgroundLeft.style.left = '0px';
	this.backgroundLeft.style.top = '0px';
	this.container.appendChild(this.backgroundLeft);

	this.backgroundRight = document.createElement('div');
	this.backgroundRight.className = 's7flyoutSwatchesBackgroundRight'
	this.backgroundRight.style.position = 'absolute';
	this.backgroundRight.style.right = '0px';
	this.backgroundRight.style.top = '0px';
	this.container.appendChild(this.backgroundRight);

	this.backgroundMiddle = document.createElement('div');
	this.backgroundMiddle.className = 's7flyoutSwatchesBackgroundMiddle'
	this.backgroundMiddle.style.position = 'absolute';
	this.backgroundMiddle.style.left = this.backgroundLeft.offsetWidth + 'px';
	this.container.appendChild(this.backgroundMiddle);

	this.swatchesContainer = document.createElement('div');
	this.swatchesContainer.style.position = 'absolute';
	this.container.appendChild(this.swatchesContainer);

	var selfRef = this;
	this.rollOutListener = function(inE) {
		var relativeCoords = s7js.flyout.Utils.getRelativeEventCords(inE, selfRef.container);
		if ((relativeCoords.x < 0) || (relativeCoords.y < 0) || (relativeCoords.x > selfRef.containerSize.width) || (relativeCoords.y > selfRef.containerSize.height)) {
			selfRef.clearOverSwatch();
			selfRef.isOver = false;
			s7js.flyout.Utils.removeEventListener(document, 'mousemove', selfRef.rollOutListener, false);
			if (selfRef.hideActiveWhenOver) {
				selfRef.markActiveSwatch(selfRef.selectedIdx);
			}
		}
	};

	this.enabled = true;
	this.usePager = true;
	this.scrollTime = 350;
	this.frictionCoef = 0.001;
	this.pager = null;
	this.scroller = null;
	this.swatchList = [];
	this.isOver = false;
	this.selectedIdx = -1;
	this.hideActiveWhenOver = true;

	this.layout();
}

s7js.flyout.Swatches.prototype.setSwatchUrlList = function(inSwatchUrlList) {
	this.createSwatches(inSwatchUrlList);

	if (this.containerSize.width < this.swatchesContainer.offsetWidth) {
		if (this.usePager) {
			this.pager = new s7js.flyout.Pager(this.container);
			this.pager.setEnabled(this.enabled);
			this.pager.setScrollTime(this.scrollTime);
			this.container.removeChild(this.swatchesContainer);
			this.pager.setContent(this.swatchesContainer);

			var visibleSwatchCount = Math.floor(this.pager.getViewSize() / (this.innerSpacer + this.swatchSize.width));
			var pageSize = visibleSwatchCount * (this.innerSpacer + this.swatchSize.width);
			this.pager.setPageSize(pageSize);
		} else {
			this.scroller = new s7js.flyout.Scroller(this.container);
			this.scroller.setEnabled(this.enabled);
			this.scroller.setFrictionCoef(this.frictionCoef);
			this.container.removeChild(this.swatchesContainer);
			this.scroller.setContent(this.swatchesContainer);
		}
	} else {
		this.swatchesContainer.style.left = (this.containerSize.width - this.swatchesContainer.offsetWidth) / 2 + 'px';
		this.swatchesContainer.style.top = (this.containerSize.height - this.swatchesContainer.offsetHeight) / 2 + 'px';
	}
};

s7js.flyout.Swatches.prototype.setUsePager = function(inUsePager) {
	this.usePager = inUsePager;
};

s7js.flyout.Swatches.prototype.setScrollTime = function(inScrollTime) {
	this.scrollTime = inScrollTime;
	if (this.pager != null) {
		this.pager.setScrollTime(this.scrollTime);
	}
};

s7js.flyout.Swatches.prototype.setFrictionCoef = function(inFrictionCoef) {
	this.frictionCoef = inFrictionCoef;
	if (this.scroller != null) {
		this.scroller.setFrictionCoef(this.frictionCoef);
	}
};

s7js.flyout.Swatches.prototype.getSelectedSwatch = function() {
	return this.selectedIdx;
};

s7js.flyout.Swatches.prototype.setSelectedSwatch = function(inIdx) {
	this.selectedIdx = inIdx;
	this.markActiveSwatch(this.selectedIdx);
	this.onSelect(this.selectedIdx);
};

s7js.flyout.Swatches.prototype.isHideActiveWhenOver = function() {
	return this.hideActiveWhenOver;
};

s7js.flyout.Swatches.prototype.setHideActiveWhenOver = function(inHideActiveWhenOver) {
	this.hideActiveWhenOver = inHideActiveWhenOver;
};

s7js.flyout.Swatches.prototype.setEnabled = function(inEnabled) {
	this.enabled = inEnabled;
	if (this.pager != null) {
		this.pager.setEnabled(this.enabled);
	}
	if (this.scroller != null) {
		this.scroller.setEnabled(this.enabled);
	}
	for (var i = 0; i < this.swatchList.length; i ++) {
		this.swatchList[i].setEnabled(this.enabled);
	}
};

s7js.flyout.Swatches.prototype.dispose = function(inIdx) {
	if (this.pager != null) {
		this.pager.dispose();
		delete this.pager;
	}
	if (this.scroller != null) {
		this.scroller.dispose();
		delete this.scroller;
	}
	for (var i = 0; i < this.swatchList.length; i ++) {
		this.swatchList[i].dispose();
	}
	this.swatchList.splice(0, this.swatchList.length);
	this.parent.removeChild(this.container);
};

s7js.flyout.Swatches.prototype.getSize = function() {
	return {
		width : this.containerSize.width,
		height : this.containerSize.height
	};
};

s7js.flyout.Swatches.prototype.onSelect = function(inIdx) {
};

//private methods

s7js.flyout.Swatches.prototype.createSwatches = function(inSwatchUrlList) {
	var x = 0;

	x += this.outerSpacer;
	
	for (var i = 0; i < inSwatchUrlList.length; i ++) {
		var swatchUrl = inSwatchUrlList[i];

		var swatchContainer = document.createElement('div');
		swatchContainer.style.position = 'absolute';
		swatchContainer.style.left = x + 'px';
		this.swatchesContainer.appendChild(swatchContainer);
		x += this.swatchSize.width;

		var swatch = this.createSwatch(swatchContainer, i, swatchUrl);
		this.swatchList.push(swatch);

		x += this.innerSpacer;
	}
	this.swatchesContainer.style.width = (inSwatchUrlList.length * this.swatchSize.width + (inSwatchUrlList.length - 1) * this.innerSpacer + 2 * this.outerSpacer) + 'px';
	this.swatchesContainer.style.height = this.swatchSize.height + 'px';
};

s7js.flyout.Swatches.prototype.getSwatchSize = function() {
	this.swatchesContainer = document.createElement('div');
};

s7js.flyout.Swatches.prototype.clearActiveSwatch = function() {
	for (var i = 0; i < this.swatchList.length; i ++) {
		this.swatchList[i].setActive(false);
	}
};

s7js.flyout.Swatches.prototype.markActiveSwatch = function(inIdx) {
	this.clearActiveSwatch();
	if (inIdx >= 0) {
		this.swatchList[inIdx].setActive(true);
	}
};

s7js.flyout.Swatches.prototype.createSwatch = function(inContainer, inIdx, inUrl) {
	var swatch = new s7js.flyout.Swatch(inContainer);
	swatch.setUrl(inUrl);
	var selfRef = this;
	swatch.onClick = function(inSwatch) {
		selfRef.selectedIdx = inIdx;
		selfRef.markActiveSwatch(selfRef.selectedIdx);
		selfRef.onSelect(selfRef.selectedIdx);
	};
	swatch.onOver = function(inSwatch) {
		if (!selfRef.isOver) {
			selfRef.isOver = true;
			s7js.flyout.Utils.addEventListener(document, 'mousemove', selfRef.rollOutListener, false);
			if (selfRef.hideActiveWhenOver) {
				selfRef.clearActiveSwatch();
			}
		}
		selfRef.markOverSwatch(inIdx);
	};
	return swatch;
};

s7js.flyout.Swatches.prototype.clearOverSwatch = function() {
	for (var i = 0; i < this.swatchList.length; i ++) {
		this.swatchList[i].setOver(false);
	}
};

s7js.flyout.Swatches.prototype.markOverSwatch = function(inIdx) {
	this.clearOverSwatch();
	this.swatchList[inIdx].setOver(true);
};

s7js.flyout.Swatches.prototype.layout = function() {
	this.container.style.width = this.containerSize.width + 'px';
	this.container.style.height = this.containerSize.height + 'px';

	this.backgroundMiddle.style.width = this.containerSize.width - this.backgroundLeft.offsetWidth - this.backgroundRight.offsetWidth + 'px';
};