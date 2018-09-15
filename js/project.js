$(function() {

	$(window).on('resize', () => {

		$('.da-thumbs div').each(function(i, elem) {
			$(elem).css('height', $(elem).parent().parent().height());
		});

	}).trigger('resize');
    
    
    //让每个元素有个过渡时间
	$(':visible').css('transition','0.5s');
	
	//点击nav效果
	$('.dropdown div').on('click',function(){
		
		if($(this).attr('aria-expanded')=='true'){
			$(this).removeClass('nav_active');
		}
		else{
			$(this).addClass('nav_active');
		}
	})
	
	$(window).on('click',function(){
		
		if($('.dropdown div').attr('aria-expanded')=='true'){
			$('.dropdown div').addClass('nav_active');
		}
		else{
			$('.dropdown div').removeClass('nav_active');
		}
		
	});
	

});