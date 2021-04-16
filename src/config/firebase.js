import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



      const firebaseConfig = {
    apiKey: "AIzaSyAuUoJ4islSKVPtEF2aYlhZESganqdCTMc",
    authDomain: "bd-del-login.firebaseapp.com",
    projectId: "bd-del-login",
    storageBucket: "bd-del-login.appspot.com",
    messagingSenderId: "478138430284",
    appId: "1:478138430284:web:e3a438d9b841ab067d15e9",
    measurementId: "G-1ZFR7WGJCS"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
export {
    db,
    googleAuthProvider,
    firebase
}
