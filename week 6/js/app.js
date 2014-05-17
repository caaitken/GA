$(document).ready(function(){

	$("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});
	//fitvids
	$("body").fitVids();

	//Flexslider
	$(".flexslider").flexslider({
		animation: "slide"
	});

	// Scroll Up
	$.scrollUp();

});

