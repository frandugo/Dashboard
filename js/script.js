$('.map').click(function(event) {
	/* Act on the event */
	event.preventDefault();
	$('.map-view').slideToggle('slow');
});

function sizeheader() {
	windowHeight = $(window).height();
	windowWidth = $(window).width();

	$(".content .content-global").css('height', parseInt((windowHeight - 110)));
} 	

sizeheader();

$(window).on("resize", function(){ 
	sizeheader(); 
});

$(document).ready(function(){

	var snapper = new Snap({
    	element: document.getElementById('content')
	});

	$('#open-left').click(function(){
		snapper.open('left');
	});

});


