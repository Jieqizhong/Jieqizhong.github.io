$(function () {

	//让每个元素有个过渡时间
	$(':visible').css('transition', '0.5s');
	$('.experiences').eq(0).css({'transform':'rotateX(360deg)','top':0});
	$(window).on("scroll", () => {
		$('.experiences').each((i, elem) => {
			if ($(elem).offset().top < window.scrollY+650) {
				$(elem).css('transform','rotateY(360deg)')
				$(elem).animate({
					top:0
				},30)
			}
		})
	})

	//点击nav效果
	$('.dropdown div').on('click', function () {

		if ($(this).attr('aria-expanded') == 'true') {
			$(this).removeClass('nav_active');
		}
		else {
			$(this).addClass('nav_active');
		}
	})

	$(window).on('click', function () {

		if ($('.dropdown div').attr('aria-expanded') == 'true') {
			$('.dropdown div').addClass('nav_active');
		}
		else {
			$('.dropdown div').removeClass('nav_active');
		}

	});


});