var loaded_scripts = new Array();
function ajax_script(scripts) {
    $.each(scripts, function(index, value) {
        if (!value.match(/^\//) && !value.match(/^http/)) {
            value = '/js/jquery/'+value;
        }
        if (loaded_scripts[value] == undefined) {
            loaded_scripts[value] = true;
            $.ajax({
                url: value,
                dataType: 'script',
                cache: true,
                async: false
            });
        }
    });
}

function get_script(dom, scripts, callback) {
    if ($(dom).length > 0) {
        scripts = new Array(scripts);
        ajax_script(scripts);
    }
}


$(document).ready(function(){
    if(jQuery().bxSlider) {
        $('#slider1').bxSlider({
                mode: 'horizontal',
                prevText: '',
                nextText: '',
                auto: true,
                pause: 5000,
                speed: 600,
                autoControls: true,
                pager: true
        });
    }

    //$("#guide_tabs").idTabs();
    
    get_script('#guide_tabs', 'jquery.idTabs.modified.js', function(){
	    $("#guide_tabs").idTabs();
    });

});
