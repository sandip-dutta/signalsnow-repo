var winWidth = $(window).width();
$(function(){
	menuHandeler()
	
});


function menuHandeler(){
	winWidth = $(window).width();
	if(winWidth <= 837){
		// Firt Level
		$(".mainMenu").children('li').unbind('hover');
		$(".mainMenu").children('li').children('a').bind('click',function(){
			$(this).next(".sub-menu").stop().slideToggle();
			if($(this).next(".sub-menu").length>0)
			return false;
		});
		// Second Level
		$(".sub-menu").children('li').unbind('hover');
		$(".sub-menu").children('li').children('a').bind('click',function(){
			$(this).next(".sub-menu").stop().slideToggle();
			if($(this).next(".sub-menu").length>0)
			return false;
		});
	} else {
		$(".mainMenu").children('li').children('a').unbind('click');
		$(".sub-menu").children('li').children('a').unbind('click');
		$(".mainMenu > li").mouseenter(function(){
			$(this).children(".sub-menu").removeAttr('style').slideDown();
			$(this).children("a").addClass("active");
		});
		$(".mainMenu > li").mouseleave(function(){
			$(this).children(".sub-menu").removeAttr('style').slideUp();									
			$(this).children("a").removeClass("active");
		});
		
		$(".sub-menu > li").mouseenter(function(){
			$(this).children(".sub-menu").removeAttr('style').slideDown(500);
			$(this).children("a").addClass("active");
		});
		$(".sub-menu > li").mouseleave(function(){
			$(this).children(".sub-menu").removeAttr('style').slideUp(500);									
			$(this).children("a").removeClass("active");
		});
		
		
	}
}


$(window).resize(function(){
	menuHandeler()
})