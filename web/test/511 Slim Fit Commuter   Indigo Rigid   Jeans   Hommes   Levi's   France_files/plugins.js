// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.




/***********************************************************
    json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


/*
 * jQuery FlexSlider v2.0
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

;(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el),
        vars = $.extend({}, $.flexslider.defaults, options),
        namespace = vars.namespace,
        touch = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
        eventType = (touch) ? "touchend" : "click",
        vertical = vars.direction === "vertical",
        reverse = vars.reverse,
        carousel = (vars.itemWidth > 0),
        fade = vars.animation === "fade",
        asNav = vars.asNavFor !== "",
        methods = {};
    
    // Store a reference to the slider object
    $.data(el, "flexslider", slider);
    
    // Privat slider methods
    methods = {
      init: function() {
        slider.animating = false;
        slider.currentSlide = vars.startAt;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = vars.selector.substr(0,vars.selector.search(' '));
        slider.slides = $(vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(vars.sync).length > 0;
        // SLIDE:
        if (vars.animation === "slide") vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        // TOUCH/USECSS:
        slider.transitions = !vars.video && !fade && vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        // CONTROLSCONTAINER:
        if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
        // MANUAL:
        if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);
        
        // RANDOMIZE:
        if (vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }
        
        slider.doMath();
        
        // ASNAV:
        if (asNav) methods.asNav.setup();
        
        // INIT
        slider.setup("init");
        
        // CONTROLNAV:
        if (vars.controlNav) methods.controlNav.setup();
        
        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.setup();
        
        // KEYBOARD:
        if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
        }
        
        // PAUSEPLAY
        if (vars.pausePlay) methods.pausePlay.setup();
        
        // SLIDSESHOW
        if (vars.slideshow) {
          if (vars.pauseOnHover) {
            slider.hover(function() {
              slider.pause();
            }, function() {
              if (!slider.manualPause) slider.play();
            });
          }
          // initialize animation
          (vars.initDelay > 0) ? setTimeout(slider.play, vars.initDelay) : slider.play();
        }
        
        // TOUCH
        if (touch && vars.touch) methods.touch();
        
        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && vars.smoothHeight)) $(window).bind("resize focus", methods.resize);
        
        
        // API: start() Callback
        setTimeout(function(){
          vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          slider.slides.click(function(e){
            e.preventDefault();
            var $slide = $(this),
                target = $slide.index();
            if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
              slider.direction = (slider.currentItem < target) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
            }
          });
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item;
          
          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');
          
          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              item = (vars.controlNav === "thumbnails") ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }
          
          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();
          
          methods.controlNav.active();
        
          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {

            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              slider.direction = (target > slider.currentSlide) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNavScaffold.delegate('a', "click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();
          
          slider.controlNav.on(eventType, function(event) {

            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);
                
            if (!$this.hasClass(namespace + 'active')) {
              (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch && vars.ignoreEventBug == false) {
            slider.controlNav.on(eventType, function(event) {
                event.preventDefault();
            });
          }
        },
        set: function() {
          var selector = (vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');
        
          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }
        
          methods.directionNav.update();
        
          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.directionNav.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (!vars.animationLoop) {
            if (slider.pagingCount === 1) {
             slider.directionNav.addClass(disabledClass);
            } else if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
            } else {
              slider.directionNav.removeClass(disabledClass);
            }
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
        
          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }
        
          // slider.pausePlay.addClass(pausePlayState).text((pausePlayState == 'pause') ? vars.pauseText : vars.playText);
          methods.pausePlay.update((vars.slideshow) ? namespace + 'pause' : namespace + 'play');
        
          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();
            if ($(this).hasClass(namespace + 'pause')) {
              slider.pause();
              slider.manualPause = true;
            } else {
              slider.play();
              slider.manualPause = false;
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.pausePlay.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false;
              
        el.addEventListener('touchstart', onTouchStart, false);
        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if (e.touches.length === 1) {
            slider.pause();
            // CAROUSEL: 
            cwidth = (vertical) ? slider.h : slider. w;
            startT = Number(new Date());
            // CAROUSEL:
            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                     (carousel && reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                     (carousel && slider.currentSlide === slider.last) ? slider.limit :
                     (carousel) ? ((slider.itemW + vars.itemMargin) * slider.move) * slider.currentSlide : 
                     (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            startX = (vertical) ? e.touches[0].pageY : e.touches[0].pageX;
            startY = (vertical) ? e.touches[0].pageX : e.touches[0].pageY;

            el.addEventListener('touchmove', onTouchMove, false);
            el.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function onTouchMove(e) {
          dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
          scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY)); 
          
          if (!scrolling || Number(new Date()) - startT > 500) {
            e.preventDefault();
            if (!fade && slider.transitions) {
              if (!vars.animationLoop) {
                dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
              }
              slider.setProps(offset + dx, "setTouch");
            }
          }
        }
        
        function onTouchEnd(e) {
          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
            var updateDx = (reverse) ? -dx : dx,
                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
            
            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 20 || Math.abs(updateDx) > cwidth/2)) {
              slider.flexAnimate(target, vars.pauseOnAction);
            } else {
              slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
            }
          }
          // finish the touch by undoing the touch session
          el.removeEventListener('touchmove', onTouchMove, false);
          el.removeEventListener('touchend', onTouchEnd, false);
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();
          
          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(vars.sync).data("flexslider"),
            target = slider.animatingTo;
        
        switch (action) {
          case "animate": $obj.flexAnimate(target, vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      }
    }
    
    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.animating && (slider.canAdvance(target) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;
          
          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }
        
        slider.animating = true;
        slider.animatingTo = target;
        // API: before() animation Callback
        vars.before(slider);
        
        // SLIDESHOW:
        if (pause) slider.pause();
        
        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");
        
        // CONTROLNAV
        if (vars.controlNav) methods.controlNav.active();
        
        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
        
        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;
        
        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.update();
        
        if (target === slider.last) {
          // API: end() of cycle Callback
          vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!vars.animationLoop) slider.pause();
        }
        
        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;
          
          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = (vars.itemWidth > slider.w) ? vars.itemMargin * 2 : vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", vars.animationSpeed);
          if (slider.transitions) {
            if (!vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
          slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
        }
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
      }
    } 
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      vars.after(slider);
    }
    
    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
    }
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.playing = false;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    }
    // SLIDESHOW:
    slider.play = function() {
      slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
      slider.playing = true;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    }
    slider.canAdvance = function(target) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    }
    slider.getTarget = function(dir) {
      slider.direction = dir; 
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    }
    
    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());
            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }
      
      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    }
    
    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;
            
        if (type === "init") {
          slider.viewport = $('<div class="flex-viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
        }
        slider.newSlides = $(vars.selector, slider);
        
        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE: 
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    }
    
    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = vars.itemMargin,
          minItems = vars.minItems,
          maxItems = vars.maxItems;
      
      slider.w = slider.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? maxItems * slider.itemT : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * minItems))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * maxItems))/maxItems :
                       (vars.itemWidth > slider.w) ? slider.w : vars.itemWidth;
        slider.visible = Math.floor(slider.w/(slider.itemW + slideMargin));
        slider.move = (vars.move > 0 && vars.move < slider.visible ) ? vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (vars.itemWidth > slider.w) ? ((slider.itemW + (slideMargin * 2)) * slider.count) - slider.w - slideMargin : ((slider.itemW + slideMargin) * slider.count) - slider.w;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    }
    
    slider.update = function(pos, action) {
      slider.doMath();
      
      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }
      
      // update controlNav
      if (vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (vars.directionNav) methods.directionNav.update();
      
    }
    
    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);
      
      slider.count += 1;
      slider.last = slider.count - 1;
      
      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }
      
      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");
      
      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();
      
      //FlexSlider: added() Callback
      vars.added(slider);
    }
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
      
      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;
      
      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }
      
      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");
      
      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();
      
      // FlexSlider: removed() Callback
      vars.removed(slider);
    }
    
    //FlexSlider: Initialize
    methods.init();
  }
  
  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode  
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    ignoreEventBug: false,          //Boolean: Ignores iOS touch fix for manual controls
    
    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
    
    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item
    
    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item
    
    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    
    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
                                    
    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
  }


  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    //options = options || {};
    options = options===0 ? 0 : options || {};
    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  }  

})(jQuery);







/*!
 * jQuery Character Counter v1.0.1 — by Amsul
 * https://github.com/amsul/character-counter
 * 
 * Freely licensed under a Creative Commons Attribution 3.0 Unported License.
 * License: http://creativecommons.org/licenses/by/3.0/
 */

(function($) {

    var CharCounter = function(elem, options) {

        var self = {},
            old_ie = /MSIE\ 7\.0/i.test( navigator.userAgent )


        // return false if it's not a textarea
        if ( old_ie || elem.type !== 'textarea' ) { return false }


        // check the status
        self.keypress = function(e) {

            var selected = ( self.$elem[0].selectionEnd !== self.$elem[0].selectionStart )

            // get the latest values and lengths
            self.update()

            // check if not selected
            if ( !selected ) {

                // if one more character makes length greater than max length
                if ( String.fromCharCode( e.charCode ).length && self._length + 1 > self._maxlength ) {
                    e.preventDefault()
                }
            }

            return self
        }


        // check the paste event
        self.pasteEvent = function(e) {

            var selection = {},
                elem = this

            e.preventDefault()

            // all browsers
            if ( window.getSelection ) {

                selection.selected = window.getSelection().toString()
                selection.start = elem.selectionStart
                selection.end = elem.selectionEnd
                selection.pastedOriginal = ( e.originalEvent.clipboardData ) ? e.originalEvent.clipboardData.getData('text') : window.clipboardData.getData('Text')
            }


            // for IE
            else {

                // get the selection start and end
                selection = ieGetSelection( elem )
                selection.selected = self._value.substr( selection.start, (selection.end - selection.start) )
                selection.pastedOriginal = window.clipboardData.getData('Text')
            }


            // store the text before and after seleection
            selection.startText = elem.value.substr( 0, selection.start )
            selection.endText = elem.value.substr( selection.end )

            // check the characters available to be pasted
            selection.charsRemaining = self.options.maxChars - ( selection.startText.length + selection.endText.length )

            // store the text to be pasted based on chars remaining
            selection.pastedText = selection.pastedOriginal.substr( 0, selection.charsRemaining )


            // if there's no space left, just return it
            if ( !selection.charsRemaining ) {
                return self
            }


            // compose the selection and current value with the pasted text truncated
            self._value = selection.startText + selection.pastedText + selection.endText


            self
                // trim the value so that it updates in the actual textarea
                .trim()

                // set the caret position according to selection
                .setCaret( elem, selection )

                // update and then print the chars left
                .update().print()


            return self
        }


        // set the caret position with cross-browserness
        self.setCaret = function(elem, selection) {

            var caretPosition = selection.start + selection.pastedText.length

            // all browsers
            if ( window.getSelection ) {
                elem.setSelectionRange( caretPosition, caretPosition )
            }

            // for IE
            else {

                // wait a tick for IE to update the value
                setTimeout(function() {
                  ieSetSelection( elem, caretPosition, caretPosition )
                }, 0)
            }

            return self
        }


        // count the characters and print number left
        self.count = function() {

            self
                // get the latest values and lengths
                .update()

                // print the counter
                .print()

            return self
        }


        // update the values and lengths
        self.update = function() {

            self._value = self.$elem.val()
            self._length = self._value.length

            return self
        }


        // trim the value to the maxlength
        self.trim = function() {
            self.$elem[0].value = self._value.substr( 0, self._maxlength )
            return self
        }


        // print the counter
        self.print = function() {
			var count = 0,
				msg = self.options.msgCharsLeft,
				textReplacePattern = /\[#\]/;
			
            // the length cannot be greater than the maxlength
            if ( self._maxlength < self._length ) {
                self._length = self._maxlength
            }
			
			count = String(self._maxlength - self._length);

			/* If there's a match on a placeholder, use it. Otherwise, backwards compat.  */
			if (msg.search(textReplacePattern) > -1) {
				self.$counter[0].innerHTML =  msg.replace(textReplacePattern,count);
			} else {
				self.$counter[0].innerHTML =  count + ' ' + msg;
			}
            
            return self
        }


        // initialize everything
        self.initialize = (function() {

            // bind the default options
            self.options = $.extend( {}, defaults, options )

            // store the maxlength
            self._maxlength = self.options.maxChars

            // store the elem and create & store the counter box
            self.$elem = $( elem )
            self.$counter = $( '<div class="js-charCounter" />' )

            // do stuff with the $elem
            self.$elem

                // place counter with the $elem append method
                [ self.options.appendMethod ]( self.$counter )

                // bind events
                .on({
                    'keypress':             self.keypress,
                    'input keyup cut':      self.count,
                    'paste':                self.pasteEvent
                })

            return self
        })()


        return self
    },



    /*
        IE get selection from: http://stackoverflow.com/a/4207763
    ======================================================================== */

    ieGetSelection = function(el) {
        var start = 0, end = 0, normalizedValue, range,
            textInputRange, len, endRange;
        if ( typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number' ) {
            start = el.selectionStart;
            end = el.selectionEnd;
        }
        else {
            range = document.selection.createRange();
            if ( range && range.parentElement() === el ) {
                len = el.value.length;
                normalizedValue = el.value.replace(/\r\n/g, '\n');

                // Create a working TextRange that lives only in the input
                textInputRange = el.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());

                // Check if the start and end of the selection are at the very end
                // of the input, since moveStart/moveEnd doesn't return what we want
                // in those cases
                endRange = el.createTextRange();
                endRange.collapse(false);

                if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
                    start = end = len;
                } else {
                    start = -textInputRange.moveStart('character', -len);
                    start += normalizedValue.slice(0, start).split('\n').length - 1;

                    if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
                        end = len;
                    } else {
                        end = -textInputRange.moveEnd('character', -len);
                        end += normalizedValue.slice(0, end).split('\n').length - 1;
                    }
                }
            }
        }
        return {
            start: start,
            end: end
        };
    },



    /*
        IE set selection from: http://stackoverflow.com/a/3275506
    ======================================================================== */

    ieSetSelection = function(field, start, end) {

        var range = field.createTextRange()

        // collapse the range
        range.collapse( true )

        // move the selection
        range.moveStart( 'character', start )
        range.moveEnd( 'character', end - start )

        // make the selection
        range.select()
    },



    /*
        Set the plugin defaults
    ======================================================================== */

    defaults = {
        maxChars:           100,
        maxCharsWarning:    80,
        msgCharsLeft:       window.charRemaining || 'characters left',
        msgWarningColor:    '#F00',
        appendMethod:       'after'
    }



    // extend jquery
    $.fn.charCounter = function ( options ) {

        // go through each object passed and return it
        return this.each(function () {

            // check if it hasnt been attached
            if ( !$.data(this, 'charCounting') ) {

                // bind the plugin
                $.data( this, 'charCounting', CharCounter( this, options ) )
            }
        })
    }

})(jQuery);








/*
 *
****************************************************************************************/

