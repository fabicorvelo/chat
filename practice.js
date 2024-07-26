
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDcE4uNlHtfqQY-LwurO8x2jCa3C1tPX0c",
  authDomain: "bate-papo-3f5c4.firebaseapp.com",
  projectId: "bate-papo-3f5c4",
  storageBucket: "bate-papo-3f5c4.appspot.com",
  messagingSenderId: "733397642001",
  appId: "1:733397642001:web:6a66932444ac80c70d3ab0",
  measurementId: "G-V6SCXWVQWE"
};



// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adicionando usuário"
  });
}


