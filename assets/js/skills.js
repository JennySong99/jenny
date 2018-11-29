$(document).ready(function() {
	let currentImageNumber = 1;

	$("#lightbox").hide();

	function plus(n) {
  	show(currentImageNumber += 1);
	}
	function minus(n) {
  	show(currentImageNumber -= 1);
	}
	$(".item").click(function() {
		currentImageNumber = parseInt($(this).attr("id"));
		$("#lightbox").show();
		show(currentImageNumber);
	})

	function show(n) {
  	var i;
  	if (n > 9) {currentImageNumber = 1}    
  	if (n < 1) {currentImageNumber = 9}
  	for (i = 1; i < 10; i++) {
  		$("#1" + i).hide();
  	}
  	$("#1" + currentImageNumber).show();
  	// $(".body").style.background: rgba(0, 0, 0, 0.6);
	}
	

	// Carousel section
	$("#right").click(function() {
		plus(currentImageNumber);
	});

	$("#left").click(function() {
		minus(currentImageNumber);
	});

	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});