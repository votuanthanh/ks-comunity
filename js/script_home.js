//effect of menu navigation
$(document).ready(function(){
	var $dropdown;
	$('.dropdown ul').hide();
	$('.dropdown').hover(function() {
	    $dropdown = $(this).find('ul');
	    $dropdown.stop().slideDown(400);
	}, function() {
	    $dropdown.stop().slideUp(200);
	});
})
//scroll to Top
$("a[href='#top']").click(function() {
  	$("html, body").animate({ scrollTop: 0 }, "slow");
  	return false;
});


$(document).ready(function(){
	$("img.lazy").lazyload({
    	effect : "fadeIn"
	});
});
