$('.settings').click(function (event) {
    event.preventDefault();
    $('.header .ddown-menu').toggle();
    $(".header .ddown-menu").bind("clickoutside", function(event){
        if($(event.target).attr('class') != 'glyphicon glyphicon-play' && $(event.target).attr('class') != 'settings') {
            event.preventDefault();
            $('.header .ddown-menu').hide();
            $('.header .ddown-menu').unbind("clickoutside");                            
        }
    });
});

$('#logout').click(function (event) {
    event.preventDefault();
    fb_logout();
});

$('#bugReport').click(function (event) {
    event.preventDefault();
    $('#bugReportModal').modal('show');
});

$('#bugReportSend').click(function () {
    $.ajax({
        url: $('#path_bug_report').val(),
        data: 'conditions=' + $('#conditions').val() + '&causes=' + $('#causes').val() + 
            '&type=' + $('#type').val() + '&priority=' + $('#priority').val(),
        success: function (data) {
            $('#bugReportModal').modal('hide');
            $('.alert-notice').html('Merci pour votre aide !');
            $('.alert-notice').show();
        }
    });
});

function fb_logout(){
    FB.getLoginStatus(function () {
        FB.logout(function(response) {
            return;
        });
    });
}

function fb_login(){
    goLogIn();
}

function fb_connect(){
    FB.login(function(response) {
   // handle the response
 }, {scope: 'email,user_likes,user_birthday'});
}

function onFbInit(FB) {
    //console.log(FB);
    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.Event.subscribe('auth.login', function(response) {
            if (response.session || response.authResponse) {
                setTimeout(goLogIn, 500);
            }
        });
        FB.Event.subscribe('auth.logout', function(response) {
            setTimeout(goLogOut, 500);
        });

        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            $('#login').show();
          } else if (response.status === 'not_authorized') {
            $('#connect').show();
          } else {
            $('#connect').show();
          }
        });
    }
}

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all/debug.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Here we run a very simple test of the Graph API after login is successful. 
// This testAPI() function is only called in those cases. 
function testAPI() {
    //console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        //console.log('Good to see you, ' + response.name + '.');
        $('#disconnect').show();
        $('#connect').show();
    });
}