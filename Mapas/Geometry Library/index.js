
/*const initDrawing = (map) => {
    const draw = new google.maps.drawing.DrawingManager({
        map: map,
    })

    const polygon = google.maps.event.addListener(draw, 'polygoncomplete', (polygon) => {
        new google.maps.LatLng(polygon.latLngs.Vc[0].Vc[0].lat(),polygon.latLngs.Vc[0].Vc[0].lng())
        new google.maps.LatLng(polygon.latLngs.Vc[0].Vc[1].lat(),polygon.latLngs.Vc[0].Vc[1].lng())
        new google.maps.LatLng(polygon.latLngs.Vc[0].Vc[2].lat(),polygon.latLngs.Vc[0].Vc[2].lng())
        console.log(polygon.latLngs.Vc[0].Vc[0].lat());
        console.log(polygon.latLngs.Vc[0].Vc[0].lng());
        console.log(polygon.latLngs.Vc[0].Vc[1].lat());
        console.log(polygon.latLngs.Vc[0].Vc[1].lng());
        console.log(polygon.latLngs.Vc[0].Vc[2].lat());
        console.log(polygon.latLngs.Vc[0].Vc[2].lng());
    } )

    google.maps.event.addListener(map, 'click', function(e) {
        console.log(google.maps.geometry.poly.containsLocation(e.latLng), polygon);
    })

}*/

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


    google.maps.event.addListener(marker1, 'position_changed', update);
    google.maps.event.addListener(marker2, 'position_changed', update);

    const poly = new google.maps.Polyline({
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map
    });

    const geodesicPoly = new google.maps.Polyline({
        strokeColor: "#CC0099",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true,
        map: map
    });

    function update() {
        const path = [marker1.getPosition(), marker2.getPosition()];

        poly.setPath(path);
        geodesicPoly.setPath(path);


        const heading = google.maps.geometry.spherical.computeDistanceBetween(path[0], path[1]);

       const headingValue = document.getElementById('heading').value = String(heading);
       const originValue = document.getElementById('origin').value = String(path[0]);
       const destinationValue = document.getElementById('destination').value = String(path[1]);

       const output = document.querySelector('#output');

       output.innerHTML = `${headingValue} <br> ${originValue} <br> ${destinationValue}`

    }

        const draw = new google.maps.drawing.DrawingManager({
            map: map, 
        })

        
        const polygon = google.maps.event.addListener(draw, 'polygoncomplete', (polygon) => {
           const latlng = polygon.getPath().getArray();

           const coords = [
            {lat: latlng[0].lat(), lng: latlng[0].lng()},
            {lat: latlng[1].lat(), lng: latlng[1].lng()},
            {lat: latlng[2].lat(), lng: latlng[2].lng()},
           ]
           

           const triangle = new google.maps.Polygon({
            paths: coords
           })

           console.log(triangle);

           google.maps.event.addListener(map, 'click', function(e) {
            const resultColor = google.maps.geometry.poly.containsLocation(e.latLng, triangle) ? 'dentro' :'fora';
            const resultPath = google.maps.geometry.poly.containsLocation(e.latLng, triangle) ? // A triangle.
            "m 0 -1 l 1 2 -2 0 z"
            : google.maps.SymbolPath.CIRCLE;
    
        new google.maps.Marker({
          position: e.latLng,
          map,
          icon: {
            path: resultPath,
            fillColor: resultColor,
            fillOpacity: 0.2,
            strokeColor: "white",
            strokeWeight: 0.5,
            scale: 10,
          },
           })
       

    })



})


}