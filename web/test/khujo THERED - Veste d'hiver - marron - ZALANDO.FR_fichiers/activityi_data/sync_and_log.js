// Queue for API calls
var _mstack = _mstack || [];

_mstack.push(function() {
  DELIVERY.id = '10a0b394-dacd-4148-a8b2-7702f0215cb2';
  DELIVERY.Supplier.sync([ 'google', 'yieldlab', 'adscale', 'rubicon', 'improvedigital', 'openx', 'pubmatic', 'appnexus']);
  
});

// Actually load the script needed to mark the user
(function() {
  var s = document.createElement('script');
  s.async = true;
  var h = (("https:" == document.location.protocol) ? "https://" : "http://");
  var k = Math.round(((new Date).getTime() / 1000 - 1356994800) / 86400);
  
  s.src = h + 'rtb.metrigo.com/assets/delivery/sync.js?' + k;
  var c = document.getElementsByTagName('script')[0];
  c.parentNode.insertBefore(s, c);
})();
  
