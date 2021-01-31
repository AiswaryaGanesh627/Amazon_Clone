import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAGfcyiI5A3OBiXBZcPCxRH7NGUYVGnpFk",
    authDomain: "clone-c4e10.firebaseapp.com",
    databaseURL: "https://clone-c4e10.firebaseio.com",
    projectId: "clone-c4e10",
    storageBucket: "clone-c4e10.appspot.com",
    messagingSenderId: "96681882531",
    appId: "1:96681882531:web:eacd2bb51e45c5cdc2e016",
    measurementId: "G-J8BH0M4L8E",

});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };