$(document).ready(function(){
	//Modal
	$('[data-modal=feedback]').on('click', function() {
		$('.overlay, #feedback').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #feedback').fadeOut('slow');
	});
});