//**************************************************************
// jQZoom allows you to realize a small magnifier window,close
// to the image or images on your web page easily.
//
// jqZoom version 1.2
// Author Doc. Ing. Renzi Marco(www.mind-projects.it)
// Released on Dec 05 2007
// i'm searching for a job,pick me up!!!
// mail: renzi.mrc@gmail.com
//**************************************************************

(function($) {
        $.fn.jqueryzoom = function(options) {
            var settings = {
                xzoom: 200,         //zoomed width default width
                yzoom: 200,         //zoomed div default width
                offset: 10,         //zoomed div default offset
                position: "right"   //zoomed div default position,offset position is to the right of the image
            };

            if(options)
                $.extend(settings, options);

            var noalt ='';

            $(this).click(function() {
                var imageLeft = $(this).get(0).offsetLeft;
                var imageTop =  $(this).get(0).offsetTop;
                // Xperos Hack
                var imageAbsLeft = $(this).offset().left;
                var imageAbsTop = $(this).offset().top;
                // Xperos Hack End
                var imageWidth = $(this).get(0).offsetWidth;
                var imageHeight = $(this).get(0).offsetHeight;

                /* hack */
                /* to remove hack replace imageLeft_move by  imageLeft and imageTop_move by imageTop and delete the following two lines*/
                var imageLeft_move = 480;
                var imageTop_move = 230;

                noalt = $(this).attr("alt");
                var bigimage = noalt;
                //$(this).attr("alt", '');

                if($("div.zoomdiv").get().length == 0)
                    $(this).after("<div class='zoomdiv'><img class='bigimg' src='"+bigimage+"'/></div>");

                if(settings.position == "right")
                    leftpos = imageLeft + imageWidth + settings.offset;
                else
                    leftpos = imageLeft - settings.xzoom - settings.offset;

                $("div.zoomdiv").css({top: imageTop,left: leftpos});
                $("div.zoomdiv").width(settings.xzoom);
                $("div.zoomdiv").height(settings.yzoom);
                $("div.zoomdiv").show();

                var scalex = false;
                var scaley = false;

                var bigimage = $(".bigimg").get(0);
                var bigwidth = bigimage.offsetWidth;
                var bigheight = bigimage.offsetHeight;
                if (bigwidth) {
                    scalex = Math.round(bigwidth/imageWidth) ;
                    scaley = Math.round(bigheight/imageHeight);
                }

                // Nateev optimizations
                $(document.body).mousemove(function(e) {
                    var zoomdiv = $("div.zoomdiv").get(0);

                    if(!scalex) {
                        var bigimage = $(".bigimg").get(0);
                        var bigwidth = bigimage.offsetWidth;
                        var bigheight = bigimage.offsetHeight;
                        scalex = Math.round(bigwidth/imageWidth) ;
                        scaley = Math.round(bigheight/imageHeight);
                    }

                    zoomdiv.scrollTop = (e.pageY - imageAbsTop - (settings.yzoom/scaley)/2) * scaley;
                    zoomdiv.scrollLeft = (e.pageX - imageAbsLeft - (settings.xzoom/scalex)/2) * scalex;
                });
            });
            $(this).mouseout(function() {
                //$(this).attr("alt", noalt);
                $("div.zoomdiv").hide();
                $(document.body).unbind("mousemove");
                $(".lenszoom").remove();
                $("div.zoomdiv").remove();
            });
        }
})(jQuery);