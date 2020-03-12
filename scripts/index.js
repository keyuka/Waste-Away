


window.onload = function addUserFunctions(){
    //To test while not logged in, comment out the 2 lines below
    let user = firebase.auth().currentUser;
    if (user) {
        document.getElementById("suggested").innerHTML = '<div class="card-body">'
            + '<h4 class="card-title">Suggested Items</h4>'
            + '<h6 class="card-subtitle mb-2 text-muted">Based on your previous searches</h6>'
            + '<div id="suggested-content"></div></div>';

        document.getElementById("history").innerHTML = '<div class="card-body">'
            + '<h4 class="card-title">Your Previous Searches</h4>'
            + '<h6 class="card-subtitle mb-2 text-muted">For similar items your are throwing out</h6>'
            + '<div id="previous-content"></div></div>';

        document.getElementById("login").setAttribute('href', 'HTML/account.html');

        document.getElementById("navigation").innerHTML = 
            '<li class="nav-item"><a class="nav-link" href="#common">Common</a></li>'
            + '<li class="nav-item"><a class="nav-link" href="#suggested">Suggested</a></li>'
            + '<li class="nav-item"><a class="nav-link" href="#history">Previously Searched</a></li>'
    }
}
