$(function() {
	var num1 = 0;
	var num2 = 0;
	var num3 = 0;
	var num4 = 0;
	var timer;
	timer = setInterval(function() {
		if(num1 < 90) {
			num1 += 90 / 60;
			num2 += 92 / 60;
			num3 += 83 / 60;
			num4 += 86 / 60;
			$('.progress-bar').eq(0).css("width", "" + num1 + "%");
			$('.progress-bar').eq(1).css("width", "" + num2 + "%");
			$('.progress-bar').eq(2).css("width", "" + num3 + "%");
			$('.progress-bar').eq(3).css("width", "" + num4 + "%");
			$('.progress-bar').eq(0).html('' + parseInt(num1) + '%');
			$('.progress-bar').eq(1).html('' + parseInt(num2) + '%');
			$('.progress-bar').eq(2).html('' + parseInt(num3) + '%');
			$('.progress-bar').eq(3).html('' + parseInt(num4) + '%');
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