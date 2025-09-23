(function ($) {
	"use strict"; // starts of use strict


	// slider js starts here

	$(".vertical-center").slick({
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	// slider js ends here

	// counter js starts here

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// counter js ends here

	// text animation js starts here

	$('.banner_text_animation').textyle({
		duration: 400,
		delay: 100,
		easing: 'swing',
		callback: function () {
			$(this).css({
				color: 'coral',
				transition: '1s',
			});
			$('.desc').css('opacity', 1);
		}
	});

	// text animation js ends here

	// back to top parts js starts here

	var btn = $('#button');
	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});

	// back to top parts js ends here
	
	// navbar parts js ends here
	
	window.onscroll = function () {
		myFunction()
	};

	var navbar = document.getElementById("header");
	var sticky = navbar.offsetTop;

	function myFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky");
		}
	}	
	
	// navbar parts js ends here


})(jQuery); //end of use strict
