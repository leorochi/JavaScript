let map;


function initMap() {
    const options = {
        center: {lat: -30.0224671, lng: -51.1025457},
        zoom: 12
    }

    map = new google.maps.Map(document.getElementById('map'), options);


    map.addListener('click', (e) => {
     var clickPosition = e.latLng;
     const markers = new google.maps.Marker({
        position: clickPosition,
        map: map,
        title: 'Rua Wolfram Metzler',
        animation: google.maps.Animation.BOUNCE,
        draggable: true
    });

    const infoWindow = new google.maps.InfoWindow({
        content: 'Cliquei aqui'
    })

    markers.addListener('click', () => {
        infoWindow.open(map, markers);
    })

    

    })


}