/****************************************************************************************
/* Nav Menu Plugin
   Developed by: Blast Radius Dev Team (Kyri - modified by David/Sean)
   Last Updated: 04/09/2012
*/
(function ($) {   
    $.fn.navDynamic = function (options) {
        defaults = {
          ignore: '',   //Elements that we don't want the plugin to initiate
          force:'', //Elements that we want to display by default
          timeout: 700  //Time delay before menu is faded out (user can recover within this time)
        };
        options = $.extend(defaults, options);
        return this.each(function () {
        	var element = this, toggle_clicked = false;

          //Hide all sub navs (in case they aren't already hidden in css)
    			$(element).find("li").find("div.sub-nav").hide();	

		 	    $(element).children("li").children("a").not(options.ignore).each(function(index) {
            if ($(this).siblings('div.sub-nav').length > 0) {
              if (global.ismobile || global.istablet) {
                //Handle touch event
                $(this).bind('click touchstart', function(e) {
 
                  //Hide all menu except current element
                  $("nav li").not($(this).parent()).find("div.sub-nav").stop(true, true).hide();

                  //Toggle fade for current element
                  $(this).parent().find("div.sub-nav").stop(true, true).fadeToggle();

                  //preventDefault can't be used with touchstart, using return false instead
                  return false;
                });
              } else {
                //Set default hover state to false
                $(this).parent().find("div.sub-nav").data('hover', 0);

                //Add a delay to trigger the hover event on the anchor
                $(this).hoverIntent({
                  interval: 200,
                  over: function() {

                    //Show menu only if the current menu is not already open
                    if ($(this).parent().find("div.sub-nav").data('hover') == false) {
                      //Hide all menu
                      $("nav li").find("div.sub-nav").stop(true, true).hide();

                      //Fade in sub-menu
                      $(this).parent().find("div.sub-nav").fadeIn("fast");
                    }

                    //Set hover state for sub-menu
                    $(this).parent().find("div.sub-nav").data('hover', 1);

                    //Set link state
                    $(this).parent().find("div.sub-nav").data('onLink', 1);
                  },
                  
                  out: function() {
                    //Set menu hover and link state to false
                    var menuExpanded = $(this).parent().find("div.sub-nav");
                    menuExpanded.data('hover',0);
                    menuExpanded.data('onLink', 0);

                    //After x seconds close sub-menu if user is not hovering over it
                    setTimeout(function() {
                      //Close menu if hover state is false
                      if (menuExpanded.data('hover') == false) {
                        menuExpanded.fadeOut();
                      }
                    }, options.timeout);
                  }
                });

                //Add a delay to trigger the hover event on the menu
                $(this).parent().find("div.sub-nav").hoverIntent({
                  over: function() { 
                    //Mouse over - Set hover state to true
                    $(this).data('hover',1);
                  },
                  out: function() {
                    //Mouse out - Set hover state to false
                    $(this).data('hover',0);

                    //Check if user is on menu or on the link, if not, close menu
                    if (($(this).data('hover') == false)&&($(this).data('onLink') == false)) {
                      $(this).fadeOut();
                    }
                  },
                  interval: 50,
                  timeout: options.timeout,
                  sensitivity: 10
                });

              } //end if
            } else {
              //Do nothing
            } //end if
			    }); //end each
        }); //end each
    }; //end function
}(jQuery));
/*
 *
****************************************************************************************/


/****************************************************************************************/
/* Storage polyfill
   Developed by: Remy Sharp
   URL: https://gist.github.com/350433
*/
if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') (function () {

var Storage = function (type) {
  function createCookie(name, value, days) {
    var date, expires;

    if (days) {
      date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';'),
        i, c;

    for (i=0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1,c.length);
      }

      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  }
  
  function setData(data) {
    data = JSON.stringify(data);
    if (type == 'session') {
      window.name = data;
    } else {
      createCookie('localStorage', data, 365);
    }
  }
  
  function clearData() {
    if (type == 'session') {
      window.name = '';
    } else {
      createCookie('localStorage', '', 365);
    }
  }
  
  function getData() {
    var data = type == 'session' ? window.name : readCookie('localStorage');
    return data ? JSON.parse(data) : {};
  }


  // initialise if there's already data
  var data = getData();

  return {
    length: 0,
    clear: function () {
      data = {};
      this.length = 0;
      clearData();
    },
    getItem: function (key) {
      return data[key] === undefined ? null : data[key];
    },
    key: function (i) {
      // not perfect, but works
      var ctr = 0;
      for (var k in data) {
        if (ctr == i) return k;
        else ctr++;
      }
      return null;
    },
    removeItem: function (key) {
      delete data[key];
      this.length--;
      setData(data);
    },
    setItem: function (key, value) {
      data[key] = value+''; // forces the value to a string
      this.length++;
      setData(data);
    }
  };
};

if (typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
if (typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage('session');

})();




