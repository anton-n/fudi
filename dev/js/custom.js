$(window).on('load', function() { 
	$(".preloader_inner").fadeOut(); 
	$(".preloader").delay(500).fadeOut("slow"); 
});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
	items: 1,
	smartSpeed: 800,
	dots: true,
	nav: false,
	loop: true,
	autoplay: false
	});

	$("#my-menu").mmenu({
			offCanvas: {
				offCanvas: false,
				position: "right",
				zposition: "front"
			},
			"extensions": [
				"pagedim-black"
			],
			navbar: {
				title: "My custom title"
			}
			});
			var $icon = $("#my-icon");
			var API = $("#my-menu").data( "mmenu" );

			$icon.on( "click", function() {
				API.open();
			});
			API.bind( "open:finish", function() {
				setTimeout(function() {
					$icon.addClass( "is-active" );
				}, 0);
			});
			API.bind( "close:finish", function() {
				setTimeout(function() {
					$icon.removeClass( "is-active" );
				}, 0);
			});
})


