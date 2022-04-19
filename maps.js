// The following example creates five accessible and
// focusable markers.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 40.7433, lng: -74.0266 },
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const restaurants = [
        [{ lat: 40.73899038105537, lng: -74.03025523775096 }, "Acai Ya Later"],
        [{ lat: 40.7504972, lng: -74.0294172 }, "Alfalfa"],
        [{ lat: 40.742698, lng: -74.0312588 }, "Bareburger"],
        [{ lat: 40.7414345, lng: -74.0316724 }, "Ben & Jerry's"],
        [{ lat: 40.7414983, lng: -74.0645031 }, "Charrito's"],

        [{ lat: 40.7396035, lng: -74.0321695 }, "Chipotle"],
        [{ lat: 40.7417812, lng: -74.0321228 }, "Happy Vegans"],
        [{ lat: 40.738274, lng: -74.0331312 }, "Honeygrow"],
        [{ lat: 40.736887, lng: -74.0325243 }, "Insomnia Cookies"],
        [{ lat: 40.742406, lng: -74.0313777 }, "Karma Kafe"],

        [{ lat: 40.7377621, lng: -74.0332884 }, "La Isla"],
        [{ lat: 40.740132, lng: -74.0324887 }, "Mamoun's Falafel"],
        [{ lat: 40.7396454, lng: -74.0447217 }, "Northern Soul"],
        [{ lat: 40.7390405, lng: -74.0327946 }, "Organic Basic Food"],
        [{ lat: 40.740452, lng: -74.0323763 }, "Panera Bread"],

        [{ lat: 40.7384695, lng: -74.0329939 }, "Precious Chinese & Japanese Cuisine"],
        [{ lat: 40.736155, lng: -74.0326169 }, "Pico Taco"],
        [{ lat: 40.7432895, lng: -74.0310764 }, "Piki Poke - Hawaiian Poke Bowl"],
        [{ lat: 40.7530759, lng: -74.0267004 }, "Proven Poke Co Hoboken"],
        [{ lat: 40.7409792, lng: -74.0323661 }, "Pure Pita"],

        [{ lat: 40.7382012, lng: -74.0364543 }, "Purely Juiced"],
        [{ lat: 40.7395111, lng: -74.0321355 }, "Quality Greens Kitchen"],
        [{ lat: 40.7395311, lng: -74.0387016 }, "Shaka Kitchen"],
        [{ lat: 40.7311681, lng: -74.1827928 }, "Souzafit"],
        [{ lat: 40.7315191, lng: -74.1827931 }, "The Cuban"],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    restaurants.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });
}

window.initMap = initMap;
