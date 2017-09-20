var defaultLang = "es",
	currentLang,
	currentTag;

var languageDefinitions = {
	es: {
		nav_about: "Acerca de",
		nav_contact: "Contactos de Emergencia",
		nav_volunteer: "Voluntarios",
		nav_contribuir: "Contribuir",
		intro_titulo: "Ayuda Sismo 19 de Septiembre",
		intro_ubicacion: "CDMX, Puebla, Morelos",
		intro_button1: "¿Cómo ayudar?",
		intro_button2: "Públicar",
		card_intro1: "¿Cómo ayudar a los afectados del Sismo?",
		card_intro2: "A continuación encontrarás diferentes organizaciones, centros de acopio o formas de ayudar a los afectados o rescatistas del sismo.",
		card_intro3: "Si conoces alguna otra forma de ayudar Contáctanos",
		card_intro4: "Contáctanos",
		filter_type: "Filtrar por tipo de donación",
		filter_type_select: "Selecciona una opción",
		filter_all: "Todas",
		filter_location: "Filtrar por locación",
		filter_location_select: "Selecciona una opción",
		card_type: "Tipo de donación:",
		card_location: "Puedes ayudar desde:",
		more_info: "Más Información",
		modal_close: "Cerrar",
		modal1_title: "Acerca de Como Ayudar",
		modal1_text1: "Este proyecto sin fines de lucro busca crear un repositorio de información para centralizar el apoyo y la rápida distribución de ayuda.",
		modal1_text2: "Si deseas ayudar y tienes conocimientos de programación colabora con nosotros en",
		modal1_text3: " Sí lo que deseas es agregar un método de ayuda por favor envíanos la información pertinente a:",
		modal2_title: "Públicar Forma de Ayuda",
		modal2_text: "Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, Desde dónde se puede ayudar, que tipo de ayuda necesitan. desde los siguientes medios de contacto:"
	},
	en: {
		nav_about: "About",
		nav_contribuir: "Contribute",
	},
};

currentLang = languageDefinitions[defaultLang];

function chooseLang(chosenLang) {
	currentLang = languageDefinitions[chosenLang];
}

function loadLanguage(chosenLang) {
	chooseLang(chosenLang);

	textElements = document.querySelectorAll("[data-lang]");

	textElements.forEach(function (item, index) {
		currentTag = item.getAttribute('data-lang');
		content = currentLang[currentTag];

		if (currentTag === 'hide') {
			(chosenLang === 'es' ? item.classList.remove('hide-lang') : item.classList.add('hide-lang'));
		}
		else {
			item.textContent = content;
		}
	})
}