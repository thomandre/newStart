(function() {
  var height, page, url, width, _ref;

  _ref = phantom.args, url = _ref[0], height = _ref[1], width = _ref[2];

  page = require('webpage').create();
  var system = require('system');

  page.settings.resourceTimeout = 10000;
  
  page.onResourceRequested = function (request) {
    //system.stderr.writeLine('= onResourceRequested()');
    //system.stderr.writeLine('  request: ' + JSON.stringify(request, undefined, 4));
  };
 
  page.onResourceReceived = function(response) {
    //system.stderr.writeLine('= onResourceReceived()' );
    //system.stderr.writeLine('  id: ' + response.id + ', stage: "' + response.stage + '", response: ' + JSON.stringify(response));
  };

  page.viewportSize = {
    width: width,
    height: height
  };

  page.onConsoleMessage = function(msg) {
    return console.log(msg);
  };
  
  page.onError = function (msg, trace) {
      console.log(msg);
      trace.forEach(function(item) {
          console.log('  ', item.file, ':', item.line);
      });
  }

  page.customHeaders = {
    "User-Agent" : "Phantom JS",
    "Accept-Language": "fr-fr",
    "Accept-Encoding": "deflate",
    "Connection" : "keep-alive"
  };
  
  page.onInitialized = function() {
    page.customHeaders = {
      "User-Agent" : "Phantom JS",
      "Accept-Language": "fr-fr",
      "Accept-Encoding": "deflate",
      "Connection" : "keep-alive"
    };
  };

  page.onResourceError = function(resourceError) {
    page.reason = resourceError.errorString;
    page.reason_url = resourceError.url;
  };

  page.onResourceReceived = function(response) {
    //console.log('Receive ' + JSON.stringify(response, undefined, 4));
  };
  
  page.open(url, function(status) {
    if (status !== "success") {
      console.log("Error opening url \"" + page.reason_url + "\": " + page.reason);
      console.log("Unable to open " + url + ' - status: ' + status);
      phantom.exit( 1 );
    } else {
      window.setTimeout((function() {
        page.render('captures/capture_' + Math.floor((Math.random()*100000)+1) + '.png');
        var result = page.evaluate(function() {
          var debug = false;
          var pattern = /((?:(?:USD|EUR|GBP|\$|€|£){1}(?:\ {0,3})(?:[0-9]+[\.|\,]?[0-9]*){1}(?:\ {0,3})){1}|(?:(?:[0-9]+[\.|\,]?[0-9]*){1}(?:\ {0,3})(?:USD|EUR|GBP|\$|€|£){1}){1})/;
          var attributes, el, elements, i, output, propertyName, rule, ruleList, rules, style, _i, _j, _k, _len, _ref1, _ref2;
          output = {
            url: location,
            retrieved_at: new Date,
            elements: [],
            pagetitle: '',
            imgs: []
          };
          
          var mergeNodes = function(a, b) {
              return [].slice.call(a).concat([].slice.call(b));
          };
          
          var strip = function(html) {
             var tmp = document.createElement("DIV");
             tmp.innerHTML = html;
             return tmp.textContent || tmp.innerText || "";
          };

          var offset = function(elem) {
            if(!elem) elem = this;

            var x = elem.offsetLeft;
            var y = elem.offsetTop;

            while (elem = elem.offsetParent) {
              x += elem.offsetLeft;
              y += elem.offsetTop;
            }

            return { left: x, top: y };
          };


          console.log('---->  plop');
          console.log(document.head.textContent);
          console.log(document.getElementsByTagName('title').length);
          console.log(document.getElementsByTagName('title')[0]);
          console.log(document.getElementsByTagName('title')[0].innerHTML);
          if(document.getElementsByTagName('title')[0].innerHTML != undefined) {
            console.log('---->  klop');
            output.pagetitle = document.getElementsByTagName('title')[0].innerHTML.trim();
          }

          console.log('---->  flop');

          var elements = mergeNodes(
                          mergeNodes(
                            mergeNodes(document.getElementsByTagName('div'), document.getElementsByTagName('span')), 
                            mergeNodes(document.getElementsByTagName('p'), document.getElementsByTagName('a'))
                          ), 
                          mergeNodes(
                            mergeNodes(document.getElementsByTagName('b'), document.getElementsByTagName('strong')),
                            document.getElementsByTagName('li')
                          )
                        );


          for (_i = 0, _len = elements.length; _i < _len; _i++) {
            el = elements[_i];
            
            var html = el.innerHTML.replace('&nbsp;', ' ');

            if(el.className == 'product_price') debug = true; 
            else debug = false;
            if(debug) console.log('### debug ' + el.nodeName + '.' + el.className + ' --- ' + html);

            if(strip(html).length < 200) {
              if(debug) console.log('### debug Length OK');            
              var matches = strip(html).match(pattern);

              if(matches != null) {
                if(debug) console.log(' >> MATCH');
                style = window.getComputedStyle(el);
                attributes = {};
                for (i = _j = 0, _ref1 = style.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
                  propertyName = style.item(i);

                  //console.log(propertyName + ': ' + style.getPropertyValue(propertyName));

                  if(propertyName == 'font-size' || propertyName == 'font-weight' || propertyName == 'visibility' || propertyName == 'color' || propertyName == 'display' || propertyName == 'text-decoration') {
                    attributes[propertyName] = style.getPropertyValue(propertyName);
                    //console.log(propertyName);
                  }
                }

                attributes['font-weight'] = attributes['font-weight'].replace('normal', '400').replace('bold', '700');
                attributes['font-size'] = parseInt(attributes['font-size'].replace('px', ''));
                //debug = true;
                var price = parseFloat(matches[0].replace(',', '.').replace('EUR', '').replace('€', '').replace('$', '').replace('USD', '').replace('GBP', '').replace('£', ''));
                if(debug) console.log('### debug ' + el.nodeName + '.' + el.className + ' - price: ' + price + ' - top: ' + offset(el).top + ' - text-decoration: ' + attributes['text-decoration']);
                if(price > 0 && attributes['text-decoration'] != 'line-through') {
                  if(el.offsetWidth > 0 && el.offsetHeight > 0 && offset(el).top < 800 && offset(el).top > 170) {
                    if(debug) console.log('### debug - font-size: ' + attributes['font-size'] + " - height: " + el.offsetHeight);

                    ruleList = el.ownerDocument.defaultView.getMatchedCSSRules(el, '') || [];
                    rules = [];
                    for (i = _k = 0, _ref2 = ruleList.length; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; i = 0 <= _ref2 ? ++_k : --_k) {
                      rule = ruleList[i];
                      rules.push({
                        selectorText: rule.selectorText,
                        parentStyleSheet: rule.parentStyleSheet.href
                      });
                    }

                    output.elements.push({
                      id: el.id,
                      className: el.className,
                      nodeName: el.nodeName,
                      offsetHeight: el.offsetHeight,
                      offsetWidth: el.offsetWidth,
                      offsetTop: offset(el).top,
                      offsetLeft: offset(el).left,
                      computedStyle: attributes,
                      price: matches[0]
                    });
                  }
                }
              }
            }
          }

          ///////////////////////////////////////////////////////////////
          /////////////////////// IMAGE DETECTION ///////////////////////
          ///////////////////////////////////////////////////////////////
          var images = document.getElementsByTagName('img');

          for (_i = 0, _len = images.length; _i < _len; _i++) {
            el = images[_i];
            var surface = el.offsetHeight * el.offsetWidth;
            var ratio   = el.offsetHeight / el.offsetWidth;
            //console.log(el.src + ' - h:' + el.offsetHeight + ' - w: ' + el.offsetWidth + ' - id: ' + el.id);
            if(surface > 7000 && ratio < 4 && ratio > 0.25) {
              //console.log(' --> enter');
              style = window.getComputedStyle(el);
              attributes = {};
              for (i = _j = 0, _ref1 = style.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
                propertyName = style.item(i);

                if(propertyName == 'height' || propertyName == 'width' || propertyName == 'offsetWidth' || propertyName == 'offsetHeight') {
                  attributes[propertyName] = style.getPropertyValue(propertyName);
                }
              }
              ruleList = el.ownerDocument.defaultView.getMatchedCSSRules(el, '') || [];
              rules = [];
              for (i = _k = 0, _ref2 = ruleList.length; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; i = 0 <= _ref2 ? ++_k : --_k) {
                rule = ruleList[i];
                rules.push({
                  selectorText: rule.selectorText,
                  parentStyleSheet: rule.parentStyleSheet.href
                });
              }
              output.imgs.push({
                id: el.id,
                className: el.className,
                nodeName: el.nodeName,
                src: el.src,
                surface: surface,
                offsetHeight: el.offsetHeight,
                offsetWidth: el.offsetWidth,
                offsetTop: offset(el).top,
                offsetLeft: offset(el).left,
                computedStyle: attributes,
              });
            }
          }

          output.elements.sort(function (a, b) {
            if(a.computedStyle['font-size'] > b.computedStyle['font-size']) {
              return -1;
            } else if(a.computedStyle['font-size'] < b.computedStyle['font-size']) {
              return 1;
            } else {
              if(a.computedStyle['font-weight'] > b.computedStyle['font-weight']) {
                return -1;
              } else {
                return 1;
              }
            }
          });

          output.imgs.sort(function (a, b) {
            if(a.surface > b.surface) {
              return -1
            } else if(a.surface < b.surface) {
              return 1;
            } else {
              if(a.offsetTop < b.offsetTop) {
                return -1;
              } else {
                return 1;
              }
            }
          });

          //console.log(JSON.stringify(output.imgs, null, 4));
          //return console.log(JSON.stringify(output, null, 5));
          /*var imgs_array = ''; 
          for(i=0; i < output.imgs.length; i++) {
            imgs_array+='{"src": "' + output.imgs[i].src + '", "height":"' + output.imgs[i].offsetHeight + '", "width":"' + output.imgs[i].offsetWidth + '"}, ';
          }*/

          if(output.elements[0] != undefined && output.elements[0].price != undefined) {
            var price = output.elements[0].price.replace('€', 'EUR');
          } else {
            var price = null;
          }

          var result = {
            price: price,
            images: output.imgs,
            title: output.pagetitle
          }

          return result;
          //return console.log('@@@{"price":"' + output.elements[0].price.replace('€', 'EUR') + '", "images": [' + imgs_array.substr(0, imgs_array.length-2) + '], "title":"' + output.pagetitle + '"}@@@');
        });
        return window.setTimeout((function() {
          console.log('@@@' + JSON.stringify(result) + '@@@');
          return phantom.exit();
        }), 200);

    }), 300);

      
    }
  });
}).call(this);
