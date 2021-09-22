const firebaseConfig = {
    apiKey: "AIzaSyAbN8L7XxQCXUPgdwX5fbr8YA9TaaSfivY",
    authDomain: "eportal-99406.firebaseapp.com",
    projectId: "eportal-99406",
    storageBucket: "eportal-99406.appspot.com",
    messagingSenderId: "29618620050",
    appId: "1:29618620050:web:06beb71aa786292524084b",
    measurementId: "G-6MLXQ72T7H"
  };

  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

function submit() {
    var method = document.getElementById('select').value;
    if(method==" ")
    {
        alert("First Select Valid Registration Method")
    }
    else
    {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     firebase.auth().createUserWithEmailAndPassword(email, password )
     .then((result) => {
       var user = result.user;

       var obj = {  
           email : email,
           password :password,
           uid : user.uid,
           type : method
       }

       firebase.database().ref(`/${method}`).child(user.uid).set(obj)
       .then((data)=>{
             })
       .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        alert(errorMessage)

      });
     })
    }
}