/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j){function A(a){return a.replace(B,h).replace(C,function(a,d,b){for(var a=b.split(","),b=0,e=a.length;b<e;b++){var s=D(a[b].replace(E,h).replace(F,h))+o,l=[];a[b]=s.replace(G,function(a,b,c,d,e){if(b){if(l.length>0){var a=l,f,e=s.substring(0,e).replace(H,i);if(e==i||e.charAt(e.length-1)==o)e+="*";try{f=t(e)}catch(k){}if(f){e=0;for(c=f.length;e<c;e++){for(var d=f[e],h=d.className,j=0,m=a.length;j<m;j++){var g=a[j];if(!RegExp("(^|\\s)"+g.className+"(\\s|$)").test(d.className)&&g.b&&(g.b===!0||g.b(d)===!0))h=u(h,g.className,!0)}d.className=h}}l=[]}return b}else{if(b=c?I(c):!v||v.test(d)?{className:w(d),b:!0}:null)return l.push(b),"."+b.className;return a}})}return d+a.join(",")})}function I(a){var c=!0,d=w(a.slice(1)),b=a.substring(0,5)==":not(",e,f;b&&(a=a.slice(5,-1));var l=a.indexOf("(");l>-1&&(a=a.substring(0,l));if(a.charAt(0)==":")switch(a.slice(1)){case "root":c=function(a){return b?a!=p:a==p};break;case "target":if(m==8){c=function(a){function c(){var d=location.hash,e=d.slice(1);return b?d==i||a.id!=e:d!=i&&a.id==e}k(j,"hashchange",function(){g(a,d,c())});return c()};break}return!1;case "checked":c=function(a){J.test(a.type)&&k(a,"propertychange",function(){event.propertyName=="checked"&&g(a,d,a.checked!==b)});return a.checked!==b};break;case "disabled":b=!b;case "enabled":c=function(c){if(K.test(c.tagName))return k(c,"propertychange",function(){event.propertyName=="$disabled"&&g(c,d,c.a===b)}),q.push(c),c.a=c.disabled,c.disabled===b;return a==":enabled"?b:!b};break;case "focus":e="focus",f="blur";case "hover":e||(e="mouseenter",f="mouseleave");c=function(a){k(a,b?f:e,function(){g(a,d,!0)});k(a,b?e:f,function(){g(a,d,!1)});return b};break;default:if(!L.test(a))return!1}return{className:d,b:c}}function w(a){return M+"-"+(m==6&&N?O++:a.replace(P,function(a){return a.charCodeAt(0)}))}function D(a){return a.replace(x,h).replace(Q,o)}function g(a,c,d){var b=a.className,c=u(b,c,d);if(c!=b)a.className=c,a.parentNode.className+=i}function u(a,c,d){var b=RegExp("(^|\\s)"+c+"(\\s|$)"),e=b.test(a);return d?e?a:a+o+c:e?a.replace(b,h).replace(x,h):a}function k(a,c,d){a.attachEvent("on"+c,d)}function r(a,c){if(/^https?:\/\//i.test(a))return c.substring(0,c.indexOf("/",8))==a.substring(0,a.indexOf("/",8))?a:null;if(a.charAt(0)=="/")return c.substring(0,c.indexOf("/",8))+a;var d=c.split(/[?#]/)[0];a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1));return d+a}function y(a){if(a)return n.open("GET",a,!1),n.send(),(n.status==200?n.responseText:i).replace(R,i).replace(S,function(c,d,b,e,f){return y(r(b||f,a))}).replace(T,function(c,d,b){d=d||i;return" url("+d+r(b,a)+d+") "});return i}function U(){var a,c;a=f.getElementsByTagName("BASE");for(var d=a.length>0?a[0].href:f.location.href,b=0;b<f.styleSheets.length;b++)if(c=f.styleSheets[b],c.href!=i&&(a=r(c.href,d)))c.cssText=A(y(a));q.length>0&&setInterval(function(){for(var a=0,c=q.length;a<c;a++){var b=q[a];if(b.disabled!==b.a)b.disabled?(b.disabled=!1,b.a=!0,b.disabled=!0):b.a=b.disabled}},250)}if(!/*@cc_on!@*/true){var f=document,p=f.documentElement,n=function(){if(j.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}(),m=/MSIE (\d+)/.exec(navigator.userAgent)[1];if(!(f.compatMode!="CSS1Compat"||m<6||m>8||!n)){var z={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},t,q=[],O=0,N=!0,M="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,S=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,T=/\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,L=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,B=/:(:first-(?:line|letter))/g,C=/(^|})\s*([^\{]*?[\[:][^{]+)/g,G=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,H=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,K=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,J=/^(checkbox|radio)$/,v=m>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,F=/\s+([)\]+~])/g,Q=/\s+/g,x=/^\s*((?:[\S\s]*\S)?)\s*$/,i="",o=" ",h="$1";(function(a,c){function d(){try{p.doScroll("left")}catch(a){setTimeout(d,50);return}b("poll")}function b(d){if(!(d.type=="readystatechange"&&f.readyState!="complete")&&((d.type=="load"?a:f).detachEvent("on"+d.type,b,!1),!e&&(e=!0)))c.call(a,d.type||d)}var e=!1,g=!0;if(f.readyState=="complete")c.call(a,i);else{if(f.createEventObject&&p.doScroll){try{g=!a.frameElement}catch(h){}g&&d()}k(f,"readystatechange",b);k(a,"load",b)}})(j,function(){for(var a in z){var c,d,b=j;if(j[a]){for(c=z[a].replace("*",a).split(".");(d=c.shift())&&(b=b[d]););if(typeof b=="function"){t=b;U();break}}}})}}})(this);


  /**
 * DropKick
 *
 * Highly customizable <select> lists
 * https://github.com/JamieLottering/DropKick
 *
 * &copy; 2011 Jamie Lottering <http://github.com/JamieLottering>
 *                        <http://twitter.com/JamieLottering>
 * 
 */
(function ($, window, document) {

  var ie6 = false;

  // Help prevent flashes of unstyled content
  if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
    ie6 = true;
  } else {
    document.documentElement.className = document.documentElement.className + ' dk_fouc';
  }
  
  var
    // Public methods exposed to $.fn.dropkick()
    methods = {},

    // Cache every <select> element that gets dropkicked
    lists   = [],

    // Convenience keys for keyboard navigation
    keyMap = {
      'left'  : 37,
      'up'    : 38,
      'right' : 39,
      'down'  : 40,
      'enter' : 13
    },

    // HTML template for the dropdowns
    dropdownTemplate = [
      '<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">',
        '<a class="dk_toggle">',
          '<span class="dk_label">{{ label }}</span>',
        '</a>',
        '<div class="dk_options">',
          '<ul class="dk_options_inner">',
          '</ul>',
        '</div>',
      '</div>'
    ].join(''),

    // HTML template for dropdown options
    optionTemplate = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',

    // Some nice default values
    defaults = {
      startSpeed : 1000,  // I recommend a high value here, I feel it makes the changes less noticeable to the user
      theme  : false,
      change : false
    },

    // Make sure we only bind keydown on the document once
    keysBound = false
  ;

  // Called by using $('foo').dropkick();
  methods.init = function (settings) {
    settings = $.extend({}, defaults, settings);

    return this.each(function () {
      var
        // The current <select> element
        $select = $(this),

        // Store a reference to the originally selected <option> element
        $original = $select.find(':selected').first(),

        // Save all of the <option> elements
        $options = $select.find('option'),

        // We store lots of great stuff using jQuery data
        data = $select.data('dropkick') || {},

        // This gets applied to the 'dk_container' element
        id = $select.attr('id') || $select.attr('name'),

        // This gets updated to be equal to the longest <option> element
        width  = settings.width || $select.outerWidth(),

        // Check if we have a tabindex set or not
        tabindex  = $select.attr('tabindex') ? $select.attr('tabindex') : '',

        // The completed dk_container element
        $dk = false,

        theme
      ;

      // Dont do anything if we've already setup dropkick on this element
      if (data.id) {
        return $select;
      } else {
        data.settings  = settings;
        data.tabindex  = tabindex;
        data.id        = id;
        data.$original = $original;
        data.$select   = $select;
        data.value     = _notBlank($select.val()) || _notBlank($original.attr('value'));
        data.label     = $original.text();
        data.options   = $options;
      }

      // Build the dropdown HTML
      $dk = _build(dropdownTemplate, data);

      // Make the dropdown fixed width if desired
      $dk.find('.dk_toggle').css({
        'width' : width + 'px'
      });

      // Hide the <select> list and place our new one in front of it
      $select.before($dk);

      // Update the reference to $dk
      $dk = $('#dk_container_' + id).fadeIn(settings.startSpeed);

      // Save the current theme
      theme = settings.theme ? settings.theme : 'default';
      $dk.addClass('dk_theme_' + theme);
      data.theme = theme;

      // Save the updated $dk reference into our data object
      data.$dk = $dk;

      // Save the dropkick data onto the <select> element
      $select.data('dropkick', data);

      // Do the same for the dropdown, but add a few helpers
      $dk.data('dropkick', data);

      lists[lists.length] = $select;

      // Focus events
      $dk.bind('focus.dropkick', function (e) {
        $dk.addClass('dk_focus');
      }).bind('blur.dropkick', function (e) {
        $dk.removeClass('dk_open dk_focus');
      });

      setTimeout(function () {
        $select.hide();
      }, 0);

        //Dropkick selectbox fix (Chrome/Safari fix) - Close selectbox when clicking anywhere on page [Updated by: David H.]
        $(document).click(function(){
            $('.dk_open').removeClass('dk_open');

            $('.dk_open').live('click',function(e){
                e.stopPropagation();
            });
        });
        //Dropkick selectbox fix (Chrome/Safari fix) - Close selectbox when clicking on another dk selectbox [Updated by: David H.]
        $('.dk_container').click(function() {
            $('.dk_open').removeClass('dk_open');

            $('.dk_open').live('click',function(e){
                e.stopPropagation();
            });
        });
    });
  };

  // Allows dynamic theme changes
  methods.theme = function (newTheme) {
    var
      $select   = $(this),
      list      = $select.data('dropkick'),
      $dk       = list.$dk,
      oldtheme  = 'dk_theme_' + list.theme
    ;

    $dk.removeClass(oldtheme).addClass('dk_theme_' + newTheme);

    list.theme = newTheme;
  };

  // Reset all <selects and dropdowns in our lists array
  methods.reset = function () {
    for (var i = 0, l = lists.length; i < l; i++) {
      var
        listData  = lists[i].data('dropkick'),
        $dk       = listData.$dk,
        $current  = $dk.find('li').first()
      ;

      $dk.find('.dk_label').text(listData.label);
      $dk.find('.dk_options_inner').animate({ scrollTop: 0 }, 0);

      _setCurrent($current, $dk);
      _updateFields($current, $dk, true);
    }
  };

  // Expose the plugin
  $.fn.dropkick = function (method) {
    if (!ie6) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || ! method) {
        return methods.init.apply(this, arguments);
      }
    }
  };

  // private
  function _handleKeyBoardNav(e, $dk) {
    var
      code     = e.keyCode,
      data     = $dk.data('dropkick'),
      options  = $dk.find('.dk_options'),
      open     = $dk.hasClass('dk_open'),
      current  = $dk.find('.dk_option_current'),
      first    = options.find('li').first(),
      last     = options.find('li').last(),
      next,
      prev
    ;

    switch (code) {
      case keyMap.enter:
        if (open) {
          _updateFields(current.find('a'), $dk);
          _closeDropdown($dk);
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      case keyMap.up:
        prev = current.prev('li');
        if (open) {
          if (prev.length) {
            _setCurrent(prev, $dk);
          } else {
            _setCurrent(last, $dk);
          }
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      case keyMap.down:
        if (open) {
          next = current.next('li').first();
          if (next.length) {
            _setCurrent(next, $dk);
          } else {
            _setCurrent(first, $dk);
          }
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      default:
      break;
    }
  }

  // Update the <select> value, and the dropdown label
  function _updateFields(option, $dk, reset) {
    var value, label, data;

    value = option.attr('data-dk-dropdown-value');
    label = option.text();
    data  = $dk.data('dropkick');

    $select = data.$select;
    $select.val(value);

    $dk.find('.dk_label').text(label);

    reset = reset || false;

    if (data.settings.change && !reset) {
      data.settings.change.call($select, value, label);
    }
  }

  // Set the currently selected option
  function _setCurrent($current, $dk) {
    $dk.find('.dk_option_current').removeClass('dk_option_current');
    $current.addClass('dk_option_current');

    _setScrollPos($dk, $current);
  }

  function _setScrollPos($dk, anchor) {
    var height = anchor.prevAll('li').outerHeight() * anchor.prevAll('li').length;
    $dk.find('.dk_options_inner').animate({ scrollTop: height + 'px' }, 0);
  }

  // Close a dropdown
  function _closeDropdown($dk) {
    $dk.removeClass('dk_open');
  }

  // Open a dropdown
  function _openDropdown($dk) {
    var data = $dk.data('dropkick');
    $dk.find('.dk_options').css({ top : $dk.find('.dk_toggle').outerHeight() - 1 });
    $dk.toggleClass('dk_open');

  }

  /**
   * Turn the dropdownTemplate into a jQuery object and fill in the variables.
   */
  function _build (tpl, view) {
    var
      // Template for the dropdown
      template  = tpl,
      // Holder of the dropdowns options
      options   = [],
      $dk
    ;

    template = template.replace('{{ id }}', view.id);
    template = template.replace('{{ label }}', view.label);
    template = template.replace('{{ tabindex }}', view.tabindex);

    if (view.options && view.options.length) {
      for (var i = 0, l = view.options.length; i < l; i++) {
        var
          $option   = $(view.options[i]),
          current   = 'dk_option_current',
          oTemplate = optionTemplate
        ;

        oTemplate = oTemplate.replace('{{ value }}', $option.val());
        oTemplate = oTemplate.replace('{{ current }}', (_notBlank($option.val()) === view.value) ? current : '');
        oTemplate = oTemplate.replace('{{ text }}', $option.text());

        options[options.length] = oTemplate;
      }
    }

    $dk = $(template);
    $dk.find('.dk_options_inner').html(options.join(''));

    return $dk;
  }

  function _notBlank(text) {
    return ($.trim(text).length > 0) ? text : false;
  }

  $(function () {

    // Handle click events on the dropdown toggler
    $('.dk_toggle').live('click', function (e) {
      var $dk  = $(this).parents('.dk_container').first();

      _openDropdown($dk);

      if ("ontouchstart" in window) {
        $dk.addClass('dk_touch');
        $dk.find('.dk_options_inner').addClass('scrollable vertical');
      }

      e.preventDefault();
      return false;
    });

    // Handle click events on individual dropdown options
    $('.dk_options a').live(($.browser.msie ? 'mousedown' : 'click'), function (e) {
      var
        $option = $(this),
        $dk     = $option.parents('.dk_container').first(),
        data    = $dk.data('dropkick')
      ;
    
      _closeDropdown($dk);
      _updateFields($option, $dk);
      _setCurrent($option.parent(), $dk);
    
      e.preventDefault();
      return false;
    });

    // Setup keyboard nav
    $(document).bind('keydown.dk_nav', function (e) {
      var
        // Look for an open dropdown...
        $open    = $('.dk_container.dk_open'),

        // Look for a focused dropdown
        $focused = $('.dk_container.dk_focus'),

        // Will be either $open, $focused, or null
        $dk = null
      ;

      // If we have an open dropdown, key events should get sent to that one
      if ($open.length) {
        $dk = $open;
      } else if ($focused.length && !$open.length) {
        // But if we have no open dropdowns, use the focused dropdown instead
        $dk = $focused;
      }

      if ($dk) {
        _handleKeyBoardNav(e, $dk);
      }
    });
  });
})(jQuery, window, document);

/*!
 * fancyBox - jQuery Plugin
 * version: 2.0.6 (16/04/2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
  "use strict";

  var W = $(window),
    D = $(document),
    F = $.fancybox = function () {
      F.open.apply( this, arguments );
    },
    didResize = false,
    resizeTimer = null,
    isTouch   = document.createTouch !== undefined,
    isString  = function(str) {
      return $.type(str) === "string";
    },
    isPercentage = function(str) {
      return isString(str) && str.indexOf('%') > 0;
    },
    getValue = function(value, dim) {
      if (dim && isPercentage(value)) {
        value = F.getViewport()[ dim ] / 100 * parseInt(value, 10);
      }

      return Math.round(value) + 'px';
    };

  $.extend(F, {
    // The current version of fancyBox
    version: '2.0.5',

    defaults: {
      padding: 15,
      margin: 20,

      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,

      autoSize: true,
      autoResize: !isTouch,
      autoCenter : !isTouch,
      fitToView: true,
      aspectRatio: false,
      topRatio: 0.5,

      fixed: false,
      scrolling: 'auto', // 'auto', 'yes' or 'no'
      wrapCSS: '',

      arrows: true,
      closeBtn: true,
      closeClick: false,
      nextClick : false,
      mouseWheel: true,
      autoPlay: false,
      playSpeed: 3000,
      preload : 3,

      modal: false,
      loop: true,
      ajax: { dataType: 'html', headers: { 'X-fancyBox': true } },
      keys: {
        next: [13, 32, 34, 39, 40], // enter, space, page down, right arrow, down arrow
        prev: [8, 33, 37, 38], // backspace, page up, left arrow, up arrow
        close: [27] // escape key
      },

      // Override some properties
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,

      // HTML templates
      tpl: {
        wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + ($.browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
        swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
        next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
      },

      // Properties for each animation type
      // Opening fancyBox
      openEffect: 'fade', // 'elastic', 'fade' or 'none'
      openSpeed: 300,
      openEasing: 'swing',
      openOpacity: true,
      openMethod: 'zoomIn',

      // Closing fancyBox
      closeEffect: 'fade', // 'elastic', 'fade' or 'none'
      closeSpeed: 300,
      closeEasing: 'swing',
      closeOpacity: true,
      closeMethod: 'zoomOut',

      // Changing next gallery item
      nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
      nextSpeed: 300,
      nextEasing: 'swing',
      nextMethod: 'changeIn',

      // Changing previous gallery item
      prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
      prevSpeed: 300,
      prevEasing: 'swing',
      prevMethod: 'changeOut',

      // Enabled helpers
      helpers: {
        overlay: {
          speedIn: 0,
          speedOut: 300,
          opacity: 0.8,
          css: {
            cursor: 'pointer'
          },
          closeClick: true
        },
        title: {
          type: 'float' // 'float', 'inside', 'outside' or 'over'
        }
      },

      // Callbacks
      onCancel: $.noop, // If canceling
      beforeLoad: $.noop, // Before loading
      afterLoad: $.noop, // After loading
      beforeShow: $.noop, // Before changing in current item
      afterShow: $.noop, // After opening
      beforeClose: $.noop, // Before closing
      afterClose: $.noop // After closing
    },

    //Current state
    group: {}, // Selected group
    opts: {}, // Group options
    coming: null, // Element being loaded
    current: null, // Currently loaded element
    isOpen: false, // Is currently open
    isOpened: false, // Have been fully opened at least once
    wrap: null,
    skin: null,
    outer: null,
    inner: null,

    player: {
      timer: null,
      isActive: false
    },

    // Loaders
    ajaxLoad: null,
    imgPreload: null,

    // Some collections
    transitions: {},
    helpers: {},

    /*
     *  Static methods
     */

    open: function (group, opts) {
      //Kill existing instances
      F.close(true);

      //Normalize group
      if (group && !$.isArray(group)) {
        group = group instanceof $ ? $(group).get() : [group];
      }

      F.isActive = true;

      //Extend the defaults
      F.opts = $.extend(true, {}, F.defaults, opts);

      //All options are merged recursive except keys
      if ($.isPlainObject(opts) && opts.keys !== undefined) {
        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
      }

      F.group = group;

      F._start(F.opts.index || 0);
    },

    cancel: function () {
      if (F.coming && false === F.trigger('onCancel')) {
        return;
      }

      F.coming = null;

      F.hideLoading();

      if (F.ajaxLoad) {
        F.ajaxLoad.abort();
      }

      F.ajaxLoad = null;

      if (F.imgPreload) {
        F.imgPreload.onload = F.imgPreload.onabort = F.imgPreload.onerror = null;
      }
    },

    close: function (a) {
      F.cancel();

      if (!F.current || false === F.trigger('beforeClose')) {
        return;
      }

      F.unbindEvents();

      //If forced or is still opening then remove immediately
      if (!F.isOpen || (a && a[0] === true)) {
        $('.fancybox-wrap').stop().trigger('onReset').remove();

        F._afterZoomOut();

      } else {
        F.isOpen = F.isOpened = false;

        $('.fancybox-item, .fancybox-nav').remove();

        F.wrap.stop(true).removeClass('fancybox-opened');
        F.inner.css('overflow', 'hidden');

        F.transitions[F.current.closeMethod]();
      }
    },

    // Start/stop slideshow
    play: function (a) {
      var clear = function () {
          clearTimeout(F.player.timer);
        },
        set = function () {
          clear();

          if (F.current && F.player.isActive) {
            F.player.timer = setTimeout(F.next, F.current.playSpeed);
          }
        },
        stop = function () {
          clear();

          $('body').unbind('.player');

          F.player.isActive = false;

          F.trigger('onPlayEnd');
        },
        start = function () {
          if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
            F.player.isActive = true;

            $('body').bind({
              'afterShow.player onUpdate.player': set,
              'onCancel.player beforeClose.player': stop,
              'beforeLoad.player': clear
            });

            set();

            F.trigger('onPlayStart');
          }
        };

      if (F.player.isActive || (a && a[0] === false)) {
        stop();
      } else {
        start();
      }
    },

    next: function () {
      if (F.current) {
        F.jumpto(F.current.index + 1);
      }
    },

    prev: function () {
      if (F.current) {
        F.jumpto(F.current.index - 1);
      }
    },

    jumpto: function (index) {
      if (!F.current) {
        return;
      }

      index = parseInt(index, 10);

      if (F.group.length > 1 && F.current.loop) {
        if (index >= F.group.length) {
          index = 0;

        } else if (index < 0) {
          index = F.group.length - 1;
        }
      }

      if (F.group[index] !== undefined) {
        F.cancel();

        F._start(index);
      }
    },

    reposition: function (e, onlyAbsolute) {
      var pos;

      if (F.isOpen) {
        pos = F._getPosition(onlyAbsolute);

        if (e && e.type === 'scroll') {
          delete pos.position;

          F.wrap.stop(true, true).animate(pos, 200);

        } else {
          F.wrap.css(pos);
        }
      }
    },

    update: function (e) {
      if (!F.isOpen) {
        return;
      }

      // Run this code after a delay for better performance
      if (!didResize) {
        resizeTimer = setTimeout(function () {
          var current = F.current, anyway = !e || (e && e.type === 'orientationchange');

          if (didResize) {
            didResize = false;

            if (!current) {
              return;
            }

            if ((!e || e.type !== 'scroll') || anyway) {
              if (current.autoSize && current.type !== 'iframe') {
                F.inner.height('auto');
                current.height = F.inner.height();
              }

              if (current.autoResize || anyway) {
                F._setDimension();
              }

              if (current.canGrow && current.type !== 'iframe') {
                F.inner.height('auto');
              }
            }

            if (current.autoCenter || anyway) {
              F.reposition(e);
            }

            F.trigger('onUpdate');
          }
        }, 200);
      }

      didResize = true;
    },

    toggle: function () {
      if (F.isOpen) {
        F.current.fitToView = !F.current.fitToView;

        F.update();
      }
    },

    hideLoading: function () {
      D.unbind('keypress.fb');

      $('#fancybox-loading').remove();
    },

    showLoading: function () {
      F.hideLoading();

      //If user will press the escape-button, the request will be canceled
      D.bind('keypress.fb', function(e) {
        if (e.keyCode === 27) {
          e.preventDefault();
          F.cancel();
        }
      });

      $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
    },

    getViewport: function () {
      // See http://bugs.jquery.com/ticket/6724
      return {
        x: W.scrollLeft(),
        y: W.scrollTop(),
        w: isTouch && window.innerWidth ? window.innerWidth : W.width(),
        h: isTouch && window.innerHeight ? window.innerHeight : W.height()
      };
    },

    // Unbind the keyboard / clicking actions
    unbindEvents: function () {
      if (F.wrap) {
        F.wrap.unbind('.fb');
      }

      D.unbind('.fb');
      W.unbind('.fb');
    },

    bindEvents: function () {
      var current = F.current,
        keys = current.keys;

      if (!current) {
        return;
      }

      W.bind('resize.fb orientationchange.fb' + (current.autoCenter && !current.fixed ? ' scroll.fb' : ''), F.update);

      if (keys) {
        D.bind('keydown.fb', function (e) {
          var code, target = e.target || e.srcElement;

          // Ignore key combinations and key events within form elements
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
            code = e.keyCode;

            if ($.inArray(code, keys.close) > -1) {
              F.close();
              e.preventDefault();

            } else if ($.inArray(code, keys.next) > -1) {
              F.next();
              e.preventDefault();

            } else if ($.inArray(code, keys.prev) > -1) {
              F.prev();
              e.preventDefault();
            }
          }
        });
      }

      if ($.fn.mousewheel && current.mouseWheel && F.group.length > 1) {
        F.wrap.bind('mousewheel.fb', function (e, delta) {
          var target = e.target || null;

          if (delta !== 0 && (!target || target.clientHeight === 0 || (target.scrollHeight === target.clientHeight && target.scrollWidth === target.clientWidth))) {
            e.preventDefault();

            F[delta > 0 ? 'prev' : 'next']();
          }
        });
      }
    },

    trigger: function (event, o) {
      var ret, obj = o || F[ $.inArray(event, ['onCancel', 'beforeLoad', 'afterLoad']) > -1 ? 'coming' : 'current' ];

      if (!obj) {
        return;
      }

      if ($.isFunction( obj[event] )) {
        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
      }

      if (ret === false) {
        return false;
      }

      if (obj.helpers) {
        $.each(obj.helpers, function (helper, opts) {
          if (opts && $.isPlainObject(F.helpers[helper]) && $.isFunction(F.helpers[helper][event])) {
            F.helpers[helper][event](opts, obj);
          }
        });
      }

      $.event.trigger(event + '.fb');
    },

    isImage: function (str) {
      return isString(str) && str.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i);
    },

    isSWF: function (str) {
      return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
    },

    _start: function (index) {
      var coming = {},
        element = F.group[index] || null,
        isDom,
        href,
        type,
        rez,
        hrefParts;

      if (element && (element.nodeType || element instanceof $)) {
        isDom = true;

        if ($.metadata) {
          coming = $(element).metadata();
        }
      }

      coming = $.extend(true, {}, F.opts, {index : index, element : element}, ($.isPlainObject(element) ? element : coming));

      // Re-check overridable options
      $.each(['href', 'title', 'content', 'type'], function(i,v) {
        coming[v] = F.opts[ v ] || (isDom && $(element).attr( v )) || coming[ v ] || null;
      });

      // Convert margin property to array - top, right, bottom, left
      if (typeof coming.margin === 'number') {
        coming.margin = [coming.margin, coming.margin, coming.margin, coming.margin];
      }

      // 'modal' propery is just a shortcut
      if (coming.modal) {
        $.extend(true, coming, {
          closeBtn : false,
          closeClick: false,
          nextClick : false,
          arrows : false,
          mouseWheel : false,
          keys : null,
          helpers: {
            overlay : {
              css: {
                cursor : 'auto'
              },
              closeClick : false
            }
          }
        });
      }

      //Give a chance for callback or helpers to update coming item (type, title, etc)
      F.coming = coming;

      if (false === F.trigger('beforeLoad')) {
        F.coming = null;
        return;
      }

      type = coming.type;
      href = coming.href || element;

      ///Check if content type is set, if not, try to get
      if (!type) {
        if (isDom) {
          type = $(element).data('fancybox-type');

          if (!type) {
            rez = element.className.match(/fancybox\.(\w+)/);
            type = rez ? rez[1] : null;
          }
        }

        if (!type && isString(href)) {
          if (F.isImage(href)) {
            type = 'image';

          } else if (F.isSWF(href)) {
            type = 'swf';

          } else if (href.match(/^#/)) {
            type = 'inline';
          }
        }

        // ...if not - display element itself
        if (!type) {
          type = isDom ? 'inline' : 'html';
        }

        coming.type = type;
      }

      // Check before try to load; 'inline' and 'html' types need content, others - href
      if (type === 'inline' || type === 'html') {
        if (!coming.content) {
          if (type === 'inline') {
            coming.content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

          } else {
            coming.content = element;
          }
        }

        if (!coming.content || !coming.content.length) {
          type = null;
        }

      } else if (!href) {
        type = null;
      }

      /*
       * Add reference to the group, so it`s possible to access from callbacks, example:
       * afterLoad : function() {
       *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
       * }
       */

      if (type === 'ajax' && isString(href)) {
        hrefParts = href.split(/\s+/, 2);

        href = hrefParts.shift();
        coming.selector = hrefParts.shift();
      }

      coming.href  = href;
      coming.group = F.group;
      coming.isDom = isDom;

      switch (type) {
        case 'image':
          F._loadImage();
          break;

        case 'ajax':
          F._loadAjax();
          break;

        case 'inline':
        case 'iframe':
        case 'swf':
        case 'html':
          F._afterLoad();
          break;

        default:
          F._error( 'type' );
      }
    },

    _error: function ( type ) {
      F.hideLoading();

      $.extend(F.coming, {
        type      : 'html',
        autoSize  : true,
        minWidth  : 0,
        minHeight : 0,
        padding   : 15,
        hasError  : type,
        content   : F.coming.tpl.error
      });

      F._afterLoad();
    },

    _loadImage: function () {
      // Reset preload image so it is later possible to check "complete" property
      var img = F.imgPreload = new Image();

      img.onload = function () {
        this.onload = this.onerror = null;

        F.coming.width  = this.width;
        F.coming.height = this.height;

        F._afterLoad();
      };

      img.onerror = function () {
        this.onload = this.onerror = null;

        F._error( 'image' );
      };

      img.src = F.coming.href;

      if (img.complete === undefined || !img.complete) {
        F.showLoading();
      }
    },

    _loadAjax: function () {
      F.showLoading();

      F.ajaxLoad = $.ajax($.extend({}, F.coming.ajax, {
        url: F.coming.href,
        error: function (jqXHR, textStatus) {
          if (F.coming && textStatus !== 'abort') {
            F._error( 'ajax', jqXHR );

          } else {
            F.hideLoading();
          }
        },
        success: function (data, textStatus) {
          if (textStatus === 'success') {
            F.coming.content = data;

            F._afterLoad();
          }
        }
      }));
    },

    _preloadImages: function() {
      var group = F.group,
        current = F.current,
        len = group.length,
        item,
        href,
        i,
        cnt = Math.min(current.preload, len - 1);

      if (!current.preload || group.length < 2) {
        return;
      }

      for (i = 1; i <= cnt; i += 1) {
        item = group[ (current.index + i ) % len ];
        href = item.href || $( item ).attr('href') || item;

        if (item.type === 'image' || F.isImage(href)) {
          new Image().src = href;
        }
      }
    },

    _afterLoad: function () {
      F.hideLoading();

      if (!F.coming || false === F.trigger('afterLoad', F.current)) {
        F.coming = false;

        return;
      }

      if (F.isOpened) {
        $('.fancybox-item, .fancybox-nav').remove();

        F.wrap.stop(true).removeClass('fancybox-opened');
        F.inner.css('overflow', 'hidden');

        F.transitions[F.current.prevMethod]();

      } else {
        $('.fancybox-wrap').stop().trigger('onReset').remove();

        F.trigger('afterClose');
      }

      F.unbindEvents();

      F.isOpen    = false;
      F.current   = F.coming;

      //Build the neccessary markup
      F.wrap  = $(F.current.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + F.current.type + ' fancybox-tmp ' + F.current.wrapCSS).appendTo('body');
      F.skin  = $('.fancybox-skin', F.wrap).css('padding', getValue(F.current.padding));
      F.outer = $('.fancybox-outer', F.wrap);
      F.inner = $('.fancybox-inner', F.wrap);

      F._setContent();
    },

    _setContent: function () {
      var current = F.current,
        content = current.content,
        type    = current.type,
        minWidth    = current.minWidth,
        minHeight   = current.minHeight,
        maxWidth    = current.maxWidth,
        maxHeight   = current.maxHeight,
        loadingBay;

      switch (type) {
        case 'inline':
        case 'ajax':
        case 'html':
          if (current.selector) {
            content = $('<div>').html(content).find(current.selector);

          } else if (content instanceof $) {
            if (content.parent().hasClass('fancybox-inner')) {
              content.parents('.fancybox-wrap').unbind('onReset');
            }

            content = content.show().detach();

            $(F.wrap).bind('onReset', function () {
              content.appendTo('body').hide();
            });
          }

          if (current.autoSize) {
            loadingBay = $('<div class="fancybox-wrap ' + F.current.wrapCSS + ' fancybox-tmp"></div>')
              .appendTo('body')
              .css({
                minWidth    : getValue(minWidth, 'w'),
                minHeight   : getValue(minHeight, 'h'),
                maxWidth    : getValue(maxWidth, 'w'),
                maxHeight   : getValue(maxHeight, 'h')
              })
              .append(content);

            current.width = loadingBay.width();
            current.height = loadingBay.height();

            // Re-check to fix 1px bug in some browsers
            loadingBay.width( F.current.width );

            if (loadingBay.height() > current.height) {
              loadingBay.width(current.width + 1);

              current.width = loadingBay.width();
              current.height = loadingBay.height();
            }

            content = loadingBay.contents().detach();

            loadingBay.remove();
          }

          break;

        case 'image':
          content = current.tpl.image.replace('{href}', current.href);

          current.aspectRatio = true;
          break;

        case 'swf':
          content = current.tpl.swf.replace(/\{width\}/g, current.width).replace(/\{height\}/g, current.height).replace(/\{href\}/g, current.href);
          break;

        case 'iframe':
          content = $(current.tpl.iframe.replace('{rnd}', new Date().getTime()) )
            .attr('scrolling', current.scrolling)
            .attr('src', current.href);

          current.scrolling = isTouch ? 'scroll' : 'auto';

          break;
      }

      if (type === 'image' || type === 'swf') {
        current.autoSize = false;
        current.scrolling = 'visible';
      }

      if (type === 'iframe' && current.autoSize) {
        F.showLoading();

        F._setDimension();

        F.inner.css('overflow', current.scrolling);

        content.bind({
          onCancel : function() {
            $(this).unbind();

            F._afterZoomOut();
          },
          load : function() {
            F.hideLoading();

            try {
              if (this.contentWindow.document.location) {
                F.current.height = $(this).contents().find('body').height();
              }
            } catch (e) {
              F.current.autoSize = false;
            }

            F[ F.isOpen ? '_afterZoomIn' : '_beforeShow']();
          }
        }).appendTo(F.inner);

      } else {
        F.inner.append(content);

        F._beforeShow();
      }
    },

    _beforeShow : function() {
      F.coming = null;

      //Give a chance for helpers or callbacks to update elements
      F.trigger('beforeShow');

      //Set initial dimensions and hide
      F._setDimension();
      F.wrap.hide().removeClass('fancybox-tmp');

      F.bindEvents();

      F._preloadImages();

      F.transitions[ F.isOpened ? F.current.nextMethod : F.current.openMethod ]();
    },

    _setDimension: function () {
      var wrap      = F.wrap,
        inner     = F.inner,
        current   = F.current,
        viewport  = F.getViewport(),
        margin    = current.margin,
        padding2  = current.padding * 2,
        width     = current.width,
        height    = current.height,
        maxWidth  = current.maxWidth + padding2,
        maxHeight = current.maxHeight + padding2,
        minWidth  = current.minWidth + padding2,
        minHeight = current.minHeight + padding2,
        ratio,
        height_;

      viewport.w -= (margin[1] + margin[3]);
      viewport.h -= (margin[0] + margin[2]);

      if (isPercentage(width)) {
        width = (((viewport.w - padding2) * parseFloat(width)) / 100);
      }

      if (isPercentage(height)) {
        height = (((viewport.h - padding2) * parseFloat(height)) / 100);
      }

      ratio  = width / height;
      width  += padding2;
      height += padding2;

      if (current.fitToView) {
        maxWidth  = Math.min(viewport.w, maxWidth);
        maxHeight = Math.min(viewport.h, maxHeight);
      }

      if (current.aspectRatio) {
        if (width > maxWidth) {
          width = maxWidth;
          height = ((width - padding2) / ratio) + padding2;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = ((height - padding2) * ratio) + padding2;
        }

        if (width < minWidth) {
          width = minWidth;
          height = ((width - padding2) / ratio) + padding2;
        }

        if (height < minHeight) {
          height = minHeight;
          width = ((height - padding2) * ratio) + padding2;
        }

      } else {
        width = Math.max(minWidth, Math.min(width, maxWidth));
        height = Math.max(minHeight, Math.min(height, maxHeight));
      }

      width = Math.round(width);
      height = Math.round(height);

      //Reset dimensions
      $(wrap.add(inner)).width('auto').height('auto');

      inner.width(width - padding2).height(height - padding2);
      wrap.width(width);

      height_ = wrap.height(); // Real wrap height

      //Fit wrapper inside
      if (width > maxWidth || height_ > maxHeight) {
        while ((width > maxWidth || height_ > maxHeight) && width > minWidth && height_ > minHeight) {
          height = height - 10;

          if (current.aspectRatio) {
            width = Math.round(((height - padding2) * ratio) + padding2);

            if (width < minWidth) {
              width = minWidth;
              height = ((width - padding2) / ratio) + padding2;
            }

          } else {
            width = width - 10;
          }

          inner.width(width - padding2).height(height - padding2);
          wrap.width(width);

          height_ = wrap.height();
        }
      }

      current.dim = {
        width : getValue(width),
        height  : getValue(height_)
      };

      current.canGrow   = current.autoSize && height > minHeight && height < maxHeight;
      current.canShrink = false;
      current.canExpand = false;

      if ((width - padding2) < current.width || (height - padding2) < current.height) {
        current.canExpand = true;

      } else if ((width > viewport.w || height_ > viewport.h) && width > minWidth && height > minHeight) {
        current.canShrink = true;
      }

      F.innerSpace = height_ - padding2 - inner.height();
    },

    _getPosition: function (onlyAbsolute) {
      var current   = F.current,
        viewport    = F.getViewport(),
        margin      = current.margin,
        width       = F.wrap.width() + margin[1] + margin[3],
        height      = F.wrap.height() + margin[0] + margin[2], 
        rez         = {
          position: 'absolute',
          top  : margin[0] + viewport.y,
          left : margin[3] + viewport.x
        };

      if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
        rez = {
          position: 'fixed',
          top  : margin[0],
          left : margin[3]
        };
      }

      rez.top     = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
      //PATCH: [David Huang] To fix centering issue for bigger width resolutions
      if (viewport.w < 1500) {
        rez.left    = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * 0.5)));
      } else {
        rez.left    = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * 0.4)));
      }
      
      return rez;
    },

    _afterZoomIn: function () {
      var current = F.current, scrolling = current ? current.scrolling : 'no';

      if (!current) {
        return;
      }

      F.isOpen = F.isOpened = true;

      F.wrap.addClass('fancybox-opened');

      F.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

      F.trigger('afterShow');

      F.update();

      //Assign a click event
      if (current.closeClick || current.nextClick) {
        F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
          if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
            F[ current.closeClick ? 'close' : 'next' ]();
          }
        });
      }

      //Create a close button
      if (current.closeBtn) {
        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', F.close);
      }

      //Create navigation arrows
      if (current.arrows && F.group.length > 1) {
        if (current.loop || current.index > 0) {
          $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
        }

        if (current.loop || current.index < F.group.length - 1) {
          $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
        }
      }

      if (F.opts.autoPlay && !F.player.isActive) {
        F.opts.autoPlay = false;

        F.play();
      }
    },

    _afterZoomOut: function () {
      var current = F.current;

      F.wrap.trigger('onReset').remove();

      $.extend(F, {
        group: {},
        opts: {},
        current: null,
        isActive: false,
        isOpened: false,
        isOpen: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });

      F.trigger('afterClose', current);
    }
  });

  /*
   *  Default transitions
   */

  F.transitions = {
    getOrigPosition: function () {
      var current = F.current,
        element = current.element,
        padding = current.padding,
        orig    = $(current.orig),
        pos     = {},
        width   = 50,
        height  = 50,
        viewport;

      if (!orig.length && current.isDom && $(element).is(':visible')) {
        orig = $(element).find('img:first');

        if (!orig.length) {
          orig = $(element);
        }
      }

      if (orig.length) {
        pos = orig.offset();

        if (orig.is('img')) {
          width = orig.outerWidth();
          height = orig.outerHeight();
        }

      } else {
        viewport = F.getViewport();

        pos.top  = viewport.y + (viewport.h - height) * 0.5;
        pos.left = viewport.x + (viewport.w - width) * 0.5;
      }

      pos = {
        top     : getValue(pos.top - padding),
        left    : getValue(pos.left - padding),
        width   : getValue(width + padding * 2),
        height  : getValue(height + padding * 2)
      };

      return pos;
    },

    step: function (now, fx) {
      var prop = fx.prop, value, ratio;

      if (prop === 'width' || prop === 'height') {
        value = Math.ceil(now - (F.current.padding * 2));

        if (prop === 'height') {
          ratio = (now - fx.start) / (fx.end - fx.start);

          if (fx.start > fx.end) {
            ratio = 1 - ratio;
          }

          value -= F.innerSpace * ratio;
        }

        F.inner[prop](value);
      }
    },

    zoomIn: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.openEffect,
        elastic  = effect === 'elastic',
        dim      = current.dim,
        startPos = $.extend({}, dim, F._getPosition( elastic )),
        endPos   = $.extend({opacity : 1}, startPos);

      //Remove "position" property that breaks older IE
      delete endPos.position;

      if (elastic) {
        startPos = this.getOrigPosition();

        if (current.openOpacity) {
          startPos.opacity = 0;
        }

        F.outer.add(F.inner).width('auto').height('auto');

      } else if (effect === 'fade') {
        startPos.opacity = 0;
      }

      wrap.css(startPos)
        .show()
        .animate(endPos, {
          duration : effect === 'none' ? 0 : current.openSpeed,
          easing   : current.openEasing,
          step     : elastic ? this.step : null,
          complete : F._afterZoomIn
        });
    },

    zoomOut: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.openEffect,
        elastic  = effect === 'elastic',
        endPos   = {opacity : 0};

      if (elastic) {
        if (wrap.css('position') === 'fixed') {
          wrap.css(F._getPosition(true));
        }

        endPos = this.getOrigPosition();

        if (current.closeOpacity) {
          endPos.opacity = 0;
        }
      }

      wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : current.closeSpeed,
        easing   : current.closeEasing,
        step     : elastic ? this.step : null,
        complete : F._afterZoomOut
      });
    },

    changeIn: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.nextEffect,
        elastic  = effect === 'elastic',
        startPos = F._getPosition( elastic ),
        endPos   = { opacity : 1 };

      startPos.opacity = 0;

      if (elastic) {
        startPos.top = getValue(parseInt(startPos.top, 10) - 200);
        endPos.top = '+=200px';
      }

      wrap.css(startPos)
        .show()
        .animate(endPos, {
          duration : effect === 'none' ? 0 : current.nextSpeed,
          easing   : current.nextEasing,
          complete : F._afterZoomIn
        });
    },

    changeOut: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.prevEffect,
        endPos   = { opacity : 0 },
        cleanUp  = function () {
          $(this).trigger('onReset').remove();
        };

      wrap.removeClass('fancybox-opened');

      if (effect === 'elastic') {
        endPos.top = '+=200px';
      }

      wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : current.prevSpeed,
        easing   : current.prevEasing,
        complete : cleanUp
      });
    }
  };

  /*
   *  Overlay helper
   */

  F.helpers.overlay = {
    overlay: null,

    update: function () {
      var width, scrollWidth, offsetWidth;

      //Reset width/height so it will not mess
      this.overlay.width('100%').height('100%');

      if ($.browser.msie || isTouch) {
        scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

        width = scrollWidth < offsetWidth ? W.width() : scrollWidth;

      } else {
        width = D.width();
      }

      this.overlay.width(width).height(D.height());
    },

    beforeShow: function (opts) {
      if (this.overlay) {
        return;
      }

      opts = $.extend(true, {}, F.defaults.helpers.overlay, opts);

      this.overlay = $('<div id="fancybox-overlay"></div>').css(opts.css).appendTo('body');

      if (opts.closeClick) {
        this.overlay.bind('click.fb', F.close);
      }

      if (F.current.fixed && !isTouch) {
        this.overlay.addClass('overlay-fixed');

      } else {
        this.update();

        this.onUpdate = function () {
          this.update();
        };
      }

      this.overlay.fadeTo(opts.speedIn, opts.opacity);
    },

    afterClose: function (opts) {
      if (this.overlay) {
        this.overlay.fadeOut(opts.speedOut || 0, function () {
          $(this).remove();
        });
      }

      this.overlay = null;
    }
  };

  /*
   *  Title helper
   */

  F.helpers.title = {
    beforeShow: function (opts) {
      var title, text = F.current.title;

      if (text) {
        title = $('<div class="fancybox-title fancybox-title-' + opts.type + '-wrap">' + text + '</div>').appendTo('body');

        if (opts.type === 'float') {
          //This helps for some browsers
          title.width(title.width());

          title.wrapInner('<span class="child"></span>');

          //Increase bottom margin so this title will also fit into viewport
          F.current.margin[2] += Math.abs(parseInt(title.css('margin-bottom'), 10));
        }

        title.appendTo(opts.type === 'over' ? F.inner : (opts.type === 'outside' ? F.wrap : F.skin));
      }
    }
  };

  // jQuery plugin initialization
  $.fn.fancybox = function (options) {
    var that     = $(this),
      selector = this.selector || '',
      index,
      run      = function(e) {
        var what = this, idx = index, relType, relVal;

        if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !$(what).is('.fancybox-wrap')) {
          e.preventDefault();

          relType = options.groupAttr || 'data-fancybox-group';
          relVal  = $(what).attr(relType);

          if (!relVal) {
            relType = 'rel';
            relVal  = what[ relType ];
          }

          if (relVal && relVal !== '' && relVal !== 'nofollow') {
            what = selector.length ? $(selector) : that;
            what = what.filter('[' + relType + '="' + relVal + '"]');
            idx  = what.index(this);
          }

          options.index = idx;

          F.open(what, options);
        }
      };

    options = options || {};
    index   = options.index || 0;

    if (selector) {
      D.undelegate(selector, 'click.fb-start').delegate(selector, 'click.fb-start', run);

    } else {
      that.unbind('click.fb-start').bind('click.fb-start', run);
    }

    return this;
  };

  // Test for fixedPosition needs a body at doc ready
  $(document).ready(function() {
    F.defaults.fixed = $.support.fixedPosition || (!($.browser.msie && $.browser.version <= 6) && !isTouch);
  });

}(window, document, jQuery));





