function scrollToHome() {
	if ($('body').length != 0) {
		$("html, body").animate({
			scrollTop: $('body').offset().top
		}, 1000);
	}
}
function scrollToAbout() {
	if ($('#productivity').length != 0) {
		$("html, body").animate({
			scrollTop: $('#productivity').offset().top - 50
		}, 1000);
	}
}
function scrollToGallery() {
	if ($('#actions').length != 0) {
		$("html, body").animate({
			scrollTop: $('#actions').offset().top - 50
		}, 1000);
	}
}
function scrollToContact() {
	if ($('#contact').length != 0) {
		$("html, body").animate({
			scrollTop: $('#contact').offset().top - 50
		}, 1000);
	}
}
function scrollToClients() {
	if ($('#testimonials').length != 0) {
		$("html, body").animate({
			scrollTop: $('#testimonials').offset().top - 50
		}, 1000);
	}
}
