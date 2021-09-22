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

function get()
{
    var name = document.getElementById('name').value

    firebase.database().ref('/Student_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
   
    snapshot.forEach(function(data) {
        if(data.key)
        {
            firebase.database().ref('/Student_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
                var d  = snapshot.val();
                var name  = Object.values(d);
                name.map((v,i)=> {
                    document.getElementById('firstName').value = v.First_Name;
                    document.getElementById('lastName').value = v.Last_Name;
                    document.getElementById('city').value = v.City;
                    document.getElementById('country').value = v.Country;
                    document.getElementById('education').value = v.Recent_Education;
                    document.getElementById('gender').value = v.Gender;

                })
             }, function (error) {
               alert("Error: " + error.code);
             });
        }

        else
        {
            alert("No Student Exist")
        }
    });
});

}

function update()
{
    var name  = document.getElementById('name').value
    var userKey;

    firebase.database().ref('/Student_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
   
    snapshot.forEach(function(data) {
        if(data.key)
        {
            firebase.database().ref('/Student_Record').orderByChild('First_Name').equalTo(name).on("value", function(snapshot) {
                var d  = snapshot.val();
                var name  = Object.values(d);
                name.map((v,i)=> {
                    userKey = v.Key;
                })
             }, function (error) {
               alert("Error: " + error.code);
             });
        }
    });
});

            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value
            var education = document.getElementById('education').value
            var country = document.getElementById('country').value
            var city = document.getElementById('city').value
            var gender = document.getElementById('gender').value

            var obj = 
            {
                First_Name: firstName,
                Last_Name: lastName,
                Recent_Education: education,
                Country: country,
                City: city,
                Gender: gender,
                Key: userKey
            }

            firebase.database().ref('/Student_Record').child(userKey).set(obj)
            alert("Student Record Updated Successfully!!")
}
                            