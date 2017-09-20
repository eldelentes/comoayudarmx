$('.modal__link').click(function(e){
	e.preventDefault();
	var modal = $(this).data('modal');
	$('.modal[data-modal="' + modal + '"]').addClass('show');
})

$('.modal__close').click(function(e){
	e.preventDefault();
	$(this).parent().removeClass('show');
})