let userSearch;

//Check to see if hash was passed, then loads corresponding item info.
window.onload = function () {
    if (window.location.hash) {
        console.log("The hash was passed!");
        userSearch = window.location.hash.substring(1);
        showItem(userSearch);
    }
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
        document.getElementById("location").innerHTML = snap.data().disposal_location;
        document.getElementById("disposalLocation").innerHTML = "Disposal Location:";
   
    }).catch(function (error) {
        console.log("Could not find Item: ", error);
    });


    db.collection('items').doc(userSearch.toLowerCase()).get().then(function (snap) {
        document.getElementById("method").innerHTML = snap.data().disposal_method;
        document.getElementById("disposalMethod").innerHTML = "Disposal Method:";
      
    }).catch(function (error) {
        console.log("Could not find Item: ", error);
    });



}









