//YOUR FIREBASE LINKS
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
      room_name=localStorage.getItem("name- ");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
