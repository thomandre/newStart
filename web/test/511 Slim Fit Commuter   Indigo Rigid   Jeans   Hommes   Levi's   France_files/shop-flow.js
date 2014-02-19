/**
 * Simple JQuery sliding animation plugin for levis shopflow project. Improves
 * on fitguide version by providing for vertical sliding in addition to
 * horizontal sliding.
 *
 * Provides a convenience layer of abstraction for doing a sliding type
 * transition on a row or column of content (child elements, probably). Called
 * with an index parameter between zero and the index of the last 'child'. Will
 * initiate a translation animation between the current position and the logical
 * index position. A somewhat specific dom structure is assumed with the
 * following characteristics:
 *
 * Wraps a top level container which should have relative positioning and
 * overlow hidden styles applied. It should also have a width or a height
 * applied.
 *
 * The top level container's first child should be an absolutely positioned
 * container. This is referred to internally as the $scrollContainer.
 * The left or top property will be controlled by the scrollToIndex plugin. In
 * the case of a horizontal slide, the width of the $scrollContainer will be set
 * to the width of the top level container by it's number of children.
 *
 * Finally the $scrollContainer contains the individual view elements. It's
 * expected these are all each the same size as the top level element. For
 * horizontal sliding these should be floated left, or between the
 * $scrollContainer and these children styled such that they abut in a
 * horizontal row with no spacing (margins or padding could be used, but then
 * it's a exercise to the implementer for the overall widths to measure out
 * correctly). Conversely for a vertical slide it's expected the children are
 * stacked in a column with similar considerations as the horizontal layout.
 *
 * @author Ward Ruth
 */
;(function ($) {

    // private methods

    /**
     * Stop animating the views, and return to a default state.
     */
    var stopAnimating = function () {

          var $scrollContainer = $(this.children()[0]);
          //
          // stop any animation in process (view transitions).
          // don't clear the queue (some other animation unrelated to the slide
          // may be playing), but do immediately jump to the end point
          //
          $scrollContainer.stop(false, true);

          this.removeData('slideToIndex');
        },

        /**
         * Start animating the views.
         */
        startAnimating = function (options) {
          var $this = this,
              isHorizontal = (options.direction === 'horizontal'),
              dimension = isHorizontal ? 'width' : 'height',
              positionProperty = isHorizontal ? 'left' : 'top',
              $scrollContainer = $(this.children()[0]),
              $scrollViews = $scrollContainer.children(),
              numScrollViews = $scrollViews.length,
              prevIndex = this.data('slideToIndex'),
              scrollVal = -(options.index * options[dimension]) + 'px',
              animateParams = {};
          //
          // can't animate if there's one or none child views, or if the requested
          // index is out of bounds, or if already animating to the requested
          // index
          //
          if (numScrollViews <= 1 ||
              options.index >= numScrollViews ||
              (prevIndex && prevIndex === options.index)) {
            return;
          }

          if (isHorizontal) {
            $scrollContainer.width(options.width * numScrollViews);
          }


          // stop an in progress animation if any
          $scrollContainer.stop();

          if (options.transitionDuration > 0) {

            // save the index while animating
            this.data('slideToIndex', options.index);

            animateParams[positionProperty] = scrollVal;

            $scrollContainer.animate(
              animateParams,
              options.transitionDuration,
              'swing',
              function () {
                $this.removeData('slideToIndex');
                options.slideCompleteCallback();
              }
            );
          }
          else {
            $scrollContainer.css(positionProperty, scrollVal);
            options.slideCompleteCallback();
          }
        };

    /**
     * Plugin can be invoked with either an options object, or a string method
     * invocation. Either is optional. Possible parameters for the options object
     * are as follows:
     *
     * @param {Object} methodOrOptions optional options object with the following
     *    optional values:
     *    @property {String} direction Direction of slide, either 'horizontal'
     *        (the default), or 'vertical'.
     *    @property {Number} transitionDuration Number of milliseconds for the
     *        animated sliding transition between views. Defaults to 250 ms.
     *    @property {Function} slideCompleteCallback Callback to invoke when
     *        the sliding animation has completed.
     *    @property {Number} index Index of view to slide to
     *
     * Alternatively the plug-in can be invoked with a string method invocation.
     *
     * @param {String} methodOrOptions a string referencing one of the plug-ins
     *    public methods. Only one is exposed, 'stop'. This will halt immediately
     *    a previous invocation of the animation on an element, returning to the
     *    default view.
     */
    $.fn.slideToIndex2 = function (methodOrOptions) {

      if (methodOrOptions === 'stop') {
        stopAnimating.call(this);
      }
      else {

        var opts = $.extend(
          {
            width: this.width(),
            height: this.height()
          },
          $.fn.slideToIndex2.defaults,
          methodOrOptions || {});

        //this.width(opts.width);

        startAnimating.call(this, opts);
      }

      return this;

    };

    $.fn.slideToIndex2.defaults = {
      transitionDuration: 250,
      // can be 'horizontal' or 'vertical'
      direction: 'horizontal',
      slideCompleteCallback: function ($slideContainer) {
        // noop
      }
    };

  })(jQuery);

