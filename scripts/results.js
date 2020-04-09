firebase.initializeApp(config);
var firestore = firebase.firestore();
var docRef = firestore.collection("items");
var showat2 = document.querySelector("HTML/results.html");
var loadbutton = document.querySelector("#loadButton");
var inputTextField = document.querySelector("#searchBar");
loadbutton.addEventListener("click",function(){
    docRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const myData = doc.data();
                        if(myData.dname == inputTextField.value){

               showat2.innerHTML += myData.dname+" "+myData.dno+myData.no ;  
                  inputTextField.innerHTML = " ";
        }                  

      });
    }).catch(function(error){
    console.log("error: "+error);
  });
});

db.collection("items").where(userSearch.toLowerCase(), "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })

//Add button if user is logged in.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(1);
      let btn = document.createElement("button");
      btn.classList.add("btn btn-primary btn-lg btn-block");
      btn.id = "userRecycled";
      btn.innerHTML = "I just recycled this!";
      btn.onclick = userRecycled;
      document.body.appendChild(btn);
    }
});

function userRecycled(){
  let item = document.getElementById("name").textContent.toLowerCase;
  let user = firebase.auth().currentUser;
  if (user) {
    let name = user.displayName;
    let userRef = db.collection("user_" + user.displayName).doc(item)
    userRef.get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            let newNum = userRef.data().recycleNum + 1;
            userRef.update({
              recycleNum: newNum
            })
          });
        } else {
          usersRef.set({
            recycleNum: 1,
            name: item
          })
        }
    });
  }
}