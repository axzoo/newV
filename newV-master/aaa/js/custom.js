$(function(){
	'use strict';

/*--------------------------------------------------
    Initialize portfolio filter
    ---------------------------------------------------*/
	$('#portfolio-grid').mixItUp();

/*--------------------------------------------------
    Open video modal
    ---------------------------------------------------*/
	$('#popup-youtube').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
	});
	
/*--------------------------------------------------
    Page Scroll Features 
    ---------------------------------------------------*/
	smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });

$(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
            $('#header-nav').addClass('navbar-wooster');
        } else {
            $('#header-nav').removeClass('navbar-wooster');
        }
    });

});