/* jQuery selector extend - Viewport
 * URL: http://www.appelsiini.net/projects/viewport
 * Examples:
 *   $(":in-viewport")
 *   $(":below-the-fold")
 *   $(":above-the-top")
 *   $(":left-of-screen")
 *   $(":right-of-screen")
********************************************/
/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
(function($) {

    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };

    $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };

    $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };

    $.inviewport = function(element, settings) {
        var $element = $(element);
        var offset = $element.offset();

        var $window = $(window);
        var windowTop = $window.scrollTop();
        var threshold = settings.threshold - 150; //Update[David] : Adjusted threshold to accommodate elements without h1/h2 for the elevator plugin]

        if (offset.top - threshold < windowTop) {
            if (offset.top + $element.height() + threshold >= windowTop) {
                // top edge below the window's top
            } else {
                return false;
            }
        } else {
            if (offset.top - threshold <= windowTop + $window.height()) {
                // bottom edge above the window's bottom
            } else {
                return false;
            }
        }

        var windowLeft = $window.scrollLeft();

        if (offset.left - threshold < windowLeft) {
            if (offset.left + $element.width() + threshold >= windowLeft) {
                // left edge be on the left side of the window's left edge
            } else {
                return false;
            }
        } else {
            if (offset.left - threshold <= windowLeft + $window.width()) {
                // right edge be on the right side of the window's right edge
            } else {
                return false;
            }
        }

        return true;
    };

    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {threshold : 0});
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {threshold : 0});
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {threshold : 0});
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {threshold : 0});
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {threshold : 0});
        }
    });


})(jQuery);




