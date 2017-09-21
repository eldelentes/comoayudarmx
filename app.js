var handleFilterChange = function(e){
  var type = $("#donation_type").val()
  var location = $("#location").val()

  var cardMatchType = function($card) {
    return (!type || $card.find(".card__type").text().includes(type) || type == "all")
  }

  var cardMatchLocation = function($card) {
    return (!location || $card.find(".card__location").text().includes(location) || location == "all")
  }

  var cardMatchFilters = function($card) {
    return cardMatchType($card) && cardMatchLocation($card);
  }

  $(".card").each(function() {
    var $card = $(this);

    if (cardMatchFilters($card)) {
      $card.show();
    } else {
      $card.hide();
    }
  })
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

  var isWorldPage = function() {
    return location.pathname.includes("world.html");
  };

  var isMonetaryCard = function(card) {
    return card.type == "Monetaria";
  };

  var renderCard = function(card) {
    var $card = $(template);
    var $type = $("<span>" + card.type + "</span>");
    var $location = $("<span>" + card.location + "</span>");

    $card.find(".card__title").text(card.title);
    $card.find(".card__desc").text(card.description);
    $card.find(".card__type h3").append($type);
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

var start = function() {
  var getEntryProperty = function(entry, propName) {
    return entry['gsx$' + propName] && entry['gsx$' + propName]['$t']
  }

  $.get(
    'https://spreadsheets.google.com/feeds/list/1zAFK1sSjIaHurnKzLx-e3GJZNmZ9QWfFSlIZLyYk8IE/1/public/values?alt=json',
    function (data) {

      var cards = [];

      data.feed.entry.forEach(function(entry) {
        var card = {
          timespamp: getEntryProperty(entry, 'timestamp'),
          title: getEntryProperty(entry, 'formadeayuda'),
          description: getEntryProperty(entry, 'informaciónadicionaldeayuda'),
          type: getEntryProperty(entry, 'tipodedonación').split(','),
          location: getEntryProperty(entry, 'puedesayudardesde'),
          link: getEntryProperty(entry, 'fuentedeinformaciónlink'),
          adicional: getEntryProperty(entry, 'informaciónadicional'),
          approved: getEntryProperty(entry, 'approved')
        }

        card.type = card.type.map(function(type) {
          return type.trim();
        });

        if (card.approved === 'TRUE') {
          cards.push(card);
        }
      });

      renderCards(cards);
      populateFilters();
    },
  );
}

$(document).on("change", "#donation_type", handleFilterChange);
$(document).on("change", "#location", handleFilterChange);
$(document).ready(start);
