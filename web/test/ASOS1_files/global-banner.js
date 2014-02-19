/* Owner ASOS.com*/
/* Global banner JS*/

var gbFade = function($element,action) {
		var opacity = 1;
		if(action == 'over') {
			opacity = 0.5;
		}
		$element.stop(true).animate({'opacity':opacity},{duration:300});
	};

$('#globalBanner,#globalBanner-xmas').on('mouseover','.gb-fade',function(){gbFade($(this),'over');})
			.on('mouseout','.gb-fade',function(){gbFade($(this),'out');});

//$culprit=$("#globalBanner.us li::nth-child(3) a.link strong").text("STUDENTS GET 25% OFF, 48 HOURS ONLY!");

$(document).ready(function(){
                                $('.lang-en.region-gb .dd-mens .dd-tdy h3').text('#TONIGHTIS');
                                $('.lang-en.region-us .dd-mens .dd-tdy h3').text('#TONIGHTIS');
                                $('.lang-en.region-au .dd-mens .dd-tdy h3').text('#TONIGHTIS');
                                $('.lang-de.region-de .dd-mens .dd-tdy h3').text('#TONIGHTIS');
                                $('.lang-es.region-es .dd-mens .dd-tdy h3').text('#ESTANOCHEES');
                                $('.lang-it.region-it .dd-mens .dd-tdy h3').text('#STASERAÈ');
                                $('.lang-ru.region-ru .dd-mens .dd-tdy h3').text('#СЕГОДНЯ');
                                $('.lang-fr.region-fr .dd-mens .dd-tdy h3').text('#TONIGHTIS…');

// $('body.au #globalBanner-xmas .left-box .copy strong').text('FURTHER REDUCTIONS: UP TO 50% OFF SALE *');
});
