mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", //style url
  center: coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

//  console.log(listing.geometry);
const customMarker = document.createElement('div');
customMarker.className = 'custom-marker';
customMarker.innerHTML = '<div class="marker-icon"><div class="inner-icon"><i class="fa-solid fa-location-dot"></i></div></div>';

// Change the inner HTML of the icon on hover
customMarker.addEventListener('mouseenter', function () {
    this.classList.add('hovered');
    this.querySelector('.inner-icon').innerHTML = '<i class="fa-solid fa-street-view"></i>';
});

// Reset the inner HTML when mouse leaves
customMarker.addEventListener('mouseleave', function () {
    this.classList.remove('hovered');
    this.querySelector('.inner-icon').innerHTML = '<i class="fa-solid fa-location-dot"></i>'; 
});

const marker = new mapboxgl.Marker( { element: customMarker})
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${title}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);


