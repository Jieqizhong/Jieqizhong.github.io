$(function() {
	var num1 = 0;
	var num2 = 0;
	var num3 = 0;
	var num4 = 0;
	var num5 = 0;
	var num6 = 0;
	var timer;
	timer = setInterval(function() {
		if(num1 < 80) {
			num1 += 80 / 100;
			num2 += 85 / 100;
			num3 += 75 / 100;
			num4 += 85 / 100;
			num5 += 75 / 100;
			num6 += 80 / 100;
			$('.progress-bar').eq(0).css("width", "" + num1 + "%");
			$('.progress-bar').eq(1).css("width", "" + num2 + "%");
			$('.progress-bar').eq(2).css("width", "" + num3 + "%");
			$('.progress-bar').eq(3).css("width", "" + num4 + "%");
			$('.progress-bar').eq(4).css("width", "" + num5 + "%");
			$('.progress-bar').eq(5).css("width", "" + num6 + "%");
			$('.progress-bar').eq(0).html('' + parseInt(num1) + '%');
			$('.progress-bar').eq(1).html('' + parseInt(num2) + '%');
			$('.progress-bar').eq(2).html('' + parseInt(num3) + '%');
			$('.progress-bar').eq(3).html('' + parseInt(num4) + '%');
			$('.progress-bar').eq(4).html('' + parseInt(num5) + '%');
			$('.progress-bar').eq(5).html('' + parseInt(num6) + '%');
		} else {
			clearInterval(timer)
		}
	}, 100)

	//让每个元素有个过渡时间
	$(':visible').css('transition', '0.5s');
	
	//点击nav效果
	$('.dropdown div').on('click', function() {

		if($(this).attr('aria-expanded') == 'true') {
			$(this).removeClass('nav_active');
		} else {
			$(this).addClass('nav_active');
		}
	})

	$(window).on('click', function() {

		if($('.dropdown div').attr('aria-expanded') == 'true') {
			$('.dropdown div').addClass('nav_active');
		} else {
			$('.dropdown div').removeClass('nav_active');
		}

	});

});