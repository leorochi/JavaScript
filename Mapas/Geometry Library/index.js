


function initMap() {
    const options = {
        center: {lat: -30.0224671, lng: -51.1025457},
        zoom: 12, 
    }

    map = new google.maps.Map(document.getElementById('map'), options);

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('control'));

    const marker1 = new google.maps.Marker({
        draggable: true,
        map: map,
        position: {lat: -30.0224671, lng: -51.1025457}
    })

    const marker2 = new google.maps.Marker({
        draggable: true,
        map: map,
        position: {lat: -30.023012722539104, lng: -51.10666095104617}
    })

    const bounds = new google.maps.LatLngBounds(
        marker1.getPosition(),
        marker2.getPosition()
    );

    map.fitBounds(bounds);

    google.maps.event.addListener(marker1, 'position_changed', update);
    google.maps.event.addListener(marker2, 'position_changed', update);

    const poly = new google.maps.Polyline({
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true,
        map: map
    });

    const geodesicPoly = new google.maps.Polyline({
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true,
        map: map
    });

    function update() {
        const path = [marker1.getPosition(), marker2.getPosition()];

        poly.setPath(path);
        geodesic.setPath(path);

    }

}

