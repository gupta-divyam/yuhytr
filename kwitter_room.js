var firebaseConfig = {
      apiKey: "AIzaSyDjE_NCSibzeGkDzxvB2jnFOsQcY22WfDw",
      authDomain: "kwitter-b961c.firebaseapp.com",
      databaseURL: "https://kwitter-b961c-default-rtdb.firebaseio.com",
      projectId: "kwitter-b961c",
      storageBucket: "kwitter-b961c.appspot.com",
      messagingSenderId: "197120357522",
      appId: "1:197120357522:web:4aa64a5f5ccfed3d73624b"
    };
    firebase.initializeApp(firebaseConfig);

    var name_ = localStorage.getItem("myname")
    document.getElementById("user_name").innerHTML= "Welcome "+ name_ +"!"

    function logout(){
          localStorage.removeItem("myname")
          localStorage.removeItem("room")
          window.location ="index.html"
    }

    function Room(){
          room_name = document.getElementById("room_name").value
          localStorage.setItem("room", room_name)
       firebase.database().ref("/").child(room_name).update({
             purpose:"add"
       })

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
