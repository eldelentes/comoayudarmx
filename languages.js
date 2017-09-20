var defaultLang = "es",
	currentLang;

var langDefs = {
	es: {
		hola: "Hola",
		prueba: "Prueba"
	},
	en: {
		hola: "Hello",
		prueba: "Test"
	},
	jp: {
		hola: "Ohaiyo",
		prueba: "Testo"
	}
};

currentLang = langDefs[defaultLang];

window.onload = loadLanguage(defaultLang);

function chooseLang(chosenLang) {
	currentLang = langDefs[chosenLang];
}

function loadLanguage(chosenLang) {
	chooseLang(chosenLang);

	textElements = document.querySelectorAll("[data-lang]");
	// alert(textElements.toString());

	textElements.forEach(function (item, index) {
		content = currentLang[item.getAttribute('data-lang')];
		item.textContent = content;
	})
}