var languagesModule = (function() {
	var defaultLang = "es",
		currentLang,
		currentTag,
		spanishOn = true;
	
	var languageDefinitions = {
		es: {
			text_close: "Cerrar",
			text_or: "O desde los siguientes medios de contacto:",
			text_contact_us: "Contáctanos",
			nav_about: "Acerca de",
			nav_contact: "Contactos de Emergencia",
			nav_volunteer: "Voluntarios",
			nav_contribuir: "Contribuir",
			intro_titulo: "Ayuda Sismo",
			intro_date: "7 y 19 de Septiembre, 2017",
			intro_button1: "¿Cómo ayudar?",
			intro_button2: "Enviar información",
			card_intro1: "¿Cómo ayudar a los afectados del Sismo?",
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
			modal2_title: "Publicar Forma de Ayuda",
			modal2_text: "Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, desde dónde se puede ayudar, qué tipo de ayuda necesitan llenando la siguiente forma:",
			modal2_formtext: " Enviar registro de ayuda",
			contact_text1: "A continuación encontrarás una lista de contactos que te podrán ser útiles si te encuentras en un área afectada por el sismo.",
			contact_text2: "Si conoces algun otro contacto importante",
			volunteer_text1: "A continuación encontrarás diferentes mapas, con la ubicación de centros de acopio, centros de voluntarios, zonas más afectadas del sismo.",
			volunteer_allcaps: "¡EN ROJO PUNTOS DONDE URGE AYUDA!",
			volunteer_civilian: "Derrumbes, Albergues, Hospitales y Voluntariado Sismo CDMX",
			volunteer_official: "Daños y derrumbes, Centros de Acopio, Alberges Oficiales Sismo CDMX",
			volunteer_form1: "Publicar Forma de Ayuda",
			volunteer_form2: "Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, Desde dónde\n                se puede ayudar, que tipo de ayuda necesitan. desde los siguientes medios de contacto:",
			sitemap_title: "Mapa de sitio",
			footer_contact: "Contacto",
		},
		en: {
			text_close: "Close",
			text_or: "or",
			text_contact_us: "Contact us",
			nav_about: "About",
			nav_contact: "Emergency Contacts",
			nav_volunteer: "Volunteers",
			nav_contribuir: "Contribute",
			intro_titulo: "Help Needed for Mexico Earthquake",
			intro_date: "September 7th and 19th, 2017",
			intro_button1: "How Can You Help?",
			intro_button2: "Send information",
			card_intro1: "How to help people affected by the earthquakes?",
			card_intro2: "Here is a list of different organizations, collection centers, or different ways in which you can help the rescuers and people directly affected by the earthquakes.",
			card_intro3: "If you know any other useful resource",
			filter_type: "Filter by Donation Type",
			filter_type_select: "Select an option",
			filter_all: "All",
			filter_location: "Filter by Location",
			filter_location_select: "Select an option",
			card_type: "Donation type:",
			card_location: "You can help from:",
			more_info: "More Information",
			modal1_title: "About Como Ayudar",
			modal1_text1: "This site is a volunteer project created in an effort to centralize all useful information regarding assistance and distribution of goods to help those affected by the most recent earthquakes in Mexico.",
			modal1_text2: "If you are a developer and want to help, please check our repo on",
			modal1_text3: " If you wish to add a new Help Resource like a WebSite, please contact us here:",
			modal2_title: "Publish new Help Resource",
			modal2_text: "Send us information about the new Help Resource with all the applicable information: Target audience receiving help, target location, the kind of aid being provided. You can send us the information using the following methods:",
			modal2_formtext: " Send Help Resouce information",
			contact_text1: "Here is a contact list that can help you if you are in an area affected by the earthquake.",
			contact_text2: "If you know any other important contact information",
			volunteer_text1: "Here you will find maps with directions to collection centers, volunteer centers, and zones most affected by the earthquake.",
			volunteer_allcaps: "¡RED ZONES MARKED WHERE AID IS CRITICALLY NEEDED!",
			volunteer_civilian: "Collapsed buildings, shelters, hospitals, and Sismo CDMX volunteers",
			volunteer_official: "Damaged and collapsed buildings, collection centers, and Official Sismo CDMX shelters",
			volunteer_form1: "Publish new Help Resource",
			volunteer_form2: "Send us information about the new Help Resource with all the applicable information: Target audience receiving help,\n target location, the kind of aid being provided. You can send us the information using the following methods:",
			sitemap_title: "Sitemap",
			footer_contact: "Contact",
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
