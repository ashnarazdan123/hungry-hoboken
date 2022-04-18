// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { equalTo, getDatabase, query, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmwDSnz9pl50X_rZjpc3T8J2K_vZnr-nw",
    authDomain: "glowing-carport-254019.firebaseapp.com",
    databaseURL: "https://glowing-carport-254019-default-rtdb.firebaseio.com",
    projectId: "glowing-carport-254019",
    storageBucket: "glowing-carport-254019.appspot.com",
    messagingSenderId: "111516440251",
    appId: "1:111516440251:web:35ac0c84f0abad27a8fb9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

// References to restaurants conforming to each dietary restriction
const allRestaurantsRef = ref(db, 'restaurants');
// const glutenFreeRestaurantsRef = query(ref(db, 'restaurants'), equalTo('yes', 'glutenFree'), equalTo('partially', 'glutenFree'));
// const dairyFreeRestaurantsRef = query(ref(db, 'restaurants'), equalTo('yes', 'dairyFree'), equalTo('partially', 'dairyFree'));
// const dairyFreeRestaurantsRef = query(ref(db, 'restaurants'), equalTo('yes', 'dairyFree'));

// General function to load restaurant data given a reference
function listRestaurants(ref, restriction) {
    // Clear the current list of restaurants
    document.getElementById("searchResult").innerHTML = '';

    // Display user-selected dietary restriction

    // Look at the given reference
    onValue(ref, (snapshot) => {
        // Look through all restaurants in the given reference
        snapshot.forEach((childSnapshot) => {
            // Create all elements of a restaurant listing
            // Create (first) row that contains all other elements
            const _rowOne = document.createElement('div');
            _rowOne.className = 'row';

            // Create first column that contains logo
            const _colOne = document.createElement('div');
            _colOne.className = 'col-4 logoDiv';
            const _img = document.createElement('img');
            _img.className = 'logo';

            // Create second column that contains name, address, and category
            const _colTwo = document.createElement('div');
            _colTwo.className = 'col';
            const _name = document.createElement('p');
            _name.className = 'restName';
            const _address = document.createElement('p');
            _address.className = 'category';
            const _category = document.createElement('p');
            _category.className = 'category';

            // Create second row that contains dietary restrictions

            // Create third column that contains website link
            const _colThree = document.createElement('div');
            _colThree.className = 'col-2';
            const _website = document.createElement('a');
            _website.role = 'button';
            _website.className = 'btn btn-info';
            _website.innerHTML = 'Website';

            // Create horizontal rule
            const _hr = document.createElement("hr");

            var satisfiesRestriction = true;
            // Look through all the data fields in each restaurant
            childSnapshot.forEach((grandchildSnapshot) => {
                // Check if restaurant satisfies the given dietary restriction
                if (grandchildSnapshot.key == restriction) {
                    if (grandchildSnapshot.val() == 'no') {
                        satisfiesRestriction = false;
                    }
                // Set required fields for each of the other components
                } else if (grandchildSnapshot.key == 'imageURL') {
                    _img.src = grandchildSnapshot.val();
                } else if (grandchildSnapshot.key == 'name') {
                    _name.innerHTML = grandchildSnapshot.val();
                } else if (grandchildSnapshot.key == 'address') {
                    _address.innerHTML = grandchildSnapshot.val();
                } else if (grandchildSnapshot.key == 'category') {
                    _category.innerHTML = grandchildSnapshot.val();
                } else if (grandchildSnapshot.key == 'websiteURL') {
                    _website.href = grandchildSnapshot.val();
                }
            })
            
            // Only add restaurant to list if it satisfies the given dietary restriction
            if (satisfiesRestriction) {
                // Add each element to their respective column
                _colOne.appendChild(_img);
                _colTwo.appendChild(_name);
                _colTwo.appendChild(_address);
                _colTwo.appendChild(_category);
                _colThree.appendChild(_website);

                // Add each of the three columns to the (first) row
                _rowOne.appendChild(_colOne);
                _rowOne.appendChild(_colTwo);
                _rowOne.appendChild(_colThree);

                // Add restaurant listing and horizontal rule to Find Restaurants page
                document.getElementById("searchResult").appendChild(_rowOne);
                document.getElementById("searchResult").appendChild(_hr);
            }
        })
    })
}

// Create 4 listeners (1 for each dietary restriction) linked to buttons on Find Restaurants page
var glutenFreeButton = document.getElementById('glutenFree');
if (glutenFreeButton) {
    glutenFreeButton.addEventListener('click', function() {
        listRestaurants(allRestaurantsRef, 'glutenFree');
    }, false);
}

var veganButton = document.getElementById('vegan');
if (veganButton) {
    veganButton.addEventListener('click', function() {
        listRestaurants(allRestaurantsRef, 'vegan');
    }, false);
}

var vegetarianButton = document.getElementById('vegetarian');
if (vegetarianButton) {
    vegetarianButton.addEventListener('click', function() {
        listRestaurants(allRestaurantsRef, 'vegetarian');
    }, false);
}

var dairyFreeButton = document.getElementById('dairyFree');
if (dairyFreeButton) {
    dairyFreeButton.addEventListener('click', function() {
        listRestaurants(allRestaurantsRef, 'dairyFree');
    }, false);
}
