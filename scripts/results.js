
//Add button if user is logged in.
document.body.onload = firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      document.getElementById("signin").classList.add("noDisplay");
      document.getElementById("signout").classList.remove("noDisplay");

      let btn = document.createElement("button");
      btn.classList.add("btn btn-primary btn-lg btn-block sticky-bottom");
      btn.id = "userRecycled";
      btn.innerHTML = "I just recycled this!";
      btn.onclick = userRecycled;
      document.body.appendChild(btn);
    }
});

//Adds the item to the user's collection if it doesn't exist.
//If it exists, increments the recycleNum by one. 
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