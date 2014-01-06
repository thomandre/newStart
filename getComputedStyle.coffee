[url, height, width, tagname] = phantom.args
 
console.log("url #{url}, height #{height}, width #{width}, tagname #{tagname}")

page = require('webpage').create()
page.viewportSize = 
  width: width
  height: height
 
page.onConsoleMessage = (msg) ->
  console.log(msg);
 
page.open url, (status) ->
  if status != "success"
    console.log "Unable to open #{url}"
  else
    page.evaluate(() ->
      output =
        url: location
        retrieved_at: new Date
        elements: []
      elements = document.getElementsByTagName(tagname)
      console.log("elements #{elements}")
      for el in elements
        style = window.getComputedStyle(el)
        attributes = {}
        for i in [0...style.length]
          propertyName = style.item(i)
          attributes[propertyName] = style.getPropertyValue(propertyName)
 
        ruleList = el.ownerDocument.defaultView.getMatchedCSSRules(el, '') || []
        rules = []
        for i in [0...ruleList.length]
          rule = ruleList[i]
          rules.push
            selectorText: rule.selectorText
            parentStyleSheet: rule.parentStyleSheet.href
 
        output.elements.push(
          id: el.id
          className: el.className
          nodeName: el.nodeName
          offsetHeight: el.offsetHeight
          offsetWidth: el.offsetWidth
          offsetTop: el.offsetTop
          offsetLeft: el.offsetLeft
          computedStyle: attributes
          styleRules: rules
        )
      console.log JSON.stringify(output, null, 4)
    )
    window.setTimeout (() ->
      phantom.exit()
    ), 200

