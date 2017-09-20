$('.modal__link').click(function(e){
  e.preventDefault();
  var modal = $(this).data('modal');
  $('.modal[data-modal="' + modal + '"]').addClass('show');
})

$('.modal__close').click(function(e){
  e.preventDefault();
  $(this).parent().removeClass('show');
})


var handleFilterChange = function(e){
  var type = $("#donation_type").val()
  var location = $("#location").val()

  var cardMatchType = function($card) {
    return (!type || $card.find(".card__type").text().includes(type))
  }

  var cardMatchLocation = function($card) {
    return (!location || $card.find(".card__location").text().includes(location))
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
}

var renderCards = function() {
  var template = $("#card_template").html();

  Cards.forEach(function(card) {
    var $card = $(template);
    var $type = $("<span>" + card.type + "</span>");
    var $location = $("<span>" + card.location + "</span>");

    $card.find(".card__title").text(card.title);
    $card.find(".card__desc").text(card.description);
    $card.find(".card__type h3").append($type);
    $card.find(".card__location h3").append($location);
    $card.find(".card__button").attr("href", card.link);
    $("#cards_container").append($card);
  });
}

$(document).on("change", "#donation_type", handleFilterChange);
$(document).on("change", "#location", handleFilterChange);
$(document).ready(renderCards);
$(document).ready(populateFilters);
