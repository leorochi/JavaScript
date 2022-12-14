const initDrawing = (map) => {
    const draw = new google.maps.drawing.DrawingManager({
        map: map,
        drawingMode: google.maps.drawing.OverlayType.MARKER, // INICIA O MAPA COM O MARCADOR NO CLICK
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        }
        })

        google.maps.event.addListener(draw, 'overlaycomplete', (event) => {
            console.log(event);
        })

};

function initMap() {
    const options = {
        center: {lat: -30.0224671, lng: -51.1025457},
        zoom: 12, 
    }

    map = new google.maps.Map(document.getElementById('map'), options);

    initDrawing(map);

}