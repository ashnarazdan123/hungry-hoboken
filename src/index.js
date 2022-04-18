// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { equalTo, getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js"

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

// Read data: Listen for value events (test works!!)
const restNameRef = ref(db, 'restaurants/Chipotle/name');
onValue(restNameRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
})

// Test button for exports
var testbutton = document.getElementById("testbut");
if (testbutton) {
    testbutton.addEventListener("click", function() {
        console.log('test!');
    }, false);
}

// References to restaurants conforming to each dietary restriction
const allRestaurantsRef = ref(db, 'restaurants');
// const glutenFreeRestaurantsRef = query(ref(db, 'restaurants'), equalTo('yes', 'glutenFree'), equalTo('partially', 'glutenFree'));

// General function to load restaurant data given a reference
function listRestaurants1(ref) {
    console.log("inside listRestaurants");
    var totalList = ``;
    onValue(ref, (snapshot) => {
        console.log("inside onValue");
        snapshot.forEach((childSnapshot) => {
            console.log("inside snapshot.forEach");
            totalList += `<div class="row">`;
            childSnapshot.forEach((grandchildSnapshot) => {
                console.log("inside childSnapshot.forEach");
                if (grandchildSnapshot.key === 'imageURL') {
                    console.log("inside if imageURL");
                    totalList += `<img class="logo" src="${grandchildSnapshot.data}">`;
                } else if (grandchildSnapshot.key === 'name') {
                    console.log("inside if name");
                    totalList += `<p>Name:${childSnapshot.data}</p>`;
                }
            });
            totalList += `</div>`;
            totalList += `<hr>`;
        });
    }, {
        onlyOnce: true
    });
    return totalList;
}

// 2nd attempt at loading restaurant data given a reference
function listRestaurants(ref) {
    document.getElementById("searchResult").innerHTML = '';
    onValue(ref, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            // Create all elements of a restaurant listing
            // Create (first) row that contains all other elements
            const _rowOne = document.createElement('div');
            _rowOne.className = 'row';

            // Create first column that contains logo
            const _colOne = document.createElement('div');
            _colOne.className = 'col-4';
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

            // Create third column that contains website link
            const _colThree = document.createElement('div');
            _colThree.className = 'col-2';
            const _website = document.createElement('a');
            _website.role = 'button';
            _website.className = 'btn btn-info';
            _website.innerHTML = 'Website';

            // Create horizontal rule
            const _hr = document.createElement("hr");

            // Check Firebase data to set each element
            childSnapshot.forEach((grandchildSnapshot) => {
                if (grandchildSnapshot.key == 'imageURL') {
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
        })
    })
}

// Test function: load all restaurant data when Vegan button pressed
var veganButton = document.getElementById("vegan");
if (veganButton) {
    veganButton.addEventListener("click", function() {
        // document.getElementById("searchResult").innerHTML = listRestaurants(allRestaurantsRef);
        listRestaurants(allRestaurantsRef);
    }, false);
}

// Test function: logs all restaurant names
// onValue(allRestaurantsRef, (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//         // const childKey = childSnapshot.key;
//         // const childData = childSnapshot.data;
//         console.log(childSnapshot.key);
//     });
// }, {
//     onlyOnce: true
// });

// Test function: log all restaurants reference when Gluten Free button pressed
var glutenFreeButton = document.getElementById("glutenFree");
if (glutenFreeButton) {
    glutenFreeButton.addEventListener("click", function() {
        console.log(allRestaurantsRef);
    }, false);
}

// var glutenFreeButton = document.getElementById("glutenFree");
// if (glutenFreeButton) {
//     glutenFreeButton.addEventListener("click", function() {
//         console.log(glutenFreeRestaurantsRef);
//     }, false);
// }
