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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-",+Room_names);
      row="<div class='room_name' id='+Room_names+' onclick='rederectToRoomName(this.id)'># "+Room_names+" </div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function rederectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
