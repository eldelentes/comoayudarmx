var defaultLang = currentLang = "es",
text,
currentLangIndex = 0,
langDefs = {
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

text = langDefs[defaultLang];

window.onload = loadLanguage(defaultLang);

function chooseLang(chosenLang) {
  text = langDefs[chosenLang];
}

function loadLanguage(chosenLang) {
  chooseLang(chosenLang);

  textElements = document.querySelectorAll("[data-lang]");
  // alert(textElements.toString());

  textElements.forEach(function(item, index) {
    content = text[item.getAttribute('data-lang')];
    item.textContent = content;
  })
}