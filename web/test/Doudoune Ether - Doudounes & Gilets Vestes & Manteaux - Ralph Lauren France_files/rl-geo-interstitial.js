

var akam_user_country = 'FR';
var scriptPath = '/interstitial/scripts/rl-geo.js';

jQuery(document).ready(function () {

    jQuery.getScript(scriptPath, function () {
        rlGeo.init(document.domain);
    });

});