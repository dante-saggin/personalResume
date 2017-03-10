function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: -23.5431786, lng: -46.6291845 }
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    var markers = geoLocation.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
