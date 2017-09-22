var handleFilterChange = function(e){
  var type = $("#donation_type").val(),
      location = $("#location").val(),
      lang = languagesModule && languagesModule.getCurrentLang(),
      state = {};

  // Populate state only with existing values
  if (type) { state.type = type };
  if (location) { state.location = location };
  if (lang && lang != 'es') { state.lang = lang };

  filterCards(state);
  history.replaceState(state, "", "?" + $.param(state));
}

var getUrlParameter = function(param) {
  var pageUrl = decodeURIComponent(window.location.search.substring(1)),
    urlVariables = pageUrl.split('&'),
    paramName,
    i;

  for (i = 0; i < urlVariables.length; i++) {
    paramName = urlVariables[i].split('=');

    if (paramName[0] === param) {
      return paramName[1] === undefined ? true : paramName[1];
    }
  }
};

var filterCardFromQueryParams = function() {
  var state = {type: getUrlParameter("type"), location: getUrlParameter("location")};
  $("#donation_type").val(state.type).trigger("chosen:updated");;
  $("#location").val(state.location).trigger("chosen:updated");
  filterCards(state);
}

var filterCards = function(state) {
  var $noResults = $("#no_results");

  var cardMatchFilter = function($card, filter) {
    return (!state[filter] || $card.find(".card__" + filter).text().includes(state[filter]) || state[filter] == "all")
  };

  var cardMatchFilters = function($card) {
    return cardMatchFilter($card, "type") && cardMatchFilter($card, "location");
  }

  var hasResults = function() {
    return $(".card").is(":visible");
  }

  $noResults.hide();

  $(".card").each(function() {
    var $card = $(this);

    if (cardMatchFilters($card)) {
      $card.show();
    } else {
      $card.hide();
    }
  })

  if(!hasResults()) {
    $noResults.show();
  }
}

var populateFilters = function(e) {
  var populateFilter = function(selectorInCard, filterSelector) {
    $(selectorInCard).each(function() {
      var option = $(this).text();
      var $select = $(filterSelector);
      var $option = $("<option>" + option + "</option>");

      if (!$select.text().includes(option)) {
        $select.append($option);
      }

    });
  }

  populateFilter(".card__type h3", "#donation_type");
  populateFilter(".card__location h3", "#location");

  $('select#donation_type').chosen()
  $('select#location').chosen()
}

var renderCards = function(cardsFromService) {
  Cards = Cards.concat(cardsFromService);

  var template = $("#card_template").html();
  var monetaryType = "Monetaria";

  var isWorldPage = function() {
    return location.pathname.includes("world.html");
  };

  var isMonetaryCard = function(card) {
    return getCardTypes(card).indexOf(monetaryType) !== -1;
  };

  var getCardTypes = function(card) {
    if (Array.isArray(card.type)) {
      return card.type;
    }
    return [card.type];
  }

  var translateMonetaryType = function(type) {
    if (isWorldPage() && (type == monetaryType)) {
      return "Monetary";
    } else {
      return type;
    }
  }


  var renderIconType= function(type){
    var code={
"Víveres":'cutlery',
"Especie":'cutlery',
"Monetario":'money',
"Monetaria":'money',
"Albergue":'bed',
"Albergues":'bed',
"Trabajo Voluntario":'users',
"Equipo de auxilio médico":'medkit',
"Medicamentos":'medkit',
"Artículos de limpieza":'paint-brush',
"Artículos de aseo personal":'paint-brush',
"Limpieza":'paint-brush',
"Equipo de rescate":'life-ring',
"Asesoría":'user-circle',
"Asesoría profesional":'user-circle',
"Herramientas":'wrench',
"Sangre":'tint',
"Veterinario":'paw',
"Transporte":'truck',
"Ropa":'shopping-bag'
};
    return '<i class="fa fa-'+code[type]+'"></i>&nbsp;';

  };

  var renderCardTypes = function($card, types) {
    var template = $card.find(".card__type h3").clone();
    template.find('i').remove();
    $card.find(".card__type h3").remove();
    types.forEach(function(type) {
      $card.find(".card__type").append(template.clone().append(renderIconType(type)+"<span>" + translateMonetaryType(type) + "</span>"));
    });
  }

  var renderBadges = function($card, card) {
    if(card.verified) {
      $card.find(".card__badges").append('<span class="badge-verified" ><i class="fa fa-check"></i> Fuente Oficial</span>');
    }
  }

  var renderCard = function(card) {
    var $card = $(template);
    var $location = $("<span>" + card.location + "</span>");

    $card.find(".card__title").text(card.title);
    renderBadges($card, card);
    $card.find(".card__desc").text(card.description);
    renderCardTypes($card, getCardTypes(card));
    $card.find(".card__location h3").append($location);
    $card.find(".card__button").attr("href", card.link);
    $("#cards_container").append($card);
  };

  if (isWorldPage()) {
    Cards.filter(isMonetaryCard).forEach(renderCard);
  } else {
    Cards.forEach(renderCard);
  }
}

var start = function(cards) {
  renderCards(cards);
  populateFilters();
  filterCardFromQueryParams();
}

var getCards = function() {
  var getEntryProperty = function(entry, propName) {
    return entry['gsx$' + propName] && entry['gsx$' + propName]['$t']
  }

  var formatType = function(type) {
    var types = type.split(',');

    return types.map(function (type) {
      return type.trim();
    });
  }

  var isApprovedCard = function (card) {
    return card.approved === 'TRUE';
  }

  var buildCard = function(entry) {
    return {
      timespamp: getEntryProperty(entry, 'timestamp'),
      title: getEntryProperty(entry, 'formadeayuda'),
      description: getEntryProperty(entry, 'informaciónadicionaldeayuda'),
      type: formatType(getEntryProperty(entry, 'tipodedonación')),
      location: getEntryProperty(entry, 'puedesayudardesde'),
      link: getEntryProperty(entry, 'fuentedeinformaciónlink'),
      adicional: getEntryProperty(entry, 'informaciónadicional'),
      approved: getEntryProperty(entry, 'approved')
    }
  }

  $.get(
    'https://spreadsheets.google.com/feeds/list/1zAFK1sSjIaHurnKzLx-e3GJZNmZ9QWfFSlIZLyYk8IE/1/public/values?alt=json',
    function (data) {
      start(
        data.feed.entry.map(buildCard).filter(isApprovedCard)
      );
    }
  );
}

$(document).on("change", "#donation_type", handleFilterChange);
$(document).on("change", "#location", handleFilterChange);
$(document).ready(getCards);
