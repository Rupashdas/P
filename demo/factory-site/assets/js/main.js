(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $(".slider-area").owlCarousel({
            items: 1,
            autoplay: true,
            nav: false,
            dots: true,
            loop: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
        });
      $(".logo-carousel").owlCarousel({
            items: 5,
            autoplay: false,
            nav: false,
            dots: false,
            loop: true,
            margin: 30,
        });
      


    });


    jQuery(window).load(function(){


    });


}(jQuery));	