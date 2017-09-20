$('.modal__link').click(function(e){
  e.preventDefault();
  var modal = $(this).data('modal');
  $('.modal[data-modal="' + modal + '"]').addClass('show');
})

$('.modal__close').click(function(e){
  e.preventDefault();
  $(this).parent().removeClass('show');
})

// Map
$('.map-container').click(function() {
  $(this).find('iframe').addClass('clicked')
})
.mouseleave(function() {
  $(this).find('iframe').removeClass('clicked')
});