/**
 * Global ShopFlow object. Provides a namespace root to add other shop flow
 * related modules to, if necessary. Performs any necessary general setup, and
 * provides general utility methods.
 *
 * @author Ward Ruth
 */
window.ShopFlow = (function ($) {

  var readyCallbacks = [],
  executeReadyCallbacks = function() {
    var i,
      readyLen = readyCallbacks.length;

    if (readyLen > 0) {

      for (i = 0; i < readyLen; i++) {
        readyCallbacks[i]();
      }
    }
  },
  init = function() {
    executeReadyCallbacks();
  },
  publicMethods = {

    /**
     * Modules can add a callback function to be called on page ready.
     *
     * @param callback a callback function to invoke on page ready
     */
    addReadyCallback: function(callback) {
      readyCallbacks.push(callback);
    }
  };


  $(function() {
    init();
  });

  return publicMethods;

}(jQuery));


/**
 * General config parameters for ShopFlow
 */
(function (ShopFlow, $) {

  ShopFlow.config = {
    TOOLTIP_FADE_DELAY: 1000,
    TOOLTIP_LONG_FADE_DELAY: 2000,
    SCROLLER_TRANSITION_DURATION: 500,
    GLOBAL_PROMO_SHOW_TEXT: 'Show Latest Deals',
    GLOBAL_PROMO_HIDE_TEXT: 'Hide Latest Deals',
    CAROUSEL_TRANSITION_DURATION: 0, // changed to be 0 per client request 9/20
    SCROLL_QUEUE_DISTANCE: 420
  };

}(window.ShopFlow, jQuery));

/**
 * Public utilities subspace within ShopFlow global object,
 *  providing utility methods for general use
 *
 */
(function (ShopFlow, $) {


  ShopFlow.utilities = {

    /**
     * Bind an object's events from its events hash
     *
     * @func bindEvents
     *
     * @param {Object} context Desired "this" value to bind to
     * @param {Object} events Object with key-value pair of
     *    'event [delegation]': callback
     *
     */
    bindEvents: function(context, events) {
      var key,
          splitKey,
          components;

      if (context.$el) {
        for (key in events) {
          splitKey = key.split(' ');
          components = [splitKey.shift(), splitKey.join(' ')];

          if (events.hasOwnProperty(key)) {
            context.$el.on(components[0], components[1], this.bindContext(context, events[key]));
          }
        }
      }
    },

    /**
     * This function binds a method to execute in the scope of the supplied
     * context. For instance:
     *
     *  $('body').on('click', bindContext(this, 'myMethod')
     *
     * @func bindContext
     * @param {Object} context Object for method to be bound to
     * @param {String} method  Name of method to be bound
     * @return {Function} a function binding the method to execute on the
     *    context
     */
    bindContext: function(context, method) {

      return function() {
        return context[method].apply(context, Array.prototype.slice.call(arguments));
      };
    }
  };

}(window.ShopFlow, jQuery));

/**
 * Carousel used for B5 and B6 module types, which require a vertically
 * scrolling carousel.
 *
 * @author Ward Ruth
 */
