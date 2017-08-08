;(function($){


    // select-box

    $.fn.selectbox = function() {
        var selectDefaultHeight = $('#selectBox').height();
        var rotateDefault = "rotate(0deg)";



            $('#selectBox > p.value-tag').click(function() {
                 var currentHeight = $('#selectBox').height();

                 if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
                     $('#selectBox').height("150px");

                 }

                if (currentHeight >= 100) {
                    $('#selectBox').height(selectDefaultHeight);
                }
            });

            $('li.select-menu-box__option').click(function() {
                $('#selectBox').height(selectDefaultHeight);
                $('p.value-tag').text($(this).text());
            });
    };
     $("#selectBox").selectbox();


	 var body = document.body,
        btn = body.querySelector('.ba-toggle'),
        overlay = body.querySelector('.ba-overlay');

    btn.onclick = function(){
    	body.classList.toggle('ba-menu-open');
    }
    overlay.onclick = function(){
    	body.classList.toggle('ba-menu-open');
    }


    $('.ba-slider').slick({
    	arrows: false,
        infinite: false
    });
    $('.ba-slider__dots').slick({
        arrows: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3
    });
    $('.ba-slider__dot').on('click', function(e){
    	e.preventDefault();
    	var $index = $(this).data('slide');
    	$('.ba-slider').slick('slickGoTo', $index);
        $('.ba-slider__dot.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.ba-slider-markets').slick({
    	arrows: false,
    	dots: false,
    	variableWidth: true,
    	infinite: false
    });

    $('.ba-market-slider').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slide: '.ba-market-slide',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                }
            }
        ]
    });

    $('.ba-foodcourt-slider').slick({
        arrows: false,
        infinite: false,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 2
    });
    $('.ba-foodcourt-image-slider').slick({
        arrows: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4
    });

    $(window).load(function(){
		var mapDiv = $('#map')[0];
		var coordinates = {lat: 50.4600094, lng: 30.4473126};
		var map = new google.maps.Map(mapDiv, {
	  		center: coordinates,
	  		zoom: 18,
	  		mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
	  	});
  		var marker1 = new google.maps.Marker({
			position: {lat: 50.4600094, lng: 30.4473126},
			map: map,
			title: 'Hello World!'
  		});



	});

})(jQuery);
