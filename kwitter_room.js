
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCaeJswQY_0ZvDwG5Qb8q3j0ojiua1Lgds",
      authDomain: "qitter-e7e07.firebaseapp.com",
      databaseURL: "https://qitter-e7e07-default-rtdb.firebaseio.com",
      projectId: "qitter-e7e07",
      storageBucket: "qitter-e7e07.appspot.com",
      messagingSenderId: "341574818314",
      appId: "1:341574818314:web:9bff111ba24b38db409df3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function logout(){
      window.location ="index.html";
      }
      function addRoom(){
            {
                  add_Room= document.getElementById("room_name").value;
                  firebase.database().ref("/").child(add_Room).update({
                      purpose : "logout"
                  });
                  
                  }
      }
      function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();