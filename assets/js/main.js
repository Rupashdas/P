(function ($) {
    "use strict";

    jQuery(document).ready(function($){
    	$(".menu-toggle").on('click', function(){
    		$(".menu-area").toggleClass('show-menu');
    		$(this).toggleClass('close');
    		return false;
    	});

    	$( '.teletype-text-wrap' ).teletype( {
			text: [ 'Front-End Developer', 'Freelancer', 'Web Developer' ],
			typeDelay: 5,
			smoothBlink: true,
			delay: 1000,
		} );

		$(".main-menu li a, .boxed-button-wrap a, .intro a").on('click', function() {
			if (this.hash !== "") {
				var hash = this.hash;
				$('.fullpage, .main-menu li a').removeClass('active');
				$(this).addClass('active');
				$(hash).addClass('active');
				return false;
			};
		});

		
		$("[href= '#skill']").on('click', function(){
			$(".skill-section").find(".single-progressBar").each(function() {
				  $(this).find('.progress').delay(500).animate({
				        'width' : $(this).attr('data-width') + "%"
					}, 3000);
				    // Custom Counter
					$('.progress-count').each(function () {
					    $(this).prop('Counter',0).animate({
					        Counter: $(this).text()
					    }, {
					        duration: 3000,
					        easing: 'swing',
					        step: function (now) {
					            $(this).text(Math.ceil(now));
					        }
					    });
					});
				});

		});



        $(".project-title li").on('click',  function(){
            var selector = $(this).attr('data-filter');
            $(".project-lists").isotope({
                filter: selector
            });
        });

        $(".project-title li").on('click', function(){
            $(".project-title li").removeClass("active");
            $(this).addClass("active");
        });

		
		
		
        
    });


    jQuery(window).load(function(){

       
		
        $(".project-title li").on('click',  function(){
            var selector = $(this).attr('data-filter');
            $(".project-lists").isotope({
                filter: selector
            });
        });

    });


}(jQuery)); 

