(function (ShopFlow, $) {

  /**
   * Carousel class constructor
   *
   * @param {$} $el Root element for carousel. First child is assumed to be
   *    the actual scroll container. Root element acts as the viewport.
   * @param {Object} properties Other configuration properties. Currently just
   *    one is supported, navSelector, which is a jQuery string type selector
   *    to resolve to the individual slide controls for the carousel.
   */
  var Carousel = function($el, properties) {
    this.$el = $el;
    this.properties = properties;
    this.init();
  },

  /**
   * Class which when added makes a slide control look active. Pulled into this
   * variable to avoid mis-typing ;-)
   */
  activeClassName = 'active',

  p = Carousel.prototype,

  //
  // :TODO: add props and iterator to instantiate Carousels for type B6 modules
  //

  /**
   * Top level init for the module. Will loop over all elements to be turned
   * into carousels, and instantiate a Carousel instance for each.
   */
  init = function() {
    var lookBookProps = {
      navSelector: '.js-carousel-nav > li'
    };

    $('.b5-look-book, .b6-look-book').each(function(index) {
      new Carousel($(this), lookBookProps);
    });
  };

  ShopFlow.addReadyCallback(init);

  /**
   * Init method for Carousel class. Add mousenter handler to slide controls.
   *
   * @method init
   */
  p.init = function() {
    var self = this,
        $nav = this.$nav = this.$el.find(this.properties.navSelector);

    // first nav element should appear active, if not already
    $($nav[0]).addClass(activeClassName);

    $nav.mouseenter(function(evt) {
      var $this = $(this),
          slideIndex = $nav.index($this);
      $nav.removeClass(activeClassName);
      $this.addClass(activeClassName);

      self.$el.slideToIndex2({
        index: slideIndex,
        direction: 'vertical',
        transitionDuration: ShopFlow.config.CAROUSEL_TRANSITION_DURATION
      });

    });

  };

}(window.ShopFlow, jQuery));

/**
 * GlobalPromo setup. This is for the global promo bar that appears at the
 * top of every page below the sub-cat navigation.
 *
 * @author Noah Grant
 */
(function (ShopFlow, $) {

  var init = function() {

    // promo bar click handler
    $('.latest-deals-tab').on('click', function() {
      var $this = $(this);

      if ($this.hasClass('shown')) {
        $this.removeClass('shown');
        $this.children().eq(0).text(ShopFlow.config.GLOBAL_PROMO_SHOW_TEXT);
      } else {
        $this.addClass('shown');
        $this.children().eq(0).text(ShopFlow.config.GLOBAL_PROMO_HIDE_TEXT);
      }

      $('.latest-deal-details').slideToggle();
    });

  };

  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));

/**
 * GlobalNav setup. This is for the black navbar across the top of all pages.
 *  Included in this file:
 *
 *    navHoverBindings {function} - a generic fcn to fade in and out the tooltip arrows along the nav bar.
 *
 *    navHoverActualBinding {function} - the generic fcn called by navHoverBindings to actually bind the hover events (so
 *      that we are binding the correct selector to the correct tooltip, since the hoverSelector is a string that is copied and
 *      not applied by reference).
 *
 *    tooltipTimeout {function} - helper fcn to fade out a tooltip after the specified amount of time.
 *
 *    tooltipHoverEvents {function} - bind mouseenter/leave events to the tooltips separately from their appropriate nav links.
 *
 *    minicartHasItems {function} - a fcn to add the .has-items class to the minicart if there are, in fact, items included.  this
 *      changes the hover state and background color of the cart.
 *
 *    emailSignup {object} - the object that governs the "Email Signup" link in the global nav bar.
 *
 *    emailTooltip {object} - the object that governs the email tooltip that fades in/out on mouseenter/leave of the Email Signup link.
 *      Includes event bindings, unbindings, success states, error states, etc.
 *
 *
 * @author Noah Grant
 */
