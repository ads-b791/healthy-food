$(function () {

	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		nextArrow: '<button class="slick-arrow slick-next"><img src="img/next.svg" alt=""></button>',
		prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.svg" alt=""></button>',
		autoplay: true,
		responsive: [
			{
				breakpoint: 801,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			},
		]
	});

	//$('.menu__btn').on('click', function () {
	//	$('.menu__list').toggleClass('menu__list--active')
	//});


});