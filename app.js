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
  $.get(
    'https://spreadsheets.google.com/feeds/list/1zAFK1sSjIaHurnKzLx-e3GJZNmZ9QWfFSlIZLyYk8IE/1/public/values?alt=json',
    function (data) {

      const cards = [];

      data.feed.entry.forEach((entry) => {
        const card = {
          timespamp: entry['gsx$timestamp'] && entry['gsx$timestamp']['$t'],
          title: entry['gsx$formadeayuda'] && entry['gsx$formadeayuda']['$t'],
          description: entry['gsx$informaciónadicionaldeayuda'] && entry['gsx$informaciónadicionaldeayuda']['$t'],
          type: entry['gsx$tipodedonación'] && entry['gsx$tipodedonación']['$t'],
          location: entry['gsx$puedesayudardesde'] && entry['gsx$puedesayudardesde']['$t'],
          link: entry['gsx$fuentedeinformaciónlink'] && entry['gsx$fuentedeinformaciónlink']['$t'],
          adicional: entry['gsx$informaciónadicional'] && entry['gsx$informaciónadicional']['$t'],
          approved: entry['gsx$approved'] && entry['gsx$approved']['$t']
        }

        if (card.approved === 'TRUE') {
          cards.push(card);
        }
      });

      renderCards(cards);
    },
  );
}

$(document).on("change", "#donation_type", handleFilterChange);
$(document).on("change", "#location", handleFilterChange);
$(document).ready(start);
$(document).ready(populateFilters);