(function (ShopFlow, $) {
  var init,
      emailSignup,
      emailTooltip,
      tooltipTimeoutIds = {},
      linkTooltipPairs;

  // in the linkTooltipPairs object, keys are global nav link CSS selectors,
  // values are their respective tooltip CSS selectors
  linkTooltipPairs = {
    '.loyalty-links a': '.loyalty-links-tooltip',
    '.other-brand-logo': '.brand-tooltip',
    '.country': '.country-tooltip',
    '.email-signup > a': '.email-tooltip'
  };

  /**
   * @func navHoverBindings - simple fadeIn/fadeOut tooltip toggle
   *    since we weren't doing the css show/hide with *all* of the tooltips,
   *    better to make them all the same and do use js. here we bind hover events to both
   *    the global nav link and to the tooltip itself.
   *
   * @param hoverData {object} - this object has key-values of the global nav
   *    link selector and its tooltip selector, respectively, ie {LINK_SELECTOR: TOOLTIPSELECTOR}
   *
   */
  function navHoverBindings(hoverData) {
    var hoverSelector;

    for (hoverSelector in hoverData) {
      if (hoverData.hasOwnProperty(hoverSelector)) {
        // bind events to global nav links
        navHoverActualBinding(hoverSelector, hoverData[hoverSelector]);
        // bind events to tooltips
        tooltipHoverEvents(hoverSelector, $(hoverData[hoverSelector]));
      }
    }
  }

  /**
   * @func navHoverActualBinding - this is where the actual binding takes place
   *    for each link/tooltip pair listed in the hoverData param passed to navHoverBindings above.
   *
   * @param selector {string} - the global nav link CSS selector
   * @param target {string} - the tooltip CSS selector that belongs to this global nav link
   */
  function navHoverActualBinding(selector, target) {
    var $target = $(target);

    $(selector).hoverIntent(function() {
    	$('.nav-tooltip').removeClass('changed');
      // first off, let's clear out any timeout so this link's tooltip will
      // stay shown in the case that the user hovers off the link and then
      // back on
      window.clearTimeout(tooltipTimeoutIds[selector]);

      // now, let's fade out all other nav tooltips that might be showing
      // so that there is only one tooltip being shown at a time
      $('.nav-tooltip').not(target).fadeOut();

      // lastly, we can fade in this nav link's target
      if($('.global-nav-list.checkout').length == 0) {
	      var left = $(selector).offset().left - $('.global-nav').offset().left;
	     if($('.header-fluid').width() - $(target).width() > left){
	    	  $(target).css('left',left);
	      }else{
	    	  $('.nav-tooltip').addClass('changed');
	    	  left = (left - $(target).width()) + $(selector).width() + 20;
	    	  $(target).css('left',left);
	      }
      }
      $target.fadeIn();
      
    }, function() {
      // hovering off of the link, set the fadeOut on a timer
      tooltipTimeoutIds[selector] = tooltipTimeout($target);
      
    });
  }

  /**
   * @func tooltipTimeout - helper function to fade out the tooltip when desired
   *
   * @param $target {jquery obj} - jquery object for a tooltip
   * @return {integer} - timeoutId added to the private tooltipTimeoutIds object for bookkeeping
   *
   */
  function tooltipTimeout($target) {
    return window.setTimeout(function() {
      $target.fadeOut();
    }, ShopFlow.config.TOOLTIP_FADE_DELAY);
    $('.nav-tooltip').removeClass('changed');
  }

  /**
   * @func tooltipHoverEvents - bind mouseenter and mouseleave events on the all the tooltip divs.
   *   every nav tooltip should stay open for the same amt of time unless one of two things happen:
   *
   *     (1) user hovers over another nav-tooltip, in which case other
   *         tooltips fade out immediately
   *     (2) user hovers over this tooltip, in which case the timeout should
   *         be cleared until the user hovers off of the tooltip
   *
   * @param selector {string} - global nav link CSS selector
   * @param $target {jquery obj} - jquery object for the tooltip that belongs to this global nav link
   */
  function tooltipHoverEvents(selector, $target) {
    // ensure we're not adding events on events
    // this is a quick hack because add'l hover events are being tacked on
    // when the email signup close button is clicked, and i've run out of time...
    $target.off('mouseenter mouseleave');

    $target.on('mouseenter', function() {
      window.clearTimeout(tooltipTimeoutIds[selector]);
      $(this).fadeIn();
    }).on('mouseleave', function() {
      tooltipTimeoutIds[selector] = tooltipTimeout($target);
    });
  }

  /**
   * @func removeHoverBindings - remove mouseenter/mouseleave events on the global nav links
   *    and their respective tooltips.  we call this fcn to disable hover events when the email signup
   *    tooltip becomes persistent
   *
   * @param hoverData {object} - keys are global nav link CSS selectors, values are their respective
   *    tooltip CSS selectors
   */
  function removeHoverBindings(hoverData) {
    var hoverSelector;

    for (hoverSelector in hoverData) {
      if (hoverData.hasOwnProperty(hoverSelector)) {
        // remove hover binding from nav link
        $(hoverSelector).off('mouseenter mouseleave');
        // remove hover binding from tooltip
        $(hoverData[hoverSelector]).off('mouseenter mouseleave');
      }
    }
  }

  /**
   * @func minicartHasItems - if, onload, the cart has items, we apply the has-items
   *    class so that its nav background is the highlighted color and is hover-able.
   *    we can optionally make this public so that it can be called after an ajax call
   *    to the server.
   */
  function minicartHasItems() {
    if ($('.hidden-cart .cart-item').length > 0) {
      $('.mini-cart').addClass('has-items');
    }
  }

  /**
   * The Email Tooltip Signup
   *
   * We have two objects governing the email tooltip signup:
   *
   *    (1) emailTooltip - governs the email-tooltip-landing form
   *    (2) emailSignup - governs the email-signup link in the global nav bar
   *
   * Both objects have a $el property and an events hash. Each event is bound using the ShopFlow.utilities.bindEvents method,
   *    and each callback is bound to this using the ShopFlow.utilities.bindContext method
   *
   * emailTooltip needs to do a few things:
   *    (1) fade in initially on domready and stay open for two seconds before fading out; if the user hovers over it during this time,
   *        it does not fade out and the user must then click outstide of the tooltip or click the tooltip "close" icon to fade it out.
   *
   *    (2) fade in on click of the "Email Signup" link and remain shown until the user clicks outside of the tooltip or on the tooltip "close" icon
   *
   *    (3) fade in on *hover* of the "Email Signup" link and stay open two seconds before fading out; if the user hovers over it during this time,
   *        it does not fade out until the user hovers off of the tooltip (this functionality is identical to the other tooltips and is
   *        applied via the navHoverBindings fcn like the others). if the user focuses any of the inputs within the email-tooltip,
   *        the tooltip will persist and the user must then click outstide of the tooltip or click the tooltip "close" icon to fade it out.
   *
   */
  emailTooltip = {
    // $el is the jquery object of the selector that emailTooltip governs
    $el: $('.email-tooltip.landing'),
    $input: $('.email-tooltip.landing').find('input[type="text"]'),
    $checkbox: $('.email-tooltip.landing').find('input[type="checkbox"]'),
    navSelector: '.email-signup > a',
    successText: 'You\'ll receive your free shipping promotion shorty!',

    events: {
      'keypress input': 'validateKeyPress',
      'click input + a': 'validateEmail',
      'click .close': 'hideTooltip',
      'focus input': 'clearTimeoutsAndShow'
    },

    showTooltip: function() {
      this.$el.addClass('persistent');
      var left = $('.email-signup').offset().left - $('.global-nav').offset().left;
	  $(this.$el).css('left',left);
      this.$el.fadeIn();
    },

    hideTooltip: function() {
      this.$el.fadeOut(ShopFlow.utilities.bindContext(this, 'blurInput'));
      this.$el.removeClass('persistent');
    },

    blurInput: function() {
      this.$input.blur();
    },

    /**
     * @func validateKeyPress - in the email signup field, the user has two standard methods of submission: hitting the enter key and
     *     clicking the submit button. both methods will call the validateEmail function, but for a keypress event we need to validate
     *     first that they key pressed was in fact the enter key.
     *
     * @param evt {jquery Obj}
     */
    validateKeyPress: function(evt) {
      if (evt.which === 13) {
        evt.preventDefault();
        this.validateEmail(evt);
      }
    },

    /**
     * @func validateEmail - in the email signup field, the user has two standard methods of submission: hitting the enter key and clicking the submit button.
     *    both ultimately call the validateEmail fcn, which is technically not in scope of this project, but as the client wanted to see success and error states,
     *    it was probably easiest just to throw in a quick validation.
     *
     * @param evt {jquery Obj}
     */
    validateEmail: function(evt) {
      var email = this.$input.val(),
        // taken from http://www.regular-expressions.info/email.html
        emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      evt.stopPropagation();

      // add error classes to email input field, checkbox, or both, depending on what's appropriate
      if (email.match(emailRegex)) {
        this.$input.removeClass('error');

        if (this.$checkbox.is(':checked')) {
          this.$checkbox.removeClass('error');
        } else {
          this.$checkbox.addClass('error');
        }
      } else {
        if (this.$checkbox.is(':checked')) {
          this.$checkbox.removeClass('error');
          this.$input.addClass('error');
        } else {
          this.$input.addClass('error');
          this.$checkbox.addClass('error');
        }
      }
    },

    /**
     * @func successFlash - upon successful validation, this function replaces the content in the tooltip with the success message.
     *
     */
    successFlash: function() {
      var self = this;

      this.$el.find('form').remove();
      this.$el.find('h6').text('Thanks!');
      this.$el.find('.tooltip-wrapper').append('<p>' + this.successText + '</p>');

      // as the success flash message disappears, we'll rebind the tooltip hover events
      window.setTimeout(function() {
        self.hideTooltip();
        navHoverBindings(linkTooltipPairs);
      }, ShopFlow.config.TOOLTIP_LONG_FADE_DELAY);
    },

    /**
     * @func displayOnPageLoad - called by the emailTooltip.init() fcn.  Fades in the tooltip initially
     *    and calls setTimeout for the 2 second initial fadeout.  finally, it binds the hover event so that
     *    if during that 2 seconds the user hovers over the tooltip, it will stay visible.
     */
    displayOnPageLoad: function() {
      if ($('input[name=newSession]').val()==='true' && $('input[name=showOnFirstAccess]').val()==='true'){
    	  this.showTooltip();
      }
      this.timeoutId = window.setTimeout(ShopFlow.utilities.bindContext(this, 'hideTooltip'), ShopFlow.config.TOOLTIP_LONG_FADE_DELAY);
    },

    /*
     * @func clearTimeoutsAndShow - the callback for every instance that we want to keep the tooltip from fading out.
     *     we clear all the existing timeouts and make sure it's shown if it's not already.
     *     we unbind the mouseleave event from the emailSignup obj (probably should emit an
     *     event and listen for it on the emailSignup obj instead of calling it directly here)
     *     so that nothing triggers a tooltip fadeout.  Finally, we bind a (namespaced) click
     *     event to the body to hide the tooltip when the user is ready.
     */
    clearTimeoutsAndShow: function() {

      window.clearTimeout(tooltipTimeoutIds[this.navSelector]);
      // ensure the tooltip is shown (if input is focused as tooltip is fading out)
      this.showTooltip();

      // while the tooltip is persistent, disable hover events on all nav links/tooltips,
      // including this one
      removeHoverBindings(linkTooltipPairs);

      // govern the everything-but-the-tooltip-will-close-the-tooltip
      $('body').on('click.makeItGoAway', ShopFlow.utilities.bindContext(this, 'attachCloseHandler'));
    },

    /**
     * @func attachCloseHandler - the callback to any click on the body after the tooltip has all timeouts cleared.
     *    we only act if the user has clicked anywhere on the body **outside** the tooltip or on the tooltip's "close" icon.
     */
    attachCloseHandler: function(evt) {
      evt.stopPropagation();

      // attach click handler to everywhere but tooltip (but also tooltip's close button)
      // when the user clicks anywhere other than the tooltip, the tooltip will close
      if (!this.$el.is(evt.target) && this.$el.has(evt.target).length === 0 || this.$el.find('span.close').is(evt.target)) {
        this.hideTooltip();

        // rebind original hover events to the rest of the tooltips
        navHoverBindings(linkTooltipPairs);

        // and now remove the everything-but-the-tooltip-will-close-the-tooltip
        $('body').off('click.makeItGoAway');
      }
    },

    init: function() {
      ShopFlow.utilities.bindEvents(this, this.events);

      this.displayOnPageLoad();
    }
  };

  /*
   * We have two objects governing the email tooltip signup:
   *
   *  (1) emailTooltip - governs the email-tooltip-landing form
   *  (2) emailSignup - governs the email-signup link in the global nav bar
   *
   * Both objects have a $el property and an events hash. Each event is bound using the ShopFlow.utilities.bindEvents method,
   *  and each callback is bound to this using the ShopFlow.utilities.bindContext method
   *
   */
  emailSignup = {
    // the jquery obj representing the governed DOM element
    $el: $('.global-nav .email-signup a'),
    $success: $('.email-tooltip.success'),
    tooltip: emailTooltip,

    events: {
      click: 'navLinkClick'
    },

    /**
     * @func navLinkClick - if the user clicks over the nav link, clear all timeouts
     *    and keep the tooltip visible.
     */
    navLinkClick: function(evt) {
      evt.stopPropagation();

      this.tooltip.clearTimeoutsAndShow();
    },

    init: function() {

      ShopFlow.utilities.bindEvents(this, this.events);

      // start up the tooltip
      this.tooltip.init();
    }
  };

  /**
   * @func init
   *
   *  the GlobalNav module function that we will pass to the Shopflow global object
   *  to be called on domready
   */
  init = function() {

    emailSignup.init();
    minicartHasItems();
    navHoverBindings(linkTooltipPairs);
  };

  // add init method to queue of methods to call on domready
  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));

