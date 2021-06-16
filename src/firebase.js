import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCVCewhvZ3y-J3Bf5jLxeon50512Vkxn8k",
  authDomain: "sparsh-messanger.firebaseapp.com",
  projectId: "sparsh-messanger",
  storageBucket: "sparsh-messanger.appspot.com",
  messagingSenderId: "157108176994",
  appId: "1:157108176994:web:3842c71d9004741c01a93b",
  measurementId: "G-K1ZB91Y0XQ"
});

const db = firebaseApp.firestore();

export default db;