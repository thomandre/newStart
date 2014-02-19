// ID to persist across sessions
(function() {
    if (!bt_cookie('btID')) {
        var date = new Date();
        date.setTime(date.getTime()+(30*86400000));
        var expires = date.toGMTString();
        var domain = window.location.hostname.indexOf('levi') > -1 ? '.levi.com' : '.dockers.com';
        document.cookie="btID=" + BrightTag.Random.integer(9999999999) + ";domain=" + domain + ";path=/;expires=" + expires;
    }
}())

// ID unique to each session
(function() {
    if (!bt_cookie('btIDsession')) {
        var domain = window.location.hostname.indexOf('levi') > -1 ? '.levi.com' : '.dockers.com';
        document.cookie="btIDsession=" + BrightTag.Random.integer(9999999999) + ";domain=" + domain + ";path=/;";
    }
}())