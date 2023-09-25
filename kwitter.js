//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAcUIKebByxJu-V3ihGxqQ_KW_vogBdLCo",
  authDomain: "dsw-projet.firebaseapp.com",
  projectId: "dsw-projet",
  storageBucket: "dsw-projet.appspot.com",
  messagingSenderId: "81412015143",
  appId: "1:81412015143:web:e32ac60ea40e96b1897a02",
  measurementId: "G-90ZQ6EVQVM"
};



// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);


   function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
