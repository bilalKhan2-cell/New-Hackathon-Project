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

function registerTeacher()
{
   
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var contact = document.getElementById('contact').value;
    var birth = document.getElementById('date').value
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var gender = document.getElementById('userSelect').value;
    var course = " "

    var key = firebase.database().ref('/Teacher_Record').push().getKey()

 var obj = 
 {
    First_Name: firstName,
    Last_Name: lastName,
    Contact_Info: contact,
    DOB: birth,
    Country: country,
    City:city,
    Gender: gender,
    Course: course,
    Key: key
 }

 firebase.database().ref('/Teacher_Record').child(key).set(obj);
 alert("Teacher Registered Successfully");
 window.location = "addTeacher.html"

}