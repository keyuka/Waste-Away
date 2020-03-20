
//placeholder number for testing.
let contentAmount = 5;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("suggested").innerHTML = '<div class="card-body">'
            + '<h4 class="card-title">Suggested Items</h4>'
            + '<h6 class="card-subtitle mb-2 text-muted">Based on your previous searches</h6>'
            + '<div id="suggested-content"></div></div>';

        document.getElementById("history").innerHTML = '<div class="card-body">'
            + '<h4 class="card-title">Your Previous Searches</h4>'
            + '<h6 class="card-subtitle mb-2 text-muted">A history of your recycling</h6>'
            + '<div id="previous-content"></div></div>';

        document.getElementById("login").setAttribute('href', 'HTML/account.html');
        document.getElementById("accountAccess").innerHTML = "My Account";

        document.getElementById("navigation").innerHTML = 
            '<li class="nav-item"><a class="nav-link" href="#common">Common</a></li>'
            + '<li class="nav-item"><a class="nav-link" href="#suggested">Suggested</a></li>'
            + '<li class="nav-item"><a class="nav-link" href="#history">Previously Searched</a></li>';

        populateSuggestedContent();
        populateHistory();
    } else {
      // No user is signed in.
    }
  });
    

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
            +'<img src="/images/pathToYourImage.png" alt="Card image">'
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