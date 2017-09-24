var languagesModule = (function() {
	var defaultLang = currentLang = "es",
		currentLangDefs,
		currentTag,
		spanishOn = true,
		toggleButton = document.getElementById('language-toggle');
	
	var languageDefinitions = {
		es: {
			text_close: "Cerrar",
			text_or: "O desde los siguientes medios de contacto:",
			text_contact_us: "Contáctanos",
			nav_about: "Acerca de",
			nav_how: "¿Cómo ayudar?",
			nav_contact: "Contactos de Emergencia",
      nav_maps: 'Mapas',
      nav_tweets: 'Tweets',
			nav_volunteer: "Voluntarios",
			nav_contribuir: "Contribuir",
			intro_titulo: "Ayuda Sismo",
			intro_date: "¿Cómo ayudar a los afectados del Sismo?",
			intro_button1: "¿Cómo ayudar?",
			intro_button2: "Enviar información",
			card_intro1: "¿Cómo ayudar a los afectados del Sismo?",
			card_intro2: "A continuación encontrarás diferentes formas de ayudar a los afectados y rescatistas del sismo del 7 y 19 de Septiembre, 2017.",
			card_intro3: "Si conoces alguna otra forma de ayudar",
			filter_type: "Tipo de donación",
			filter_type_select: "Selecciona una opción",
			filter_all: "Todas",
			filter_location: "Ubicación",
			filter_location_select: "Selecciona una opción",
			card_type: "Tipo de donación:",
			card_location: "Puedes ayudar desde:",
			emergency_phone: "Teléfono:",
			emergency_where: "Puedes contactar desde:",
			more_info: "Más Información",
			modal1_title: "Acerca de Como Ayudar",
			modal1_text1: "Este proyecto sin fines de lucro busca crear un repositorio de información para centralizar el apoyo y la rápida distribución de ayuda.",
			modal1_text2: "Si deseas ayudar y tienes conocimientos de programación colabora con nosotros en",
			modal1_text3: " Sí lo que deseas es agregar un método de ayuda por favor envíanos la información pertinente a:",
			modal1_text4: "Para contacto directo con nosotros envíanos un correo a",
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
			visualize_in_waze: "Visualiza estos centros de acopio en Waze buscando \"Ayuda\"",
			title_map_v19s: "Información verificada en tiempo real #Verificado19s",
			title_map_dangerzones: "Tránsito y zonas de peligro"
		},
		en: {
			text_close: "Close",
			text_or: "or",
			text_contact_us: "Contact us",
			nav_about: "About",
			nav_how: "How to help?",
			nav_contact: "Emergency Contacts",
      nav_maps: 'Maps',
      nav_tweets: 'Tweets',
			nav_volunteer: "Volunteers",
			nav_contribuir: "Contribute",
			intro_titulo: "Help Needed for Mexico Earthquake",
			intro_date: "How to help those affected by the earthquake?",
			intro_button1: "How Can You Help?",
			intro_button2: "Send information",
			card_intro1: "How to help people affected by the earthquakes?",
			card_intro2: "Below you will find different ways to help those affected and rescuers of the earthquake of 7 and 19 September, 2017",
			card_intro3: "If you know any other useful resource",
			filter_type: "Donation Type",
			filter_type_select: "Select an option",
			filter_all: "All",
			filter_location: "Location",
			filter_location_select: "Select an option",
			card_type: "Donation type:",
			card_location: "You can help from:",
			emergency_phone: "Phone:",
			emergency_where: "You can call from:",
			more_info: "More Information",
			modal1_title: "About Como Ayudar",
			modal1_text1: "This site is a volunteer project created in an effort to centralize all useful information regarding assistance and distribution of goods to help those affected by the most recent earthquakes in Mexico.",
			modal1_text2: "If you are a developer and want to help, please check our repo on",
			modal1_text3: " If you wish to add a new Help Resource like a WebSite, please contact us here:",
			modal1_text4: "For direct contact with us send us and email to",
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
			visualize_in_waze: "Visualize these collection centers in Waze by searching \"Ayuda\"",
			title_map_v19s: "Real time verified information #Verificado19s",
			title_map_dangerzones: "Transit and danger zones"
		},
	};

	currentLangDefs = languageDefinitions[currentLang];
	
	window.onload = function changeLangOnLoad() {
		if (typeof getUrlParameter === 'function') {
			var lang = getUrlParameter('lang');
			if (languageDefinitions[lang] && lang !== 'es') {
				spanishOn = false;
				loadLanguage(lang);
				toggleButton.checked = true;
			}
		}
	}
	
	function chooseLang(chosenLang) {
		currentLangDefs = languageDefinitions[chosenLang];
	}
	
	function loadLanguage(chosenLang) {
		chooseLang(chosenLang);
	
		textElements = document.querySelectorAll("[data-lang]");
	
		textElements.forEach(function (item, index) {
			currentTag = item.getAttribute('data-lang');
			content = currentLangDefs[currentTag];
	
			if (currentTag === 'hide') {
				(chosenLang === 'es' ? item.classList.remove('hide-lang') : item.classList.add('hide-lang'));
			}
			else {
				item.textContent = content;
			}
		})
		
		translateCards(chosenLang);

		currentLang = chosenLang;
		updateHistory();
	}

	function publicLoadLanguage(chosenLang) {
		loadLanguage(chosenLang);
	}

	function toggleLang() {
		spanishOn = !spanishOn;
		(spanishOn ? currentLang = 'es' : currentLang = 'en');
		loadLanguage(currentLang) ;
	}

	function getCurrentLang() {
		return currentLang;
	}
	
	function translateCards(chosenLang) {
		cardTextElements = document.querySelectorAll(".card__title, .card__desc, .badge-verified");
		// Doesn't select ".card__type span, .card__location span" to avoid breaking tag filters
		translateUrl = "https://translate.googleapis.com/translate_a/single?client=gtx"
    		+ "&sl=es&tl=" + chosenLang + "&dt=t&q=";
		cardTextElements.forEach(function (item) {
			$.ajax({
				url: translateUrl + item.textContent,
				success: function(data) {
					item.textContent = data[0][0][0];
				}
			});
			
		});
	}

	// Copied from app.js, but without card filtering
	function updateHistory() {
		// Parameters are sfer to get from URL than select element
		var type = getUrlParameter('type'),
			location = getUrlParameter('location'),
			lang = currentLang,
			state = {};
		
		// Populate state only with existing values
		if (type) { state.type = type };
		if (location) { state.location = location };
		if (lang && lang != 'es') { state.lang = lang };
		
		// ENHANCEMENT: filter cards automagically to Global if window loads with different language
		// filterCards(state);
		history.replaceState(state, "", "?" + $.param(state));
	}

	return {
		loadLang: publicLoadLanguage,
		toggleLang: toggleLang,
		getCurrentLang: getCurrentLang,
		translateCards: translateCards
	}
})();
