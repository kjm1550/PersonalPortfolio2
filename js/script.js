$(document).ready(function() {
	let scrollLink = $('.nav-link');

	// smooth scrolling
	scrollLink.click(function(event) {
		event.preventDefault();
		$('body,html').animate({scrollTop: $(this.hash).offset().top}, 1000); /* the number changes the time*/	
	})
})