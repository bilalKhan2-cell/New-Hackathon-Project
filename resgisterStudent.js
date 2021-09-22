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
//console.log(firebase);

function submitData()
{
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var education = document.getElementById('education').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var gender = document.getElementById('userSelect').value;
    var key = firebase.database().ref('/Student_Record').push().getKey()
 var obj = 
 {
      First_Name: firstName,
      Last_Name: lastName,
      Recent_Education: education,
      Country :country,
      City: city,
      Gender: gender,
      Key: key
  }

 firebase.database().ref('/Student_Record').child(key).set(obj);
 alert("Student Registered Successfully");

}