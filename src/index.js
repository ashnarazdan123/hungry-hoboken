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
function listRestaurants2(ref) {
    document.getElementById("searchResult").innerHTML = '';
    onValue(ref, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.key);

            const _div = document.createElement("div", {class: 'row'});
            const _img = document.createElement("img", {class: 'logo', src: `https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg`});
            const _name = document.createElement("p");
            _name.innerHTML = childSnapshot.key;
            const _hr = document.createElement("hr");
            
            _div.appendChild(_img);
            _div.appendChild(_name);

            document.getElementById("searchResult").appendChild(_div);
            document.getElementById("searchResult").appendChild(_hr);
        })
    })
}

// Test function: load all restaurant data when Vegan button pressed
var veganButton = document.getElementById("vegan");
if (veganButton) {
    veganButton.addEventListener("click", function() {
        // document.getElementById("searchResult").innerHTML = listRestaurants(allRestaurantsRef);
        listRestaurants2(allRestaurantsRef);
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
