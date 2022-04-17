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

// Test function using Firebase
const allRestaurantsRef = ref(db, 'restaurants');
// const glutenFreeRestaurantsRef = query(ref(db, 'restaurants'), equalTo('yes', 'glutenFree'), equalTo('partially', 'glutenFree'));

onValue(allRestaurantsRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        // const childKey = childSnapshot.key;
        // const childData = childSnapshot.data;
        console.log(childSnapshot.key);
    });
}, {
    onlyOnce: true
});

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
