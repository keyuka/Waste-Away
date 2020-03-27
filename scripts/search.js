saveFile = function () {
    const name = document.getElementById("userInput");
    var userSearch = name.value;
    console.log(userSearch);
    var data = db.collection('items').doc(userSearch);
    data.onSnapshot(function (c) {
        console.log("Current data: ", c.data());
        document.getElementById("here").innerHTML = c.data().value;
        });
 
}