/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

  var isInputSupported = 'placeholder' in document.createElement('input'),
      isTextareaSupported = 'placeholder' in document.createElement('textarea'),
      prototype = $.fn,
      valHooks = $.valHooks,
      hooks,
      placeholder;

  if (isInputSupported && isTextareaSupported) {

    placeholder = prototype.placeholder = function() {
      return this;
    };

    placeholder.input = placeholder.textarea = true;

  } else {

    placeholder = prototype.placeholder = function() {
      var $this = this;
      $this
        .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
        .not('.placeholder')
        .bind({
          'focus.placeholder': clearPlaceholder,
          'blur.placeholder': setPlaceholder
        })
        .data('placeholder-enabled', true)
        .trigger('blur.placeholder');
      return $this;
    };

    placeholder.input = isInputSupported;
    placeholder.textarea = isTextareaSupported;

    hooks = {
      'get': function(element) {
        var $element = $(element);
        return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
      },
      'set': function(element, value) {
        var $element = $(element);
        if (!$element.data('placeholder-enabled')) {
          return element.value = value;
        }
        if (value == '') {
          element.value = value;
          // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
          if (element != document.activeElement) {
            // We can’t use `triggerHandler` here because of dummy text/password inputs :(
            setPlaceholder.call(element);
          }
        } else if ($element.hasClass('placeholder')) {
          clearPlaceholder.call(element, true, value) || (element.value = value);
        } else {
          element.value = value;
        }
        // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
        return $element;
      }
    };

    isInputSupported || (valHooks.input = hooks);
    isTextareaSupported || (valHooks.textarea = hooks);

    $(function() {
      // Look for forms
      $(document).delegate('form', 'submit.placeholder', function() {
        // Clear the placeholder values so they don’t get submitted
        var $inputs = $('.placeholder', this).each(clearPlaceholder);
        setTimeout(function() {
          $inputs.each(setPlaceholder);
        }, 10);
      });
    });

    // Clear placeholder values upon page reload
    $(window).bind('beforeunload.placeholder', function() {
      $('.placeholder').each(function() {
        this.value = '';
      });
    });

  }

  function args(elem) {
    // Return an object of element attributes
    var newAttrs = {},
        rinlinejQuery = /^jQuery\d+$/;
    $.each(elem.attributes, function(i, attr) {
      if (attr.specified && !rinlinejQuery.test(attr.name)) {
        newAttrs[attr.name] = attr.value;
      }
    });
    return newAttrs;
  }

  function clearPlaceholder(event, value) {
    var input = this,
        $input = $(input);
    if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
      if ($input.data('placeholder-password')) {
        $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
        // If `clearPlaceholder` was called from `$.valHooks.input.set`
        if (event === true) {
          return $input[0].value = value;
        }
        $input.focus();
      } else {
        input.value = '';
        $input.removeClass('placeholder');
        input == document.activeElement && input.select();
      }
    }
  }

  function setPlaceholder() {
    var $replacement,
        input = this,
        $input = $(input),
        $origInput = $input,
        id = this.id;
    if (input.value == '') {
      if (input.type == 'password') {
        if (!$input.data('placeholder-textinput')) {
          try {
            $replacement = $input.clone().attr({ 'type': 'text' });
          } catch(e) {
            $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
          }
          $replacement
            .removeAttr('name')
            .data({
              'placeholder-password': true,
              'placeholder-id': id
            })
            .bind('focus.placeholder', clearPlaceholder);
          $input
            .data({
              'placeholder-textinput': $replacement,
              'placeholder-id': id
            })
            .before($replacement);
        }
        $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
        // Note: `$input[0] != input` now!
      }
      $input.addClass('placeholder');
      $input[0].value = $input.attr('placeholder');
    } else {
      $input.removeClass('placeholder');
    }
  }

}(this, document, jQuery));


/* Rotating text plugin
   Developed by: Blast Radius Dev Team
   Last Updated: 05/24/2012
   Custom settings: timeout,tag, callbackHandle
*/
(function ($) {   
    $.fn.customGallery = function (options) {
        defaults = {
            timeout : 15000,
            tag: 'li',
            callbackHandle: null
        };
        options = $.extend(defaults, options);
        return this.each(function () {
            var idx = 0, number = $(this).children(options.tag).size(), element = this, timer;
            timer = window.setInterval(function () {
                idx = (idx + 1) % number;
                $(element).children(options.tag+':visible')
                  .fadeOut();
                $(element).children(options.tag+':eq(' + idx + ')')
                  .delay('1000')
                  .fadeIn(function () {
                    $(this).siblings().removeClass('gallery-current');
                    $(this).addClass('gallery-current');
                    $(element).data('current-image-index', idx);
                  });
            },options.timeout);

            $(element).children(options.tag).hide();
            $(element).children(options.tag+':first').delay('1000').fadeIn();
            $(element).data('current-image-index', 0);
        });
    };
}(jQuery));



/* Rotating product image plugin
   Developed by: Blast Radius Dev Team
   Last Updated: 04/26/2012
   Custom settings: timeout
*/

// Minified version | last minified 07/19/2012
// (function($){$.fn.productHover=function(options){var defaults={timeout:2000};var settings=$.extend(defaults,options);return this.each(function(){var idx=0,$element=$(this),number=$element.children().length,timerLabel,elementDataAttr=$element.closest('li[data-product-id]').attr('data-product-id')||'';if(typeof subCategoryOBJ==undefined||typeof subCategoryOBJ=='undefined'){var subCategoryOBJ={};subCategoryOBJ["_productIds"]=elementDataAttr}$element.css('position','relative');var hoverImageArr=subCategoryOBJ._productIds[elementDataAttr]||'';if(!global["ismobile"]&&!global["istablet"]){$element.live('hover',function(evt){if(evt.type=='mouseenter'){if($element.children().size()<=1){for(var i=0;i<hoverImageArr.length;i++){$element.append('<img src="'+subCategoryOBJ._productIds[elementDataAttr][i]+'" />')}number=$element.children().length}if($element.children().size()>1){window.timerLabel1=setTimeout(function(){idx_prev=idx;idx=(idx+1)%number;$element.children().not($element.children()[idx_prev]).hide();$($element.children()[idx_prev]).css({'position':'absolute','top':0,'left':0}).fadeOut(1000);$($element.children()[idx]).fadeIn(1000,function(){$($element.children()[idx_prev]).css('position','relative')});window.timerLabel2=window.setInterval(function(){idx_prev=idx;idx=(idx+1)%number;$element.children().not($element.children()[idx_prev]).hide();$($element.children()[idx_prev]).css({'position':'absolute','top':0,'left':0}).fadeOut(1000);$($element.children()[idx]).fadeIn(1000,function(){$($element.children()[idx_prev]).css('position','relative')})},settings.timeout)},1000)}}else if(evt.type=='mouseleave'){if($element.children().size()>1){window.clearInterval(window.timerLabel1);window.clearInterval(window.timerLabel2);$element.children().hide();$element.children().css('position','relative');$element.children().stop(true,true);$element.children('img:first-child').show();idx=0}}})}})}})(jQuery);

