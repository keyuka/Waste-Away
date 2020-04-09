
//placeholder number for testing.
const MAXCONTENTAMOUNT = 10;
const BASECONTENT = 5;
let commonContent = [];
let commonCardNumber = 0;
itemsRef = db.collection("items");
document.getElementById("searchButton").onclick = openItemPage;

document.body.onload = firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    console.log(1);
    if (user) {
        console.log(2);
        document.getElementById("suggested").innerHTML = '<div class="card-body">'
            + '<h4 class="card-title">Suggested Items</h4>'
            + '<h6 class="card-subtitle mb-2 text-muted">Based on your previous searches</h6>'
            + '<div id="suggested-content"></div></div>';
    
        document.getElementById("history").innerHTML = '<div class="card-body">'
            + '<h4 class="card-title">Your Previous Searches</h4>'
            + '<h6 class="card-subtitle mb-2 text-muted">A history of your recycling</h6>'
            + '<div id="previous-content"></div></div>';
    
        document.getElementById("signin").classList.add("noDisplay");
        console.log(1);
        document.getElementById("signout").classList.remove("noDisplay");
    
        document.getElementById("navigation").innerHTML = 
            '<li class="nav-item"><a class="nav-link" href="#common">Common</a></li>'
            + '<li class="nav-item"><a class="nav-link" href="#suggested">Suggested</a></li>'
            + '<li class="nav-item"><a class="nav-link" href="#history">Previously Searched</a></li>';
    
        //populateCommon();
        //populateHistory();
    } else {
      // No user is signed in.
    }
});
  

//!!!!STILL WORKING ON!!!
window.onload = function() {

    let common = document.getElementById("commonCards");

    populateCommon(MAXCONTENTAMOUNT);
    
    itemsRef.orderBy("visits", "desc").limit(BASECONTENT).get().then(function(querySnapshot) {     
        querySnapshot.forEach(function(doc) {                
            common.innerHTML += '<div class="card">'
                + '<div class="card-body">'
                + '<p class="card-text">' + doc.data().name + '</p>'
                + '</div>'
                + '<img src = "images/' + doc.data().picture_ref + '" width = "100" height = "125" alt="Item 1" id="card' + commonCardNumber + '">'
                + '<div class="card-body">'
                + '<p class="card-text">Times Searched: ' + doc.data().visits + '</p>'
                + '</div></div>'

            commonCardNumber++;
            });
    });
}

//GENERATE BASED ON SIMILAR ITEMS
function populateSuggestedContent(){
    let content = "";
    for (let i = 0; i < contentAmount; i++){
        content +=
        '<div class="card">'
            +'<div class="card-body">'
                +'<p class="card-text">This image is in the middle</p>'
                +'</div>'
            +'<img src="/images/pathToYourImage.png" alt="Card image">'
            +'<div class="card-body">'
                +'<p class="card-text">of a card.</p>'
            +'</div>'
        +'</div>'
    }
    document.getElementById("suggested-content").innerHTML =
    '<div class="scrolling-wrapper">' + content + '</div>';
}

function populateHistory(){
    let content = "";
    for (let i = 0; i < contentAmount; i++){
        content +=
        '<div class="card">'
            +'<div class="card-body">'
                +'<p class="card-text">This image is in the middle</p>'
                +'</div>'
            +'<img src="/images/pathToYourImage.png" class = "cardImg" alt="Card image">'
            +'<div class="card-body">'
                +'<p class="card-text">of a card.</p>'
            +'</div>'
        +'</div>'
    }
    document.getElementById("previous-content").innerHTML =
    '<div class="scrolling-wrapper">' + content + '</div>';
}

//TODO: MAKE A BUTTON ("Sign Out") DYNAMICALLY CREATED BY JS THAT CALLS THIS
function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        //to return to non-logged in page
        location.reload;
      }).catch(function(error) {
        // An error happened.
      });
}

//Create sessionStorage item to pass to results page.
function openItemPage() {
    userInput = document.getElementById("userInput").value;
    window.location.href = "HTML/results.html#" + userInput;
}



//Populate a section with n number of most popular items.

function populateCommon(n) {
    // db.collection('items').orderBy('visits').get().then(
    //     function(snap){
    //         console.log(snap.data(0));
    //     }
    // );
    // console.log(commonContent);
}