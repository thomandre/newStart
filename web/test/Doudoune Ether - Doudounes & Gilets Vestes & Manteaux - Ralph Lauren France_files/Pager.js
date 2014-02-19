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
s7js.flyout.Pager = function(inParent) {
	this.parent = inParent;
	this.parentSize = {
		width : this.parent.offsetWidth,
		height : this.parent.offsetHeight
	};

	this.buttonOuterSpacer = s7js.flyout.Utils.measureDivSize(this.parent, 's7flyoutSwatchScrollButtonOuterSpacer').width;
	this.buttonInnerSpacer = s7js.flyout.Utils.measureDivSize(this.parent, 's7flyoutSwatchScrollButtonInnerSpacer').width;

	this.leftButton = document.createElement('div');
	this.leftButton.className = 's7flyoutSwatchScrollButtonLeft s7flyoutSwatchScrollButton';
	this.leftButton.style.position = 'absolute';
	this.leftButton.style.left = this.buttonOuterSpacer + 'px';
	this.parent.appendChild(this.leftButton);

	this.rightButton = document.createElement('div');
	this.rightButton.className = 's7flyoutSwatchScrollButtonRight s7flyoutSwatchScrollButton';
	this.rightButton.style.position = 'absolute';
	this.rightButton.style.right = this.buttonOuterSpacer + 'px';
	this.parent.appendChild(this.rightButton);

	this.buttonSize = {
		width : this.leftButton.offsetWidth,
		height : this.leftButton.offsetHeight
	};
	this.contentSize = {
		width : 0,
		height : 0
	};

	s7js.flyout.Utils.addStatesToButton(this.leftButton, true, true);
	s7js.flyout.Utils.addStatesToButton(this.rightButton, true, true);

	this.container = document.createElement('div');
	this.container.style.position = 'absolute';
	this.container.style.overflow = 'hidden';
	this.container.style.left = this.buttonSize.width + this.buttonOuterSpacer + this.buttonInnerSpacer + 'px';
	this.parent.appendChild(this.container);

	var selfRef = this;
	s7js.flyout.Utils.addEventListener(
		this.leftButton, 
		'click', 
		function() {
			if (selfRef.enabled && selfRef.canScrollLeft()) {
				selfRef.scroll(-1);
			}
		}, 
		false
	);
	s7js.flyout.Utils.addEventListener(
		this.rightButton, 
		'click', 
		function() {
			if (selfRef.enabled && selfRef.canScrollRight()) {
				selfRef.scroll(1);
			}
		}, 
		false
	);

	this.content = null;
	this.offset = 0;
	this.enabled = true;

	this.pageSize = -1;
	this.pageScrollTime = 2000;
	this.transition = new s7js.flyout.Transition(this.pageScrollTime);
	this.transition.onChange = function(inTransition) {
		selfRef.offset = inTransition.getValue();
		selfRef.positionContent();
	};

	this.layout();
}

s7js.flyout.Pager.prototype.setContent = function(inContent) {
	this.content = inContent;
	this.container.appendChild(this.content);
	this.contentSize = {
		width : this.content.offsetWidth,
		height : this.content.offsetHeight
	};
	this.positionContent();
};

s7js.flyout.Pager.prototype.setScrollTime = function(inTime) {
	this.pageScrollTime = inTime;
};

s7js.flyout.Pager.prototype.dispose = function() {
	this.transition.stopTransition();
	if (this.content != null) {
		this.container.removeChild(this.content);
	}
	this.parent.removeChild(this.leftButton);
	this.parent.removeChild(this.rightButton);
	this.parent.removeChild(this.container);
};

s7js.flyout.Pager.prototype.getViewSize = function() {
	return this.parentSize.width - 2 * (this.buttonSize.width + this.buttonOuterSpacer + this.buttonInnerSpacer);
};

s7js.flyout.Pager.prototype.getPageSize = function() {
	if (this.pageSize > 0) {
		return this.pageSize;
	} else {
		return this.getViewSize();
	}
};

s7js.flyout.Pager.prototype.setPageSize = function(inPageSize) {
	this.pageSize = inPageSize;
};

s7js.flyout.Pager.prototype.setEnabled = function(inEnabled) {
	this.enabled = inEnabled;
	this.updateButtonStates();
};

//private methods

s7js.flyout.Pager.prototype.positionContent = function() {
	this.content.style.left = this.offset + 'px';
	this.content.style.top = ((this.parentSize.height - this.contentSize.height) / 2) + 'px';
	this.updateButtonStates();
};

s7js.flyout.Pager.prototype.scroll = function(inPageCount) {
	var currentPageIdx;
	if (this.transition.isWorking()) {
		currentPageIdx = - Math.floor(this.transition.getEndValue() / this.getPageSize());
	} else {
		currentPageIdx = - Math.floor(this.offset / this.getPageSize());
	}
	
	var newPageIdx = currentPageIdx + inPageCount;
	var newOffset = - newPageIdx * this.getPageSize();
	newOffset = this.getValidOffset(newOffset);

	if (this.transition.isWorking()) {
		this.transition.stopTransition();
	}
	
	var scrollTime = Math.min(this.pageScrollTime, this.pageScrollTime * Math.abs(newOffset - this.offset) / this.getPageSize());
	this.transition.setTotalTime(scrollTime);
	this.transition.setType(new s7js.flyout.TransitionTypeQuadratic(this.offset, newOffset, false));
	this.transition.startTransition();
};

s7js.flyout.Pager.prototype.getValidOffset = function(inOffset) {
	if (inOffset > 0) {
		inOffset = 0;
	}
	if (inOffset < - (this.contentSize.width - this.getViewSize())) {
		inOffset = - (this.contentSize.width - this.getViewSize());
	}
	return inOffset;
};

s7js.flyout.Pager.prototype.layout = function() {
	this.leftButton.style.top = ((this.parentSize.height - this.buttonSize.height) / 2) + 'px';
	this.rightButton.style.top = ((this.parentSize.height - this.buttonSize.height) / 2) + 'px';
	this.container.style.width = (this.parentSize.width - 2 * (this.buttonSize.width + this.buttonOuterSpacer + this.buttonInnerSpacer)) + 'px';
	this.container.style.height = this.parentSize.height + 'px';
};

s7js.flyout.Pager.prototype.canScrollLeft = function() {
	return (this.offset < 0);
};

s7js.flyout.Pager.prototype.canScrollRight = function() {
	return (this.offset > - (this.contentSize.width - this.getViewSize()));
};

s7js.flyout.Pager.prototype.updateButtonStates = function() {
	s7js.flyout.Utils.setAttribute(this.leftButton, 'state', (!this.canScrollLeft() || !this.enabled ? 'disabled' : (this.leftButton.mouseState == null ? '' : this.leftButton.mouseState)));
	s7js.flyout.Utils.setAttribute(this.rightButton, 'state', (!this.canScrollRight() || !this.enabled ? 'disabled' : (this.rightButton.mouseState == null ? '' : this.rightButton.mouseState)));
};
