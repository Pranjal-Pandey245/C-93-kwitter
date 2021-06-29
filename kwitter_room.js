
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCmTF1cOxvQnb5GOoE11n0h0XYmp13MAxg",
      authDomain: "kwitter-6bbef.firebaseapp.com",
      databaseURL: "https://kwitter-6bbef-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bbef",
      storageBucket: "kwitter-6bbef.appspot.com",
      messagingSenderId: "656759158864",
      appId: "1:656759158864:web:613282f9e3ded489933955"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user=");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_room.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("name- ", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user=");
      localStorage.removeItem("name- ");
      window.location="index.html";
}
