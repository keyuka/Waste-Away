saveFile = function () {
  
    const name = document.getElementById("userInput");
    var userSearch = name.value;
    console.log(userSearch);

    
    db.collection('items').doc(userSearch).get().then(function (snap) {
        document.getElementById("name").innerHTML = snap.data().name;})

    db.collection('items').doc(userSearch).get().then(function (snap) {
    var img = document.createElement("IMG");
    img.src = "images/" + snap.data().picture_ref;
    document.getElementById("image").appendChild(img);})


    
    db.collection('items').doc(userSearch).get().then(function (snap) {
        document.getElementById("location").innerHTML = snap.data().disposal_location;})

     db.collection('items').doc(userSearch).get().then(function (snap) {
            document.getElementById("method").innerHTML = snap.data().disposal_method;})

         
            



    //window.location.href = "HTML/results.html";
}
