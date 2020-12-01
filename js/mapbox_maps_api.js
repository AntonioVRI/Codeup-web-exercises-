
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-98.568736, 29.524087],
    zoom: 10
});

var markerA ={
    color:'#ff0000',
    draggable:true
}

var marker1 =new mapboxgl.Marker(markerOptionA)
    .setLngLat([-98.568736, 29.524087])
    .addTo(map)
    .setPopup(popup1);

var markerB ={
    color:'#0040ff',
    draggable:true
}

var markerC ={
    color:'#ffaa00',
    draggable:true
}

var marker =new mapboxgl.Marker(markerOptionC)
    .setLngLat([-98.62473435, 29.57668415])
    .addTo(map)
    .setPopup(popup3)