(function( $ ) {
  $.fn.productHover = function( options ) {
    var defaults = {
      timeout : 3000
    };

    var settings = $.extend( defaults, options );

    return this.each(function( ) {

      var idx = 0, $element = $(this), number = $element.children().length, timerLabel, elementDataAttr = $element.closest('li[data-product-id]').attr('data-product-id') || '';
      
      //fallback in case subCategoryOBJ isnt present
      if(typeof subCategoryOBJ == undefined || typeof subCategoryOBJ == 'undefined'){
        //created blank object
        var subCategoryOBJ = {};
        //fill _productIds with the data attribute from markup
        subCategoryOBJ["_productIds"] = elementDataAttr;
      }

      $element.css('position', 'relative');

      var hoverImageArr = subCategoryOBJ._productIds[elementDataAttr] || '';

      //Don't enable hover state for mobile/tablets
      if (!global["ismobile"] && !global["istablet"]) {

        $element.live('hover', function(evt) {

          if(evt.type == 'mouseenter') {
            //mouseover

            if($element.children().size() <= 1){ 

              for(var i = 0; i < hoverImageArr.length; i++) {

                $element.append('<img src="'+subCategoryOBJ._productIds[elementDataAttr][i]+'" />');

              }

              number = $element.children().length;

            }

            if($element.children().size() > 1){

                window.timerLabel1 = setTimeout(function() {
                    idx_prev = idx;
                idx = (idx + 1) % number;

                    $element.children().not($element.children()[idx_prev]).hide();
                    $($element.children()[idx_prev]).css({
                        'position':'absolute',
                        'top':0,
                        'left':0
                    }).fadeOut(1000);               

                    $($element.children()[idx]).fadeIn(1000, function() {
                        $($element.children()[idx_prev]).css('position','relative');
                    });

                    window.timerLabel2 = window.setInterval(function( ) {
                    
                    idx_prev = idx;
                    idx = (idx + 1) % number;

                    $element.children().not($element.children()[idx_prev]).hide();
                    $($element.children()[idx_prev]).css({
                        'position':'absolute',
                        'top':0,
                        'left':0
                    }).fadeOut(1000);               

                    $($element.children()[idx]).fadeIn(1000, function() {
                        $($element.children()[idx_prev]).css('position','relative');
                    });

              }, settings.timeout);
                }, 1000);
              

            }

          } else if(evt.type == 'mouseleave') {
            //mouseout

            if($element.children().size() > 1){

              window.clearInterval(window.timerLabel1);
              window.clearInterval(window.timerLabel2);
              $element.children().hide();
              $element.children().css('position','relative');
              $element.children().stop(true,true);
              $element.children('img:first-child').show();

              idx = 0;
            }

          }

        });
      }

    });
  };
})( jQuery );



/* Elevator navigation plugin
   Developed by: Blast Radius Dev Team
   Last Updated: 05/30/2012
*/

// Minified version | last minified 05/30/2012
// (function(a){a.fn.pageScroller=function(b){var c={windowPositionThreshold:0};var d=a.extend(c,b);return this.each(function(){function k(){if(c.attr("data-elevator-boundary")){var e=a(window).scrollTop(),f=e+d.windowPositionThreshold;if(f<a(b[0]).position().top){a("body").removeClass("top scrolling bottom").addClass("top");a(".top .elevator-control").css({top:a(b[0]).position().top})}else if(f>a(b[b.length-1]).position().top){a("body").removeClass("top scrolling bottom").addClass("bottom");a(".bottom .elevator-control").css({top:a(b[b.length-1]).position().top})}else{a("body").removeClass("top scrolling bottom").addClass("scrolling");a(".elevator-control").css("top","")}}}var b=a("[data-floor]"),c=a(this),e=c.attr("data-elevator-title"),f=a('<ol id="elevator" class="elevator-control"></ol>');k();if(b.length>1){if(!c.attr("data-elevator-title")){}else{f.append('<li id="elevator-title"><p>'+e+"</p></li>")}for(var g=0;g<b.length;g++){var h=b[g].id!=""?b[g].id:"floor-"+(g+1);if(!b[g].getAttribute("id")){a(b[g]).attr("id",h.toString())}if(g===0){var i=a('<li class="active"></li>')}else{var i=a("<li></li>")}var j=a('<a href=""></a>');j.attr("href","#"+h);j.append(b[g].getAttribute("data-floor"));i.append(j);f.append(i)}a("body").append(f);a("#elevator a").live("click",function(b){var d=this.hash.substr(1);if(!c.attr("data-elevator-title")){var e=a('[data-elevator="enable"] article[id='+d+"]")}else{var e=a('[data-elevator="enable"] section[id='+d+"]")}var f=e.position().top;a("body,html").stop(true,true).animate({scrollTop:f},800,"swing",function(){window.location.hash=d});return false});a(window).scroll(function(){k();var b=a('[data-elevator="enable"] section[data-floor] h2:in-viewport:first').parent().attr("id")||a('[data-elevator="enable"]  article[data-floor] h1:in-viewport:first').closest("article").attr("id"),c=a('[data-elevator^="enable"] section[data-floor] h2:above-the-top'),d=a('[data-elevator^="enable"] section[data-floor] h2:below-the-fold'),e=a(".elevator-control a[href=#"+b+"]");for(var f=0;f<d.length;f++){a(".elevator-control li.above").removeClass("above")}for(var f=0;f<c.length;f++){var g=a(c[f]).parent().attr("id"),h=a(".elevator-control a[href=#"+g+"]");h.parent().addClass("above")}if(e.length&&!e.parent().is(".active")){a(".elevator-control li.active").removeClass("active");e.parent().addClass("active")}})}})}})(jQuery)

(function( $ ) {
  $.fn.pageScroller = function( options ) {
    var defaults = {
      windowPositionThreshold : 0,
      //topRestPos will be a number value added to the top most floor position
      topRestPos : 0
    };

    var settings = $.extend( defaults, options );

    return this.each(function( ) {

        //Create an array of all floors
        var elevatorFloorsArr = $('[data-floor]'), 
        //Created "element" so that we don't lose scope of it
        $element = $(this),
        //look for elevator title
        elevatorTitle = $element.attr('data-elevator-title'),
        //Creating elevator scaffolding/ template object
        elevatorScaffolding = $('<ol id="elevator" class="elevator-control"></ol>');

        //Create an array of all floors
        var elevatorFloorsEndArr = $('[data-floor-end]');

        if ($element.attr('data-no-titles') == 'true'){
            $('body').addClass('elevator-no-titles');
        }

        if ($element.attr('data-body-class')){
            $('body').addClass($element.attr('data-body-class'));
        }

      if(elevatorFloorsArr.length > 1){

        //Add a elevator title if the data attribute exists
        if(!$element.attr('data-elevator-title')){
          //console.log('elevator title not defined');
        } else {
          elevatorScaffolding.append('<li id="elevator-title"><p>'+ elevatorTitle +'</p></li>');
        }

        //Cycling through floors within "element" 
        for (var x = 0; x < elevatorFloorsArr.length; x++) { 

          //If a floor doesn't have an id this will give it one
          var floorID = ((elevatorFloorsArr[x].id != "")?elevatorFloorsArr[x].id:('floor-'+(x+1)));

          // if the "floor" element does not have an id, we give it one in order to maintain anchor link semantics
          if (!elevatorFloorsArr[x].getAttribute('id')) {
            $(elevatorFloorsArr[x]).attr("id", floorID.toString());
          }

          if (x === 0 && $element.attr('data-first-element-active') != 'true') {
            var listItem = $('<li class="active"></li>');
          } else {
            var listItem = $('<li></li>');
          }
          //Making the first list item active, except on the category page
          /* if(x === 0 && $('body').hasClass('category') == false){
            var listItem = $('<li class="active"></li>');
          } else {
            //else create unclassed list item
            var listItem = $('<li></li>');
          } */
          
          //create <a> tag
          var elevatorButton = $('<a href="">&nbsp;</a>');

          //give the <a> hash
          elevatorButton.attr("href", ("#"+floorID) );

          //construct scaffolding
          elevatorButton.append(elevatorFloorsArr[x].getAttribute('data-floor'));
          listItem.append( elevatorButton );
          elevatorScaffolding.append( listItem );

        }

        //append scaffolding to body element
        $('body').append(elevatorScaffolding);

        //Set elevator position
        elevatorPosControl();

        //add event to all elevator nav items
        $('#elevator a').live('touchstart click ', function(e){

          //get rid of the hash
          var hash = this.hash.substr(1);

          //get position of element.
          if(!$element.attr('data-elevator-title')){
            var $toElement = $('[id='+ hash +']');
            if (!$toElement.length) {
                $toElement = $('[id='+ hash +']');
            }
            //console.log($toElement);
          } else {
            var $toElement = $('[id='+ hash +']');
          }
          var toPosition = $toElement.position().top;

          var $fixedElement = $('#elevator');
          
          // fix for last elevator element on ipad.
					if($toElement.is(':last-child') && (/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase()))){
							var ipadHeight = window.innerHeight ? window.innerHeight : $(window).height()
            	if(($('footer').height() + $toElement.height()) < ipadHeight){

								toPosition = toPosition + (($('footer').height() + $toElement.height()) - ipadHeight);
            	}
      	  	}
      	  	
          //animate to the element
          $('body,html').stop(true, true).animate({
            scrollTop : toPosition
          }, 800, 'swing', function(){
           // window.location.hash = hash;
            if (/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase())) {
              $fixedElement.css({ "position": "static" });
              window.scroll(0, toPosition );
              $fixedElement.css({ "position": "fixed" });
            }
          });

          return false;
        });      

        $(window).scroll(function(){

          elevatorPosControl();

          var inView = $('section[data-floor] h2:in-viewport:first').parent().attr('id')
                       || $('article[data-floor] h1:in-viewport:first').closest('article').attr('id')
                       || $('article[data-floor]:in-viewport:first').attr('id')
                       || $('section[data-floor] h3:in-viewport:first').parents('section').attr('id'),
                        $aboveFold = $('section[data-floor] h2:above-the-top'),
                        $belowFold = $('section[data-floor] h2:below-the-fold'),

              $jumpLink = $('.elevator-control a[href=#'+ inView +']');


          //check to see if there is a data-follor-end section in view and update jumpLink if there is (For history&heritage)
          var endInView = $('section[data-floor-end] h3:in-viewport:first').parents('section').attr('data-floor-end');
          if  (endInView) {
            $jumpLink = $('.elevator-control a[href=#'+ $('[data-floor="'+endInView+'"]').attr('id') + ']');
          }

          //parse through array on scroll for new elements below the fold
          /* for(var i = 0; i < $belowFold.length; i++) {
            //remove the 'above' class if any exist on elements
            $('.elevator-control li.above').removeClass('above');
          } */
          $('.elevator-control li').removeClass('above');

          //parse through array on scroll for new elements above the top
          for(var i = 0; i < $aboveFold.length; i++) {

            //found the elements parent and capture its ID
            var aboveItem = $($aboveFold[i]).parent().attr('id'),
                //find element with an <a href> that matched the element id found above
                $jumpLinkAbove = $('.elevator-control a[href=#'+ aboveItem +']');

            //add class the matched element
            $jumpLinkAbove.parent().addClass('above');

          }

            if ($element.attr('data-first-element-active') != 'true') {
	           //if($('.category #main-container header:in-viewport').length == 1){ // this is the exception for the category page
	        	// makes NO floors active when the flexslider is in view
                $('.elevator-control li.active').removeClass('active');
			} else {
			     //remove all active class from <li>'s in elevator nav and add active to the newly found <li> element
              if($jumpLink.length && !$jumpLink.parent().is('.active')){
                $('.elevator-control li.active').removeClass('active');
                $jumpLink.parent().addClass('active');
	          }					
			}
          
          
        });
      } // end if floors > 1

      //Position of elevator/jump navigation itself
      function elevatorPosControl(){

        if($element.attr('data-elevator-boundary')){
          var currentWindowPos = parseInt($(window).scrollTop());
            var windowThreshold = parseInt(currentWindowPos) + parseInt(settings.windowPositionThreshold);

          if(windowThreshold < ($(elevatorFloorsArr[0]).position().top - settings.topRestPos)) {
            $('body').removeClass('top scrolling bottom').addClass('top');
            $('.top .elevator-control').css({
              'top' : ($(elevatorFloorsArr[0]).position().top - settings.topRestPos)
            });
          } else if(windowThreshold > $(elevatorFloorsArr[elevatorFloorsArr.length -1]).position().top) {
            //Check to see if there's a floor end array (For history&heritage)
            if (elevatorFloorsEndArr.length) {
                if(windowThreshold > $(elevatorFloorsEndArr[elevatorFloorsEndArr.length - 1]).position().top ) {
                    $('body').removeClass('top scrolling bottom').addClass('bottom');
                    $('.bottom .elevator-control').css({
                      'top' : $(elevatorFloorsEndArr[elevatorFloorsEndArr.length -1]).position().top
                    });
                } else {
                    $('body').removeClass('top scrolling bottom').addClass('scrolling');
                    $('.elevator-control').css('top', '');
                }
            } else {
                $('body').removeClass('top scrolling bottom').addClass('bottom');
                $('.bottom .elevator-control').css({
                  'top' : $(elevatorFloorsArr[elevatorFloorsArr.length -1]).position().top
                });
            }
          } else {
            $('body').removeClass('top scrolling bottom').addClass('scrolling');
            $('.elevator-control').css('top', '');
          }
        } 
      } // end elevatorPosControl
    });
  }
})( jQuery );


/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*	interval: 100,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 0,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($) {
  $.fn.hoverIntent = function(f,g) {
    // default configuration options
    var cfg = {
      sensitivity: 7,
      interval: 100,
      timeout: 0
    };
    // override configuration options with user supplied object
    cfg = $.extend(cfg, g ? { over: f, out: g } : f );

    // instantiate variables
    // cX, cY = current X and Y position of mouse, updated by mousemove event
    // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
    var cX, cY, pX, pY;

    // A private function for getting mouse position
    var track = function(ev) {
      cX = ev.pageX;
      cY = ev.pageY;
    };

    // A private function for comparing current and previous mouse position
    var compare = function(ev,ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      // compare mouse positions to see if they've crossed the threshold
      if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
        $(ob).unbind("mousemove",track);
        // set hoverIntent state to true (so mouseOut can be called)
        ob.hoverIntent_s = 1;
        return cfg.over.apply(ob,[ev]);
      } else {
        // set previous coordinates for next time
        pX = cX; pY = cY;
        // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
        ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
      }
    };

    // A private function for delaying the mouseOut function
    var delay = function(ev,ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      ob.hoverIntent_s = 0;
      return cfg.out.apply(ob,[ev]);
    };

    // A private function for handling mouse 'hovering'
    var handleHover = function(e) {
      // copy objects to be passed into t (required for event object to be passed in IE)
      var ev = jQuery.extend({},e);
      var ob = this;

      // cancel hoverIntent timer if it exists
      if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

      // if e.type == "mouseenter"
      if (e.type == "mouseenter") {
        // set "previous" X and Y position based on initial entry point
        pX = ev.pageX; pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $(ob).bind("mousemove",track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

      // else e.type == "mouseleave"
      } else {
        // unbind expensive mousemove event
        $(ob).unbind("mousemove",track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
      }
    };

    // bind the function to the two event listeners
    return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);
  };
})(jQuery);


