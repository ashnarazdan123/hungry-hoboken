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

// Search for restaurants of each dietary restriction
// const allRestsRef = query(ref(db, 'restaurants'));
// const dairyFreeRestsRef = query(ref(db, 'restaurants'), equalTo('yes', 'dairyFree'), equalTo('partially', 'dairyFree'));
// const glutenFreeRestsRef = query(ref(db, 'restaurants'), equalTo('yes', 'glutenFree'), equalTo('partially', 'glutenFree'));
// const veganRestsRef = query(ref(db, 'restaurants'), equalTo('yes', 'vegan'), equalTo('partially', 'vegan'));
// const vegetarianRestsRef = query(ref(db, 'restaurants'), equalTo('yes', 'vegetarian'), equalTo('partially', 'vegetarian'));

function test() {
    return 'hi';
}

// var container = document.getElementById('searchResult');

// function AddItemToTable(name) {
//     let _row = document.createElement('div', {class: 'row'});
//     let _name = document.createElement('p');
//     let _hr = document.createElement('hr');

//     _name.innerHTML = name;

//     _row.appendChild(_name);
//     _row.appendChild(_hr);

//     container.appendChild(_row);
// }

// function AddAllItemsToTable(restaurant) {
//     container.innerHTML = "";
//     restaurant.forEach(element => {
//         AddItemToTable(element.name);
//     });
// }

// function GetAllDataOnce() {
//     const dbRef = ref(db);

//     get(child(dbRef, 'restaurants')).then((snapshot) => {
//         var restaurants = [];
//         snapshot.forEach(childSnapshot => {
//             restaurants.push(childSnapshot.val());
//         });

//         AddAllItemsToTable(restaurants);
//     });
// }