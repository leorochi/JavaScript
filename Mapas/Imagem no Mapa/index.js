let historicalOverlay;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 40.74, lng: -74.18 },
  });
  const imageBounds = {
    north: 40.773941,
    south: 40.712216,
    east: -74.12544,
    west: -74.22655,
  };

  historicalOverlay = new google.maps.GroundOverlay(
    "https://images.gameinfo.io/pokemon/256/p25f310.png",
    imageBounds, {
        opacity: 2,
        clickable: true
    }
  );
  historicalOverlay.setMap(map);

  historicalOverlay.addListener('click', (e) => {
    alert('Clicou');
    historicalOverlay.setMap(null);
  })
}

window.initMap = initMap;
