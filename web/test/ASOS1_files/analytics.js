(function(){var o,h,i,g;g={};function l(y){return(Object.prototype.toString.call(y)==="[object Array]");}function v(B,C){var A,z,D,y;if("function"!==typeof B){throw"InvalidArgument: bad queue handler";}if(!C){y=[];}else{if(!l(C)){throw"InvalidArgument: bad queue backlog";}else{y=C;}}z=y.length;for(A=0;A<z;A=A+1){B(y[A]);}this.push=function(E){B(E);};return this;}function p(A,y,z){if(A.addEventListener){A.addEventListener(y,z,false);}else{if(A.attachEvent){if("click"===y&&A.document){A=A.document;}A.attachEvent("on"+y,z);}}}function q(A,y,z){if(A.removeEventListener){A.removeEventListener(y,z,false);}else{if(A.detachEvent){if("click"===y&&A.document){A=A.document;}A.detachEvent("on"+y,z);}}}function n(A,C){var B,y,z;z=function(){if("complete"===A.readyState){y();}};y=function(){if(!B){B=true;q(A,"load",y);q(A,"readystatechange",z);C();}};B=false;p(A,"load",y);p(A,"readystatechange",z);}function a(A,C){var z,B,y;z=new Image(1,1);if("function"===typeof C){B=false;y=function(){if(!B){B=true;z.onerror=null;C();}};n(z,y);z.onerror=y;window.setTimeout(y,300);}z.src=A;}function k(y){var A,B,z;B=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;z={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};A=y.replace(B,function(C){var D=z[C];return typeof D==="string"?D:"\\u"+("0000"+C.charCodeAt(0).toString(16)).slice(-4);});return'"'+A+'"';}function f(B){var z,y,A;if(window.JSON&&window.JSON.stringify){return JSON.stringify(B);}z="{";A=0;for(y in B){if(B.hasOwnProperty(y)){if(A>0){z+=",";}z+=k(y)+":"+k(B[y].toString());A=A+1;}}z+="}";return z;}function m(y){return y+"&bust="+Math.round(Math.random()*99999999);}function s(A,y,z,B){g[A]=g[A]||{};g[A].url=y;g[A].referrer=z;if("function"===typeof B){B();}}function j(C,A,B,D){var z,y;z=f({Ba4:"tracking",Ba5:A,Ba6:B,Ba18:"PAGE_VIEW",Ba20:C,Ba26:"VDNASITETRACKING"});z='{"esVDNAAppUserActionEvent":['+z+"]}";y=m("//ev.visualdna.com/events?b=GenericApp_v_0.1&enc=json&e="+window.encodeURIComponent(z));a(y,D);}function r(D,C,A,B,E){var z,y;z=f({Ba4:"tracking",Ba5:A,Ba6:B,Ba18:"INSERTED_INTO_"+C.toUpperCase(),Ba20:D,Ba26:"VDNASITETRACKING"});z='{"esVDNAAppUserActionEvent":['+z+"]}";y=m("//ev.visualdna.com/events?b=GenericApp_v_0.1&enc=json&e="+window.encodeURIComponent(z));a(y,E);}function x(F,G,C,A,J,z,y,H,I){var E,B,D;D="<ts>"+Math.round(C.getTime()/1000)+"</ts><ad_size>"+A+"x"+J+"</ad_size><elements>"+z+"</elements>";D="<extradata>"+D+"</extradata>";E=f({Ba4:"adTargetingTag",Ba5:y,Ba6:H,Ba18:"AD_RECOMMENDATION",Ba20:F,Ba26:"AD",Ba27:G,Ba28:D});E='{"esVDNAAppUserActionEvent":['+E+"]}";B=m("//ev.visualdna.com/events?b=GenericApp_v_0.1&enc=json&e="+window.encodeURIComponent(E));a(B,I);}function t(E,z,D,A,C,F){var y,B;y="//e.visualdna.com/conversion?";y+="api_key="+window.encodeURIComponent(E);y+="&id="+window.encodeURIComponent(z);if(D){for(B in D){if(D.hasOwnProperty(B)&&!/^(api_key|id|url|referrer|)$/.test(B)){y+="&"+window.encodeURIComponent(B)+"="+window.encodeURIComponent(D[B].toString());}}}if(A){y+="&url="+window.encodeURIComponent(A);}if(C){y+="&referrer="+window.encodeURIComponent(C);}a(m(y),F);}function u(){var y,z;y=navigator.userAgent;z=y&&(!/AppleWebKit\/([^\s]*)/.test(y)&&!/Opera[\s\/]([^\s]*)/.test(y)&&(/MSIE\s([^;]*)/).test(y));return z;}function e(y){return y.split("#",1)[0];}function b(y,C){var z,B;B=window.location.href;B=e(B);function A(D){window.location=D.href;}y=y||window.event;z=y.target||y.srcElement;while(z&&z.tagName&&"BODY"!==z.tagName.toUpperCase()){if("A"===z.tagName.toUpperCase()&&z.href&&!/^#|^javascript:/.test(z.href)&&e(z.href)!==B){if(!u()&&y.preventDefault){y.preventDefault();j(C,z.href,g[C].url||window.location.href,A(z));}else{j(C,z.href,g[C].url||window.location.href);y.returnValue=true;return true;}}z=z.parentNode;}}h={};h.setContext=function(A,y,z){s(A,y,z);};h.trackFollowedLinksAsPageViews=function(z,y){p(y,"click",function(A){b(A,z);});};h.reportAdRecommendation=function(F,C,B,y,A,E,z,D){x(F,C,B,y,A,E,z||window.location.href,D||document.referrer);};h.reportPageView=function(A,y,z){y=y||g[A].url||window.location.href;if(!z&&""!==z){z=g[A].referrer||document.referrer;}j(A,y,z,function(){});};h.reportConversion=function(C,y,B,z,A){z=z||g[C].url||window.location.href;if(!A&&""!==A){A=g[C].referrer||document.referrer;}t(C,y,B,z,A,function(){});};function w(B){var z,A,y;if("object"===typeof B&&"string"===typeof B.apiKey){g[B.apiKey]=g[B.apiKey]||{};if(B.method&&"function"===typeof h[B.method]){z=[];z.push(B.apiKey);y=B.args&&B.args.length?B.args.length:0;for(A=0;A<y;A=A+1){z.push(B.args[A]);}h[B.method].apply(this,z);if("setContext"!==B.method){i(B.apiKey);}}}}i=(function(){var y;y={};function z(D){var C,A,B;A=window.location.href.toString();C=document.createElement("iframe");C.title="VisualDNA Analytics";C.width="0";C.height="0";C.style.display="none";C.setAttribute("aria-hidden","true");B="//w.visualdna.com/analytics/?api_key="+window.encodeURIComponent(D);if("undefined"===typeof window.postMessage||"undefined"===typeof JSON||"function"!==typeof JSON.parse){B+="&url="+window.encodeURIComponent(A)+(document.referrer?"&referrer="+window.encodeURIComponent(document.referrer):"");}else{B+="&post_message=1";}C.src=B;document.body.insertBefore(C,document.body.firstChild);}return function(A){if(y[A]){return;}else{if(document.readyState&&"complete"!==document.readyState){n(window,function(){z(A);});}else{z(A);}}y[A]=true;};}());function d(y){return y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");}function c(y){var B,A,z;y=y||window.event;A="w.visualdna.com";z=new RegExp("^https?:\\/\\/"+d(A)+"(:\\d+)?$");if(!z.test(y.origin)){return;}if("undefined"!==typeof JSON){try{B=JSON.parse(y.data);if(B&&B.type&&"IDENTITY_SYNC"===B.type&&B.apiKey&&g[B.apiKey]&&B.partner){r(B.apiKey,B.partner,g[B.apiKey].url||window.location.href,g[B.apiKey].referrer||document.referrer||"");}}catch(C){}}}p(window,"message",c);window.VDNA=window.VDNA||{};o=window.VDNA;o.queue=o.queue||[];if(l(o.queue)){o.queue=new v(w,o.queue);}}());