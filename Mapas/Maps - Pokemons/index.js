function initMap() {
    const options = {
        center: { lat: 40.74, lng: -74.18 },
        zoom: 13
    }

    map = new google.maps.Map(document.getElementById('map'), options);

    const btn = document.getElementById('btn');

    const imageBounds = {
        north: 40.773941,
        south: 40.712216,
        east: -74.12544,
        west: -74.22655,
      };

    btn.addEventListener('click', () => {

        const overlay = new google.maps.GroundOverlay("https://images.gameinfo.io/pokemon/256/p25f310.png", imageBounds, {
            opacity: 2
        })

        overlay.setMap(map);
        console.log(overlay);


        
            
        
        
        
        
        const bounds = map.getBounds();
            var NE = bounds.getNorthEast();
            var SW = bounds.getSouthWest();
    
            for(var i = 0; i < 10; i++) {
               const a =  Math.random(NE.lat()) * 100;
               const b =  Math.random(SW.lng()) * 100;
               console.log(a,b);
            }
    })

}