/* COUNT TO http://stackoverflow.com/questions/2540277/jquery-counter-to-count-up-to-a-target-number */

(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                value = Math.abs(value); //Make value always positive (in case of negative zeroes)
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null  // callback method for when the element finishes updating
    };
})(jQuery);

/*!
* Cross-browser Inline Labels Plugin for jQuery
*
* Copyright (c) 2010 Mark Dodwell (@madeofcode)
* Licensed under the MIT license
*
* Requires: jQuery v1.3.2
* Version: 0.1.0
*/
(function($) {
  
  //
  // Helpers
  //
  
  // is an input blank
  $.fn.isEmpty = function() {
    return $(this)[0].value === '';
  };

  // is an input present
  $.fn.isPresent = function() {
    return !$(this).isEmpty();
  };

  // return element for label
  $.fn.element = function() {
    return $('#' + $(this).attr('for'));
  };

  // return top/left offset for element
  $.fn.innerOffset = function() {
    var el = $(this);

    // TODO check for nil?
    var topOffset = 
      parseInt(el.css('marginTop')) + 
      parseInt(el.css('paddingTop')) +
      parseInt(el.css('borderTopWidth'));
      
    // TODO check for nil?
    var leftOffset = 
      parseInt(el.css('marginLeft')) + 
      parseInt(el.css('paddingLeft')) +
      parseInt(el.css('borderLeftWidth'));

    return { top: topOffset, left: leftOffset };
  };
  
  // setup
  $(function() {
    var labels = $('label.inline');
    
    // set as supported
    labels.addClass('supported')
    
    // delegate mousedown to input
    .mousedown(function(e) {
      $(this).element()[0].focus();
      e.stopPropagation();
      e.preventDefault();
    })
    
    .each(function() {
      var label = $(this);
      var el = label.element();
      
      // calc offset
      var leftOffset = el[0].tagName == "TEXTAREA" ? 0 : 2;
      
      // adopt styling of inputs
      label.css({
        fontSize: el.css('fontSize'), 
        fontFamily: el.css('fontFamily'),
        fontWeight: el.css('fontWeight'),
        lineHeight: el.css('lineHeight'),
        letterSpacing: el.css('letterSpacing'),
        top: el.position().top + el.innerOffset().top,
        left: el.position().left + el.innerOffset().left + leftOffset,
        width: el.width() - leftOffset
      });

      // set input as having inline label
      el.addClass('field_with_inline_label').data('inline.label', label);

      // show input if empty
      if (el.isEmpty()) label.addClass("empty");
    });

    // elm behaviours
    $(".field_with_inline_label")
    
    // focus behaviours
    .focus(function() {
      var el = $(this);
      var label = el.data('inline.label');

      // focus label
      label.addClass("focus");

      // clear existing timer (maybe don't need this?)
      var timer = el.data('inline.timer');
      window.clearInterval(timer);
      el.data('inline.timer', null);

      // set timer
      el.data('inline.timer', window.setInterval(function() {
        if (el.isPresent()) label.removeClass('empty');
      }, 25));
    }) 
    
    // blur behaviours 
    .blur(function() {
      var el = $(this);
      var label = el.data('inline.label');

      // unfocus label
      label.removeClass("focus");

      // cancel timer
      var timer = el.data('inline.timer');
      window.clearInterval(timer);
      el.data('inline.timer', null);

      // show label on blur if field empty
      if (el.isEmpty()) label.addClass("empty");
    });

    // ready! show labels
    $('label.inline').show();
  });

})(jQuery);


//selectivzr Redraw hack
var selectivzrRedraw = (function(){ 
  var timer, selectivizrCode; 
  /* 
  // More inefficient 
  if((/MSIE/).test(window.navigator.userAgent)){ 
          timer = setInterval(reSelectivizr, 10000); 
  }*/ 

  function reSelectivizr(){ 
    if(selectivizrCode === undefined){ 
      $.get('../../js/libs/selectivizr-min.js', {}, function(data){ 
        selectivizrCode = new Function(data); 
        selectivizrCode(); 
      },'text'); 
    }else{ 
      selectivizrCode(); 
    } 
  }
  return reSelectivizr; 
}()); 



/* Yassa plugin (slide scroller/carousel)
   Developed by: Blast Radius Dev Team
   Last Updated: 07/06/2012
*/
(function( $ ) {
  $.fn.yassa = function(options) {
    var defaults = {
      speed : 600,
      manualControls : [],
      hasCoverSlide : false,
      killCover : true,
      init: function(){},
      before: function(){},
      after: function(){}
    };

    var settings = $.extend(defaults, options);

    return this.each(function() {
      //perform awesome

      var $element = $(this),
          $slides = $element.find('.slides'),
          $slide = $element.find('.slides > li'),
          slideCount = $slide.length,
          currentSlide = 0,
          centerView = $element.width() / 2,
          currentPosition = 0,
          slidePositions = [],
          inTouchEnabled = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
          eventType = (inTouchEnabled) ? "touchend" : "click",
          touchStartPositionX = 0,
          touchEndPositionX = 0,
          coverDestroyed = false,
          resizeTimer = null,

          math = {

            diff : function(a,b){
              return Math.floor(b-a);
            },

            halfPoint : function(slide) {
              return $(slide).position().left + $(slide).outerWidth(true) / 2;
            },

            updatePosition : function(){

              centerView = $element.width() / 2;

              slidePositions = [];

              $.each($slide, function(index, value){

                if(index == 0) {

                    slidePositions.push(math.diff($(this).outerWidth(true) / 2, centerView));

                } else {

                    var widthCount = 0;

                    for(var i = 0; i < slidePositions.length; i++ ){
                        widthCount = widthCount + $($slide[i]).outerWidth(true);
                    }

                    slidePositions.push(math.diff(widthCount + $(this).outerWidth(true) / 2, centerView));

                }

              });

            },

            portResize : function() {

                $.each($slide, function(index, value){

                    var slideTiles = $(this).find('.sub-category-tile');
                    var slideWidth = 0;

                    if(slideTiles.length <= 0) {
                        slideTiles = $(this).find('.fit-tool-cover.fit-tool-category');
                    }

                    //console.log(slideTiles);

                    for(var i = 0; i < slideTiles.length; i++){
                        slideWidth = slideWidth + slideTiles.outerWidth(true)
                    }

                    $(this).css({'maxWidth' : slideWidth + 'px', 'width' : '100%'});

                    //console.log(slideWidth);

                });

                math.updatePosition();

                animate.jumpTo(currentSlide, 'portResize');

            }

          },

          //callbacks for:
          callbacks = {

            //before slide
            before : function(){

              settings.before.call();
              
            },

            //after slide
            after : function(){
              
              settings.after.call();

            }

          },//end callbacks

          animate = {

            initial : function(){

            //Initialize
                $slides.wrap('<div class="film-viewport" />');

                $('.film-viewport').css({
                  'overflow' : 'hidden',
                  'position' : 'relative'
                });

                $slides.css({
                  'width' : slideCount * 200 + '%'
                });

                $.each($slide, function(index, value){

                    /*
                    var slideTiles = $(this).find('.sub-category-tile');

                        if(slideTiles.length > 0){
                            console.log(slideTiles.length);

                            var tileCount = Math.round((100 / slideTiles.length)*100) / 100; //two decimal places

                            for(var i = 0; i < slideTiles.length; i++){
                                console.log('   ',i);
                                console.log('       ',$(slideTiles)[i]);
                                $($(slideTiles)[i]).css({width : tileCount+'%'});
                            }
                        }
                    */

                    //Broke the CSS of these slides into two parts because IE7 had trouble find the width of the slide elements
                    $(value).css({'float': 'left', 'display': 'block', 'position' : 'absolute', 'visibility': 'hidden'});

                    //After the line above IE7 is able to see the width of the elements
                    var slideWidth = $(value).outerWidth(true);

                    //Apply the width and remove positioning and visibility
                    $(value).css({'maxWidth' : slideWidth + 'px', 'width' : '100%', 'position' : '', 'visibility': ''});


                    slidePositions.push(math.diff(math.halfPoint($slide[index]), centerView));

                    /* touch will be disabled for the time being
                    if(inTouchEnabled){

                        $(value).live('touchstart', function(event){
                            touch.onStart(event, value);

                            return false; 
                        });

                    }
                    */

                });

            //Button controls
                $('.action').on(eventType, function(e){

                  if($(this).hasClass('fit-tool-prev')){

                    animate.toPrev();

                  } else if($(this).hasClass('fit-tool-next')) {

                    animate.toNext();

                  }

                  return false;
                });

            //manual controls
                if($(settings.manualControls).length > 0){

                  //btns
                    $(settings.manualControls).on(eventType, function(e){

                      if(settings.hasCoverSlide){

                        var myIndex = $(this).parent().index() + 1;

                      }

                      animate.jumpTo(myIndex);

                      return false;
                    });

                }

            //window resize
                var resizeTimer;

                $(window).resize(function() {

                    var currentBodySize = $('body').width();

                    if($('body').width() < 1366 || math.diff(currentBodySize, 1366) > 0){

                        math.portResize();
                        
                    } else {

                        clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(math.portResize, 1000);

                    }

                    return false;
                });

            //animate to current slide
                if(settings.hasCoverSlide){

                    animate.jumpTo(currentSlide, 'initialAnimate');

                } else {

                    animate.jumpTo(currentSlide);

                }


            },

            toNext : function(){

              if(currentSlide < (slideCount - 1)){

                currentSlide++;

                animate.jumpTo(currentSlide);

              }

            },

            toPrev : function(){

              if(currentSlide > 0) {

                currentSlide--;

                animate.jumpTo(currentSlide);

              }
            },

            jumpTo : function(index, initial){

                var initial = initial || 'userEngagement';

                if(index <= (slideCount - 1) && index >= 0) {

                    currentSlide = index;

                    callbacks.before();

                    animate.highlight(currentSlide);
                    
                    $slides.stop(true, true).animate({
                        'marginLeft' : slidePositions[currentSlide] + 'px'
                    }, settings.speed, function() {
                        //complete

                        $('.fit-tool-prev, .fit-tool-next').removeClass('disabled');

                        if(currentSlide == (slideCount - 1)){
                            $('.fit-tool-next').addClass('disabled');
                        }
                        if(currentSlide == 0 || (currentSlide == 1 && settings.hasCoverSlide)){
                            $('.fit-tool-prev').addClass('disabled');
                        }

                        if(initial === 'userEngagement' && settings.hasCoverSlide && coverDestroyed == false){

                          animate.killSlide(0, currentSlide);

                        }

                        callbacks.after();  

                    });
                  

                }

            },

            highlight : function(index){

              if($(settings.manualControls).length > 0){ 

                if(settings.hasCoverSlide){

                    if(index != 0) {
                        index = index - 1;

                        $(settings.manualControls).parent().removeClass('manual-active');
                        $($(settings.manualControls)[index]).parent().addClass('manual-active');
                    } else {
                        $(settings.manualControls).parent().removeClass('manual-active');
                    }
                    
                } else {

                    $(settings.manualControls).parent().removeClass('manual-active');
                    $($(settings.manualControls)[index]).parent().addClass('manual-active');

                }

              }

            },

            killSlide : function(slideToKill, slideSelected){

                if(settings.killCover === true && $element.hasClass('dockers') === false){

                    $($slide[slideToKill]).find('.fit-tool-cover').fadeOut('fast', function(){

                        coverDestroyed = true;
                        
                    });
                }

            }

          },//End animate

          touch = {

            onStart : function(event, object){

                touchStartPositionX = event.originalEvent.pageX;

                $(object).live('touchmove', function(e){
                    touch.onMove(e, object);
                    return false;
                });


                $(object).live('touchend', function(e){
                    touch.onEnd(e, object);
                    return false;
                });
            },

            onMove : function(event, object){

              touchEndPositionX = event.originalEvent.pageX;
            },

            onEnd : function(event, object){

              var whichDirection = math.diff(touchStartPositionX, touchEndPositionX);

              if(whichDirection < 0){

                animate.toNext();

              } else if(whichDirection > 0){

                if((currentSlide - 1) !== 0 && settings.hasCoverSlide){
                    animate.toPrev();
                }

              } else {
                //do nothing
              }

            }

          };//End touch

      //end of VARS

      animate.initial();
      settings.init.call();

    });//end return each
  };
})( jQuery );



