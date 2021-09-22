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

function checkUser() {
    var email = document.getElementById('user').value
    var password = document.getElementById('password').value
    var type = document.getElementById('userSelect').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            var user = result.user;
            console.log(user)
            console.log("User Email :", user.email)
            console.log("User Uid :", user.uid)

            localStorage.setItem('Current_user Uid', user.uid)

            firebase.database().ref('/Admin').orderByChild('uid')
                .equalTo(user.uid)
                .once('value')
                .then((snap) => {
                    var data = snap.toJSON()

                    if (data == null) {
                        firebase.database().ref('/Student').orderByChild('uid')
                            .equalTo(user.uid)
                            .once('value')
                            .then((snap) => {
                                var data = snap.JSON()

                                if (data == null) {
                                    firebase.database().ref('/Teacher').orderByChild('uid')
                                        .equalTo(user.uid)
                                        .once('value')
                                        .then((snap) => {
                                            var data = snap.toJSON()

                                            if (data == null) {
                                                alert("No Such User Exist")
                                            }
                                            else {
                                                window.location = "welcome.html";
                                            }
                                        })
                                }
                                else {
                                    console.log("Student Successfully Login")
                                    window.location = "welcome.html";
                                }
                            })

                    }
                    else {
                        alert("Login Successfully")
                        window.location = "welcome.html"
                    }

                })
        })
}