/**
 * Email Lightbox. This is displayed when users first visit the site
 *
 * @author Noah Grant
 */
(function (ShopFlow, $) {

  var init = function () {

    // email hide handlers
    $('.email-signup span.close').one('click', function() {
      toggleFade();
    });
  };

  function toggleFade() {
    $('.email-lightbox').fadeToggle();
  }

  toggleFade();

  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));

/**
 * GlobalNav setup. This is for the black navbar across the top of all pages.
 *
 * @author Ward Ruth
 */
(function (ShopFlow, $) {

  var init = function() {
    $('.js-d1-scroller-container').flexslider({
      animation: 'slide',
      animationSpeed: ShopFlow.config.SCROLLER_TRANSITION_DURATION,
      controlNav: false,
      itemWidth: 150,
      maxItems: 5,
      slideshow: false,
      start: function () {
        $('.js-d1-scroller-container').fadeIn();
      }
    });
  };

  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));

/**
 * This is for the fixed homepage button that scrolls down x # of pixels when clicked,
 *    fades out if the user scrolls down (past ~400 px from the top), and fades back in
 *    if the user scrolls up (within ~400px from the top).
 *
 * @author Noah Grant
 */
(function (ShopFlow, $) {
  var scrollQueue,
    init;

  scrollQueue = {
    $el: $('.scroll-queue'),

    events: {
      'click': 'scrollDownTo'
    },

    show: function() {
      this.$el.fadeIn();
    },

    hide: function() {
      this.$el.fadeOut();
    },

    /**
     * @func showOrHideOnScroll - depending on the position of the page (scrollTop
     *    > or < 400px, as of now), hide or show the scroll queue button.
     *
     *    KNOWN ISSUE WITH SCROLLTOP: webkit browsers always register $('html').scrollTop() as 0,
     *    but will calculate $('body').scrollTop() as non-zero.  but the opposite is true for firefox.
     *    Here we calculate both, and if the html scrolltop is non-zero we use it; otherwise we use the body
     *    scrolltop (if both are zero it doesn't matter which one we use).
     */
    showOrHideOnScroll: function() {
      var htmlScrollTop = $('html').scrollTop(),
        bodyScrollTop = $('body').scrollTop(),
        scrollTop = !htmlScrollTop ? bodyScrollTop : htmlScrollTop,
        callback = scrollTop > 400 ? this.hide : this.show;

      callback.apply(this);
    },

    /**
     * @func scrollDownTo - this is where the actual auto-scrolling happens. both
     *    the 400 ms time slot and the 2000 pixels are arbitrary for now until we
     *    get more info from UX.
     */
    scrollDownTo: function() {
      $('html, body').animate({scrollTop: ShopFlow.config.SCROLL_QUEUE_DISTANCE}, 400, ShopFlow.utilities.bindContext(this, 'hide'));
    },

    init: function() {
      // if the browser loads the page partway down (arbitrary at this point),
      // ie, on reload, don't show the queue.
      if ($('html').scrollTop() < 400) {
        // show the DOM el and bind events listed in its hash
        this.show();
      }

      ShopFlow.utilities.bindEvents(this, this.events);

      // bind to explicit scroll evt on window here, since it's not an event
      // within the scrollQueue DOM element;
      $(window).on('scroll', ShopFlow.utilities.bindContext(this, 'showOrHideOnScroll'));
    }
  };

  init = function() {
    scrollQueue.init();
  };

  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));

