//ADICIONE OS LINKS DO SEU APP FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcUIKebByxJu-V3ihGxqQ_KW_vogBdLCo",
  authDomain: "dsw-projet.firebaseapp.com",
  projectId: "dsw-projet",
  storageBucket: "dsw-projet.appspot.com",
  messagingSenderId: "81412015143",
  appId: "1:81412015143:web:e32ac60ea40e96b1897a02",
  measurementId: "G-90ZQ6EVQVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


   function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
