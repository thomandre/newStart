$(document).ready(function() {
	function scrape() {
		$.ajax({
			url: $("#path_scrape").val(),
			data: "url=" + encodeURIComponent($("#url").val()),
			success: function (data) {
				var div = "<div id='product'>";
				$(data.images).each(function (index, element) {
					//console.log(element);
					if(index == 0) {
						div+= "<img src='" + element['image'] + "' class='preview' id='main'/>";
					} else {
						div+= "<img src='" + element['image'] + "' class='preview' />";
					}
					
				});
				div+= "<h3>" + data.title + "</h3>";
				div+= "</div>";
				$("#completeContainer #product").remove();
				$("#complete").prepend(div);
				$("#completeContainer").show();

				$('#product img').resizecrop({
				  width:200,
				  height:200,
				  vertical:"top"
				});

				$('.preview').hide();
				$('#main').show();
			},
			beforeSend: function () {
				$("#go_btn span").addClass('glyphicon');
				$("#go_btn span").addClass('glyphicon-refresh');
				$("#completeContainer").hide();
			},
			complete: function () {
				$("#go_btn span").removeClass('glyphicon');
				$("#go_btn span").removeClass('glyphicon-refresh');
			}
		});
	}

	$('.product img').resizecrop({
	  width:180,
	  height:220,
	  vertical:"top"
	});

	$('#url').keyup(scrape);
	$('#go_btn').click(scrape);

	$('#next_btn').click(function () {
		var current = $("#main");
		current.attr('id', '');
		current.hide();
		if(current.next("span.preview").length > 0) {
			current.next().attr('id', 'main');
			current.next().show();
		} else {
			var images = $("#product span");
			$(images[0]).attr('id', 'main');
			$(images[0]).show();
		}
	});

	$('#prev_btn').click(function () {
		var current = $("#main");
		current.attr('id', '');
		current.hide();
		if(current.prev("span.preview").length > 0) {
			current.prev().attr('id', 'main');
			current.prev().show();
		} else {
			var images = $("#product span");
			$(images[images.length-1]).attr('id', 'main');
			$(images[images.length-1]).show();
		}
	});

	$("#cancel_btn").click(function () {
		$("#completeContainer").hide();
	});

	$("#save_btn").click(function () {
		$.ajax({
			url: $("#path_product_add").val(),
			data: "url=" + encodeURIComponent($("#url").val()) + 
				  "&img=" + encodeURIComponent($("#main img").attr('src')) + 
				  "&title=" + encodeURIComponent($("#complete h3").html()),
			success: function (data) {
				
			},
			beforeSend: function () {
				$("#save_btn span").addClass('glyphicon');
				$("#save_btn span").addClass('glyphicon-refresh');
			},
			complete: function () {
				$("#save_btn span").removeClass('glyphicon');
				$("#save_btn span").removeClass('glyphicon-refresh');
				$("#completeContainer").hide();				
			}
		});
	});



});