var firebaseConfig = {
      apiKey: "AIzaSyAM3R3P56--UYg0HEdGc1Dz6FgMrq837pc",
      authDomain: "kwitter-e7d56.firebaseapp.com",
      databaseURL: "https://kwitter-e7d56-default-rtdb.firebaseio.com",
      projectId: "kwitter-e7d56",
      storageBucket: "kwitter-e7d56.appspot.com",
      messagingSenderId: "686633475578",
      appId: "1:686633475578:web:8e7a3147f90e0021fc5843"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}