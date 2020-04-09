
//placeholder number for testing.
const MAXCONTENTAMOUNT = 10;
const BASECONTENT = 5;
let commonContent = [];
let itemsRef = db.collection("items");
let userItemRef;
document.getElementById("itemInfo").onclick = openItemPage;

//Loads user specific features on the home page.
document.body.onload = firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        userItemRef = db.collection("user_" + user.displayName);

        document.getElementById("history").innerHTML = '<div class="card-body">'
            + '<h4 class="card-title">What you have previously recycled</h4>'
            + '<h6 class="card-subtitle mb-2 text-muted">Deferred from landfills, great job!</h6>'
            + '<div id="previous-content"></div></div>';
    
        document.getElementById("signin").classList.add("noDisplay");
        document.getElementById("signout").classList.remove("noDisplay");
    
        document.getElementById("navigation").innerHTML = 
            '<li class="nav-item"><a class="nav-link" href="#common" >Common Items</a></li>'
            + '<li class="nav-item"><a class="nav-link" href="#history">Previously Recycled</a></li>';
        populateHistory();
    } else {
      // No user is signed in.
    }
});
  
//Loads and populates the common item sections.
window.onload = function() {

    let common = document.getElementById("commonCards");
    let commonCardNumber = 0;

    itemsRef.orderBy("visits", "desc").limit(BASECONTENT).get().then(function(querySnapshot) {     
        querySnapshot.forEach(function(doc) {  
            let lower = doc.data().name;
            let upper = lower.charAt(0).toUpperCase() + lower.substring(1);          
            common.innerHTML += '<div class="card" style = "width: 10rem;" href = "HTML/results.html#"' + doc.data().name + '">'
                + '<div class="card-body">'
                + '<p class="card-text">' + upper + '</p>'
                + '</div>'
                + '<img src = "images/' + doc.data().picture_ref 
                + '" class="cardimg" alt="Item 1">'
                + '<div class="card-body">'
                + '<p class="card-text">Times Searched: ' + doc.data().visits + '</p>'
                + '<a href="HTML/results.html#' + doc.data().name + '" class="btn btn-primary stretched-link">Go to page</a>'
                + '</div></div>';
            commonCardNumber++;
            });
    });
}

//Populates the recycling history section.
function populateHistory(){
    let count = 1;
    document.getElementById("history").innerHTML +=
    '<table class="table">'
        + '<thead class="thead-dark">'
            + '<tr>'
                + '<th scope="col">#</th>'
                + '<th scope="col">Item Name</th>'
                + '<th scope="col">Recycled</th>'
            + '</tr>'
        + '</thead>'
        + '<tbody id="tbody"></tbody>'
    + '</table>'

    userItemRef.orderBy("recycleNum", "desc").get().then(function(querySnapshot) {     
        querySnapshot.forEach(function(doc) {  
                let lower = doc.data().name;
                let upper = lower.charAt(0).toUpperCase() + lower.substring(1);          
                document.getElementById("tbody").innerHTML +=
                '<tr>'
                    + '<th scope="row">' + count + '</th>'
                    + '<td>' + upper + '</td>'
                    + '<td>' + doc.data().recycleNum + '</td>'
                + '</tr>';
            count++;
            });
    });
}

//Signs the user out.
function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        //to return to non-logged in page
        location.reload();
      }).catch(function(error) {
        // An error happened.
      });
}

//Passes hash item name to results page for display.
function openItemPage() {
    userInput = document.getElementById("userInput").value;
    window.location.href = "HTML/results.html#" + userInput;
}

function openResultsPage() {
    userInput = document.getElementById("userInput").value;
    window.location.href = "HTML/searchResults.html?" + userInput;
}
