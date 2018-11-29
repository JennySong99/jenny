$(document).ready(function()  {
	$("#left").append("<div id = 'hidden'>jingyi_song@berkeley.edu</div>");

	$("#b2").click(function() {

		let buttonActive = $("#hidden").hasClass("active");

		if (!buttonActive) {
			$("#hidden").addClass("active");
			$("#hidden").removeClass("inactive");
			$("#hidden").fadeIn();
		} else {
			$("#hidden").addClass("inactive");
			$("#hidden").removeClass("active");
						$("#hidden").fadeOut();
		} 
		
		
	  })
})