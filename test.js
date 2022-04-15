// const database = require("firebase/database");
import { idk } from "./firebase/database.js";
// const idk = require('firebase/database');

function test() {
    console.log("hello");
    return 'hi';
}

let testidbutton = document.getElementById("testid");

testidbutton.addEventListener("click", test);
console.log(idk);

// This is the script that's linked to restaurants.html