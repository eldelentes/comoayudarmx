
var linkMenu = {
	'0':'<a class="modal__link" href="#" data-modal="about">Acerca de</a>',
	'1':'<a href="index.html">Inicio</a>',
	'2':'<a class="hide-mobile"  href="contactos.html">Contactos de Emergencia</a>',
	'3':'<a class="hide-mobile" href="voluntarios.html">Voluntarios</a>',
	'4':'<a class="hide-mobile" href="world.html">English</a>',
	'5':'<a class="hide-mobile" href="https://github.com/eldelentes/comoayudarmx" target="_blank">Contribuir <i class="fa fa-github"></i></a>',

};
var linkMenuEng = {
	'0':'<a class="modal__link" href="#" data-modal="about">About</a>',
	'1':'<a href="index.html">Home</a>',
	'2':'<a class="hide-mobile"  href="contactos.html">Emergency contact</a>',
	'3':'<a class="hide-mobile" href="voluntarios.html">Voluntary</a>',
	'4':'<a class="hide-mobile" href="index.html">Español</a>',
	'5':'<a href="https://github.com/eldelentes/comoayudarmx" target="_blank">Contribute <i class="fa fa-github"></i></a>',
};
jQuery(document).ready(function($) {	
	if($('#mainNav').hasClass('eng')){
		$.each(linkMenuEng,function(index, el) {
			$('#mainNav').append(el);		
		});
	}else{
		$.each(linkMenu,function(index, el) {
			$('#mainNav').append(el);		
		});
	}
});


