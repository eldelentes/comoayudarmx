
var mymap = L.map('mapid').setView([19.432608, -99.133209], 14);
var coordenadas;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaXRyZXZlcmllIiwiYSI6ImNqN3QzbTN1MjFpdmsycW8zNzcwenE4bzYifQ.1vYHJikmQKRdBZAw4yO03w'
}).addTo(mymap);


//Save the emergency case
$('#saveAyuda').click(function(){

    //Save in the db
    var emergenciaDescripcion= $('#ayudaDescripcion').val();
    var tipoCaso=  $('#selTipoAyuda').val();
    var cordenadasCaso=coordenadas;
    //TODO: Save the inofmration on the DB

    //Set a marker in the map
    var marker= L.marker(coordenadas).addTo(mymap);
    marker.bindTooltip(emergenciaDescripcion);

    //Close the modal
    $('.ayuda').removeClass('show');

});


$('#closeAyuda').click(function(){

    //TODO: Delete from the DB

    //Delete the marker
    L.marker(coordenadas).remove(mymap);

});


//On map click
function onMapClick(e) {
    //Add a modal to save an emergency location
    coordenadas= e.latlng;
        $('.modal[data-modal=ayuda]').addClass('show');

}
mymap.on('click', onMapClick);


var renderMarks = function () {

    //todo: Read the coordinates from the db and load the markers
    //var marker = L.marker([19.4112986, -99.2310967]).addTo(mymap);

    //Show the pop up
    //var popup = L.popup();
    //popup.setLatLng(e.latlng) //'coordinates-DB'
    //    .setContent('ayudaDescripcion-DB')
    //    .openOn(mymap);

}

$(document).ready(renderMarks());
