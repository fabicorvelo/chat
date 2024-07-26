
//ADICIONE SEUS LINKS DO FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyDcE4uNlHtfqQY-LwurO8x2jCa3C1tPX0c",
  authDomain: "bate-papo-3f5c4.firebaseapp.com",
  projectId: "bate-papo-3f5c4",
  storageBucket: "bate-papo-3f5c4.appspot.com",
  messagingSenderId: "733397642001",
  appId: "1:733397642001:web:6a66932444ac80c70d3ab0",
  measurementId: "G-V6SCXWVQWE"
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
