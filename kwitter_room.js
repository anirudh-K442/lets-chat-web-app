var firebaseConfig = {
    apiKey: "AIzaSyD3RlZQnP1HfLaGl9Cp-JGJ1qBkv2OquHI",
    authDomain: "lets-chat-web-app-bf7b2.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-bf7b2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lets-chat-web-app-bf7b2",
    storageBucket: "lets-chat-web-app-bf7b2.appspot.com",
    messagingSenderId: "561328131633",
    appId: "1:561328131633:web:e3bb5fbcf74752cf214f10",
    measurementId: "G-SDKNH37DZ1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRomeName(name) {
    console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}