var languagesModule = (function() {
	var defaultLang = "es",
		currentLang,
		currentTag,
		spanishOn = true;
	
	var languageDefinitions = {
		es: {
			text_close: "Cerrar",
			text_or: "o",
			text_contact_us: "Contáctanos",
			nav_about: "Acerca de",
			nav_contact: "Contactos de Emergencia",
			nav_volunteer: "Voluntarios",
			nav_contribuir: "Contribuir",
			intro_titulo: "Ayuda Sismo",
			intro_date: "19 de Septiembre",
			intro_button1: "¿Cómo ayudar?",
			intro_button2: "Publicar",
			card_intro1: "¿Cómo ayudar a los afectados por el Sismo?",
			card_intro2: "A continuación encontrarás diferentes organizaciones, centros de acopio o formas de ayudar a los afectados o rescatistas del sismo.",
			card_intro3: "Si conoces alguna otra forma de ayudar",
			filter_type: "Filtrar por tipo de donación",
			filter_type_select: "Selecciona una opción",
			filter_all: "Todas",
			filter_location: "Filtrar por locación",
			filter_location_select: "Selecciona una opción",
			card_type: "Tipo de donación:",
			card_location: "Puedes ayudar desde:",
			more_info: "Más Información",
			modal1_title: "Acerca de Como Ayudar",
			modal1_text1: "Este proyecto sin fines de lucro busca crear un repositorio de información para centralizar el apoyo y la rápida distribución de ayuda.",
			modal1_text2: "Si deseas ayudar y tienes conocimientos de programación colabora con nosotros en",
			modal1_text3: " Sí lo que deseas es agregar un método de ayuda por favor envíanos la información pertinente a:",
			modal2_title: "Públicar Forma de Ayuda",
			modal2_text: "Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, Desde dónde se puede ayudar, que tipo de ayuda necesitan. desde los siguientes medios de contacto:",
			contact_text1: "A continuación encontrarás una lista de contactos que te podrán ser útiles si te encuentras en un área afectada por el sismo.",
			contact_text2: "Si conoces algun otro contacto importante",
			volunteer_text1: "A continuación encontrarás diferentes mapas, con la ubicación de centros de acopio, centros de voluntarios, zonas más afectadas del sismo.",
			volunteer_allcaps: "¡EN ROJO PUNTOS DONDE URGE AYUDA!",
			volunteer_civilian: "Derrumbes, Albergues, Hospitales y Voluntariado Sismo CDMX",
			volunteer_official: "Daños y derrumbes, Centros de Acopio, Alberges Oficiales Sismo CDMX",
			volunteer_form1: "Publicar Forma de Ayuda",
			volunteer_form2: "Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, Desde dónde\n                se puede ayudar, que tipo de ayuda necesitan. desde los siguientes medios de contacto:",
		},
		en: {
			text_close: "Close",
			text_or: "or",
			text_contact_us: "Contact us",
			nav_about: "About",
			nav_contact: "Emergency Contacts",
			nav_volunteer: "Volunteers",
			nav_contribuir: "Contribute",
			intro_titulo: "Help Needed for Mexico's Earthquake",
			intro_date: "Sep 19, 2017",
			intro_button1: "How Can You Help?",
			intro_button2: "Publish",
			card_intro1: "Emergency Contacts",
			card_intro2: "Here is a list of different organizations, collection centers, and different ways in which you can help the rescuers and those affected by the earthquakes.",
			card_intro3: "If you know any other useful resource",
			filter_type: "Filter by Donation Type",
			filter_type_select: "Select an option",
			filter_all: "All",
			filter_location: "Filter by Location",
			filter_location_select: "Select an option",
			card_type: "Donation type:",
			card_location: "Location:",
			more_info: "More Information",
			modal1_title: "About Como Ayudar",
			modal1_text1: "This volunteer project is an effort to centralize all the information regarding assistance and distribution to help those affected by the earthquake in Mexico on September 19, 2017.",
			modal1_text2: "If you are a developer and want to help, please check our repo on",
			modal1_text3: " If you wish to add a Source of Aid, please contact us here:",
			modal2_title: "Publish a Source of Aid",
			modal2_text: "Send us the information about a Source of Aid with all the relevant information: Who are you helping, location, type of help. You can send us the information using the following methods:",
			contact_text1: "Here is a contact list that can help you if you are in an area affected by the earthquake.",
			contact_text2: "If you know any other important contact information",
			volunteer_text1: "Here you will find maps with directions to collection centers, volunteer centers, and the areas most affected by the earthquake.",
			volunteer_allcaps: "¡ZONES WHERE HELP IS NEEDED THE MOST ARE MARKED IN RED!",
			volunteer_civilian: "Collapsed buildings, shelters, hospitals, and Sismo CDMX volunteers",
			volunteer_official: "Official Sismo CDMX damages and collapsed buildings, collection centers, and shelters",
			volunteer_form1: "Publish Sources of Aid",
			volunteer_form2: "Send the information of your sources of aid with basic information such as: who can be helped, where can you help from\n and the kind of help that is needed, from the following contact options:",
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

	function publicLoadLanguage(chosenLang) {
		loadLanguage(chosenLang);
	}

	function toggleLang() {
		console.log('hey');
		spanishOn = !spanishOn;
		(spanishOn ? loadLanguage('es') : loadLanguage('en'));
	}

	return {
		loadLang: publicLoadLanguage,
		toggleLang: toggleLang
	}
})();
