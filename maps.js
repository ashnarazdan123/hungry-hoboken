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
        [{ lat: 40.75071262768106, lng: -74.02724995949578 }, "Alfalfa"],
        [{ lat: 40.742872810124496, lng: -74.02916666134622 }, "Bareburger"],
        [{ lat: 40.741584927069695, lng: -74.02944078648149 }, "Ben & Jerry's"],
        [{ lat: 40.7430739669031, lng: -74.02946024230259 }, "Charrito's"],

        [{ lat: 40.739770189404666, lng: -74.0300129883317 }, "Chipotle"],
        [{ lat: 40.7417677433308, lng: -74.0297983644735 }, "Happy Vegans"],
        [{ lat: 40.7397719675139, lng: -74.0422343710401 }, "Hungry Like The Wolf"],
        [{ lat: 40.7382756663376, lng: -74.0309194422564 }, "Honeygrow"],
        [{ lat: 40.73704556700296, lng: -74.0303034153173 }, "Insomnia Cookies"],
        [{ lat: 40.742597068302004, lng: -74.02919973066017 }, "Karma Kafe"],

        [{ lat: 40.73789627705968, lng: -74.03100314230275 }, "La Isla"],
        [{ lat: 40.74035559085626, lng: -74.03035364600326 }, "Mamoun's Falafel"],
        [{ lat: 40.73986086349237, lng: -74.04251154415286 }, "Northern Soul"],
        [{ lat: 40.73926409459133, lng: -74.03062735949592 }, "Organic Basic Food"],
        [{ lat: 40.740626816163505, lng: -74.03021978833179 }, "Panera Bread"],

        [{ lat: 40.7384692763242, lng: -74.0308358354652 }, "Precious Chinese & Japanese Cuisine"],
        [{ lat: 40.7361625091425, lng: -74.0304629598968 }, "Pico Taco"],
        [{ lat: 40.7432765803056, lng: -74.0288896539149 }, "Piki Poke - Hawaiian Poke Bowl"],
        [{ lat: 40.7530972316295, lng: -74.0245278391976 }, "Proven Poke Co Hoboken"],
        [{ lat: 40.7409668394954, lng: -74.0300664316152 }, "Pure Pita"],

        [{ lat: 40.7381499943376, lng: -74.0342878934575 }, "Purely Juiced"],
        [{ lat: 40.7395167085607, lng: -74.0299081107078 }, "Quality Greens Kitchen"],
        [{ lat: 40.7469972038621, lng: -74.0381216004357 }, "Shaka Kitchen"],
        [{ lat: 40.7427572463288, lng: -74.0289807727774 }, "Souzafit"],
        [{ lat: 40.7410174423749, lng: -74.029626632254 }, "The Cuban"],
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
