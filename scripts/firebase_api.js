//---------------------------------------------------------------------
// Your web app's Firebase configuration (9 lines of code)
// Replace the configuration with YOUR project's API information
// copied from the firebase console (settings) of your project.
//---------------------------------------------------------------------
let firebaseConfig = {
    apiKey: "AIzaSyBp-MbauNdWEvWsq1m4BVHcgwiKBWrt9jg",
    authDomain: "comp1800-project.firebaseapp.com",
    databaseURL: "https://comp1800-project.firebaseio.com",
    projectId: "comp1800-project",
    storageBucket: "comp1800-project.appspot.com",
    messagingSenderId: "4950896910",
    appId: "1:4950896910:web:67e89b49781c4d7ac6275f"
    };
//------------------------------------------------
// Initialize Firebase and Firestore reference
// Do not delete!
//------------------------------------------------
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();