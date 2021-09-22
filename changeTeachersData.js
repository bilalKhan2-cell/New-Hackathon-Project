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


function fetchData()
{
    var name = document.getElementById('teacherFirstName').value
   
    if(name=="" || name==" ")
    {
        alert("Teahcer's First Name is Required!!")
    }

    else
    {
    firebase.database().ref('/Teacher_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
   
    snapshot.forEach(function(data) {
        if(data.key)
        {
            firebase.database().ref('/Teacher_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
                var d  = snapshot.val();
                var name  = Object.values(d);
                name.map((v,i)=> {
                    document.getElementById('fname').value = v.First_Name;
                    document.getElementById('lname').value = v.Last_Name;
                    document.getElementById('city').value = v.City;
                    document.getElementById('country').value = v.Country
                    document.getElementById('birth').value = v.DOB
                    document.getElementById('gender').value = v.Gender;
                    document.getElementById('contact').value = v.Contact_Info

                })
             }, function (error) {
               alert("Error: " + error.code);
             });
        }

        else
        {
            alert("No Teacher Exist")
        }
    });
});
}
}

function change()
{
    var name = document.getElementById('teacherFirstName').value
    var catchedKey
    
    firebase.database().ref('/Teacher_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
   
    snapshot.forEach(function(data) {
        if(data.key)
        {
            firebase.database().ref('/Teacher_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
                var d  = snapshot.val();
                var name  = Object.values(d);
                name.map((v,i)=> {
              catchedKey = v.Key

                })
             }, function (error) {
               alert("Error: " + error.code);
             });
        }
    });
});

    var obj = 
    {
        First_Name: document.getElementById('fname').value,
        Last_Name: document.getElementById('lname').value,
        City: document.getElementById('city').value,
        Country: document.getElementById('country').value,
        DOB: document.getElementById('birth').value,
        Gender: document.getElementById('gender').value,
        Contact_Info: document.getElementById('contact').value,
        Course: " ",
        Key: catchedKey

    }

    firebase.database().ref('/Teacher_Record').child(catchedKey).set(obj)
    alert("Teacher Record Updated Successfully!!")
    window.location = "updateTeachers.html"

}