/**
 * LocalNav or CategoryNav javascript. In order for the promos at the bottom to display correctly (and
 *    for the height of the nav dropdowns to be adjustable), we need to set the height in the css on
 *    domready via js.
 *
 * @author Noah Grant
 */
(function (ShopFlow, $) {

  var init = function () {

    $('.subnav-list .menu').each(function() {
      var $this = $(this),
        naturalHeight = $this.height(),
        columnHeightDiff = (!$this.hasClass('half-promos') && !$this.hasClass('full-promos')) ? 40 : 165;

      $this.height(naturalHeight);

      $this.children('[class^="fluid-column"], [class*=" fluid-column"]').not('.with-featured').height(naturalHeight - columnHeightDiff);
    });
  };

  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));

/**
 * This is a parent file for any code or methods that are not specific to one module
 *    and yet do not warrant their own file. It is currently empty.
 *
 * @author Noah Grant
 */
(function (ShopFlow, $) {
  var init;

  init = function () {
  };

  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));

/**
 *  This file governs all inputs on the homepage/category pages that have placeholders. At the moment, this includes
 *    at least four: (1) email signup tooltip (2) email signup lightbox (3) email signup footer (4) search box.
 *    On each one, we do a few things:
 *
 *    (1) apply the .placeholder() method from the jquery-placeholder plugin to provide support to IE7+
 *    (2) bind focus and blur events so that the placeholder disappears/reappears on focus/blur rather than on keyPress/blur. This was a
 *        last-minute client request.
 *
 *    To add new placeholders to this list, append entries to the selectors array and the placeholderText object.
 *
 *    Note that the client's desired behavior already exists in old IE with the jquery plugin.
 *
 * @author Noah Grant
 */
(function (ShopFlow, $) {
  var init,
    placeholders = {

      // CSS selectors for all inputs that need a placeholder
      selectors: [
        '.email-signup .input-email',
        '.email-tooltip .input-email',
        '#search-bar input',
        'footer .email-container input'
      ],
      
      // config object to align placeholder text with CSS selector
      placeholderText: {
        '.email-signup .input-email': 'ENTER EMAIL',
        '.email-tooltip .input-email': 'ENTER EMAIL',
        '#search-bar input': 'SEARCH',
        'footer .email-container input': 'Enter your email'
      },

      /**
       * generic bindEvents fcn for blur and focus
       *
       * @param selectors {array} - array of CSS selectors for all inputs with placeholders
       * @param evt {string} - type of event to bind, blur or focus
       */
      placeholderBindEvents: function(selectors, evt) {
        var self = this;

        $.each(selectors, function(index, selector) {
          $(selector).on(evt, null, {selector: selector, type: evt}, ShopFlow.utilities.bindContext(self, 'evtCallback'));
        });
      },

      /**
       * evtCallback - callback for placeholder event bindings
       *
       * @param evt {object} - evt object passed to event callback in jquery
       */
      evtCallback: function(evt) {
        var text = evt.type === 'blur' ? this.placeholderText[evt.data.selector] : '';

        $(evt.data.selector).attr('placeholder', text);
      },

      /**
       * @func attachPlaceholders - using the jquery plugin to add placeholders to IE7 and 8.
       *    On the homepage and category pages, they should be added to the three email signup tooltips
       *    as well as the search box. If a new input is added later, just add it to the selectors array
       *    and the placeholderText object.
       *
       *    After applying the shim, we bind blur and focus events to apply "old" browser placeholder interaction.
       *    That is, the placeholder disappears/reappears on focus/blur rather than on keyPress/blur. This was a
       *    last-minute client request.
       */
      attachPlaceholders: function() {

        $(this.selectors.join(', ')).placeholder();

        // bind focus and blur events on each selector here
        this.placeholderBindEvents(this.selectors, 'focus');
        this.placeholderBindEvents(this.selectors, 'blur');
      }
    };

  init = function () {
    placeholders.attachPlaceholders();
  };

  ShopFlow.addReadyCallback(init);

}(window.ShopFlow, jQuery));