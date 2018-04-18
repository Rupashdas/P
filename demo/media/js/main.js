(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	new WOW().init();
	
	var headerheight = $(".header").height();
	
	$(window).scroll(function() {    
		var scrollUp = $(window).scrollTop();

		if (scrollUp >= headerheight) {
			$(".navbar-default").addClass("fixed");
		} else {
			$(".navbar-default").removeClass("fixed");
		}
	});
	
	var footerheight = $(".footer").height();
	
	$(".sticky-footer-wrapper").css('margin-bottom', footerheight + 'px');
	

    });


    jQuery(window).load(function(){
	 
	 
	 
        
    });


}(jQuery));	