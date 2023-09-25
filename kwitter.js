// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2JoTgjKb-MpFJgBjFbkHhXk9UgCq8S2E",
  authDomain: "twitterfake-6fa35.firebaseapp.com",
  projectId: "twitterfake-6fa35",
  storageBucket: "twitterfake-6fa35.appspot.com",
  messagingSenderId: "203611270407",
  appId: "1:203611270407:web:cc8b5159861adeaf1169a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

   function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
