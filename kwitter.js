//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyD3ZgJ4uxytSF9zbRlKH-OsL1r8QtNBF0k",
  authDomain: "redesocial-70e77.firebaseapp.com",
  databaseURL: "https://redesocial-70e77-default-rtdb.firebaseio.com",
  projectId: "redesocial-70e77",
  storageBucket: "redesocial-70e77.appspot.com",
  messagingSenderId: "751902812611",
  appId: "1:751902812611:web:5f73cb7fac3f5d6582b576"
};



// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);


   function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
