
//ADICIONE SEUS LINKS DO FIREBASE

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
  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da Sala - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
