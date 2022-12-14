let map;
const centerMap = {lat: -30.0224671, lng: -51.1025457}

class CenterControl {
    constructor(map) {
        this.controlDiv = document.createElement('div');
        this.controlUI = document.createElement('div');
        this.controlText = document.createElement('div');

        this.controlUI.style.backgroundColor = '#fff';
        this.controlUI.style.border = '2px solid #ebebeb';
        this.controlUI.style.borderRadius = '3px';
        this.controlUI.style.padding = '6px';
        this.controlUI.style.cursor = 'pointer';
        this.controlUI.title = 'Centralizar mapa';

        this.controlDiv.appendChild(this.controlUI);

        this.controlText.style.fontSize = '16px';
        this.controlText.style.textAlign = 'center';
        this.controlText.style.lineHeight = '20px';
        this.controlText.style.color = '#333';
        this.controlText.innerHTML = 'Centralizar';

        this.controlUI.appendChild(this.controlText);

        this.controlUI.addEventListener('click', () => {
            map.panTo(centerMap);

        const marker = new google.maps.Marker({
            position: centerMap,
            map: map
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'Centro do mapa'
            })

            infoWindow.open(map, marker);
        })

        })
    }
}


function initMap() {
    const options = {
        center: centerMap,
        zoom: 12
    };

    map = new google.maps.Map(document.getElementById('map'), options);

    const centerControl = new CenterControl(map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControl.controlDiv);



}