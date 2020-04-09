let userSearch;
let btn;
//Check to see if hash was passed, then loads corresponding item info.
window.onload = function () {
    if (window.location.hash) {
        console.log("The hash was passed!");
        userSearch = window.location.hash.substring(1);
        showItem(userSearch);
    }

    //Adds a button if the user is logged in.
    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
          document.getElementById("signin").classList.add("noDisplay");
          document.getElementById("signout").classList.remove("noDisplay");
          btn = document.createElement("button");
          btn.classList.add("btn", "btn-primary", "btn-lg", "btn-block");
          btn.id = "userRecycled";
          btn.innerHTML = "I just recycled this!";
          btn.onclick = userRecycled;
          document.getElementById("button").appendChild(btn);
        }
    });
}

//Initiates item search function.
document.getElementById("searchButton").onclick = function () {
    userSearch = document.getElementById("userInput").value;

    showItem(userSearch);

};

//Retrieves the item's information from the DB.
function showItem(userSearch) {

    db.collection('items').doc(userSearch.toLowerCase()).get().then(function (snap) {
        document.getElementById("name").innerHTML = snap.data().name;
    }).catch(function (error) {
       window.alert("Could not find Item: Search for another item.", error);
    });

    db.collection('items').doc(userSearch.toLowerCase()).get().then(function (snap) {
        let img = document.createElement("IMG");
        img.src = "../images/" + snap.data().picture_ref;
        img.id = "current";
        if (document.getElementById("image").hasChildNodes()) {
            document.getElementById("image").replaceChild(img, document.getElementById("current"));
        } else {
            document.getElementById("image").appendChild(img);
        }
        db.collection('items').doc(userSearch.toLowerCase()).update({
            visits: snap.data().visits + 1
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });

    }).catch(function (error) {
        console.log("Could not find Item: ", error);
    });

    db.collection('items').doc(userSearch.toLowerCase()).get().then(function (snap) {
        document.getElementById("disposalLocation").innerHTML = "Disposal Location:";
        document.getElementById("location").innerHTML = snap.data().disposal_location;
        
    }).catch(function (error) {
        console.log("Could not find Item: ", error);
    });

    db.collection('items').doc(userSearch.toLowerCase()).get().then(function (snap) {
        document.getElementById("disposalMethod").innerHTML = "Disposal Method:";
      
        document.getElementById("method").innerHTML = snap.data().disposal_method;

    }).catch(function (error) {
        console.log("Could not find Item: ", error);
    });
}

//If item wasn't recycled before, adds it to the user's collection.
//If it was, increases the number recycled by 1.
function userRecycled(){
  let item = document.getElementById("name").textContent.toLowerCase();
  let user = firebase.auth().currentUser;
  if (user) {
    let name = user.displayName;
    let collection = "user_" + user.displayName;
    console.log(collection);
    let userRef = db.collection(collection).doc(item)
    userRef.get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
            let newNum = docSnapshot.data().recycleNum + 1;
            userRef.update({
              recycleNum: newNum
            })
        } else {
          userRef.set({
            recycleNum: 1,
            name: item
          })
        }
    });
  }
  btn.innerHTML = "Nice! Thanks for recycling!";
}








