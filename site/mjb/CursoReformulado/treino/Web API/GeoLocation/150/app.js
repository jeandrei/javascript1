//Seção 13 aula 150
// leaflet
//https://leafletjs.com/download.html

// the base code is in the site in overview
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


const marker = L.marker([0, 0]).addTo(map);

// to check the values pass into the callback function from the getCurrentPosition method
navigator.geolocation.getCurrentPosition(function(pos){
  console.log(pos);
})

navigator.geolocation.getCurrentPosition(function(pos){
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13)
  
  marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
})