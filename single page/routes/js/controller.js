library.controller('myController', {
    loginFunction: () => {
 alert ('hola mundo')
/*
        (function () {
            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            var uiConfig = {
                callbacks: {
                    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                        // User successfully signed in.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.
                        return true;
                    },
                    uiShown: function () {
                        // The widget is rendered.
                        // Hide the loader.
                        document.getElementById('loader').style.display = 'none';
                    }
                },
                // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
                signInFlow: 'popup',
                signInSuccessUrl: 'index.html#/forum',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
                ],

                // Terms of service url.
                tosUrl: 'index.html#/forum',


                // Privacy policy url.
                //privacyPolicyUrl: '<your-privacy-policy-url>'
            };
            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);





        })()
*/
    },
    forumFunction: () => {
        
        alert('hola')
     /* const filteredTable = document.getElementById('state-user-filter');
        let db = firebase.firestore();
        const image = document.getElementById('input.image');
        let mainApp = {};

        /*
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('select');
          var options = document.querySelectorAll('option');
          var instances = M.FormSelect.init(elems, options);
          });
    
        */
      /*  (function () {
            let firebase = app_fireBase;
            //let uid = null;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    localStorage.setItem('user', JSON.stringify(user))
                    name = user.displayName;
                    eMail = user.email;
                    photoURL = user.photoURL;
                    uid = user.uid;
                    hideLoadingshowMenu()
                } else {
                    //redirect to login page
                    uid = null;
                    window.location.replace("index.html#");
                }
            });

            console.log(name)
            //console.log(uid)


            function logOut() {
                firebase.auth().signOut();
            }
            mainApp.logOut = logOut;
        })()



        // Crea los datos y los manda a Firestote
        function send() {
            let textInput = document.getElementById('input').value;
            // let nameInput = document.getElementById('name-input').value;
            let areaInput = document.getElementById('area-select').value;
            let privateMsgChecked = document.getElementById('private').checked

            db.collection("state").add({
                    area: areaInput,
                    name: name,
                    first: textInput,
                    uid: uid,
                    private: privateMsgChecked,


                })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    let textInput = document.getElementById('input').value = '';
                    let nametInput = document.getElementById('name-input').value = '';


                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });

        }


        /*
        //filtra por tipo de contenido al dar click en el li del área impresa
        let searchGlass = document.getElementById("dropdownMenuButton");
        let areaSelection= document.getElementsByClassName('area-name');
        let listContainer= document.getElementById("area-search");
        //eventos del dom para mostrar y ocultar post
        let principalPrint = document.getElementById('principalPrint');
        let printDataFunction = document.getElementById('printDataFunction');
    
    
        //logo de steam con función de "home"
        let logoSteamHome = document.getElementById("logo-nav");
        logoSteamHome.addEventListener('click', ()=>{
          console.log ('funciona');
          filteredTable.style.display = "none";
          generalTable.style.display= "block";
        })
    
        //da eventos de click a lista de 'areas'
        searchGlass.addEventListener('click', ()=>{
          listContainer.style.display="block";
          for (let i = 0; i < areaSelection.length; i++) {
            areaSelection[i].addEventListener('click', () => {
            let areaClicked = areaSelection[i].id;
            console.log(areaClicked);
            listContainer.style.display="none";
    
            db.collection("state").where("area", "==", areaClicked).get().then(printData);
            })}})
    
        */


      /*  // imprime los datos en el muro
        db.collection("state").onSnapshot((querySnapshot) => {
            const generalTable = document.getElementById('state-user');
            generalTable.innerHTML = '';
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first}`);
                generalTable.innerHTML += `
        <div class="card  text-center alert alert-info">
           <p>${doc.data().name}</p>
          <p>${doc.data().first}</p>
          <li class="area" value="${doc.data().area}">${doc.data().area}</li>
          <p>
          <button class = "btn-floating btn-small  red accent-3" onclick = "deleteData('${doc.id}')"><i class="fas fa-trash-alt"></i></button>
          <button class = "btn-floating btn-small purple accent-3" onclick = "editState('${doc.id}','${doc.data().first}','${doc.data().name}','${doc.data().area}')"><i class="fas fa-edit"></i></button>
         <a href="https://twitter.com/share?url=https://jaurinu.github.io/CDMX007-social-network/src/&amp;text=Punto%20STEAM%20&amp;hashtags=puntosteam" target="_blank">
         <img src="https://simplesharebuttons.com/images/somacro/twitter.png" width="25 height="25" alt="Twitter" /></a>
         <button id="applause-container"><applause-button id="applause-${doc.id}" url="http://localhost:8887/${doc.id}" multiclap="true" class="applause-clase" color="Black"/></button>
         </p>
        </div>
        `
            });
        });





        //imprime los datos del filtro
        const printData = (querySnapshot) => {
            filteredTable.style.display = "block";
            filteredTable.innerHTML = "";
            querySnapshot.forEach((doc) => {
                filteredTable.innerHTML += `
        <div class="card  text-center alert alert-info">
        <p>${doc.data().name}</p>
        <p>${doc.data().first}</p>
        <p>${doc.data().image}</p>
        <li class="area" value="${doc.data().area}">${doc.data().area}</li>
          
          <p>
          <button class = "btn btn-danger btn-sm" onclick = "deleteData('${doc.id}')"><i class="fas fa-trash-alt"></i></button>
          <button class = "btn btn-warning btn-sm" onclick = "editState('${doc.id}','${doc.data().first}','${doc.data().name}','${doc.data().area}')"><i class="fas fa-edit"></i></button>
         <a href="https://twitter.com/share?url=https://jaurinu.github.io/CDMX007-social-network/src/&amp;text=Punto%20STEAM%20&amp;hashtags=puntosteam" target="_blank">
         <img src="https://simplesharebuttons.com/images/somacro/twitter.png" width="25 height="25" alt="Twitter" /></a>
         <button id="applause-container"><applause-button id="applause-${doc.id}" url="http://localhost:8887/${doc.id}" multiclap="true" class="applause-clase" color="Black"/></button>
         </p>
        </div>
        `
            });
            generalTable.style.display = "none";
        };


        //le funcion de filtrado y el 'back' al hacer el click en el logo steam funciona mostrando y ocultando
        //los divs que contiene los datos
        //nota para pasar a SPA

        // elimina los datos del muro
        function deleteData(id) {
            if (confirm('¿Realmente deseas eliminar tu mensaje?')) {
                db.collection("state").doc(id).delete().then(function () {
                    console.log("Post successfully deleted!");
                }).catch(function (error) {
                    console.error("Error removing post: ", error);
                });
            } else {
                return false;
            }
        }
        //Edita los datos
        function editState(id, state, name) {
            document.getElementById('input').value = state;
            document.getElementById('name-input').value = name;
            let editButton = document.getElementById('sendButton');
            editButton.innerHTML = "Editar";
            editButton.onclick = function () {
                var washingtonRef = db.collection("state").doc(id);
                let textInput = document.getElementById('input').value;
                let nameInput = document.getElementById('name-input').value;
                return washingtonRef.update({
                        first: textInput,
                        name: nameInput,
                    })
                    .then(function () {
                        console.log("Document successfully updated!");
                        let textInput = document.getElementById('input').value = '';
                        editButton.innerHTML = "Guardar";
                    })
                    .catch(function (error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            }
        }



        /*
        //See User
        const userProfile = document.getElementById('button-user')
        userProfile.addEventListener("click", () => {
          window.location = 'profile.html';
        })*/
    },
    conBoton: () => {
        document.getElementById('mi-boton').addEventListener('click', function () {
            alert('este es el boton')
        })

    }
})