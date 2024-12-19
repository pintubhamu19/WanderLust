mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", //style url
  center: coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${title}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);

// map.on('load', () => {
//     // Load an image from an external URL.
//     map.loadImage(
//       'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
//         (error, image) => {
//             if (error) throw error;

//             // Add the image to the map style.
//             map.addImage('cat', image);})
        
// });

// function createCustomMarker() {
//   var markerDiv = document.createElement('div');
//   markerDiv.style.backgroundImage = "url('https://st4.depositphotos.com/20524830/25861/i/1600/depositphotos_258612992-stock-photo-home-raster-icon-rounded-flat.jpg')";
//   markerDiv.style.width = "40px";
//   markerDiv.style.height = "40px";
//   // markerDiv.style.borderRadius = 50;
//   // element: createCustomMarker()
//   markerDiv.style.backgroundSize = "contain";
//   return markerDiv;
// }
