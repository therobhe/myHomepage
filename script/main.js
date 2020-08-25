$(document).ready(function() {

    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});

    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){

        //store hash
        let target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});

	});

	/* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function() {

        $('#page-nav-wrapper').removeClass('fixed');

         let scrollTop = $(this).scrollTop();
         let topDistance = $('#page-nav-wrapper').offset().top;

         if ( (topDistance) > scrollTop ) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
         }
         else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
         }

    });
});
