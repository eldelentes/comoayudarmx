var mymap = L.map('mapid').setView([19.432608, -99.133209], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaXRyZXZlcmllIiwiYSI6ImNqN3QzbTN1MjFpdmsycW8zNzcwenE4bzYifQ.1vYHJikmQKRdBZAw4yO03w'
}).addTo(mymap);