function initMap() {
    const options = {
        center: {lat: -30.0224671, lng: -51.1025457},
        zoom: 12,
    }

    map = new google.maps.Map(document.getElementById('map'), options);

    var heatmapData = [
        new google.maps.LatLng(-30.023969852380077, -51.10636710427533),
        
      ];
      

    const heatMap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map
    })

    map.addListener('click', (e) => {
        heatmapData.push(e.latLng);
        heatMap.setData(heatmapData);
    })

    const traffic = new google.maps.TrafficLayer({map});

    const transit = new google.maps.TransitLayer();
    transit.setMap(map);

    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);


}