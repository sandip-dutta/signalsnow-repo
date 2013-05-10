$(function(){
	$('.menuLink').click(function(){
		$('.mainMenu').stop().slideToggle();
	});
	// Bottom Banner 
	$('div.bottomBannerPanel ul li:last-child').addClass('noMargin');
	$('div.featuredProPanel:last-child').addClass('noRightMargin');
	// Tooltip
	$('div.sticker a').mouseenter(function(){		  
		$(this).next('.tipHolder').stop().fadeIn();
	});
	$('div.sticker a').mouseleave(function(){		  
		$(this).next('.tipHolder').stop().fadeOut();
	});
	// Cart Remove
	$('.cartTable').find('.btnRemove').click(function(){
		var trLength = $('.cartTable').find('tr').length
		if(trLength == 2){
			$('.cartTable').remove();
			$('.cartContainer').children('.cartText').fadeIn();
		}else{
			$(this).parent().parent().remove();	
		}
									  
	});
	
	// Team Member Thumb
	$('.smallThumb').find('a:last-child').children('img').addClass('noMrgn');
	
	// popup Modal
	$('.selectBoxArea > select').each(function(){
	$(this).change(function(){
		var selectedOption = $('select option:selected').text();
		if(selectedOption.search("Select") >=0){
			$('.addToCart').attr('data-target','#myModal');	 
		}
		else{
			$('.addToCart').removeAttr('data-target');
			$('.addToCart').click(function(){
				$(location).attr('href','cart.html')										   
			});
			
		}
	});											   
		
	});
	
	
	
});