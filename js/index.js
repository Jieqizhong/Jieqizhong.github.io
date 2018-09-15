$(function() {


	//控制header_word的margin
	
	$(window).on('resize',()=>{
		fnword();
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

	function fnword(){
		
		$('.header_word').css({'margin-bottom':$('.header_word').parent().width()*200/1170,'margin-top':$('.header_word').parent().width()*200/1710});
		
		if($('.header_word').parent().width()<768){
			$('.header_word').css({
				'margin-bottom':$('.header_word').parent().width()*80/1170,
				'margin-top':$('.header_word').parent().width()*80/1170,
				'width': 600/768*$('.header_word').parent().width(),
      			 'height': 270/768*$('.header_word').parent().width(),
      			'padding': 50/768*$('.header_word').parent().width(),
      			 'font-size': 40/768*$('.header_word').parent().width()
				
			})
		}
		else if($('.header_word').parent().width()<480){
			$('.header_word').css({
				'margin-bottom':$('.header_word').parent().width()*50/1170,
				'margin-top':$('.header_word').parent().width()*50/1170,
			})
		}
		else{
			$('.header_word').css({
				'width': 600,
      			'height': 270,
      			'padding': 50,
      			'font-size': 40
			})
		}
	}
	
});