// ColorBox v1.3.16 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function ($, document, window) {
	var
	// ColorBox Default Settings.	
	// See http://colorpowered.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		width: 850,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: 575,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		open: false,
		returnFocus: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,
		overlayClose: true,		
		escKey: true,
		arrowKey: true
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	
	// Events	
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',
	
	// Special Handling for IE
	isIE = $.browser.msie && !$.support.opacity, // feature detection alone gave a false positive on at least one phone browser and on some development versions of Chrome.
	isIE6 = isIE && $.browser.version < 7,
	event_ie6 = prefix + '_IE6',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,

	// Variables for cached values or use across multiple functions
	settings = {},
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing = false,
	
	publicMethod,
	boxElement = prefix + 'Element';
	
	// ****************
	// HELPER FUNCTIONS
	// ****************

	// jQuery object generator to reduce code size
	function $div(id, cssText) { 
		var div = document.createElement('div');
		if (id) {
                        div.id = prefix + id;
                }
		div.style.cssText = cssText || false;
		return $(div);
	}

	// Convert % values to pixels
	function setSize(size, dimension) {
		dimension = dimension === 'x' ? $window.width() : $window.height();
		return (typeof size === 'string') ? Math.round((/%/.test(size) ? (dimension / 100) * parseInt(size, 10) : parseInt(size, 10))) : size;
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
	function isImage(url) {
		return settings.photo || /\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(url);
	}
	
	// Assigns function results to their respective settings.  This allows functions to be used as values.
	function process(settings) {
		for (var i in settings) {
			if ($.isFunction(settings[i]) && i.substring(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
			    settings[i] = settings[i].call(element);
			}
		}
		settings.rel = settings.rel || element.rel || 'nofollow';
		settings.href = $.trim(settings.href || $(element).attr('href'));
		settings.title = settings.title || element.title;
	}

	function trigger(event, callback) {
		if (callback) {
			callback.call(element);
		}
		$.event.trigger(event);
	}

	// Slideshow functionality
	function slideshow() {
		var
		timeOut,
		className = prefix + "Slideshow_",
		click = "click." + prefix,
		start,
		stop,
		clear;
		
		if (settings.slideshow && $related[1]) {
			start = function () {
				$slideshow
					.text(settings.slideshowStop)
					.unbind(click)
					.bind(event_complete, function () {
						if (index < $related.length - 1 || settings.loop) {
							timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
						}
					})
					.bind(event_load, function () {
						clearTimeout(timeOut);
					})
					.one(click + ' ' + event_cleanup, stop);
				$box.removeClass(className + "off").addClass(className + "on");
				timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
			};
			
			stop = function () {
				clearTimeout(timeOut);
				$slideshow
					.text(settings.slideshowStart)
					.unbind([event_complete, event_load, event_cleanup, click].join(' '))
					.one(click, start);
				$box.removeClass(className + "on").addClass(className + "off");
			};
			
			if (settings.slideshowAuto) {
				start();
			} else {
				stop();
			}
		}
	}

	function launch(elem) {
		if (!closing) {
			
			element = elem;
			
			process($.extend(settings, $.data(element, colorbox)));
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var relRelated = $.data(this, colorbox).rel || this.rel;
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to ColorBox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				$box.show();
				
				if (settings.returnFocus) {
					try {
						element.blur();
						$(element).one(event_closed, function () {
							try {
								this.focus();
							} catch (e) {
								// do nothing
							}
						});
					} catch (e) {
						// do nothing
					}
				}
				
				// +settings.opacity avoids a problem in IE when using non-zero-prefixed-string-values, like '.5'
				$overlay.css({"opacity": +settings.opacity, "cursor": settings.overlayClose ? "pointer" : "auto"}).show();
				
				// Opens inital empty ColorBox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				publicMethod.position(0);
				
				if (isIE6) {
					$window.bind('resize.' + event_ie6 + ' scroll.' + event_ie6, function () {
						$overlay.css({width: $window.width(), height: $window.height(), top: $window.scrollTop(), left: $window.scrollLeft()});
					}).trigger('resize.' + event_ie6);
				}
				
				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();
				
				$close.html(settings.close).show();
			}
			
			publicMethod.load(true);
		}
	}

	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.fn.colorbox.close();
	// Usage from within an iframe: parent.$.fn.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this, autoOpen;
		
		if (!$this[0] && $this.selector) { // if a selector was given and it didn't match any elements, go ahead and exit.
			return $this;
		}
		
		options = options || {};
		
		if (callback) {
			options.onComplete = callback;
		}
		
		if (!$this[0] || $this.selector === undefined) { // detects $.colorbox() and $.fn.colorbox()
			$this = $('<a/>');
			options.open = true; // assume an immediate open
		}
		
		$this.each(function () {
			$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			$(this).addClass(boxElement);
		});
		
		autoOpen = options.open;
		
		if ($.isFunction(autoOpen)) {
			autoOpen = autoOpen.call($this);
		}
		
		if (autoOpen) {
			launch($this[0]);
		}
		
		return $this;
	};

	// Initialize ColorBox: store common calculations, preload the interface graphics, append the html.
	// This preps colorbox for a speedy open when clicked, and lightens the burdon on the browser by only
	// having to run once, instead of each time colorbox is opened.
	publicMethod.init = function () {
		// Create & Append jQuery Objects
		$window = $(window);
		$box = $div().attr({id: colorbox, 'class': isIE ? prefix + (isIE6 ? 'IE6' : 'IE') : ''});
		$overlay = $div("Overlay", isIE6 ? 'position:absolute' : '').hide();
		
		$wrap = $div("Wrapper");
		$content = $div("Content").append(
			$loaded = $div("LoadedContent", 'width:0; height:0; overflow:hidden'),
			$loadingOverlay = $div("LoadingOverlay").add($div("LoadingGraphic")),
			$title = $div("Title"),
			$current = $div("Current"),
			$next = $div("Next"),
			$prev = $div("Previous"),
			$slideshow = $div("Slideshow").bind(event_open, slideshow),
			$close = $div("Close")
		);
		$wrap.append( // The 3x3 Grid that makes up ColorBox
			$div().append(
				$div("TopLeft"),
				$topBorder = $div("TopCenter"),
				$div("TopRight")
			),
			$div(false, 'clear:left').append(
				$leftBorder = $div("MiddleLeft"),
				$content,
				$rightBorder = $div("MiddleRight")
			),
			$div(false, 'clear:left').append(
				$div("BottomLeft"),
				$bottomBorder = $div("BottomCenter"),
				$div("BottomRight")
			)
		).children().children().css({'float': 'left'});
		
		$loadingBay = $div(false, 'position:absolute; width:9999px; visibility:hidden; display:none');
		
		$('body').prepend($overlay, $box.append($wrap, $loadingBay));
		
		$content.children()
		.hover(function () {
			$(this).addClass('hover');
		}, function () {
			$(this).removeClass('hover');
		}).addClass('hover');
		
		// Cache values needed for size calculations
		interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();//Subtraction needed for IE6
		interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
		loadedHeight = $loaded.outerHeight(true);
		loadedWidth = $loaded.outerWidth(true);
		
		// Setting padding to remove the need to do size conversions during the animation step.
		$box.css({"padding-bottom": interfaceHeight, "padding-right": interfaceWidth}).hide();
		
                // Setup button events.
                $next.click(function () {
                        publicMethod.next();
                });
                $prev.click(function () {
                        publicMethod.prev();
                });
                $close.click(function () {
                        publicMethod.close();
                });
		
		$groupControls = $next.add($prev).add($current).add($slideshow);
		
		// Adding the 'hover' class allowed the browser to load the hover-state
		// background graphics.  The class can now can be removed.
		$content.children().removeClass('hover');
		
		$('.' + boxElement).live('click', function (e) {
			// checks to see if it was a non-left mouse-click and for clicks modified with ctrl, shift, or alt.
			if (!((e.button !== 0 && typeof e.button !== 'undefined') || e.ctrlKey || e.shiftKey || e.altKey)) {
				e.preventDefault();
				launch(this);
			}
		});
		
		$overlay.click(function () {
			if (settings.overlayClose) {
				publicMethod.close();
			}
		});
		
		// Set Navigation Key Bindings
		$(document).bind('keydown.' + prefix, function (e) {
                        var key = e.keyCode;
			if (open && settings.escKey && key === 27) {
				e.preventDefault();
				publicMethod.close();
			}
			if (open && settings.arrowKey && $related[1]) {
				if (key === 37) {
					e.preventDefault();
					$prev.click();
				} else if (key === 39) {
					e.preventDefault();
					$next.click();
				}
			}
		});
	};
	
	publicMethod.remove = function () {
		$box.add($overlay).remove();
		$('.' + boxElement).die('click').removeData(colorbox).removeClass(boxElement);
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		animate_speed,
		// keeps the top and left positions within the browser's viewport.
		posTop = Math.max(document.documentElement.clientHeight - settings.h - loadedHeight - interfaceHeight, 0) / 2 + $window.scrollTop(),
		posLeft = Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2 + $window.scrollLeft();
		
		// setting the speed to 0 to reduce the delay between same-sized content.
		animate_speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed;
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions(that) {
			// loading overlay height has to be explicitly set for IE6.
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = that.style.width;
			$loadingOverlay[0].style.height = $loadingOverlay[1].style.height = $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = that.style.height;
		}
		
		$box.dequeue().animate({width: settings.w + loadedWidth, height: settings.h + loadedHeight, top: posTop, left: posLeft}, {
			duration: animate_speed,
			complete: function () {
				modalDimensions(this);
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: function () {
				modalDimensions(this);
			}
		});
	};

	publicMethod.resize = function (options) {
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}
			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}
			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}
			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}
			if (!options.innerHeight && !options.height) {				
				var $child = $loaded.wrapInner("<div style='overflow:auto'></div>").children(); // temporary wrapper to get an accurate estimate of just how high the total content should be.
				settings.h = $child.height();
				$child.replaceWith($child.children()); // ditch the temporary wrapper div used in height calculation
			}
			$loaded.css({height: settings.h});
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var speed = settings.transition === "none" ? 0 : settings.speed;
		
		$window.unbind('resize.' + prefix);
		$loaded.remove();
		$loaded = $div('LoadedContent').html(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		//$(photo).css({'float': 'none', marginLeft: 'auto', marginRight: 'auto'});
		
                $(photo).css({'float': 'none'});
                
		// Hides SELECT elements in IE6 because they would otherwise sit on top of the overlay.
		if (isIE6) {
			$('select').not($box.find('select')).filter(function () {
				return this.style.visibility !== 'hidden';
			}).css({'visibility': 'hidden'}).one(event_cleanup, function () {
				this.style.visibility = 'inherit';
			});
		}
		
		function setPosition(s) {
			publicMethod.position(s, function () {
				var prev, prevSrc, next, nextSrc, total = $related.length, iframe, complete;
				
				if (!open) {
					return;
				}
				
				complete = function () {
					$loadingOverlay.hide();
					trigger(event_complete, settings.onComplete);
				};
				
				if (isIE) {
					//This fadeIn helps the bicubic resampling to kick-in.
					if (photo) {
						$loaded.fadeIn(100);
					}
				}
				
				$title.html(settings.title).add($loaded).show();
				
				if (total > 1) { // handle grouping
					if (typeof settings.current === "string") {
						$current.html(settings.current.replace(/\{current\}/, index + 1).replace(/\{total\}/, total)).show();
					}
					
					$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
					$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
					
					prev = index ? $related[index - 1] : $related[total - 1];
					next = index < total - 1 ? $related[index + 1] : $related[0];
					
					if (settings.slideshow) {
						$slideshow.show();
					}
					
					// Preloads images within a rel group
					if (settings.preloading) {
						nextSrc = $.data(next, colorbox).href || next.href;
						prevSrc = $.data(prev, colorbox).href || prev.href;
						
						nextSrc = $.isFunction(nextSrc) ? nextSrc.call(next) : nextSrc;
						prevSrc = $.isFunction(prevSrc) ? prevSrc.call(prev) : prevSrc;
						
						if (isImage(nextSrc)) {
							$('<img/>')[0].src = nextSrc;
						}
						
						if (isImage(prevSrc)) {
							$('<img/>')[0].src = prevSrc;
						}
					}
				} else {
					$groupControls.hide();
				}
				
				if (settings.iframe) {
					iframe = $('<iframe/>').addClass(prefix + 'Iframe')[0];
					
					if (settings.fastIframe) {
						complete();
					} else {
						$(iframe).load(complete);
					}
					iframe.name = prefix + (+new Date());
					iframe.src = settings.href;
					
					if (!settings.scrolling) {
						iframe.scrolling = "no";
					}
					
					if (isIE) {
                                                iframe.frameborder=0;
						iframe.allowTransparency = "true";
					}
					
					$(iframe).appendTo($loaded).one(event_purge, function () {
						iframe.src = "//about:blank";
					});
				} else {
					complete();
				}
				
				if (settings.transition === 'fade') {
					$box.fadeTo(speed, 1, function () {
						$box[0].style.filter = "";
					});
				} else {
                                        $box[0].style.filter = "";
				}
				
				$window.bind('resize.' + prefix, function () {
					publicMethod.position(0);
				});
			});
		}
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				setPosition(0);
			});
		} else {
			setPosition(speed);
		}
	};

	publicMethod.load = function (launched) {
		var href, setResize, prep = publicMethod.prep;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		if (!launched) {
			process($.extend(settings, $.data(element, colorbox)));
		}
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		$loadingOverlay.show();

		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when ColorBox closes or loads new content.
			$div().hide().insertBefore($(href)[0]).one(event_purge, function () {
				$(this).replaceWith($loaded.children());
			});
			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(href)) {
			$(photo = new Image())
			.addClass(prefix + 'Photo')
			.error(function () {
				settings.title = false;
				prep($div('Error').text('This image could not be loaded'));
			})
			.load(function () {
				var percent;
				photo.onload = null; //stops animated gifs from firing the onload repeatedly.
				
				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;	
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.h - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (index < $related.length - 1 || settings.loop)) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
                                                publicMethod.next();
                                        };
				}
				
				if (isIE) {
					photo.style.msInterpolationMode = 'bicubic';
				}
				
				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, function (data, status, xhr) {
				prep(status === 'error' ? $div('Error').text('Request unsuccessful: ' + xhr.statusText) : $(this).contents());
			});
		}
	};
        
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (index < $related.length - 1 || settings.loop)) {
			index = index < $related.length - 1 ? index + 1 : 0;
			publicMethod.load();
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (index || settings.loop)) {
			index = index ? index - 1 : $related.length - 1;
			publicMethod.load();
		}
	};

	// Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix + ' .' + event_ie6);
			
			$overlay.fadeTo(200, 0);
			
			$box.stop().fadeTo(300, 0, function () {
                                
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// A method for fetching the current element ColorBox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

	// Initializes ColorBox when the DOM has loaded
	$(publicMethod.init);

}(jQuery, document, this));




/*!
 * jQuery Form Plugin
 * version: 2.67 (12-MAR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var action = this.attr('action');
	var url = (typeof action === 'string') ? $.trim(action) : '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		type: this[0].getAttribute('method') || 'GET', // IE7 massage (see issue 57)
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context 
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
		$.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}
		
		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				log('aborting upload...');
				var e = 'aborted';
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
				s.complete && s.complete.call(s.context, xhr, 'error');
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) { 
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}
	
		var data, doc, domCheckCount = 50;

		function cb() {
			if (xhr.aborted) {
				return;
			}
			
			var doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
			if (!doc || doc.location.href == s.iframeSrc) {
				// response not received yet
				return;
			}
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
				xhr.responseText = doc.body ? doc.body.innerHTML : doc.documentElement ? doc.documentElement.innerHTML : null; 
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent;
						}
						else if (b) {
							xhr.responseText = b.innerHTML;
						}
					}			  
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				
				data = httpData(xhr, s.dataType, s);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
			}
			
			if (xhr.aborted) {
				log('upload aborted');
				ok = false;
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success && s.success.call(s.context, data, 'success', xhr);
				g && $.event.trigger("ajaxSuccess", [xhr, s]);
			}
			
			g && $.event.trigger("ajaxComplete", [xhr, s]);

			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}
			
			s.complete && s.complete.call(s.context, xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		};
		var parseJSON = $.parseJSON || function(s) {
			return window['eval']('(' + s + ')');
		};
		
		var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4
			var ct = xhr.getResponseHeader('content-type') || '',
				xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
				data = xml ? xhr.responseXML : xhr.responseText;

			if (xml && data.documentElement.nodeName === 'parsererror') {
				$.error && $.error('parsererror');
			}
			if (s && s.dataFilter) {
				data = s.dataFilter(data, type);
			}
			if (typeof data === 'string') {
				if (type === 'json' || !type && ct.indexOf('json') >= 0) {
					data = parseJSON(data);
				} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
					$.globalEval(data);
				}
			}
			return data;
		};
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}
	
	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}
	
	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);






