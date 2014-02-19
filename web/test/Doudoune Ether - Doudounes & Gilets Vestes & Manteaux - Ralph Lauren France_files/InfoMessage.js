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
s7js.flyout.InfoMessage = function(inParent) {
	this.parentSize = {
		width : inParent.offsetWidth,
		height : inParent.offsetHeight
	};

	this.container = document.createElement('div');
	this.container.style.position = 'absolute';
	this.container.style.left = '0px';
	this.container.style.top = '0px';
	inParent.appendChild(this.container);
	
	this.background = document.createElement('div');
	this.background.className = 's7flyoutInfoMessageBackground';
	this.background.style.position = 'absolute';
	this.container.appendChild(this.background);

	this.message = document.createElement('div');
	this.message.className = 's7flyoutInfoMessage';
	this.message.style.position = 'absolute';
	this.container.appendChild(this.message);

	this.messageSize = {
		width : this.message.offsetWidth,
		height : this.message.offsetHeight
	};

	this.layout();

	this.container.style.visibility = 'hidden';

	this.displayTime = 2000;
	this.fadeTime = 1000;

	this.displayTimeoutId = null;
	this.fadeTransition = new s7js.flyout.Transition(this.fadeTime);
	this.fadeTransition.setType(new s7js.flyout.TransitionTypeLinear(1, 0));
	var selfRef = this;
	this.fadeTransition.onChange = function(inTransition) {
		s7js.flyout.Utils.setOpacity(selfRef.container, inTransition.getValue());
		if (!inTransition.isWorking()) {
			selfRef.container.style.visibility = 'hidden';
		}
	};

	var hideHandler = function() {
		selfRef.hide();
		if (s7js.flyout.Utils.isTouchDevice()) {
			s7js.flyout.Utils.removeEventListener(selfRef.container, 'touchstart', hideHandler, false);
		} else {
			s7js.flyout.Utils.removeEventListener(selfRef.container, 'mousemove', hideHandler, false);
		}
	};
	if (s7js.flyout.Utils.isTouchDevice()) {
		s7js.flyout.Utils.addEventListener(this.container, 'touchstart', hideHandler, false);
	} else {
		s7js.flyout.Utils.addEventListener(this.container, 'mousemove', hideHandler, false);
	}
};

s7js.flyout.InfoMessage.DISPLAYED_COOKIE_NAME = 's7js.flyout.InfoMessage.displayed';

s7js.flyout.InfoMessage.prototype.setDisplayTime = function(inDisplayTime) {
	this.displayTime = inDisplayTime;
};

s7js.flyout.InfoMessage.prototype.setFadeTime = function(inFadeTime) {
	this.fadeTime = inFadeTime;
	this.fadeTransition.setTotalTime(this.fadeTime);
};

s7js.flyout.InfoMessage.prototype.setText = function(inText) {
	this.message.innerHTML = inText;
	this.messageSize = {
		width : this.message.offsetWidth,
		height : this.message.offsetHeight
	};
	this.layout();
};

s7js.flyout.InfoMessage.prototype.show = function() {
	this.markAsDisplayed();
	if (this.displayTimeoutId != null) {
		clearTimeout(this.displayTimeoutId);
		delete this.displayTimeoutId;
	}
	if (this.fadeTransition.isWorking()) {
		this.fadeTransition.stopTransition();
	}
	this.container.style.visibility = 'inherit';
	var selfRef = this;
	this.displayTimeoutId = setTimeout(
		function() {
			selfRef.hide();
		},
		this.displayTime
	);
};

s7js.flyout.InfoMessage.prototype.hide = function() {
	if (this.displayTimeoutId != null) {
		clearTimeout(this.displayTimeoutId);
		delete this.displayTimeoutId;
	}
	this.fadeTransition.startTransition();
};

s7js.flyout.InfoMessage.prototype.wasDisplayed = function() {
	var cookies = document.cookie;
	var regexp = new RegExp(s7js.flyout.InfoMessage.DISPLAYED_COOKIE_NAME + '[ ]*=[ ]*true', 'i');
	return regexp.test(document.cookie);
};

//private methods

s7js.flyout.InfoMessage.prototype.layout = function() {
	this.container.style.width = this.parentSize.width + 'px';
	this.container.style.height = this.parentSize.height + 'px';

	this.message.style.left = (this.parentSize.width - this.messageSize.width) / 2 + 'px';

	var correction = s7js.flyout.Utils.prototype.setupBorder(this.background, 's7flyoutInfoMessageBackground', this.messageSize.width, this.messageSize.height, false);
	this.background.style.left = (this.message.offsetLeft + correction.x) + 'px';
	this.background.style.top = (this.message.offsetTop + correction.y) + 'px';
};

s7js.flyout.InfoMessage.prototype.markAsDisplayed = function() {
	document.cookie = s7js.flyout.InfoMessage.DISPLAYED_COOKIE_NAME + '=true';
};

