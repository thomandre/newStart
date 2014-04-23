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

$('#login').click(function () {
    if(navigator.userAgent.match(/(MSIE)/g)) {
        alert("Welovegifts n'est pas compatible avec Internet Explorer pour l'instant. Merci d'utiliser Firefox, Chorme ou Safari.");
    } else {
        window.location.href = $(this).attr('data-url');
    }
});

