let map = L.map('map').setView([14.0860746, 100.608406], 6);

//osm layer
let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

if(!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!")
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, 5000);
}

let marker, circle;

function getPosition(position){
    // console.log(position)
    let lat = position.coords.latitude
    let long = position.coords.longitude
    let accuracy = position.coords.accuracy
    if(marker) {
        map.removeLayer(marker)
    }
    if(circle) {
        map.removeLayer(circle)
    }
    marker = L.marker([lat, long])
    circle = L.circle([lat, long], {radius: accuracy})
    let featureGroup = L.featureGroup([marker, circle]).addTo(map)
    map.fitBounds(featureGroup.getBounds())
    console.log("Your coordinate is: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
}
