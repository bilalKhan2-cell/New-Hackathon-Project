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

var globalKey;
var body = document.getElementById('tbody1')
function generateFields()
{
     firebase.database().ref('/Student_Record').once('value',
     function(Data)
     {
            Data.forEach(
             function(generate)
             {
                 var name = generate.val().First_Name;
                 var lname = generate.val().Last_Name;
                 var education = generate.val().Recent_Education;
                 var country = generate.val().Country;
                 var city = generate.val().City;
                 var gender = generate.val().Gender;
                 var _globalKey = generate.val().Key;
 
                 var k = _globalKey
                    globalKey=k;
                
                    var _throw = document.createElement('tr')
                    var td1 = document.createElement('td')
                    var td2 = document.createElement('td')
                    var td3 = document.createElement('td')
                    var td4 = document.createElement('td')
                    var td5 = document.createElement('td')
                    var td6 = document.createElement('td')

                    var delBtn = document.createElement('button')
                    delBtn.setAttribute("class","btn btn-danger")
                    delBtn.setAttribute("onclick","none(this)")
                    var text = document.createTextNode("Delete")
                    delBtn.setAttribute("id",generate.val().Key)
                    delBtn.appendChild(text)
                    var td7 = document.createElement('td')
                    td7.appendChild(delBtn)
                    
                    td1.innerHTML = name
                    td2.innerHTML = lname
                    td3.innerHTML = education
                    td4.innerHTML = country
                    td5.innerHTML = city
                    td6.innerHTML = gender
                    _throw.appendChild(td1)
                    _throw.appendChild(td2)
                    _throw.appendChild(td3)
                    _throw.appendChild(td4)
                    _throw.appendChild(td5)
                    _throw.appendChild(td6)
                    _throw.appendChild(td7)
                    body.appendChild(_throw)
                            }
                        );
                    }
                    )
}

function none(e)
{
    firebase.database().ref('/Student_Record').child(e.id).remove()
    alert("Student Records Deleted Successfully!!")
    body.innerHTML = " "
    generateFields()
}