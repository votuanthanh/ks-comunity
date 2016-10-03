$(window).load(function() {
	$('#slider').nivoSlider({
		effect: 'fold', // Specify sets like: 'fold,fade,sliceDown'
			slices: 12, // For slice animations
			boxCols: 12, // For box animations
			boxRows: 4, // For box animations
			animSpeed: 100000, // Slide transition speed
			pauseTime: 300000, // How long each slide will show
			startSlide: 0, // Set starting Slide (0 index)
			directionNav: false, // Next & Prev navigation
			controlNav: false, // 1,2,3... navigation
			controlNavThumbs: false, // Use thumbnails for Control Nav
			pauseOnHover: false, // Stop animation while hovering
			manualAdvance: false, // Force manual transitions
			prevText: 'Prev', // Prev directionNav text
			nextText: 'Next', // Next directionNav text
			randomStart: false, // Start on a random slide
			beforeChange: function(){}, // Triggers before a slide transition
			afterChange: function(){}, // Triggers after a slide transition
			slideshowEnd: function(){}, // Triggers after all slides have been shown
			lastSlide: function(){}, // Triggers when last slide is shown
			afterLoad: function(){} // Triggers when slider has loaded
	});
});
//	$("#rslides").responsiveSlides({
//		auto: true,             // Boolean: Animate automatically, true or false
//		speed: 500,            // Integer: Speed of the transition, in milliseconds
//		timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
//		pager: false,           // Boolean: Show pager, true or false
//		nav: false,             // Boolean: Show navigation, true or false
//		random: false,          // Boolean: Randomize the order of the slides, true or false
//		pause: false,           // Boolean: Pause on hover, true or false
//		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
//		prevText: "Previous",   // String: Text for the "previous" button
//		nextText: "Next",       // String: Text for the "next" button
//		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
//		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
//		manualControls: "",     // Selector: Declare custom pager navigation
//		namespace: "rslides",   // String: Change the default namespace used
//		before: function(){},   // Function: Before callback
//		after: function(){}     // Function: After callback
//	});	
	
//	$("#rslides").camera({
//		animation: "random"
//	});
//});

//$(document).ready(function() {
//	$("#owl").owlCarousel({
//		items: 4,
//		itemsDesktopSmall: [960, 4],
//		itemsDesktop: [
//			[0, 2],
//			[780, 4],
//			[960, 4]
//		],
//		autoPlay: 2000,
//		pagination: false
//	});
//});

$(function(){
	$(".acrdblk").hide();
	$(".menuhead").click(function(){
//		$("span.menuhead").not(this).next().hide("slow");
		$(this).next().slideToggle("slow");
	});
});

$(function(){
        $(".menuhead").rotate({
    bind:
        {
            mouseover : function() {
                $(this).children("img").rotate({animateTo: 90, duration: 300})
            },
            mouseout : function() {
                $(this).children("img").rotate({animateTo: 0})
            }
        }
    });
});