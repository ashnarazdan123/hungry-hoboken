// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// Initialize and add the map
function initMap() {
    // The location of stevens
    const stevens = { lat: 40.7433, lng: -74.0266 };
    // The map, centered at stevens
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: stevens,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: stevens,
        map: map,
    });
}
