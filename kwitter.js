const firebaseConfig = {
  apiKey: "AIzaSyA2JoTgjKb-MpFJgBjFbkHhXk9UgCq8S2E",
  authDomain: "twitterfake-6fa35.firebaseapp.com",
  databaseURL: "https://twitterfake-6fa35-default-rtdb.firebaseio.com",
  projectId: "twitterfake-6fa35",
  storageBucket: "twitterfake-6fa35.appspot.com",
  messagingSenderId: "203611270407",
  appId: "1:203611270407:web:282645d6f3ea412b1169a2"
};

    firebase.initializeApp(firebaseConfig);

   function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
